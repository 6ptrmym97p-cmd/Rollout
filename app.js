const sleepTypes = {
  wild: { label: "Vrij kamperen", icon: "△" },
  designated: { label: "Aangewezen gratis plek", icon: "⌂" },
  hut: { label: "Hut of shelter", icon: "▰" },
  host: { label: "Gastnetwerk", icon: "♥" },
  ask: { label: "Toestemming vragen", icon: "?" },
};

const places = [
  {
    id: "smaland",
    name: "Småland: meren en productiebos",
    location: "Regio Växjö · Zweden",
    country: "SE",
    lat: 56.88,
    lng: 14.8,
    type: "wild",
    confidence: 3,
    sourceLabel: "Naturvårdsverket",
    sourceUrl: "https://www.naturvardsverket.se/en/topics/the-right-of-public-access/activities-and-places/camping--tents/",
    description: "Een kansrijke regio voor een discrete nacht volgens het allemansrätten. Zoek ongecultiveerde grond, ruim uit zicht van woningen en controleer lokale natuurreservaatregels.",
    stay: "1–2 nachten",
    cost: "Gratis",
    water: "Zelf filteren of aanvullen",
    caution: "Geen recht op vuur. Bij droogte kan een volledig vuurverbod gelden. Blijf weg van huizen, akkers en kwetsbare natuur.",
    photo: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=82",
  },
  {
    id: "brandenburg",
    name: "Brandenburgse merenregio",
    location: "Ten noorden van Berlijn · Duitsland",
    country: "DE",
    lat: 53.05,
    lng: 13.3,
    type: "ask",
    confidence: 2,
    sourceLabel: "Brandenburg regelgeving",
    sourceUrl: "https://bravors.brandenburg.de/gesetze/bbgnatschag_2013",
    description: "Voor niet-gemotoriseerde reizigers bestaan in Brandenburg ruimere mogelijkheden dan in veel andere deelstaten, maar eigendom, bosrecht en beschermde gebieden blijven bepalend.",
    stay: "Doorgaans 1 nacht",
    cost: "Gratis met geldige toestemming",
    water: "Niet gegarandeerd",
    caution: "Beschouw een mooi bosperceel niet automatisch als toestemming. Kies liever een trekkingplaats of vraag de eigenaar.",
    photo: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=900&q=82",
  },
  {
    id: "utrecht",
    name: "Utrechtse Heuvelrug",
    location: "Provincie Utrecht · Nederland",
    country: "NL",
    lat: 52.05,
    lng: 5.35,
    type: "host",
    confidence: 3,
    sourceLabel: "Vrienden op de Fiets",
    sourceUrl: "https://www.vriendenopdefiets.nl/",
    description: "Geen vrije kampeerregio. Wel een logische corridor om via een gastnetwerk, particuliere tuin of expliciete toestemming een betaalbare plek te regelen.",
    stay: "Op afspraak",
    cost: "Platformafhankelijk",
    water: "Bij host",
    caution: "Wildkamperen is hier geen legale standaardoptie. Gebruik een gastnetwerk of vraag vóór aankomst toestemming op privéterrein.",
    photo: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=900&q=82",
  },
  {
    id: "skane",
    name: "Skåneleden shelters",
    location: "Skåne · Zweden",
    country: "SE",
    lat: 56.05,
    lng: 13.65,
    type: "hut",
    confidence: 2,
    sourceLabel: "OpenStreetMap + lokale routebeheerder",
    sourceUrl: "https://www.skaneleden.se/en",
    description: "Langs langeafstandsroutes staan shelters en eenvoudige rustplekken. Controleer per shelter of reserveren, vuur maken of tenten ernaast is toegestaan.",
    stay: "Meestal 1 nacht",
    cost: "Vaak gratis",
    water: "Niet altijd aanwezig",
    caution: "Een sheltermarkering zegt niets over beschikbaarheid. Neem altijd een tent mee als uitwijkmogelijkheid.",
    photo: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&w=900&q=82",
  },
  {
    id: "hardangervidda",
    name: "Noorse utmark",
    location: "Hardangervidda-regio · Noorwegen",
    country: "NO",
    lat: 60.2,
    lng: 7.45,
    type: "wild",
    confidence: 3,
    sourceLabel: "Norwegian Environment Agency",
    sourceUrl: "https://www.environmentagency.no/areas-of-activity/right-to-roam/camping/",
    description: "In Noorse utmark mag je doorgaans met een kleine tent overnachten. Deze regiopin markeert geen specifieke standplaats: controleer ter plaatse of de grond werkelijk onbebouwd en ongecultiveerd is.",
    stay: "Maximaal 2 nachten; langer in afgelegen berggebied",
    cost: "Gratis",
    water: "Zelf beoordelen en behandelen",
    caution: "Blijf minstens 150 meter van bewoonde huizen en hutten. Lokale regels gelden onder meer in drukbezochte gebieden; vuur in of bij bos is normaal verboden van 15 april tot 15 september. Een DNT- of andere berghut is niet automatisch gratis.",
    photo: "https://images.unsplash.com/photo-1520769669658-f07657f5a307?auto=format&fit=crop&w=900&q=82",
  },
  {
    id: "belgium-bivouac",
    name: "Belgische bivakzones",
    location: "Ardennen en Vlaamse natuurgebieden · België",
    country: "BE",
    lat: 50.35,
    lng: 5.45,
    type: "designated",
    confidence: 2,
    sourceLabel: "Agentschap voor Natuur en Bos",
    sourceUrl: "https://natuurenbos.be/activiteiten/bivakzone",
    description: "Vrij kamperen is geen algemene optie, maar België heeft eenvoudige bivakzones langs wandel- en fietsroutes. Gebruik de losse OSM-pins om aangewezen plekken te vinden en controleer daarna de beheerder.",
    stay: "ANB-zones vooraf gratis reserveren; elders volgens beheerder",
    cost: "Vaak gratis",
    water: "Wisselend",
    caution: "Deze marker is een regio-aanwijzing, geen slaapplaats. Vlaanderen, Wallonië en lokale beheerders hanteren eigen voorwaarden; natuurreservaten zijn geen vrije kampeerterreinen.",
    photo: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=82",
  },
  {
    id: "france-bivouac",
    name: "Franse bivakregio's",
    location: "Alpen, Pyreneeën en andere routegebieden · Frankrijk",
    country: "FR",
    lat: 45.15,
    lng: 6.15,
    type: "ask",
    confidence: 2,
    sourceLabel: "Parcs nationaux de France",
    sourceUrl: "https://www.parcsnationaux.fr/fr",
    description: "Frankrijk kent geen universeel vrij-kampeerrecht. Een licht bivak kan lokaal zijn toegestaan, vooral op doorgaande routes, maar ieder nationaal park, natuurgebied en elke gemeente kan eigen zones en tijden bepalen.",
    stay: "Meestal alleen van avond tot ochtend waar toegestaan",
    cost: "Gratis waar expliciet toegestaan",
    water: "Niet gegarandeerd",
    caution: "Vraag toestemming op privégrond en controleer de parkpagina. Kusten, beschermde of geklasseerde locaties, wegen en lokaal verboden zones vallen af; in mediterrane gebieden gelden strenge vuurregels.",
    photo: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=crop&w=900&q=82",
  },
  {
    id: "luxembourg",
    name: "Luxemburg: toestemming of officiële plek",
    location: "Mullerthal en Oesling · Luxemburg",
    country: "LU",
    lat: 49.85,
    lng: 6.1,
    type: "ask",
    confidence: 2,
    sourceLabel: "Visit Luxembourg",
    sourceUrl: "https://www.visitluxembourg.com/plan-your-stay/stay/camping",
    description: "Luxemburg heeft geen allemansrecht. Plan op een officiële camping of een expliciet toegestane plek en beschouw bos, natuurgebied en routeberm niet als vrije overnachtingsgrond.",
    stay: "Op afspraak of volgens terreinregels",
    cost: "Wisselend",
    water: "Bij officiële locatie",
    caution: "Deze regiopin is alleen een waarschuwing en zoekstart. Gebruik OSM voor gemarkeerde plekken of vraag de eigenaar vooraf toestemming.",
    photo: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=900&q=82",
  },
  {
    id: "swiss-alps",
    name: "Zwitserse hoogalpiene bivakzone",
    location: "Boven de boomgrens · Zwitserland",
    country: "CH",
    lat: 46.65,
    lng: 8.25,
    type: "wild",
    confidence: 2,
    sourceLabel: "Swiss Alpine Club",
    sourceUrl: "https://www.sac-cas.ch/de/umwelt/bergsport-und-umwelt/campieren-und-biwakieren/",
    description: "Een enkele, zorgvuldige nacht boven de boomgrens is op veel plaatsen mogelijk, maar Zwitserland kent kantonale en gemeentelijke beperkingen en veel strikt beschermde gebieden.",
    stay: "Eén nacht, laat opzetten en vroeg vertrekken",
    cost: "Gratis waar toegestaan",
    water: "Zelf beoordelen en behandelen",
    caution: "Niet in natuurreservaten, wildrustgebieden of het Zwitsers Nationaal Park. Vermijd rivieroevers en uiterwaarden, blijf uit zicht van hutten en vraag toestemming bij alpenweiden of privégrond.",
    photo: "https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&w=900&q=82",
  },
  {
    id: "austria-alps",
    name: "Oostenrijk: bos is uitgesloten",
    location: "Alpenregio · Oostenrijk",
    country: "AT",
    lat: 47.25,
    lng: 12.25,
    type: "ask",
    confidence: 3,
    sourceLabel: "Oostenrijks Forstgesetz §33",
    sourceUrl: "https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10010371&Paragraf=33",
    description: "Kamperen of 's nachts verblijven in Oostenrijks bos vereist toestemming van de eigenaar. Buiten het bos verschillen de regels per deelstaat en gemeente; hoogalpien nood- of kort bivak is geen landelijk vrijbriefje.",
    stay: "Alleen met toestemming of volgens lokale regeling",
    cost: "Wisselend",
    water: "Niet gegarandeerd",
    caution: "Zet niet zomaar een tent in bos, natuur- of landschapsbeschermingsgebied. Zoek een expliciete trekkingplek, hut of vraag de gemeente en grondeigenaar.",
    photo: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=900&q=82",
  },
  {
    id: "italian-alps",
    name: "Italiaans bivacco",
    location: "Alpen en Apennijnen · Italië",
    country: "IT",
    lat: 46.15,
    lng: 10.45,
    type: "ask",
    confidence: 2,
    sourceLabel: "Club Alpino Italiano",
    sourceUrl: "https://www.cai.it/",
    description: "Italië regelt kamperen vooral regionaal, provinciaal, gemeentelijk en per park. Een tijdelijk alpien bivak kan anders worden behandeld dan recreatief kamperen, maar is niet automatisch toegestaan.",
    stay: "Alleen volgens regionale of parkregels",
    cost: "Gratis waar bivak expliciet is toegestaan",
    water: "Niet gegarandeerd",
    caution: "Controleer de gemeente of parkbeheerder vóór aankomst. Gebruik onbemande bivacco-hutten alleen volgens hun eigen regels en neem in brandgevoelige gebieden geen enkel risico met vuur.",
    photo: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=900&q=82",
  },
];

