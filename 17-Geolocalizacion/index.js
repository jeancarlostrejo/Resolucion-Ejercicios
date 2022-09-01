/**
 * - Crea un mapa en HTML

- Pon chinchetas en tus 3 lugares favoritos del planeta tierra
 */
let map;

function initMap() {
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 1,
    center: posicion,
  });

  const marker1 = new google.maps.Marker({
    position: {
      lat: 35.3596438,
      lng: 138.7301098,
    },
    map,
    title: "Monte Fuji",
  });

  const marker2 = new google.maps.Marker({
    position: {
      lat: 48.8583701,
      lng: 2.2944813,
    },
    map,
    title: "La Torre Eiffel",
  });

  const marker3 = new google.maps.Marker({
    position: {
      lat: 27.98785,
      lng: 86.9250261,
    },
    map,
    title: "Monte Everest",
  });
}
