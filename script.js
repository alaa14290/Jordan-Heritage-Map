var map = L.map('map').setView([31.963158, 35.930359], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

var heritageSites = [
  {
    name: "البتراء",
    coords: [30.3285, 35.4444],
    description: "موقع أثري عالمي مهدد بالتدهور بسبب السياحة والعوامل المناخية."
  },
  {
    name: "أم قيس",
    coords: [32.6539, 35.6856],
    description: "موقع روماني قديم يعاني من التآكل الطبيعي ونقص أعمال الحماية."
  },
  {
    name: "جرش",
    coords: [32.2808, 35.8941],
    description: "موقع أثري يواجه تحديات في الصيانة والحفاظ عليه."
  }
];

heritageSites.forEach(function(site) {
  L.marker(site.coords)
    .addTo(map)
    .bindPopup(`<b>${site.name}</b><br>${site.description}`);
});
