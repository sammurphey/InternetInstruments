<?php
jsLogs("logged in successfully");
require_once($php_root . "components/html/header.php");
require_once($php_root . "components/mainNav.php");
echo "<main>";
	echo "<h1>Dashboard</h1>";
	echo "<article><nav><ul>";
		echo "<li><a href='" . $htp_root . "numpad-808'>Numpad 808</a></li>";
	echo "</ul></nav></article>";
echo"</main>";
require_once($php_root . "components/html/footer.php");
