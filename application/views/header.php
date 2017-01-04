<?php
/**
 * Created by PhpStorm.
 * User: aasiimwe
 * Date: 9/20/2015
 * Time: 1:28 AM
 */

defined('BASEPATH') OR exit('No direct script access allowed');

$user_name = ($this->session->userdata['user_name']);
$page_name = ($this->session->userdata['page_name']);
if (empty($user_name)) {
    redirect('LoginController');
}
?>
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
                    <li><a href="#" onclick="location.href='<?= site_url('Login/register_form') ?>'">Sign Up</a></li>
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



