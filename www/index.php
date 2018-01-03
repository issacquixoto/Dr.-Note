<?php

require('../vendor/smarty/smarty/libs/Smarty.class.php');

$smarty = new Smarty();

$smarty->template_dir = '../templates/';
$smarty->compile_dir = '../templates_c/';
$smarty->config_dir = '../configs/';
$smarty->cache_dir = '../cache/';

$username = "hello world";
$smarty->assign("Name", $username);
$smarty->display('templates/index.tpl');