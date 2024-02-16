import React, { useEffect, useState } from 'react';

function MapComponent() {
  const [googleMapLoaded, setGoogleMapLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    script.defer = true;
    script.onload = () => setGoogleMapLoaded(true);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  function initMap() {
    if (!googleMapLoaded) return;

    let map = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: { lat: -34.397, lng: 150.644 },
      mapTypeControl: false,
    });

    let geocoder = new window.google.maps.Geocoder();

    const inputText = document.createElement("input");
    inputText.type = "text";
    inputText.placeholder = "Enter a location";

    const submitButton = document.createElement("input");
    submitButton.type = "button";
    submitButton.value = "Geocode";
    submitButton.classList.add("button", "button-primary");

    const clearButton = document.createElement("input");
    clearButton.type = "button";
    clearButton.value = "Clear";
    clearButton.classList.add("button", "button-secondary");

    const response = document.createElement("pre");
    response.id = "response";
    response.innerText = "";

    const responseDiv = document.createElement("div");
    responseDiv.id = "response-container";
    responseDiv.appendChild(response);

    const instructionsElement = document.createElement("p");
    instructionsElement.id = "instructions";
    instructionsElement.innerHTML = "<strong>Instructions</strong>: Enter an address in the textbox to geocode or click on the map to reverse geocode.";

    map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(inputText);
    map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(submitButton);
    map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(clearButton);
    map.controls[window.google.maps.ControlPosition.LEFT_TOP].push(instructionsElement);
    map.controls[window.google.maps.ControlPosition.LEFT_TOP].push(responseDiv);

    let marker = new window.google.maps.Marker({
      map,
    });

    map.addListener("click", (e) => {
      geocode({ location: e.latLng });
    });

    submitButton.addEventListener("click", () =>
      geocode({ address: inputText.value })
    );

    clearButton.addEventListener("click", () => {
      clear();
    });

    function clear() {
      marker.setMap(null);
    }

    function geocode(request) {
      clear();
      geocoder
        .geocode(request)
        .then((result) => {
          const { results } = result;
          map.setCenter(results[0].geometry.location);
          marker.setPosition(results[0].geometry.location);
          marker.setMap(map);
          response.innerText = JSON.stringify(result, null, 2);
          return results;
        })
        .catch((e) => {
          alert("Geocode was not successful for the following reason: " + e);
        });
    }
  }

  return (
    <div>
      <div id="map" style={{ height: "400px", width: "100%" }}></div>
    </div>
  );
}

export default MapComponent;