const countries = [
  {
    code: "NL",
    flag: "🇳🇱",
    name: "Nederland",
    status: "Streng",
    statusClass: "status-strict",
    summary: "Vrij je tent neerzetten is geen legale basisstrategie. Richt je op toestemming, gastnetwerken en erkende terreinen.",
    rules: ["Staatsbosbeheer stopte in 2020 met zijn paalkampeerterreinen", "Privéterrein kan met expliciete toestemming", "Lokale APV en terreinregels kunnen aanvullend gelden"],
    source: "Staatsbosbeheer: einde paalkamperen",
    url: "https://www.staatsbosbeheer.nl/wat-we-doen/nieuws/2020/05/sluiten-paalkampeerterreinen",
  },
  {
    code: "DE",
    flag: "🇩🇪",
    name: "Duitsland",
    status: "Per deelstaat",
    statusClass: "status-mixed",
    summary: "Geen simpel landelijk ja of nee. De veiligste gratis route is toestemming; daarnaast bestaan trekkingplaatsen en regionale uitzonderingen.",
    rules: ["Beschermde gebieden zijn een harde nee", "Brandenburg, Mecklenburg-Vorpommern en Schleswig-Holstein kennen beperkte uitzonderingen", "Controleer deelstaat én grondeigendom"],
    source: "Bundesnaturschutzgesetz",
    url: "https://www.gesetze-im-internet.de/bnatschg_2009/__59.html",
  },
  {
    code: "DK",
    flag: "🇩🇰",
    name: "Denemarken",
    status: "Aangewezen vrij",
    statusClass: "status-good",
    summary: "Niet overal wildkamperen, maar wel een sterk officieel netwerk van bossen met fri teltning, shelters en primitieve plekken.",
    rules: ["Alleen bossen op de officiële fri teltning-kaart", "Eén nacht, maximaal twee kleine tenten", "Gebruik vuur alleen waar en wanneer toegestaan"],
    source: "Danish Nature Agency",
    url: "https://eng.naturstyrelsen.dk/experience-nature/sleeping-outside-in-nature",
  },
  {
    code: "SE",
    flag: "🇸🇪",
    name: "Zweden",
    status: "Ruim, met zorg",
    statusClass: "status-good",
    summary: "Het allemansrätten maakt één of twee nachten mogelijk op geschikte grond, zolang je niet stoort of beschadigt.",
    rules: ["Gewoonlijk één of twee nachten", "Niet bij woningen, op akkers of kwetsbare grond", "Reservaten en vuurverboden kunnen strengere regels hebben"],
    source: "Naturvårdsverket",
    url: "https://www.naturvardsverket.se/en/topics/the-right-of-public-access/activities-and-places/camping--tents/",
  },
  {
    code: "NO",
    flag: "🇳🇴",
    name: "Noorwegen",
    status: "Ruim, wettelijk",
    statusClass: "status-good",
    summary: "Het allemansretten staat tenten toe op utmark, met duidelijke afstands- en verblijfsregels en plaatselijke uitzonderingen.",
    rules: ["Minstens 150 meter van bewoonde huizen en hutten", "Maximaal twee nachten, behalve in afgelegen bergen", "Lokale verboden en de vuurperiode 15 april–15 september blijven leidend"],
    source: "Norwegian Environment Agency",
    url: "https://www.environmentagency.no/areas-of-activity/right-to-roam/camping/",
  },
  {
    code: "BE",
    flag: "🇧🇪",
    name: "België",
    status: "Alleen aangewezen",
    statusClass: "status-mixed",
    summary: "Geen algemeen recht op wildkamperen. Gebruik bivakzones, officiële terreinen, gasttuinen of expliciete toestemming.",
    rules: ["Natuur-en-Bos-bivakzones reserveer je vooraf en gratis", "Wallonië en andere beheerders hanteren eigen capaciteit, tijden en vuurregels", "Natuurreservaat of openbaar bos is niet automatisch een kampeerplek"],
    source: "Natuur en Bos: kamperen",
    url: "https://natuurenbos.be/activiteiten/bivakzone",
  },
  {
    code: "FR",
    flag: "🇫🇷",
    name: "Frankrijk",
    status: "Sterk lokaal",
    statusClass: "status-mixed",
    summary: "Een klein bivak kan lokaal mogelijk zijn, maar toestemming, gemeentelijke verboden en regels van ieder natuurpark bepalen de uitkomst.",
    rules: ["Vraag toestemming op privégrond", "Kusten, beschermde locaties en lokaal verboden zones vallen af", "Parken publiceren eigen tijden, afstanden en bivakzones"],
    source: "Parcs nationaux de France",
    url: "https://www.parcsnationaux.fr/",
  },
  {
    code: "LU",
    flag: "🇱🇺",
    name: "Luxemburg",
    status: "Streng",
    statusClass: "status-strict",
    summary: "Geen allemansrecht: kies een officiële locatie, gastnetwerk of vooraf gegeven toestemming.",
    rules: ["Bos en natuurgebied zijn geen vrije slaapplaatsen", "Gemeenten en terreinbeheerders kunnen aanvullende verboden stellen", "Een gemarkeerde camping of privétoestemming is de veilige route"],
    source: "Visit Luxembourg: campings",
    url: "https://www.visitluxembourg.com/plan-your-stay/stay/camping",
  },
  {
    code: "CH",
    flag: "🇨🇭",
    name: "Zwitserland",
    status: "Lokaal alpien",
    statusClass: "status-mixed",
    summary: "Een discrete nacht boven de boomgrens is vaak mogelijk, maar kantons, gemeenten en beschermde gebieden bepalen de grenzen.",
    rules: ["Niet in reservaten, wildrustgebieden of het Nationaal Park", "Vermijd kwetsbare biotopen, uiterwaarden en drukke hutomgevingen", "Vraag toestemming op privégrond en alpenweiden"],
    source: "Swiss Alpine Club",
    url: "https://www.sac-cas.ch/de/umwelt/bergsport-und-umwelt/campieren-und-biwakieren/",
  },
  {
    code: "AT",
    flag: "🇦🇹",
    name: "Oostenrijk",
    status: "Per deelstaat",
    statusClass: "status-strict",
    summary: "In het bos is kamperen zonder toestemming verboden; daarbuiten verschillen regels sterk per deelstaat, gemeente en beschermd gebied.",
    rules: ["Forstgesetz §33 sluit kamperen en nachtelijk verblijf in bos uit zonder toestemming", "Hoogalpien bivak is per deelstaat geregeld", "Natuur- en landschapsbeschermingsgebieden hebben vaak extra verboden"],
    source: "Oostenrijks Forstgesetz §33",
    url: "https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10010371&Paragraf=33",
  },
  {
    code: "IT",
    flag: "🇮🇹",
    name: "Italië",
    status: "Regionaal",
    statusClass: "status-mixed",
    summary: "Er is geen eenvoudige landelijke toestemming. Regio, provincie, gemeente en parkbeheer bepalen of een tijdelijk bivak mag.",
    rules: ["Maak onderscheid tussen kort bivak en meerdaags kamperen", "Parken en gemeenten kunnen beide volledig verbieden", "Onbemande bivacco-hutten hebben eigen gebruiksregels"],
    source: "Club Alpino Italiano",
    url: "https://www.cai.it/",
  },
];

