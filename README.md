# Rollout

Nederlandstalige slaapplekkenverkenner voor bikepacking in Nederland, België, Luxemburg, Duitsland, Denemarken, Zweden, Noorwegen, Frankrijk, Zwitserland, Oostenrijk en Italië.

## Starten

```bash
python3 -m http.server 8000
```

Open daarna `http://localhost:8000`.

Op een HTTPS-host kan Rollout via de browser aan het beginscherm worden toegevoegd. De PWA bewaart de website, regels, routebronnen en openbare dataset voor offline herladen. Kaarttegels worden alleen lokaal gecachet nadat ze eenmaal bekeken zijn; nieuwe bronpagina's en nog niet bekeken kaartgebieden vereisen internet.

## Datakeuzes

- De ingebouwde regiomarkers zijn oriëntatiepunten, geen exacte kampeeradressen.
- De knop op de kaart zoekt live in OpenStreetMap via Overpass naar gratis gemarkeerde kampeerplekken, shelters en wilderness huts.
- GPX-tracks en routes uit onder meer Komoot kunnen lokaal worden geïmporteerd. Een instelbare corridor van 1–50 kilometer verbergt slaapplaatsen die te ver van de fietsroute liggen; de inhoud verlaat de browser niet.
- De laatst geïmporteerde route wordt automatisch in de browser op het apparaat bewaard en na herladen hersteld. `Route wissen` verwijdert ook deze lokale kopie.
- `Plek voor vannacht` gebruikt, na toestemming, de actuele telefoonpositie. Met 15, 35 of 70 kilometer resterende fietsafstand worden maximaal negen kandidaten gerangschikt. Bij een actieve GPX gebeurt dat op voortgang langs de route; zonder GPX op hemelsbrede afstand.
- De kandidatenlijst gebruikt dezelfde land-, slaapvorm-, netwerk-, zekerheids- en routefilters als de kaart en beperkt het aantal resultaten per bron, zodat één gastnetwerk de lijst niet volledig vult.
- Als locatietoegang niet beschikbaar of geweigerd is, blijft de functie werken vanaf het midden van het huidige kaartbeeld.
- Losse GPX-waypoints blijven eveneens zichtbaar als eigen slaapplaatsenlaag.
- Denemarken bevat een momentopname van 2.480 officiële [Ud i Naturen](https://udinaturen.dk/kort)-objecten: vrije tentgebieden, primitieve overnachtingsplekken en shelters. Iedere marker bevat de eigen officiële beschrijving, capaciteit, boekingsstatus en detailpagina.
- Vrienden op de Fiets en Welcome To My Garden worden bij uitzoomen geclusterd. Vanaf zoomniveau 13 verschijnen de afzonderlijke, openbaar gepubliceerde kaartposities. De huidige momentopname bevat 5.144 respectievelijk 5.379 pins in de elf doellanden.
- Locatiefoto's van Welcome To My Garden en Ud i Naturen worden in het detailpaneel getoond wanneer de bron een openbare afbeelding publiceert. OpenStreetMap-afbeeldingen worden gebruikt wanneer een `image`- of Wikimedia Commons-verwijzing aanwezig is.
- De openbare Vrienden-op-de-Fiets-feed bevat geen fotoveld; die pins blijven daarom zonder afbeelding.
- De hospitalitypins bevatten alleen coördinaten en generieke voorzieningen. Host-ID's, namen, adressen, profielteksten en contactgegevens worden niet opgenomen.
- De Warmshowers-app toont hosts op een kaart. Er is momenteel geen stabiele openbare export of gedocumenteerde feed in Rollout opgenomen; daarom verwijst de website naar de officiële app.
- De landenwijzer beschrijft de hoofdregel én uitzonderingen. Frankrijk, België, Zwitserland, Oostenrijk en Italië zijn bewust als lokaal of regionaal aangemerkt; controleer daar altijd gemeente, park, kanton/deelstaat en terreinbeheerder.
- Noorwegen volgt het allemansretten voor `utmark`: minimaal 150 meter van bewoonde huizen of hutten en doorgaans maximaal twee nachten op dezelfde plek. Plaatselijke regels en brandgevaar kunnen dit beperken.
- Iedere plek blijft een aanleiding om de primaire bron en lokale bebording te controleren.

## Openbare data vernieuwen

`scripts/fetch-wtmg-public.mjs` haalt de openbare WTMG-tuinlaag op. De bouwstap bewaart in de website alleen positie, basisvoorzieningen en de uiteindelijke openbare thumbnail-URL. `scripts/build-public-data.mjs` genereert daarna `public-data.js` uit die tuinlaag, de publieke Vrienden-op-de-Fiets-kaartfeed en de officiële Ud i Naturen-responsen.
