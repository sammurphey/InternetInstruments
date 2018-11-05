var /*cymbal*/c1 =  new Audio('https://cdn.sammurphey.net/samples/808s/CY/CY2510.WAV'),
    /*cymbal*/c2 = new Audio('https://cdn.sammurphey.net/samples/808s/CY/CY0000.WAV'),
    /*highhat*/h1 = new Audio('https://cdn.sammurphey.net/samples/808s/Hh%20open/OH75.WAV'),
    /*highhat*/h2 = new Audio('https://cdn.sammurphey.net/samples/808s/Hh%20open/Ch00.wav'),
    /*tomtom*/t1 = new Audio('https://cdn.sammurphey.net/samples/808s/LT/LT25.WAV'),
    /*tomtom*/t2 = new Audio('https://cdn.sammurphey.net/samples/808s//HT/HT00.WAV'),
    /*tomtom*/t3 = new Audio('https://cdn.sammurphey.net/samples/808s/HT/HT75.WAV'),
    /*conga*/cg1 = new Audio('https://cdn.sammurphey.net/samples/808s/LC/LC25.WAV'),
    /*conga*/cg2 = new Audio('https://cdn.sammurphey.net/samples/808s/HC/HC00.WAV'),
    /*conga*/cg3 = new Audio('https://cdn.sammurphey.net/samples/808s/HC/HC75.WAV'),
    /*snare*/s1 = new Audio('https://cdn.sammurphey.net/samples/808s/SD/SD2510.WAV'),
    /*snare*/s2 = new Audio('https://cdn.sammurphey.net/samples/808s/SD/SD5025.WAV'),
    /*clap*/clp = new Audio('https://cdn.sammurphey.net/samples/808s/CP/CP.WAV'),
    /*kick*/k1 = new Audio('https://cdn.sammurphey.net/samples/808s/BD/BD5010.WAV'),
    /*kick*/k2 = new Audio('https://cdn.sammurphey.net/samples/808s/BD/BD0050.WAV'),
    /*cowbell*/cb1 = new Audio('https://cdn.sammurphey.net/samples/808s/CB/CB.WAV'),
    /*click*/cb2 = new Audio('https://cdn.sammurphey.net/samples/808s/CL/CL.WAV');

document.getElementById("key1").onclick = function() {
				c1.pause();
				c1.currentTime = 0;
				c1.play();
      };
document.getElementById("key2").onclick = function() {
				c2.pause();
				c2.currentTime = 0;
				c2.play();
      };
document.getElementById("key3").onclick = function() {
				h1.pause();
				h1.currentTime = 0;
				h1.play();
      };
document.getElementById("key4").onclick = function() {
				h2.pause();
				h2.currentTime = 0;
				h2.play();
      };
document.getElementById("key5").onclick = function() {
				t1.pause();
				t1.currentTime = 0;
				t1.play();
      };
document.getElementById("key6").onclick = function() {
				t2.pause();
				t2.currentTime = 0;
				t2.play();
      };
document.getElementById("key7").onclick = function() {
				t3.pause();
				t3.currentTime = 0;
				t3.play();
      };
document.getElementById("key8").onclick = function() {
        cb1.pause();
				cb1.currentTime = 0;
				cb1.play();
      };
document.getElementById("key9").onclick = function() {
	      cg1.pause();
				cg1.currentTime = 0;
				cg1.play();
      };
document.getElementById("key10").onclick = function() {
				cg2.pause();
				cg2.currentTime = 0;
				cg2.play();
      };
document.getElementById("key11").onclick = function() {
				cg3.pause();
				cg3.currentTime = 0;
				cg3.play();
      };
document.getElementById("key12").onclick = function() {
	      s1.pause();
				s1.currentTime = 0;
				s1.play();
      };
document.getElementById("key13").onclick = function() {
				s2.pause();
				s2.currentTime = 0;
				s2.play();
      };
document.getElementById("key14").onclick = function() {
				clp.pause();
				clp.currentTime = 0;
				clp.play();
      };
document.getElementById("key15").onclick = function() {
				cb2.pause();
				cb2.currentTime = 0;
				cb2.play();
      };
document.getElementById("key16").onclick = function() {
	      k1.pause();
				k1.currentTime = 0;
				k1.play();
      };
document.getElementById("key17").onclick = function() {
				k2.pause();
				k2.currentTime = 0;
				k2.play();
      };
document.addEventListener('keydown', function(event) {
  		if(event.keyCode == 144) {
				c1.pause();
				c1.currentTime = 0;
				c1.play();
      };
  		if(event.keyCode == 111) {
				c2.pause();
				c2.currentTime = 0;
				c2.play();
      };
  		if(event.keyCode == 106) {
				h1.pause();
				h1.currentTime = 0;
				h1.play();
      };
  		if(event.keyCode == 109) {
				h2.pause();
 				h2.currentTime = 0;
				h2.play();
      };
  		if(event.keyCode == 103) {
				t1.pause();
				t1.currentTime = 0;
				t1.play();
      };
  		if(event.keyCode == 104) {
				t2.pause();
				t2.currentTime = 0;
				t2.play();
      };
  		if(event.keyCode == 105) {
				t3.pause();
				t3.currentTime = 0;
				t3.play();
      };
  		if(event.keyCode == 100) {
				cg1.pause();
				cg1.currentTime = 0;
				cg1.play();
      };
  		if(event.keyCode == 101) {
				cg2.pause();
				cg2.currentTime = 0;
				cg2.play();
      };
  		if(event.keyCode == 102) {
				cg3.pause();
				cg3.currentTime = 0;
				cg3.play();
      };
  		if(event.keyCode == 97) {
				s1.pause();
				s1.currentTime = 0;
				s1.play();
      };
  		if(event.keyCode == 98) {
				s2.pause();
				s2.currentTime = 0;
				s2.play();
      };
  		if(event.keyCode == 99) {
				clp.pause();
				clp.currentTime = 0;
				clp.play();
      };
  		if(event.keyCode == 96) {
				k1.pause();
				k1.currentTime = 0;
				k1.play();
      };
  		if(event.keyCode == 110) {
				k2.pause();
				k2.currentTime = 0;
				k2.play();
      };
  		if(event.keyCode == 107) {
				cb1.pause();
				cb1.currentTime = 0;
				cb1.play();
      };
  		if(event.keyCode == 13) {
				cb2.pause();
				cb2.currentTime = 0;
				cb2.play();
      };
});
