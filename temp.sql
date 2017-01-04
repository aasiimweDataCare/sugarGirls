-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 28, 2016 at 10:57 PM
-- Server version: 5.7.9
-- PHP Version: 5.6.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `db_sugar_girls`
--

-- --------------------------------------------------------

--
-- Structure for view `view_login`
--

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_login`  AS  select `l`.`login_id` AS `login_id`,`s`.`tbl_userId` AS `user_id`,`s`.`userName` AS `username`,`l`.`role` AS `role`,`l`.`time` AS `time`,`l`.`ip_address` AS `ip_address`,`l`.`status` AS `status` from (`db_sugar_girls`.`tbl_login` `l` join `db_sugar_girls`.`tbl_users` `s` on((`l`.`user_id` = `s`.`tbl_userId`))) order by `l`.`login_id` desc ;

--
-- VIEW  `view_login`
-- Data: None
--