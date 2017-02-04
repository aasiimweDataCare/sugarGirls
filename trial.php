<?php

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