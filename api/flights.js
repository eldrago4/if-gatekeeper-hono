var map = L.map('map').setView([20, 0], 2);  
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    opacity: 0.3 
}).addTo(map);

var airportIcon = L.icon({
    iconUrl: '/1ved-cloud/app/assets/airport-icon.png', 
    iconSize: [32, 32], 
    iconAnchor: [16, 32],  
    popupAnchor: [0, -32]  
});

var airports = [
    {
        "name": "Melbourne Airport",
        "iata": "MEL",
        "coordinates": {
          "latitude": -37.669012,
          "longitude": 144.841024
        }
      },
      {
        "name": "Sydney Airport",
        "iata": "SYD",
        "coordinates": {
          "latitude": -33.939922,
          "longitude": 151.175276
        }
      },
      {
        "name": "Vienna International Airport",
        "iata": "VIE",
        "coordinates": {
          "latitude": 48.110278,
          "longitude": 16.569722
        }
      },
      {
        "name": "Bahrain International Airport",
        "iata": "BAH",
        "coordinates": {
          "latitude": 26.270834,
          "longitude": 50.63361
        }
      },
      {
        "name": "Hazrat Shahjalal International Airport",
        "iata": "DAC",
        "coordinates": {
          "latitude": 23.849444,
          "longitude": 90.398611
        }
      },
      {
        "name": "Toronto Pearson International Airport",
        "iata": "YYZ",
        "coordinates": {
          "latitude": 43.6777176,
          "longitude": -79.6248197
        }
      },
      {
        "name": "Vancouver International Airport",
        "iata": "YVR",
        "coordinates": {
          "latitude": 49.194722,
          "longitude": -123.183889
        }
      },
      {
        "name": "Copenhagen Airport",
        "iata": "CPH",
        "coordinates": {
          "latitude": 55.618056,
          "longitude": 12.656111
        }
      },
      {
        "name": "Paris Charles de Gaulle Airport",
        "iata": "CDG",
        "coordinates": {
          "latitude": 49.009722,
          "longitude": 2.547778
        }
      },
      {
        "name": "Frankfurt Airport",
        "iata": "FRA",
        "coordinates": {
          "latitude": 50.033333,
          "longitude": 8.570556
        }
      },
      {
        "name": "Indira Gandhi International Airport",
        "iata": "DEL",
        "coordinates": {
          "latitude": 28.556162,
          "longitude": 77.100183
        }
      },
      {
        "name": "Hong Kong International Airport",
        "iata": "HKG",
        "coordinates": {
          "latitude": 22.308889,
          "longitude": 113.914722
        }
      },
      {
        "name": "Veer Savarkar International Airport",
        "iata": "IXZ",
        "coordinates": {
          "latitude": 11.6412,
          "longitude": 92.7297
        }
      },
      {
        "name": "Vijayawada International Airport",
        "iata": "VGA",
        "coordinates": {
          "latitude": 16.5304,
          "longitude": 80.7968
        }
      },
      {
        "name": "Visakhapatnam Airport",
        "iata": "VTZ",
        "coordinates": {
          "latitude": 17.721167,
          "longitude": 83.224483
        }
      },
      {
        "name": "Lokpriya Gopinath Bordoloi International Airport",
        "iata": "GAU",
        "coordinates": {
          "latitude": 26.1061,
          "longitude": 91.5859
        }
      },
      {
        "name": "Jayprakash Narayan International Airport, Patna",
        "iata": "PAT",
        "coordinates": {
          "latitude": 25.5904,
          "longitude": 85.0886
        }
      },
      {
        "name": "Goa International Airport",
        "iata": "GOI",
        "coordinates": {
          "latitude": 15.3807,
          "longitude": 73.8314
        }
      },
      {
        "name": "Sardar Vallabhbhai Patel International Airport",
        "iata": "AMD",
        "coordinates": {
          "latitude": 23.0772,
          "longitude": 72.6347
        }
      },
      {
        "name": "Rajkot International Airport",
        "iata": "RAJ",
        "coordinates": {
          "latitude": 22.3092,
          "longitude": 70.7795
        }
      },
      {
        "name": "Vadodara Airport",
        "iata": "BDQ",
        "coordinates": {
          "latitude": 22.3363,
          "longitude": 73.2263
        }
      },
      {
        "name": "Jammu Airport",
        "iata": "IXJ",
        "coordinates": {
          "latitude": 32.6894,
          "longitude": 74.8374
        }
      },
      {
        "name": "Sheikh Ul Alam International Airport",
        "iata": "SXR",
        "coordinates": {
          "latitude": 33.9871,
          "longitude": 74.7748
        }
      },
      {
        "name": "Kempegowda International Airport Bengaluru",
        "iata": "BLR",
        "coordinates": {
          "latitude": 13.1986,
          "longitude": 77.7066
        }
      },
      {
        "name": "Cochin International Airport",
        "iata": "COK",
        "coordinates": {
          "latitude": 10.152,
          "longitude": 76.4019
        }
      },
      {
        "name": "Thiruvananthapuram International Airport",
        "iata": "TRV",
        "coordinates": {
          "latitude": 8.4821,
          "longitude": 76.9201
        }
      },
      {
        "name": "Kushok Bakula Rimpochee Airport",
        "iata": "IXL",
        "coordinates": {
          "latitude": 34.1359,
          "longitude": 77.5465
        }
      },
      {
        "name": "Raja Bhoj International Airport, Bhopal",
        "iata": "BHO",
        "coordinates": {
          "latitude": 23.2875,
          "longitude": 77.3375
        }
      },
      {
        "name": "Devi Ahilyabai Holkar International Airport",
        "iata": "IDR",
        "coordinates": {
          "latitude": 22.7216,
          "longitude": 75.8011
        }
      },
      {
        "name": "Aurangabad Airport",
        "iata": "IXU",
        "coordinates": {
          "latitude": 19.8646,
          "longitude": 75.398
        }
      },
      {
        "name": "Chhatrapati Shivaji Maharaj International Airport",
        "iata": "BOM",
        "coordinates": {
          "latitude": 19.0896,
          "longitude": 72.8679
        }
      },
      {
        "name": "Pune International Airport",
        "iata": "PNQ",
        "coordinates": {
          "latitude": 18.5826,
          "longitude": 73.9199
        }
      },
      {
        "name": "Guru Ram Das Ji International Airport Amritsar",
        "iata": "ATQ",
        "coordinates": {
          "latitude": 31.7096,
          "longitude": 74.7973
        }
      },
      {
        "name": "Jodhpur Airport",
        "iata": "JDH",
        "coordinates": {
          "latitude": 26.2511,
          "longitude": 73.0489
        }
      },
      {
        "name": "Maharana Pratap Airport, Udaipur",
        "iata": "UDR",
        "coordinates": {
          "latitude": 24.6178,
          "longitude": 73.8969
        }
      },
      {
        "name": "Chennai International Airport",
        "iata": "MAA",
        "coordinates": {
          "latitude": 12.9941,
          "longitude": 80.1709
        }
      },
      {
        "name": "Rajiv Gandhi International Airport",
        "iata": "HYD",
        "coordinates": {
          "latitude": 17.2403,
          "longitude": 78.429
        }
      },
      {
        "name": "Chaudhary Charan Singh International Airport",
        "iata": "LKO",
        "coordinates": {
          "latitude": 26.7606,
          "longitude": 80.8893
        }
      },
      {
        "name": "Lal Bahadur Shastri International Airport, Varanasi",
        "iata": "VNS",
        "coordinates": {
          "latitude": 25.4524,
          "longitude": 82.8606
        }
      },
      {
        "name": "Netaji Subhash Chandra Bose International Airport",
        "iata": "CCU",
        "coordinates": {
          "latitude": 22.6547,
          "longitude": 88.4467
        }
      },
      {
        "name": "Ben Gurion Airport",
        "iata": "TLV",
        "coordinates": {
          "latitude": 32.0061,
          "longitude": 34.8856
        }
      },
      {
        "name": "Milan Malpensa Airport",
        "iata": "MXP",
        "coordinates": {
          "latitude": 45.6301,
          "longitude": 8.7231
        }
      },
      {
        "name": "Narita International Airport",
        "iata": "NRT",
        "coordinates": {
          "latitude": 35.772,
          "longitude": 140.3929
        }
      },
      {
        "name": "Jomo Kenyatta International Airport",
        "iata": "NBO",
        "coordinates": {
          "latitude": -1.3192,
          "longitude": 36.9275
        }
      },
      {
        "name": "Kuwait International Airport",
        "iata": "KWI",
        "coordinates": {
          "latitude": 29.2269,
          "longitude": 47.9783
        }
      },
      {
        "name": "Yangon International Airport",
        "iata": "RGN",
        "coordinates": {
          "latitude": 16.907,
          "longitude": 96.1345
        }
      },
      {
        "name": "Tribhuvan International Airport",
        "iata": "KTM",
        "coordinates": {
          "latitude": 27.6966,
          "longitude": 85.3591
        }
      },
      {
        "name": "Amsterdam Airport Schiphol",
        "iata": "AMS",
        "coordinates": {
          "latitude": 52.3086,
          "longitude": 4.7639
        }
      },
      {
        "name": "Muscat International Airport",
        "iata": "MCT",
        "coordinates": {
          "latitude": 23.5933,
          "longitude": 58.2844
        }
      },
      {
        "name": "Hamad International Airport",
        "iata": "DOH",
        "coordinates": {
          "latitude": 25.2731,
          "longitude": 51.6083
        }
      },
      {
        "name": "King Fahd International Airport",
        "iata": "DMM",
        "coordinates": {
          "latitude": 26.4712,
          "longitude": 49.7979
        }
      },
      {
        "name": "King Abdulaziz International Airport",
        "iata": "JED",
        "coordinates": {
          "latitude": 21.6796,
          "longitude": 39.1571
        }
      },
      {
        "name": "King Khalid International Airport",
        "iata": "RUH",
        "coordinates": {
          "latitude": 24.9576,
          "longitude": 46.6986
        }
      },
      {
        "name": "Singapore Changi Airport",
        "iata": "SIN",
        "coordinates": {
          "latitude": 1.3644,
          "longitude": 103.9915
        }
      },
      {
        "name": "Incheon International Airport",
        "iata": "ICN",
        "coordinates": {
          "latitude": 37.4602,
          "longitude": 126.4407
        }
      },
      {
        "name": "Bandaranaike International Airport",
        "iata": "CMB",
        "coordinates": {
          "latitude": 7.1808,
          "longitude": 79.8844
        }
      },
      {
        "name": "Suvarnabhumi Airport",
        "iata": "BKK",
        "coordinates": {
          "latitude": 13.689,
          "longitude": 100.7501
        }
      },
      {
        "name": "Phuket International Airport",
        "iata": "HKT",
        "coordinates": {
          "latitude": 8.1111,
          "longitude": 98.3066
        }
      },
      {
        "name": "Birmingham Airport",
        "iata": "BHX",
        "coordinates": {
          "latitude": 52.452,
          "longitude": -1.7432
        }
      },
      {
        "name": "Heathrow Airport",
        "iata": "LHR",
        "coordinates": {
          "latitude": 51.4706,
          "longitude": -0.4619
        }
      },
      {
        "name": "Chicago O'Hare International Airport",
        "iata": "ORD",
        "coordinates": {
          "latitude": 41.9742,
          "longitude": -87.9073
        }
      },
      {
        "name": "Newark Liberty International Airport",
        "iata": "EWR",
        "coordinates": {
          "latitude": 40.6895,
          "longitude": -74.1745
        }
      },
      {
        "name": "John F. Kennedy International Airport",
        "iata": "JFK",
        "coordinates": {
          "latitude": 40.6413,
          "longitude": -73.7781
        }
      },
      {
        "name": "San Francisco International Airport",
        "iata": "SFO",
        "coordinates": {
          "latitude": 37.6213,
          "longitude": -122.379
        }
      },
      {
        "name": "Dulles International Airport",
        "iata": "IAD",
        "coordinates": {
          "latitude": 38.9531,
          "longitude": -77.4565
        }
      },
      {
        "name": "Tirupati International Airport",
        "iata": "TIR",
        "coordinates": {
          "latitude": 13.6325,
          "longitude": 79.5434
        }
      },
      {
        "name": "Dibrugarh Airport",
        "iata": "DIB",
        "coordinates": {
          "latitude": 27.4839,
          "longitude": 95.0169
        }
      },
      {
        "name": "Silchar Airport",
        "iata": "IXS",
        "coordinates": {
          "latitude": 24.9129,
          "longitude": 92.9787
        }
      },
      {
        "name": "Shaheed Bhagat Singh International Airport, Chandigarh",
        "iata": "IXC",
        "coordinates": {
          "latitude": 30.6735,
          "longitude": 76.7885
        }
      },
      {
        "name": "Bhuj Airport",
        "iata": "BHJ",
        "coordinates": {
          "latitude": 23.2878,
          "longitude": 69.6703
        }
      },
      {
        "name": "Jamnagar Airport",
        "iata": "JGA",
        "coordinates": {
          "latitude": 22.4655,
          "longitude": 70.0126
        }
      },
      {
        "name": "Mangaluru International Airport",
        "iata": "IXE",
        "coordinates": {
          "latitude": 12.9613,
          "longitude": 74.8901
        }
      },
      {
        "name": "Calicut International Airport",
        "iata": "CCJ",
        "coordinates": {
          "latitude": 11.1365,
          "longitude": 75.9553
        }
      },
      {
        "name": "Dr Babasaheb Ambedkar International Airport",
        "iata": "NAG",
        "coordinates": {
          "latitude": 21.0922,
          "longitude": 79.0472
        }
      },
      {
        "name": "Bir Tikendrajit International Airport",
        "iata": "IMF",
        "coordinates": {
          "latitude": 24.7606,
          "longitude": 93.8967
        }
      },
      {
        "name": "Dimapur Airport",
        "iata": "DMU",
        "coordinates": {
          "latitude": 25.8836,
          "longitude": 93.7714
        }
      },
      {
        "name": "Coimbatore International Airport",
        "iata": "CJB",
        "coordinates": {
          "latitude": 11.0303,
          "longitude": 77.0434
        }
      },
      {
        "name": "Madurai Airport",
        "iata": "IXM",
        "coordinates": {
          "latitude": 9.8345,
          "longitude": 78.0934
        }
      },
      {
        "name": "Maharaja Bir Bikram Airport, Agartala",
        "iata": "IXA",
        "coordinates": {
          "latitude": 23.886,
          "longitude": 91.2401
        }
      },
      {
        "name": "Velana International Airport",
        "iata": "MLE",
        "coordinates": {
          "latitude": 4.1916,
          "longitude": 73.5292
        }
      },
      {
        "name": "Zayed International Airport",
        "iata": "ZVJ",
        "coordinates": {
          "latitude": 24.4666,
          "longitude": 54.6167
        }
      },
      {
        "name": "London Gatwick Airport",
        "iata": "LGW",
        "coordinates": {
          "latitude": 51.1537,
          "longitude": -0.1821
        }
      },
      {
        "name": "Surat International Airport",
        "iata": "STV",
        "coordinates": {
          "latitude": 21.1141,
          "longitude": 72.7411
        }
      },
      {
        "name": "Kannur International Airport",
        "iata": "CNN",
        "coordinates": {
          "latitude": 11.9142,
          "longitude": 75.5467
        }
      },
      {
        "name": "Rajmata Vijayaraje Scindia Airport, Gwalior",
        "iata": "GWL",
        "coordinates": {
          "latitude": 26.2933,
          "longitude": 78.2278
        }
      },
      {
        "name": "Biju Patnaik International Airport",
        "iata": "BBI",
        "coordinates": {
          "latitude": 20.2444,
          "longitude": 85.8182
        }
      },
      {
        "name": "Jaipur International Airport",
        "iata": "JAI",
        "coordinates": {
          "latitude": 26.8242,
          "longitude": 75.8124
        }
      },
      {
        "name": "Tiruchirappalli International Airport",
        "iata": "TRZ",
        "coordinates": {
          "latitude": 10.7652,
          "longitude": 78.7097
        }
      },
      {
        "name": "Bagdogra International Airport",
        "iata": "IXB",
        "coordinates": {
          "latitude": 26.6812,
          "longitude": 88.3286
        }
      },
      {
        "name": "Salalah International Airport",
        "iata": "SLL",
        "coordinates": {
          "latitude": 17.0387,
          "longitude": 54.0913
        }
      },
      {
        "name": "Al Ain International Airport",
        "iata": "AAN",
        "coordinates": {
          "latitude": 24.2622,
          "longitude": 55.6092
        }
      },
      {
        "name": "Ras Al Khaimah International Airport",
        "iata": "RKT",
        "coordinates": {
          "latitude": 25.613,
          "longitude": 55.9388
        }
      },
      {
        "name": "Sharjah International Airport",
        "iata": "SHJ",
        "coordinates": {
          "latitude": 25.3285,
          "longitude": 55.5175
        }
      },
      {
        "name": "Dubai International Airport",
        "iata": "DXB",
        "coordinates": {
          "latitude": 25.2532,
          "longitude": 55.3657
        }
      }
];

