<div class="clearfix"></div>
<div align="center" class="row">
    <div class="col-xs-18 col-md-12">
        <img class="img-fade" src="<?php echo base_url() ?>assets/images/logo_footer.png" width="30%" height="30%"
             alt="<?= projectName; ?>-logo">
        <footer>
            <div class="container">

                <p>Developed By <a target="_blank" href="#" rel="author">ComeEasy&trade;</a>&nbsp;&nbsp;&copy;2015
                    - <?php echo date('Y'); ?>
                </p>
            </div>
        </footer>
    </div>
</div>
<script src="<?php echo base_url() ?>highcharts/lib_js/jquery.min.2.1.4.js"></script>
<script src="<?php echo base_url() ?>bootstrap-3.3.5/js/bootstrap.min.js"></script>
<script src="<?php echo base_url() ?>metis-menu/metisMenu.min.js"></script>
<script src="<?php echo base_url() ?>dist/js/sb-admin-2.js"></script>
<script src="<?php echo base_url() ?>dist/js/addRow.js"></script>
<script src="<?php echo base_url() ?>dist/js/bootstrap-datepicker.js"></script>
<script src="<?php echo base_url() ?>dist/js/custom-functions.js"></script>
<script src="<?php echo base_url() ?>highcharts/lib_hicharts/js/highcharts.js"></script>
<script src="<?php echo base_url() ?>highcharts/lib_hicharts/js/modules/funnel.js"></script>
<script src="<?php echo base_url() ?>highcharts/lib_hicharts/js/highcharts-3d.js"></script>
<script src="<?php echo base_url() ?>highcharts/lib_js/drilldown.js"></script>
<script src="<?php echo base_url() ?>highcharts/lib_hicharts/js/highcharts-more.js"></script>
<script src="<?php echo base_url() ?>highcharts/lib_hicharts/js/modules/exporting.js"></script>

<div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">x</button>
                <h3>Login to SugarGirls.com</h3>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-xs-12 custom-forms">
                        <?php
                        $attributes = array("class" => "", "id" => "loginform", "name" => "loginform");
                        echo form_open("SgHome/index", $attributes); ?>
                        <div class="form-group">
                            <label for="txt_username" class="control-label">Username</label>
                            <input type="text" class="form-control" id="txt_username" name="txt_username"
                                   value="<?php echo set_value('txt_username'); ?>"
                                   required="required" title="Please enter you username"
                                   placeholder="example@gmail.com">
                            <span class="text-danger"><?php echo form_error('txt_username'); ?></span>
                        </div>

                        <div class="form-group">
                            <label for="txt_password" class="control-label">Password</label>
                            <input type="password" class="form-control" id="txt_password" name="txt_password"
                                   placeholder="Password" type="password"
                                   value="<?php echo set_value('txt_password'); ?>"
                                   required="required" title="Please enter your password"/>
                            <span class="text-danger"><?php echo form_error('txt_password'); ?></span>
                        </div>
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" name="remember" id="remember"> Remember login
                            </label>

                            <p class="help-block">(if this is a private computer)</p>
                        </div>
                        <div>
                            <input type="submit" id="btn_login" name="btn_login" type="submit"
                                   class="btn btn-success custom-submit-btn" value="Login"/>
                        </div>

                        <?php echo form_close(); ?>
                        <?php echo $this->session->flashdata('msg_login'); ?>
                        <div class="clearfix"></div>
                        <br/>
                        <br/>
                        <a href="/forgot/" class="btn btn-default">
                            <i class="fa fa-info-circle" aria-hidden="true"></i>Help to login</a>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                New To SugarGirls.com?
                <a href="<?= site_url('SgHome/register_form') ?>" class="btn btn-primary">Register</a>
            </div>
        </div>
    </div>
</div>







