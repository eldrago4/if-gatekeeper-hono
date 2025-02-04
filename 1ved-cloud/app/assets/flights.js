const airports = [
    {
        name: "Reykjavík",
        icao: "BIKF",
        coordinates: [63.985001, -22.6056],
    },
    {
        name: "Montréal",
        icao: "CYUL",
        coordinates: [45.467837, -73.742294],
    },
    {
        name: "Vancouver",
        icao: "CYVR",
        coordinates: [49.193901062, -123.183998108],
    },
    {
        name: "Toronto",
        icao: "CYYZ",
        coordinates: [43.6772, -79.6306],
    },
    {
        name: "Accra",
        icao: "DGAA",
        coordinates: [5.605189800262451, -0.16678600013256073],
    },
    {
        name: "Abuja",
        icao: "DNAA",
        coordinates: [9.00679, 7.26317],
    },
    {
        name: "Lagos",
        icao: "DNMM",
        coordinates: [6.5773701667785645, 3.321160078048706],
    },
    {
        name: "Zaventem",
        icao: "EBBR",
        coordinates: [50.901402, 4.48444],
    },
    {
        name: "Berlin",
        icao: "EDDB",
        coordinates: [52.362247, 13.500672],
    },
    {
        name: "Frankfurt am Main",
        icao: "EDDF",
        coordinates: [50.030241, 8.561096],
    },
    {
        name: "Munich",
        icao: "EDDM",
        coordinates: [48.353802, 11.7861],
    },
    {
        name: "Helsinki",
        icao: "EFHK",
        coordinates: [60.318363, 24.963341],
    },
    {
        name: "Rovaniemi",
        icao: "EFRO",
        coordinates: [66.564796447754, 25.830400466919],
    },
    {
        name: "Belfast",
        icao: "EGAA",
        coordinates: [54.6575012207, -6.2158298492399995],
    },
    {
        name: "Birmingham, West Midlands",
        icao: "EGBB",
        coordinates: [52.453899, -1.74803],
    },
    {
        name: "Manchester, Greater Manchester",
        icao: "EGCC",
        coordinates: [53.349375, -2.279521],
    },
    {
        name: "Luton, Bedfordshire",
        icao: "EGGW",
        coordinates: [51.874699, -0.368333],
    },
    {
        name: "Christchurch, Dorset",
        icao: "EGHH",
        coordinates: [50.780483, -1.839576],
    },
    {
        name: "Gatwick, Surrey",
        icao: "EGKK",
        coordinates: [51.148771, -0.192089],
    },
    {
        name: "London",
        icao: "EGLL",
        coordinates: [51.4706, -0.461941],
    },
    {
        name: "Newcastle upon Tyne, Tyne and Wear",
        icao: "EGNT",
        coordinates: [55.037958, -1.689577],
    },
    {
        name: "Edinburgh",
        icao: "EGPH",
        coordinates: [55.950145, -3.372288],
    },
    {
        name: "Amsterdam",
        icao: "EHAM",
        coordinates: [52.308601, 4.76389],
    },
    {
        name: "Dublin",
        icao: "EIDW",
        coordinates: [53.428713, -6.262121],
    },
    {
        name: "Copenhagen",
        icao: "EKCH",
        coordinates: [55.617900848389, 12.656000137329],
    },
    {
        name: "Balice",
        icao: "EPKK",
        coordinates: [50.077702, 19.7848],
    },
    {
        name: "Göteborg",
        icao: "ESGG",
        coordinates: [57.6628, 12.2798],
    },
    {
        name: "Stockholm",
        icao: "ESSA",
        coordinates: [59.64849, 17.928829],
    },
    {
        name: "Riga",
        icao: "EVRA",
        coordinates: [56.923599, 23.9711],
    },
    {
        name: "Cape Town",
        icao: "FACT",
        coordinates: [-33.9648017883, 18.6016998291],
    },
    {
        name: "Durban",
        icao: "FALE",
        coordinates: [-29.6144444444, 31.1197222222],
    },
    {
        name: "Johannesburg",
        icao: "FAOR",
        coordinates: [-26.1392, 28.246],
    },
    {
        name: "Plaine Magnien",
        icao: "FIMP",
        coordinates: [-20.430201, 57.683601],
    },
    {
        name: "Luanda",
        icao: "FNLU",
        coordinates: [-8.85837, 13.2312],
    },
    {
        name: "Gran Canaria Island",
        icao: "GCLP",
        coordinates: [27.9319, -15.3866],
    },
    {
        name: "San Bartolomé",
        icao: "GCRR",
        coordinates: [28.945499, -13.6052],
    },
    {
        name: "Tenerife",
        icao: "GCTS",
        coordinates: [28.0445, -16.5725],
    },
    {
        name: "Marrakech",
        icao: "GMMX",
        coordinates: [31.606899261499997, -8.03629970551],
    },
    {
        name: "Addis Ababa",
        icao: "HAAB",
        coordinates: [8.97789, 38.799301],
    },
    {
        name: "Bujumbura",
        icao: "HBBA",
        coordinates: [-3.32402, 29.318501],
    },
    {
        name: "Cairo",
        icao: "HECA",
        coordinates: [30.111534, 31.396694],
    },
    {
        name: "Hurghada",
        icao: "HEGN",
        coordinates: [27.176776, 33.796692],
    },
    {
        name: "Nairobi",
        icao: "HKJK",
        coordinates: [-1.31923997402, 36.9277992249],
    },
    {
        name: "Mombasa",
        icao: "HKMO",
        coordinates: [-4.03483, 39.5942],
    },
    {
        name: "Port Sudan",
        icao: "HSPN",
        coordinates: [19.4335994720459, 37.234100341796875],
    },
    {
        name: "Zanzibar",
        icao: "HTZA",
        coordinates: [-6.22202, 39.224899],
    },
    {
        name: "Mopa",
        icao: "VOGA",
        coordinates: [15.744257, 73.860625],
    },
    {
        name: "Atlanta",
        icao: "KATL",
        coordinates: [33.6367, -84.428101],
    },
    {
        name: "Boston",
        icao: "KBOS",
        coordinates: [42.36197, -71.0079],
    },
    {
        name: "Detroit",
        icao: "KDTW",
        coordinates: [42.21377, -83.353786],
    },
    {
        name: "Newark",
        icao: "KEWR",
        coordinates: [40.692501, -74.168701],
    },
    {
        name: "Dulles",
        icao: "KIAD",
        coordinates: [38.9445, -77.455803],
    },
    {
        name: "Houston",
        icao: "KIAH",
        coordinates: [29.984399795532227, -95.34140014648438],
    },
    {
        name: "New York",
        icao: "KJFK",
        coordinates: [40.639447, -73.779317],
    },
    {
        name: "Los Angeles",
        icao: "KLAX",
        coordinates: [33.942501, -118.407997],
    },
    {
        name: "Orlando",
        icao: "KMCO",
        coordinates: [28.429399490356445, -81.30899810791016],
    },
    {
        name: "Miami",
        icao: "KMIA",
        coordinates: [25.79319953918457, -80.29060363769531],
    },
    {
        name: "Ontario",
        icao: "KONT",
        coordinates: [34.056, -117.600998],
    },
    {
        name: "Chicago",
        icao: "KORD",
        coordinates: [41.9786, -87.9048],
    },
    {
        name: "Seattle",
        icao: "KSEA",
        coordinates: [47.447943, -122.310276],
    },
    {
        name: "San Francisco",
        icao: "KSFO",
        coordinates: [37.619806, -122.374821],
    },
    {
        name: "Paphos",
        icao: "LCPH",
        coordinates: [34.717999, 32.485699],
    },
    {
        name: "Čilipi",
        icao: "LDDU",
        coordinates: [42.562247, 18.265543],
    },
    {
        name: "Velika Gorica",
        icao: "LDZA",
        coordinates: [45.742901, 16.0688],
    },
    {
        name: "Alicante",
        icao: "LEAL",
        coordinates: [38.2822, -0.558156],
    },
    {
        name: "Barcelona",
        icao: "LEBL",
        coordinates: [41.2971, 2.07846],
    },
    {
        name: "Ibiza (Eivissa)",
        icao: "LEIB",
        coordinates: [38.872898, 1.37312],
    },
    {
        name: "Madrid",
        icao: "LEMD",
        coordinates: [40.471926, -3.56264],
    },
    {
        name: "Málaga",
        icao: "LEMG",
        coordinates: [36.6749, -4.49911],
    },
    {
        name: "Zaragoza",
        icao: "LEZG",
        coordinates: [41.666199, -1.04155],
    },
    {
        name: "Bordeaux/Mérignac",
        icao: "LFBD",
        coordinates: [44.8283, -0.715556],
    },
    {
        name: "Paris (Roissy-en-France, Val-d'Oise)",
        icao: "LFPG",
        coordinates: [49.012798, 2.55],
    },
    {
        name: "Paris (Orly, Val-de-Marne)",
        icao: "LFPO",
        coordinates: [48.72333, 2.37944],
    },
    {
        name: "Spata-Artemida",
        icao: "LGAV",
        coordinates: [37.936401, 23.9445],
    },
    {
        name: "Mykonos",
        icao: "LGMK",
        coordinates: [37.435101, 25.348101],
    },
    {
        name: "Ferno (VA)",
        icao: "LIMC",
        coordinates: [45.6306, 8.72811],
    },
    {
        name: "Caselle Torinese (TO)",
        icao: "LIMF",
        coordinates: [45.200802, 7.64963],
    },
    {
        name: "Rome",
        icao: "LIRF",
        coordinates: [41.804532, 12.251998],
    },
    {
        name: "Zgornji Brnik",
        icao: "LJLJ",
        coordinates: [46.223701, 14.4576],
    },
    {
        name: "Tel Aviv",
        icao: "LLBG",
        coordinates: [32.011398, 34.8867],
    },
    {
        name: "Valletta",
        icao: "LMML",
        coordinates: [35.857498, 14.4775],
    },
    {
        name: "Innsbruck",
        icao: "LOWI",
        coordinates: [47.260201, 11.344],
    },
    {
        name: "Vienna",
        icao: "LOWW",
        coordinates: [48.110298, 16.5697],
    },
    {
        name: "Funchal",
        icao: "LPMA",
        coordinates: [32.697899, -16.7745],
    },
    {
        name: "Ponta Delgada",
        icao: "LPPD",
        coordinates: [37.7411994934, -25.6979007721],
    },
    {
        name: "Porto",
        icao: "LPPR",
        coordinates: [41.2481002808, -8.68138980865],
    },
    {
        name: "Lisbon",
        icao: "LPPT",
        coordinates: [38.7813, -9.13592],
    },
    {
        name: "Geneva",
        icao: "LSGG",
        coordinates: [46.238098, 6.10895],
    },
    {
        name: "Zurich",
        icao: "LSZH",
        coordinates: [47.458056, 8.548056],
    },
    {
        name: "Antalya",
        icao: "LTAI",
        coordinates: [36.898701, 30.800501],
    },
    {
        name: "Arnavutköy, Istanbul",
        icao: "LTFM",
        coordinates: [41.261297, 28.741951],
    },
    {
        name: "Gibraltar",
        icao: "LXGB",
        coordinates: [36.151199, -5.34966],
    },
    {
        name: "Kingston",
        icao: "MKJP",
        coordinates: [17.935699462890625, -76.7874984741211],
    },
    {
        name: "Guadalajara",
        icao: "MMGL",
        coordinates: [20.523342, -103.310108],
    },
    {
        name: "Ciudad de México",
        icao: "MMMX",
        coordinates: [19.435137, -99.071328],
    },
    {
        name: "Cancún",
        icao: "MMUN",
        coordinates: [21.039444, -86.874304],
    },
    {
        name: "Papeete",
        icao: "NTAA",
        coordinates: [-17.553699, -149.606995],
    },
    {
        name: "Auckland",
        icao: "NZAA",
        coordinates: [-37.01199, 174.786331],
    },
    {
        name: "Christchurch",
        icao: "NZCH",
        coordinates: [-43.48939895629883, 172.53199768066406],
    },
    {
        name: "Queenstown",
        icao: "NZQN",
        coordinates: [-45.021099, 168.738998],
    },
    {
        name: "Kabul",
        icao: "OAKB",
        coordinates: [34.565899, 69.212303],
    },
    {
        name: "Manama",
        icao: "OBBI",
        coordinates: [26.267295, 50.63764],
    },
    {
        name: "Ad Dammam",
        icao: "OEDF",
        coordinates: [26.471201, 49.797901],
    },
    {
        name: "Jeddah",
        icao: "OEJN",
        coordinates: [21.6796, 39.156502],
    },
    {
        name: "Medina",
        icao: "OEMA",
        coordinates: [24.5534, 39.705101],
    },
    {
        name: "Riyadh",
        icao: "OERK",
        coordinates: [24.9576, 46.698799],
    },
    {
        name: "Tehran",
        icao: "OIIE",
        coordinates: [35.416099548339844, 51.152198791503906],
    },
    {
        name: "Amman",
        icao: "OJAI",
        coordinates: [31.7226009369, 35.9931983948],
    },
    {
        name: "Kuwait City",
        icao: "OKKK",
        coordinates: [29.226601, 47.968899],
    },
    {
        name: "Beirut",
        icao: "OLBA",
        coordinates: [33.820899963378906, 35.488399505615234],
    },
    {
        name: "Abu Dhabi",
        icao: "OMAA",
        coordinates: [24.443764, 54.651718],
    },
    {
        name: "Al Ain",
        icao: "OMAL",
        coordinates: [24.261699676513672, 55.60919952392578],
    },
    {
        name: "Dubai",
        icao: "OMDB",
        coordinates: [25.2527999878, 55.3643989563],
    },
    {
        name: "Jebel Ali",
        icao: "OMDW",
        coordinates: [24.896356, 55.161389],
    },
    {
        name: "Fujairah",
        icao: "OMFJ",
        coordinates: [25.1122, 56.324001],
    },
    {
        name: "Ras Al Khaimah",
        icao: "OMRK",
        coordinates: [25.613500595092773, 55.93880081176758],
    },
    {
        name: "Sharjah",
        icao: "OMSJ",
        coordinates: [25.3286, 55.5172],
    },
    {
        name: "Muscat",
        icao: "OOMS",
        coordinates: [23.5933, 58.284401],
    },
    {
        name: "Salalah",
        icao: "OOSA",
        coordinates: [17.038700103759766, 54.09130096435547],
    },
    {
        name: "Baghdad",
        icao: "ORBI",
        coordinates: [33.262501, 44.2346],
    },
    {
        name: "Doha",
        icao: "OTHH",
        coordinates: [25.273056, 51.608056],
    },
    {
        name: "Sana'a",
        icao: "OYSN",
        coordinates: [15.476300239562988, 44.21969985961914],
    },
    {
        name: "Anchorage",
        icao: "PANC",
        coordinates: [61.179004, -149.992561],
    },
    {
        name: "Hagatna",
        icao: "PGUM",
        coordinates: [13.4834, 144.796005],
    },
    {
        name: "Honolulu, Oahu",
        icao: "PHNL",
        coordinates: [21.32062, -157.924228],
    },
    {
        name: "Babelthuap Island",
        icao: "PTRO",
        coordinates: [7.36731, 134.544236],
    },
    {
        name: "Kaohsiung (Xiaogang)",
        icao: "RCKH",
        coordinates: [22.577101, 120.349998],
    },
    {
        name: "Taoyuan",
        icao: "RCTP",
        coordinates: [25.0777, 121.233002],
    },
    {
        name: "Narita",
        icao: "RJAA",
        coordinates: [35.764702, 140.386002],
    },
    {
        name: "Osaka",
        icao: "RJBB",
        coordinates: [34.427299, 135.244003],
    },
    {
        name: "Sapporo",
        icao: "RJCC",
        coordinates: [42.7752, 141.692001],
    },
    {
        name: "Tokoname",
        icao: "RJGG",
        coordinates: [34.858398, 136.804993],
    },
    {
        name: "Takamatsu",
        icao: "RJOT",
        coordinates: [34.214199066199996, 134.01600647],
    },
    {
        name: "Tokyo",
        icao: "RJTT",
        coordinates: [35.552299, 139.779999],
    },
    {
        name: "Seoul",
        icao: "RKSI",
        coordinates: [37.469101, 126.450996],
    },
    {
        name: "Seoul",
        icao: "RKSS",
        coordinates: [37.5583, 126.791],
    },
    {
        name: "Naha",
        icao: "ROAH",
        coordinates: [26.195801, 127.646004],
    },
    {
        name: "Manila (Pasay)",
        icao: "RPLL",
        coordinates: [14.5086, 121.019997],
    },
    {
        name: "Lapu-Lapu City",
        icao: "RPVM",
        coordinates: [10.309261, 123.97974],
    },
    {
        name: "Buenos Aires (Ezeiza)",
        icao: "SAEZ",
        coordinates: [-34.8222, -58.5358],
    },
    {
        name: "São Paulo",
        icao: "SBGR",
        coordinates: [-23.431944, -46.467778],
    },
    {
        name: "Quito",
        icao: "SEQM",
        coordinates: [-0.125399, -78.354306],
    },
    {
        name: "Bogota",
        icao: "SKBO",
        coordinates: [4.70159, -74.1469],
    },
    {
        name: "Georgetown",
        icao: "SYCJ",
        coordinates: [6.49855, -58.254101],
    },
    {
        name: "Osbourn",
        icao: "TAPA",
        coordinates: [17.1367, -61.792702],
    },
    {
        name: "Bridgetown",
        icao: "TBPB",
        coordinates: [13.0746, -59.4925],
    },
    {
        name: "Saint George's",
        icao: "TGPY",
        coordinates: [12.0042, -61.786201],
    },
    {
        name: "Castries",
        icao: "TLPC",
        coordinates: [14.0202, -60.992901],
    },
    {
        name: "Saint Martin",
        icao: "TNCM",
        coordinates: [18.041, -63.108898],
    },
    {
        name: "Port of Spain",
        icao: "TTPP",
        coordinates: [10.5954, -61.3372],
    },
    {
        name: "Kingstown",
        icao: "TVSA",
        coordinates: [13.156695, -61.149945],
    },
    {
        name: "Baku",
        icao: "UBBB",
        coordinates: [40.467498779296875, 50.04669952392578],
    },
    {
        name: "Tashkent",
        icao: "UTTT",
        coordinates: [41.257900238, 69.2811965942],
    },
    {
        name: "Moscow",
        icao: "UUDD",
        coordinates: [55.408798, 37.9063],
    },
    {
        name: "Moscow",
        icao: "UUEE",
        coordinates: [55.972599, 37.4146],
    },
    {
        name: "Ahmedabad",
        icao: "VAAH",
        coordinates: [23.0772, 72.634697],
    },
    {
        name: "Aurangabad",
        icao: "VAAU",
        coordinates: [19.862699508666992, 75.39810180664062],
    },
    {
        name: "Mumbai",
        icao: "VABB",
        coordinates: [19.0886993408, 72.8678970337],
    },
    {
        name: "Bhuj",
        icao: "VABJ",
        coordinates: [23.2877998352, 69.6701965332],
    },
    {
        name: "Vadodara",
        icao: "VABO",
        coordinates: [22.336201, 73.226303],
    },
    {
        name: "Bhopal",
        icao: "VABP",
        coordinates: [23.2875003815, 77.3374023438],
    },
    {
        name: "Vasco da Gama",
        icao: "VOGO",
        coordinates: [15.3808, 73.831398],
    },
    {
        name: "Rajkot",
        icao: "VAHS",
        coordinates: [22.378824, 71.039391],
    },
    {
        name: "Indore",
        icao: "VAID",
        coordinates: [22.7217998505, 75.8011016846],
    },
    {
        name: "Jamnagar",
        icao: "VAJM",
        coordinates: [22.465499877929688, 70.01260375976562],
    },
    {
        name: "Nagpur",
        icao: "VANP",
        coordinates: [21.092199, 79.047203],
    },
    {
        name: "Pune",
        icao: "VAPO",
        coordinates: [18.5821, 73.919701],
    },
    {
        name: "Surat",
        icao: "VASU",
        coordinates: [21.1141, 72.741798],
    },
    {
        name: "Udaipur",
        icao: "VAUD",
        coordinates: [24.617700576799997, 73.89610290530001],
    },
    {
        name: "Colombo",
        icao: "VCBI",
        coordinates: [7.180759906768799, 79.88410186767578],
    },
    {
        name: "Phnom Penh (Pou Senchey)",
        icao: "VDPP",
        coordinates: [11.5466, 104.844002],
    },
    {
        name: "Preah Sihanouk",
        icao: "VDSV",
        coordinates: [10.569498, 103.631001],
    },
    {
        name: "Agartala",
        icao: "VEAT",
        coordinates: [23.886999, 91.240402],
    },
    {
        name: "Bhubaneswar",
        icao: "VEBS",
        coordinates: [20.244400024399997, 85.8178024292],
    },
    {
        name: "Kolkata",
        icao: "VECC",
        coordinates: [22.654699, 88.446701],
    },
    {
        name: "Guwahati",
        icao: "VEGT",
        coordinates: [26.10610008239746, 91.58589935302734],
    },
    {
        name: "Imphal",
        icao: "VEIM",
        coordinates: [24.7600002289, 93.896697998],
    },
    {
        name: "Silchar",
        icao: "VEKU",
        coordinates: [24.9129009247, 92.97869873050001],
    },
    {
        name: "Dibrugarh",
        icao: "VEMN",
        coordinates: [27.4839000702, 95.0168991089],
    },
    {
        name: "Dimapur",
        icao: "VEMR",
        coordinates: [25.883899688699998, 93.77110290530001],
    },
    {
        name: "Visakhapatnam",
        icao: "VOVZ",
        coordinates: [17.723506, 83.227729],
    },
    {
        name: "Dhaka",
        icao: "VGHS",
        coordinates: [23.843347, 90.397783],
    },
    {
        name: "Hong Kong",
        icao: "VHHH",
        coordinates: [22.308901, 113.915001],
    },
    {
        name: "Amritsar",
        icao: "VIAR",
        coordinates: [31.7096, 74.797302],
    },
    {
        name: "Varanasi",
        icao: "VEBN",
        coordinates: [25.452129, 82.861805],
    },
    {
        name: "New Delhi",
        icao: "VIDP",
        coordinates: [28.55563, 77.09519],
    },
    {
        name: "Gwalior",
        icao: "VIGR",
        coordinates: [26.29330062866211, 78.22779846191406],
    },
    {
        name: "Jodhpur",
        icao: "VIJO",
        coordinates: [26.251100540161133, 73.04889678955078],
    },
    {
        name: "Jaipur",
        icao: "VIJP",
        coordinates: [26.8242, 75.812202],
    },
    {
        name: "Jammu",
        icao: "VIJU",
        coordinates: [32.688849, 74.838152],
    },
    {
        name: "Leh",
        icao: "VILH",
        coordinates: [34.135899, 77.546501],
    },
    {
        name: "Lucknow",
        icao: "VILK",
        coordinates: [26.7605991364, 80.8892974854],
    },
    {
        name: "Srinagar",
        icao: "VISR",
        coordinates: [33.987099, 74.7742],
    },
    {
        name: "Vientiane",
        icao: "VLVT",
        coordinates: [17.988300323500003, 102.56300354],
    },
    {
        name: "Kathmandu",
        icao: "VNKT",
        coordinates: [27.6966, 85.3591],
    },
    {
        name: "Bangalore",
        icao: "VOBL",
        coordinates: [13.1979, 77.706299],
    },
    {
        name: "Gannavaram",
        icao: "VOBZ",
        coordinates: [16.530399, 80.796799],
    },
    {
        name: "Coimbatore",
        icao: "VOCB",
        coordinates: [11.029999733, 77.0434036255],
    },
    {
        name: "Kochi",
        icao: "VOCI",
        coordinates: [10.152, 76.401901],
    },
    {
        name: "Calicut",
        icao: "VOCL",
        coordinates: [11.1368, 75.955299],
    },
    {
        name: "Hyderabad",
        icao: "VOHS",
        coordinates: [17.231318, 78.429855],
    },
    {
        name: "Kannur",
        icao: "VOKN",
        coordinates: [11.918614, 75.547211],
    },
    {
        name: "Madurai",
        icao: "VOMD",
        coordinates: [9.83450984955, 78.09339904790001],
    },
    {
        name: "Mangalore",
        icao: "VOML",
        coordinates: [12.9612998962, 74.8900985718],
    },
    {
        name: "Chennai",
        icao: "VOMM",
        coordinates: [12.990005, 80.169296],
    },
    {
        name: "Port Blair",
        icao: "VOPB",
        coordinates: [11.641208, 92.729643],
    },
    {
        name: "Tirupati",
        icao: "VOTP",
        coordinates: [13.632499694800002, 79.543296814],
    },
    {
        name: "Tiruchirappalli",
        icao: "VOTR",
        coordinates: [10.766223, 78.71774],
    },
    {
        name: "Thiruvananthapuram",
        icao: "VOTV",
        coordinates: [8.48212, 76.920097],
    },
    {
        name: "Bangkok",
        icao: "VTBS",
        coordinates: [13.681099891662598, 100.74700164794922],
    },
    {
        name: "Phuket",
        icao: "VTSP",
        coordinates: [8.1132, 98.316902],
    },
    {
        name: "Hanoi (Soc Son)",
        icao: "VVNB",
        coordinates: [21.221201, 105.806999],
    },
    {
        name: "Ho Chi Minh City",
        icao: "VVTS",
        coordinates: [10.8188, 106.652],
    },
    {
        name: "Yangon",
        icao: "VYYY",
        coordinates: [16.907300949099998, 96.1332015991],
    },
    {
        name: "Denpasar",
        icao: "WADD",
        coordinates: [-8.74817, 115.167],
    },
    {
        name: "Sentani",
        icao: "WAJJ",
        coordinates: [-2.579627, 140.519857],
    },
    {
        name: "Jakarta",
        icao: "WIII",
        coordinates: [-6.1255698204, 106.65599823],
    },
    {
        name: "Medan",
        icao: "WIMM",
        coordinates: [3.637847, 98.870566],
    },
    {
        name: "Sepang",
        icao: "WMKK",
        coordinates: [2.74558, 101.709999],
    },
    {
        name: "Dili",
        icao: "WPDL",
        coordinates: [-8.546562, 125.524507],
    },
    {
        name: "Singapore",
        icao: "WSSS",
        coordinates: [1.35019, 103.994003],
    },
    {
        name: "Brisbane",
        icao: "YBBN",
        coordinates: [-27.384199142456055, 153.11700439453125],
    },
    {
        name: "Melbourne",
        icao: "YMML",
        coordinates: [-37.673302, 144.843002],
    },
    {
        name: "Adelaide",
        icao: "YPAD",
        coordinates: [-34.947512, 138.533393],
    },
    {
        name: "Perth",
        icao: "YPPH",
        coordinates: [-31.94029998779297, 115.96700286865234],
    },
    {
        name: "Sydney",
        icao: "YSSY",
        coordinates: [-33.94609832763672, 151.177001953125],
    },
    {
        name: "Beijing",
        icao: "ZBAA",
        coordinates: [40.080101013183594, 116.58499908447266],
    },
    {
        name: "Beijing",
        icao: "ZBAD",
        coordinates: [39.509945, 116.41092],
    },
    {
        name: "Guangzhou (Huadu)",
        icao: "ZGGG",
        coordinates: [23.392401, 113.299004],
    },
    {
        name: "Wuhan (Huangpi)",
        icao: "ZHHH",
        coordinates: [30.774798, 114.213723],
    },
    {
        name: "Haikou (Meilan)",
        icao: "ZJHK",
        coordinates: [19.9349, 110.459],
    },
    {
        name: "Nanchang",
        icao: "ZSCN",
        coordinates: [28.864815, 115.90271],
    },
    {
        name: "Hangzhou",
        icao: "ZSHC",
        coordinates: [30.23609, 120.428865],
    },
    {
        name: "Shanghai (Pudong)",
        icao: "ZSPD",
        coordinates: [31.1434, 121.805],
    },
    {
        name: "Patna",
        icao: "VEPT",
        coordinates: [25.591299, 85.087997],
    },
    {
        name: "Barbados",
        icao: "TBPB",
        coordinates: [13.074722, 59.492222],
    },
];

