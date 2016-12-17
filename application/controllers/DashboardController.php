<?php
/**
 * Created by PhpStorm.
 * User: aasiimwe
 * Date: 9/25/2015
 * Time: 11:55 AM
 */

if (!defined('BASEPATH')) exit('No direct script access allowed');

class DashboardController extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->load->library('session');
        $this->load->helper('form');
        $this->load->helper('url');
        $this->load->helper('html');
        // $this->load->database();
        $this->load->library('form_validation');
        //load the Dashboard model
        $this->load->model('Dashboard_model');
        $this->load->library('pagination');
    }


    public function example1()
    {
        $config = array();
        $config["base_url"] = base_url() . "DashboardController/example1";
        $config["total_rows"] = $this->Dashboard_model->record_count();
        $config["per_page"] = 3;
        $config["uri_segment"] = 3;

        $this->pagination->initialize($config);

        $page = ($this->uri->segment(3)) ? $this->uri->segment(3) : 0;
        $data["results"] = $this->Dashboard_model->fetch_dashboards($config["per_page"], $page);
        $data["links"] = $this->pagination->create_links();

        $this->load->view("pagination_view", $data);
    }


    public function index()
    {
        $data['data_get'] = $this->Dashboard_model->view();
        /*$this->load->view('header');
        $this->load->view('left_nav_menu');
        $this->load->view('Dashboard/dashboard_view', $data);
        $this->load->view('footer');*/

        $this->load->view('Dashboard/dashboardImported_view', $data);
    }

    function add()
    {
        $this->load->view('header');
        $this->load->view('left_nav_menu');
        $this->load->view('Dashboard/dashboardNew_view');
        $this->load->view('footer');
    }

    function edit()
    {
        $kd = $this->uri->segment(3);
        if ($kd == NULL) {
            redirect('DashboardController');
        }

        $dt = $this->Dashboard_model->edit($kd);
        $data['fn'] = $dt->firstname;
        $data['ln'] = $dt->lastname;
        $data['ag'] = $dt->age;
        $data['ad'] = $dt->address;
        $data['id'] = $kd;
        $this->load->view('header');
        $this->load->view('left_nav_menu');
        $this->load->view('Dashboard/dashboardEdit_view', $data);
        $this->load->view('footer');
    }

    function delete()
    {
        $u = $this->uri->segment(3);
        $this->Dashboard_model->delete($u);
        redirect('DashboardController');
    }

    function save()
    {

        //set validations
        $this->form_validation->set_rules("txt_firstname", "Firstname", "trim|required");
        $this->form_validation->set_rules("txt_lastname", "Lastname", "trim|required");
        $this->form_validation->set_rules("txt_age", "Age", "trim|required");
        $this->form_validation->set_rules("txt_address", "Address", "trim|required");

        if ($this->form_validation->run() == FALSE) {
            //validation fails
            $this->session->set_flashdata('msg', '<div class="alert alert-danger text-center">Invalid Details entered</div>');

            $this->load->view('header');
            $this->load->view('left_nav_menu');
            $this->load->view('Dashboard/dashboardNew_view');
            $this->load->view('footer');
        } else {
            //validation succeeds

            if ($this->input->post('Submit')) {
                $this->Dashboard_model->add();
                redirect('DashboardController');
            } //if validation fails
            else {
                redirect('DashboardController/add');
            }
        }


    }

    function update()
    {
        if ($this->input->post('mit')) {
            $id = $this->input->post('id');
            $this->Dashboard_model->update($id);
            redirect('DashboardController');
        } else {
            $id = $this->input->post('id');
            redirect('DashboardController/edit/' . $id);
        }
    }


}

/* End of file welcome.php */
/* Location: ./application/controllers/DashboardController.php */