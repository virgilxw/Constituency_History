mapboxgl.accessToken = 'pk.eyJ1IjoidmlyZ2lsd3h3IiwiYSI6ImNqYmhrN25rZTNoNWgyeHBlNnY0N3Z6dDAifQ.KCzg-gN0vwIeQNoQyjWVXg';

var map = new mapboxgl.Map({
	container: 'mapCont', // container id
	style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
	center: [103.82, 1.35], // starting position [lng, lat]
	zoom: 10 // starting zoom
}).addControl(new mapboxgl.NavigationControl());

map.on("load", function () {
	$.getJSON("./maplayers/Const.geojson", function (geojson) {
		map.addSource('Bound2020', {
			'type': 'geojson',
			'data': geojson
		});
		map.addLayer({
			'id': 'Bound2020',
			'type': 'fill',
			'source': 'Bound2020',
			'paint': {
				'fill-color': '#888888',
				'fill-opacity': 0.4
			}
		})
	})
})
