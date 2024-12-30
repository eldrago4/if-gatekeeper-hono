const airports = [
    {
        "name": "Reykjavík",
        "icao": "BIKF",
        "coordinates": [
            63.985001,
            -22.6056
        ]
    },
    {
        "name": "Montréal",
        "icao": "CYUL",
        "coordinates": [
            45.467837,
            -73.742294
        ]
    },
    {
        "name": "Vancouver",
        "icao": "CYVR",
        "coordinates": [
            49.193901062,
            -123.183998108
        ]
    },
    {
        "name": "Toronto",
        "icao": "CYYZ",
        "coordinates": [
            43.6772,
            -79.6306
        ]
    },
    {
        "name": "Accra",
        "icao": "DGAA",
        "coordinates": [
            5.605189800262451,
            -0.16678600013256073
        ]
    },
    {
        "name": "Abuja",
        "icao": "DNAA",
        "coordinates": [
            9.00679,
            7.26317
        ]
    },
    {
        "name": "Lagos",
        "icao": "DNMM",
        "coordinates": [
            6.5773701667785645,
            3.321160078048706
        ]
    },
    {
        "name": "Zaventem",
        "icao": "EBBR",
        "coordinates": [
            50.901402,
            4.48444
        ]
    },
    {
        "name": "Berlin",
        "icao": "EDDB",
        "coordinates": [
            52.362247,
            13.500672
        ]
    },
    {
        "name": "Frankfurt am Main",
        "icao": "EDDF",
        "coordinates": [
            50.030241,
            8.561096
        ]
    },
    {
        "name": "Munich",
        "icao": "EDDM",
        "coordinates": [
            48.353802,
            11.7861
        ]
    },
    {
        "name": "Helsinki",
        "icao": "EFHK",
        "coordinates": [
            60.318363,
            24.963341
        ]
    },
    {
        "name": "Rovaniemi",
        "icao": "EFRO",
        "coordinates": [
            66.564796447754,
            25.830400466919
        ]
    },
    {
        "name": "Belfast",
        "icao": "EGAA",
        "coordinates": [
            54.6575012207,
            -6.2158298492399995
        ]
    },
    {
        "name": "Birmingham, West Midlands",
        "icao": "EGBB",
        "coordinates": [
            52.453899,
            -1.74803
        ]
    },
    {
        "name": "Manchester, Greater Manchester",
        "icao": "EGCC",
        "coordinates": [
            53.349375,
            -2.279521
        ]
    },
    {
        "name": "Luton, Bedfordshire",
        "icao": "EGGW",
        "coordinates": [
            51.874699,
            -0.368333
        ]
    },
    {
        "name": "Christchurch, Dorset",
        "icao": "EGHH",
        "coordinates": [
            50.780483,
            -1.839576
        ]
    },
    {
        "name": "Gatwick, Surrey",
        "icao": "EGKK",
        "coordinates": [
            51.148771,
            -0.192089
        ]
    },
    {
        "name": "London",
        "icao": "EGLL",
        "coordinates": [
            51.4706,
            -0.461941
        ]
    },
    {
        "name": "Newcastle upon Tyne, Tyne and Wear",
        "icao": "EGNT",
        "coordinates": [
            55.037958,
            -1.689577
        ]
    },
    {
        "name": "Edinburgh",
        "icao": "EGPH",
        "coordinates": [
            55.950145,
            -3.372288
        ]
    },
    {
        "name": "Amsterdam",
        "icao": "EHAM",
        "coordinates": [
            52.308601,
            4.76389
        ]
    },
    {
        "name": "Dublin",
        "icao": "EIDW",
        "coordinates": [
            53.428713,
            -6.262121
        ]
    },
    {
        "name": "Copenhagen",
        "icao": "EKCH",
        "coordinates": [
            55.617900848389,
            12.656000137329
        ]
    },
    {
        "name": "Balice",
        "icao": "EPKK",
        "coordinates": [
            50.077702,
            19.7848
        ]
    },
    {
        "name": "Göteborg",
        "icao": "ESGG",
        "coordinates": [
            57.6628,
            12.2798
        ]
    },
    {
        "name": "Stockholm",
        "icao": "ESSA",
        "coordinates": [
            59.64849,
            17.928829
        ]
    },
    {
        "name": "Riga",
        "icao": "EVRA",
        "coordinates": [
            56.923599,
            23.9711
        ]
    },
    {
        "name": "Cape Town",
        "icao": "FACT",
        "coordinates": [
            -33.9648017883,
            18.6016998291
        ]
    },
    {
        "name": "Durban",
        "icao": "FALE",
        "coordinates": [
            -29.6144444444,
            31.1197222222
        ]
    },
    {
        "name": "Johannesburg",
        "icao": "FAOR",
        "coordinates": [
            -26.1392,
            28.246
        ]
    },
    {
        "name": "Plaine Magnien",
        "icao": "FIMP",
        "coordinates": [
            -20.430201,
            57.683601
        ]
    },
    {
        "name": "Luanda",
        "icao": "FNLU",
        "coordinates": [
            -8.85837,
            13.2312
        ]
    },
    {
        "name": "Gran Canaria Island",
        "icao": "GCLP",
        "coordinates": [
            27.9319,
            -15.3866
        ]
    },
    {
        "name": "San Bartolomé",
        "icao": "GCRR",
        "coordinates": [
            28.945499,
            -13.6052
        ]
    },
    {
        "name": "Tenerife",
        "icao": "GCTS",
        "coordinates": [
            28.0445,
            -16.5725
        ]
    },
    {
        "name": "Marrakech",
        "icao": "GMMX",
        "coordinates": [
            31.606899261499997,
            -8.03629970551
        ]
    },
    {
        "name": "Addis Ababa",
        "icao": "HAAB",
        "coordinates": [
            8.97789,
            38.799301
        ]
    },
    {
        "name": "Bujumbura",
        "icao": "HBBA",
        "coordinates": [
            -3.32402,
            29.318501
        ]
    },
    {
        "name": "Cairo",
        "icao": "HECA",
        "coordinates": [
            30.111534,
            31.396694
        ]
    },
    {
        "name": "Hurghada",
        "icao": "HEGN",
        "coordinates": [
            27.176776,
            33.796692
        ]
    },
    {
        "name": "Nairobi",
        "icao": "HKJK",
        "coordinates": [
            -1.31923997402,
            36.9277992249
        ]
    },
    {
        "name": "Mombasa",
        "icao": "HKMO",
        "coordinates": [
            -4.03483,
            39.5942
        ]
    },
    {
        "name": "Port Sudan",
        "icao": "HSPN",
        "coordinates": [
            19.4335994720459,
            37.234100341796875
        ]
    },
    {
        "name": "Zanzibar",
        "icao": "HTZA",
        "coordinates": [
            -6.22202,
            39.224899
        ]
    },
    {
        "name": "Mopa",
        "icao": "VOGA",
        "coordinates": [
            15.744257,
            73.860625
        ]
    },
    {
        "name": "Atlanta",
        "icao": "KATL",
        "coordinates": [
            33.6367,
            -84.428101
        ]
    },
    {
        "name": "Boston",
        "icao": "KBOS",
        "coordinates": [
            42.36197,
            -71.0079
        ]
    },
    {
        "name": "Detroit",
        "icao": "KDTW",
        "coordinates": [
            42.21377,
            -83.353786
        ]
    },
    {
        "name": "Newark",
        "icao": "KEWR",
        "coordinates": [
            40.692501,
            -74.168701
        ]
    },
    {
        "name": "Dulles",
        "icao": "KIAD",
        "coordinates": [
            38.9445,
            -77.455803
        ]
    },
    {
        "name": "Houston",
        "icao": "KIAH",
        "coordinates": [
            29.984399795532227,
            -95.34140014648438
        ]
    },
    {
        "name": "New York",
        "icao": "KJFK",
        "coordinates": [
            40.639447,
            -73.779317
        ]
    },
    {
        "name": "Los Angeles",
        "icao": "KLAX",
        "coordinates": [
            33.942501,
            -118.407997
        ]
    },
    {
        "name": "Orlando",
        "icao": "KMCO",
        "coordinates": [
            28.429399490356445,
            -81.30899810791016
        ]
    },
    {
        "name": "Miami",
        "icao": "KMIA",
        "coordinates": [
            25.79319953918457,
            -80.29060363769531
        ]
    },
    {
        "name": "Ontario",
        "icao": "KONT",
        "coordinates": [
            34.056,
            -117.600998
        ]
    },
    {
        "name": "Chicago",
        "icao": "KORD",
        "coordinates": [
            41.9786,
            -87.9048
        ]
    },
    {
        "name": "Seattle",
        "icao": "KSEA",
        "coordinates": [
            47.447943,
            -122.310276
        ]
    },
    {
        "name": "San Francisco",
        "icao": "KSFO",
        "coordinates": [
            37.619806,
            -122.374821
        ]
    },
    {
        "name": "Paphos",
        "icao": "LCPH",
        "coordinates": [
            34.717999,
            32.485699
        ]
    },
    {
        "name": "Čilipi",
        "icao": "LDDU",
        "coordinates": [
            42.562247,
            18.265543
        ]
    },
    {
        "name": "Velika Gorica",
        "icao": "LDZA",
        "coordinates": [
            45.742901,
            16.0688
        ]
    },
    {
        "name": "Alicante",
        "icao": "LEAL",
        "coordinates": [
            38.2822,
            -0.558156
        ]
    },
    {
        "name": "Barcelona",
        "icao": "LEBL",
        "coordinates": [
            41.2971,
            2.07846
        ]
    },
    {
        "name": "Ibiza (Eivissa)",
        "icao": "LEIB",
        "coordinates": [
            38.872898,
            1.37312
        ]
    },
    {
        "name": "Madrid",
        "icao": "LEMD",
        "coordinates": [
            40.471926,
            -3.56264
        ]
    },
    {
        "name": "Málaga",
        "icao": "LEMG",
        "coordinates": [
            36.6749,
            -4.49911
        ]
    },
    {
        "name": "Zaragoza",
        "icao": "LEZG",
        "coordinates": [
            41.666199,
            -1.04155
        ]
    },
    {
        "name": "Bordeaux/Mérignac",
        "icao": "LFBD",
        "coordinates": [
            44.8283,
            -0.715556
        ]
    },
    {
        "name": "Paris (Roissy-en-France, Val-d'Oise)",
        "icao": "LFPG",
        "coordinates": [
            49.012798,
            2.55
        ]
    },
    {
        "name": "Paris (Orly, Val-de-Marne)",
        "icao": "LFPO",
        "coordinates": [
            48.72333,
            2.37944
        ]
    },
    {
        "name": "Spata-Artemida",
        "icao": "LGAV",
        "coordinates": [
            37.936401,
            23.9445
        ]
    },
    {
        "name": "Mykonos",
        "icao": "LGMK",
        "coordinates": [
            37.435101,
            25.348101
        ]
    },
    {
        "name": "Ferno (VA)",
        "icao": "LIMC",
        "coordinates": [
            45.6306,
            8.72811
        ]
    },
    {
        "name": "Caselle Torinese (TO)",
        "icao": "LIMF",
        "coordinates": [
            45.200802,
            7.64963
        ]
    },
    {
        "name": "Rome",
        "icao": "LIRF",
        "coordinates": [
            41.804532,
            12.251998
        ]
    },
    {
        "name": "Zgornji Brnik",
        "icao": "LJLJ",
        "coordinates": [
            46.223701,
            14.4576
        ]
    },
    {
        "name": "Tel Aviv",
        "icao": "LLBG",
        "coordinates": [
            32.011398,
            34.8867
        ]
    },
    {
        "name": "Valletta",
        "icao": "LMML",
        "coordinates": [
            35.857498,
            14.4775
        ]
    },
    {
        "name": "Innsbruck",
        "icao": "LOWI",
        "coordinates": [
            47.260201,
            11.344
        ]
    },
    {
        "name": "Vienna",
        "icao": "LOWW",
        "coordinates": [
            48.110298,
            16.5697
        ]
    },
    {
        "name": "Funchal",
        "icao": "LPMA",
        "coordinates": [
            32.697899,
            -16.7745
        ]
    },
    {
        "name": "Ponta Delgada",
        "icao": "LPPD",
        "coordinates": [
            37.7411994934,
            -25.6979007721
        ]
    },
    {
        "name": "Porto",
        "icao": "LPPR",
        "coordinates": [
            41.2481002808,
            -8.68138980865
        ]
    },
    {
        "name": "Lisbon",
        "icao": "LPPT",
        "coordinates": [
            38.7813,
            -9.13592
        ]
    },
    {
        "name": "Geneva",
        "icao": "LSGG",
        "coordinates": [
            46.238098,
            6.10895
        ]
    },
    {
        "name": "Zurich",
        "icao": "LSZH",
        "coordinates": [
            47.458056,
            8.548056
        ]
    },
    {
        "name": "Antalya",
        "icao": "LTAI",
        "coordinates": [
            36.898701,
            30.800501
        ]
    },
    {
        "name": "Arnavutköy, Istanbul",
        "icao": "LTFM",
        "coordinates": [
            41.261297,
            28.741951
        ]
    },
    {
        "name": "Gibraltar",
        "icao": "LXGB",
        "coordinates": [
            36.151199,
            -5.34966
        ]
    },
    {
        "name": "Kingston",
        "icao": "MKJP",
        "coordinates": [
            17.935699462890625,
            -76.7874984741211
        ]
    },
    {
        "name": "Guadalajara",
        "icao": "MMGL",
        "coordinates": [
            20.523342,
            -103.310108
        ]
    },
    {
        "name": "Ciudad de México",
        "icao": "MMMX",
        "coordinates": [
            19.435137,
            -99.071328
        ]
    },
    {
        "name": "Cancún",
        "icao": "MMUN",
        "coordinates": [
            21.039444,
            -86.874304
        ]
    },
    {
        "name": "Papeete",
        "icao": "NTAA",
        "coordinates": [
            -17.553699,
            -149.606995
        ]
    },
    {
        "name": "Auckland",
        "icao": "NZAA",
        "coordinates": [
            -37.01199,
            174.786331
        ]
    },
    {
        "name": "Christchurch",
        "icao": "NZCH",
        "coordinates": [
            -43.48939895629883,
            172.53199768066406
        ]
    },
    {
        "name": "Queenstown",
        "icao": "NZQN",
        "coordinates": [
            -45.021099,
            168.738998
        ]
    },
    {
        "name": "Kabul",
        "icao": "OAKB",
        "coordinates": [
            34.565899,
            69.212303
        ]
    },
    {
        "name": "Manama",
        "icao": "OBBI",
        "coordinates": [
            26.267295,
            50.63764
        ]
    },
    {
        "name": "Ad Dammam",
        "icao": "OEDF",
        "coordinates": [
            26.471201,
            49.797901
        ]
    },
    {
        "name": "Jeddah",
        "icao": "OEJN",
        "coordinates": [
            21.6796,
            39.156502
        ]
    },
    {
        "name": "Medina",
        "icao": "OEMA",
        "coordinates": [
            24.5534,
            39.705101
        ]
    },
    {
        "name": "Riyadh",
        "icao": "OERK",
        "coordinates": [
            24.9576,
            46.698799
        ]
    },
    {
        "name": "Tehran",
        "icao": "OIIE",
        "coordinates": [
            35.416099548339844,
            51.152198791503906
        ]
    },
    {
        "name": "Amman",
        "icao": "OJAI",
        "coordinates": [
            31.7226009369,
            35.9931983948
        ]
    },
    {
        "name": "Kuwait City",
        "icao": "OKKK",
        "coordinates": [
            29.226601,
            47.968899
        ]
    },
    {
        "name": "Beirut",
        "icao": "OLBA",
        "coordinates": [
            33.820899963378906,
            35.488399505615234
        ]
    },
    {
        "name": "Abu Dhabi",
        "icao": "OMAA",
        "coordinates": [
            24.443764,
            54.651718
        ]
    },
    {
        "name": "Al Ain",
        "icao": "OMAL",
        "coordinates": [
            24.261699676513672,
            55.60919952392578
        ]
    },
    {
        "name": "Dubai",
        "icao": "OMDB",
        "coordinates": [
            25.2527999878,
            55.3643989563
        ]
    },
    {
        "name": "Jebel Ali",
        "icao": "OMDW",
        "coordinates": [
            24.896356,
            55.161389
        ]
    },
    {
        "name": "Fujairah",
        "icao": "OMFJ",
        "coordinates": [
            25.1122,
            56.324001
        ]
    },
    {
        "name": "Ras Al Khaimah",
        "icao": "OMRK",
        "coordinates": [
            25.613500595092773,
            55.93880081176758
        ]
    },
    {
        "name": "Sharjah",
        "icao": "OMSJ",
        "coordinates": [
            25.3286,
            55.5172
        ]
    },
    {
        "name": "Muscat",
        "icao": "OOMS",
        "coordinates": [
            23.5933,
            58.284401
        ]
    },
    {
        "name": "Salalah",
        "icao": "OOSA",
        "coordinates": [
            17.038700103759766,
            54.09130096435547
        ]
    },
    {
        "name": "Baghdad",
        "icao": "ORBI",
        "coordinates": [
            33.262501,
            44.2346
        ]
    },
    {
        "name": "Doha",
        "icao": "OTHH",
        "coordinates": [
            25.273056,
            51.608056
        ]
    },
    {
        "name": "Sana'a",
        "icao": "OYSN",
        "coordinates": [
            15.476300239562988,
            44.21969985961914
        ]
    },
    {
        "name": "Anchorage",
        "icao": "PANC",
        "coordinates": [
            61.179004,
            -149.992561
        ]
    },
    {
        "name": "Hagåtña",
        "icao": "PGUM",
        "coordinates": [
            13.4834,
            144.796005
        ]
    },
    {
        "name": "Honolulu, Oahu",
        "icao": "PHNL",
        "coordinates": [
            21.32062,
            -157.924228
        ]
    },
    {
        "name": "Babelthuap Island",
        "icao": "PTRO",
        "coordinates": [
            7.36731,
            134.544236
        ]
    },
    {
        "name": "Kaohsiung (Xiaogang)",
        "icao": "RCKH",
        "coordinates": [
            22.577101,
            120.349998
        ]
    },
    {
        "name": "Taoyuan",
        "icao": "RCTP",
        "coordinates": [
            25.0777,
            121.233002
        ]
    },
    {
        "name": "Narita",
        "icao": "RJAA",
        "coordinates": [
            35.764702,
            140.386002
        ]
    },
    {
        "name": "Osaka",
        "icao": "RJBB",
        "coordinates": [
            34.427299,
            135.244003
        ]
    },
    {
        "name": "Sapporo",
        "icao": "RJCC",
        "coordinates": [
            42.7752,
            141.692001
        ]
    },
    {
        "name": "Tokoname",
        "icao": "RJGG",
        "coordinates": [
            34.858398,
            136.804993
        ]
    },
    {
        "name": "Takamatsu",
        "icao": "RJOT",
        "coordinates": [
            34.214199066199996,
            134.01600647
        ]
    },
    {
        "name": "Tokyo",
        "icao": "RJTT",
        "coordinates": [
            35.552299,
            139.779999
        ]
    },
    {
        "name": "Seoul",
        "icao": "RKSI",
        "coordinates": [
            37.469101,
            126.450996
        ]
    },
    {
        "name": "Seoul",
        "icao": "RKSS",
        "coordinates": [
            37.5583,
            126.791
        ]
    },
    {
        "name": "Naha",
        "icao": "ROAH",
        "coordinates": [
            26.195801,
            127.646004
        ]
    },
    {
        "name": "Manila (Pasay)",
        "icao": "RPLL",
        "coordinates": [
            14.5086,
            121.019997
        ]
    },
    {
        "name": "Lapu-Lapu City",
        "icao": "RPVM",
        "coordinates": [
            10.309261,
            123.97974
        ]
    },
    {
        "name": "Buenos Aires (Ezeiza)",
        "icao": "SAEZ",
        "coordinates": [
            -34.8222,
            -58.5358
        ]
    },
    {
        "name": "São Paulo",
        "icao": "SBGR",
        "coordinates": [
            -23.431944,
            -46.467778
        ]
    },
    {
        "name": "Quito",
        "icao": "SEQM",
        "coordinates": [
            -0.125399,
            -78.354306
        ]
    },
    {
        "name": "Bogota",
        "icao": "SKBO",
        "coordinates": [
            4.70159,
            -74.1469
        ]
    },
    {
        "name": "Georgetown",
        "icao": "SYCJ",
        "coordinates": [
            6.49855,
            -58.254101
        ]
    },
    {
        "name": "Osbourn",
        "icao": "TAPA",
        "coordinates": [
            17.1367,
            -61.792702
        ]
    },
    {
        "name": "Bridgetown",
        "icao": "TBPB",
        "coordinates": [
            13.0746,
            -59.4925
        ]
    },
    {
        "name": "Saint George's",
        "icao": "TGPY",
        "coordinates": [
            12.0042,
            -61.786201
        ]
    },
    {
        "name": "Castries",
        "icao": "TLPC",
        "coordinates": [
            14.0202,
            -60.992901
        ]
    },
    {
        "name": "Saint Martin",
        "icao": "TNCM",
        "coordinates": [
            18.041,
            -63.108898
        ]
    },
    {
        "name": "Port of Spain",
        "icao": "TTPP",
        "coordinates": [
            10.5954,
            -61.3372
        ]
    },
    {
        "name": "Kingstown",
        "icao": "TVSA",
        "coordinates": [
            13.156695,
            -61.149945
        ]
    },
    {
        "name": "Baku",
        "icao": "UBBB",
        "coordinates": [
            40.467498779296875,
            50.04669952392578
        ]
    },
    {
        "name": "Tashkent",
        "icao": "UTTT",
        "coordinates": [
            41.257900238,
            69.2811965942
        ]
    },
    {
        "name": "Moscow",
        "icao": "UUDD",
        "coordinates": [
            55.408798,
            37.9063
        ]
    },
    {
        "name": "Moscow",
        "icao": "UUEE",
        "coordinates": [
            55.972599,
            37.4146
        ]
    },
    {
        "name": "Ahmedabad",
        "icao": "VAAH",
        "coordinates": [
            23.0772,
            72.634697
        ]
    },
    {
        "name": "Aurangabad",
        "icao": "VAAU",
        "coordinates": [
            19.862699508666992,
            75.39810180664062
        ]
    },
    {
        "name": "Mumbai",
        "icao": "VABB",
        "coordinates": [
            19.0886993408,
            72.8678970337
        ]
    },
    {
        "name": "Bhuj",
        "icao": "VABJ",
        "coordinates": [
            23.2877998352,
            69.6701965332
        ]
    },
    {
        "name": "Vadodara",
        "icao": "VABO",
        "coordinates": [
            22.336201,
            73.226303
        ]
    },
    {
        "name": "Bhopal",
        "icao": "VABP",
        "coordinates": [
            23.2875003815,
            77.3374023438
        ]
    },
    {
        "name": "Vasco da Gama",
        "icao": "VOGO",
        "coordinates": [
            15.3808,
            73.831398
        ]
    },
    {
        "name": "Rajkot",
        "icao": "VAHS",
        "coordinates": [
            22.378824,
            71.039391
        ]
    },
    {
        "name": "Indore",
        "icao": "VAID",
        "coordinates": [
            22.7217998505,
            75.8011016846
        ]
    },
    {
        "name": "Jamnagar",
        "icao": "VAJM",
        "coordinates": [
            22.465499877929688,
            70.01260375976562
        ]
    },
    {
        "name": "Nagpur",
        "icao": "VANP",
        "coordinates": [
            21.092199,
            79.047203
        ]
    },
    {
        "name": "Pune",
        "icao": "VAPO",
        "coordinates": [
            18.5821,
            73.919701
        ]
    },
    {
        "name": "Surat",
        "icao": "VASU",
        "coordinates": [
            21.1141,
            72.741798
        ]
    },
    {
        "name": "Udaipur",
        "icao": "VAUD",
        "coordinates": [
            24.617700576799997,
            73.89610290530001
        ]
    },
    {
        "name": "Colombo",
        "icao": "VCBI",
        "coordinates": [
            7.180759906768799,
            79.88410186767578
        ]
    },
    {
        "name": "Phnom Penh (Pou Senchey)",
        "icao": "VDPP",
        "coordinates": [
            11.5466,
            104.844002
        ]
    },
    {
        "name": "Preah Sihanouk",
        "icao": "VDSV",
        "coordinates": [
            10.569498,
            103.631001
        ]
    },
    {
        "name": "Agartala",
        "icao": "VEAT",
        "coordinates": [
            23.886999,
            91.240402
        ]
    },
    {
        "name": "Bhubaneswar",
        "icao": "VEBS",
        "coordinates": [
            20.244400024399997,
            85.8178024292
        ]
    },
    {
        "name": "Kolkata",
        "icao": "VECC",
        "coordinates": [
            22.654699,
            88.446701
        ]
    },
    {
        "name": "Guwahati",
        "icao": "VEGT",
        "coordinates": [
            26.10610008239746,
            91.58589935302734
        ]
    },
    {
        "name": "Imphal",
        "icao": "VEIM",
        "coordinates": [
            24.7600002289,
            93.896697998
        ]
    },
    {
        "name": "Silchar",
        "icao": "VEKU",
        "coordinates": [
            24.9129009247,
            92.97869873050001
        ]
    },
    {
        "name": "Dibrugarh",
        "icao": "VEMN",
        "coordinates": [
            27.4839000702,
            95.0168991089
        ]
    },
    {
        "name": "Dimapur",
        "icao": "VEMR",
        "coordinates": [
            25.883899688699998,
            93.77110290530001
        ]
    },
    {
        "name": "Visakhapatnam",
        "icao": "VOVZ",
        "coordinates": [
            17.723506,
            83.227729
        ]
    },
    {
        "name": "Dhaka",
        "icao": "VGHS",
        "coordinates": [
            23.843347,
            90.397783
        ]
    },
    {
        "name": "Hong Kong",
        "icao": "VHHH",
        "coordinates": [
            22.308901,
            113.915001
        ]
    },
    {
        "name": "Amritsar",
        "icao": "VIAR",
        "coordinates": [
            31.7096,
            74.797302
        ]
    },
    {
        "name": "Varanasi",
        "icao": "VEBN",
        "coordinates": [
            25.452129,
            82.861805
        ]
    },
    {
        "name": "New Delhi",
        "icao": "VIDP",
        "coordinates": [
            28.55563,
            77.09519
        ]
    },
    {
        "name": "Gwalior",
        "icao": "VIGR",
        "coordinates": [
            26.29330062866211,
            78.22779846191406
        ]
    },
    {
        "name": "Jodhpur",
        "icao": "VIJO",
        "coordinates": [
            26.251100540161133,
            73.04889678955078
        ]
    },
    {
        "name": "Jaipur",
        "icao": "VIJP",
        "coordinates": [
            26.8242,
            75.812202
        ]
    },
    {
        "name": "Jammu",
        "icao": "VIJU",
        "coordinates": [
            32.688849,
            74.838152
        ]
    },
    {
        "name": "Leh",
        "icao": "VILH",
        "coordinates": [
            34.135899,
            77.546501
        ]
    },
    {
        "name": "Lucknow",
        "icao": "VILK",
        "coordinates": [
            26.7605991364,
            80.8892974854
        ]
    },
    {
        "name": "Srinagar",
        "icao": "VISR",
        "coordinates": [
            33.987099,
            74.7742
        ]
    },
    {
        "name": "Vientiane",
        "icao": "VLVT",
        "coordinates": [
            17.988300323500003,
            102.56300354
        ]
    },
    {
        "name": "Kathmandu",
        "icao": "VNKT",
        "coordinates": [
            27.6966,
            85.3591
        ]
    },
    {
        "name": "Bangalore",
        "icao": "VOBL",
        "coordinates": [
            13.1979,
            77.706299
        ]
    },
    {
        "name": "Gannavaram",
        "icao": "VOBZ",
        "coordinates": [
            16.530399,
            80.796799
        ]
    },
    {
        "name": "Coimbatore",
        "icao": "VOCB",
        "coordinates": [
            11.029999733,
            77.0434036255
        ]
    },
    {
        "name": "Kochi",
        "icao": "VOCI",
        "coordinates": [
            10.152,
            76.401901
        ]
    },
    {
        "name": "Calicut",
        "icao": "VOCL",
        "coordinates": [
            11.1368,
            75.955299
        ]
    },
    {
        "name": "Hyderabad",
        "icao": "VOHS",
        "coordinates": [
            17.231318,
            78.429855
        ]
    },
    {
        "name": "Kannur",
        "icao": "VOKN",
        "coordinates": [
            11.918614,
            75.547211
        ]
    },
    {
        "name": "Madurai",
        "icao": "VOMD",
        "coordinates": [
            9.83450984955,
            78.09339904790001
        ]
    },
    {
        "name": "Mangalore",
        "icao": "VOML",
        "coordinates": [
            12.9612998962,
            74.8900985718
        ]
    },
    {
        "name": "Chennai",
        "icao": "VOMM",
        "coordinates": [
            12.990005,
            80.169296
        ]
    },
    {
        "name": "Port Blair",
        "icao": "VOPB",
        "coordinates": [
            11.641208,
            92.729643
        ]
    },
    {
        "name": "Tirupati",
        "icao": "VOTP",
        "coordinates": [
            13.632499694800002,
            79.543296814
        ]
    },
    {
        "name": "Tiruchirappalli",
        "icao": "VOTR",
        "coordinates": [
            10.766223,
            78.71774
        ]
    },
    {
        "name": "Thiruvananthapuram",
        "icao": "VOTV",
        "coordinates": [
            8.48212,
            76.920097
        ]
    },
    {
        "name": "Bangkok",
        "icao": "VTBS",
        "coordinates": [
            13.681099891662598,
            100.74700164794922
        ]
    },
    {
        "name": "Phuket",
        "icao": "VTSP",
        "coordinates": [
            8.1132,
            98.316902
        ]
    },
    {
        "name": "Hanoi (Soc Son)",
        "icao": "VVNB",
        "coordinates": [
            21.221201,
            105.806999
        ]
    },
    {
        "name": "Ho Chi Minh City",
        "icao": "VVTS",
        "coordinates": [
            10.8188,
            106.652
        ]
    },
    {
        "name": "Yangon",
        "icao": "VYYY",
        "coordinates": [
            16.907300949099998,
            96.1332015991
        ]
    },
    {
        "name": "Denpasar",
        "icao": "WADD",
        "coordinates": [
            -8.74817,
            115.167
        ]
    },
    {
        "name": "Sentani",
        "icao": "WAJJ",
        "coordinates": [
            -2.579627,
            140.519857
        ]
    },
    {
        "name": "Jakarta",
        "icao": "WIII",
        "coordinates": [
            -6.1255698204,
            106.65599823
        ]
    },
    {
        "name": "Medan",
        "icao": "WIMM",
        "coordinates": [
            3.637847,
            98.870566
        ]
    },
    {
        "name": "Sepang",
        "icao": "WMKK",
        "coordinates": [
            2.74558,
            101.709999
        ]
    },
    {
        "name": "Dili",
        "icao": "WPDL",
        "coordinates": [
            -8.546562,
            125.524507
        ]
    },
    {
        "name": "Singapore",
        "icao": "WSSS",
        "coordinates": [
            1.35019,
            103.994003
        ]
    },
    {
        "name": "Brisbane",
        "icao": "YBBN",
        "coordinates": [
            -27.384199142456055,
            153.11700439453125
        ]
    },
    {
        "name": "Melbourne",
        "icao": "YMML",
        "coordinates": [
            -37.673302,
            144.843002
        ]
    },
    {
        "name": "Adelaide",
        "icao": "YPAD",
        "coordinates": [
            -34.947512,
            138.533393
        ]
    },
    {
        "name": "Perth",
        "icao": "YPPH",
        "coordinates": [
            -31.94029998779297,
            115.96700286865234
        ]
    },
    {
        "name": "Sydney",
        "icao": "YSSY",
        "coordinates": [
            -33.94609832763672,
            151.177001953125
        ]
    },
    {
        "name": "Beijing",
        "icao": "ZBAA",
        "coordinates": [
            40.080101013183594,
            116.58499908447266
        ]
    },
    {
        "name": "Beijing",
        "icao": "ZBAD",
        "coordinates": [
            39.509945,
            116.41092
        ]
    },
    {
        "name": "Guangzhou (Huadu)",
        "icao": "ZGGG",
        "coordinates": [
            23.392401,
            113.299004
        ]
    },
    {
        "name": "Wuhan (Huangpi)",
        "icao": "ZHHH",
        "coordinates": [
            30.774798,
            114.213723
        ]
    },
    {
        "name": "Haikou (Meilan)",
        "icao": "ZJHK",
        "coordinates": [
            19.9349,
            110.459
        ]
    },
    {
        "name": "Nanchang",
        "icao": "ZSCN",
        "coordinates": [
            28.864815,
            115.90271
        ]
    },
    {
        "name": "Hangzhou",
        "icao": "ZSHC",
        "coordinates": [
            30.23609,
            120.428865
        ]
    },
    {
        "name": "Shanghai (Pudong)",
        "icao": "ZSPD",
        "coordinates": [
            31.1434,
            121.805
        ]
    }
];

