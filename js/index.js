"use strict"

window.onload = event => {
  map();
};

function map() {
  require([
    "esri/Map",
    "esri/Basemap",
    "esri/layers/VectorTileLayer",
    "esri/views/MapView",
    "esri/widgets/Home",
    "esri/layers/FeatureLayer"
  ], function(Map, Basemap, VectorTileLayer, MapView, Home, FeatureLayer) {
    let vectorBase = new VectorTileLayer({
      url:
        "https://www.arcgis.com/sharing/rest/content/items/291da5eab3a0412593b66d384379f89f/resources/styles/root.json"
    });

    let vectorReference = new VectorTileLayer({
      url:
        "https://www.arcgis.com/sharing/rest/content/items/1768e8369a214dfab4e2167d5c5f2454/resources/styles/root.json",
      opacity: 0.7
    });
    let map = new Map({
      basemap: new Basemap({
        baseLayers: [vectorBase],
        referenceLayers: [vectorReference]
      })
    });

    let view = new MapView({
      container: "viewDiv",
      map: map,
      zoom: 3,
      center: [-97, 39]
    });
    let home = new Home({
      view: view
    });
    view.when(() => view.ui.add(home, "top-left"));
  });
}