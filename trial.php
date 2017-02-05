<?php

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