const routes = [{
    startICAO: 'OTHH',
    endICAO: 'VIDP'
    }, {
    startICAO: 'VABB',
    endICAO: 'VOCI'
    }, {
    startICAO: 'VAAH',
    endICAO: 'VABB'
    },
    {
        startICAO: 'VABB',
        endICAO: 'VOML'
    }, {
        startICAO: 'VCBI',
        endICAO: 'VOMM'
    }, {
        startICAO: 'LIMC',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VIDP',
        endICAO: 'VNKT'
    }, {
        startICAO: 'VABP',
        endICAO: 'VIDP'
    }, {
        startICAO: 'OKKK',
        endICAO: 'VIDP'
    }, {
        startICAO: 'CYVR',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VABB',
        endICAO: 'VOTV'
    }, {
        startICAO: 'VABB',
        endICAO: 'VTBS'
    }, {
        startICAO: 'VAAH',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VECC',
        endICAO: 'VEKU'
    }, {
        startICAO: 'VABO',
        endICAO: 'VIDP'
    }, {
        startICAO: 'OEJN',
        endICAO: 'VABB'
    }, {
        startICAO: 'VOCB',
        endICAO: 'VOMM'
    }, {
        startICAO: 'EGKK',
        endICAO: 'VOCI'
    }, {
        startICAO: 'VOHS',
        endICAO: 'VOTP'
    }, {
        startICAO: 'VABB',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VABB',
        endICAO: 'VEPT'
    }, {
        startICAO: 'VIDP',
        endICAO: 'VOTV'
    }, {
        startICAO: 'VABB',
        endICAO: 'VOCB'
    }, {
        startICAO: 'VIDP',
        endICAO: 'WSSS'
    }, {
        startICAO: 'OMAA',
        endICAO: 'VABB'
    }, {
        startICAO: 'VIDP',
        endICAO: 'VILH'
    }, {
        startICAO: 'OEJN',
        endICAO: 'VOHS'
    }, {
        startICAO: 'VAID',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VABB',
        endICAO: 'VOBL'
    }, {
        startICAO: 'VABB',
        endICAO: 'VAID'
    }, {
        startICAO: 'OKKK',
        endICAO: 'VABB'
    }, {
        startICAO: 'EGBB',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VIDP',
        endICAO: 'VOBZ'
    }, {
        startICAO: 'EHAM',
        endICAO: 'VIDP'
    }, {
        startICAO: 'LLBG',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VECC',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VIDP',
        endICAO: 'YMML'
    }, {
        startICAO: 'RKSI',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VIDP',
        endICAO: 'VILK'
    }, {
        startICAO: 'OMDB',
        endICAO: 'VABB'
    }, {
        startICAO: 'VGHS',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VILH',
        endICAO: 'VISR'
    }, {
        startICAO: 'VIDP',
        endICAO: 'VOMM'
    }, {
        startICAO: 'KEWR',
        endICAO: 'VABB'
    }, {
        startICAO: 'EGBB',
        endICAO: 'VIAR'
    }, {
        startICAO: 'VIAR',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VABB',
        endICAO: 'VIJP'
    }, {
        startICAO: 'VABB',
        endICAO: 'VIJO'
    }, {
        startICAO: 'OMDB',
        endICAO: 'VOHS'
    }, {
        startICAO: 'VIDP',
        endICAO: 'YSSY'
    }, {
        startICAO: 'LFPG',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VIDP',
        endICAO: 'VYYY'
    }, {
        startICAO: 'OEJN',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VABB',
        endICAO: 'VANP'
    }, {
        startICAO: 'VIDP',
        endICAO: 'VTBS'
    }, {
        startICAO: 'OTHH',
        endICAO: 'VABB'
    }, {
        startICAO: 'VHHH',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VAUD',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VOMM',
        endICAO: 'VOPB'
    }, {
        startICAO: 'VABB',
        endICAO: 'VOGO'
    }, {
        startICAO: 'VECC',
        endICAO: 'VNKT'
    }, {
        startICAO: 'VABB',
        endICAO: 'VECC'
    }, {
        startICAO: 'KORD',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VIDP',
        endICAO: 'VOBL'
    }, {
        startICAO: 'VIJU',
        endICAO: 'VILH'
    }, {
        startICAO: 'VAAU',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VAHS',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VABB',
        endICAO: 'VIAR'
    }, {
        startICAO: 'VEGT',
        endICAO: 'VEMR'
    }, {
        startICAO: 'OKKK',
        endICAO: 'VOMM'
    }, {
        startICAO: 'VABB',
        endICAO: 'VAJM'
    }, {
        startICAO: 'EGKK',
        endICAO: 'VOGA'
    }, {
        startICAO: 'VOPB',
        endICAO: 'VOVZ'
    }, {
        startICAO: 'KJFK',
        endICAO: 'VABB'
    }, {
        startICAO: 'KSFO',
        endICAO: 'VIDP'
    }, {
        startICAO: 'OMDB',
        endICAO: 'VOMM'
    }, {
        startICAO: 'VABB',
        endICAO: 'VAHS'
    }, {
        startICAO: 'VABB',
        endICAO: 'VEBN'
    }, {
        startICAO: 'VEBN',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VEPT',
        endICAO: 'VIDP'
    }, {
        startICAO: 'VIDP',
        endICAO: 'VIJO'
    }, {
        startICAO: 'KSFO',
        endICAO: 'VOBL'
    }];

