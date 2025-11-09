#!/bin/bash

# Script zum Erstellen von Favicons aus logo.png mit abgerundeten Ecken
# Voraussetzung: ImageMagick muss installiert sein (brew install imagemagick)

echo "Erstelle Favicons mit abgerundeten Ecken aus logo.png..."

# Funktion zum Abrunden der Ecken
round_corners() {
    local input=$1
    local output=$2
    local size=$3
    local radius=$((size / 8))  # 12.5% Radius für sanfte Rundung
    
    magick "$input" \
        \( +clone -alpha extract \
        -draw "fill black polygon 0,0 0,$radius $radius,0 fill white circle $radius,$radius $radius,0" \
        \( +clone -flip \) -compose Multiply -composite \
        \( +clone -flop \) -compose Multiply -composite \
        \) -alpha off -compose CopyOpacity -composite "$output"
}

# Erstelle favicon.ico (16x16 und 32x32)
magick images/logo.png -resize 32x32 -background white -flatten favicon-32-temp.png
round_corners favicon-32-temp.png favicon-32.png 32
magick images/logo.png -resize 16x16 -background white -flatten favicon-16-temp.png
round_corners favicon-16-temp.png favicon-16.png 16
magick favicon-32.png favicon-16.png favicon.ico

# Erstelle apple-touch-icon (180x180)
magick images/logo.png -resize 180x180 -background white -flatten apple-touch-icon-temp.png
round_corners apple-touch-icon-temp.png apple-touch-icon.png 180

# Erstelle android-chrome icons
magick images/logo.png -resize 192x192 -background white -flatten android-chrome-192-temp.png
round_corners android-chrome-192-temp.png android-chrome-192x192.png 192
magick images/logo.png -resize 512x512 -background white -flatten android-chrome-512-temp.png
round_corners android-chrome-512-temp.png android-chrome-512x512.png 512

# Erstelle favicon-32x32.png und favicon-16x16.png
mv favicon-32.png favicon-32x32.png
mv favicon-16.png favicon-16x16.png

# Lösche temporäre Dateien
rm -f *-temp.png

# Verschiebe alles in den images Ordner
mv favicon.ico images/
mv apple-touch-icon.png images/
mv favicon-32x32.png images/
mv favicon-16x16.png images/
mv android-chrome-192x192.png images/
mv android-chrome-512x512.png images/

echo "✅ Fertig! Favicons mit abgerundeten Ecken wurden in images/ erstellt"
