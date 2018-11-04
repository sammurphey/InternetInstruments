<?php
// Enable Error Reporting
ini_set("display_errors", 1);
ini_set("display_startup_errors", 1);
error_reporting(E_ALL);

// Init variables
$php_root = $_SERVER['DOCUMENT_ROOT'] . "/InternetInstruments/";
$htp_root = "http://192.168.0.107/InternetInstruments/";
$api_root = "https://api.sammurphey.net/InternetInstruments";
$cdn_root = "https://internetinstruments-cdn.sammurphey.net/";

// Defaults
$document_title = "InternetInstruments";
$document_url = $htp_root;
$last_updated = "2018/11/04";
$version = 1.0;
// Functions
require_once($php_root . "core/functions.php");
jsLogs("hello world");
// Find where we are
require_once($php_root . "core/headers.php");

// Verify user
$isLoggedIn = false;
require_once($php_root . "core/checkLogin.php");
?>
