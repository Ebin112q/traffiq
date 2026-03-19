function initMap(){

const tacloban={lat:11.2440,lng:125.0037};

const map=new google.maps.Map(document.getElementById("map"),{
zoom:14,
center:tacloban
});

const streets=[
{name:"Real Street",lat:11.2448,lng:125.0032},
{name:"Rizal Street",lat:11.2455,lng:125.0045},
{name:"Burgos Street",lat:11.2438,lng:125.0028},
{name:"Justice Street",lat:11.2430,lng:125.0018},
{name:"Gomez Street",lat:11.2420,lng:125.0025}
];

streets.forEach(s=>{

new google.maps.Marker({
position:{lat:s.lat,lng:s.lng},
map:map,
title:s.name
});

});

async function loadMapScript() {
    try {
        const response = await fetch('/api/maps-key');
        const data = await response.json();
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${data.key}&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
    } catch (error) {
        console.error('Failed to load API key:', error);
    }
}

}