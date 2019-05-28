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
			"link" : "https://drive.google.com/uc?export=download&id=1NGgMtlPvPlUZ3O_Nh7HIDOTDMSxZaV2d",
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
			"link" : "https://drive.google.com/uc?export=download&id=1yvjLqh5pLsIX4UYrotPywIXLzc0y8L3f",
			"secenekler" : {
				"1" : {
					"sahne" : "s02",
					"yazi" : "Çevreye Bakın",
				},
			},
		},
		"s02" : {
			//çevreyebakın
			"link" : "https://drive.google.com/uc?export=download&id=1ArJKeh3gOx1T988WkuukUK5QSfX5UKEK",
			"secenekler" : {
				"1" : {
					"sahne" : "s03.01",
					"yazi" : "Yürümeye Devam Et",
				},
			},
		},
		"s03.01" : {
			//yürümeyedevamet
			"link" : "https://drive.google.com/uc?export=download&id=1Z9dJPnkhItLhubWoQNgMcNZgxnL2CZHi",
			"secenekler" : {
				"1" : {
					"sahne" : "s03",
					"yazi" : "Çay İç",
				},
			},
		},
		"s03" : {
			//çayiçamaparayok
			"link" : "https://drive.google.com/uc?export=download&id=114rfmWJhsyeOLZJMXBH88Y7E0h7H2RDB",
			"secenekler" : {
				"1" : {
					"sahne" : "s04",
					"yazi" : "ATM Bul",
				},
			},
		},
		"s04" : {
			//atmgit
			"link" : "https://drive.google.com/uc?export=download&id=1OsuuYKsS7W7q81xflcoddmPxnDNNcwJ-",
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
			"link" : "https://drive.google.com/uc?export=download&id=1oT-M6ngUXmHzTt6QHmw2cU_DB4mvEa1H",
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
			"link" : "https://drive.google.com/uc?export=download&id=1Q4AGdNdrHVGHbxDmL7PWf3Bx9iKODSlO",
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
			"link" : "https://drive.google.com/uc?export=download&id=1gAVEovjsSiehb3dWRzDDTcbdn9Ot798H",
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
			"link" : "https://drive.google.com/uc?export=download&id=1qL4Q_FQT2jBDFvjSqcDNq7ydHU_BO8eo",
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
			"link" : "https://drive.google.com/uc?export=download&id=1E_o4Sej5SzhBxonkKX-zmP6i4sB1aOQa",
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
			"link" : "https://drive.google.com/uc?export=download&id=1S3hl07c6Yz7P2yD9d0VgHA0K6FGIitjO",
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
			"link" : "https://drive.google.com/uc?export=download&id=17zk1OZvj0tkjxTjgYgDfMZ3WGLIpE08t",
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
			"link" : "https://drive.google.com/uc?export=download&id=118zJqE2Xk1mvfw-NPOU3CCcBKA0pJof_",
			"secenekler" : {
				"1" : {
					"sahne" : "s301",
					"yazi" : "Takip Et",
				},
			},
		},
		"s22" : {
			//koşmaya devam et
			"link" : "https://drive.google.com/uc?export=download&id=1Eo7crL8KHAAs7KM2PSe_5sFeRgqmSqGy",
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
			"link" : "https://drive.google.com/uc?export=download&id=1rEVaM4eW-1ZgtFyjfbMUwM5oVZODakBU",
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
			"link" : "https://drive.google.com/uc?export=download&id=1lKSK7YH_c61RpsZT_P-j19eII2B_1rjJ",
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
			"link" : "https://drive.google.com/uc?export=download&id=1FMyqR3v7g1QMF90fRAiVcdJxdlAqIWmJ",
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
			"link" : "https://drive.google.com/uc?export=download&id=1WJNnqbdzd4gs1cfgOywvl5K3W0zIAab4",
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
			"link" : "https://drive.google.com/uc?export=download&id=1-jLLpY_JwxCc6tGpke9M9KhO3WB8WM9s",
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
			"link" : "https://drive.google.com/uc?export=download&id=1OlDpnhwuI6DjWs9QOSLtoq39UcPg712v",
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
			"link" : "https://drive.google.com/uc?export=download&id=1hUaoSHqjHpLp7OeorTeTudl75OAUJCyr",
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
			"link" : "https://drive.google.com/uc?export=download&id=1K3aKWCGTo1F2eRb3xuHkH1AkperEXr0-",
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
			"link" : "https://drive.google.com/uc?export=download&id=1CEXt0-UhQypdBIr7EJHnxoDFoog7Wz0l",
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
			"link" : "https://drive.google.com/uc?export=download&id=10Y8Au2zvtwOKYsVZi0Dz5G2XQs6ceB5y",
			"secenekler" : {
				"1" : {
					"sahne" : "s37",
					"yazi" : "Neler oluyor?",
				},
			},
		},
		"s36" : {
			//benkimim
			"link" : "https://drive.google.com/uc?export=download&id=188xqzEVtMus9BsPBwM5SOLBH1A_aC4b1",
			"secenekler" : {
				"1" : {
					"sahne" : "s37",
					"yazi" : "Neler oluyor?",
				},
			},
		},
		"s37" : {
			//neleroluyor
			"link" : "https://drive.google.com/uc?export=download&id=1Fvsg9s2Hz0mwigFIULLWJrdSaxEUX2wN",
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
			"link" : "https://drive.google.com/uc?export=download&id=1LTATOQzsKumOh_R04q3-LJB96E1x321p",
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
			"link" : "https://drive.google.com/uc?export=download&id=1QIwLORczQlsvVg17WFUI1Yc3YjH2CV3j",
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
			"link" : "https://drive.google.com/uc?export=download&id=1Yr3T6PHBEqDwjhctfUSCEg8M5jRYV9Nc",
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
			"link" : "https://drive.google.com/uc?export=download&id=19SKP_GYUWgIQyT7pFb_LalD-d5VArP7D",
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
			"link" : "https://drive.google.com/uc?export=download&id=1zqhvlzgjxqRxe9BzmJhq7mF-pebiN7sX",
			"secenekler" : {
				"1" : {
					"sahne" : "s411",
					"yazi" : "Odunpazarına Git",
				},
			},
		},
		"s411" : {
			//odunpazarına git
			"link" : "https://drive.google.com/uc?export=download&id=19EQiPY9NVgVGbZs2HclNPZBK64KzawuE",
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
			"link" : "https://drive.google.com/uc?export=download&id=10kDW04fuCcouPOTw1s3md4EMEOpR8A6m",
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
			"link" : "https://drive.google.com/uc?export=download&id=14OWCl6gzZ3_hdftb4gblkVb5FEqoIV5S",
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
			"link" : "https://drive.google.com/uc?export=download&id=11qX7Upv9evvB195gen5SBDpnwAB6dEGe",
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
			"link" : "https://drive.google.com/uc?export=download&id=1ECXnssXRD5g6RTW0IHpxXYYPcC4rS16z",
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
			"link" : "https://drive.google.com/uc?export=download&id=12WNIRmGrz71EFJrQBa6oqKgDbJVpWF_5",
			"secenekler" : {
				"1" : {
					"sahne" : "s50",
					"yazi" : "Kapıdan Geç",
				},
			},
		},
		"s48" : {
			//kayboldun
			"link" : "https://drive.google.com/uc?export=download&id=1jxF1Q1bFrU-mhEVXSM4aqYXr-02m2NG1",
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
			"link" : "https://drive.google.com/uc?export=download&id=15lboDeezNv6WOTVCnhmCXrygw2ARgf5b",
			"secenekler" : {
				"1" : {
					"sahne" : "s50",
					"yazi" : "Kapıdan Geç",
				},
			},
		},
		"s49.1" : {
			//çıkış3
			"link" : "https://drive.google.com/uc?export=download&id=1_Rabf87M7Eu4z_fKi8aaInPPLxA-elge",
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
			"link" : "https://drive.google.com/uc?export=download&id=152cPqonaYeRnhl-PW_cOj2CxLuzwEmuo",
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
			"link" : "https://drive.google.com/uc?export=download&id=11c-EbNriyA8pEQjx52YRiUofYN8CyNvb",
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
			"link" : "https://drive.google.com/uc?export=download&id=19AofoXrIV6l7rOGcwemKa5H9k34xDPz9",
			"secenekler" : {
				"1" : {
					"sahne" : "s54",
					"yazi" : "Merdivene Yönel",
				},
			},
		},
		"s54" : {
			//merdiveneyönelx2
			"link" : "https://drive.google.com/uc?export=download&id=19AofoXrIV6l7rOGcwemKa5H9k34xDPz9",
			"secenekler" : {
				"1" : {
					"sahne" : "s57",
					"yazi" : "Merdivene Yönel",
				},
			},
		},
		"s57" : {
			//intihar
			"link" : "https://drive.google.com/uc?export=download&id=1tAKnQWmu3Qt_VEUDpp7mHTmPibeSJk83",
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
			"link" : "https://drive.google.com/uc?export=download&id=1zVHn7a5pGp3mgV-azsQk63Gx_DupPvOr",
			"secenekler" : {
				"1" : {
					"sahne" : "s59",
					"yazi" : "Geri Dön",
				},
			},
		},
		"s59" : {
			//atölyeyeyönel
			"link" : "https://drive.google.com/uc?export=download&id=1A7i9fTZMrghVrE08bmeUHmx_iSgm8IIQ",
			"secenekler" : {
				"1" : {
					"sahne" : "s61",
					"yazi" : "Geri Dön",
				},
			},
		},
		"s61" : {
			//sınıflakarşılaş
			"link" : "https://drive.google.com/uc?export=download&id=1X9lwN6sbZdJDO_l-kS7psSVjNNtvozvJ",
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
			"link" : "https://drive.google.com/uc?export=download&id=1RQEKCDDbgs940_RaBHnHJQboF-OyIdiN",
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
			"link" : "https://drive.google.com/uc?export=download&id=1biLx_F7NBmYvmFH57jRu2zFWtiOJlQ13",
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
			"link" : "https://drive.google.com/uc?export=download&id=1ne0_Cx0bFgws_3IM5Pd1wA9Nmr2xwpnC",
			"secenekler" : {
				"1" : {
					"sahne" : "s65",
					"yazi" : "Geri Dön",
				},
			},
		},
		"s65" : {
			//yeniportalıbul
			"link" : "https://drive.google.com/uc?export=download&id=1sfk0TIwifM7XgA1O3yEyu1GwI1k65fgp",
			"secenekler" : {
				"1" : {
					"sahne" : "s67",
					"yazi" : "Geri Dön",
				},
			},
		},
		"s67" : {
			//bedenibuldun
			"link" : "https://drive.google.com/uc?export=download&id=1HWwV8kS4CwvfFvp3lpvTlfqF8TIq38Ez",
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
			"link" : "https://drive.google.com/uc?export=download&id=1J_N35Z8z7dQbOAB8U-0xYO9DEraZDchZ",
			"secenekler" : {
				"1" : {
					"sahne" : "s68",
					"yazi" : "Geri Dön",
				},
			},
		},
		"s68" : {
			//bahçedebekle
			"link" : "https://drive.google.com/uc?export=download&id=1ruOVTbd17QiVhscJ5uMHnaNqCOCdv10Z4",
			"secenekler" : {
				"1" : {
					"sahne" : "s70",
					"yazi" : "Geri Dön",
				},
			},
		},
		"s70" : {
			//disconnect
			"link" : "https://drive.google.com/uc?export=download&id=1WcuXwwErZItRBfO033T8HjY5v_i291iw",
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