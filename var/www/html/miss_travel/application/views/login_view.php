<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Online Dating and Travelling Site">
    <meta name="keywords" content="Dating,Travelling,Girls,Sugar">
    <meta name="author" content="Web, Solutions, Uganda, Asiimwe, Apollo,">
    <link rel="icon" href="<?= base_url() ?>assets/images/favicon.png">

    <link href="<?php echo base_url() ?>css/nta.css" media="all" rel="stylesheet" type="text/css">
    <title><?= projectName; ?>:Login</title>
    <!-- Bootstrap -->
    <link href="<?php echo base_url() ?>bootstrap-3.3.5/css/bootstrap.min.css" rel="stylesheet">
    <link href="<?php echo base_url() ?>assets/jquery.ui.1.9.2.theme/ui/1.9.2/themes/base/jquery-ui.css"
          type="text/html">
    <link href="<?php echo base_url() ?>assets/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css" type="text/html">
    <link href="<?php echo base_url() ?>font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <link rel="stylesheet" type="text/css" href="<?php echo base_url() ?>css/login.css">


</head>
<body>


<div class="container-fluid">
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Brand</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
                    <li><a href="#">Link</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                           aria-expanded="false">Dropdown <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">One more separated link</a></li>
                        </ul>
                    </li>
                </ul>
                <form class="navbar-form navbar-left">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Search">
                    </div>
                    <button type="submit" class="btn btn-default">Submit</button>
                </form>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#" data-toggle="modal" data-target="#loginModal">Login</a></li>
                    <li><a href="#" data-toggle="modal" data-target="#registerModal">Sign Up</a></li>
                </ul>

                <!-- /.navbar-collapse -->
            </div>
            <!-- /.container-fluid -->
    </nav>

    <div class="col-sm-8 container-fluid well-sm"><img src="<?php echo base_url() ?>assets/images/SG-logo.png"
                                                       width="10%" height="10%"/></div>
    <div class="col-sm-4 container-fluid">
        <a href="#"> <i class="fa fa-users" aria-hidden="true"></i>&nbsp;&nbsp;About</a>&nbsp;&nbsp;&nbsp;
        <a href="#"> <i class="fa fa-cogs" aria-hidden="true"></i>&nbsp;&nbsp;How It works</a>&nbsp;&nbsp;&nbsp;
        <a href="#"> <i class="fa fa-newspaper-o" aria-hidden="true"></i>&nbsp;&nbsp;Press</a>&nbsp;&nbsp;&nbsp;
    </div>


</div>

<div class="col-sm-12 col-xs-12 container-fluid home-banner">

</div>


<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="<?php echo base_url() ?>bootstrap-3.3.5/js/jquery-1.11.3.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="<?php echo base_url() ?>bootstrap-3.3.5/js/bootstrap.min.js"></script>

<!--Start Login Modal -->
<div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">x</button>
                <h3>Login to SugarGirls.com</h3>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-xs-12">
                        <?php
                        $attributes = array("class" => "", "id" => "loginform", "name" => "loginform");
                        echo form_open("LoginController/index", $attributes); ?>
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
                        <input type="submit" id="btn_login" name="btn_login" type="submit"
                               class="btn btn-success btn-block" value="Login"/>
                        <br/>
                        <?php echo form_close(); ?>
                        <?php echo $this->session->flashdata('msg'); ?>

                        <a href="/forgot/" class="btn btn-default btn-block">Help to login</a>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                New To SugarGirls.com?
                <a href="#" class="btn btn-primary">Register</a>
            </div>
        </div>
    </div>
</div>
<!--End Login Modal -->

<!--Start Register Modal -->
<div class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="registerModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">x</button>
                <h3>Create a free account</h3>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-xs-12">
                        <?php
                        $attributes = array("class" => "", "id" => "register_form", "name" => "register_form");
                        echo form_open("LoginController/register", $attributes); ?>

                        <div class="form-group">
                            <label for="username" class="control-label">Username</label>
                            <input type="text" class="form-control" id="username" name="username"
                                   value="<?php echo set_value('username'); ?>"
                                   required="required" title="Please enter your desired username"
                                   placeholder="Traveler1"/>
                            <span class="text-danger"><?php echo form_error('username'); ?></span>
                        </div>

                        <div class="form-group">
                            <label for="username" class="control-label">Email Address</label>
                            <input type="email" class="form-control" id="email_add" name="email_add"
                                   value="<?php echo set_value('email_add'); ?>"
                                   required="required" title="Please enter your email address"
                                   placeholder="example@gmail.com"/>
                            <span class="text-danger"><?php echo form_error('email_add'); ?></span></div>

                        <div class="form-group">
                            <label for="password" class="control-label">Password</label>
                            <input type="password" class="form-control" id="password" name="password"
                                   value="<?php echo set_value('password'); ?>"
                                   required="required" title="Please enter your desired Password"
                                   placeholder="Safe Password"/>
                            <span class="text-danger"><?php echo form_error('password'); ?></span>
                        </div>

                        <div class="form-group">
                            <label for="cpassword" class="control-label">Confirm Password</label>
                            <input type="cpassword" class="form-control" id="cpassword" name="cpassword"
                                   value="<?php echo set_value('cpassword'); ?>"
                                   required="required" title="Please re-enter your password"
                                   placeholder="Confirm Password"/>
                            <span class="text-danger"><?php echo form_error('cpassword'); ?></span>
                        </div>

                        <div class="form-group">
                            <p>if you have promo code, <a>enter it here</a></p>
                            <input type="text" class="form-control" id="promo_code" name="promo_code"
                                   value="<?php echo set_value('promo_code'); ?>"
                                   title="Please enter Promo code"
                                   placeholder="Enter Promo Code"/>
                            <span class="text-danger"><?php echo form_error('promo_code'); ?></span>
                        </div>

                        <div class="form-group">
                            <input type="checkbox" value="" id="privacy_policy" name="privacy_policy">
                            By creating an account, you agree to our
                            <a>Terms</a>
                            and
                            <a>Privacy Policy</a>
                            <span class="text-danger"><?php echo form_error('privacy_policy'); ?></span>
                        </div>

                        <input type="submit" name="register_user" id="register_user" value="Create Account"
                                class="btn btn-success btn-block"/>
                        <br/>
                        <?php echo form_close(); ?>
                        <?php echo $this->session->flashdata('msg'); ?>
                        <p class="footer">Please <a href="#" data-toggle="modal" data-target="#loginModal">Log
                                In</a> if you already have an account</p>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
    $('#register_user').click(function() {
        var form_data = {
            username: $('#username').val(),
            email_add: $('#email_add').val(),
            password: $('#password').val(),

            cpassword: $('#cpassword').val(),
            promo_code: $('#promo_code').val(),
            privacy_policy: $('#privacy_policy').val()
        $.ajax({
            url: "<?php echo site_url('sugarGirls/register'); ?>",
            type: 'POST',
            data: form_data,
            success: function(msg) {
                if (msg == "no")
                {
                    $('#register_form').append(msg);
                }
                if (msg == "yes")
                {
                }
            }
        });
        return false;
    });
</script>
<!--End Register Modal -->

</body>
</html>