const sources = [
  { icon: "W", name: "Warmshowers", description: "Wereldwijd hospitalitynetwerk met een hostkaart in de mobiele app. Rollout heeft nog geen stabiele openbare export om die kaartposities betrouwbaar als eigen laag bij te houden.", meta: "Kaart zichtbaar in officiële app", url: "https://play.google.com/store/apps/details?id=org.warmshowers.app" },
  { icon: "V", name: "Vrienden op de Fiets", description: "De openbare kaartfeed levert losse kaartposities en generieke voorzieningen zonder adresvelden. Rollout clustert die bij uitzoomen en toont de afzonderlijke bronpins bij inzoomen.", meta: "5.144 pins in elf landen · 15 juni 2026", url: "https://www.vriendenopdefiets.nl/zoek-een-logeeradres" },
  { icon: "G", name: "Welcome To My Garden", description: "De openbare explore-kaart levert losse tuinposities, basisvoorzieningen en waar aanwezig een tuinfoto. Die worden brongetrouw geclusterd en bij verder inzoomen afzonderlijk getoond.", meta: "5.379 pins · 3.943 foto's · 15 juni 2026", url: "https://welcometomygarden.org/nl/explore" },
  { icon: "U", name: "Ud i Naturen", description: "Officiële Deense kaartdata met concrete vrije tentgebieden, primitieve overnachtingsplekken en shelters, inclusief locatiebeschrijving, capaciteit en boekingsstatus.", meta: "2.480 officiële plekken · 14 juni 2026", url: "https://udinaturen.dk/kort" },
  { icon: "F", name: "De Wereldfietser", description: "Forum en vereniging met veel ervaringskennis over routes, materiaal en overnachten onderweg.", meta: "Forum · Nederlands", url: "https://forum.wereldfietser.nl/" },
  { icon: "R", name: "Reddit", description: "Recente ervaringen en lokale tips, nuttig als aanwijzing. Controleer elke claim daarna bij een primaire bron.", meta: "Community · wisselend", url: "https://www.reddit.com/r/bikepacking/search/?q=camping%20sweden%20denmark%20germany" },
];

const publicData = window.BEDROLL_DATA || {};
const vodfPins = publicData.vodf?.pins || [];
const wtmgPins = publicData.wtmg?.pins || [];
const denmarkPlaces = publicData.denmark?.places || [];

const map = L.map("map", { zoomControl: false }).setView([52.4, 8.8], 4);
L.control.zoom({ position: "topright" }).addTo(map);

L.tileLayer("https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
}).addTo(map);

const curatedLayer = L.layerGroup().addTo(map);
const osmLayer = L.layerGroup().addTo(map);
const importedLayer = L.layerGroup().addTo(map);
const routeLayer = L.layerGroup().addTo(map);
const locationLayer = L.layerGroup().addTo(map);
function sourceClusterLayer(className) {
  return L.markerClusterGroup
    ? L.markerClusterGroup({
        chunkedLoading: true,
        disableClusteringAtZoom: 13,
        maxClusterRadius: 52,
        showCoverageOnHover: false,
        spiderfyOnMaxZoom: true,
        iconCreateFunction: (cluster) => L.divIcon({
          className: "",
          html: `<div class="map-count-cluster ${className}">${cluster.getChildCount()}</div>`,
          iconSize: [46, 46],
          iconAnchor: [23, 23],
        }),
      }).addTo(map)
    : L.layerGroup().addTo(map);
}

const vodfLayer = sourceClusterLayer("cluster-vodf");
const wtmgLayer = sourceClusterLayer("cluster-wtmg");
const denmarkLayer = L.markerClusterGroup
  ? L.markerClusterGroup({
      chunkedLoading: true,
      disableClusteringAtZoom: 11,
      maxClusterRadius: 52,
      showCoverageOnHover: false,
      spiderfyOnMaxZoom: true,
      iconCreateFunction: (cluster) => L.divIcon({
        className: "",
        html: `<div class="map-count-cluster cluster-official">${cluster.getChildCount()}</div>`,
        iconSize: [46, 46],
        iconAnchor: [23, 23],
      }),
    }).addTo(map)
  : L.layerGroup().addTo(map);
const markerIndex = new Map();
const visiblePlaceCounts = { curated: 0, hospitality: 0, denmark: 0, osm: 0, imported: 0 };
let osmPlaces = [];
let importedWaypoints = [];
let currentCandidates = [];
let displayedCandidates = [];
let userLocation = null;
let locationMessage = "";
let candidatePanelOpen = false;
let candidateHorizonKm = 35;
let routeState = {
  name: "",
  pointCount: 0,
  lengthKm: 0,
  saved: false,
  lines: [],
  segments: [],
  segmentGrid: new Map(),
};

const ROUTE_GRID_DEGREES = 0.25;

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function routeFilterEnabled() {
  return routeState.segments.length > 0 && document.querySelector("#route-filter-active").checked;
}

function pointToSegmentDistanceKm(lat, lng, start, end) {
  const kmPerLat = 110.574;
  const kmPerLng = 111.32 * Math.cos(lat * Math.PI / 180);
  const ax = (start.lng - lng) * kmPerLng;
  const ay = (start.lat - lat) * kmPerLat;
  const bx = (end.lng - lng) * kmPerLng;
  const by = (end.lat - lat) * kmPerLat;
  const dx = bx - ax;
  const dy = by - ay;
  const lengthSquared = dx * dx + dy * dy;
  const fraction = lengthSquared ? Math.max(0, Math.min(1, -(ax * dx + ay * dy) / lengthSquared)) : 0;
  return Math.hypot(ax + fraction * dx, ay + fraction * dy);
}

function isWithinRoute(lat, lng) {
  if (!routeFilterEnabled()) return true;
  const distanceKm = Number(document.querySelector("#route-distance").value);
  const latPadding = distanceKm / 110.574;
  const lngPadding = distanceKm / Math.max(20, 111.32 * Math.cos(lat * Math.PI / 180));

  return routeSegmentCandidates(lat, lng, distanceKm).some((segment) => {
    if (lat < segment.minLat - latPadding || lat > segment.maxLat + latPadding) return false;
    if (lng < segment.minLng - lngPadding || lng > segment.maxLng + lngPadding) return false;
    return pointToSegmentDistanceKm(lat, lng, segment.start, segment.end) <= distanceKm;
  });
}

function simplifyRouteLine(points, limit) {
  if (points.length <= limit) return points;
  const step = (points.length - 1) / (limit - 1);
  const simplified = Array.from({ length: limit - 1 }, (_, index) => points[Math.round(index * step)]);
  simplified.push(points[points.length - 1]);
  return simplified;
}

function prepareRouteLines(lines) {
  const totalPoints = lines.reduce((total, line) => total + line.length, 0);
  return lines.map((line) => {
    const share = Math.max(2, Math.round(2000 * (line.length / totalPoints)));
    return simplifyRouteLine(line, share);
  });
}

function routeSegments(lines) {
  let progressKm = 0;
  let segmentId = 0;
  return lines.flatMap((line) => line.slice(1).map((end, index) => {
    const start = line[index];
    const lengthKm = distanceBetweenPointsKm(start, end);
    const segment = {
      start,
      end,
      id: segmentId++,
      lengthKm,
      progressKm,
      minLat: Math.min(start.lat, end.lat),
      maxLat: Math.max(start.lat, end.lat),
      minLng: Math.min(start.lng, end.lng),
      maxLng: Math.max(start.lng, end.lng),
    };
    progressKm += lengthKm;
    return segment;
  }));
}

function routeGridCell(value) {
  return Math.floor(value / ROUTE_GRID_DEGREES);
}

function routeGridKey(latCell, lngCell) {
  return `${latCell}:${lngCell}`;
}

function buildRouteSegmentGrid(segments) {
  const grid = new Map();
  segments.forEach((segment) => {
    const minLatCell = routeGridCell(segment.minLat);
    const maxLatCell = routeGridCell(segment.maxLat);
    const minLngCell = routeGridCell(segment.minLng);
    const maxLngCell = routeGridCell(segment.maxLng);
    for (let latCell = minLatCell; latCell <= maxLatCell; latCell += 1) {
      for (let lngCell = minLngCell; lngCell <= maxLngCell; lngCell += 1) {
        const key = routeGridKey(latCell, lngCell);
        if (!grid.has(key)) grid.set(key, []);
        grid.get(key).push(segment);
      }
    }
  });
  return grid;
}

function routeSegmentCandidates(lat, lng, distanceKm) {
  if (!routeState.segmentGrid.size) return routeState.segments;
  const latPadding = distanceKm / 110.574;
  const lngPadding = distanceKm / Math.max(20, 111.32 * Math.cos(lat * Math.PI / 180));
  const minLatCell = routeGridCell(lat - latPadding);
  const maxLatCell = routeGridCell(lat + latPadding);
  const minLngCell = routeGridCell(lng - lngPadding);
  const maxLngCell = routeGridCell(lng + lngPadding);
  const seen = new Set();
  const candidates = [];

  for (let latCell = minLatCell; latCell <= maxLatCell; latCell += 1) {
    for (let lngCell = minLngCell; lngCell <= maxLngCell; lngCell += 1) {
      (routeState.segmentGrid.get(routeGridKey(latCell, lngCell)) || []).forEach((segment) => {
        if (seen.has(segment.id)) return;
        seen.add(segment.id);
        candidates.push(segment);
      });
    }
  }
  return candidates;
}

function distanceBetweenPointsKm(start, end) {
  const earthRadiusKm = 6371;
  const latitudeDelta = (end.lat - start.lat) * Math.PI / 180;
  const longitudeDelta = (end.lng - start.lng) * Math.PI / 180;
  const startLatitude = start.lat * Math.PI / 180;
  const endLatitude = end.lat * Math.PI / 180;
  const haversine = Math.sin(latitudeDelta / 2) ** 2
    + Math.cos(startLatitude) * Math.cos(endLatitude) * Math.sin(longitudeDelta / 2) ** 2;
  return 2 * earthRadiusKm * Math.asin(Math.sqrt(haversine));
}

function routeLengthKm(lines) {
  return lines.reduce((total, line) => total + line.slice(1).reduce(
    (lineTotal, point, index) => lineTotal + distanceBetweenPointsKm(line[index], point),
    0,
  ), 0);
}