const codeshares = [{
    startICAO: 'WSSS',
    endICAO: 'YSSY'
    },
    {
        startICAO: 'YSSY',
        endICAO: 'WSSS'
    },
    {
        startICAO: 'WSSS',
        endICAO: 'EGLL'
    },
    {
        startICAO: 'OMDB',
        endICAO: 'FIMP'
    },
    {
        startICAO: 'FIMP',
        endICAO: 'OMDB'
    },
    {
        startICAO: 'OMDB',
        endICAO: 'VABB'
    },
    {
        startICAO: 'VABB',
        endICAO: 'OMDB'
    },
    {
        startICAO: 'VHHH',
        endICAO: 'RKSI'
    },
    {
        startICAO: 'RKSI',
        endICAO: 'VHHH'
    },
    {
        startICAO: 'RKSI',
        endICAO: 'PHNL'
    },
];


const URLBASE = 'https://1ved.cloud/api/v2';
const UPDATE_INTERVAL = 60000;
const ANIMATION_DURATION = 59000;

const map = L.map('map').setView([20.5937, 78.9629], 4);

var Stadia_AlidadeSmoothDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}', {
    minZoom: 0,
    maxZoom: 20,
    attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    ext: 'png'
}).addTo(map);

var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    setZoom: 7,
    maxZoom: 18,
});

