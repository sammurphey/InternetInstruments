<?php
jsLogs("logged in successfully");
require_once($php_root . "components/html/header.php");
require_once($php_root . "components/mainNav.php");
echo "<main>";
	echo "<h1>Sampler</h1>";
	echo "<article>";
	?>
	<section id="sampler" class="panel">
		<ul id="triggers">
			<li><button id="t_1"></button></li>
			<li><button id="t_2"></button></li>
			<li><button id="t_3"></button></li>
			<li><button id="t_4"></button></li>
			<li><button id="t_5"></button></li>
			<li><button id="t_6"></button></li>
			<li><button id="t_7"></button></li>
			<li><button id="t_8"></button></li>
			<li><button id="t_9"></button></li>
			<li><button id="t_10"></button></li>
			<li><button id="t_11"></button></li>
			<li><button id="t_12"></button></li>
		</ul>
	</section>
	<script async type="text/javascript" src="<?php echo $htp_root; ?>src/js/sampler.js"></script>
	<noscript>
		<p>You will need to enable javascript to use this app.</p>
	</noscript>
	<?php
	echo "</article>";
echo"</main>";
require_once($php_root . "components/html/footer.php");