function pointProjectionOnSegment(lat, lng, segment) {
  const kmPerLat = 110.574;
  const kmPerLng = 111.32 * Math.cos(lat * Math.PI / 180);
  const ax = (segment.start.lng - lng) * kmPerLng;
  const ay = (segment.start.lat - lat) * kmPerLat;
  const bx = (segment.end.lng - lng) * kmPerLng;
  const by = (segment.end.lat - lat) * kmPerLat;
  const dx = bx - ax;
  const dy = by - ay;
  const lengthSquared = dx * dx + dy * dy;
  const fraction = lengthSquared ? Math.max(0, Math.min(1, -(ax * dx + ay * dy) / lengthSquared)) : 0;
  return {
    distanceKm: Math.hypot(ax + fraction * dx, ay + fraction * dy),
    fraction,
  };
}

function nearestRoutePosition(lat, lng, maxSearchKm = 60) {
  if (!routeState.segments.length) return null;
  return routeSegmentCandidates(lat, lng, maxSearchKm).reduce((nearest, segment) => {
    const projection = pointProjectionOnSegment(lat, lng, segment);
    if (nearest && nearest.distanceKm <= projection.distanceKm) return nearest;
    return {
      distanceKm: projection.distanceKm,
      progressKm: segment.progressKm + (segment.lengthKm * projection.fraction),
    };
  }, null);
}

function addCandidate(lat, lng, place, provider) {
  currentCandidates.push({ lat, lng, place, provider });
}

function markerIcon(type) {
  const config = sleepTypes[type] || sleepTypes.ask;
  return L.divIcon({
    className: "",
    html: `<div class="sleep-marker marker-${type}"><span>${config.icon}</span></div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 34],
  });
}

function renderEmptyPanel(title = "Kies een plek", message = "Klik op een marker voor regels, bron en praktische aandachtspunten.") {
  const panel = document.querySelector("#place-panel");
  panel.classList.remove("is-open");
  panel.setAttribute("aria-hidden", "true");
  panel.innerHTML = `
    <div class="empty-state">
      <span class="empty-icon">⌖</span>
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(message)}</p>
    </div>
  `;
}

function renderPlace(place) {
  closeCandidatePanel();
  const panel = document.querySelector("#place-panel");
  const certainty = place.confidence === 3 ? "Officiële bron" : place.confidence === 2 ? "Bron aanwezig, controleer lokaal" : "Community-aanwijzing";
  const extraFacts = place.extraFacts || [];
  const hasCoordinates = !place.approximate && Number.isFinite(place.lat) && Number.isFinite(place.lng);
  const coordinates = hasCoordinates ? `${place.lat},${place.lng}` : "";
  const mapLabel = encodeURIComponent(place.name || "Slaapplek");
  const appleMapsUrl = hasCoordinates ? `https://maps.apple.com/?ll=${coordinates}&q=${mapLabel}` : "";
  const googleMapsUrl = hasCoordinates ? `https://www.google.com/maps/search/?api=1&query=${coordinates}` : "";
  panel.innerHTML = `
    <button class="overlay-close place-panel-close" type="button" aria-label="Locatie-informatie sluiten">×</button>
    ${place.photo ? `
      <figure class="place-photo-wrap">
        <img class="place-photo" src="${escapeHtml(place.photo)}" alt="Foto van ${escapeHtml(place.name)}" loading="lazy" referrerpolicy="no-referrer" />
        <figcaption>Foto: ${escapeHtml(place.photoLabel || place.sourceLabel)}</figcaption>
      </figure>
    ` : ""}
    <div class="place-badges">
      <span class="badge">${escapeHtml(sleepTypes[place.type]?.label || "Slaapplek")}</span>
      <span class="badge badge-muted">${escapeHtml(certainty)}</span>
    </div>
    <h3>${escapeHtml(place.name)}</h3>
    <p class="place-location">${escapeHtml(place.location)}</p>
    ${place.decision ? `<p class="place-decision">${escapeHtml(place.decision)}</p>` : ""}
    <p class="place-description">${escapeHtml(place.description)}</p>
    <ul class="place-facts">
      <li><span>Verblijf</span><strong>${escapeHtml(place.stay)}</strong></li>
      <li><span>Kosten</span><strong>${escapeHtml(place.cost)}</strong></li>
      <li><span>Water</span><strong>${escapeHtml(place.water)}</strong></li>
      <li><span>Bron</span><strong>${escapeHtml(place.sourceLabel)}</strong></li>
      ${extraFacts.map(([label, value]) => `<li><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></li>`).join("")}
    </ul>
    ${hasCoordinates ? `
      <div class="place-map-actions">
        <a href="${escapeHtml(appleMapsUrl)}" target="_blank" rel="noreferrer">Apple Maps <span>↗</span></a>
        <a href="${escapeHtml(googleMapsUrl)}" target="_blank" rel="noreferrer">Google Maps <span>↗</span></a>
      </div>
    ` : ""}
    <a class="button button-primary place-link" href="${escapeHtml(place.sourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(place.sourceAction || "Open de bron")} ↗</a>
    ${place.caution ? `<div class="place-caution"><strong>Praktisch:</strong> ${escapeHtml(place.caution)}</div>` : ""}
  `;
  panel.classList.add("is-open");
  panel.setAttribute("aria-hidden", "false");
  panel.querySelector(".place-panel-close").addEventListener("click", () => renderEmptyPanel());
  panel.querySelector(".place-photo")?.addEventListener("error", (event) => event.currentTarget.closest(".place-photo-wrap")?.remove());
  setFiltersOpen(false);
}

function formatDistance(distanceKm) {
  if (distanceKm < 1) return `${Math.max(50, Math.round(distanceKm * 1000 / 50) * 50)} m`;
  if (distanceKm < 10) return `${distanceKm.toFixed(1).replace(".", ",")} km`;
  return `${Math.round(distanceKm)} km`;
}

function candidateProviderLabel(provider) {
  return {
    curated: "Rollout-regiogids",
    denmark: "Ud i Naturen",
    osm: "OpenStreetMap",
    imported: "GPX-waypoint",
    vodf: "Vrienden op de Fiets",
    wtmg: "Welcome To My Garden",
  }[provider] || "Bronlocatie";
}

function rankedCandidates() {
  const anchor = userLocation || map.getCenter();
  const routeDistanceKm = Number(document.querySelector("#route-distance").value);
  const anchorRoute = nearestRoutePosition(anchor.lat, anchor.lng, 20);
  const useRouteProgress = Boolean(anchorRoute && routeFilterEnabled() && anchorRoute.distanceKm <= 20);

  const ranked = currentCandidates.flatMap((candidate) => {
    const directDistanceKm = distanceBetweenPointsKm(anchor, candidate);
    const routePosition = useRouteProgress ? nearestRoutePosition(candidate.lat, candidate.lng, routeDistanceKm + 2) : null;
    const routeDeltaKm = routePosition ? routePosition.progressKm - anchorRoute.progressKm : null;
    const withinHorizon = useRouteProgress
      ? routeDeltaKm >= -2 && routeDeltaKm <= candidateHorizonKm
      : directDistanceKm <= candidateHorizonKm;
    if (!withinHorizon) return [];

    const confidencePenalty = (3 - (candidate.place.confidence || 1)) * 4;
    const score = useRouteProgress
      ? Math.max(0, routeDeltaKm) + (routePosition.distanceKm * 2) + confidencePenalty + (routeDeltaKm < 0 ? 12 : 0)
      : directDistanceKm + confidencePenalty;
    return [{ ...candidate, directDistanceKm, routePosition, routeDeltaKm, score, useRouteProgress }];
  }).sort((a, b) => a.score - b.score);

  const providerCounts = new Map();
  return ranked.filter((candidate) => {
    const count = providerCounts.get(candidate.provider) || 0;
    if (count >= 3) return false;
    providerCounts.set(candidate.provider, count + 1);
    return true;
  }).slice(0, 9);
}

function candidateDistanceLabel(candidate) {
  if (!candidate.useRouteProgress) return `${formatDistance(candidate.directDistanceKm)} hemelsbreed`;
  const direction = candidate.routeDeltaKm < 0
    ? `${formatDistance(Math.abs(candidate.routeDeltaKm))} terug langs route`
    : `${formatDistance(candidate.routeDeltaKm)} verder op route`;
  return candidate.routePosition.distanceKm < 0.25
    ? direction
    : `${direction} · ${formatDistance(candidate.routePosition.distanceKm)} van lijn`;
}

function updateCandidatePanel() {
  if (!candidatePanelOpen) return;
  const list = document.querySelector("#candidate-list");
  const intro = document.querySelector("#candidate-intro");
  const candidates = rankedCandidates();
  const anchorText = userLocation ? "je huidige positie" : "het midden van de kaart";
  const routeText = routeFilterEnabled() && nearestRoutePosition((userLocation || map.getCenter()).lat, (userLocation || map.getCenter()).lng, 20)?.distanceKm <= 20
    ? "verderop langs je GPX-route"
    : "binnen hemelsbrede afstand";
  intro.textContent = `${locationMessage ? `${locationMessage} ` : ""}Gerangschikt vanaf ${anchorText}, ${routeText}. Alleen je actieve filters tellen mee.`;
  updateLocationNote();

  if (!candidates.length) {
    displayedCandidates = [];
    list.innerHTML = `
      <div class="candidate-empty">
        <strong>Geen passende plekken binnen ${candidateHorizonKm} km.</strong>
        <span>Vergroot “nog fietsen”, verruim je filters of zoek openbare OSM-plekken in dit kaartbeeld.</span>
      </div>`;
    return;
  }

  displayedCandidates = candidates;
  list.innerHTML = candidates.map((candidate, index) => `
    <button class="candidate-item" type="button" data-candidate-index="${index}">
      <span class="candidate-number">${index + 1}</span>
      <span class="candidate-copy">
        <strong>${escapeHtml(candidate.place.name)}</strong>
        <small>${escapeHtml(candidateDistanceLabel(candidate))}</small>
        <span><i class="candidate-type marker-${escapeHtml(candidate.place.type)}"></i>${escapeHtml(sleepTypes[candidate.place.type]?.label || "Slaapplek")} · ${escapeHtml(candidateProviderLabel(candidate.provider))}</span>
      </span>
      <span class="candidate-arrow">→</span>
    </button>
  `).join("");
}

function openCandidatePanel() {
  candidatePanelOpen = true;
  const panel = document.querySelector("#candidate-panel");
  document.querySelector("#place-panel").classList.remove("is-open");
  document.querySelector("#place-panel").setAttribute("aria-hidden", "true");
  setFiltersOpen(false);
  panel.classList.add("is-open");
  panel.setAttribute("aria-hidden", "false");
  updateCandidatePanel();
}

function closeCandidatePanel() {
  candidatePanelOpen = false;
  const panel = document.querySelector("#candidate-panel");
  panel?.classList.remove("is-open");
  panel?.setAttribute("aria-hidden", "true");
}

function drawUserLocation() {
  locationLayer.clearLayers();
  if (!userLocation) return;
  L.circle([userLocation.lat, userLocation.lng], {
    radius: Math.max(20, userLocation.accuracy || 0),
    color: "#2f6f9f",
    weight: 1,
    fillColor: "#5fa7d8",
    fillOpacity: 0.14,
    interactive: false,
  }).addTo(locationLayer);
  L.circleMarker([userLocation.lat, userLocation.lng], {
    radius: 8,
    color: "#ffffff",
    weight: 3,
    fillColor: "#2f6f9f",
    fillOpacity: 1,
  }).bindTooltip("Mijn positie").addTo(locationLayer);
}

function setLocationControlsLoading(isLoading) {
  const locateButton = document.querySelector("#locate-me");
  const panelButton = document.querySelector("#candidate-use-location");
  locateButton.classList.toggle("is-loading", isLoading);
  locateButton.disabled = isLoading;
  panelButton.disabled = isLoading;
  locateButton.setAttribute("aria-label", isLoading ? "Positie bepalen" : "Ga naar mijn huidige positie");
}

function showLocationStatus(message, tone = "neutral", { sticky = false } = {}) {
  const status = document.querySelector("#location-status");
  window.clearTimeout(showLocationStatus.hideTimer);
  if (!message) {
    status.hidden = true;
    return;
  }
  status.textContent = message;
  status.className = `location-status is-${tone}`;
  status.hidden = false;
  if (!sticky) {
    showLocationStatus.hideTimer = window.setTimeout(() => {
      status.hidden = true;
    }, 7000);
  }
}

function updateLocationNote() {
  const note = document.querySelector("#candidate-location-note");
  if (!note) return;
  if (userLocation) {
    note.textContent = `Positie actief, nauwkeurigheid ongeveer ${formatDistance((userLocation.accuracy || 0) / 1000)}.`;
  } else if (locationMessage) {
    note.textContent = locationMessage;
  } else {
    note.textContent = "Zonder GPS gebruikt Rollout het midden van de kaart.";
  }
}

function geolocationUnavailableMessage() {
  if (!("geolocation" in navigator)) return "Deze browser ondersteunt geen locatiebepaling.";
  if (!window.isSecureContext) return "GPS werkt op je telefoon alleen via HTTPS. Open straks de GitHub Pages-link; deze lokale netwerklink gebruikt kaartmidden.";
  return "";
}

function requestUserLocation({ openCandidates = false, focusMap = true } = {}) {
  if (openCandidates) openCandidatePanel();
  const unavailableMessage = geolocationUnavailableMessage();
  if (unavailableMessage) {
    locationMessage = unavailableMessage;
    showLocationStatus(unavailableMessage, "warning", { sticky: true });
    updateLocationNote();
    updateCandidatePanel();
    return;
  }

  locationMessage = "Je positie bepalen...";
  setLocationControlsLoading(true);
  showLocationStatus("Je positie bepalen...", "neutral");
  updateLocationNote();
  if (openCandidates) updateCandidatePanel();

  navigator.geolocation.getCurrentPosition((position) => {
    userLocation = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      accuracy: position.coords.accuracy,
    };
    locationMessage = "Je huidige positie is actief.";
    drawUserLocation();
    if (focusMap) map.flyTo([userLocation.lat, userLocation.lng], Math.max(map.getZoom(), 13));
    setLocationControlsLoading(false);
    document.querySelector("#locate-me").classList.add("has-location");
    showLocationStatus("Huidige positie actief. Plekken worden nu vanaf jou gerangschikt.", "success");
    updateLocationNote();
    if (openCandidates) updateCandidatePanel();
  }, (error) => {
    setLocationControlsLoading(false);
    const explanation = error.code === error.PERMISSION_DENIED
      ? "Locatietoegang is geweigerd. Zet locatie aan voor deze site of gebruik het midden van de kaart."
      : "Je positie kon niet worden bepaald. Rollout gebruikt nu het midden van de kaart.";
    locationMessage = explanation;
    showLocationStatus(explanation, "warning", { sticky: true });
    updateLocationNote();
    updateCandidatePanel();
  }, {
    enableHighAccuracy: true,
    timeout: 12000,
    maximumAge: 60000,
  });
}

