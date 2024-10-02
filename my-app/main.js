import Feature from 'ol/Feature.js';
import Map from 'ol/Map.js';
import Overlay from 'ol/Overlay.js';
import Point from 'ol/geom/Point.js';
import View from 'ol/View.js';
import {Icon, Style} from 'ol/style.js';
import {OGCMapTile, OSM, Vector as VectorSource} from 'ol/source.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import { fromLonLat } from 'ol/proj';
import { location, coord, state, link, population  } from './Informações/Info.js';

//Locais de Goiás
const local = new Feature({
  geometry: new Point(fromLonLat([-48.9524,-16.3305])),
  name: `
  <img src=data/Goias.png width ="220">
  <h3>${location.anapolis} </h3>
  <p> Longitude: ${coord.longAnapolis}
  <p> Latitude: ${coord.latAnapolis}
  <p>Estado: ${state.goias}
  <p> <a href=${link.anapolis}> Prefeitura local </a>
  <p> População: ${population.anapolis}  `
});
const local2 = new Feature({
  geometry: new Point(fromLonLat([-47.9372,-18.1721])),
  name: `
  <img src=data/Goias.png width ="220">
  <h3>${location.catalao} </h3>
  <p> Longitude: ${coord.longCatalao}
  <p> Latitude: ${coord.latCatalao}
  <p>Estado: ${state.goias}
  <p> <a href=${link.catalao}> Prefeitura local </a>
  <p> População: ${population.catalao}`
});
const local3 = new Feature({
  geometry: new Point(fromLonLat([-49.2643,-16.6864])),
  name: `
  <img src=data/Goias.png width ="220">
  <h3>${location.goiania} </h3>
  <p> Longitude: ${coord.longGoiania}
  <p> Latitude: ${coord.latGoiania}
  <p>Estado: ${state.goias}
  <p> <a href=${link.goiania}> Prefeitura local </a>
  <p> População: ${population.goiania} `
});
const local4 = new Feature({
  geometry: new Point(fromLonLat([-49.2464,-16.8181])),
  name: `
  <img src=data/Goias.png width ="220">
  <h3>${location.aparecidaDeGoiania} </h3>
  <p> Longitude: ${coord.longAparecidaDeGoiania}
  <p> Latitude: ${coord.latAparecidaDeGoiania}
  <p>Estado: ${state.goias}
  <p> <a href=${link.aparecidaDeGoiania}> Prefeitura local </a>
  <p> População: ${population.aparecidaDeGoiania} `
});
const local5 = new Feature({
  geometry: new Point(fromLonLat([-49.2885,-16.6517])),
  name: `
  <img src=data/Goias.png width ="220">
  <h3>${location.trindade} </h3>
  <p> Longitude: ${coord.longTrindade}
  <p> Latitude: ${coord.latTrindade}
  <p>Estado: ${state.goias}
  <p> <a href=${link.trindade}> Prefeitura local </a>
  <p> População: ${population.trindade}`
});

//Locais do Rio Grande do Norte
const local6 = new Feature({
  geometry: new Point(fromLonLat([-35.2110,-5.7945])),
  name: `<h3>${location.natal} </h3>
  <p> Longitude: ${coord.longNatal}
  <p> Latitude: ${coord.latNatal}
  <p> Estado: ${state.rioGrandeDoNorte}
  <p> <a href=${link.natal}> Prefeitura local </a
  <p> População: ${population.natal}
   `
});
const local7 = new Feature({
  geometry: new Point(fromLonLat([-37.3480,-5.1894])),
  name: `<h3>${location.mossoro} </h3>
  <p> Longitude: ${coord.longMossoro}
  <p> Latitude: ${coord.latMossoro}
  <p> Estado: ${state.rioGrandeDoNorte}
  <p> <a href=${link.mossoro}> Prefeitura local </a>
  <p> População: ${population.mossoro}`
});
const local8 = new Feature({
  geometry: new Point(fromLonLat([-35.0862,-6.2095])),
  name: `<h3>${location.tibauDoSul} </h3>
  <p> Longitude: ${coord.longTibauDoSul}
  <p> Latitude: ${coord.latTibauDoSul}
  <p> Estado: ${state.rioGrandeDoNorte}
  <p> <a href=${link.tibauDoSul}> Prefeitura local </a>
  <p> População: ${population.tibauDoSul}`
});
const local9 = new Feature({
  geometry: new Point(fromLonLat([-37.0980,-6.4532])),
  name: `<h3>${location.caico} </h3>
  <p> Longitude: ${coord.longCaico}
  <p> Latitude: ${coord.latCaico}
  <p> Estado: ${state.rioGrandeDoNorte}
  <p> <a href=${link.caico}> Prefeitura local </a>
  <p> População: ${population.caico}`
});
const local10 = new Feature({
  geometry: new Point(fromLonLat([-36.5173,-6.3884])),
  name: `<h3>${location.curraisNovos} </h3>
  <p> Longitude: ${coord.longCurraisNovos}
  <p> Latitude: ${coord.latCurraisNovos}
  <p> Estado: ${state.rioGrandeDoNorte}
  <p> <a href=${link.curraisNovos}> Prefeitura local </a>
  <p> População: ${population.curraisNovos}`
});