var Thunderforest_TransportDark = L.tileLayer('https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey={apikey}', {
    attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    apikey: 'ca647681c7b146619b484d6ee36fd93b',
    maxZoom: 22
});

var CyclOSM = L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
});

var baseMaps = {
    'Open Street Map': osm,
    'Smooth Dark': Stadia_AlidadeSmoothDark,
    'Dark Matter': CartoDB_DarkMatter,
    'Thunderforest Dark': Thunderforest_TransportDark,
    'CycIOSM': CyclOSM
};

var codesharesLayer = L.layerGroup();


L.control.layers(baseMaps, { 'Codeshares': codesharesLayer }).addTo(map);

const flightMarkers = {};

const inactivityTime = 15*60000; 
let inactivityTimeout;
let isPaused = false;


function showPopup() {
    const popupOverlay = document.createElement('div');
    popupOverlay.className = 'popup-overlay active';
    popupOverlay.innerHTML = `
        <div class="popup">
            <h2>Session Timeout</h2>
            <p>Are you still here?</p>
            <button id="resumeButton">Resume</button>
        </div>
    `;
    document.body.appendChild(popupOverlay);

    document.getElementById('resumeButton').addEventListener('click', () => {
        isPaused = false;
        document.body.removeChild(popupOverlay);
        fetchAndDisplayFlights(); 
    });
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimeout);
    if (isPaused) {
        isPaused = false; 
        fetchAndDisplayFlights();
    }
    inactivityTimeout = setTimeout(() => {
        isPaused = true; 
        showPopup(); 
    }, inactivityTime);
}

