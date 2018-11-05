<?php
jsLogs("logged in successfully");
require_once($php_root . "components/html/header.php");
require_once($php_root . "components/mainNav.php");
echo "<main>";
	echo "<h1>Internet Instruments</h1>";
	echo "<article><nav id='indexing'><ol>";
		echo "<li><a href='" . $htp_root . "numpad-808'>Numpad 808</a></li>";
		echo "<li><a href='" . $htp_root . "sampler'>Sampler</a></li>";
	echo "<ol></nav></article>";
echo"</main>";
require_once($php_root . "components/html/footer.php");
