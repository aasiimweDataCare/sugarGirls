<?php
/**
 * Created by PhpStorm.
 * User: aasiimwe
 * Date: 9/25/2015
 * Time: 12:02 PM
 */

//echo form_open('DashboardController/save', 'role="form"');

$attributes = array("class" => "form-horizontal", "id" => "studentform", "name" => "studentform");
echo form_open("DashboardController/save", $attributes); ?>


<div class="form-group">
    <label for="txt_firstname">First Name</label>
    <input type="text" class="form-control" id="txt_firstname" placeholder="Firstname" name="txt_firstname"
           value="<?php echo set_value('txt_firstname'); ?>"/>
    <span class="text-danger"><?php echo form_error('txt_firstname'); ?></span>
</div>

<div class="form-group">
    <label for="txt_lastname">Last Name</label>
    <input type="text" class="form-control" id="txt_lastname" placeholder="Lastname" name="txt_lastname"
           value="<?php echo set_value('txt_lastname'); ?>"/>
    <span class="text-danger"><?php echo form_error('txt_lastname'); ?></span>
</div>

<div class="form-group">
    <label for="txt_age">Age</label>
    <input type="text" class="form-control" id="txt_age" placeholder="Age" name="txt_age"
           value="<?php echo set_value('txt_age'); ?>"/>
    <span class="text-danger"><?php echo form_error('txt_age'); ?></span>
</div>

<div class="form-group">
    <label for="txt_address">Address</label>
    <input type="text" class="form-control" id="txt_address" placeholder="Address" name="txt_address"
           value="<?php echo set_value('txt_address'); ?>"/>
    <span class="text-danger"><?php echo form_error('txt_address'); ?></span>
</div>

<span class="IL_AD" id="IL_AD10"><input type="submit" name="Submit" class="btn btn-primary" value="Submit"></span>
<span class="IL_AD" id="IL_AD10"><button type="button"
                                         onclick="location.href='<?php echo site_url('DashboardController') ?>'"
                                         class="btn btn-success">Cancel
    </button></span>
</form>
<?php echo form_close(); ?>
<?php echo $this->session->flashdata('msg'); ?>
