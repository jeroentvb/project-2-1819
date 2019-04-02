# Volkswagen.nl
![screenshot](bin/screenshot.png)

## Inhoud
* [Snelheid optimalisaties](#snelheid-optimalisaties)
* [Focus styles](#focus-styles)
* [Contrast](#contrast)

## Snelheid optimalisaties
Testen zijn uitgevoerd met een gesimuleerde internetsnelheid van 200/200 kb up/down.

| | volkswagen.nl first load | Lokaal zonder aanpassingen | Lokaal reload zonder aanpassingen | Afbeeldingen compressed |
| --- | --- | --- | --- | --- |
| Laadtijd | 4.3 min | 2.6 min | 6s | 2.5 min |
| Opmerking | | | | 214.2kb bespaard |

| | gzip on the fly | Cache header, page reload | Totaal bespaarde tijd op first load (t.o.v. lokaal) | Totaal bespaarde laadtijd op reload |
| --- | --- | --- | --- | --- |
| Laadtijd | 2 min | 5s | 36s | 1s |

## Focus styles
Focus styles zijn belangrijk voor mensen die alleen een keyboard kunnen gebruiken. Zonder kunnen ze niet zien op welk element ze zitten.

| Zonder focus style | Met focus style |
| --- | --- |
| ![zonder focus](bin/no-focus.png) | ![met focus](bin/focus.png) |

## Contrast
![slecht contrast](bin/bad-contrast.png)
Het contrast van de knoppen en sommige links (blauw op wit of andersom) is niet voldoende voor slechtzienden.

[Check de contrastscore hier.](color.review/check/FFFFFF-00B1EB)

Ik heb er voor het voorbeeld voor gekozen om binnen de huidige kleur blauw te blijven. Het donkerder maken van die kleur is niet per se mooi maar doet de leesbaarheid wel ten goede.

| Slecht contrast | Voldoende voor koppen |
| --- | --- |
| [![contrast](bin/contrast.png)](color.review/check/FFFFFF-00B1EB) [#FFFFFF - #00B1EB](color.review/check/FFFFFF-00B1EB) | [![contrast](bin/contrast-headlines.png)](color.review/check/FFFFFF-009FD3) [#FFFFFF - #009FD3](color.review/check/FFFFFF-009FD3) |

| Voldoende grote voor tekst | Voldoende voor alles |
| --- | --- |
| [![contrast](bin/contrast-text.png)](color.review/check/FFFFFF-007FA9) [#FFFFFF - #007FA9](color.review/check/FFFFFF-007FA9) | [![contrast](bin/contrast-text.png)](color.review/check/FFFFFF-006080) [#FFFFFF - #006080](color.review/check/FFFFFF-006080) |
