<?php
/**
 * Created by PhpStorm.
 * User: aasiimwe
 * Date: 9/19/2015
 * Time: 11:26 PM
 */

if (!defined('BASEPATH')) exit('No direct script access allowed');

class SgHome extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->load->library('session');
        $this->load->helper('form');
        $this->load->helper('url');
        $this->load->helper('html');
        $this->load->helper('utility');
        $this->load->database();
        $this->load->library('form_validation');
        $this->load->model('Setups_model');
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
            $this->load->view('home_view');
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
                        redirect("SgUserProfile/index");


                    }


                } else {
                    $this->session->set_flashdata('msg_login', '<div class="alert alert-danger text-center">Invalid username and password!</div>');
                    redirect('SgHome/index');
                }
            } //if validation fails
            else {
                redirect('SgHome/index');
            }
        }
    }

    public function register_form()
    {
        //get the posted filter values
        $pageAndFilterParameters = array(
            'page_name' => 'User Register Form',
        );
        $this->session->set_userdata($pageAndFilterParameters);

        $this->load->view('header');
        $this->load->view('left_nav_menu');
        $this->load->view('SgMain/sg_register_view');
        $this->load->view('footer');
        $this->load->view('footer_close_tags');
    }

    public function register_form_part_two()
    {
        //get the posted filter values
        $pageAndFilterParameters = array(
            'page_name' => 'Register part two',
        );
        $this->session->set_userdata($pageAndFilterParameters);

        $data['country'] = $this->Setups_model->get_country();
        $data['ethnicity'] = $this->Setups_model->get_ethnicity();
        $data['body_type'] = $this->Setups_model->get_body_type();
        $data['relationship_status'] = $this->Setups_model->get_relationship_status();
        $data['travelling_with'] = $this->Setups_model->get_travelling_with();
        $data['height'] = $this->Setups_model->get_heights();
        $data['education'] = $this->Setups_model->get_education();
        $data['religion'] = $this->Setups_model->get_religion();
        $data['children'] = $this->Setups_model->get_children();
        $data['smoking'] = $this->Setups_model->get_smoking();
        $data['drinking'] = $this->Setups_model->get_drinking();


        $this->load->view('header', $data);
        $this->load->view('left_nav_menu', $data);
        $this->load->view('SgMain/sg_register_part_two_view', $data);
        $this->load->view('footer', $data);
        $this->load->view('footer_close_tags');
    }

    public function register_submit_part_two()
    {
        $data['country'] = $this->Setups_model->get_country();
        $data['ethnicity'] = $this->Setups_model->get_ethnicity();
        $data['body_type'] = $this->Setups_model->get_body_type();
        $data['relationship_status'] = $this->Setups_model->get_relationship_status();
        $data['travelling_with'] = $this->Setups_model->get_travelling_with();
        $data['height'] = $this->Setups_model->get_heights();
        $data['education'] = $this->Setups_model->get_education();
        $data['religion'] = $this->Setups_model->get_religion();
        $data['children'] = $this->Setups_model->get_children();
        $data['smoking'] = $this->Setups_model->get_smoking();
        $data['drinking'] = $this->Setups_model->get_drinking();


        //Mandatory
        $this->form_validation->set_rules("ethnicity", "Ethnicity", "trim|required|callback_combo_check_ethnicity");
        $this->form_validation->set_rules("body_type", "Body Type", "trim|required|callback_combo_check_body_type");
        $this->form_validation->set_rules("relationship_status", "Relationship Status", "trim|required|callback_combo_check_relationship_status");
        $this->form_validation->set_rules("travelling_with", "Travelling With", "trim|required|callback_combo_check_travelling_with");
        $this->form_validation->set_rules("looking_for[]", "Looking For", "trim|required|callback_validate_check_box_options");
        $this->form_validation->set_rules("location", "Location", "trim|required");
        $this->form_validation->set_rules("street_number", "Street Number", "trim");
        $this->form_validation->set_rules("route", "Route", "trim");
        $this->form_validation->set_rules("locality", "Locality", "trim");
        $this->form_validation->set_rules("administrative_area_level_1", "Administrative Area Level 1", "trim");
        $this->form_validation->set_rules("postal_code", "Postal Code", "trim");
        $this->form_validation->set_rules("country", "Country", "trim|required");
        $this->form_validation->set_rules("self_description", "Self Description", "trim|required|min_length[20]");

        //Non mandatory
        $this->form_validation->set_rules("height", "Height", "trim");
        $this->form_validation->set_rules("education", "Education", "trim");
        $this->form_validation->set_rules("religion", "Religion", "trim");
        $this->form_validation->set_rules("children", "Children", "trim");
        $this->form_validation->set_rules("smoking", "Smoking", "trim");
        $this->form_validation->set_rules("drinking", "Drinking", "trim");
        $this->form_validation->set_rules("why_travel", "Why Travel", "trim|min_length[20]");


        if ($this->form_validation->run() == FALSE) {
            //failed validation
            $this->load->view('header');
            $this->load->view('left_nav_menu', $data);
            $this->load->view('SgMain/sg_register_part_two_view', $data);
            $this->load->view('footer', $data);
            $this->load->view('footer_close_tags');
        } else {
            //passed validation
            $s = substr(str_shuffle(str_repeat(defaultRandomStringArray, 6)), 0, 6);
            $userId = 112;
            $lookingFor_options = '';
            for ($x = 0; $x < count($this->input->post('looking_for')); $x++) {
                $looking_for = $this->input->post('looking_for')[$x];
                $lookingFor_options .= $looking_for . ",";
            }
            $data_to_insert = array(
                'ethnicity' => empty_clean_select($this->input->post('ethnicity')),
                'body_type' => empty_clean_select($this->input->post('body_type')),
                'relationship_status' => empty_clean_select($this->input->post('relationship_status')),
                'travelling_with' => empty_clean_select($this->input->post('travelling_with')),
                'looking_for' => $lookingFor_options,
                'location' => $this->input->post('location'),
                'street_number' => $this->input->post('street_number'),
                'route' => $this->input->post('route'),
                'locality' => $this->input->post('locality'),
                'administrative_area_level_1' => $this->input->post('administrative_area_level_1'),
                'postal_code' => (!empty($this->input->post('postal_code'))) ? ($this->input->post('postal_code')) : 0,
                'country_text' => $this->input->post('country_text'),
                'self_description' => $this->input->post('self_description'),
                'height' => empty_clean_select($this->input->post('height')),
                'education' => empty_clean_select($this->input->post('education')),
                'religion' => empty_clean_select($this->input->post('religion')),
                'children' => empty_clean_select($this->input->post('children')),
                'smoking' => empty_clean_select($this->input->post('smoking')),
                'drinking' => empty_clean_select($this->input->post('drinking')),
                'why_travel' => $this->input->post('why_travel')
            );

            //insert the form data into database
            $this->db->where('tbl_userId', $userId);
            $this->db->update('tbl_users', $data_to_insert);

            //display success message
            $this->session->set_flashdata('msg_sg_register_part_two', '<div class="alert alert-success text-center">Your User Profile has been updated</div>');
            redirect('SgHome/register_form_part_two');
        }
    }

    public function register_submit()
    {
        $data = '';

        //set validations
        $this->form_validation->set_rules("username", "Username", 'trim|required|min_length[5]|max_length[20]|callback_alpha_space_only');
        $this->form_validation->set_rules("email_add", "Email Address", "trim|required|valid_email");
        $this->form_validation->set_rules("password", "Safe Password", "trim|required|min_length[8]");
        $this->form_validation->set_rules("cpassword", "Confirm Password", "trim|required|matches[password]");
        $this->form_validation->set_rules("promo_code", "Promo Code", "trim");
        $this->form_validation->set_rules("privacy_policy", "Privacy Policy Check", "trim|callback_accept_terms");


        if ($this->form_validation->run() == FALSE) {
            //failed validation
            $this->load->view('header');
            $this->load->view('left_nav_menu', $data);
            $this->load->view('SgMain/sg_register_view', $data);
            $this->load->view('footer', $data);
            $this->load->view('footer_close_tags');
        } else {
            //passed validation
            $s = substr(str_shuffle(str_repeat(defaultRandomStringArray, 6)), 0, 6);
            $data_to_insert = array(
                'country' => null,
                'state' => null,
                'groupCode' => null,
                'userName' => $this->input->post('username'),
                'fullNames' => null,
                'password' => md5($this->input->post('password')),
                'EncryptionHint' => $s . $this->input->post('password'),
                'EnteredBy' => null,
                'EntryDate' => date('Y-m-d h:i:s'),
                'userStatus' => 'Active',
                'email' => $this->input->post('email_add'),
                'dob' => null,
                'gender' => null,
                'emailStatus' => 'Not Sent',
                'updatedby' => null
            );

            //insert the form data into database
            $this->db->insert('tbl_users', $data_to_insert);

            //display success message
            $this->session->set_flashdata('msg_sg_register', '<div class="alert alert-success text-center">Your User Profile has successfully been captured</div>');
            redirect('SgHome/register_form_part_two');
        }
    }

    public function logout()
    {
        $this->session->sess_destroy();
        redirect('SgHome/index');
    }

    function alpha_space_only($str)
    {
        if (!preg_match("/^[a-zA-Z ]+$/", $str)) {
            $this->form_validation->set_message('alpha_space_only', 'The %s field must contain only alphabets and space');
            return FALSE;
        } else {
            return TRUE;
        }
    }

    function combo_check_ethnicity($str)
    {
        if ($str == '-select ethnicity-') {
            $this->form_validation->set_message('combo_check_ethnicity', 'Valid %s Name is required');
            return FALSE;
        } else {
            return TRUE;
        }
    }

    function combo_check_body_type($str)
    {
        if ($str == '-select body type-') {
            $this->form_validation->set_message('combo_check_body_type', 'Valid %s Name is required');
            return FALSE;
        } else {
            return TRUE;
        }
    }

    function combo_check_relationship_status($str)
    {
        if ($str == '-select relationship status-') {
            $this->form_validation->set_message('combo_check_relationship_status', 'Valid %s Name is required');
            return FALSE;
        } else {
            return TRUE;
        }
    }

    function combo_check_travelling_with($str)
    {
        if ($str == '-select travelling with-') {
            $this->form_validation->set_message('combo_check_travelling_with', 'Valid %s Name is required');
            return FALSE;
        } else {
            return TRUE;
        }
    }

    function combo_check_height($str)
    {
        if ($str == '-select your height-') {
            $this->form_validation->set_message('combo_check_height', 'Valid %s Name is required');
            return FALSE;
        } else {
            return TRUE;
        }
    }

    function combo_check_education($str)
    {
        if ($str == '-select your education-') {
            $this->form_validation->set_message('combo_check_education', 'Valid %s Name is required');
            return FALSE;
        } else {
            return TRUE;
        }
    }

    function combo_check_religion($str)
    {
        if ($str == '-select your religion-') {
            $this->form_validation->set_message('combo_check_religion', 'Valid %s Name is required');
            return FALSE;
        } else {
            return TRUE;
        }
    }

    function combo_check_children($str)
    {
        if ($str == '-select number of children-') {
            $this->form_validation->set_message('combo_check_children', 'Valid number of %s  is required');
            return FALSE;
        } else {
            return TRUE;
        }
    }

    function combo_check_smoking($str)
    {
        if ($str == '-select smoking habit-') {
            $this->form_validation->set_message('combo_check_smoking', 'Valid %s habit is required');
            return FALSE;
        } else {
            return TRUE;
        }
    }

    function combo_check_drinking($str)
    {
        if ($str == '-select drinking habit-') {
            $this->form_validation->set_message('combo_check_drinking', 'Valid %s habit is required');
            return FALSE;
        } else {
            return TRUE;
        }
    }

    function validate_check_box_options($str)
    {
        if (!empty($str)) {
            return TRUE;
        }
        $this->form_validation->set_message('validate_check_box_options', 'Please check at least one option');
        return FALSE;
    }


}