<?php
/*sample example */

require_once('../vendor/autoload.php');

$smarty = new Smarty();
$username = "Smarty";
$smarty->assign("Name", $username);
$smarty->display('index.tpl');