function setFiltersOpen(open) {
  const sidebar = document.querySelector("#map-sidebar");
  const toggle = document.querySelector("#toggle-filters");
  const scrim = document.querySelector("#map-overlay-scrim");
  sidebar.classList.toggle("is-open", open);
  sidebar.setAttribute("aria-hidden", String(!open));
  toggle.setAttribute("aria-expanded", String(open));
  scrim.hidden = !open;
}

function currentFilters() {
  return {
    country: document.querySelector("#country-filter").value,
    confidence: Number(document.querySelector("#confidence-filter").value),
    types: new Set([...document.querySelectorAll('fieldset:not(.network-filter):not(.route-filter) .check-row input:checked')].map((input) => input.value)),
    networks: new Set([...document.querySelectorAll('[data-network]:checked')].map((input) => input.dataset.network)),
  };
}

const countryNames = {
  NL: "Nederland", BE: "België", LU: "Luxemburg", DE: "Duitsland",
  DK: "Denemarken", SE: "Zweden", NO: "Noorwegen", FR: "Frankrijk",
  CH: "Zwitserland", AT: "Oostenrijk", IT: "Italië",
};

function hostPinIcon(provider, label) {
  return L.divIcon({
    className: "",
    html: `<div class="host-map-pin pin-${provider}"><span>${escapeHtml(label)}</span></div>`,
    iconSize: [30, 38],
    iconAnchor: [15, 36],
  });
}

function addMarkers(layer, markers) {
  if (layer.addLayers) layer.addLayers(markers);
  else markers.forEach((marker) => marker.addTo(layer));
}

function vodfPlace(pin) {
  const bedCount = pin.singleBeds + (pin.doubleBeds * 2);
  const extras = [
    ["Coördinaat", `${pin.lat.toFixed(5)}, ${pin.lng.toFixed(5)}`],
    ["Type", pin.stayType],
    ["Kamers", pin.rooms || "Niet vermeld"],
    ["Bedplaatsen", bedCount || "Niet vermeld"],
  ];
  if (pin.wheelchair) extras.push(["Rolstoel", "Toegankelijk gemeld"]);
  if (pin.luggage) extras.push(["Bagagevervoer", "Beschikbaar gemeld"]);
  if (pin.groups) extras.push(["Groepen", "Welkom gemeld"]);
  if (pin.pets) extras.push(["Huisdieren", "Welkom gemeld"]);
  if (pin.laundry) extras.push(["Wasruimte", "Beschikbaar gemeld"]);

  return {
    name: "Vrienden op de Fiets-hostpin",
    lat: pin.lat,
    lng: pin.lng,
    location: `${countryNames[pin.country]} · openbare kaartpositie`,
    type: "host",
    confidence: 2,
    sourceLabel: "Openbare Vrienden op de Fiets-kaart",
    sourceUrl: publicData.vodf?.source || "https://www.vriendenopdefiets.nl/zoek-een-logeeradres",
    sourceAction: "Open de officiële zoekkaart",
    decision: "Dit is een afzonderlijke pin uit de openbare kaartfeed.",
    description: "Rollout gebruikt dezelfde gepubliceerde kaartpositie, zonder host-ID, naam of adresvelden. Log bij de bron in voor de host en reservering.",
    stay: "Alleen na reservering bij een host",
    cost: "Volgens de platformvoorwaarden",
    water: "Afhankelijk van de host",
    extraFacts: extras,
    caution: "Log in bij Vrienden op de Fiets om binnen dit gebied de actuele hosts en beschikbaarheid te bekijken.",
  };
}

