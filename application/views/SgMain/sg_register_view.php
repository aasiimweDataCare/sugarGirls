<div id="page-wrapper">
    <div class="col-sm-12 col-xs-12 container-fluid home-banner">
        <div class="row">
            <div class="col-sm-12">
                <?php
                $attributes = array("class" => "", "id" => "register_form", "name" => "register_form");
                echo form_open("Login/register_submit", $attributes); ?>

                <div class="form-group">
                    <label for="username" class="control-label">Username</label>
                    <input type="text" class="form-control" id="username" name="username"
                           value="<?= set_value('username'); ?>"
                           required="required" title="Please enter your desired username"
                           placeholder="Traveler1"/>
                    <span class="text-danger"><?= form_error('username'); ?></span>
                </div>

                <div class="form-group">
                    <label for="username" class="control-label">Email Address</label>
                    <input type="email" class="form-control" id="email_add" name="email_add"
                           value="<?= set_value('email_add'); ?>"
                           required="required" title="Please enter your email address"
                           placeholder="example@gmail.com"/>
                    <span class="text-danger"><?= form_error('email_add'); ?></span></div>

                <div class="form-group">
                    <label for="password" class="control-label">Password</label>
                    <input type="password" class="form-control" id="password" name="password"
                           value="<?= set_value('password'); ?>"
                           required="required" title="Please enter your desired Password"
                           placeholder="Safe Password"/>
                    <span class="text-danger"><?= form_error('password'); ?></span>
                </div>

                <div class="form-group">
                    <label for="cpassword" class="control-label">Confirm Password</label>
                    <input type="cpassword" class="form-control" id="cpassword" name="cpassword"
                           value="<?= set_value('cpassword'); ?>"
                           required="required" title="Please re-enter your password"
                           placeholder="Confirm Password"/>
                    <span class="text-danger"><?= form_error('cpassword'); ?></span>
                </div>

                <div class="form-group">
                    <p>if you have promo code, <a>enter it here</a></p>
                    <input type="text" class="form-control" id="promo_code" name="promo_code"
                           value="<?= set_value('promo_code'); ?>"
                           title="Please enter Promo code"
                           placeholder="Enter Promo Code"/>
                    <span class="text-danger"><?= form_error('promo_code'); ?></span>
                </div>

                <div class="form-group">
                    <input type="checkbox" value="" id="privacy_policy" name="privacy_policy">
                    By creating an account, you agree to our
                    <a>Terms</a>
                    and
                    <a>Privacy Policy</a>
                    <span class="text-danger"><?= form_error('privacy_policy'); ?></span>
                </div>

                <input type="submit" name="register_user" id="register_user" value="Create Account"
                       class="btn btn-success btn-block"/>
                <br/>
                <?= form_close(); ?>
                <?= $this->session->flashdata('msg'); ?>
                <p class="footer">Please <a href="#" data-toggle="modal" data-target="#loginModal">Log
                        In</a> if you already have an account</p>

            </div>
        </div>
    </div>


</div>
<!-- /#page-wrapper -->