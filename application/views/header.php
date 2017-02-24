<?php
/**
 * Created by PhpStorm.
 * User: aasiimwe
 * Date: 9/20/2015
 * Time: 1:28 AM
 */

defined('BASEPATH') OR exit('No direct script access allowed');
$page_name = ($this->session->userdata['page_name']);
if (empty($page_name)) {
    redirect('SgHome');
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
    <meta name="author" content="ComeEasy, ICT,Solutions, Uganda, Asiimwe, Apollo,">
    <link rel="icon" href="<?= base_url() ?>assets/images/favicon.png">
    <link href="<?= base_url() ?>dist/css/nta.css" media="all" rel="stylesheet" type="text/css">
    <title><?= projectName; ?>: <?= $page_name; ?></title>
    <link href="<?= base_url() ?>bootstrap-3.3.5/css/bootstrap.min.css" rel="stylesheet">
    <link href="<?= base_url() ?>dist/css/bootstrap-datepicker.css" rel="stylesheet">
    <link href="<?= base_url() ?>dist/css/bootstrap-datepicker3.css" rel="stylesheet">
    <link href="<?= base_url() ?>assets/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css" type="text/html">
    <link href="<?= base_url() ?>font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" type="text/css" href="<?= base_url() ?>dist/css/sb-admin-2.css">
    <style type="text/css">
        @media screen and (min-width: 768px) {
            .modal-dialog {
                width: 700px; /* New width for default modal */
            }

            .modal-sm {
                width: 350px; /* New width for small modal */
            }
        }

        @media screen and (min-width: 992px) {
            .modal-lg {
                width: 950px; /* New width for large modal */
            }
        }
    </style>
</head>
<body>
<div id="loading">
    <img id="loading-image" src="<?= base_url() ?>assets/images/ajax_loader.gif" alt="Loading..."/>
</div>
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
                <li><a href="#" data-toggle="modal" data-target="#registerModal">Logged in as:</a></li>
            </ul>
        </div>
</nav>
<div class="clearfix"></div>
<div id="page-wrapper">