window.addEventListener('mousemove', resetInactivityTimer);
window.addEventListener('keydown', resetInactivityTimer);
window.addEventListener('click', resetInactivityTimer);

function interpolatePosition(startPos, endPos, factor) {
    return [
        startPos[0] + (endPos[0] - startPos[0]) * factor,
        startPos[1] + (endPos[1] - startPos[1]) * factor,
    ];
}

function smoothMoveMarker(marker, startPos, endPos, duration) {
    const startTime = performance.now();
    function animate() {
        const elapsed = performance.now() - startTime;
        const factor = Math.min(elapsed / duration, 1);
        marker.setLatLng(interpolatePosition(startPos, endPos, factor));
        if (factor < 1) {
            requestAnimationFrame(animate);
        }
    }
    animate();
}

function isICAO(identifier) {
    return identifier && identifier.length === 4 && /^[A-Z]{4}$/.test(identifier);
}

async function fetchOperators() {
    const response = await fetch('/1ved-cloud/app/assets/operators.json');
    const data = await response.json();
    return data.names;
}

async function fetchAndDisplayFlights() {
    if (isPaused) return;
    try {
        const sessionsResponse = await fetch(`${URLBASE}/sessions`);
        const sessionsData = await sessionsResponse.json();
        const expertSession = sessionsData.result.find(session => session.name === 'Expert');
        const sessionId = expertSession?.id;
        if (!sessionId) {
            console.error('Expert Server session not found');
            return;
        }
        const flightsResponse = await fetch(`${URLBASE}/sessions/${sessionId}/flights`);
        const flightsData = await flightsResponse.json();
        const operatorNames = await fetchOperators();
        const filteredFlights = flightsData.result.filter(flight => {
            const callsign = flight.callsign;
            return operatorNames.some(operator => callsign.startsWith(operator)) &&
                (callsign.endsWith('IN') || callsign.endsWith('IN Heavy') || callsign.endsWith('IN Super'));
        });
        const removeStaleMarkers = () => {
            for (const flightId in flightMarkers) {
                if (!filteredFlights.some(flight => flight.flightId === flightId)) {
                    map.removeLayer(flightMarkers[flightId].marker);
                    delete flightMarkers[flightId];
                }
            }
        };
        const processFlight = async flight => {
            const { flightId, heading, latitude, longitude, altitude, speed, callsign } = flight;
            const newPosition = [latitude, longitude];
            const previousPosition = flightMarkers[flightId]?.endPos || newPosition;
            try {
                const routeResponse = await fetch(`${URLBASE}/sessions/${sessionId}/flights/${flightId}/route`);
                if (!routeResponse.ok) return;
                const routeData = await routeResponse.json();
                const route = routeData.result;
                if (route.length > 1) {
                    const flightPlanResponse = await fetch(`${URLBASE}/sessions/${sessionId}/flights/${flightId}/flightplan`);
                    const flightPlanData = await flightPlanResponse.json();
                    const flightPlan = flightPlanData.result;
                    const firstWaypoint = flightPlan.flightPlanItems[0];
                    const lastWaypoint = flightPlan.flightPlanItems[flightPlan.flightPlanItems.length - 1];
                    const dep = isICAO(firstWaypoint.identifier) ? firstWaypoint.identifier : 'N/A';
                    const arrv = isICAO(lastWaypoint.identifier) ? lastWaypoint.identifier : 'N/A';
                    const depLatLng = [firstWaypoint.location.latitude, firstWaypoint.location.longitude];
                    const arrvLatLng = [lastWaypoint.location.latitude, lastWaypoint.location.longitude];
                    const updateMarker = marker => {
                        smoothMoveMarker(marker, previousPosition, newPosition, ANIMATION_DURATION);
                        flightMarkers[flightId].endPos = newPosition;
                        marker._icon.innerHTML = `<img src="/1ved-cloud/app/assets/aircraft-icon.svg" style="transform: rotate(${heading % 360}deg); width: 32px; height: 32px;"/>`;
                    };
                    const createMarker = () => {
                        const marker = L.marker(newPosition, {
                            icon: L.divIcon({
                                className: 'rotated-aircraft-icon',
                                html: `<img src="/1ved-cloud/app/assets/aircraft-icon.svg" style="transform: rotate(${heading % 360}deg); width: 32px; height: 32px;" />`,
                                iconSize: [5, 5],
                                iconAnchor: [16, 16],
                            }),
                        });
                        marker.bindTooltip(callsign, {
                            permanent: true,
                            direction: 'top',
                            className: 'callsign-label',
                            opacity: 0.9,
                            offset: [0, -11],
                        });
                        const style = document.createElement('style');
                        style.textContent = `
                            .callsign-label {
                                background-color: rgba(0, 0, 0, 0.45);
                                color: rgb(255,223,0);
                                border: none;
                                border-radius: 5px;
                                padding: 1px;
                                font-size: 10px;
                                text-align: center;
                                pointer-events: none;
                                white-space: nowrap;
                                font-weight: bold;
                            }
                            .callsign-label::before {
                                display: none;
                            }
                        `;
                        document.head.appendChild(style);
                        marker.bindPopup(`
                            <div class="flight-popup">
                                <b>${callsign}</b><br>
                                <b>Route:</b> ${dep} - ${arrv}<br>
                                ${altitude < 10000 ? Math.ceil(altitude) + ' ft' : 'FL' + Math.ceil(altitude / 100)} |
                                ${Math.ceil(speed)} kts
                            </div>
                            <style>
                                .flight-popup {
                                    background-color: rgba(223, 223, 223, 0.741);
                                    padding: 5px;
                                    margin: 0;
                                    border-radius: 5px;
                                    box-shadow: none;
                                    border: none;
                                }
                                .leaflet-popup-content-wrapper, .leaflet-popup-tip-container {
                                    background: transparent;
                                }
                                .leaflet-popup-content {
                                    margin: 0;
                                }
                            </style>
                        `);
                        let dashedLine = null;
                        marker.on('popupopen', () => {
                            dashedLine = L.polyline([depLatLng, arrvLatLng], {
                                color: 'black',
                                weight: 1,
                                dashArray: '4, 8',
                            }).addTo(map);
                        });
                        marker.on('popupclose', () => {
                            if (dashedLine) {
                                map.removeLayer(dashedLine);
                            }
                        });
                        flightMarkers[flightId] = { marker, endPos: newPosition };
                        map.addLayer(marker);
                    };
                    if (flightMarkers[flightId]) {
                        updateMarker(flightMarkers[flightId].marker);
                    } else {
                        createMarker();
                    }
                }
            } catch (routeError) {
                console.error(`Error fetching route for flight ${flightId}:`, routeError);
            }
        };
        await Promise.all(filteredFlights.map(processFlight));
        removeStaleMarkers();
    } catch (error) {
        console.error('Error fetching flights:', error);
    }
}

