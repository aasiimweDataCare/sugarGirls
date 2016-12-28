<?php
/**
 * Created by PhpStorm.
 * User: aasiimwe
 * Date: 9/25/2015
 * Time: 11:53 AM
 */


if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Dashboard_model extends CI_Model
{


    public function __construct()
    {
        parent::__construct();
    }

    public function record_count()
    {
        return $this->db->count_all("tbl_users");
    }

    public function fetch_users($limit, $start)
    {
        $this->db->limit($limit, $start);
        $query = $this->db->get("tbl_users");

        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                $data[] = $row;
            }
            return $data;
        }
        return false;
    }


    function add()
    {
        $fn = $this->input->post('txt_firstname');
        $ln = $this->input->post('txt_lastname');
        $ag = $this->input->post('txt_age');
        $ad = $this->input->post('txt_address');


        $data = array(
            'firstname' => $fn,
            'lastname' => $ln,
            'age' => $ag,
            'address' => $ad
        );
        $this->db->insert('tbl_users', $data);


    }

    function view()
    {
        $db_rows = $this->db->get('tbl_users');
        if ($db_rows->num_rows() > 0) {
            foreach ($db_rows->result() as $data) {
                $db_data_fetched_array[] = $data;
            }
            return $db_data_fetched_array;
        }
    }

    function edit($a)
    {
        $d = $this->db->get_where('tbl_users', array('userId' => $a))->row();
        return $d;
    }

    function delete($a)
    {
        $this->db->delete('tbl_users', array('userId' => $a));
        return;
    }

    function update($id)
    {
        $fn = $this->input->post('txt_firstname');
        $ln = $this->input->post('txt_lastname');
        $ag = $this->input->post('txt_age');
        $ad = $this->input->post('txt_address');
        $data = array(
            'firstname' => $fn,
            'lastname' => $ln,
            'age' => $ag,
            'address' => $ad
        );
        $this->db->where('userId', $id);
        $this->db->update('tbl_users', $data);
    }
}