const routes = [
    {
        "fnum": "AIH75",
        "startICAO": "VTBS",
        "endICAO": "VECC"
    },
    {
        "fnum": "IX684",
        "startICAO": "VOMD",
        "endICAO": "WSSS"
    },
    {
        "fnum": "IX1212",
        "startICAO": "VABB",
        "endICAO": "VOML"
    },
    {
        "fnum": "IX2892",
        "startICAO": "VEIM",
        "endICAO": "VEGT"
    },
    {
        "fnum": "IX1097",
        "startICAO": "VEBS",
        "endICAO": "VAPO"
    },
    {
        "fnum": "IX2710",
        "startICAO": "VERC",
        "endICAO": "VOBL"
    },
    {
        "fnum": "EY18",
        "startICAO": "EGLL",
        "endICAO": "OMAA"
    },
    {
        "fnum": "IX235",
        "startICAO": "VABB",
        "endICAO": "OOMS"
    },
    {
        "fnum": "IX558",
        "startICAO": "VOHS",
        "endICAO": "VOBL"
    },
    {
        "fnum": "IX1589",
        "startICAO": "VOBL",
        "endICAO": "VECC"
    },
    {
        "fnum": "D7600",
        "startICAO": "WMKK",
        "endICAO": "UAAA"
    },
    {
        "fnum": "GA657",
        "startICAO": "WAJJ",
        "endICAO": "WIII"
    },
    {
        "fnum": "LO571",
        "startICAO": "EPWA",
        "endICAO": "LYBE"
    },
    {
        "fnum": "AI2380",
        "startICAO": "VIDP",
        "endICAO": "WSSS"
    },
    {
        "fnum": "GA880",
        "startICAO": "WADD",
        "endICAO": "RJAA"
    },
    {
        "fnum": "IX297",
        "startICAO": "VABB",
        "endICAO": "OMAA"
    },
    {
        "fnum": "IX2511",
        "startICAO": "VOBL",
        "endICAO": "VAID"
    },
    {
        "fnum": "IX2643",
        "startICAO": "VECC",
        "endICAO": "VAID"
    },
    {
        "fnum": "EY5047",
        "startICAO": "OMAA",
        "endICAO": "EKCH"
    },
    {
        "fnum": "IX2511",
        "startICAO": "VAID",
        "endICAO": "VIDP"
    },
    {
        "fnum": "QZ542",
        "startICAO": "WADD",
        "endICAO": "YBCS"
    },
    {
        "fnum": "AI533",
        "startICAO": "VOBL",
        "endICAO": "VISR"
    },
    {
        "fnum": "IX251",
        "startICAO": "VABB",
        "endICAO": "OMSJ"
    },
    {
        "fnum": "IX2834",
        "startICAO": "VOHS",
        "endICAO": "VOCI"
    },
    {
        "fnum": "EY873",
        "startICAO": "OMAA",
        "endICAO": "RKSI"
    },
    {
        "fnum": "AI598",
        "startICAO": "VABB",
        "endICAO": "VOBZ"
    },
    {
        "fnum": "IX2754",
        "startICAO": "VOHS",
        "endICAO": "VISR"
    },
    {
        "fnum": "IX2838",
        "startICAO": "VOHS",
        "endICAO": "VEBN"
    },
    {
        "fnum": "AK9",
        "startICAO": "WMKK",
        "endICAO": "VOTV"
    },
    {
        "fnum": "IX265",
        "startICAO": "VABB",
        "endICAO": "OKKK"
    },
    {
        "fnum": "IX581",
        "startICAO": "VOTV",
        "endICAO": "OEDF"
    },
    {
        "fnum": "IX2711",
        "startICAO": "VOBL",
        "endICAO": "VILK"
    },
    {
        "fnum": "IX2931",
        "startICAO": "VOHS",
        "endICAO": "VEBS"
    },
    {
        "fnum": "AI150",
        "startICAO": "EGKK",
        "endICAO": "VOCI"
    },
    {
        "fnum": "AI151",
        "startICAO": "VIDP",
        "endICAO": "LSZH"
    },
    {
        "fnum": "IX420",
        "startICAO": "OMAA",
        "endICAO": "VOCI"
    },
    {
        "fnum": "IX743",
        "startICAO": "VOKN",
        "endICAO": "OMSJ"
    },
    {
        "fnum": "AI187",
        "startICAO": "VIDP",
        "endICAO": "CYYZ"
    },
    {
        "fnum": "IX968",
        "startICAO": "VOBL",
        "endICAO": "VOTV"
    },
    {
        "fnum": "IX3991",
        "startICAO": "VABB",
        "endICAO": "VAJM"
    },
    {
        "fnum": "FD130",
        "startICAO": "VTBD",
        "endICAO": "VIJP"
    },
    {
        "fnum": "IX178",
        "startICAO": "VASU",
        "endICAO": "VTBS"
    },
    {
        "fnum": "IX747",
        "startICAO": "VOKN",
        "endICAO": "OMDB"
    },
    {
        "fnum": "EY5059",
        "startICAO": "OMAA",
        "endICAO": "SCEL"
    },
    {
        "fnum": "IX2890",
        "startICAO": "VIJP",
        "endICAO": "VOHS"
    },
    {
        "fnum": "IX183",
        "startICAO": "VEBN",
        "endICAO": "OMSJ"
    },
    {
        "fnum": "IX717",
        "startICAO": "VOKN",
        "endICAO": "OMAA"
    },
    {
        "fnum": "XJ600",
        "startICAO": "VTBD",
        "endICAO": "RJAA"
    },
    {
        "fnum": "AI2479",
        "startICAO": "VIDP",
        "endICAO": "VABJ"
    },
    {
        "fnum": "AI457",
        "startICAO": "VILH",
        "endICAO": "VICG"
    },
    {
        "fnum": "GA401",
        "startICAO": "WADD",
        "endICAO": "WIII"
    },
    {
        "fnum": "GA810",
        "startICAO": "WIII",
        "endICAO": "WMKK"
    },
    {
        "fnum": "AI101",
        "startICAO": "VIDP",
        "endICAO": "KJFK"
    },
    {
        "fnum": "IX711",
        "startICAO": "VOKN",
        "endICAO": "OOMS"
    },
    {
        "fnum": "EY5013",
        "startICAO": "OMAA",
        "endICAO": "KATL"
    },
    {
        "fnum": "KT168",
        "startICAO": "VDPP",
        "endICAO": "WMKK"
    },
    {
        "fnum": "GA898",
        "startICAO": "WIII",
        "endICAO": "ZGGG"
    },
    {
        "fnum": "IX1098",
        "startICAO": "VEBS",
        "endICAO": "VECC"
    },
    {
        "fnum": "IX150",
        "startICAO": "OOMS",
        "endICAO": "VILK"
    },
    {
        "fnum": "GA870",
        "startICAO": "WADD",
        "endICAO": "ZSPD"
    },
    {
        "fnum": "GA872",
        "startICAO": "WIII",
        "endICAO": "VHHH"
    },
    {
        "fnum": "AI176",
        "startICAO": "KSFO",
        "endICAO": "VOBL"
    },
    {
        "fnum": "TK1629",
        "startICAO": "LTFM",
        "endICAO": "EDDM"
    },
    {
        "fnum": "GA814",
        "startICAO": "WADD",
        "endICAO": "VABB"
    },
    {
        "fnum": "GA861",
        "startICAO": "WIII",
        "endICAO": "VABB"
    },
    {
        "fnum": "IX2814",
        "startICAO": "VILK",
        "endICAO": "VOHS"
    },
    {
        "fnum": "AK604",
        "startICAO": "WMKK",
        "endICAO": "YPPH"
    },
    {
        "fnum": "SQ282",
        "startICAO": "NZAA",
        "endICAO": "WSSS"
    },
    {
        "fnum": "OD751",
        "startICAO": "WMKK",
        "endICAO": "UTTT"
    },
    {
        "fnum": "IX997",
        "startICAO": "VOHS",
        "endICAO": "OEJN"
    },
    {
        "fnum": "AI2847",
        "startICAO": "VIDP",
        "endICAO": "VOGO"
    },
    {
        "fnum": "AIH46",
        "startICAO": "DGAA",
        "endICAO": "VABB"
    },
    {
        "fnum": "AIH47",
        "startICAO": "VOBL",
        "endICAO": "EGLL"
    },
    {
        "fnum": "AIH49",
        "startICAO": "VOBL",
        "endICAO": "KJFK"
    },
    {
        "fnum": "OD272",
        "startICAO": "VIAR",
        "endICAO": "WMKK"
    },
    {
        "fnum": "AIH55",
        "startICAO": "VECC",
        "endICAO": "EGLL"
    },
    {
        "fnum": "OD174",
        "startICAO": "YPAD",
        "endICAO": "WADD"
    },
    {
        "fnum": "IX2761",
        "startICAO": "VOBL",
        "endICAO": "VOMM"
    },
    {
        "fnum": "Z292",
        "startICAO": "RPLL",
        "endICAO": "VMMC"
    },
    {
        "fnum": "OD122",
        "startICAO": "YPAD",
        "endICAO": "WMKK"
    },
    {
        "fnum": "EY423",
        "startICAO": "OMAA",
        "endICAO": "RPLL"
    },
    {
        "fnum": "IX106",
        "startICAO": "VILK",
        "endICAO": "VTBS"
    },
    {
        "fnum": "AI109 ",
        "startICAO": "VIDP",
        "endICAO": "VAAH"
    },
    {
        "fnum": "OD196",
        "startICAO": "NZAA",
        "endICAO": "YPPH"
    },
    {
        "fnum": "IX2762",
        "startICAO": "VOBL",
        "endICAO": "VOML"
    },
    {
        "fnum": "FD186",
        "startICAO": "VECC",
        "endICAO": "VTSP"
    },
    {
        "fnum": "LO229",
        "startICAO": "EPWA",
        "endICAO": "LOWI"
    },
    {
        "fnum": "AIH109",
        "startICAO": "VAAH",
        "endICAO": "HKJK"
    },
    {
        "fnum": "AIC202",
        "startICAO": "KEWR",
        "endICAO": "TBPB"
    },
    {
        "fnum": "ID6003",
        "startICAO": "WADD",
        "endICAO": "YMML"
    },
    {
        "fnum": "IX813",
        "startICAO": "VOML",
        "endICAO": "OMDB"
    },
    {
        "fnum": "AIH111",
        "startICAO": "VIAR",
        "endICAO": "LIRF"
    },
    {
        "fnum": "ID6005",
        "startICAO": "WADD",
        "endICAO": "YSSY"
    },
    {
        "fnum": "ZS501",
        "startICAO": "RPLL",
        "endICAO": "WBKK"
    },
    {
        "fnum": "LO231",
        "startICAO": "EPWA",
        "endICAO": "EBBR"
    },
    {
        "fnum": "ID6021",
        "startICAO": "WIMM",
        "endICAO": "VOMM"
    },
    {
        "fnum": "IX2692",
        "startICAO": "VIJP",
        "endICAO": "VOMM"
    },
    {
        "fnum": "AIH107",
        "startICAO": "VOHS",
        "endICAO": "KORD"
    },
    {
        "fnum": "IX1171",
        "startICAO": "VISR",
        "endICAO": "VIDP"
    },
    {
        "fnum": "EY216",
        "startICAO": "OMAA",
        "endICAO": "VOBL"
    },
    {
        "fnum": "AI2205",
        "startICAO": "VIDP",
        "endICAO": "OMDB"
    },
    {
        "fnum": "SL6215",
        "startICAO": "VOMM",
        "endICAO": "VTBS"
    },
    {
        "fnum": "IX1174",
        "startICAO": "VIDP",
        "endICAO": "VEBS"
    },
    {
        "fnum": "FD3146",
        "startICAO": "VTBD",
        "endICAO": "VTCC"
    },
    {
        "fnum": "LO251",
        "startICAO": "EPWA",
        "endICAO": "ELLX"
    },
    {
        "fnum": "IX2655",
        "startICAO": "VOMM",
        "endICAO": "VECC"
    },
    {
        "fnum": "IX1125",
        "startICAO": "VIDP",
        "endICAO": "VOGA"
    },
    {
        "fnum": "JT70",
        "startICAO": "WIII",
        "endICAO": "OEJN"
    },
    {
        "fnum": "IX995",
        "startICAO": "VOHS",
        "endICAO": "OERK"
    },
    {
        "fnum": "ID8061",
        "startICAO": "WPDL",
        "endICAO": "WADD"
    },
    {
        "fnum": "IX2641",
        "startICAO": "VECC",
        "endICAO": "VOPB"
    },
    {
        "fnum": "EY274",
        "startICAO": "OMAA",
        "endICAO": "VOHS"
    },
    {
        "fnum": "AI2017",
        "startICAO": "VIDP",
        "endICAO": "EGLL"
    },
    {
        "fnum": "OD281",
        "startICAO": "WMKK",
        "endICAO": "VECC"
    },
    {
        "fnum": "IX2542",
        "startICAO": "VOBL",
        "endICAO": "VIGR"
    },
    {
        "fnum": "IX173",
        "startICAO": "VASU",
        "endICAO": "OMDB"
    },
    {
        "fnum": "D7101",
        "startICAO": "WMKK",
        "endICAO": "HKJK"
    },
    {
        "fnum": "LO3879",
        "startICAO": "EPWA",
        "endICAO": "EPKT"
    },
    {
        "fnum": "AI157",
        "startICAO": "VIDP",
        "endICAO": "EKCH"
    },
    {
        "fnum": "AI485",
        "startICAO": "VIDP",
        "endICAO": "VOPB"
    },
    {
        "fnum": "AI860",
        "startICAO": "VIDP",
        "endICAO": "VABB"
    },
    {
        "fnum": "AI553",
        "startICAO": "VIDP",
        "endICAO": "VOHS"
    },
    {
        "fnum": "AI459",
        "startICAO": "VIDP",
        "endICAO": "VOBZ"
    },
    {
        "fnum": "AI451",
        "startICAO": "VIDP",
        "endICAO": "VOVZ"
    },
    {
        "fnum": "AI891",
        "startICAO": "VIDP",
        "endICAO": "VEGT"
    },
    {
        "fnum": "AI407",
        "startICAO": "VIDP",
        "endICAO": "VEPT"
    },
    {
        "fnum": "AI308",
        "startICAO": "VIDP",
        "endICAO": "YMML"
    },
    {
        "fnum": "AI302",
        "startICAO": "VIDP",
        "endICAO": "YSSY"
    },
    {
        "fnum": "AI153",
        "startICAO": "VIDP",
        "endICAO": "LOWW"
    },
    {
        "fnum": "AI939",
        "startICAO": "VIDP",
        "endICAO": "OBBI"
    },
    {
        "fnum": "AI227",
        "startICAO": "VIDP",
        "endICAO": "VGHS"
    },
    {
        "fnum": "AI185",
        "startICAO": "VIDP",
        "endICAO": "CYVR"
    },
    {
        "fnum": "AI155",
        "startICAO": "VIDP",
        "endICAO": "EHAM"
    },
    {
        "fnum": "AI143",
        "startICAO": "VIDP",
        "endICAO": "LFPG"
    },
    {
        "fnum": "AI121",
        "startICAO": "VIDP",
        "endICAO": "EDDF"
    },
    {
        "fnum": "AI314",
        "startICAO": "VIDP",
        "endICAO": "VHHH"
    },
    {
        "fnum": "AI137",
        "startICAO": "VIDP",
        "endICAO": "LIMC"
    },
    {
        "fnum": "AI306",
        "startICAO": "VIDP",
        "endICAO": "RJAA"
    },
    {
        "fnum": "AI961",
        "startICAO": "VIDP",
        "endICAO": "HKJK"
    },
    {
        "fnum": "AI901",
        "startICAO": "VIDP",
        "endICAO": "OKKK"
    },
    {
        "fnum": "AI235",
        "startICAO": "VIDP",
        "endICAO": "VYYY"
    },
    {
        "fnum": "AI211",
        "startICAO": "VIDP",
        "endICAO": "VNKT"
    },
    {
        "fnum": "AI971",
        "startICAO": "VIDP",
        "endICAO": "OTHH"
    },
    {
        "fnum": "AI913",
        "startICAO": "VIDP",
        "endICAO": "OEDF"
    },
    {
        "fnum": "AI991",
        "startICAO": "VIDP",
        "endICAO": "OEJN"
    },
    {
        "fnum": "AI925",
        "startICAO": "VIDP",
        "endICAO": "OERK"
    },
    {
        "fnum": "AI312",
        "startICAO": "VIDP",
        "endICAO": "RKSI"
    },
    {
        "fnum": "AI281",
        "startICAO": "VIDP",
        "endICAO": "VCBI"
    },
    {
        "fnum": "AI332",
        "startICAO": "VIDP",
        "endICAO": "VTBS"
    },
    {
        "fnum": "AI376",
        "startICAO": "VIDP",
        "endICAO": "VTSP"
    },
    {
        "fnum": "AI113",
        "startICAO": "VIDP",
        "endICAO": "EGBB"
    },
    {
        "fnum": "AI127",
        "startICAO": "VIDP",
        "endICAO": "KORD"
    },
    {
        "fnum": "AI105",
        "startICAO": "VIDP",
        "endICAO": "KEWR"
    },
    {
        "fnum": "AI104",
        "startICAO": "KIAD",
        "endICAO": "VIDP"
    },
    {
        "fnum": "AI173",
        "startICAO": "VIDP",
        "endICAO": "KSFO"
    },
    {
        "fnum": "AI184",
        "startICAO": "KSF0",
        "endICAO": "VIDP"
    },
    {
        "fnum": "AI139",
        "startICAO": "VIDP",
        "endICAO": "LLBG"
    },
    {
        "fnum": "AI310",
        "startICAO": "VABB",
        "endICAO": "YMML"
    },
    {
        "fnum": "AI981",
        "startICAO": "VABB",
        "endICAO": "OTHH"
    },
    {
        "fnum": "AI931",
        "startICAO": "VABB",
        "endICAO": "OEJN"
    },
    {
        "fnum": "AI921",
        "startICAO": "VABB",
        "endICAO": "OERK"
    },
    {
        "fnum": "AI342",
        "startICAO": "VABB",
        "endICAO": "WSSS"
    },
    {
        "fnum": "AI330",
        "startICAO": "VABB",
        "endICAO": "VTBS"
    },
    {
        "fnum": "AI919",
        "startICAO": "VABB",
        "endICAO": "OMDB"
    },
    {
        "fnum": "AI129",
        "startICAO": "VABB",
        "endICAO": "EGLL"
    },
    {
        "fnum": "AI191",
        "startICAO": "VABB",
        "endICAO": "KEWR"
    },
    {
        "fnum": "AI119",
        "startICAO": "VABB",
        "endICAO": "KJFK"
    },
    {
        "fnum": "AI179",
        "startICAO": "VABB",
        "endICAO": "KSFO"
    },
    {
        "fnum": "AI171",
        "startICAO": "VAAH",
        "endICAO": "EGKK"
    },
    {
        "fnum": "AI392",
        "startICAO": "VOBL",
        "endICAO": "WSSS"
    },
    {
        "fnum": "AI176",
        "startICAO": "KSF0",
        "endICAO": "VOBL"
    },
    {
        "fnum": "AI951",
        "startICAO": "VOHS",
        "endICAO": "OMDB"
    },
    {
        "fnum": "AI247",
        "startICAO": "VECC",
        "endICAO": "VNKT"
    },
    {
        "fnum": "AI542",
        "startICAO": "VOHS",
        "endICAO": "VOTP"
    },
    {
        "fnum": "AI652",
        "startICAO": "VOHS",
        "endICAO": "VABB"
    },
    {
        "fnum": "AI546",
        "startICAO": "VOHS",
        "endICAO": "VOMM"
    },
    {
        "fnum": "AI614",
        "startICAO": "VAAH",
        "endICAO": "VABB"
    },
    {
        "fnum": "AI501",
        "startICAO": "VOBL",
        "endICAO": "VIDP"
    },
    {
        "fnum": "AI589",
        "startICAO": "VOBL",
        "endICAO": "VABB"
    },
    {
        "fnum": "IX1596",
        "startICAO": "VIDP",
        "endICAO": "VIGR"
    },
    {
        "fnum": "AI653",
        "startICAO": "VABB",
        "endICAO": "VOVZ"
    },
    {
        "fnum": "AI673",
        "startICAO": "VABB",
        "endICAO": "VEPT"
    },
    {
        "fnum": "AI663",
        "startICAO": "VABB",
        "endICAO": "VOGO"
    },
    {
        "fnum": "AI601",
        "startICAO": "VABB",
        "endICAO": "VABJ"
    },
    {
        "fnum": "AI655",
        "startICAO": "VABB",
        "endICAO": "VAHS"
    },
    {
        "fnum": "AI669",
        "startICAO": "VABB",
        "endICAO": "VABO"
    },
    {
        "fnum": "AI657",
        "startICAO": "VABB",
        "endICAO": "VOTV"
    },
    {
        "fnum": "AI635",
        "startICAO": "VABB",
        "endICAO": "VAID"
    },
    {
        "fnum": "AI629",
        "startICAO": "VABB",
        "endICAO": "VANP"
    },
    {
        "fnum": "AI649",
        "startICAO": "VABB",
        "endICAO": "VIAR"
    },
    {
        "fnum": "AI611",
        "startICAO": "VABB",
        "endICAO": "VIJP"
    },
    {
        "fnum": "AI645",
        "startICAO": "VABB",
        "endICAO": "VIJO"
    },
    {
        "fnum": "AI643",
        "startICAO": "VABB",
        "endICAO": "VAUD"
    },
    {
        "fnum": "AI609",
        "startICAO": "VABB",
        "endICAO": "VOCB"
    },
    {
        "fnum": "AI625",
        "startICAO": "VABB",
        "endICAO": "VILK"
    },
    {
        "fnum": "AI675",
        "startICAO": "VABB",
        "endICAO": "VECC"
    },
    {
        "fnum": "AI570",
        "startICAO": "VABB",
        "endICAO": "VOMM"
    },
    {
        "fnum": "AI403",
        "startICAO": "VIDP",
        "endICAO": "VAHS"
    },
    {
        "fnum": "AI819",
        "startICAO": "VIDP",
        "endICAO": "VABO"
    },
    {
        "fnum": "AI821",
        "startICAO": "VIDP",
        "endICAO": "VIJU"
    },
    {
        "fnum": "AI420",
        "startICAO": "VIDP",
        "endICAO": "VOCI"
    },
    {
        "fnum": "AI801",
        "startICAO": "VIDP",
        "endICAO": "VOTV"
    },
    {
        "fnum": "AI445",
        "startICAO": "VIDP",
        "endICAO": "VILH"
    },
    {
        "fnum": "AI433",
        "startICAO": "VIDP",
        "endICAO": "VABP"
    },
    {
        "fnum": "AI443",
        "startICAO": "VIDP",
        "endICAO": "VAAU"
    },
    {
        "fnum": "SQ392",
        "startICAO": "WSSS",
        "endICAO": "LTFM"
    },
    {
        "fnum": "SQ600",
        "startICAO": "WSSS",
        "endICAO": "RKSI"
    },
    {
        "fnum": "SQ801",
        "startICAO": "ZBAA",
        "endICAO": "WSSS"
    },
    {
        "fnum": "IX783",
        "startICAO": "VIDP",
        "endICAO": "VEIM"
    },
    {
        "fnum": "IX2789",
        "startICAO": "VIDP",
        "endICAO": "VIJP"
    },
    {
        "fnum": "I5548",
        "startICAO": "VIDP",
        "endICAO": "VILK"
    },
    {
        "fnum": "IX135",
        "startICAO": "VIDP",
        "endICAO": "OMSJ"
    },
    {
        "fnum": "IX1132",
        "startICAO": "VOBL",
        "endICAO": "VOCI"
    },
    {
        "fnum": "SQ231",
        "startICAO": "WSSS",
        "endICAO": "YSSY"
    },
    {
        "fnum": "SQ306",
        "startICAO": "WSSS",
        "endICAO": "EGLL"
    },
    {
        "fnum": "SQ827",
        "startICAO": "ZSPD",
        "endICAO": "WSSS"
    },
    {
        "fnum": "SQ874",
        "startICAO": "WSSS",
        "endICAO": "VHHH"
    },
    {
        "fnum": "SQ48",
        "startICAO": "WSSS",
        "endICAO": "CYVR"
    },
    {
        "fnum": "SQ107",
        "startICAO": "WMKK",
        "endICAO": "WSSS"
    },
    {
        "fnum": "SQ184",
        "startICAO": "WSSS",
        "endICAO": "VVTS"
    },
    {
        "fnum": "SQ530",
        "startICAO": "WSSS",
        "endICAO": "VAAH"
    },
    {
        "fnum": "SQ1705",
        "startICAO": "VTBS",
        "endICAO": "WSSS"
    },
    {
        "fnum": "TR396",
        "startICAO": "WSSS",
        "endICAO": "RPLL"
    },
    {
        "fnum": "SQ28",
        "startICAO": "WSSS",
        "endICAO": "KSEA"
    },
    {
        "fnum": "FR420",
        "startICAO": "EIDW",
        "endICAO": "EHAM"
    },
    {
        "fnum": "FR657",
        "startICAO": "EIDW",
        "endICAO": "EBBR"
    },
    {
        "fnum": "FR6485",
        "startICAO": "EIDW",
        "endICAO": "LFBD"
    },
    {
        "fnum": "FR562",
        "startICAO": "EIDW",
        "endICAO": "EGCC"
    },
    {
        "fnum": "FR814",
        "startICAO": "EIDW",
        "endICAO": "EGPH"
    },
    {
        "fnum": "FR4097",
        "startICAO": "EVRA",
        "endICAO": "EIDW"
    },
    {
        "fnum": "FR3294",
        "startICAO": "EVRA",
        "endICAO": "LEMG"
    },
    {
        "fnum": "FR9163",
        "startICAO": "EGBB",
        "endICAO": "LEMD"
    },
    {
        "fnum": "FR1129",
        "startICAO": "EGBB",
        "endICAO": "GCLP"
    },
    {
        "fnum": "FR6762",
        "startICAO": "EGHH",
        "endICAO": "GCRR"
    },
    {
        "fnum": "FR4927",
        "startICAO": "EGCC",
        "endICAO": "LCPH"
    },
    {
        "fnum": "FR9032",
        "startICAO": "EGCC",
        "endICAO": "LPPD"
    },
    {
        "fnum": "FR3218",
        "startICAO": "EGCC",
        "endICAO": "LGAV"
    },
    {
        "fnum": "FR3126",
        "startICAO": "EGCC",
        "endICAO": "GMMX"
    },
    {
        "fnum": "MS603",
        "startICAO": "HECA",
        "endICAO": "LLBG"
    },
    {
        "fnum": "MS627",
        "startICAO": "HECA",
        "endICAO": "ORBI"
    },
    {
        "fnum": "MS610",
        "startICAO": "HECA",
        "endICAO": "OKKK"
    },
    {
        "fnum": "MS639",
        "startICAO": "HECA",
        "endICAO": "OEMA"
    },
    {
        "fnum": "MS749",
        "startICAO": "HECA",
        "endICAO": "LGAV"
    },
    {
        "fnum": "MS966",
        "startICAO": "HECA",
        "endICAO": "OMSJ"
    },
    {
        "fnum": "MS703",
        "startICAO": "HECA",
        "endICAO": "LIMC"
    },
    {
        "fnum": "MS767",
        "startICAO": "HECA",
        "endICAO": "LEBL"
    },
    {
        "fnum": "MS865",
        "startICAO": "HECA",
        "endICAO": "HSPN"
    },
    {
        "fnum": "MS759",
        "startICAO": "HECA",
        "endICAO": "EKCH"
    },
    {
        "fnum": "MS725",
        "startICAO": "HECA",
        "endICAO": "EBBR"
    },
    {
        "fnum": "MS964",
        "startICAO": "HECA",
        "endICAO": "RJAA"
    },
    {
        "fnum": "MS781",
        "startICAO": "HECA",
        "endICAO": "EGCC"
    },
    {
        "fnum": "MS977",
        "startICAO": "HECA",
        "endICAO": "WIII"
    },
    {
        "fnum": "MS981",
        "startICAO": "HECA",
        "endICAO": "KIAD"
    },
    {
        "fnum": "MS958",
        "startICAO": "HECA",
        "endICAO": "ZGGG"
    },
    {
        "fnum": "MS839",
        "startICAO": "HECA",
        "endICAO": "FAOR"
    },
    {
        "fnum": "MS970",
        "startICAO": "HECA",
        "endICAO": "VGHS"
    },
    {
        "fnum": "MS552",
        "startICAO": "HECA",
        "endICAO": "DNMM"
    },
    {
        "fnum": "MS512",
        "startICAO": "HECA",
        "endICAO": "HKJK"
    },
    {
        "fnum": "EK9919",
        "startICAO": "OMDW",
        "endICAO": "LEZG"
    },
    {
        "fnum": "EK9919",
        "startICAO": "MMMX",
        "endICAO": "SEQM"
    },
    {
        "fnum": "EK9936",
        "startICAO": "MMMX",
        "endICAO": "MMGL"
    },
    {
        "fnum": "EK9936",
        "startICAO": "MMGL",
        "endICAO": "KIAH"
    },
    {
        "fnum": "EK448 ",
        "startICAO": "OMDB",
        "endICAO": "WMKK"
    },
    {
        "fnum": "EK448 ",
        "startICAO": "WMKK",
        "endICAO": "NZAA"
    },
    {
        "fnum": "EK209",
        "startICAO": "LGAV",
        "endICAO": "KEWR"
    },
    {
        "fnum": "EK701",
        "startICAO": "OMDB",
        "endICAO": "FIMP"
    },
    {
        "fnum": "EK641",
        "startICAO": "OAKB",
        "endICAO": "OMDB"
    },
    {
        "fnum": "EK570",
        "startICAO": "OMDB",
        "endICAO": "VECC"
    },
    {
        "fnum": "EK971",
        "startICAO": "OMDB",
        "endICAO": "OIIE"
    },
    {
        "fnum": "EK564",
        "startICAO": "OMDB",
        "endICAO": "VOBL"
    },
    {
        "fnum": "EK785",
        "startICAO": "OMDB",
        "endICAO": "DNAA"
    },
    {
        "fnum": "EK793",
        "startICAO": "OMDB",
        "endICAO": "FNLU"
    },
    {
        "fnum": "KE856",
        "startICAO": "ZBAA",
        "endICAO": "RKSI"
    },
    {
        "fnum": "AI429",
        "startICAO": "VIDP",
        "endICAO": "VOMM"
    },
    {
        "fnum": "AI847",
        "startICAO": "VIDP",
        "endICAO": "VAPO"
    },
    {
        "fnum": "TK78",
        "startICAO": "KMIA",
        "endICAO": "LTFM"
    },
    {
        "fnum": "SV542",
        "startICAO": "OEJN",
        "endICAO": "OTHH"
    },
    {
        "fnum": "SV421",
        "startICAO": "OEJN",
        "endICAO": "HAAB"
    },
    {
        "fnum": "SV570",
        "startICAO": "OEJN",
        "endICAO": "OMAA"
    },
    {
        "fnum": "SV195",
        "startICAO": "0EJN",
        "endICAO": "LGAV"
    },
    {
        "fnum": "SV196",
        "startICAO": "LGAV",
        "endICAO": "OEJN"
    },
    {
        "fnum": "SV175",
        "startICAO": "OEJN",
        "endICAO": "EDDM"
    },
    {
        "fnum": "SV866",
        "startICAO": "OEJN",
        "endICAO": "VOBL"
    },
    {
        "fnum": "SV101",
        "startICAO": "OEJN",
        "endICAO": "EGKK"
    },
    {
        "fnum": "SV215",
        "startICAO": "OEJN",
        "endICAO": "EHAM"
    },
    {
        "fnum": "SV834",
        "startICAO": "OEJN",
        "endICAO": "WMKK"
    },
    {
        "fnum": "SV35",
        "startICAO": "OEJN",
        "endICAO": "KIAD"
    },
    {
        "fnum": "SV886",
        "startICAO": "OEJN",
        "endICAO": "ZBAD"
    },
    {
        "fnum": "SV152",
        "startICAO": "OEJN",
        "endICAO": "RJAA"
    },
    {
        "fnum": "TK1061",
        "startICAO": "LTFM",
        "endICAO": "LJLJ"
    },
    {
        "fnum": "TK1789",
        "startICAO": "LTFM",
        "endICAO": "ESSA"
    },
    {
        "fnum": "TK676",
        "startICAO": "LTFM",
        "endICAO": "HAAB"
    },
    {
        "fnum": "TK716",
        "startICAO": "LTFM",
        "endICAO": "VIDP"
    },
    {
        "fnum": "TK626",
        "startICAO": "LTFM",
        "endICAO": "DNMM"
    },
    {
        "fnum": "TK205",
        "startICAO": "LTFM",
        "endICAO": "KDTW"
    },
    {
        "fnum": "TK5",
        "startICAO": "LTFM",
        "endICAO": "KORD"
    },
    {
        "fnum": "TK193",
        "startICAO": "LTFM",
        "endICAO": "SBGR"
    },
    {
        "fnum": "BW430",
        "startICAO": "TTPP",
        "endICAO": "TGPY"
    },
    {
        "fnum": "BW6",
        "startICAO": "KJFK",
        "endICAO": "MKJP"
    },
    {
        "fnum": "BW78",
        "startICAO": "CYYZ",
        "endICAO": "MKJP"
    },
    {
        "fnum": "BW417",
        "startICAO": "MKJP",
        "endICAO": "TNCM"
    },
    {
        "fnum": "BW418",
        "startICAO": "TAPA",
        "endICAO": "MKJP"
    },
    {
        "fnum": "BW434",
        "startICAO": "TTPP",
        "endICAO": "TLPC"
    },
    {
        "fnum": "BW481",
        "startICAO": "KJFK",
        "endICAO": "SYCJ"
    },
    {
        "fnum": "BW617",
        "startICAO": "CYYZ",
        "endICAO": "SYCJ"
    },
    {
        "fnum": "BW436",
        "startICAO": "TTPP",
        "endICAO": "TVSA"
    },
    {
        "fnum": "BW462",
        "startICAO": "TTPP",
        "endICAO": "SYCJ"
    },
    {
        "fnum": "HU7061",
        "startICAO": "ZJHK",
        "endICAO": "ZHHH"
    },
    {
        "fnum": "HU767",
        "startICAO": "ZJHK",
        "endICAO": "VVTS"
    },
    {
        "fnum": "HU439",
        "startICAO": "ZBAA",
        "endICAO": "RJAA"
    },
    {
        "fnum": "HU74",
        "startICAO": "ZJHK",
        "endICAO": "WSSS"
    },
    {
        "fnum": "HU7001",
        "startICAO": "ZJHK",
        "endICAO": "ZGGG"
    },
    {
        "fnum": "HU7985",
        "startICAO": "ZBAA",
        "endICAO": "UUEE"
    },
    {
        "fnum": "HU473",
        "startICAO": "ZBAA",
        "endICAO": "RJBB"
    },
    {
        "fnum": "HU429",
        "startICAO": "ZBAA",
        "endICAO": "VTBS"
    },
    {
        "fnum": "HU461",
        "startICAO": "ZJHK",
        "endICAO": "VLVT"
    },
    {
        "fnum": "HU6001",
        "startICAO": "ZJHK",
        "endICAO": "ZSCN"
    },
    {
        "fnum": "HU485",
        "startICAO": "ZJHK",
        "endICAO": "YMML"
    },
    {
        "fnum": "HU797",
        "startICAO": "ZJHK",
        "endICAO": "NZAA"
    },
    {
        "fnum": "HU763",
        "startICAO": "ZJHK",
        "endICAO": "OMAA"
    },
    {
        "fnum": "HU751",
        "startICAO": "ZBAA",
        "endICAO": "EIDW"
    },
    {
        "fnum": "HU753",
        "startICAO": "ZBAA",
        "endICAO": "EGCC"
    },
    {
        "fnum": "KE896",
        "startICAO": "ZSPD",
        "endICAO": "RKSI"
    },
    {
        "fnum": "KE172",
        "startICAO": "VHHH",
        "endICAO": "RKSI"
    },
    {
        "fnum": "KE185",
        "startICAO": "RKSI",
        "endICAO": "RCTP"
    },
    {
        "fnum": "KE663",
        "startICAO": "RKSI",
        "endICAO": "VTSP"
    },
    {
        "fnum": "KE695",
        "startICAO": "RKSI",
        "endICAO": "VNKT"
    },
    {
        "fnum": "KE53",
        "startICAO": "RKSI",
        "endICAO": "PHNL"
    },
    {
        "fnum": "KE85",
        "startICAO": "RKSI",
        "endICAO": "KJFK"
    },
    {
        "fnum": "KE411",
        "startICAO": "RKSI",
        "endICAO": "NZAA"
    },
    {
        "fnum": "KE909",
        "startICAO": "RKSI",
        "endICAO": "EGCC"
    },
    {
        "fnum": "KE25",
        "startICAO": "RKSI",
        "endICAO": "KMIA"
    },
    {
        "fnum": "KE953",
        "startICAO": "RKSI",
        "endICAO": "OKKK"
    },
    {
        "fnum": "AI346",
        "startICAO": "VOMM",
        "endICAO": "WSSS"
    },
    {
        "fnum": "AI734",
        "startICAO": "VEMN",
        "endICAO": "VEIM"
    },
    {
        "fnum": "AI479",
        "startICAO": "VIDP",
        "endICAO": "VIAR"
    },
    {
        "fnum": "AI733",
        "startICAO": "VECC",
        "endICAO": "VEIM"
    },
    {
        "fnum": "AI709",
        "startICAO": "VECC",
        "endICAO": "VEGT"
    },
    {
        "fnum": "AI709",
        "startICAO": "VEGT",
        "endICAO": "VEMR"
    },
    {
        "fnum": "AI753",
        "startICAO": "VECC",
        "endICAO": "VEKU"
    },
    {
        "fnum": "AI763",
        "startICAO": "VECC",
        "endICAO": "VIDP"
    },
    {
        "fnum": "AI743",
        "startICAO": "VECC",
        "endICAO": "VEAT"
    },
    {
        "fnum": "AI517",
        "startICAO": "VOCI",
        "endICAO": "VABB"
    },
    {
        "fnum": "AI549",
        "startICAO": "VOMM",
        "endICAO": "VOPB"
    },
    {
        "fnum": "AI429",
        "startICAO": "VOMM",
        "endICAO": "VOCB"
    },
    {
        "fnum": "AI671",
        "startICAO": "VOMM",
        "endICAO": "VOMD"
    },
    {
        "fnum": "AI406",
        "startICAO": "VIDP",
        "endICAO": "VEBN"
    },
    {
        "fnum": "NH93",
        "startICAO": "RJTT",
        "endICAO": "RJBB"
    },
    {
        "fnum": "NH51",
        "startICAO": "RJTT",
        "endICAO": "RJCC"
    },
    {
        "fnum": "NH492",
        "startICAO": "RJGG",
        "endICAO": "RJAA"
    },
    {
        "fnum": "NH951",
        "startICAO": "RJBB",
        "endICAO": "ZSHC"
    },
    {
        "fnum": "NH1732",
        "startICAO": "ROAH",
        "endICAO": "RJBB"
    },
    {
        "fnum": "NH829",
        "startICAO": "RJAA",
        "endICAO": "VABB"
    },
    {
        "fnum": "NH180",
        "startICAO": "RJAA",
        "endICAO": "MMMX"
    },
    {
        "fnum": "NH211",
        "startICAO": "RJTT",
        "endICAO": "EGLL"
    },
    {
        "fnum": "NH216",
        "startICAO": "LFPG",
        "endICAO": "RJTT"
    },
    {
        "fnum": "NH114",
        "startICAO": "RJTT",
        "endICAO": "KIAH"
    },
    {
        "fnum": "NH875",
        "startICAO": "RJGG",
        "endICAO": "VHHH"
    },
    {
        "fnum": "NH8596",
        "startICAO": "RJAA",
        "endICAO": "RPLL"
    },
    {
        "fnum": "NH8539",
        "startICAO": "RJAA",
        "endICAO": "RCTP"
    },
    {
        "fnum": "KZ134",
        "startICAO": "RJAA",
        "endICAO": "PANC"
    },
    {
        "fnum": "AI633",
        "startICAO": "VABB",
        "endICAO": "VABP"
    },
    {
        "fnum": "IX1346",
        "startICAO": "VOCL",
        "endICAO": "VOBL"
    },
    {
        "fnum": "IX1428",
        "startICAO": "VOBL",
        "endICAO": "VAPO"
    },
    {
        "fnum": "IX1427",
        "startICAO": "VOBL",
        "endICAO": "VIJP"
    },
    {
        "fnum": "IX938",
        "startICAO": "VOBL",
        "endICAO": "VEBN"
    },
    {
        "fnum": "IX714",
        "startICAO": "VOBL",
        "endICAO": "VOKN"
    },
    {
        "fnum": "IX790",
        "startICAO": "VOML",
        "endICAO": "VOKN"
    },
    {
        "fnum": "IX789",
        "startICAO": "VOML",
        "endICAO": "OBBI"
    },
    {
        "fnum": "IX893",
        "startICAO": "VOML",
        "endICAO": "OKKK"
    },
    {
        "fnum": "IX817",
        "startICAO": "VOML",
        "endICAO": "OOMS"
    },
    {
        "fnum": "IX821",
        "startICAO": "VOML",
        "endICAO": "OTHH"
    },
    {
        "fnum": "IX884",
        "startICAO": "OEDF",
        "endICAO": "VOML"
    },
    {
        "fnum": "IX815",
        "startICAO": "VOML",
        "endICAO": "OMAA"
    },
    {
        "fnum": "AY33",
        "startICAO": "EFHK",
        "endICAO": "KSEA"
    },
    {
        "fnum": "AY1",
        "startICAO": "EFHK",
        "endICAO": "KLAX"
    },
    {
        "fnum": "AY1985",
        "startICAO": "EFHK",
        "endICAO": "MMUN"
    },
    {
        "fnum": "AY17",
        "startICAO": "ESSA",
        "endICAO": "KMIA"
    },
    {
        "fnum": "AY9",
        "startICAO": "EFHK",
        "endICAO": "KORD"
    },
    {
        "fnum": "AY2132",
        "startICAO": "EFHK",
        "endICAO": "HEGN"
    },
    {
        "fnum": "AY2133",
        "startICAO": "EFHK",
        "endICAO": "GCRR"
    },
    {
        "fnum": "AY1731",
        "startICAO": "EFHK",
        "endICAO": "LPMA"
    },
    {
        "fnum": "AY1691",
        "startICAO": "EFHK",
        "endICAO": "GCTS"
    },
    {
        "fnum": "AY1687",
        "startICAO": "EFHK",
        "endICAO": "LPPR"
    },
    {
        "fnum": "AY1571",
        "startICAO": "EFHK",
        "endICAO": "LFPG"
    },
    {
        "fnum": "AY1653",
        "startICAO": "EFHK",
        "endICAO": "LEBL"
    },
    {
        "fnum": "AY1511",
        "startICAO": "EFHK",
        "endICAO": "LSZH"
    },
    {
        "fnum": "AY531",
        "startICAO": "EFHK",
        "endICAO": "EFRO"
    },
    {
        "fnum": "AY861",
        "startICAO": "EFHK",
        "endICAO": "ESGG"
    },
    {
        "fnum": "CI130",
        "startICAO": "RCTP",
        "endICAO": "RJCC"
    },
    {
        "fnum": "CI164",
        "startICAO": "RCKH",
        "endICAO": "RKSI"
    },
    {
        "fnum": "CI78",
        "startICAO": "RCKH",
        "endICAO": "RJOT"
    },
    {
        "fnum": "CI260",
        "startICAO": "RCTP",
        "endICAO": "RKSS"
    },
    {
        "fnum": "CI701",
        "startICAO": "RCTP",
        "endICAO": "RPLL"
    },
    {
        "fnum": "CI761",
        "startICAO": "RCTP",
        "endICAO": "WIII"
    },
    {
        "fnum": "CI753",
        "startICAO": "RCTP",
        "endICAO": "WSSS"
    },
    {
        "fnum": "CI28",
        "startICAO": "RCTP",
        "endICAO": "PTRO"
    },
    {
        "fnum": "CI771",
        "startICAO": "RCTP",
        "endICAO": "WADD"
    },
    {
        "fnum": "CI5116",
        "startICAO": "RCTP",
        "endICAO": "KLAX"
    },
    {
        "fnum": "CI4",
        "startICAO": "RCTP",
        "endICAO": "KSFO"
    },
    {
        "fnum": "CI24",
        "startICAO": "RCTP",
        "endICAO": "KONT"
    },
    {
        "fnum": "CI64",
        "startICAO": "RCTP",
        "endICAO": "LOWW"
    },
    {
        "fnum": "CI81",
        "startICAO": "RCTP",
        "endICAO": "EGLL"
    },
    {
        "fnum": "ET847",
        "startICAO": "HAAB",
        "endICAO": "FACT"
    },
    {
        "fnum": "ET640",
        "startICAO": "HAAB",
        "endICAO": "VABB"
    },
    {
        "fnum": "ET692",
        "startICAO": "HAAB",
        "endICAO": "VOMM"
    },
    {
        "fnum": "ET686",
        "startICAO": "HAAB",
        "endICAO": "VIDP"
    },
    {
        "fnum": "ET690",
        "startICAO": "HAAB",
        "endICAO": "VOBL"
    },
    {
        "fnum": "ET704",
        "startICAO": "HAAB",
        "endICAO": "LFPG"
    },
    {
        "fnum": "ET706",
        "startICAO": "HAAB",
        "endICAO": "EDDF"
    },
    {
        "fnum": "ET506",
        "startICAO": "HAAB",
        "endICAO": "SBGR"
    },
    {
        "fnum": "ET702",
        "startICAO": "HAAB",
        "endICAO": "LIRF"
    },
    {
        "fnum": "ET519",
        "startICAO": "KATL",
        "endICAO": "HAAB"
    },
    {
        "fnum": "ET322",
        "startICAO": "HAAB",
        "endICAO": "HKMO"
    },
    {
        "fnum": "ET624",
        "startICAO": "HAAB",
        "endICAO": "OOMS"
    },
    {
        "fnum": "ET810",
        "startICAO": "HAAB",
        "endICAO": "HBBA"
    },
    {
        "fnum": "ET812",
        "startICAO": "HAAB",
        "endICAO": "HTZA"
    },
    {
        "fnum": "ET432",
        "startICAO": "HAAB",
        "endICAO": "OTHH"
    },
    {
        "fnum": "OD1",
        "startICAO": "PHNL",
        "endICAO": "PGUM"
    },
    {
        "fnum": "AIH01",
        "startICAO": "VIDP",
        "endICAO": "YPAD"
    },
    {
        "fnum": "AIH05",
        "startICAO": "VIDP",
        "endICAO": "ZSPD"
    },
    {
        "fnum": "AIH07",
        "startICAO": "VIDP",
        "endICAO": "VOCB"
    },
    {
        "fnum": "AIH09",
        "startICAO": "VIDP",
        "endICAO": "OYSN"
    },
    {
        "fnum": "AIH11",
        "startICAO": "VIDP",
        "endICAO": "UUEE"
    },
    {
        "fnum": "AIH13",
        "startICAO": "VIDP",
        "endICAO": "FIMP"
    },
    {
        "fnum": "AIH19",
        "startICAO": "VABB",
        "endICAO": "CYUL"
    },
    {
        "fnum": "AIH21",
        "startICAO": "VABB",
        "endICAO": "OYSN"
    },
    {
        "fnum": "AIH23",
        "startICAO": "VABB",
        "endICAO": "CYYZ"
    },
    {
        "fnum": "AIH25",
        "startICAO": "VABB",
        "endICAO": "OMFJ"
    },
    {
        "fnum": "AIH27",
        "startICAO": "VABB",
        "endICAO": "FALE"
    },
    {
        "fnum": "AIH29",
        "startICAO": "VABB",
        "endICAO": "RKSI"
    },
    {
        "fnum": "AIH31",
        "startICAO": "VABB",
        "endICAO": "ZSPD"
    },
    {
        "fnum": "AIH33",
        "startICAO": "VABB",
        "endICAO": "KLAX"
    },
    {
        "fnum": "AIH35",
        "startICAO": "VABB",
        "endICAO": "LIMF"
    },
    {
        "fnum": "AIH37",
        "startICAO": "VABB",
        "endICAO": "ZBAA"
    },
    {
        "fnum": "AIH41",
        "startICAO": "VABB",
        "endICAO": "YSSY"
    },
    {
        "fnum": "AIH43",
        "startICAO": "VABB",
        "endICAO": "ORBI"
    },
    {
        "fnum": "AIC202",
        "startICAO": "TBPB",
        "endICAO": "VIDP"
    },
    {
        "fnum": "OD1",
        "startICAO": "PGUM",
        "endICAO": "WMKK"
    },
    {
        "fnum": "EY260",
        "startICAO": "OMAA",
        "endICAO": "VRMM"
    },
    {
        "fnum": "EY289",
        "startICAO": "VAAH",
        "endICAO": "OMAA"
    },
    {
        "fnum": "AIH59",
        "startICAO": "VOBL",
        "endICAO": "EGKK"
    },
    {
        "fnum": "JT5384",
        "startICAO": "VDSV",
        "endICAO": "VDPP"
    },
    {
        "fnum": "IX483",
        "startICAO": "VOBL",
        "endICAO": "OEDF"
    },
    {
        "fnum": "XJ382",
        "startICAO": "VTBD",
        "endICAO": "YSSY"
    },
    {
        "fnum": "IX2516",
        "startICAO": "VOBL",
        "endICAO": "VOBZ"
    },
    {
        "fnum": "EY5023",
        "startICAO": "OMAA",
        "endICAO": "VIJP"
    },
    {
        "fnum": "AI145",
        "startICAO": "VOGA",
        "endICAO": "EGKK"
    },
    {
        "fnum": "AI169",
        "startICAO": "VIAR",
        "endICAO": "EGKK"
    },
    {
        "fnum": "IX2516",
        "startICAO": "VOBZ",
        "endICAO": "VOVZ"
    },
    {
        "fnum": "IX710",
        "startICAO": "OEDF",
        "endICAO": "VOKN"
    },
    {
        "fnum": "IX2517",
        "startICAO": "VOVZ",
        "endICAO": "VOBL"
    },
    {
        "fnum": "IX751",
        "startICAO": "VOKN",
        "endICAO": "OMRK"
    },
    {
        "fnum": "GA716",
        "startICAO": "WIII",
        "endICAO": "YMML"
    },
    {
        "fnum": "D7550",
        "startICAO": "WMKK",
        "endICAO": "RJCC"
    },
    {
        "fnum": "IX698",
        "startICAO": "OKKK",
        "endICAO": "VOMM"
    },
    {
        "fnum": "GA712",
        "startICAO": "WIII",
        "endICAO": "YSSY"
    },
    {
        "fnum": "IX2892",
        "startICAO": "VEGT",
        "endICAO": "VOHS"
    },
    {
        "fnum": "IX2882",
        "startICAO": "VOHS",
        "endICAO": "VOBN"
    },
    {
        "fnum": "GA88",
        "startICAO": "WIII",
        "endICAO": "EHAM"
    },
    {
        "fnum": "IX2883",
        "startICAO": "VOHS",
        "endICAO": "VEBD"
    },
    {
        "fnum": "GA901",
        "startICAO": "OTHH",
        "endICAO": "WIII"
    },
    {
        "fnum": "AI695",
        "startICAO": "VABB",
        "endICAO": "VEBS"
    },
    {
        "fnum": "GA882",
        "startICAO": "WADD",
        "endICAO": "RJBB"
    },
    {
        "fnum": "AIH37 ",
        "startICAO": "EGBB",
        "endICAO": "CYYZ"
    },
    {
        "fnum": "AI389",
        "startICAO": "VVTS",
        "endICAO": "VIDP"
    },
    {
        "fnum": "AI2145",
        "startICAO": "VIDP",
        "endICAO": "WADD"
    },
    {
        "fnum": "AI2273",
        "startICAO": "VIDP",
        "endICAO": "VRMM"
    },
    {
        "fnum": "AI2241",
        "startICAO": "VABB",
        "endICAO": "FIMP"
    },
    {
        "fnum": "AI2271",
        "startICAO": "VABB",
        "endICAO": "VRMM"
    },
    {
        "fnum": "AI2237",
        "startICAO": "VABB",
        "endICAO": "OEDF"
    },
    {
        "fnum": "AI227",
        "startICAO": "VABB",
        "endICAO": "EDDF"
    },
    {
        "fnum": "AI223",
        "startICAO": "VABB",
        "endICAO": "LFPG"
    },
    {
        "fnum": "AI2111",
        "startICAO": "VAPO",
        "endICAO": "WSSS"
    },
    {
        "fnum": "AI2131",
        "startICAO": "VABB",
        "endICAO": "VCBI"
    },
    {
        "fnum": "AI2653",
        "startICAO": "VABB",
        "endICAO": "VICG"
    },
    {
        "fnum": "AI2621",
        "startICAO": "VABB",
        "endICAO": "VEBN"
    },
    {
        "fnum": "AI2619",
        "startICAO": "VABB",
        "endICAO": "VIDN"
    },
    {
        "fnum": "AI2513",
        "startICAO": "VABB",
        "endICAO": "VOGA"
    },
    {
        "fnum": "AI2574",
        "startICAO": "VOBL",
        "endICAO": "VAAH"
    },
    {
        "fnum": "AI2633",
        "startICAO": "VOBL",
        "endICAO": "VAUD"
    },
    {
        "fnum": "AI2755",
        "startICAO": "VOBL",
        "endICAO": "VEGT"
    },
    {
        "fnum": "AI2508",
        "startICAO": "VOPB",
        "endICAO": "VOBL"
    },
    {
        "fnum": "AI2881",
        "startICAO": "VOBL",
        "endICAO": "VOGO"
    },
    {
        "fnum": "AI2615",
        "startICAO": "VOBL",
        "endICAO": "VIDN"
    },
    {
        "fnum": "AI2611",
        "startICAO": "VISR",
        "endICAO": "VIJU"
    },
    {
        "fnum": "AI2637",
        "startICAO": "VIDP",
        "endICAO": "VICG"
    },
    {
        "fnum": "AI2617",
        "startICAO": "VIDP",
        "endICAO": "VIDN"
    },
    {
        "fnum": "AI2627",
        "startICAO": "VIDP",
        "endICAO": "VAUD"
    },
    {
        "fnum": "AI2793",
        "startICAO": "VIDP",
        "endICAO": "VERP"
    },
    {
        "fnum": "AI2753",
        "startICAO": "VIDP",
        "endICAO": "VERC"
    },
    {
        "fnum": "AI2725",
        "startICAO": "VIDP",
        "endICAO": "VEBD"
    },
    {
        "fnum": "AI2726",
        "startICAO": "VEBD",
        "endICAO": "VEMN"
    },
    {
        "fnum": "AI2589",
        "startICAO": "VOHS",
        "endICAO": "VOGA"
    },
    {
        "fnum": "AI2597",
        "startICAO": "VAAH",
        "endICAO": "VOGO"
    },
    {
        "fnum": "AIH53",
        "startICAO": "VIDP",
        "endICAO": "LIRF"
    },
    {
        "fnum": "IX441",
        "startICAO": "VOCI",
        "endICAO": "OOMS"
    },
    {
        "fnum": "IX256",
        "startICAO": "OMSJ",
        "endICAO": "VAID"
    },
    {
        "fnum": "AIH76 ",
        "startICAO": "VIDP",
        "endICAO": "VHHX"
    },
    {
        "fnum": "AIH76 ",
        "startICAO": "VHHX",
        "endICAO": "RJBB"
    },
    {
        "fnum": "IX476",
        "startICAO": "OTHH",
        "endICAO": "VOCI"
    },
    {
        "fnum": "EY51",
        "startICAO": "OMAA",
        "endICAO": "LSGG"
    },
    {
        "fnum": "EY430",
        "startICAO": "OMAA",
        "endICAO": "VTSP"
    },
    {
        "fnum": "TP1350",
        "startICAO": "LPPT",
        "endICAO": "EGLL"
    },
    {
        "fnum": "TP571",
        "startICAO": "EDDF",
        "endICAO": "LPPT"
    },
    {
        "fnum": "TP1271",
        "startICAO": "LOWW",
        "endICAO": "LPPT"
    },
    {
        "fnum": "IX2715",
        "startICAO": "VAPO",
        "endICAO": "VOCI"
    },
    {
        "fnum": "IX1191",
        "startICAO": "VEGT",
        "endICAO": "VEAT"
    },
    {
        "fnum": "IX1098",
        "startICAO": "VECC",
        "endICAO": "VOHS"
    },
    {
        "fnum": "EY21",
        "startICAO": "OMAA",
        "endICAO": "EGCC"
    },
    {
        "fnum": "BR211",
        "startICAO": "RCTP",
        "endICAO": "VTBS"
    },
    {
        "fnum": "UL171",
        "startICAO": "VCBI",
        "endICAO": "VOBL"
    },
    {
        "fnum": "UL176",
        "startICAO": "VOHS",
        "endICAO": "VCBI"
    },
    {
        "fnum": "UL165",
        "startICAO": "VCBI",
        "endICAO": "VOCI"
    },
    {
        "fnum": "UL364",
        "startICAO": "VCBI",
        "endICAO": "WIII"
    },
    {
        "fnum": "UL314",
        "startICAO": "VCBI",
        "endICAO": "WMKK"
    },
    {
        "fnum": "UL137",
        "startICAO": "VCBI",
        "endICAO": "VOMD"
    },
    {
        "fnum": "UL131",
        "startICAO": "VCBI",
        "endICAO": "VOTR"
    },
    {
        "fnum": "UL161",
        "startICAO": "VCBI",
        "endICAO": "VOTV"
    },
    {
        "fnum": "OU410",
        "startICAO": "LDZA",
        "endICAO": "EDDF"
    },
    {
        "fnum": "OU490",
        "startICAO": "LDZA",
        "endICAO": "EGLL"
    },
    {
        "fnum": "OU470",
        "startICAO": "LDZA",
        "endICAO": "LFPG"
    },
    {
        "fnum": "OU418",
        "startICAO": "LDDU",
        "endICAO": "EDDF"
    },
    {
        "fnum": "OU440",
        "startICAO": "LDZA",
        "endICAO": "LOWW"
    },
    {
        "fnum": "DLH505",
        "startICAO": "SBGR",
        "endICAO": "EDDM"
    },
    {
        "fnum": "DLH572",
        "startICAO": "EDDF",
        "endICAO": "FAOR"
    },
    {
        "fnum": "DLH510",
        "startICAO": "EDDF",
        "endICAO": "SAEZ"
    },
    {
        "fnum": "DLH542",
        "startICAO": "EDDF",
        "endICAO": "SKBO"
    },
    {
        "fnum": "DLH464",
        "startICAO": "EDDF",
        "endICAO": "KMCO"
    },
    {
        "fnum": "DLH479",
        "startICAO": "CYUL",
        "endICAO": "EDDF"
    },
    {
        "fnum": "DLH568",
        "startICAO": "EDDF",
        "endICAO": "DNMM"
    },
    {
        "fnum": "DLH612",
        "startICAO": "EDDF",
        "endICAO": "UBBB"
    },
    {
        "fnum": "DLH130",
        "startICAO": "OJAI",
        "endICAO": "EDDF"
    },
    {
        "fnum": "DLH630",
        "startICAO": "EDDF",
        "endICAO": "OMDB"
    },
    {
        "fnum": "DLH130",
        "startICAO": "EDDF",
        "endICAO": "OLBA"
    },
    {
        "fnum": "DLH684",
        "startICAO": "EDDF",
        "endICAO": "LLBG"
    },
    {
        "fnum": "DLH246",
        "startICAO": "BIKF",
        "endICAO": "EDDM"
    },
    {
        "fnum": "DLH145",
        "startICAO": "EDDM",
        "endICAO": "UUDD"
    },
    {
        "fnum": "DLH115",
        "startICAO": "EDDF",
        "endICAO": "LEIB"
    },
    {
        "fnum": "LX316",
        "startICAO": "LSZH",
        "endICAO": "EGLL"
    },
    {
        "fnum": "LX1068",
        "startICAO": "LSZH",
        "endICAO": "EDDF"
    },
    {
        "fnum": "LX632",
        "startICAO": "LSZH",
        "endICAO": "LFPG"
    },
    {
        "fnum": "LX138",
        "startICAO": "LSZH",
        "endICAO": "VHHH"
    },
    {
        "fnum": "LX160",
        "startICAO": "LSZH",
        "endICAO": "RJAA"
    },
    {
        "fnum": "LX40",
        "startICAO": "LSZH",
        "endICAO": "KLAX"
    },
    {
        "fnum": "LX176",
        "startICAO": "LSZH",
        "endICAO": "WSSS"
    },
    {
        "fnum": "LX154",
        "startICAO": "LSZH",
        "endICAO": "VABB"
    },
    {
        "fnum": "LX1612",
        "startICAO": "LSZH",
        "endICAO": "LIMC"
    },
    {
        "fnum": "LX52",
        "startICAO": "LSZH",
        "endICAO": "KBOS"
    },
    {
        "fnum": "LX724",
        "startICAO": "LSZH",
        "endICAO": "EHAM"
    },
    {
        "fnum": "LX288",
        "startICAO": "LSZH",
        "endICAO": "FAOR"
    },
    {
        "fnum": "LX188",
        "startICAO": "LSZH",
        "endICAO": "ZSPD"
    },
    {
        "fnum": "AI384",
        "startICAO": "VIDP",
        "endICAO": "WMKK"
    },
    {
        "fnum": "AI117",
        "startICAO": "VIAR",
        "endICAO": "EGBB"
    },
    {
        "fnum": "U22161",
        "startICAO": "EGCC",
        "endICAO": "EHAM"
    },
    {
        "fnum": "U22183",
        "startICAO": "EGGW",
        "endICAO": "LTAI"
    },
    {
        "fnum": "U22199",
        "startICAO": "EGCC",
        "endICAO": "EDDB"
    },
    {
        "fnum": "U22151",
        "startICAO": "EGCC",
        "endICAO": "LTFM"
    },
    {
        "fnum": "U22123",
        "startICAO": "EGCC",
        "endICAO": "LIRF"
    },
    {
        "fnum": "U22116",
        "startICAO": "EGCC",
        "endICAO": "LFPO"
    },
    {
        "fnum": "U26539",
        "startICAO": "EGKK",
        "endICAO": "BIKF"
    },
    {
        "fnum": "U21935",
        "startICAO": "EGCC",
        "endICAO": "LEIB"
    },
    {
        "fnum": "U26401",
        "startICAO": "EGKK",
        "endICAO": "LPMA"
    },
    {
        "fnum": "U26405",
        "startICAO": "EGKK",
        "endICAO": "LGAV"
    },
    {
        "fnum": "U26497",
        "startICAO": "EGKK",
        "endICAO": "LMML"
    },
    {
        "fnum": "U26525",
        "startICAO": "EGKK",
        "endICAO": "EPKK"
    },
    {
        "fnum": "U26574",
        "startICAO": "EGKK",
        "endICAO": "LCPH"
    },
    {
        "fnum": "U23001",
        "startICAO": "EGAA",
        "endICAO": "LEBL"
    },
    {
        "fnum": "U22025",
        "startICAO": "EGGW",
        "endICAO": "GCRR"
    },
    {
        "fnum": "U22039",
        "startICAO": "EGGW",
        "endICAO": "GCTS"
    },
    {
        "fnum": "U21545",
        "startICAO": "LSGG",
        "endICAO": "LTAI"
    },
    {
        "fnum": "U21551",
        "startICAO": "LSGG",
        "endICAO": "EGNT"
    },
    {
        "fnum": "U25516",
        "startICAO": "EGNT",
        "endICAO": "LEAL"
    },
    {
        "fnum": "U21827",
        "startICAO": "EGCC",
        "endICAO": "LLBG"
    },
    {
        "fnum": "U28189",
        "startICAO": "EGKK",
        "endICAO": "LIMC"
    },
    {
        "fnum": "U21571",
        "startICAO": "LSGG",
        "endICAO": "EGBB"
    },
    {
        "fnum": "U26933",
        "startICAO": "EGPH",
        "endICAO": "LXGB"
    },
    {
        "fnum": "U22299",
        "startICAO": "EGCC",
        "endICAO": "LOWI"
    },
    {
        "fnum": "U22283",
        "startICAO": "EGCC",
        "endICAO": "EFRO"
    },
    {
        "fnum": "U22383",
        "startICAO": "EGGW",
        "endICAO": "LGMK"
    },
    {
        "fnum": "U22049",
        "startICAO": "EGGW",
        "endICAO": "LSGG"
    },
    {
        "fnum": "U2301",
        "startICAO": "EGGW",
        "endICAO": "EGPH"
    },
    {
        "fnum": "U22203",
        "startICAO": "EGGW",
        "endICAO": "LEMD"
    },
    {
        "fnum": "U25331",
        "startICAO": "EDDB",
        "endICAO": "LPPR"
    },
    {
        "fnum": "BR52",
        "startICAO": "RCTP",
        "endICAO": "KIAH"
    },
    {
        "fnum": "BR626",
        "startICAO": "RCTP",
        "endICAO": "PANC"
    },
    {
        "fnum": "BR56",
        "startICAO": "RCTP",
        "endICAO": "KORD"
    },
    {
        "fnum": "BR75",
        "startICAO": "RCTP",
        "endICAO": "EHAM"
    },
    {
        "fnum": "BR809",
        "startICAO": "RCTP",
        "endICAO": "VHHH"
    },
    {
        "fnum": "BR217",
        "startICAO": "RCTP",
        "endICAO": "WMKK"
    },
    {
        "fnum": "BR385",
        "startICAO": "RCTP",
        "endICAO": "VVNB"
    },
    {
        "fnum": "BR712",
        "startICAO": "RCTP",
        "endICAO": "ZSPD"
    },
    {
        "fnum": "BR71",
        "startICAO": "RCTP",
        "endICAO": "EDDM"
    },
    {
        "fnum": "BR10",
        "startICAO": "RCTP",
        "endICAO": "CYVR"
    },
    {
        "fnum": "BR716",
        "startICAO": "RCTP",
        "endICAO": "ZBAA"
    },
    {
        "fnum": "BR281",
        "startICAO": "RCTP",
        "endICAO": "RPVM"
    },
    {
        "fnum": "AIH51",
        "startICAO": "VIDP",
        "endICAO": "LEMD"
    },
    {
        "fnum": "AI448",
        "startICAO": "VILH",
        "endICAO": "VISR"
    },
    {
        "fnum": "IX421",
        "startICAO": "VOCI",
        "endICAO": "OERK"
    },
    {
        "fnum": "IX929",
        "startICAO": "VOHS",
        "endICAO": "OEDF"
    },
    {
        "fnum": "IX395",
        "startICAO": "VOCI",
        "endICAO": "OKKK"
    },
    {
        "fnum": "IX471",
        "startICAO": "VOCI",
        "endICAO": "OBBI"
    },
    {
        "fnum": "IX481",
        "startICAO": "VOCI",
        "endICAO": "OEDF"
    },
    {
        "fnum": "IX435",
        "startICAO": "VOCI",
        "endICAO": "OMDB"
    },
    {
        "fnum": "IX411",
        "startICAO": "VOCI",
        "endICAO": "OMSJ"
    },
    {
        "fnum": "IX445",
        "startICAO": "VOCI",
        "endICAO": "OOSA"
    },
    {
        "fnum": "IX5003",
        "startICAO": "VOCI",
        "endICAO": "VOCL"
    },
    {
        "fnum": "IX1128",
        "startICAO": "VOCI",
        "endICAO": "VECC"
    },
    {
        "fnum": "IX342",
        "startICAO": "OOSA",
        "endICAO": "VOCL"
    },
    {
        "fnum": "IX399",
        "startICAO": "VOCL",
        "endICAO": "OEJN"
    },
    {
        "fnum": "IX322",
        "startICAO": "OERK",
        "endICAO": "VOCL"
    },
    {
        "fnum": "IX393",
        "startICAO": "VOCL",
        "endICAO": "OKKK"
    },
    {
        "fnum": "IX382",
        "startICAO": "OEDF",
        "endICAO": "VOCL"
    },
    {
        "fnum": "IX473",
        "startICAO": "VOCL",
        "endICAO": "OBBI"
    },
    {
        "fnum": "IX375",
        "startICAO": "VOCL",
        "endICAO": "OTHH"
    },
    {
        "fnum": "IX347",
        "startICAO": "VOCL",
        "endICAO": "OMAA"
    },
    {
        "fnum": "IX345",
        "startICAO": "VOCL",
        "endICAO": "OMDB"
    },
    {
        "fnum": "IX353",
        "startICAO": "VOCL",
        "endICAO": "OMSJ"
    },
    {
        "fnum": "IX331",
        "startICAO": "VOCL",
        "endICAO": "OMRK"
    },
    {
        "fnum": "IX335",
        "startICAO": "VOCL",
        "endICAO": "OMAL"
    },
    {
        "fnum": "IX337",
        "startICAO": "VOCL",
        "endICAO": "OOMS"
    },
    {
        "fnum": "AIH27",
        "startICAO": "FALE",
        "endICAO": "FAOR"
    },
    {
        "fnum": "AZ78",
        "startICAO": "LIRF",
        "endICAO": "LEBL"
    },
    {
        "fnum": "AZ332",
        "startICAO": "LIRF",
        "endICAO": "LFPG"
    },
    {
        "fnum": "AZ432",
        "startICAO": "LIRF",
        "endICAO": "EDDM"
    },
    {
        "fnum": "AZ9054",
        "startICAO": "LIRF",
        "endICAO": "LGRP"
    },
    {
        "fnum": "AZ722",
        "startICAO": "LIRF",
        "endICAO": "LGAV"
    },
    {
        "fnum": "AZ856",
        "startICAO": "LIRF",
        "endICAO": "OMDB"
    },
    {
        "fnum": "AZ854",
        "startICAO": "LIRF",
        "endICAO": "GOBD"
    },
    {
        "fnum": "AZ838",
        "startICAO": "LIRF",
        "endICAO": "OERK"
    },
    {
        "fnum": "AZ848",
        "startICAO": "LIRF",
        "endICAO": "OEJN"
    },
    {
        "fnum": "AZ620",
        "startICAO": "LIRF",
        "endICAO": "KLAX"
    },
    {
        "fnum": "AZ614",
        "startICAO": "LIRF",
        "endICAO": "KBOS"
    },
    {
        "fnum": "AZ678",
        "startICAO": "LIRF",
        "endICAO": "SBGR"
    },
    {
        "fnum": "AZ680",
        "startICAO": "LIRF",
        "endICAO": "SAEZ"
    },
    {
        "fnum": "AZ792",
        "startICAO": "LIRF",
        "endICAO": "RJTT"
    },
    {
        "fnum": "AI449",
        "startICAO": "VILH",
        "endICAO": "VIJU"
    },
    {
        "fnum": "IX592",
        "startICAO": "VASU",
        "endICAO": "VECC"
    },
    {
        "fnum": "IX171",
        "startICAO": "VASU",
        "endICAO": "OMSJ"
    },
    {
        "fnum": "IX1996",
        "startICAO": "VASU",
        "endICAO": "VIDP"
    },
    {
        "fnum": "IX1173",
        "startICAO": "VOHS",
        "endICAO": "VASU"
    },
    {
        "fnum": "IX1569",
        "startICAO": "VASU",
        "endICAO": "VOBL"
    },
    {
        "fnum": "IX563",
        "startICAO": "VEBS",
        "endICAO": "VOBL"
    },
    {
        "fnum": "IX1612",
        "startICAO": "VEBS",
        "endICAO": "VOMM"
    },
    {
        "fnum": "AI32",
        "startICAO": "VAAH",
        "endICAO": "EDDF"
    },
    {
        "fnum": "AIH33",
        "startICAO": "VAAH",
        "endICAO": "EGLL"
    },
    {
        "fnum": "AIH35 ",
        "startICAO": "EGLL",
        "endICAO": "KEWR"
    },
    {
        "fnum": "AIH39 ",
        "startICAO": "VIAR",
        "endICAO": "EGLL"
    },
    {
        "fnum": "AIH39 ",
        "startICAO": "EGLL",
        "endICAO": "CYYZ"
    },
    {
        "fnum": "AIH41",
        "startICAO": "VHHH",
        "endICAO": "VABB"
    },
    {
        "fnum": "AIH43",
        "startICAO": "VECC",
        "endICAO": "VHHH"
    },
    {
        "fnum": "AIH70",
        "startICAO": "VIDP",
        "endICAO": "HECA"
    },
    {
        "fnum": "AIH47",
        "startICAO": "VABB",
        "endICAO": "HKJK"
    }
];



