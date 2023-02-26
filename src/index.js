mapboxgl.accessToken = 'pk.eyJ1IjoicmRsNDE5OSIsImEiOiJja3poYTVwamwzenhtMnVuazZ2ZW8xbmdmIn0.Nd9ajbyw2XbvP5FAZLCXjA';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
});

async function readLocationData(){
    // WAIT
}
const file = "../resources/markers.json"
var a = fetch('../resources/markers.json')
    .then((response) => response.json())
    .then((json) => json.locations);
for (const key in a){
    console.log(key);
    const marker = new mapboxgl.Marker()
    .setLngLat(key.lng,key.lat)
    .setPopup(new mapboxgl.Popup().setHTML("<h1>"+key.name+"</h1>"))
    .addTo(map)      
}

map.on('click',(e) => {
    console.log(e)
    const marker = new mapboxgl.Marker({
        // draggable:true
    })
        .setLngLat([e.lngLat.lng,e.lngLat.lat])
        .setPopup(new mapboxgl.Popup().setHTML("<h1>Test Marker!</h1>"))
        .addTo(map);
    // console.log(e.lngLat)
});