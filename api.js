/*
	AVANTÜR
	Bu script fakülte sanat adına Ertuğrul Erkan tarafından hazırlanmıştır.
	Kaynak gösterildiği taktirde kullanımı serbesttir.
	
	İletişim için:
	E-mail: ertugrulerkan@gmail.com
	E-mail: info.fakultesanat@gmail.com
	Web-site: fakultesanat.com
	Web-site: avantur.fakultesanat.com
*/

var video;
var music;

var level;

var zmn_int;
var zi;

var can_int;

var vd_int;

//DEGERLER
var para;
var can;
var polis;
var silah;

function init() {
	//video
	video = document.getElementById("video"); 
	
	//music
	music = document.getElementById("music");
	music.src = "sanandreas.mp3";
	music.volume = 0.2;
	
	//level
	level = "s00";
	
	//arayüz values setup
	setup(level);
	
	//zaman
	$('#saat').html("10:00");
	zi = 0;
	
	//info
	$( "#kunye" ).hover(function() {
		$("#kunye_kutu" ).fadeIn();
	}, function() {
		$("#kunye_kutu" ).fadeOut();
	});
}

function setup(lvl) {
	para = data.sahneler[lvl].puan.para;
	can = data.sahneler[lvl].puan.can;
	polis = data.sahneler[lvl].puan.polis;
	silah = data.sahneler[lvl].puan.silah;
	
	$( "#para" ).html("$" + para);
	$( "#can" ).html("♥ " + can);
	silah_func(silah);
	polis_func(polis);
}

function zaman() {
	zmn_int = setInterval(function() {
		zi++;
		var d = new Date(2019,4,6,10,zi,00);
		var saat = d.getHours()
		var dakika = d.getMinutes();
		if(dakika < 10) { dakika = "0"+dakika; }
		$('#saat').html(saat + ":" + dakika);
	}, 1000);
}

function baslat(durum) {
	if(durum == 0) {
		$("#baslat").fadeOut();
		
		//init
		init();
		
		//SAATİ BAŞLAT
		zaman();
		
		//CAN AZALMAYA BAŞLAT
		can_eksilt();
		
		muzik_cal(1);	
		sahnecagir(level);
	}else{
		$("#yazi").fadeOut();
		
		//RESET
		setup(level);
		
		//SAATİ BAŞLAT
		zaman();
		
		//CAN AZALMAYA BAŞLAT
		can_eksilt();
		
		muzik_cal(1);
		sahnecagir(level);
		
		//SUREYİ İLERİ SAR
		video.currentTime = data.sahneler[level].olay["0"].sure;
	}
}

function sahnecagir(sahnekodu) {
	$( "#secenekler" ).fadeOut();
	$( "#karanlik" ).fadeOut();
	
	video.src = data.sahneler[sahnekodu].link;
	video.play();
	
	olay(sahnekodu);
	video.onended = function() {
		secenekler(sahnekodu);
		$( "#secenekler" ).fadeIn();
		$( "#karanlik" ).fadeIn();
	};
	
	var vd_int = setInterval(function(){
		if(video.readyState == 0)
		{
			video.src = data.sahneler[sahnekodu].link;
			video.play();
		}else{
			clearInterval(vd_int);
		}
	}, 1000);
}

function secenekler(sahnekodu) {
	$( "#secenekler" ).html('');
	
	var secenekler = data.sahneler[sahnekodu].secenekler;
	if(secenekler) {
		$.each(secenekler, function(i, item) {
			var kod;
            kod = "sahnecagir("+"'"+ item.sahne +"')";    
			
			$( "#secenekler" ).append("<div id='secenek' onclick="+kod+">" + item.yazi + "</div>");
		});
	}
}

function olay(sahnekodu) {
	var olaylar = data.sahneler[sahnekodu].olay;
	if(olaylar) {
		$.each(olaylar, function(i, item) {
			
			item.timer = setInterval(function(){
				var secs = Math.floor(video.currentTime % 60);
				if(secs == parseInt(item.sure)) {
					if(item["yenilenme"]) { yenilvl_func(item["yenilenme"]); }
					if(item["para"]) { para_func(item["para"]); }
					if(item["can"]) { can_func(item["can"]); }
					if(item["polis"]) { polis_func(item["polis"]); }
					if(item["silah"]) { silah_func(item["silah"]); }
					if(item["yazi"]) { yazi_func(item["yazi"].buyuk, item["yazi"].kucuk); }
					
					clearInterval(item.timer);
				}
			}, 1000);
		});
	}
}

function muzik_cal(sta) {
	if(sta == 1) {
		music.play();
	}else{
		music.pause();
	}
}

function can_eksilt() {
	can_int = setInterval(function() {
		if(can < 2) {
			yazi_func("WASTED","Çok fazla gereksiz zaman harcadın. Bedenin buna dayanamadı.");
		}else{
			can_func("-1");
		}
	}, 3000);
}

function yenilvl_func(yeni_lvl) {
	level = yeni_lvl;
	setup(level);
}

function para_func(deger) {
	var mevcut = parseInt(para);
	var yeni = mevcut + parseInt(deger);
	para = yeni;
	
	var eklenecek = "";
	if(deger < 10) {
		eklenecek = "0000000";
	}else if(deger < 100)
	{
		eklenecek = "000000";
	}else if(deger < 1000)
	{
		eklenecek = "00000";
	}
	
	$("#para").html("$" + eklenecek + yeni);
}

function can_func(deger) {
	var mevcut = parseInt(can);
	var yeni = mevcut + parseInt(deger);
	can = yeni;
	
	$( "#can" ).html("♥ " + yeni);
}

function polis_func(deger) {
	var mevcut = parseInt(polis);
	var yeni = mevcut + parseInt(deger);
	polis = yeni;
	
	for(i=0; i<6; i++){
		if(i<deger) {
			$( "#cop"+i).css("color", "#66BBEF");
		}else{
			$( "#cop"+i).css("color", "#1B5370");
		}
	}
}

function silah_func(deger) {
	silah = deger;
	var adres = "";
	
	if(deger == "0") {
		adres = "el.png";
	}else if(deger == "1"){
		adres = "silah.png";
	}else if(deger == "2"){
		adres = "cay.png";
	}else if(deger == "3"){
		adres = "yem.png";
	}
	
	$( "#silah" ).css("background-image", "url(images/"+adres+")");
}

function yazi_func(buyuk, kucuk) {
	$('#yazi #head').text(buyuk);
	$('#yazi #small').text(kucuk);
	$( "#yazi" ).fadeIn();
	$( "#karanlik" ).fadeIn();
	
	diemotherfuckerdie();
}

function diemotherfuckerdie() {
	clearInterval(zmn_int);
	clearInterval(can_int);
	
	video.pause();
	music.pause();
	
	//zaman reset
	/* $('#saat').html("10:00");
	zi = 0; */
}