function wtmgPlace(pin) {
  const extras = [
    ["Coördinaat", `${pin.lat.toFixed(5)}, ${pin.lng.toFixed(5)}`],
    ["Capaciteit", pin.capacity || "Niet vermeld"],
  ];
  if (pin.tent) extras.push(["Tent", "Plek gemeld"]);
  if (pin.toilet) extras.push(["Toilet", "Aanwezig gemeld"]);
  if (pin.shower) extras.push(["Douche", "Aanwezig gemeld"]);
  if (pin.electricity) extras.push(["Stroom", "Aanwezig gemeld"]);
  if (pin.campfire) extras.push(["Kampvuur", "Mogelijkheid gemeld"]);

  return {
    name: "Welcome To My Garden-tuinpin",
    lat: pin.lat,
    lng: pin.lng,
    location: `${countryNames[pin.country]} · openbare kaartpositie`,
    type: "host",
    confidence: 2,
    photo: pin.photo,
    photoLabel: "Welcome To My Garden",
    sourceLabel: "Openbare Welcome To My Garden-kaart",
    sourceUrl: publicData.wtmg?.source || "https://welcometomygarden.org/nl/explore",
    sourceAction: "Open de officiële tuinzoeker",
    decision: "Dit is een afzonderlijke tuinpin van de openbare explore-kaart.",
    description: "De kaartpositie, basisvoorzieningen en getoonde foto komen uit de publieke tuinlaag. Profieltekst, hostgegevens en contactgegevens blijven bij Welcome To My Garden.",
    stay: "Alleen na aanvraag en bevestiging",
    cost: "Overnachting gratis; controleer lidmaatschapsvoorwaarden",
    water: pin.drinkingWater ? "Drinkwater gemeld" : pin.water ? "Water gemeld, drinkbaarheid onbekend" : "Niet vermeld",
    extraFacts: extras,
    caution: "Open de officiële kaart en neem daar contact op. Een kaartpin is nog geen bevestigde overnachting.",
  };
}

function renderHospitalityPins() {
  const filters = currentFilters();
  vodfLayer.clearLayers();
  wtmgLayer.clearLayers();
  visiblePlaceCounts.hospitality = 0;
  if (!filters.types.has("host") || filters.confidence > 2) return;

  if (filters.networks.has("vodf")) {
    const markers = vodfPins
      .filter((pin) => filters.country === "all" || pin.country === filters.country)
      .filter((pin) => isWithinRoute(pin.lat, pin.lng))
      .map((pin) => {
        const place = vodfPlace(pin);
        addCandidate(pin.lat, pin.lng, place, "vodf");
        return L.marker([pin.lat, pin.lng], {
          icon: hostPinIcon("vodf", "V"),
          title: "Vrienden op de Fiets-hostpin",
        }).on("click", () => renderPlace(place));
      });
    addMarkers(vodfLayer, markers);
    visiblePlaceCounts.hospitality += markers.length;
  }

  if (filters.networks.has("wtmg")) {
    const markers = wtmgPins
      .filter((pin) => filters.country === "all" || pin.country === filters.country)
      .filter((pin) => isWithinRoute(pin.lat, pin.lng))
      .map((pin) => {
        const place = wtmgPlace(pin);
        addCandidate(pin.lat, pin.lng, place, "wtmg");
        return L.marker([pin.lat, pin.lng], {
          icon: hostPinIcon("wtmg", "G"),
          title: "Welcome To My Garden-tuinpin",
        }).on("click", () => renderPlace(place));
      });
    addMarkers(wtmgLayer, markers);
    visiblePlaceCounts.hospitality += markers.length;
  }
}

function denmarkPlace(sourcePlace) {
  const capacity = sourcePlace.capacity ? `${sourcePlace.capacity} plaatsen gemeld` : "Niet vermeld";
  const isFreeForest = sourcePlace.category === "Frit teltningsområde";
  return {
    name: sourcePlace.name,
    lat: sourcePlace.lat,
    lng: sourcePlace.lng,
    location: `${sourcePlace.region} · Denemarken`,
    type: sourcePlace.type,
    confidence: 3,
    photo: sourcePlace.image,
    photoLabel: "Ud i Naturen",
    sourceLabel: "Ud i Naturen",
    sourceUrl: sourcePlace.sourceUrl,
    sourceAction: "Open deze officiële locatie",
    decision: sourcePlace.decision,
    description: `${sourcePlace.rules} Officiële locatiebeschrijving (Deens): ${sourcePlace.description}`,
    stay: sourcePlace.stay,
    cost: sourcePlace.cost,
    water: sourcePlace.water,
    extraFacts: [
      ["Boeken", sourcePlace.bookingStatus],
      ["Capaciteit", capacity],
      ["Toilet", sourcePlace.toilet],
      ["Toegankelijk", sourcePlace.accessible],
      ["Beheerder", sourcePlace.manager],
    ],
    caution: sourcePlace.localRestriction || (isFreeForest
      ? "Deze specifieke marker staat in de officiële categorie Frit teltningsområde. Je hoeft dus niet meer uit te zoeken of dit bos aan de regeling deelneemt; houd wel lokale borden en tijdelijke brandregels aan."
      : "Deze specifieke marker staat als overnachtingsplek in Ud i Naturen. Gebruik de boekingsstatus en officiële locatiebeschrijving hierboven voor aankomst en gebruik."),
  };
}

function renderDenmarkPlaces() {
  const filters = currentFilters();
  denmarkLayer.clearLayers();
  visiblePlaceCounts.denmark = 0;
  if (filters.country !== "all" && filters.country !== "DK") return;
  if (filters.confidence > 3) return;

  const markers = denmarkPlaces
    .filter((place) => filters.types.has(place.type))
    .filter((place) => isWithinRoute(place.lat, place.lng))
    .map((sourcePlace) => {
      const place = denmarkPlace(sourcePlace);
      addCandidate(sourcePlace.lat, sourcePlace.lng, place, "denmark");
      return L.marker([sourcePlace.lat, sourcePlace.lng], {
        icon: markerIcon(sourcePlace.type),
        title: `${sourcePlace.name} · ${sourcePlace.decision}`,
      }).on("click", () => renderPlace(place));
    });

  denmarkLayer.addLayers ? denmarkLayer.addLayers(markers) : markers.forEach((marker) => marker.addTo(denmarkLayer));
  visiblePlaceCounts.denmark = markers.length;
}

function renderCuratedMarkers() {
  const filters = currentFilters();
  curatedLayer.clearLayers();
  markerIndex.clear();
  visiblePlaceCounts.curated = 0;

  places
    .filter((place) => filters.country === "all" || place.country === filters.country)
    .filter((place) => filters.types.has(place.type))
    .filter((place) => place.confidence >= filters.confidence)
    .filter((place) => isWithinRoute(place.lat, place.lng))
    .forEach((place) => {
      const displayPlace = { ...place, approximate: true };
      addCandidate(place.lat, place.lng, displayPlace, "curated");
      const marker = L.marker([place.lat, place.lng], { icon: markerIcon(place.type), title: place.name })
        .on("click", () => renderPlace(displayPlace))
        .addTo(curatedLayer);
      markerIndex.set(place.id, marker);
      visiblePlaceCounts.curated += 1;
    });
}

function renderCountries() {
  document.querySelector("#country-grid").innerHTML = countries.map((country) => `
    <article class="country-card">
      <div class="country-topline">
        <span class="country-flag" aria-hidden="true">${country.flag}</span>
        <span class="status-pill ${country.statusClass}">${escapeHtml(country.status)}</span>
      </div>
      <h3>${escapeHtml(country.name)}</h3>
      <p class="country-summary">${escapeHtml(country.summary)}</p>
      <ul class="country-rules">${country.rules.map((rule) => `<li>${escapeHtml(rule)}</li>`).join("")}</ul>
      <a class="country-source" href="${escapeHtml(country.url)}" target="_blank" rel="noreferrer">${escapeHtml(country.source)} ↗</a>
    </article>
  `).join("");
}

function renderSources() {
  document.querySelector("#source-grid").innerHTML = sources.map((source) => `
    <a class="source-card" href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">
      <span class="source-icon">${escapeHtml(source.icon)}</span>
      <h3>${escapeHtml(source.name)}</h3>
      <p>${escapeHtml(source.description)}</p>
      <span class="source-meta"><span>${escapeHtml(source.meta)}</span><span>↗</span></span>
    </a>
  `).join("");
}

function osmType(tags) {
  if (tags.tourism === "wilderness_hut" || tags.amenity === "shelter") return "hut";
  return "designated";
}

function osmDescription(tags, type) {
  if (type === "hut") return "Openbaar in OpenStreetMap opgenomen shelter of hut. Beschikbaarheid, toegang en overnachten zijn niet automatisch gegarandeerd.";
  return "OpenStreetMap-plek die expliciet als gratis of eenvoudig/backcountry is gemarkeerd. Controleer de actuele terreinregels vóór gebruik.";
}