const URLBASE = "https://1ved.cloud/api/v2";
const UPDATE_INTERVAL = 60000;
const ANIMATION_DURATION = 59000;

const map = L.map("map").setView([20.5937, 78.9629], 4);

var Stadia_AlidadeSmoothDark = L.tileLayer(
    "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}",
    {
        minZoom: 0,
        maxZoom: 20,
        attribution:
            '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        ext: "png",
    },
);

var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    setZoom: 7,
    maxZoom: 18,
}).addTo(map);

var Thunderforest_TransportDark = L.tileLayer(
    "https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey={apikey}",
    {
        attribution:
            '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        apikey: "ca647681c7b146619b484d6ee36fd93b",
        maxZoom: 22,
    },
);

var CyclOSM = L.tileLayer(
    "https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",
    {
        maxZoom: 20,
        attribution:
            '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
);

var CartoDB_DarkMatter = L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 20,
    },
);

var baseMaps = {
    "Open Street Map": osm,
    "Smooth Dark": Stadia_AlidadeSmoothDark,
    "Dark Matter": CartoDB_DarkMatter,
    "Thunderforest Dark": Thunderforest_TransportDark,
    CycIOSM: CyclOSM,
};

const group1 = [
    "EY", "GA", "SQ", "MS", "KE", 
    "BW", "HU", "AY", "CI", "ET", 
    "FR", "DL"
  ];
  
