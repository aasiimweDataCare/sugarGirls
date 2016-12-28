<?php
/**
 * Created by PhpStorm.
 * User: aasiimwe
 * Date: 9/19/2015
 * Time: 11:17 PM
 */

if (!defined('BASEPATH')) exit('No direct script access allowed');

class Login_model extends CI_Model
{
    function __construct()
    {
        // Call the Model constructor
        parent::__construct();
    }


    //get the username & password from tbl_users
    function getUserData($usr, $pwd)
    {
        $this->db->select("`u`.`tbl_userId`,
            `g`.tbl_user_groupsId,
            `u`.`groupCode`,
            `u`.fullNames,
            `u`.userName,
            `u`.password,
            `u`.designation,
            `d`.countryName,
            `u`.userStatus
             from tbl_users as `u`
            left join tbl_country as `d` on(`d`.countryCode=`u`.country)
            left join tbl_user_groups as `g` on(`u`.groupCode=`g`.tbl_user_groupsId)
            where `u`.username='" . $usr . "'
            && `u`.password= '" . md5($pwd) . "'
            && `u`.userStatus like 'Active'", FALSE);
        $db_rows = $this->db->get();
        if ($db_rows->num_rows() > 0) {
            foreach ($db_rows->result() as $data) {
                $db_data_fetched_array[] = $data;
            }
            return $db_data_fetched_array;
        }

    }

    function getLastReportedDate($role, $id)
    {


        $this->db->select(" max(t.time) as `dateLastReported` from `view_login` as `t`
            where `t`.`user_id` =" . $id . "", FALSE);

        $db_rows = $this->db->get();
        if ($db_rows->num_rows() > 0) {
            foreach ($db_rows->result() as $data) {
                $db_data_fetched_array[] = $data;
            }
            return $db_data_fetched_array;
        }
    }


    //save User session
    function Login_systemLogs()
    {
        $id = $this->session->userdata['user_id'];
        $role = $this->session->userdata['role'];
        $orgCode = $this->session->userdata['org_code'];
        $ipAddress = $this->session->userdata['ipAddress'];


        $data = array(
            'user_id' => $id,
            'role' => $role,
            'org_code' => $orgCode,
            'ip_address' => $ipAddress
        );
        $this->db->insert('tbl_login', $data);


    }


}