<?php
/**
 * Created by PhpStorm.
 * User: aasiimwe
 * Date: 9/20/2015
 * Time: 1:28 AM
 */

defined('BASEPATH') OR exit('No direct script access allowed');

$username = ($this->session->userdata['username']);
if (empty($username)) {
    redirect('LoginController');
}
?>

<?php
/* Part One */
//Connect to Database
$servername = "localhost";
$username = "cpm_root";
$password = "cpmmisV2";
/*$db_name = "db_cpma"; //local db*/
/*$db_name = "db_cpma"; //live db*/
$db_name = "db_cpmadummy"; //live demo db

$data = "";
// Create connection
$conn = new mysqli($servername, $username, $password, $db_name);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
//echo "Connected successfully<br/>";

function add($varOne, $varTwo)
{
    $result = ($varOne + $varTwo);
    return $result;
}

//Pick data from table
$sql = "SELECT * FROM `tbl_graph_dummy_data` ORDER BY `city`,`year` ASC ";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    $rows_city = array();
    $rows_male = array();
    $rows_data = array();
    while ($row = $result->fetch_assoc()) {
        /* echo "id: " . $row["id"] .
            " - City: " . $row["city"] .
            " - Male: " . $row["male"] .
            " - Female: " . $row["female"] .
            " - Year: " . $row["year"] .
            "" . "<br>"; */

        $rows_city["city"][] = $row["city"];
        $rows_data["data"][] = add($row["female"], $row["male"]);
        $rows_year["year"][] = $row["year"];
    }
    // echo json_encode($rows_data) . "<br>";

//Organise cities for our graph
    foreach ($rows_city as $key) {

        $cities = "'" . ($key[0]) . "','" . ($key[4]) . "','" . ($key[8]) . "','" . ($key[12]) . "','" . ($key[16]) . "'";
    }

//Organise years for our graph

    foreach ($rows_year as $key) {

        $yrOne = "Year " . ($key[0]);
        $yrTwo = "Year " . ($key[1]);
        $yrThree = "Year " . ($key[2]);
        $yrFour = "Year " . ($key[3]);
        $yrFive = "Year " . ($key[4]);
    }

    //Organise the actual data to be compatible to the graph.
    /*Initialize our granular data variables*/

    foreach ($rows_data as $key) {
        //Gulu
        $data_BujYr1 = ($key[0]);
        $data_BujYr2 = ($key[1]);
        $data_BujYr3 = ($key[2]);
        $data_BujYr4 = ($key[3]);

        //Bushenyi
        $data_DarYr1 = ($key[4]);
        $data_DarYr2 = ($key[5]);
        $data_DarYr3 = ($key[6]);
        $data_DarYr4 = ($key[7]);

        //Kampala
        $data_KlaYr1 = ($key[8]);
        $data_KlaYr2 = ($key[9]);
        $data_KlaYr3 = ($key[10]);
        $data_KlaYr4 = ($key[11]);

        //Iganga
        $data_KigYr1 = ($key[12]);
        $data_KigYr2 = ($key[13]);
        $data_KigYr3 = ($key[14]);
        $data_KigYr4 = ($key[15]);

        //Masaka
        $data_NaiYr1 = ($key[16]);
        $data_NaiYr2 = ($key[17]);
        $data_NaiYr3 = ($key[18]);
        $data_NaiYr4 = ($key[19]);

        //All the cities data combined for each year
        $data_array_YrOne = array($data_BujYr1, $data_DarYr1, $data_KlaYr1, $data_KigYr1, $data_NaiYr1);
        $data_array_YrTwo = array($data_BujYr2, $data_DarYr2, $data_KlaYr2, $data_KigYr2, $data_NaiYr2);
        $data_array_YrThree = array($data_BujYr3, $data_DarYr3, $data_KlaYr3, $data_KigYr3, $data_NaiYr3);
        $data_array_YrFour = array($data_BujYr4, $data_DarYr4, $data_KlaYr4, $data_KigYr4, $data_NaiYr4);
    }
    $data_yearOne = json_encode($data_array_YrOne);
    $data_yearTwo = json_encode($data_array_YrTwo);
    $data_yearThree = json_encode($data_array_YrThree);
    $data_yearFour = json_encode($data_array_YrFour);

