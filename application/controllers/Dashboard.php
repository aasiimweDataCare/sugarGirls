<?php
/**
 * Created by PhpStorm.
 * User: aasiimwe
 * Date: 9/25/2015
 * Time: 11:55 AM
 */

if (!defined('BASEPATH')) exit('No direct script access allowed');

class Dashboard extends CI_Controller
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


    public function index()
    {
        $data['data_get'] = $this->Dashboard_model->view();
        $this->load->view('Dashboard/dashboardUser_view', $data);
    }


}

/* End of file welcome.php */
/* Location: ./application/controllers/Dashboard.php */