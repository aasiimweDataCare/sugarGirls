<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Online Dating and Travelling Site">
    <meta name="keywords" content="Dating,Travelling,Girls,Sugar">
    <meta name="author" content="ComeEasy, ICT,Solutions, Uganda, Asiimwe, Apollo,">
    <link rel="icon" href="<?= base_url() ?>assets/images/favicon.png">
    <link href="<?= base_url() ?>dist/css/nta.css" media="all" rel="stylesheet" type="text/css">
    <title><?= projectName; ?>:Home</title>
    <link href="<?= base_url() ?>bootstrap-3.3.5/css/bootstrap.min.css" rel="stylesheet">
    <link href="<?= base_url() ?>assets/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css" type="text/html">
    <link href="<?= base_url() ?>font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" type="text/css" href="<?= base_url() ?>dist/css/sb-admin-2.css">
</head>
<body>
<div class="container-fluid">
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="<?= site_url('SgHome/index') ?>">
                    <i class="fa fa-home" aria-hidden="true"></i>
                    Home
                </a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <form class="navbar-form navbar-left">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Search">
                    </div>
                    <button type="submit" class="btn btn-default">Submit</button>
                </form>
                <ul class="nav navbar-nav">
                    <li class="active"><a href="#">Favorites <span class="sr-only">(current)</span></a></li>
                    <li><a href="#">My Trips</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#" data-toggle="modal" data-target="#loginModal">Login</a></li>
                    <li><a href="<?= site_url('SgHome/register_form_part_two') ?>">Sign Up For Free</a></li>
                </ul>
            </div>
    </nav>
    <div class="col-sm-8 container-fluid well-sm">
        <img src="<?= base_url() ?>assets/images/SG-logo.png" width="10%" height="10%"/></div>
    <div class="col-sm-4 container-fluid">
        <a href="#"> <i class="fa fa-users" aria-hidden="true"></i>&nbsp;&nbsp;About</a>&nbsp;&nbsp;&nbsp;
        <a href="#"> <i class="fa fa-cogs" aria-hidden="true"></i>&nbsp;&nbsp;How It works</a>&nbsp;&nbsp;&nbsp;
        <a href="#"> <i class="fa fa-newspaper-o" aria-hidden="true"></i>&nbsp;&nbsp;Press</a>&nbsp;&nbsp;&nbsp;
    </div>
</div>
<div class="col-sm-12 home-container">
    Your tasks are in scrum master, please find time to update the system.
    Also kindly provide an update on the work you've been doing. Thank U
    Also when reporting in scrum master please be mindful of 7th Feb coz it might be used against U on reports generated
    if task was done beyond contract closure date. Thx
</div>
<script src="<?= base_url() ?>bootstrap-3.3.5/js/jquery-1.11.3.min.js"></script>
<script src="<?= base_url() ?>bootstrap-3.3.5/js/bootstrap.min.js"></script>
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
                                   value="<?= set_value('txt_username'); ?>"
                                   required="required" title="Please enter you username"
                                   placeholder="example@gmail.com">
                            <span class="text-danger"><?= form_error('txt_username'); ?></span>
                        </div>

                        <div class="form-group">
                            <label for="txt_password" class="control-label">Password</label>
                            <input type="password" class="form-control" id="txt_password" name="txt_password"
                                   placeholder="Password" type="password"
                                   value="<?= set_value('txt_password'); ?>"
                                   required="required" title="Please enter your password"/>
                            <span class="text-danger"><?= form_error('txt_password'); ?></span>
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

                        <?= form_close(); ?>
                        <?= $this->session->flashdata('msg_login'); ?>
                        <div class="clearfix"></div>
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
</body>
</html>