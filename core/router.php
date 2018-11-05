<?php
jsLogs("routing...");
switch($current_path) {
	case "":
	case "/":
	// homepage
		//if ($user_token) {//double check
			require_once($php_root . "views/overview.php");
	//	} else {
			//require_once($php_root . "views/login.php");
	//	}
		break;
	case "logout":
		require_once($php_root . "views/logout.php");
		break;
	case "numpad-808":
		require_once($php_root . "views/numpad-808.php");
	case "sampler":
		require_once($php_root . "views/sampler.php");
		break;
	case "donate":
		require_once($php_root . "views/donate.php");
		break;
	default:
	// assume username and attempt lookup
}
