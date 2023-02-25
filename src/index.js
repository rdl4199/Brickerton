mapboxgl.accessToken = 'pk.eyJ1IjoicmRsNDE5OSIsImEiOiJja3poYTVwamwzenhtMnVuazZ2ZW8xbmdmIn0.Nd9ajbyw2XbvP5FAZLCXjA';
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [-74.5, 40], // starting position [lng, lat]
            zoom: 9, // starting zoom
        });