var airportMarkers = {};
airports.forEach(function(airport) {
    var marker = L.marker([airport.coordinates.latitude, airport.coordinates.longitude], {icon: airportIcon}).addTo(map);
    marker.bindPopup(`<b>${airport.name}</b><br>${airport.iata}`);
    airportMarkers[airport.iata] = [airport.coordinates.latitude, airport.coordinates.longitude];
});


var routes = [
  {
    "airports": {
      "JFK": {
        "routes": ["BOM", "DEL"]
      },
      "BOM": {
        "routes": ["JFK", "DEL", "GOI", "MAA", "EWR", "LHR", "HYD", "BLR", "DXB", "JED", "BHY", "UDD", "JOH", "BOM", "TRZ", "VNS", "MIR", "AHM"]
      },
      "DEL": {
        "routes": ["JFK", "BOM", "MXP", "VIE", "CPH", "AHM", "CCU", "BOM", "MMA", "BLR", "LHR", "YVR", "YYZ", "YUL", "AUH", "VZK", "UDD", "JOH", "BOM", "TRZ", "CCU", "VJH", "PRA", "TRZ", "CCU"]
      },
      "MXP": {
        "routes": ["DEL"]
      },
      "VIE": {
        "routes": ["DEL"]
      },
      "CPH": {
        "routes": ["DEL"]
      },
      "AHM": {
        "routes": ["DEL", "BOM", "LHR", "GOI", "DXB", "MMA"]
      },
      "CCU": {
        "routes": ["DEL", "EBS", "MIR", "VJH", "YGB", "UDD", "COX"]
      },
      "EBS": {
        "routes": ["DEL", "CCU", "MIR"]
      },
      "MIR": {
        "routes": ["DEL", "BOM", "VOB", "COX", "MIR"]
      },
      "VOB": {
        "routes": ["DEL", "BOM", "EBS", "CCU", "COX"]
      },
      "DXB": {
        "routes": ["BOM", "DEL", "MIR", "JED", "VOB"]
      },
      "JED": {
        "routes": ["BOM", "DXB"]
      },
      "BLR": {
        "routes": ["DEL", "BOM", "MIR", "GOI"]
      },
      "GOI": {
        "routes": ["BOM", "BLR", "DXB", "GOI"]
      },
      "EWR": {
        "routes": ["BOM"]
      },
      "LHR": {
        "routes": ["DEL", "BOM"]
      },
      "HYD": {
        "routes": ["BOM", "GOI"]
      },
      "YVR": {
        "routes": ["DEL"]
      },
      "YYZ": {
        "routes": ["DEL"]
      },
      "YUL": {
        "routes": ["DEL"]
      },
      "AUH": {
        "routes": ["DEL", "BOM"]
      },
      "VZK": {
        "routes": ["DEL", "BOM"]
      },
      "UDD": {
        "routes": ["DEL", "EBS"]
      },
      "JOH": {
        "routes": ["DEL", "BOM"]
      },
      "TRZ": {
        "routes": ["DEL", "BOM"]
      },
      "VNS": {
        "routes": ["DEL"]
      },
      "MIR": {
        "routes": ["BOM", "DEL"]
      },
      "AHM": {
        "routes": ["BOM"]
      },
      "COX": {
        "routes": ["DEL", "MIR"]
      },
      "YGB": {
        "routes": ["DEL", "CCU"]
      },
      "PRA": {
        "routes": ["DEL"]
      },
      "VJH": {
        "routes": ["DEL"]
      },
      "CCU": {
        "routes": ["DEL"]
      }
    }
  }  
];