fetchAndDisplayFlights();
setInterval(fetchAndDisplayFlights, UPDATE_INTERVAL);

const airportIcon = L.icon({
    iconUrl: 'https://github.com/eldrago4/if-gatekeeper-hono/blob/346b253289fd5cce06d9cff82c4d315982dd2c36/1ved-cloud/app/assets/airport-icon.png?raw=true',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16],
});

const highlightedRoutes = [];

function getAirportByICAO(icao) {
    return airports.find(a => a.icao === icao);
}

function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function calculateBezierCurve(start, end, numPoints = 100) {
    const midLat = (start[0] + end[0]) / 2;
    const midLng = (start[1] + end[1]) / 2;
    const dx = end[1] - start[1];
    const dy = end[0] - start[0];
    const controlLat = midLat + Math.abs(dx * 0.2);
    const controlLng = midLng - Math.abs(dy * 0.1);
    return Array.from({ length: numPoints + 1 }, (_, i) => {
        const t = i / numPoints;
        return [
            (1 - t) ** 2 * start[0] + 2 * (1 - t) * t * controlLat + t ** 2 * end[0],
            (1 - t) ** 2 * start[1] + 2 * (1 - t) * t * controlLng + t ** 2 * end[1],
        ];
    });
}

function addRoute(route) {
    const startAirport = getAirportByICAO(route.startICAO);
    const endAirport = getAirportByICAO(route.endICAO);
    if (!startAirport || !endAirport) return;
    const markerStart = L.marker(startAirport.coordinates, { icon: airportIcon, icao: startAirport.icao }).addTo(map)
        .bindPopup(`
            <div class="flight-popup">${startAirport.name}<br>(${startAirport.icao})</div>
            <style>
                .flight-popup {
                    background-color: rgba(223, 223, 223, 0.741);
                    font-weight: bold;
                    padding-left: 15px;
                    padding-right: 15px;
                    padding-top: 5px;
                    padding-bottom: 3px;
                    border-radius: 5px;
                    box-shadow: none;
                    border: none;
                }
                .leaflet-popup-content-wrapper, .leaflet-popup-tip-container {
                    background: transparent;
                }
                .leaflet-popup-content {
                    margin: 0;
                }
            </style>
        `);
    const markerEnd = L.marker(endAirport.coordinates, { icon: airportIcon, icao: endAirport.icao }).addTo(map)
        .bindPopup(`
            <div class="flight-popup">${endAirport.name}<br>(${endAirport.icao})</div>
            <style>
                .flight-popup {
                    background-color: rgba(223, 223, 223, 0.741);
                    font-weight: bold;
                    padding: 5px;
                    padding-left: 15px;
                    padding-right: 15px;
                    padding-top: 5px;
                    padding-bottom: 3px;
                    border-radius: 5px;
                    box-shadow: none;
                    border: none;
                }
                .leaflet-popup-content-wrapper, .leaflet-popup-tip-container {
                    background: transparent;
                }
                .leaflet-popup-content {
                    margin: 0;
                }
            </style>
        `);
    const curvePoints = calculateBezierCurve(startAirport.coordinates, endAirport.coordinates);
    const polyline = L.polyline(curvePoints, { color: 'blue', weight: 1 }).addTo(map);
    return { markerStart, markerEnd, polyline, route };
}