const group2 = [
    "D7", "LO", "QZ", "AK", "FD", 
    "XJ", "KT", "TK", "OD", "Z2", 
    "ID", "ZS", "SL", "JT", "I5", 
    "TR", "NH", "BR", "UL", "OU", 
    "LX", "U2", "AZ"
  ];

var codesharesA = L.layerGroup();
var codesharesB = L.layerGroup();

function getRouteType(fnum) {
    if (group1.some(prefix => fnum.startsWith(prefix))) return "codeshareA";
    if (group2.some(prefix => fnum.startsWith(prefix))) return "codeshareB";
    return "INVA";
}
L.control.layers(baseMaps, { "Codeshares A": codesharesA, "Codeshares B": codesharesB }).addTo(map);

const flightMarkers = {};

const inactivityTime = 15 * 60000;
let inactivityTimeout;
let isPaused = false;
function showPopup() {
    const popupOverlay = document.createElement("div");
    popupOverlay.className = "popup-overlay active";
    popupOverlay.innerHTML = `
          <div class="popup">
                <h2>Session Timeout</h2>
                <p>Are you still here?</p>
                <button id="resumeButton">Resume</button>
          </div>
     `;
    document.body.appendChild(popupOverlay);

    document.getElementById("resumeButton").addEventListener("click", () => {
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

window.addEventListener("mousemove", resetInactivityTimer);
window.addEventListener("keydown", resetInactivityTimer);
window.addEventListener("click", resetInactivityTimer);

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
    return (
        identifier && identifier.length === 4 && /^[A-Z]{4}$/.test(identifier)
    );
}

async function fetchOperators() {
    const response = await fetch("/1ved-cloud/app/assets/operators.json");
    const data = await response.json();
    return data.names;
}

async function fetchAndDisplayFlights() {
    if (isPaused) return;
    try {
        const sessionsResponse = await fetch(`${URLBASE}/sessions`);
        const sessionsData = await sessionsResponse.json();
        const expertSession = sessionsData.result.find(
            (session) => session.name === "Expert",
        );
        const sessionId = expertSession?.id;
        if (!sessionId) {
            console.error("Expert Server session not found");
            return;
        }
        const flightsResponse = await fetch(
            `${URLBASE}/sessions/${sessionId}/flights`,
        );
        const flightsData = await flightsResponse.json();
        // const operatorNames = await fetchOperators();
        const filteredFlights = flightsData.result.filter((flight) => {
            const callsign = flight.callsign;
            return (
                callsign.endsWith("IN") ||
                callsign.endsWith("IN Heavy") ||
                callsign.endsWith("IN Super")
            );
        });
        const removeStaleMarkers = () => {
            for (const flightId in flightMarkers) {
                if (
                    !filteredFlights.some((flight) => flight.flightId === flightId)
                ) {
                    map.removeLayer(flightMarkers[flightId].marker);
                    delete flightMarkers[flightId];
                }
            }
        };
        const processFlight = async (flight) => {
            const {
                flightId,
                heading,
                latitude,
                longitude,
                altitude,
                speed,
                callsign,
            } = flight;
            const newPosition = [latitude, longitude];
            const previousPosition =
                flightMarkers[flightId]?.endPos || newPosition;
            try {
                const routeResponse = await fetch(
                    `${URLBASE}/sessions/${sessionId}/flights/${flightId}/route`,
                );
                if (!routeResponse.ok) return;
                const routeData = await routeResponse.json();
                const route = routeData.result;
                if (route.length > 1) {
                    const flightPlanResponse = await fetch(
                        `${URLBASE}/sessions/${sessionId}/flights/${flightId}/flightplan`,
                    );
                    const flightPlanData = await flightPlanResponse.json();
                    const flightPlan = flightPlanData.result;
                    const firstWaypoint = flightPlan.flightPlanItems[0];
                    const lastWaypoint =
                        flightPlan.flightPlanItems[
                            flightPlan.flightPlanItems.length - 1
                        ];
                    const dep = isICAO(firstWaypoint.identifier)
                        ? firstWaypoint.identifier
                        : "N/A";
                    const arrv = isICAO(lastWaypoint.identifier)
                        ? lastWaypoint.identifier
                        : "N/A";
                    const depLatLng = [
                        firstWaypoint.location.latitude,
                        firstWaypoint.location.longitude,
                    ];
                    const arrvLatLng = [
                        lastWaypoint.location.latitude,
                        lastWaypoint.location.longitude,
                    ];
                    const updateMarker = (marker) => {
                        smoothMoveMarker(
                            marker,
                            previousPosition,
                            newPosition,
                            ANIMATION_DURATION,
                        );
                        flightMarkers[flightId].endPos = newPosition;
                        marker._icon.innerHTML = `<img src="/1ved-cloud/app/assets/aircraft-icon.svg" style="transform: rotate(${heading % 360}deg); width: 32px; height: 32px;"/>`;
                    };
                    const createMarker = () => {
                        const marker = L.marker(newPosition, {
                            icon: L.divIcon({
                                className: "rotated-aircraft-icon",
                                html: `<img src="/1ved-cloud/app/assets/aircraft-icon.svg" style="transform: rotate(${heading % 360}deg); width: 32px; height: 32px;" />`,
                                iconSize: [5, 5],
                                iconAnchor: [16, 16],
                            }),
                        });
                        marker.bindTooltip(callsign, {
                            permanent: true,
                            direction: "top",
                            className: "callsign-label",
                            opacity: 0.9,
                            offset: [0, -11],
                        });
                        const style = document.createElement("style");
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
                                          ${altitude < 10000 ? Math.ceil(altitude) + " ft" : "FL" + Math.ceil(altitude / 100)} |
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
                        marker.on("popupopen", () => {
                            dashedLine = L.polyline([depLatLng, arrvLatLng], {
                                color: "black",
                                weight: 1,
                                dashArray: "4, 8",
                            }).addTo(map);
                        });
                        marker.on("popupclose", () => {
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
                console.error(
                    `Error fetching route for flight ${callsign}:`,
                    routeError,
                );
            }
        };
        await Promise.all(filteredFlights.map(processFlight));
        removeStaleMarkers();
    } catch (error) {
        console.error("Error fetching flights:", error);
    }
}


fetchAndDisplayFlights();
setInterval(fetchAndDisplayFlights, UPDATE_INTERVAL);

const airportIcon = L.icon({
    iconUrl:
        "https://github.com/eldrago4/if-gatekeeper-hono/blob/346b253289fd5cce06d9cff82c4d315982dd2c36/1ved-cloud/app/assets/airport-icon.png?raw=true",
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16],
});

const highlightedRoutes = [];

function getAirportByICAO(icao) {
    return airports.find((a) => a.icao === icao);
}

function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos((lat1 * Math.PI) / 180) *
            Math.cos((lat2 * Math.PI) / 180) *
            Math.sin(dLng / 2) ** 2;
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
            (1 - t) ** 2 * start[0] +
                2 * (1 - t) * t * controlLat +
                t ** 2 * end[0],
            (1 - t) ** 2 * start[1] +
                2 * (1 - t) * t * controlLng +
                t ** 2 * end[1],
        ];
    });
}


airports.forEach((airport) => {
    const marker = L.marker(airport.coordinates, {
        icon: airportIcon,
        icao: airport.icao,
    }).addTo(map).bindPopup(
        `<div class="flight-popup">${airport.name}<br>(${airport.icao})</div>
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
        </style>`
    );

    // Store the marker in the airport object
    airport.markerStart = marker;
    
    // Add event listeners
    marker.on("mouseover", (event) => handleHover(event, true));
    marker.on("mouseout", (event) => handleHover(event, false));
    marker.on("click", handleClick);
});
function addRoute(route) {
    const startAirport = getAirportByICAO(route.startICAO);
    const endAirport = getAirportByICAO(route.endICAO);
    if (!startAirport || !endAirport) {
        console.warn(`Route data incomplete: ${JSON.stringify(route)}`);
        return null;
    }

    const curvePoints = calculateBezierCurve(
        startAirport.coordinates,
        endAirport.coordinates,
    );

    const type = getRouteType(route.fnum);
    let polyline;
    if (type === 'codeshareB') {
        polyline = L.polyline(curvePoints, { color: "goldenrod", weight: 1 });
        polyline.addTo(codesharesB);
    } else if (type === 'codeshareA') {
        polyline = L.polyline(curvePoints, { color: "goldenrod", weight: 1 });
        polyline.addTo(codesharesA);
    } else {
        polyline = L.polyline(curvePoints, { color: "blue", weight: 1 }).addTo(map);
    }
    
    return { polyline, route, type };
}

const elements = routes.map(addRoute).filter(Boolean);

function handleHover(event, isHover, isCodeshare = false) {
    if (highlightedRoutes.length === 0) {
        const hoveredIcao = event.target.options.icao;
        elements.forEach((e) => {
            if (!e.polyline) return; // Fixing TypeError issue

            if (e.route.startICAO === hoveredIcao || e.route.endICAO === hoveredIcao) {
                e.polyline.setStyle({
                    color: e.type === "INVA" ? (isHover ? "red" : "blue") : "goldenrod",
                    weight: isHover ? 2.7 : 1,
                    opacity: 1
                });
            } else {
                e.polyline.setStyle({ opacity: isHover ? 0.2 : 1 });
            }
        });

        if (isCodeshare) {
            [codesharesA, codesharesB].forEach((layerGroup) => {
                layerGroup.eachLayer((layer) => {
                    const hoveredIcao = event.target.options.icao;
                    if (layer.options.startICAO === hoveredIcao || layer.options.endICAO === hoveredIcao) {
                        layer.setStyle({ opacity: 1 });
                    } else {
                        layer.setStyle({ opacity: 0.2 });
                    }
                });
            });
        }
    }
}

function handleClick(event) {
    const clickedIcao = event.target.options.icao;
    highlightedRoutes.forEach((e) => {
        e.polyline.setStyle({
            color: e.type === 'INVA' ? "blue" : "goldenrod",
            weight: 1
        });
    });

    highlightedRoutes.length = 0;

    elements.forEach((e) => {
        if ((e.route.startICAO === clickedIcao || e.route.endICAO === clickedIcao)) {
            if (e.type === 'INVA'){
                e.polyline.setStyle({ color: "red", weight: 2.7 });
            }
            highlightedRoutes.push(e);
        } else {
            e.polyline.setStyle({ opacity: 0.2 });
        }
    });
}

function resetHighlight() {
    highlightedRoutes.forEach((e) => {
        if(e.type === 'INVA'){
            e.polyline.setStyle({ color: "blue", weight: 1 });
        }
    });
    highlightedRoutes.length = 0;

    elements.forEach((e) => e.polyline.setStyle({ opacity: 1 }));

    [codesharesA, codesharesB].forEach((layerGroup) => {
        layerGroup.eachLayer((layer) => layer.setStyle({ opacity: 1, weight: 1}));
    });
}

map.on("click", resetHighlight);
map.on("popupclose", resetHighlight);
map.setZoom(5);