function osmPhoto(tags) {
  if (/^https?:\/\//i.test(tags.image || "")) return tags.image;
  const commonsFile = String(tags.wikimedia_commons || "").replace(/^File:/i, "");
  if (!commonsFile) return "";
  return `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(commonsFile)}?width=900`;
}

function renderOsmPlaces() {
  osmLayer.clearLayers();
  visiblePlaceCounts.osm = 0;
  osmPlaces
    .filter((item) => isWithinRoute(item.lat, item.lng))
    .forEach((item) => {
      addCandidate(item.lat, item.lng, item.place, "osm");
      L.marker([item.lat, item.lng], { icon: markerIcon(item.place.type), title: item.place.name })
        .on("click", () => renderPlace(item.place))
        .addTo(osmLayer);
      visiblePlaceCounts.osm += 1;
    });
}

async function loadOsmPlaces() {
  const status = document.querySelector("#osm-status");
  if (map.getZoom() < 7) {
    status.textContent = "Zoom verder in: niveau 7 of dichterbij is nodig om de openbare bron netjes te bevragen.";
    return;
  }

  const bounds = map.getBounds();
  const bbox = [bounds.getSouth(), bounds.getWest(), bounds.getNorth(), bounds.getEast()].join(",");
  const query = `[out:json][timeout:25];(
    nwr["tourism"="camp_site"]["fee"="no"](${bbox});
    nwr["tourism"="camp_site"]["backcountry"="yes"](${bbox});
    nwr["tourism"="camp_pitch"]["fee"="no"](${bbox});
    nwr["tourism"="wilderness_hut"](${bbox});
    nwr["amenity"="shelter"]["shelter_type"~"basic_hut|lean_to|weather_shelter|picnic_shelter"](${bbox});
  );out center tags 120;`;

  status.textContent = "Openbare kaartdata ophalen…";
  document.querySelector("#load-osm").disabled = true;
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 35000);

  try {
    const response = await fetch("https://overpass-api.de/api/interpreter", {
      method: "POST",
      body: new URLSearchParams({ data: query }),
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`Overpass gaf status ${response.status}`);
    const data = await response.json();
    osmPlaces = data.elements.flatMap((element) => {
      const lat = element.lat ?? element.center?.lat;
      const lng = element.lon ?? element.center?.lon;
      if (!lat || !lng) return [];
      const tags = element.tags || {};
      const type = osmType(tags);
      const name = tags.name || (type === "hut" ? "Naamloze shelter / hut" : "Naamloze gratis kampeerplek");
      const place = {
        name,
        lat,
        lng,
        location: "Openbare OSM-locatie in huidig kaartbeeld",
        type,
        confidence: tags.fee === "no" || tags.tourism === "wilderness_hut" ? 2 : 1,
        photo: osmPhoto(tags),
        photoLabel: tags.image ? "OpenStreetMap-bronverwijzing" : "Wikimedia Commons",
        sourceLabel: "OpenStreetMap",
        sourceUrl: `https://www.openstreetmap.org/${element.type}/${element.id}`,
        description: osmDescription(tags, type),
        stay: tags.maxstay || "Niet vermeld",
        cost: tags.fee === "no" ? "Als gratis gemarkeerd" : "Onbekend",
        water: tags.drinking_water === "yes" ? "Drinkwater gemarkeerd" : "Niet vermeld",
        caution: "OpenStreetMap is gemeenschapsdata en kan verouderd of onvolledig zijn. Bekijk borden en lokale regels ter plaatse.",
      };
      return [{ lat, lng, place }];
    });
    renderOsmPlaces();
    updateRouteStatus();

    status.textContent = osmPlaces.length ? `${osmPlaces.length} openbare plekken gevonden in dit kaartbeeld.` : "Geen geschikte openbare plekken gevonden. Verschuif de kaart of zoom iets uit.";
  } catch (error) {
    console.error(error);
    status.textContent = error.name === "AbortError"
      ? "De openbare kaartserver deed er te lang over. Zoom verder in en probeer opnieuw."
      : "De openbare kaartserver reageert nu niet. Probeer het over een minuut opnieuw.";
  } finally {
    window.clearTimeout(timeout);
    document.querySelector("#load-osm").disabled = false;
  }
}

function xmlText(element, tagName) {
  const match = [...element.getElementsByTagNameNS("*", tagName)][0];
  return match?.textContent?.trim() || "";
}

function coordinatesFromElements(elements) {
  return elements.flatMap((element) => {
    const lat = Number(element.getAttribute("lat"));
    const lng = Number(element.getAttribute("lon"));
    return Number.isFinite(lat) && Number.isFinite(lng) ? [{ lat, lng }] : [];
  });
}

function renderImportedWaypoints() {
  importedLayer.clearLayers();
  visiblePlaceCounts.imported = 0;
  importedWaypoints
    .filter((item) => isWithinRoute(item.lat, item.lng))
    .forEach((item) => {
      addCandidate(item.lat, item.lng, item.place, "imported");
      L.marker([item.lat, item.lng], { icon: markerIcon("hut"), title: item.place.name })
        .on("click", () => renderPlace(item.place))
        .addTo(importedLayer);
      visiblePlaceCounts.imported += 1;
    });
}

function updateRouteStatus() {
  const status = document.querySelector("#route-status");
  const distanceKm = Number(document.querySelector("#route-distance").value);
  document.querySelector("#route-distance-output").textContent = `${distanceKm} km`;
  document.querySelectorAll("[data-route-distance]").forEach((button) => {
    button.classList.toggle("is-active", Number(button.dataset.routeDistance) === distanceKm);
  });

  if (!routeState.segments.length) {
    status.textContent = "Importeer een GPX-track uit bijvoorbeeld Komoot, EuroVelo of cycle.travel.";
    return;
  }

  const visibleTotal = Object.values(visiblePlaceCounts).reduce((total, count) => total + count, 0);
  const routeLength = Math.round(routeState.lengthKm).toLocaleString("nl-NL");
  const savedLabel = routeState.saved ? " Route lokaal bewaard." : "";
  status.textContent = routeFilterEnabled()
    ? `${visibleTotal.toLocaleString("nl-NL")} plekken binnen ${distanceKm} km van ${routeState.name} (${routeLength} km).${savedLabel}`
    : `${routeState.name} (${routeLength} km) staat op de kaart; de afstandsfilter is uitgeschakeld.${savedLabel}`;
}

function refreshMapPlaces() {
  currentCandidates = [];
  renderCuratedMarkers();
  renderHospitalityPins();
  renderDenmarkPlaces();
  renderOsmPlaces();
  renderImportedWaypoints();
  updateRouteStatus();
  updateCandidatePanel();
}

function setRouteControls(enabled) {
  document.querySelector("#route-distance").disabled = !enabled;
  document.querySelector("#route-filter-active").disabled = !enabled;
  document.querySelector("#clear-route").disabled = !enabled;
  document.querySelectorAll("[data-route-distance]").forEach((button) => {
    button.disabled = !enabled;
  });
}

function drawRoute() {
  routeLayer.clearLayers();
  if (!routeState.lines.length) return;
  const latLngLines = routeState.lines.map((line) => line.map((point) => [point.lat, point.lng]));
  L.polyline(latLngLines, { color: "#123127", weight: 9, opacity: 0.5, interactive: false }).addTo(routeLayer);
  L.polyline(latLngLines, { color: "#d6ec91", weight: 4, opacity: 0.96, interactive: false }).addTo(routeLayer);
}

function persistRoute() {
  if (!routeState.lines.length) return false;
  try {
    localStorage.setItem("rollout-saved-route-v1", JSON.stringify({
      name: routeState.name,
      pointCount: routeState.pointCount,
      lengthKm: routeState.lengthKm,
      lines: routeState.lines,
      waypoints: importedWaypoints.slice(0, 500),
    }));
    routeState.saved = true;
    return true;
  } catch (error) {
    routeState.saved = false;
    console.warn("Route kon niet lokaal worden bewaard.", error);
    return false;
  }
}

function restoreRoute() {
  try {
    const saved = JSON.parse(localStorage.getItem("rollout-saved-route-v1") || "null");
    const lines = saved?.lines?.filter((line) => Array.isArray(line) && line.length > 1);
    if (!lines?.length) return false;
    const validLines = lines.map((line) => line.filter((point) => Number.isFinite(point.lat) && Number.isFinite(point.lng))).filter((line) => line.length > 1);
    if (!validLines.length) return false;
    routeState = {
      name: saved.name || "Bewaarde route",
      pointCount: Number(saved.pointCount) || validLines.flat().length,
      lengthKm: Number(saved.lengthKm) || routeLengthKm(validLines),
      saved: true,
      lines: validLines,
      segments: routeSegments(validLines),
      segmentGrid: new Map(),
    };
    routeState.segmentGrid = buildRouteSegmentGrid(routeState.segments);
    importedWaypoints = Array.isArray(saved.waypoints) ? saved.waypoints : [];
    drawRoute();
    setRouteControls(true);
    document.querySelector("#route-filter-active").checked = true;
    const allPoints = validLines.flat();
    map.fitBounds(L.latLngBounds(allPoints.map((point) => [point.lat, point.lng])), { padding: [34, 34], maxZoom: 11 });
    return true;
  } catch (error) {
    console.warn("Bewaarde route kon niet worden hersteld.", error);
    localStorage.removeItem("rollout-saved-route-v1");
    return false;
  }
}

function clearRoute() {
  routeLayer.clearLayers();
  importedLayer.clearLayers();
  importedWaypoints = [];
  routeState = { name: "", pointCount: 0, lengthKm: 0, saved: false, lines: [], segments: [], segmentGrid: new Map() };
  localStorage.removeItem("rollout-saved-route-v1");
  setRouteControls(false);
  refreshMapPlaces();
}

function importGpx(file) {
  const status = document.querySelector("#route-status");
  const reader = new FileReader();
  status.textContent = `${file.name} lezen…`;

  reader.onerror = () => {
    status.textContent = "Dit GPX-bestand kon niet worden gelezen.";
  };

  reader.onload = () => {
    const documentXml = new DOMParser().parseFromString(reader.result, "application/xml");
    if (documentXml.querySelector("parsererror")) {
      status.textContent = "Dit bestand bevat geen geldige GPX-XML.";
      return;
    }

    const trackLines = [...documentXml.getElementsByTagNameNS("*", "trkseg")]
      .map((segment) => coordinatesFromElements([...segment.getElementsByTagNameNS("*", "trkpt")]))
      .filter((line) => line.length > 1);
    const routeLines = [...documentXml.getElementsByTagNameNS("*", "rte")]
      .map((route) => coordinatesFromElements([...route.getElementsByTagNameNS("*", "rtept")]))
      .filter((line) => line.length > 1);
    const rawLines = trackLines.length ? trackLines : routeLines;
    const waypointElements = [...documentXml.getElementsByTagNameNS("*", "wpt")];

    if (!rawLines.length && !waypointElements.length) {
      status.textContent = "Geen track, route of waypoint in dit GPX-bestand gevonden.";
      return;
    }

    routeLayer.clearLayers();
    importedWaypoints = waypointElements.slice(0, 5000).flatMap((waypoint, index) => {
      const lat = Number(waypoint.getAttribute("lat"));
      const lng = Number(waypoint.getAttribute("lon"));
      if (!Number.isFinite(lat) || !Number.isFinite(lng)) return [];

      const name = xmlText(waypoint, "name") || `GPX-plek ${index + 1}`;
      const description = xmlText(waypoint, "desc") || xmlText(waypoint, "cmt") || "Geïmporteerd waypoint zonder aanvullende beschrijving.";
      const linkElement = [...waypoint.getElementsByTagNameNS("*", "link")][0];
      const link = linkElement?.getAttribute("href");
      const sourceUrl = link && /^https?:\/\//i.test(link) ? link : "https://www.openstreetmap.org/";
      const place = {
        name,
        lat,
        lng,
        location: `${lat.toFixed(5)}, ${lng.toFixed(5)} · geïmporteerd uit ${file.name}`,
        type: "hut",
        confidence: 1,
        sourceLabel: `GPX: ${file.name}`,
        sourceUrl,
        description,
        stay: "Controleer bij bron",
        cost: "Niet uit GPX af te leiden",
        water: "Niet uit GPX af te leiden",
        caution: "Een GPX-bestand kan verouderd zijn. Controleer prijs, reservering, toegang en actuele staat bij de oorspronkelijke bron of lokale beheerder.",
      };
      return [{ lat, lng, place }];
    });

    if (rawLines.length) {
      const allRawPoints = rawLines.flat();
      const preparedLines = prepareRouteLines(rawLines);
      const metadata = [...documentXml.getElementsByTagNameNS("*", "metadata")][0];
      const track = [...documentXml.getElementsByTagNameNS("*", "trk")][0];
      const route = [...documentXml.getElementsByTagNameNS("*", "rte")][0];
      const routeName = xmlText(metadata || documentXml, "name")
        || xmlText(track || documentXml, "name")
        || xmlText(route || documentXml, "name")
        || file.name.replace(/\.gpx$/i, "");
      routeState = {
        name: routeName,
        pointCount: allRawPoints.length,
        lengthKm: routeLengthKm(rawLines),
        saved: false,
        lines: preparedLines,
        segments: routeSegments(preparedLines),
        segmentGrid: new Map(),
      };
      routeState.segmentGrid = buildRouteSegmentGrid(routeState.segments);

      drawRoute();
      setRouteControls(true);
      document.querySelector("#route-filter-active").checked = true;
      document.querySelector("#country-filter").value = "all";
      persistRoute();
      map.fitBounds(L.latLngBounds(allRawPoints.map((point) => [point.lat, point.lng])), { padding: [34, 34], maxZoom: 11 });
    } else {
      routeState = { name: "", pointCount: 0, lengthKm: 0, saved: false, lines: [], segments: [], segmentGrid: new Map() };
      setRouteControls(false);
    }

    refreshMapPlaces();
    if (!rawLines.length) {
      status.textContent = `${importedWaypoints.length} losse GPX-waypoints geladen; dit bestand bevat geen route of track.`;
      if (importedWaypoints.length) map.fitBounds(importedWaypoints.map((item) => [item.lat, item.lng]), { padding: [30, 30], maxZoom: 11 });
    }
  };

  reader.readAsText(file);
}

document.querySelectorAll("#country-filter, #confidence-filter, .check-row input:not(#route-filter-active)").forEach((control) => {
  control.addEventListener("change", refreshMapPlaces);
});

document.querySelector("#country-filter").addEventListener("change", (event) => {
  const country = countries.find((item) => item.code === event.target.value);
  const centers = {
    NL: [52.2, 5.4, 7], BE: [50.7, 4.65, 7], LU: [49.8, 6.1, 9],
    DE: [51.2, 10.4, 6], DK: [56.1, 9.4, 7], SE: [61.0, 15.2, 5],
    NO: [62.2, 9.2, 5], FR: [46.6, 2.5, 6], CH: [46.8, 8.2, 7],
    AT: [47.6, 14.1, 7], IT: [43.2, 12.0, 6],
  };
  renderEmptyPanel(
    country ? `Verken ${country.name}` : "Kies een plek",
    country ? "Klik op een cluster om in te zoomen; vanaf zoomniveau 13 verschijnen de afzonderlijke bronpins." : "Klik op een marker voor regels, bron en praktische aandachtspunten.",
  );
  if (country) map.flyTo(centers[country.code].slice(0, 2), centers[country.code][2]);
});

document.querySelector("#load-osm").addEventListener("click", loadOsmPlaces);
document.querySelector("#gpx-file").addEventListener("change", (event) => {
  const [file] = event.target.files;
  if (file) importGpx(file);
  event.target.value = "";
});
document.querySelector("#quick-route").addEventListener("click", () => document.querySelector("#gpx-file").click());
document.querySelector("#route-distance").addEventListener("input", updateRouteStatus);
document.querySelector("#route-distance").addEventListener("change", (event) => {
  localStorage.setItem("rollout-route-distance", event.target.value);
  refreshMapPlaces();
});
document.querySelectorAll("[data-route-distance]").forEach((button) => {
  button.addEventListener("click", () => {
    const distance = button.dataset.routeDistance;
    document.querySelector("#route-distance").value = distance;
    localStorage.setItem("rollout-route-distance", distance);
    refreshMapPlaces();
  });
});
document.querySelector("#route-filter-active").addEventListener("change", refreshMapPlaces);
document.querySelector("#clear-route").addEventListener("click", clearRoute);
document.querySelector("#locate-me").addEventListener("click", () => {
  if (userLocation) map.flyTo([userLocation.lat, userLocation.lng], Math.max(map.getZoom(), 13));
  else requestUserLocation({ focusMap: true });
});
document.querySelector("#show-candidates").addEventListener("click", () => {
  if (userLocation) openCandidatePanel();
  else requestUserLocation({ openCandidates: true, focusMap: false });
});
document.querySelector("#candidate-use-location").addEventListener("click", () => {
  requestUserLocation({ openCandidates: true, focusMap: true });
});
document.querySelector("#close-candidates").addEventListener("click", closeCandidatePanel);
document.querySelectorAll("[data-horizon]").forEach((button) => {
  button.addEventListener("click", () => {
    candidateHorizonKm = Number(button.dataset.horizon);
    document.querySelectorAll("[data-horizon]").forEach((item) => item.classList.toggle("is-active", item === button));
    updateCandidatePanel();
  });
});
document.querySelector("#candidate-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-candidate-index]");
  if (!button) return;
  const candidate = displayedCandidates[Number(button.dataset.candidateIndex)];
  if (!candidate) return;
  map.flyTo([candidate.lat, candidate.lng], Math.max(map.getZoom(), 14));
  renderPlace(candidate.place);
});

