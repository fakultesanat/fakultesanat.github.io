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

var data = {
    "sahneler" : {
		/////trengarı
		
        "s00" : {
			//başlangıç
			"link" : "videos/a/s00.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s01",
					"yazi" : "Birine Sor",
				},
				"2" : {
					"sahne" : "s02",
					"yazi" : "Çevreye Bakın",
				},
			},
			"puan" : {
				"para" : "00000000",
				"can" : "100",
				"polis" : "0",
				"silah" : "0",
			},
		},
		"s01" : {
			//birinesor
			"link" : "videos/a/s01.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s02",
					"yazi" : "Çevreye Bakın",
				},
			},
		},
		"s02" : {
			//çevreyebakın
			"link" : "videos/a/s02.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s03.01",
					"yazi" : "Yürümeye Devam Et",
				},
			},
		},
		"s03.01" : {
			//yürümeyedevamet
			"link" : "videos/a/s03.1.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s03",
					"yazi" : "Çay İç",
				},
			},
		},
		"s03" : {
			//çayiçamaparayok
			"link" : "videos/a/s03.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s04",
					"yazi" : "ATM Bul",
				},
			},
		},
		"s04" : {
			//atmgit
			"link" : "videos/a/s04.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s05",
					"yazi" : "Gasp Yap",
				},
				"2" : {
					"sahne" : "s08",
					"yazi" : "Gizlice Çal",
				},
			},
		},
		"s05" : {
			//gaspyap
			"link" : "videos/a/s05.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s06",
					"yazi" : "Kaçmaya Devam Et",
				},
			},
			"olay" : {
				"0" : {
					"sure": "3",
					"para": "100",
				},
				"1" : {
					"sure": "3",
					"polis": "2",
				},
			}
		},
		"s06" : {
			//kaçmayadevamet
			"link" : "videos/a/s06.mp4",
			"secenekler" : {
			},
			"olay" : {
				"0" : {
					"sure" : "19",
					"yazi" : 
					{
						"buyuk" : "BUSTED",
						"kucuk" : "Polis tarafından yakalandın!",
					}
				},
			},
		},
		"s08" : {
			//gizliceçal
			"link" : "videos/a/s08.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s09",
					"yazi" : "Çay İç",
				},
			},
			"olay" : {
				"0" : {
					"sure" : "0",
					"para" : "10",
				},
			},
		},
		"s09" : {
			//çayiç
			"link" : "videos/a/s09.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s10",
					"yazi" : "Çay İçmeye Devam Et",
				},
				"2" : {
					"sahne" : "s20",
					"yazi" : "Portala Git",
				},
			},
			"olay" : {
				"0" : {
					"sure" : "38",
					"silah" : "2",
				},
				"1" : {
					"sure" : "35",
					"para" : "-5",
				},
			},
		},
		"s10" : {
			//çayiçdevamet
			"link" : "videos/a/s10.mp4",
			"secenekler" : {
			},
			"olay" : {
				"0" : {
					"sure" : "20",
					"yazi" : 
					{
						"buyuk" : "WASTED",
						"kucuk" : "Çok fazla gereksiz zaman harcadın. Vücudun buna dayanamadı!",
					}
				},
				"1" : {
					"sure" : "1",
					"silah" : "0",
				},
				"2" : {
					"sure" : "8",
					"silah" : "2",
				},
				"3" : {
					"sure" : "13",
					"silah" : "0",
				},
				"4" : {
					"sure" : "18",
					"silah" : "2",
				},
			},
		},
		
		/////adalar
		
		"s20" : {
			//başlangıç
			"link" : "videos/b/s20.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s21",
					"yazi" : "Saklan",
				},
				"2" : {
					"sahne" : "s22",
					"yazi" : "Koşmaya Devam Et",
				},
			},
			"puan" : {
				"para" : "02000000",
				"can" : "80",
				"polis" : "3",
				"silah" : "1",
			},
			"olay" : {
				"0" : {
					"sure" : "15",
					"yenilenme" : "s20",
				},
				"1" : {
					"sure" : "1",
					"silah" : "0",
				},
			},
		},
		"s21" : {
			//saklan
			"link" : "videos/b/s21.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s23",
					"yazi" : "Kalabalığa Karış",
				},
				"2" : {
					"sahne" : "s300",
					"yazi" : "Portalı Ara",
				},
			},
		},
		"s23" : {
			//kalabalığakarış ve takip et
			"link" : "videos/b/s23.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s301",
					"yazi" : "Takip Et",
				},
			},
		},
		"s22" : {
			//koşmaya devam et
			"link" : "videos/b/s22.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s25",
					"yazi" : "Saklan",
				},
				"2" : {
					"sahne" : "s26",
					"yazi" : "Koşmaya Devam Et",
				},
			},
		},
		"s25" : {
			//saklanvebroşürügör
			"link" : "videos/b/s25.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s302",
					"yazi" : "Portala Git",
				},
				"2" : {
					"sahne" : "s27",
					"yazi" : "Espark a Doğru Yönel",
				},
			},
		},
		"s26" : {
			//koşmayadevamet
			"link" : "videos/b/s26.mp4",
			"secenekler" : {
			},
			"olay" : {
				"0" : {
					"sure" : "17",
					"yazi" : 
					{
						"buyuk" : "WASTED",
						"kucuk" : "Çok fazla gereksiz zaman harcadın. Vücudun buna dayanamadı!",
					}
				},
			},
		},
		"s27" : {
			//espark a doğru yönel
			"link" : "videos/b/s27.mp4",
			"secenekler" : {
			},
			"olay" : {
				"0" : {
					"sure" : "12",
					"yazi" : 
					{
						"buyuk" : "BUSTED",
						"kucuk" : "Polis tarafından yakalandın!",
					},
				}
			}
		},
		
		
		/////hamamyolu
		
		"s300" : {
			//başlangıç1
			"link" : "videos/c/s300.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s31",
					"yazi" : "Yemlemeye Devam Et",
				},
				"2" : {
					"sahne" : "s32",
					"yazi" : "Etrafa Bak",
				},
			},
			"puan" : {
				"para" : "00001250",
				"can" : "95",
				"polis" : "0",
				"silah" : "3",
			},
			"olay" : {
				"0" : {
					"sure" : "18",
					"yenilenme" : "s300",
				},
			},
		},
		"s301" : {
			//başlangıç2
			"link" : "videos/c/s301.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s31",
					"yazi" : "Yemlemeye Devam Et",
				},
				"2" : {
					"sahne" : "s32",
					"yazi" : "Etrafa Bak",
				},
			},
			"puan" : {
				"para" : "00001250",
				"can" : "95",
				"polis" : "0",
				"silah" : "3",
			},
			"olay" : {
				"0" : {
					"sure" : "20",
					"yenilenme" : "s301",
				},
			},
		},
		"s302" : {
			//başlangıç3
			"link" : "videos/c/s302.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s31",
					"yazi" : "Yemlemeye Devam Et",
				},
				"2" : {
					"sahne" : "s32",
					"yazi" : "Etrafa Bak",
				},
			},
			"puan" : {
				"para" : "00001250",
				"can" : "95",
				"polis" : "0",
				"silah" : "3",
			},
			"olay" : {
				"0" : {
					"sure" : "11",
					"yenilenme" : "s301",
				},
			},
		},
		"s31" : {
			//devamet
			"link" : "videos/c/s31.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s33",
					"yazi" : "Konuşma İsteğini Kabul Et",
				},
				"2" : {
					"sahne" : "s34",
					"yazi" : "Konuşma İsteğini Reddet",
				},
			},
		},
		"s34" : {
			//reddet
			"link" : "videos/c/s34.mp4",
			"secenekler" : {
			},
			"olay" : {
				"0" : {
					"sure" : "6",
					"yazi" : 
					{
						"buyuk" : "WASTED",
						"kucuk" : "Çok fazla gereksiz zaman harcadın. Vücudun buna dayanamadı!",
					}
				},
			},
		},
		"s33" : {
			//kabulet
			"link" : "videos/c/s33.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s35",
					"yazi" : "Sen Kimsin?",
				},
				"2" : {
					"sahne" : "s36",
					"yazi" : "Ben Kimim?",
				},
			},
		},
		"s35" : {
			//senkimsin
			"link" : "videos/c/s35.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s37",
					"yazi" : "Neler oluyor?",
				},
			},
		},
		"s36" : {
			//benkimim
			"link" : "videos/c/s36.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s37",
					"yazi" : "Neler oluyor?",
				},
			},
		},
		"s37" : {
			//neleroluyor
			"link" : "videos/c/s37.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s003",
					"yazi" : "Kendini Çimdikle",
				},
				"2" : {
					"sahne" : "s40",
					"yazi" : "Portala Gir",
				},
			},
		},
		"s32" : {
			//etrafabak
			"link" : "videos/c/s32.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s35",
					"yazi" : "Sen Kimsin?",
				},
				"2" : {
					"sahne" : "s36",
					"yazi" : "Ben Kimim?",
				},
			},
		},
		"s003" : {
			//başlangıça dön
			"link" : "videos/c/s003.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s01",
					"yazi" : "Birine Sor",
				},
				"2" : {
					"sahne" : "s02",
					"yazi" : "Çevreye Bakın",
				},
			},
			"puan" : {
				"para" : "00000000",
				"can" : "100",
				"polis" : "0",
				"silah" : "0",
			},
			"olay" : {
				"0" : {
					"sure" : "3",
					"yenilenme" : "s00",
				},
			},
		},
		
		
		/////odunpazarı
		
		"s40" : {
			//başlangıç
			"link" : "videos/d/s40.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s41",
					"yazi" : "Sıradan Çık",
				},
				"2" : {
					"sahne" : "s42",
					"yazi" : "Sırada Bekle",
				},
			},
			"puan" : {
				"para" : "00000050",
				"can" : "100",
				"polis" : "0",
				"silah" : "0",
			},
			"olay" : {
				"0" : {
					"sure" : "1",
					"yenilenme" : "s40",
				},
			},
		},
		"s42" : {
			//sıradabekle
			"link" : "videos/d/s42.mp4",
			"secenekler" : {
			},
			"olay" : {
				"0" : {
					"sure" : "29",
					"yazi" : 
					{
						"buyuk" : "WASTED",
						"kucuk" : "Çok fazla gereksiz zaman harcadın. Vücudun buna dayanamadı!",
					}
				},
			},
		},
		"s41" : {
			//sıradançık
			"link" : "videos/d/s41.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s411",
					"yazi" : "Odunpazarına Git",
				},
			},
		},
		"s411" : {
			//odunpazarına git
			"link" : "videos/d/s411.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s43",
					"yazi" : "Beğen",
				},
				"2" : {
					"sahne" : "s44",
					"yazi" : "Beğenme",
				},
			},
		},
		"s43" : {
			//beğen
			"link" : "videos/d/s43.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s46",
					"yazi" : "Sola Dön",
				},
				"2" : {
					"sahne" : "s45",
					"yazi" : "Sağa Dön",
				},
			},
		},
		"s44" : {
			//beğenme
			"link" : "videos/d/s44.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s46",
					"yazi" : "Sola Dön",
				},
				"2" : {
					"sahne" : "s45",
					"yazi" : "Sağa Dön",
				},
			},
			"olay" : {
				"0" : {
					"sure" : "1",
					"polis" : "1",
				},
			},
		},
		"s45" : {
			//ilksağ
			"link" : "videos/d/s45.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s47",
					"yazi" : "Sola Dön",
				},
				"2" : {
					"sahne" : "s48",
					"yazi" : "Sağa Dön",
				},
			},
		},
		"s46" : {
			//ilksol
			"link" : "videos/d/s46.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s49.1",
					"yazi" : "Sola Dön",
				},
				"2" : {
					"sahne" : "s49",
					"yazi" : "Sağa Dön",
				},
			},
		},
		"s47" : {
			//çıkış1
			"link" : "videos/d/s47.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s50",
					"yazi" : "Kapıdan Geç",
				},
			},
		},
		"s48" : {
			//kayboldun
			"link" : "videos/d/s48.mp4",
			"secenekler" : {
			},
			"olay" : {
				"0" : {
					"sure" : "28",
					"yazi" : 
					{
						"buyuk" : "WASTED",
						"kucuk" : "Çok fazla gereksiz zaman harcadın. Vücudun buna dayanamadı!",
					}
				},
			},
		},
		"s49" : {
			//çıkış2
			"link" : "videos/d/s49.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s50",
					"yazi" : "Kapıdan Geç",
				},
			},
		},
		"s49.1" : {
			//çıkış3
			"link" : "videos/d/s49.1.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s50",
					"yazi" : "Kapıdan Geç",
				},
			},
		},
		
		
		/////bademlik
		
		"s50" : {
			//başlangıç
			"link" : "videos/e/s50.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s51",
					"yazi" : "Okula Gir",
				},
				"2" : {
					"sahne" : "s52",
					"yazi" : "Bahçede Kal",
				},
			},
			"puan" : {
				"para" : "00000175",
				"can" : "100",
				"polis" : "0",
				"silah" : "0",
			},
			"olay" : {
				"0" : {
					"sure" : "1",
					"yenilenme" : "s50",
				},
			},
		},		
		"s51" : {
			//okulagir
			"link" : "videos/e/s51.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s58",
					"yazi" : "Sola Yönel",
				},
				"2" : {
					"sahne" : "s53",
					"yazi" : "Merdivene Yönel",
				},
			},
		},
		"s53" : {
			//merdiveneyönel
			"link" : "videos/e/s53.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s54",
					"yazi" : "Merdivene Yönel",
				},
			},
		},
		"s54" : {
			//merdiveneyönelx2
			"link" : "videos/e/s53.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s57",
					"yazi" : "Merdivene Yönel",
				},
			},
		},
		"s57" : {
			//intihar
			"link" : "videos/e/s57.mp4",
			"secenekler" : {
			},
			"olay" : {
				"0" : {
					"sure" : "21",
					"yazi" : 
					{
						"buyuk" : "WASTED",
						"kucuk" : "Karakter bug'ta kaldı!",
					}
				}
			}
		},
		"s58" : {
			//solayönel
			"link" : "videos/e/s58.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s59",
					"yazi" : "Geri Dön",
				},
			},
		},
		"s59" : {
			//atölyeyeyönel
			"link" : "videos/e/s59.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s61",
					"yazi" : "Geri Dön",
				},
			},
		},
		"s61" : {
			//sınıflakarşılaş
			"link" : "videos/e/s61.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s62",
					"yazi" : "Karakteri Öldür",
				},
				"2" : {
					"sahne" : "s62",
					"yazi" : "Karakteri Öldürme",
				},
			},
		},
		"s62" : {
			//ölmüyor 1 saniyelik kara ekran videosu
			"link" : "videos/e/s62.mp4",
			"secenekler" : {
			},
			"olay" : {
				"0" : {
					"sure" : "0",
					"yazi" : 
					{
						"buyuk" : "'YOU ARE' BUSTED",
						"kucuk" : "Yakalandın!",
					}
				},
			},
		},
		"s52" : {
			//bahçedekal
			"link" : "videos/e/s52.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s63",
					"yazi" : "Bahçede Yürü",
				},
				"2" : {
					"sahne" : "s64",
					"yazi" : "Bahçede Bekle",
				},
			},
		},
		"s63" : {
			//bahçeyeyürü
			"link" : "videos/e/s63.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s65",
					"yazi" : "Geri Dön",
				},
			},
		},
		"s65" : {
			//yeniportalıbul
			"link" : "videos/e/s65.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s67",
					"yazi" : "Geri Dön",
				},
			},
		},
		"s67" : {
			//bedenibuldun
			"link" : "videos/e/s67.mp4",
			"secenekler" : {
			},
			"olay" : {
				"0" : {
					"sure" : "20",
					"yazi" : 
					{
						"buyuk" : "COMPLETED",
						"kucuk" : "Gerçek bedenine ulaştın!",
					}
				},
			},
		},
		"s64" : {
			//bahçedebekle
			"link" : "videos/e/s64.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s68",
					"yazi" : "Geri Dön",
				},
			},
		},
		"s68" : {
			//bahçedebekle
			"link" : "videos/e/s68.mp4",
			"secenekler" : {
				"1" : {
					"sahne" : "s70",
					"yazi" : "Geri Dön",
				},
			},
		},
		"s70" : {
			//disconnect
			"link" : "videos/e/s70.mp4",
			"secenekler" : {
			},
			"olay" : {
				"0" : {
					"sure" : "6",
					"yazi" : 
					{
						"buyuk" : "DISCONNECT",
						"kucuk" : "Karakter oynamayı reddetti!",
					}
				},
			},
		},
		
		
    },
}