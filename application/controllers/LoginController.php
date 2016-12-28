<?php
/**
 * Created by PhpStorm.
 * User: aasiimwe
 * Date: 9/19/2015
 * Time: 11:26 PM
 */

if (!defined('BASEPATH')) exit('No direct script access allowed');

class LoginController extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->load->library('session');
        $this->load->helper('form');
        $this->load->helper('url');
        $this->load->helper('html');
        $this->load->database();
        $this->load->library('form_validation');
        //load the login model
        $this->load->model('Login_model');
    }

    public function index()
    {
        //get the posted values
        $username = $this->input->post("txt_username");
        $password = $this->input->post("txt_password");

        //set validations
        $this->form_validation->set_rules("txt_username", "Username", "trim|required");
        $this->form_validation->set_rules("txt_password", "Password", "trim|required");

        if ($this->form_validation->run() == FALSE) {
            //validation fails
            $this->load->view('login_view');
        } else {
            //validation succeeds
            if ($this->input->post('btn_login') == "Login") {
                //check if username and password is correct
                $usr_result = $this->Login_model->getUserData($username, $password);
                if ($usr_result > 0) //active user record is present
                {
                    $data['data_get_creds'] = $this->Login_model->getUserData($username, $password);

                    //set the session variables
                    foreach ($data['data_get_creds'] as $row) {

                        $data['data_last_reported'] = $this->Login_model->getLastReportedDate($row->tbl_user_groupsId, $row->tbl_userId);
                        foreach ($data['data_last_reported'] as $rowRep) {
                            $dateLastReported = $rowRep->dateLastReported;
                        }

                        $sessiondata = array(

                            'ipAddress' => $_SERVER['REMOTE_ADDR'],
                            'user_id' => $row->tbl_userId,
                            'user_name' => $row->userName,
                            'name' => $row->fullNames,
                            'role_id' => $row->tbl_user_groupsId,
                            'UserGroup' => $row->groupCode,
                            'countryNameLogin' => $row->countryName,
                            'dateLastReported' => $dateLastReported,
                            'loginuser' => TRUE
                        );
                        $this->session->set_userdata($sessiondata);
                        $this->Login_model->Login_systemLogs();

                        if (!in_array(($row->tbl_user_groupsId), array('5', '6', '13', '14'), true)) {
                            redirect("DashboardController/index");
                        } else {

                            redirect("DashboardController/salesDashboard");

                        }


                    }


                } else {
                    $this->session->set_flashdata('msg', '<div class="alert alert-danger text-center">Invalid username and password!</div>');
                    redirect('LoginController/index');
                }
            } //if validation fails
            else {
                redirect('LoginController/index');
            }
        }
    }

    public function register()   {
        //set validations
        $this->form_validation->set_rules("username", "Username", 'trim|required|min_length[5]|max_length[12]|xss_clean|callback_alpha_space_only');
        $this->form_validation->set_rules("email_add", "Email Address", "trim|required|valid_email");
        $this->form_validation->set_rules("password", "Safe Password", "trim|required|min_length[8]");
        $this->form_validation->set_rules("cpassword", "Confirm Password", "trim|required|matches[password]");
        $this->form_validation->set_rules("promo_code", "Promo Code", "trim|required");
        $this->form_validation->set_rules("privacy_policy", "Privacy Policy", "trim|required");


        if ($this->form_validation->run() == TRUE) {
            echo('yes');
        } else {
            echo('no');
        }
    }

    public function logout()
    {
        $this->session->sess_destroy();
        redirect('LoginController/index');
    }

    //custom validation function to accept alphabets and space
    function alpha_space_only($str)
    {
        if (!preg_match("/^[a-zA-Z ]+$/", $str)) {
            $this->form_validation->set_message('alpha_space_only', 'The %s field must contain only alphabets and space');
            return FALSE;
        } else {
            return TRUE;
        }
    }


}