//Locais do Acre
const local11 = new Feature({
  geometry: new Point(fromLonLat([-67.8249,-9.9754])),
  name: `<h3>${location.rioBranco} </h3>
  <p> Longitude: ${coord.longRioBranco}
  <p> Latitude: ${coord.latRioBranco}
  <p> Estado: ${state.acre}
  <p> <a href=${link.rioBranco}> Prefeitura local </a>
  <p> População: ${population.rioBranco}`
});
const local12 = new Feature({
  geometry: new Point(fromLonLat([-73.0165,-7.6339])),
  name: `<h3>${location.cruzeiroDoSul} </h3>
  <p> Longitude: ${coord.longCruzeiroDoSul}
  <p> Latitude: ${coord.latCruzeiroDoSul}
  <p> Estado: ${state.acre}
  <p> <a href=${link.cruzeiroDoSul}> Prefeitura local </a>
  <p> População: ${population.cruzeiroDoSul}`
});
const local13 = new Feature({
  geometry: new Point(fromLonLat([-67.4580,-9.7161])),
  name: `<h3>${location.senadorGuiomard} </h3>
  <p> Longitude: ${coord.longSenadorGuiomard}
  <p> Latitude: ${coord.latSenadorGuiomard}
  <p> Estado: ${state.acre}
  <p> <a href=${link.senadorGuiomard}> Prefeitura local </a>
  <p> População: ${population.senadorGuiomard}`
});
const local14 = new Feature({
  geometry: new Point(fromLonLat([-70.5903,-8.1480])),
  name: `<h3>${location.tarauaca} </h3>
  <p> Longitude: ${coord.longTarauaca}
  <p> Latitude: ${coord.latTarauaca}
  <p> Estado: ${state.acre}
  <p> <a href=${link.tarauaca}> Prefeitura local </a>
  <p> População: ${population.tarauaca}`
});
const local15 = new Feature({
  geometry: new Point(fromLonLat([-68.7584,-11.0680])),
  name: `<h3>${location.brasileia} </h3>
  <p> Longitude: ${coord.longBrasileia}
  <p> Latitude: ${coord.latBrasileia}
  <p> Estado: ${state.acre}
  <p> <a href=${link.brasileia}> Prefeitura local </a>
  <p> População: ${population.brasileia}`
});



const iconStyle = new Style({
  image: new Icon({
    anchor: [0.5, 1],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: 'data/icon.png',
  }),
});

local.setStyle(iconStyle);
local2.setStyle(iconStyle);
local3.setStyle(iconStyle);
local4.setStyle(iconStyle);
local5.setStyle(iconStyle);
local6.setStyle(iconStyle);
local7.setStyle(iconStyle);
local8.setStyle(iconStyle);
local9.setStyle(iconStyle);
local10.setStyle(iconStyle);
local11.setStyle(iconStyle);
local12.setStyle(iconStyle);
local13.setStyle(iconStyle);
local14.setStyle(iconStyle);
local15.setStyle(iconStyle);

const vectorSource = new VectorSource({
  features: [local,local2,local3,local4,local5,local6,local7,local8,local9,local10,local11,local12,local13,local14,local15],  
});

const vectorLayer = new VectorLayer({
  source: vectorSource,
});

const rasterLayer = new TileLayer({
  source: new OSM({
    crossOrigin: '',
  }),
});

const map = new Map({
  layers: [rasterLayer, vectorLayer],
  target: document.getElementById('map'),
  view: new View({
    center: fromLonLat([-40,-30]),
    zoom: 3.4 ,
  }),
});

const element = document.getElementById('popup');

const popup = new Overlay({
  element: element,
  positioning: 'bottom-center',
  stopEvent: false,
});
map.addOverlay(popup);

let popover;
function disposePopover() {
  if (popover) {
    popover.dispose();
    popover = undefined;
  }
}
// display popup on click
map.on('click', function (evt) {
  const feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
    return feature;
  });
  disposePopover();
  if (!feature) {
    return;
  }
  popup.setPosition(evt.coordinate);
  popover = new bootstrap.Popover(element, {
    placement: 'top',
    html: true,
    content: feature.get('name'),
  });
  popover.show();
});

// change mouse cursor when over marker
map.on('pointermove', function (e) {
  const pixel = map.getEventPixel(e.originalEvent);
  const hit = map.hasFeatureAtPixel(pixel);
  map.getTarget().style.cursor = hit ? 'pointer' : '';
});
// Close the popup when the map is moved
map.on('movestart', disposePopover);
