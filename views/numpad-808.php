<?php
jsLogs("logged in successfully");
require_once($php_root . "components/html/header.php");
require_once($php_root . "components/mainNav.php");
echo "<main>";
	echo "<h1>TR 808 DRUM KIT</h1>";
	echo "<em>use numpad or click</em>";
	echo "<article>";
	?>
	<section id="numpad-808">
		<div class="square" id="key1">Num lock</div>
		<div class="square" id="key2">/</div>
		<div class="square" id="key3">*</div>
		<div class="square" id="key4">-</div>
		<div class="square clear" id="key5">7</div>
		<div class="square" id="key6">8</div>
		<div class="square" id="key7">9</div>
		<div class="square" id="key8">+<div class="long" id="key8"></div></div>
		<div class="square clear" id="key9">4</div>
		<div class="square" id="key10">5</div>
		<div class="square" id="key11">6</div>
		<div class="square clear" id="key12">1</div>
		<div class="square" id="key13">2</div>
		<div class="square" id="key14">3</div>
		<div class="square" id="key15">enter<div class="long" id="key15"></div></div>
		<div class="square clear wide" id="key16">0</div>
		<div class="square" id="key17">.</div>
	</section>
	<link href="<?php echo $htp_root; ?>src/css/numpad-808.css" rel="stylesheet" media="none" onload="if(media!='all')media='all'">
	<script async type="text/javascript" src="<?php echo $htp_root; ?>src/js/numpad-808.js"></script>
	<noscript>
		<p>You will need to enable javascript to use this app.</p>
		<link href="<?php echo $htp_root; ?>src/css/numpad-808.css" rel="stylesheet" media="all">
	</noscript>
	<?php
	echo "</article>";
echo"</main>";
require_once($php_root . "components/html/footer.php");
