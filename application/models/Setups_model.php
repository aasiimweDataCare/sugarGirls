<?php

/**
 * Created by PhpStorm.
 * User: Asimwe Apollo
 * Date: 2/4/2017
 * Time: 11:31 PM
 */
class Setups_model extends CI_Model
{

    public function __construct()
    {
        parent::__construct();

    }

    //get department table to populate the country name dropdown
    function get_country()
    {
        $this->db->select('countryCode');
        $this->db->select('countryName');
        $this->db->from('tbl_country');
        $this->db->order_by('countryName', 'asc');
        $query = $this->db->get();
        $result = $query->result();

        //array to store department id & department name
        $country_id = array('-select country-');
        $country_name = array('-select country-');

        for ($i = 0; $i < count($result); $i++) {
            array_push($country_id, $result[$i]->countryCode);
            array_push($country_name, $result[$i]->countryName);
        }
        return $country_result = array_combine($country_id, $country_name);
    }

    function get_ethnicity()
    {
        $this->db->select('tbl_ethinicity_id');
        $this->db->select('name');
        $this->db->from('tbl_ethinicity');
        $this->db->order_by('name', 'asc');
        $query = $this->db->get();
        $result = $query->result();

        //array to store department id & department name
        $ethinicity_id = array('-select ethnicity-');
        $ethinicity_name = array('-select ethnicity-');

        for ($i = 0; $i < count($result); $i++) {
            array_push($ethinicity_id, $result[$i]->tbl_ethinicity_id);
            array_push($ethinicity_name, $result[$i]->name);
        }
        return $ethinicity_result = array_combine($ethinicity_id, $ethinicity_name);
    }

    function get_body_type()
    {
        $this->db->select('tbl_body_type_id');
        $this->db->select('name');
        $this->db->from('tbl_body_type');
        $this->db->order_by('name', 'asc');
        $query = $this->db->get();
        $result = $query->result();

        //array to store department id & department name
        $body_type_id = array('-select body type-');
        $body_type_name = array('-select body type-');

        for ($i = 0; $i < count($result); $i++) {
            array_push($body_type_id, $result[$i]->tbl_body_type_id);
            array_push($body_type_name, $result[$i]->name);
        }
        return $body_type_result = array_combine($body_type_id, $body_type_name);
    }

    function get_relationship_status()
    {
        $this->db->select('tbl_relationship_status_id');
        $this->db->select('name');
        $this->db->from('tbl_relationship_status');
        $this->db->order_by('name', 'asc');
        $query = $this->db->get();
        $result = $query->result();

        //array to store department id & department name
        $relationship_status_id = array('-select relationship status-');
        $relationship_status_name = array('-select relationship status-');

        for ($i = 0; $i < count($result); $i++) {
            array_push($relationship_status_id, $result[$i]->tbl_relationship_status_id);
            array_push($relationship_status_name, $result[$i]->name);
        }
        return $relationship_status_result = array_combine($relationship_status_id, $relationship_status_name);
    }

    function get_travelling_with()
    {
        $this->db->select('tbl_travelling_with_id');
        $this->db->select('name');
        $this->db->from('tbl_travelling_with');
        $this->db->order_by('name', 'asc');
        $query = $this->db->get();
        $result = $query->result();

        //array to store department id & department name
        $travelling_with_id = array('-select travelling with-');
        $travelling_with_name = array('-select travelling with-');

        for ($i = 0; $i < count($result); $i++) {
            array_push($travelling_with_id, $result[$i]->tbl_travelling_with_id);
            array_push($travelling_with_name, $result[$i]->name);
        }
        return $travelling_with_result = array_combine($travelling_with_id, $travelling_with_name);
    }

    function get_heights()
    {
        $this->db->select('tbl_heights_id');
        $this->db->select('name');
        $this->db->from('tbl_heights');
        $this->db->order_by('name', 'asc');
        $query = $this->db->get();
        $result = $query->result();

        $heights_id = array('-select your height-');
        $heights_name = array('-select your height-');

        for ($i = 0; $i < count($result); $i++) {
            array_push($heights_id, $result[$i]->tbl_heights_id);
            array_push($heights_name, $result[$i]->name);
        }
        return $heights_result = array_combine($heights_id, $heights_name);
    }

    function get_education()
    {
        $this->db->select('tbl_education_id');
        $this->db->select('name');
        $this->db->from('tbl_education');
        $this->db->order_by('name', 'asc');
        $query = $this->db->get();
        $result = $query->result();

        $education_id = array('-select your education-');
        $education_name = array('-select your education-');

        for ($i = 0; $i < count($result); $i++) {
            array_push($education_id, $result[$i]->tbl_education_id);
            array_push($education_name, $result[$i]->name);
        }
        return $education_result = array_combine($education_id, $education_name);
    }

    function get_religion()
    {
        $this->db->select('tbl_religion_id');
        $this->db->select('name');
        $this->db->from('tbl_religion');
        $this->db->order_by('name', 'asc');
        $query = $this->db->get();
        $result = $query->result();

        $religion_id = array('-select your religion-');
        $religion_name = array('-select your religion-');

        for ($i = 0; $i < count($result); $i++) {
            array_push($religion_id, $result[$i]->tbl_religion_id);
            array_push($religion_name, $result[$i]->name);
        }
        return $religion_result = array_combine($religion_id, $religion_name);
    }

    function get_children()
    {
        $this->db->select('tbl_children_id');
        $this->db->select('name');
        $this->db->from('tbl_children');
        $this->db->order_by('name', 'asc');
        $query = $this->db->get();
        $result = $query->result();

        $children_id = array('-select number of children-');
        $children_name = array('-select number of children-');

        for ($i = 0; $i < count($result); $i++) {
            array_push($children_id, $result[$i]->tbl_children_id);
            array_push($children_name, $result[$i]->name);
        }
        return $children_result = array_combine($children_id, $children_name);
    }

    function get_smoking()
    {
        $this->db->select('tbl_smoking_id');
        $this->db->select('name');
        $this->db->from('tbl_smoking');
        $this->db->order_by('name', 'asc');
        $query = $this->db->get();
        $result = $query->result();

        $smoking_id = array('-select smoking habit-');
        $smoking_name = array('-select smoking habit-');

        for ($i = 0; $i < count($result); $i++) {
            array_push($smoking_id, $result[$i]->tbl_smoking_id);
            array_push($smoking_name, $result[$i]->name);
        }
        return $smoking_result = array_combine($smoking_id, $smoking_name);
    }

    function get_drinking()
    {
        $this->db->select('tbl_drinking_id');
        $this->db->select('name');
        $this->db->from('tbl_drinking');
        $this->db->order_by('name', 'asc');
        $query = $this->db->get();
        $result = $query->result();

        $drinking_id = array('-select drinking habit-');
        $drinking_name = array('-select drinking habit-');

        for ($i = 0; $i < count($result); $i++) {
            array_push($drinking_id, $result[$i]->tbl_drinking_id);
            array_push($drinking_name, $result[$i]->name);
        }
        return $drinking_result = array_combine($drinking_id, $drinking_name);
    }


}