function drawRoutes() {
  routes.forEach(function(routeData) {
      for (var originIATA in routeData.airports) {
          var originCoords = airportMarkers[originIATA];
          routeData.airports[originIATA].routes.forEach(function(destinationIATA) {
              var destinationCoords = airportMarkers[destinationIATA];
              if (originCoords && destinationCoords) {
                  var midPoint = [
                      (originCoords[0] + destinationCoords[0]) / 2,
                      (originCoords[1] + destinationCoords[1]) / 2
                  ];

                  var distance = Math.sqrt(
                      Math.pow(destinationCoords[0] - originCoords[0], 2) + 
                      Math.pow(destinationCoords[1] - originCoords[1], 2)
                  );

                  var controlPointOffset = distance * 0.2;

                  var controlPoint1 = [
                      originCoords[0] + (midPoint[0] - originCoords[0]) * 0.5,
                      originCoords[1] + (midPoint[1] - originCoords[1]) * 0.5 + controlPointOffset
                  ];

                  var controlPoint2 = [
                      destinationCoords[0] - (destinationCoords[0] - midPoint[0]) * 0.5,
                      destinationCoords[1] - (destinationCoords[1] - midPoint[1]) * 0.5 + controlPointOffset
                  ];

                  var curve = L.curve(
                      [
                          'M', originCoords,
                          'C',
                          controlPoint1,
                          controlPoint2,
                          destinationCoords
                      ],
                      { color: 'blue', opacity: 0.2, weight: 1 }
                  );

                  curve.addTo(map);
              }
          });
      }
  });
}

drawRoutes();