const elements = routes.map(addRoute);

function handleHover(event, isHover, isCodeshare = false) {
    if (highlightedRoutes.length === 0) {
        const hoveredIcao = event.target.options.icao;
        elements.forEach(e => e.route.startICAO === hoveredIcao || e.route.endICAO === hoveredIcao ?
            e.polyline.setStyle({ color: isHover ? 'red' : 'blue', weight: isHover ? 2.7 : 1 }) :
            e.polyline.setStyle({ opacity: isHover ? 0.2 : 1 })
        );
        if (isCodeshare) {
            codesharesLayer.eachLayer(layer => {
                const route = layer.options.route;
                if (route.startICAO === hoveredIcao || route.endICAO === hoveredIcao) {
                    layer.setStyle({ weight: isHover ? 2.7 : 1, opacity: 1 });
                } else {
                    layer.setStyle({ opacity: isHover ? 0.2 : 1 });
                }
            });
        }
    }
}

function handleClick(event) {
    const clickedIcao = event.target.options.icao;
    highlightedRoutes.forEach(e => e.polyline.setStyle({ color: 'blue', weight: 1 }));
    highlightedRoutes.length = 0;
    elements.forEach(e => {
        if (e.route.startICAO === clickedIcao || e.route.endICAO === clickedIcao) {
            e.polyline.setStyle({ color: 'red', weight: 2.7 });
            highlightedRoutes.push(e);
        } else {
            e.polyline.setStyle({ opacity: 0.2 });
        }
    });
    codesharesLayer.eachLayer(layer => {
        const route = layer.options.route;
        if (route.startICAO === clickedIcao || route.endICAO === clickedIcao) {
            layer.setStyle({ weight: 2.7, opacity: 1 });
            highlightedRoutes.push(layer);
        } else {
            layer.setStyle({ opacity: 0.2 });
        }
    });
}

