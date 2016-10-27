/*
* @Author: Maciej Sularz
* @Date:   2016-10-26 18:03:55
* @Last Modified by:   Maciej Sularz
* @Last Modified time: 2016-10-27 19:56:05
*/


function initMap() {
	/**
	 * Styling comes from https://snazzymaps.com 
	 * use this service to refine the styling
	 */
	var styles = [
		{
			"featureType": "all",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"saturation": 36
				},
				{
					"color": "#000000"
				},
				{
					"lightness": 40
				}
			]
		},
		{
			"featureType": "all",
			"elementType": "labels.text.stroke",
			"stylers": [
				{
					"visibility": "on"
				},
				{
					"color": "#000000"
				},
				{
					"lightness": 16
				}
			]
		},
		{
			"featureType": "all",
			"elementType": "labels.icon",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "administrative",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"lightness": 20
				}
			]
		},
		{
			"featureType": "administrative",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"lightness": 17
				},
				{
					"weight": 1.2
				}
			]
		},
		{
			"featureType": "landscape",
			"elementType": "geometry",
			"stylers": [
				{
					"lightness": 20
				}
			]
		},
		{
			"featureType": "landscape",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#232323"
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [
				{
					"lightness": 21
				},
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#b19918"
				},
				{
					"lightness": 17
				},
				{
					"visibility": "on"
				},
				{
					"saturation": "0"
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"color": "#000000"
				},
				{
					"lightness": 29
				},
				{
					"weight": 0.2
				},
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "road.arterial",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#000000"
				},
				{
					"lightness": 18
				}
			]
		},
		{
			"featureType": "road.local",
			"elementType": "all",
			"stylers": [
				{
					"visibility": "on"
				},
				{
					"weight": "2.38"
				}
			]
		},
		{
			"featureType": "road.local",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#1e1e1e"
				},
				{
					"lightness": 16
				}
			]
		},
		{
			"featureType": "road.local",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"visibility": "on"
				},
				{
					"color": "#1e1e1e"
				}
			]
		},
		{
			"featureType": "transit",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#000000"
				},
				{
					"lightness": 19
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#b19918"
				},
				{
					"lightness": 17
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"visibility": "on"
				},
				{
					"color": "#b19918"
				}
			]
		}
	]

	// Coordinates
	var airbot = { lat: 52.989480, lng: 18.666025 };
	// Instantiate the map
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: airbot,
		styles: styles,
		streetViewControl: false,
		disableDefaultUI: true
	});

	// offsets the map so that the marker is not right in the middle
	map.panBy(250, 0); 

	// Draws a marker on the map
	// TODO: Make a pulsing marker? Would be neat!
	var marker = new google.maps.Marker({
		position: airbot,
		map: map,
		icon: './img/map-marker.png'
	});
}