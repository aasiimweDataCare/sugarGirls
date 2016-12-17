<?php
/**
 * Created by PhpStorm.
 * User: Apollo Asiimwe
 * Date: 12/3/2016
 * Time: 5:39 PM
 */

if (!defined('BASEPATH')) exit('No direct script access allowed');

class Myprofile_model extends CI_Model
{
    function __construct()
    {
        // Call the Model constructor
        parent::__construct();
    }


    function getUserData($usr, $pwd)
    {
        $this->db->select("`s`.`tbl_staffId`,
            `g`.tbl_staff_groupsId,
            `s`.`groupCode`,
            `s`.fullNames,
            `s`.userName,
            `s`.password,
            `s`.designation,
            `d`.countryName,
            `s`.staffStatus
             from tbl_staff as `s`
            left join tbl_country as `d` on(`d`.countryCode=`s`.country)
            left join tbl_staff_groups as `g` on(`s`.groupCode=`g`.tbl_staff_groupsId)
            where `s`.username='" . $usr . "'
            && `s`.password= '" . md5($pwd) . "'
            && `s`.staffStatus like 'Active'", FALSE);
        $db_rows = $this->db->get();
        if ($db_rows->num_rows() > 0) {
            foreach ($db_rows->result() as $data) {
                $db_data_fetched_array[] = $data;
            }
            return $db_data_fetched_array;
        }

    }


}