function resetHighlight() {
    highlightedRoutes.forEach(e => e.polyline.setStyle({ color: 'blue', weight: 1 }));
    highlightedRoutes.length = 0;
    elements.forEach(e => e.polyline.setStyle({ opacity: 1 }));
    codesharesLayer.eachLayer(layer => {
        layer.setStyle({ weight: 1, opacity: 1 });
    });
}

elements.forEach(e => {
    e.markerStart.on('mouseover', event => handleHover(event, true));
    e.markerStart.on('mouseout', event => handleHover(event, false));
    e.markerEnd.on('mouseover', event => handleHover(event, true));
    e.markerEnd.on('mouseout', event => handleHover(event, false));
    e.markerStart.on('click', handleClick);
    e.markerEnd.on('click', handleClick);
});

codeshares.forEach(route => {
    const startAirport = getAirportByICAO(route.startICAO);
    const endAirport = getAirportByICAO(route.endICAO);
    if (startAirport && endAirport) {
        const curvePoints = calculateBezierCurve(startAirport.coordinates, endAirport.coordinates);
        const polyline = L.polyline(curvePoints, { color: 'goldenrod', weight: 1, opacity: 1 });
        polyline.on('mouseover', event => handleHover(event, true, true));
        polyline.on('mouseout', event => handleHover(event, false, true));
        polyline.on('click', handleClick);
        polyline.addTo(codesharesLayer);
    }
});

map.on('click', resetHighlight);
map.on('popupclose', resetHighlight);
map.setZoom(5);
resetInactivityTimer();