//Start HTML where our data will go
    ?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="msapplication-config" content="<?php echo base_url() ?>assets/xml/browserconfig.xml"/>


        <link rel="shortcut icon" href="<?php echo base_url() ?>assets/icons/favicon.ico">
        <link rel="icon" href="<?php echo base_url() ?>assets/images/favicon.png">
        <link href="<?php echo base_url() ?>css/nta.css" media="all" rel="stylesheet" type="text/css">
        <script src="<?php echo base_url() ?>highcharts/lib_js/jquery.min.2.1.4.js"></script>
        <style type="text/css">
            ${demo.css}
        </style>
        <script type="text/javascript">
            $(function () {
                $('#container').highcharts({
                    chart: {
                        type: 'bar',
                        spacingBottom: 15,
                        spacingTop: 10,
                        spacingLeft: 10,
                        spacingRight: 10
                    },

                    title: {
                        text: ''
                    },
                    subtitle: {
                        text: 'Source: <a href="http://mis.ftfcpm.com:9000//">CPMA-MIS</a>'
                    },
                    xAxis: {
                        categories: [<?=$cities; ?>],
                        title: {
                            text: null
                        }
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'number of farmers (Thousands)',
                            align: 'high'
                        },
                        labels: {
                            overflow: 'justify',
                            align: 'right',
                            x: -10,
                            y: 0
                        }
                    },
                    tooltip: {
                        valueSuffix: ' Thousands'
                    },
                    plotOptions: {
                        bar: {
                            dataLabels: {
                                enabled: true
                            }
                        }
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'top',
                        x: -40,
                        y: 80,
                        floating: true,
                        borderWidth: 1,
                        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                        shadow: true
                    },
                    credits: {
                        enabled: false
                    },
                    series: [{
                        name: '<?=$yrOne;?>',
                        data: <?=$data_yearOne;?>
                    }, {
                        name: '<?=$yrTwo;?>',
                        data: <?=$data_yearTwo;?>
                    }, {
                        name: '<?=$yrThree;?>',
                        data: <?=$data_yearThree;?>
                    }, {
                        name: '<?=$yrFour;?>',
                        data: <?=$data_yearFour;?>
                    }]
                });
            });
        </script>


        <title>CPMA-MIS</title>

        <!-- Bootstrap Core CSS -->
        <link href="<?php echo base_url() ?>bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

        <!-- MetisMenu CSS -->
        <link href="<?php echo base_url() ?>bower_components/metisMenu/dist/metisMenu.min.css" rel="stylesheet">

        <!-- Timeline CSS -->
        <link href="<?php echo base_url() ?>dist/css/timeline.css" rel="stylesheet">

        <!-- Custom CSS -->
        <link href="<?php echo base_url() ?>dist/css/sb-admin-2.css" rel="stylesheet">


        <!-- Custom Fonts -->
        <link href="<?php echo base_url() ?>bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet"
              type="text/css">

        <script>
            function showHideMenu() {
                var div = document.getElementById("menuContainer");
                if (div.style.display !== "none") {
                    div.style.display = "none";
                }
                else {
                    div.style.display = "block";
                }
            }
        </script>

    </head>

    <body>

    <div id="wrapper">

        <!-- Navigation -->
        <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

                <img src="<?php echo base_url() ?>assets/images/header2.gif">


            </div>

            <!-- /.navbar-header -->

            <ul class="nav navbar-top-links navbar-right">
                <li class="dropdown">
                    <a class="dropdown-toggle" onclick="showHideMenu()" href="#">vertical Menu
                        <i class="fa fa-arrow-circle-down fa-fw"></i>
                    </a>
                    <!-- /.dropdown-vertical menu -->
                </li>
                <!-- /.dropdown -->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-envelope fa-fw"></i> <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-messages">
                        <li>
                            <a href="#">
                                <div>
                                    <strong>John Smith</strong>
                                    <span class="pull-right text-muted">
                                        <em>Yesterday</em>
                                    </span>
                                </div>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <strong>John Smith</strong>
                                    <span class="pull-right text-muted">
                                        <em>Yesterday</em>
                                    </span>
                                </div>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <strong>John Smith</strong>
                                    <span class="pull-right text-muted">
                                        <em>Yesterday</em>
                                    </span>
                                </div>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a class="text-center" href="#">
                                <strong>Read All Messages</strong>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                    <!-- /.dropdown-messages -->
                </li>
                <!-- /.dropdown -->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-tasks fa-fw"></i> <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-tasks">
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>Task 1</strong>
                                        <span class="pull-right text-muted">40% Complete</span>
                                    </p>

                                    <div class="progress progress-striped active">
                                        <div class="progress-bar progress-bar-success" role="progressbar"
                                             aria-valuenow="40"
                                             aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                                            <span class="sr-only">40% Complete (success)</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>Task 2</strong>
                                        <span class="pull-right text-muted">20% Complete</span>
                                    </p>

                                    <div class="progress progress-striped active">
                                        <div class="progress-bar progress-bar-info" role="progressbar"
                                             aria-valuenow="20"
                                             aria-valuemin="0" aria-valuemax="100" style="width: 20%">
                                            <span class="sr-only">20% Complete</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>Task 3</strong>
                                        <span class="pull-right text-muted">60% Complete</span>
                                    </p>

                                    <div class="progress progress-striped active">
                                        <div class="progress-bar progress-bar-warning" role="progressbar"
                                             aria-valuenow="60"
                                             aria-valuemin="0" aria-valuemax="100" style="width: 60%">
                                            <span class="sr-only">60% Complete (warning)</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>Task 4</strong>
                                        <span class="pull-right text-muted">80% Complete</span>
                                    </p>

                                    <div class="progress progress-striped active">
                                        <div class="progress-bar progress-bar-danger" role="progressbar"
                                             aria-valuenow="80"
                                             aria-valuemin="0" aria-valuemax="100" style="width: 80%">
                                            <span class="sr-only">80% Complete (danger)</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a class="text-center" href="#">
                                <strong>See All Tasks</strong>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                    <!-- /.dropdown-tasks -->
                </li>
                <!-- /.dropdown -->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-bell fa-fw"></i> <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-alerts">
                        <li>
                            <a href="#">
                                <div>
                                    <i class="fa fa-comment fa-fw"></i> New Comment
                                    <span class="pull-right text-muted small">4 minutes ago</span>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i class="fa fa-twitter fa-fw"></i> 3 New Followers
                                    <span class="pull-right text-muted small">12 minutes ago</span>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i class="fa fa-envelope fa-fw"></i> Message Sent
                                    <span class="pull-right text-muted small">4 minutes ago</span>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i class="fa fa-tasks fa-fw"></i> New Task
                                    <span class="pull-right text-muted small">4 minutes ago</span>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i class="fa fa-upload fa-fw"></i> Server Rebooted
                                    <span class="pull-right text-muted small">4 minutes ago</span>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a class="text-center" href="#">
                                <strong>See All Alerts</strong>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                    <!-- /.dropdown-alerts -->
                </li>
                <!-- /.dropdown -->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-user fa-fw"></i> <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-user">
                        <li><a href="#"><i class="fa fa-user fa-fw"></i> User Profile</a>
                        </li>
                        <li><a href="#"><i class="fa fa-gear fa-fw"></i> Settings</a>
                        </li>
                        <li class="divider"></li>
                        <li><a href="#" onclick="location.href='<?php echo site_url('LoginController/logout') ?>'"><i
                                    class="fa fa-sign-out fa-fw"></i> Logout</a>
                        </li>
                    </ul>
                    <!-- /.dropdown-user -->
                </li>
                <!-- /.dropdown -->
            </ul>
            <!-- /.navbar-top-links -->

            <div style="display:none;" class="navbar-default sidebar" id='menuContainer' role="navigation">
                <div class="sidebar-nav navbar-collapse">
                    <ul class="nav" id="side-menu">
                        <li class="sidebar-search">
                            <div class="input-group custom-search-form">
                                <input type="text" class="form-control" placeholder="Search...">
                                <span class="input-group-btn">
                                <button class="btn btn-default" type="button">
                                    <i class="fa fa-search"></i>
                                </button>
                            </span>
                            </div>
                            <!-- /input-group -->
                        </li>
                        <li>
                            <a href="index.php"><i class="fa fa-dashboard fa-fw"></i> Dashboard</a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-files-o fa-fw"></i> Activity Monitoring<span
                                    class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a href="blank.php">Blank Page</a>
                                </li>
                                <li>
                                    <a href="login.php">Login Page</a>
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-files-o fa-fw"></i> Narrative<span
                                    class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a href="blank.php">Blank Page</a>
                                </li>
                                <li>
                                    <a href="login.php">Login Page</a>
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-wrench fa-fw"></i> Outcome mapping<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a href="panels-wells.php">Panels and Wells</a>
                                </li>
                                <li>
                                    <a href="buttons.php">Buttons</a>
                                </li>
                                <li>
                                    <a href="notifications.php">Notifications</a>
                                </li>
                                <li>
                                    <a href="typography.php">Typography</a>
                                </li>
                                <li>
                                    <a href="icons.php"> Icons</a>
                                </li>
                                <li>
                                    <a href="grid.php">Grid</a>
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-sitemap fa-fw"></i> Partners Inventory<span
                                    class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a href="#">Second Level Item</a>
                                </li>
                                <li>
                                    <a href="#">Second Level Item</a>
                                </li>
                                <li>
                                    <a href="#">Third Level <span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level">
                                        <li>
                                            <a href="#">Third Level Item</a>
                                        </li>
                                        <li>
                                            <a href="#">Third Level Item</a>
                                        </li>
                                        <li>
                                            <a href="#">Third Level Item</a>
                                        </li>
                                        <li>
                                            <a href="#">Third Level Item</a>
                                        </li>
                                    </ul>
                                    <!-- /.nav-third-level -->
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-files-o fa-fw"></i> Activity Reports<span
                                    class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a href="blank.php">Blank Page</a>
                                </li>
                                <li>
                                    <a href="login.php">Login Page</a>
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-files-o fa-fw"></i> PMT Annual Targets<span
                                    class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a href="blank.php">Blank Page</a>
                                </li>
                                <li>
                                    <a href="login.php">Login Page</a>
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-files-o fa-fw"></i> Control Panel<span
                                    class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a href="blank.php">Blank Page</a>
                                </li>
                                <li>
                                    <a href="login.php">Login Page</a>
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-files-o fa-fw"></i> MER Setup<span
                                    class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a href="blank.php">Blank Page</a>
                                </li>
                                <li>
                                    <a href="login.php">Login Page</a>
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-files-o fa-fw"></i> Document Repository<span
                                    class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a href="blank.php">Blank Page</a>
                                </li>
                                <li>
                                    <a href="login.php">Login Page</a>
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-files-o fa-fw"></i> Help<span
                                    class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a href="blank.php">Blank Page</a>
                                </li>
                                <li>
                                    <a href="login.php">Login Page</a>
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-files-o fa-fw"></i> Related Links<span
                                    class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a href="blank.php">Blank Page</a>
                                </li>
                                <li>
                                    <a href="login.php">Login Page</a>
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-files-o fa-fw"></i> Exit<span
                                    class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a href="blank.php">Blank Page</a>
                                </li>
                                <li>
                                    <a href="login.php">Login Page</a>
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>

                    </ul>
                </div>
                <!-- /.sidebar-collapse -->

            </div>

            <!-- /.navbar-static-side -->


        </nav>


        <div id="page-wrapper">

            <div class="row">
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <div class="container-fluid header-bottom">
                                <div class="collapse navbar-collapse " id="bs-example-navbar-collapse-1">
                                    <ul class="nav navbar-nav navbar-kiri" id="bottom_menu">
                                        <li><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a></li>
                                        <li><a href="<?php echo site_url() ?>/pages/indicator_definitions.php"><i
                                                    class="fa fa-wrench"></i> Indicator
                                                Definition</a></li>
                                        <li class="dropdown">
                                            <a href="<?php echo site_url() ?>/pages/indicator_tables.php"
                                               class="dropdown-toggle" data-toggle="dropdown"
                                               role="button"
                                               aria-expanded="false"><i class="fa fa-table"></i>
                                                Data Tables <span class="caret"></span></a>
                                            <ul class="dropdown-menu menu-top-front" role="menu">
                                                <li><a href="<?php echo site_url() ?>/pages/indicator_tables.php">Tracking
                                                        Table</a></li>
                                                <li><a href="#">Another action</a></li>
                                                <li><a href="#">Something else here</a></li>
                                                <li class="divider"></li>
                                                <li><a href="#">Separated link</a></li>
                                                <li class="divider"></li>
                                                <li><a href="#">One more separated link</a></li>
                                            </ul>
                                        </li>

                                    </ul>
                                </div>
                                <!-- /.navbar-collapse -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="row">
                <div class="col-lg-10">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <i class="fa fa-bar-chart-o fa-fw"></i><strong> Number of farmers benefiting directly from
                                Activity interventions</strong>

                            <div class="pull-right">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-default btn-xs dropdown-toggle"
                                            data-toggle="dropdown">
                                        Indicators
                                        <span class="caret"></span>
                                    </button>
                                    <ul class="dropdown-menu pull-right" role="menu">
                                        <li><a href="#">Action</a>
                                        </li>
                                        <li><a href="#">Another action</a>
                                        </li>
                                        <li><a href="#">Something else here</a>
                                        </li>
                                        <li class="divider"></li>
                                        <li><a href="#">Separated link</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div id="container"></div>
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->


                </div>
                <!-- /.col-lg-8 -->
                <div class="col-lg-2">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <i class="fa fa-chevron-circle-down fa-fw"></i> <strong>Indicator Score</strong>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <img height='70px' width='120px' src="<?php echo base_url() ?>assets/images/percent.png">
                        </div>


                        <div class="panel-heading">
                            <i class="fa fa-chevron-circle-down fa-fw"></i> <strong>Baseline</strong>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <span class="sm-st-icon st-violet"><i class="fa fa-lightbulb-o"></i></span>

                            <div class="sm-st-info">
                                <span>400,000</span>
                                Farmers
                            </div>
                        </div>

                        <!-- /.panel-body -->


                        <div class="panel-yellow panel-heading">
                            <i class="fa fa-chevron-circle-down fa-fw"></i> <strong>Target</strong>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <span class="sm-st-icon st-blue"><i class="fa fa-space-shuttle"></i></span>

                            <div class="sm-st-info">
                                <span>260,000</span>
                                Farmers
                            </div>
                        </div>
                        <!-- /.panel-body -->

                        <!-- /.panel -->


                        <div class="panel-heading">
                            <i class="fa fa-chevron-circle-down fa-fw"></i> <strong>Actual</strong>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">

                            <span class="sm-st-icon st-green"><i class="fa fa-paperclip"></i></span>

                            <div class="sm-st-info">
                                <span>23,642</span>
                                Farmers
                            </div>
                        </div>

                        <!-- /.panel-body -->


                    </div>
                    <!-- /.panel -->

                </div>
                <!-- /.col-lg-2 -->


            </div>
            <!-- /.col-lg-2 -->


        </div>
        <!-- /.row -->
    </div>
    <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->

    <!-- jQuery -->

    <script src="<?php echo base_url() ?>highcharts/lib_hicharts/js/highcharts.js"></script>
    <script src="<?php echo base_url() ?>highcharts/lib_hicharts/js/modules/exporting.js"></script>

    <!--<script src="<?php echo base_url() ?>bower_components/jquery/dist/jquery.min.js"></script>-->

    <!-- Bootstrap Core JavaScript -->
    <script src="<?php echo base_url() ?>bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="<?php echo base_url() ?>bower_components/metisMenu/dist/metisMenu.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="<?php echo base_url() ?>dist/js/sb-admin-2.js"></script>

    </body>

    </html>
    <?php

//End

} else {
    echo "0 results";
}


$conn->close();