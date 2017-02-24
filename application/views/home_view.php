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
    <div class="container">
        <blockquote>
            <h3>Love cures people - both the ones who give it and the ones who receive it. ~Karl A.
                Menninger

            </h3>

        </blockquote>
        <div>
            <input type="submit" id="btn_login" name="btn_login" type="submit"
                   class="btn btn-home-sign-up-free" onclick="location.href='<?= site_url('SgHome/register_form') ?>'"
                   value="Sign Up For Free"/>
        </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
</div>
<div class="clearfix"></div>
<div class="col-sm-12 grey-container">
    <div class="col-sm-4">
        <img src="<?= base_url() ?>assets/images/3PhotosStacked.png" width="70%" height="70%" class="rounded float-left"
             alt="...">
    </div>
    <div class="col-sm-4">
        <div class="panel">
            <a href="<?= site_url('MdLoans/mortgages_home'); ?>">
                <div class="panel-body">
                        <span class="fa-stack fa-lg">
                          <i class="fa fa-circle fa-stack-2x icon-background1"></i>
                          <i class="fa fa-male fa-stack-1x"></i>
                        </span>

                    <div class="text-right">
                        <div class="huge">615,375</div>
                        <div style="white-space: nowrap;">Members on Sugar Girls</div>
                    </div>
                </div>
            </a>
        </div>
    </div>
    <div class="col-sm-4">
        <div class="panel">
            <a href="<?= site_url('MdLoans/mortgages_home'); ?>">
                <div class="panel-body">
                        <span class="fa-stack fa-lg">
                          <i class="fa fa-circle fa-stack-2x icon-background1"></i>
                          <i class="fa fa-male fa-stack-1x"></i>
                        </span>

                    <div class="text-right">
                        <div class="huge">324,780</div>
                        <div style="white-space: nowrap;">Total Trips created</div>
                    </div>
                </div>
            </a>
        </div>
    </div>
</div>
<div class="clearfix"></div>
<div class="col-sm-12 white-container">
    <div class="col-sm-8 col-sm-offset-2">
        "Unlike other dating websites, it's my commitment to operate our business ethically. This means caring about
        your privacy, encrypting identifiable data, and never employing fake profiles or software bots. When we say
        there are more women than men, we guarantee it."

        Brandon Wade
        Founder & CEO, SugarGirls.com
        Instagram 7.9K people are following Brandon Wade.
    </div>
</div>
<div class="clearfix"></div>
<div class="col-sm-12 grey-container">
    <div class="col-sm-3 col-sm-offset-1">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">Popular upcoming trips</h3>
                    <span class="pull-right">
                        <!-- Tabs -->
                        <ul class="nav panel-tabs">
                            <li class="active"><a href="#tab1" data-toggle="tab">Tab 1</a></li>
                            <li><a href="#tab2" data-toggle="tab">Tab 2</a></li>
                            <li><a href="#tab3" data-toggle="tab">Tab 3</a></li>
                            <li><a href="#tab4" data-toggle="tab">Tab 4</a></li>
                        </ul>
                    </span>
            </div>
            <div class="panel-body">
                <div class="tab-content">
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel
                    illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
                    blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum
                    dolor sit amet,
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-3">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">Top 10 Destinations</h3>
                    <span class="pull-right">
                        <!-- Tabs -->
                        <ul class="nav panel-tabs">
                            <li class="active"><a href="#tab1" data-toggle="tab">Tab 1</a></li>
                            <li><a href="#tab2" data-toggle="tab">Tab 2</a></li>
                            <li><a href="#tab3" data-toggle="tab">Tab 3</a></li>
                            <li><a href="#tab4" data-toggle="tab">Tab 4</a></li>
                        </ul>
                    </span>
            </div>
            <div class="panel-body">
                <div class="tab-content">
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel
                    illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
                    blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum
                    dolor sit amet,
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-4">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">Register for free today!</h3>
                    <span class="pull-right">
                        <!-- Tabs -->
                        <ul class="nav panel-tabs">
                            <li class="active"><a href="#tab1" data-toggle="tab">Tab 1</a></li>
                            <li><a href="#tab2" data-toggle="tab">Tab 2</a></li>
                            <li><a href="#tab3" data-toggle="tab">Tab 3</a></li>
                            <li><a href="#tab4" data-toggle="tab">Tab 4</a></li>
                        </ul>
                    </span>
            </div>
            <div class="panel-body">
                <div class="tab-content">
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel
                    illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
                    blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum
                    dolor sit amet,
                </div>
            </div>
        </div>
    </div>
</div>
<div class="clearfix"></div>
<div class="col-sm-12 dark-grey-container">
    <h2>SugarGirls Blog</h2>

    <div>
        <h3>5 Top Tips for Traveling to London</h3>
    </div>
    <div>
        <h3>A Romantic Trip to London</h3>
    </div>
