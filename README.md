# Keskin's Barbershop Website

Moderne Website für Keskin's Barbershop in Mainz-Kostheim.

## 🚀 GitHub Pages Deployment

Diese Website ist für GitHub Pages optimiert.

### Setup:
1. Repository auf GitHub erstellen
2. Code pushen
3. In GitHub Repository Settings → Pages → Source: "main" branch auswählen
4. Website ist verfügbar unter: `https://username.github.io/repository-name`

## 📁 Projekt-Struktur

```
kerkins_barber_shop/
├── index.html          # Hauptseite
├── css/
│   └── styles.css      # Stylesheet
├── js/
│   └── script.js       # JavaScript
├── images/             # Bilder-Ordner
│   ├── gallery/        # Galerie-Bilder
│   ├── logo.svg        # Logo
│   ├── mehmet.jpg      # Inhaber-Foto
│   └── pricelist.jpg   # Preisliste
└── README.md

```

## 🖼️ Bilder hinzufügen

### Wo kommen welche Bilder hin?

1. **Logo** → `images/logo.svg` oder `images/logo.png`
   - Ersetze in `index.html`: `logo-placeholder.svg` durch `images/logo.svg`

2. **Inhaber-Foto (Mehmet)** → `images/mehmet.jpg`
   - Ersetze in `index.html`: `mehmet-placeholder.jpg` durch `images/mehmet.jpg`

3. **Preisliste** → `images/pricelist.jpg`
   - Ersetze in `index.html`: `pricelist-placeholder.jpg` durch `images/pricelist.jpg`

4. **Salon-Galerie** → `images/gallery/`
   - `images/gallery/salon-1.jpg` (Hauptbild)
   - `images/gallery/salon-2.jpg` (Waschbereich)
   - `images/gallery/salon-3.jpg` (Details)
   - `images/gallery/salon-4.jpg` (Arbeitsplatz)
   - `images/gallery/salon-5.jpg` (Empfangsbereich)
   - Ersetze in `index.html`: `salon-X-placeholder.jpg` durch `images/gallery/salon-X.jpg`

### Bilder optimieren vor Upload:
- Format: JPG für Fotos, PNG/SVG für Logo
- Größe: max. 1920px Breite für große Bilder
- Dateigröße: unter 500KB pro Bild
- Komprimierung: z.B. mit TinyPNG.com

## 🛠️ Lokale Entwicklung

Website einfach öffnen:
```bash
open index.html
```

Oder mit lokalem Server:
```bash
python3 -m http.server 8000
# Dann öffne: http://localhost:8000
```

## 📝 Anpassungen vornehmen

- **Texte ändern**: `index.html` bearbeiten
- **Styles anpassen**: `css/styles.css` bearbeiten
- **Funktionen ändern**: `js/script.js` bearbeiten

## 🌐 Nach dem Deployment

Nach dem Pushen zu GitHub Pages:
1. Warte 1-2 Minuten
2. Überprüfe die URL
3. Teste auf verschiedenen Geräten (Handy, Tablet, Desktop)

## 📧 Kontakt

Bei Fragen oder Problemen: kontakt@keskins-barbershop.de