document.querySelector("#toggle-filters").addEventListener("click", () => {
  const isOpen = document.querySelector("#map-sidebar").classList.contains("is-open");
  setFiltersOpen(!isOpen);
});
document.querySelector("#close-filters").addEventListener("click", () => setFiltersOpen(false));
document.querySelector("#map-overlay-scrim").addEventListener("click", () => setFiltersOpen(false));
map.on("moveend", () => {
  if (candidatePanelOpen && !userLocation) updateCandidatePanel();
});
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  setFiltersOpen(false);
  closeCandidatePanel();
  renderEmptyPanel();
});

const savedRouteDistance = Number(localStorage.getItem("rollout-route-distance"));
if (savedRouteDistance >= 1 && savedRouteDistance <= 50) {
  document.querySelector("#route-distance").value = savedRouteDistance;
}

restoreRoute();
refreshMapPlaces();
function openRouteImportPanelFromLink() {
  const sidebar = document.querySelector("#map-sidebar");
  const mapShell = document.querySelector(".map-shell");
  sidebar.classList.add("no-transition");
  setFiltersOpen(true);
  const routeImport = document.querySelector("#route-import");
  routeImport.classList.add("is-highlighted");
  const positionRouteImport = () => {
    mapShell.scrollTop = 0;
    sidebar.scrollTop = Math.max(0, routeImport.offsetTop - 18);
  };
  history.replaceState(null, "", window.location.pathname);
  positionRouteImport();
  requestAnimationFrame(positionRouteImport);
  window.setTimeout(positionRouteImport, 120);
  window.setTimeout(positionRouteImport, 500);
  window.setTimeout(positionRouteImport, 1000);
  window.setTimeout(() => sidebar.classList.remove("no-transition"), 350);
  window.setTimeout(() => routeImport.classList.remove("is-highlighted"), 2200);
}

const wantsRouteImport = new URLSearchParams(window.location.search).get("route") === "import" || window.location.hash === "#route-import";
if (wantsRouteImport) openRouteImportPanelFromLink();
window.addEventListener("hashchange", () => {
  if (window.location.hash === "#route-import") openRouteImportPanelFromLink();
});
if (document.querySelector("#country-grid")) renderCountries();
if (document.querySelector("#source-grid")) renderSources();

window.addEventListener("load", () => {
  window.setTimeout(() => map.invalidateSize(), 120);
});
