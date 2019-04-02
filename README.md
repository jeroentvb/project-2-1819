# Volkswagen.nl
![screenshot](bin/screenshot.png)

## Inhoud
* [Snelheid optimalisaties](#snelheid-optimalisaties)
* [Contrast](#contrast)

## Snelheid optimalisaties
Testen zijn uitgevoerd met een gesimuleerde internetsnelheid van 200/200 kb up/down.

| | volkswagen.nl | Lokaal zonder aanpassingen | Afbeeldingen compressed | Cache header, page reload | Totaal bespaarde tijd op first load | Totaal bespaarde laadtijd op reload |
| --- | --- | --- | --- | --- | --- |
| Laadtijd | 4.3 min | 2.6 min | 2.5 min | 5s | | |
| Opmerking | | | Bespaarde 214.2kb | | | | |

## Focus styles
Focus styles zijn belangrijk voor mensen die alleen een keyboard kunnen gebruiken. Zonder kunnen ze niet zien op welk element ze zitten.

| Zonder focus style | Met focus style |
| --- | --- |
| ![zonder focus](bin/no-focus.png) | ![met focus](bin/focus.png) |

## Contrast
![slecht contrast](bin/bad-contrast.png)
Het contrast van de knoppen en sommige links (blauw op wit of andersom) is niet voldoende voor slechtzienden.  
[Check het contrast hier](color.review/check/FFFFFF-00B1EB)

| Slecht contrast | Voldoende voor koppen |
| --- | --- |
| [![contrast](bin/contrast.png)](color.review/check/FFFFFF-00B1EB) [#FFFFFF - #00B1EB](color.review/check/FFFFFF-00B1EB) | [![contrast](bin/contrast-headlines.png)](color.review/check/FFFFFF-009FD3) [#FFFFFF - #009FD3](color.review/check/FFFFFF-009FD3) |

| Voldoende grote voor tekst | Voldoende voor alles |
| --- | --- |
| [![contrast](bin/contrast-text.png)](color.review/check/FFFFFF-007FA9) [#FFFFFF - #007FA9](color.review/check/FFFFFF-007FA9) | [![contrast](bin/contrast-text.png)](color.review/check/FFFFFF-006080) [#FFFFFF - #006080](color.review/check/FFFFFF-006080) |
