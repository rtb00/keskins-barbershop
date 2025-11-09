# 📋 DSGVO & Cookie-Implementierung - Anleitung

## ✅ Was wurde implementiert:

### 1. **Impressum** (`impressum.html`)
- Vollständiges Impressum nach TMG
- ⚠️ **WICHTIG**: Bitte ergänze noch:
  - Telefonnummer (falls gewünscht)
  - E-Mail-Adresse
  - USt-IdNr. (falls vorhanden)

### 2. **Datenschutzerklärung** (`datenschutz.html`)
- Vollständige DSGVO-konforme Datenschutzerklärung
- Dokumentiert alle verwendeten Services:
  - GitHub Pages (Hosting)
  - Google Fonts
  - Google Maps
  - Elfsight (Instagram Widget)
  - Instagram
- Alle Rechtsgrundlagen und Widerrufsrechte erklärt

### 3. **Cookie-Banner**
- Professionelles Design im Stil deiner Website
- Opt-in Lösung (DSGVO-konform)
- Funktionen:
  - "Alle akzeptieren" → Aktiviert Google Maps & Instagram
  - "Nur notwendige" → Blockiert externe Services
  - Speichert Entscheidung für 1 Jahr

## 🎯 Wie funktioniert das Cookie-System?

### Ohne Einwilligung:
- ❌ Google Maps wird NICHT geladen
- ❌ Instagram Widget wird NICHT geladen
- ✅ Website funktioniert normal

### Mit Einwilligung:
- ✅ Google Maps wird angezeigt
- ✅ Instagram Feed wird geladen
- ✅ Volle Funktionalität

## 📝 Was musst du noch machen?

### 1. Impressum vervollständigen
Öffne `impressum.html` und ergänze:
```html
Telefon: +49 (0) XXX XXXXXXXX
E-Mail: info@keskins-barbershop.de
Umsatzsteuer-ID: DEXXXXXXXXX (falls vorhanden)
```

### 2. Teste das Cookie-Banner
1. Öffne die Website
2. Cookie-Banner erscheint nach 1 Sekunde
3. Teste beide Buttons:
   - "Alle akzeptieren" → Maps & Instagram sollten laden
   - "Nur notwendige" → Bleiben blockiert

### 3. Cookie-Einstellungen zurücksetzen
Im Browser:
- Chrome: Entwicklertools (F12) → Application → Cookies → keskins_cookie_consent löschen
- Firefox: Entwicklertools (F12) → Speicher → Cookies → keskins_cookie_consent löschen

Oder: `localStorage.clear()` in der Konsole eingeben

## 🚨 Rechtliche Hinweise

### Was ist DSGVO-konform:
✅ Cookie-Banner mit Opt-in
✅ Datenschutzerklärung vorhanden
✅ Impressum vorhanden
✅ Alle Services dokumentiert
✅ Widerrufsrechte erklärt

### Was du noch beachten solltest:
⚠️ **Hessischer Datenschutzbeauftragter** ist zuständig
⚠️ Bei Abmahnungen: Sofort Anwalt konsultieren
⚠️ Datenschutzerklärung jährlich prüfen
⚠️ Bei neuen Services: Datenschutz aktualisieren

## 💡 Optional: Google Fonts lokal hosten

Für noch besseren Datenschutz kannst du Google Fonts lokal hosten:

### Vorteile:
- Keine IP-Übertragung an Google
- Schnellere Ladezeiten
- DSGVO-sicherer

### Anleitung:
1. Fonts herunterladen: https://google-webfonts-helper.herokuapp.com
2. In `fonts/` Ordner speichern
3. In CSS einbinden statt Google-Link

## 🔧 Technische Details

### Verwendete Cookies:
- `keskins_cookie_consent` (365 Tage)
  - Werte: "accepted" oder "declined"
  - Zweck: Speicherung der Cookie-Einwilligung

### Externe Services:
1. **Google Fonts** - Schriftarten
2. **Google Maps** - Karteneinbindung (nur mit Consent)
3. **Elfsight** - Instagram Widget (nur mit Consent)

## 📞 Support

Bei Fragen zur DSGVO-Konformität:
- Hessischer Datenschutzbeauftragter: https://datenschutz.hessen.de
- Anwalt für IT-Recht konsultieren
- e-recht24.de für Updates nutzen

---

**Status: ✅ Grundsätzlich DSGVO-konform**
**Action needed: Impressum vervollständigen**

Stand: November 2025
