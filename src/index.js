import locations from '../resources/markers.json' assert {type: 'json'};

mapboxgl.accessToken = 'pk.eyJ1IjoicmRsNDE5OSIsImEiOiJja3poYTVwamwzenhtMnVuazZ2ZW8xbmdmIn0.Nd9ajbyw2XbvP5FAZLCXjA';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-77.675, 43.084], // starting position [lng, lat]
    zoom: 15, // starting zoom
});

map.on('dblclick', (e) => {
    var modalButton = document.querySelector("#modalButton");
    modalButton.click();
    var modal = document.querySelector("#modal");
    modal.dataset.longitude = e.lngLat.lng;
    modal.dataset.latitude = e.lngLat.lat;
});

document.querySelector("#infoSubmit").addEventListener("click", () => {
    let modal = document.querySelector("#modal");
    let title = document.querySelector("#title");
    let description = document.querySelector("#description");

    //post(modal.dataset.longitude, modal.dataset.latitude)
});


fetch("../resources/markers.json")
    .then(response => response.json())
    .then(data => data.locations.forEach(element => {
        const marker = new mapboxgl.Marker()
        .setLngLat(new mapboxgl.LngLat(element.lng,element.lat))
        .setPopup(new mapboxgl.Popup().setHTML("<p>"+element.name+"</p>"))
        .addTo(map)      
        
    }));
// Commented this section out, but it can still serve as an example piece for onclick events
// map.on('click',(e) => {
    // console.log(e)
    // const marker = new mapboxgl.Marker({
        // draggable:true
    // })
        // .setLngLat([e.lngLat.lng,e.lngLat.lat])
        // .setPopup(new mapboxgl.Popup().setHTML("<h1>Test Marker!</h1>"))
        // .addTo(map);
    // console.log(e.lngLat)
// });