</div>
<div class="clearfix"></div>
<div class="col-sm-12 white-container">
    <div>
        <h1 class="text-left">Featured on</h1>
    </div>
    <div class="slideshow-holder">
        <style>

            .jssorb03 {
                position: absolute
            }

            .jssorb03 div, .jssorb03 div:hover, .jssorb03 .av {
                position: absolute;
                width: 21px;
                height: 21px;
                text-align: center;
                line-height: 21px;
                color: #fff;
                font-size: 12px;
                background: url('<?php echo base_url(); ?>assets/images/slideshow/b03.png') no-repeat;
                overflow: hidden;
                cursor: pointer
            }

            .jssorb03 div {
                background-position: -5px -4px
            }

            .jssorb03 div:hover, .jssorb03 .av:hover {
                background-position: -35px -4px
            }

            .jssorb03 .av {
                background-position: -65px -4px
            }

            .jssorb03 .dn, .jssorb03 .dn:hover {
                background-position: -95px -4px
            }

            .jssora03l, .jssora03r {
                display: block;
                position: absolute;
                width: 55px;
                height: 55px;
                cursor: pointer;
                background: url('<?php echo base_url(); ?>assets/images/slideshow/a03.png') no-repeat;
                overflow: hidden
            }

            .jssora03l {
                background-position: -3px -33px
            }

            .jssora03r {
                background-position: -63px -33px
            }

            .jssora03l:hover {
                background-position: -123px -33px
            }

            .jssora03r:hover {
                background-position: -183px -33px
            }

            .jssora03l.jssora03ldn {
                background-position: -243px -33px
            }

            .jssora03r.jssora03rdn {
                background-position: -303px -33px
            }

            .jssora03l.jssora03lds {
                background-position: -3px -33px;
                opacity: .3;
                pointer-events: none
            }

            .jssora03r.jssora03rds {
                background-position: -63px -33px;
                opacity: .3;
                pointer-events: none
            }
        </style>
        <div id="jssor_1"
             style="
                 position:relative;
                 margin:0 auto;
                 top:0px;
                 left:0px;
                 width:809px;
                 height:150px;
                 overflow:hidden;
                 visibility:hidden;
                 ">
            <div data-u="loading"
                 style="
                 position:absolute;
                 top:0px;
                 left:0px;
                 background-color:rgba(0,0,0,0.7);
                 ">
                <div
                    style="
                    filter: alpha(opacity=70);
                 opacity: 0.7;
                  position: absolute;
                   display: block;
                   top: 0px;
                   left: 0px;
                   width: 100%;
                   height: 100%;
                   "></div>
                <div
                    style="
                        position:absolute;
                        display:block;
                        background:url('<?php echo base_url(); ?>assets/images/slideshow/loading.gif') no-repeat center center;
                        top:0px;
                        left:0px;
                        width:100%;
                        height:100%;
                        ">

                </div>
            </div>
            <div data-u="slides"
                 style="
             cursor:default;
             position:relative;
             top:0px;
             left:0px;
             width:809px;
             height:150px;
             overflow:hidden;">
                <div>
                    <img data-u="image" src="<?php echo base_url(); ?>assets/images/slideshow/001.jpg"/>
                </div>
                <div>
                    <img data-u="image" src="<?php echo base_url(); ?>assets/images/slideshow/002.jpg"/>
                </div>
                <div>
                    <img data-u="image" src="<?php echo base_url(); ?>assets/images/slideshow/003.jpg"/>
                </div>
                <div>
                    <img data-u="image" src="<?php echo base_url(); ?>assets/images/slideshow/004.jpg"/>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
    </div>
    <div class="clearfix"></div>
</div>
<div class="clearfix"></div>
<div class="col-sm-12 dark-grey-container">
    <div class="col-sm-4 col-sm-offset-1">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">Sugar Girls: The #1 Travel Dating Community</h3>
                    <span class="pull-right">
                        <!-- Tabs -->
                        <ul class="nav panel-tabs">
                            <li class="active"><a href="#tab1" data-toggle="tab">Tab 1</a></li>
                            <li><a href="#tab2" data-toggle="tab">Tab 2</a></li>
                            <li><a href="#tab3" data-toggle="tab">Tab 3</a></li>
                            <li><a href="#tab4" data-toggle="tab">Tab 4</a></li>
                        </ul>
                    </span>
            </div>
            <div class="panel-body">
                <div class="tab-content">
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel
                    illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
                    blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum
                    dolor sit amet,
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-2">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">Sugar Girls</h3>
                    <span class="pull-right">
                        <!-- Tabs -->
                        <ul class="nav panel-tabs">
                            <li class="active"><a href="#tab1" data-toggle="tab">Tab 1</a></li>
                            <li><a href="#tab2" data-toggle="tab">Tab 2</a></li>
                            <li><a href="#tab3" data-toggle="tab">Tab 3</a></li>
                            <li><a href="#tab4" data-toggle="tab">Tab 4</a></li>
                        </ul>
                    </span>
            </div>
            <div class="panel-body">
                <div class="tab-content">
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel
                    illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
                    blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum
                    dolor sit amet,
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-4">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">Quick Links</h3>
                    <span class="pull-right">
                        <!-- Tabs -->
                        <ul class="nav panel-tabs">
                            <li class="active"><a href="#tab1" data-toggle="tab">Tab 1</a></li>
                            <li><a href="#tab2" data-toggle="tab">Tab 2</a></li>
                            <li><a href="#tab3" data-toggle="tab">Tab 3</a></li>
                            <li><a href="#tab4" data-toggle="tab">Tab 4</a></li>
                        </ul>
                    </span>
            </div>
            <div class="panel-body">
                <div class="tab-content">
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel
                    illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
                    blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum
                    dolor sit amet,
                </div>
            </div>
        </div>
    </div>
</div>
<div class="clearfix"></div>
<div align="center" class="row white-container">
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
<script src="<?= base_url() ?>bootstrap-3.3.5/js/jquery-1.11.3.min.js"></script>
<script src="<?= base_url() ?>bootstrap-3.3.5/js/bootstrap.min.js"></script>
<script src="<?php echo base_url(); ?>dist/js/slideshow.js"></script>
<script type="text/javascript">jssor_1_slider_init();</script>
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