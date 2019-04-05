<!--

 __    __   _______  __       __        ______   
|  |  |  | |   ____||  |     |  |      /  __  \  
|  |__|  | |  |__   |  |     |  |     |  |  |  |
|   __   | |   __|  |  |     |  |     |  |  |  |
|  |  |  | |  |____ |  `----.|  `----.|  `--'  |
|__|  |__| |_______||_______||_______| \______/  

.___________. __    __   _______ .______       _______
|           ||  |  |  | |   ____||   _  \     |   ____|
`---|  |----`|  |__|  | |  |__   |  |_)  |    |  |__   
    |  |     |   __   | |   __|  |      /     |   __|  
    |  |     |  |  |  | |  |____ |  |\  \----.|  |____
    |__|     |__|  |__| |_______|| _| `._____||_______|


-->

# Volkswagen.nl
![screenshot](bin/screenshot.png)

## Inhoud
* [Top 5 optimalisaties](#top-5-optimalisaties)
* [Snelheid optimalisaties](#snelheid-optimalisaties)
* [Focus styles](#focus-styles)
* [Contrast](#contrast)
* [Audits](#audits)

## Top 5 optimalisaties
1. Afbeeldingen optimaliseren (`.webp`)
2. Precompress alle statische assets met brotli & gzip
3. Voeg een cache control header toe aan alle statische assets
4. Voeg een focus style toe aan alle klikbare elementen
5. Verwijder ongebruikte CSS & JS OF stuur alleen critical CSS & JS en laad dan de rest in


6. Contrast blauw-wit en tekst op afbeeldingen niet goed
7. Update de JS libraries. Sommige hebben bekende kwetsbaarheden...

## Snelheid optimalisaties
Testen zijn uitgevoerd met een gesimuleerde internetsnelheid van 200/200 kb up/down.  
De volgende tabel bevat de standaardlaadtijden.

| | volkswagen.nl first load | volkswagen.nl reload | Lokaal zonder aanpassingen | Lokaal reload zonder aanpassingen |
| --- | --- | --- | --- | --- |
| Laadtijd | 4.3 min | 4.3s | 2.6 min | 6s |

De volgende tabel bevat de geoptimaliseerde laadtijden voor de lokale website.

|  | .webp | gzip | brotli | Reload met cache-control header |
| --- | --- | --- | --- | --- |
| Laadtijd | 1.4 min | 1.1 min | 1 min | 5s |

#### Bespaarde bestandsgroottes
De optimalisaties hebben de volgende download size bespaard:

|  | Originele grootte | Met `.webp` |
| --- | --- | --- |
| [Images](static/images) | 2.2mb | 714kb |

|  | Originele grootte | gzip | brotli |
| --- | --- | --- | --- |
| [CSS](static/css) | 40kb | 12kb | 10kb |

|  | Originele grootte | gzip | brotli |
| --- | --- | --- | --- |
| [JS](static/js) | 483kb | 147kb | 126kb |

#### Zwaarste assets
* Afbeeldingen
* Fonts
* JS (s[cripts.min.js](static/js/cripts.min.js)) (echt 21.000 regels js nodig?)
* CSS ([styles.min.js](static/css/styles.min.js)) (echt 14.500 regels css nodig?)

| Before | After |
| --- | --- |
| ![speed before changes](bin/local-no-changes.png) | ![speed after changes](bin/local-all-changes.png) |

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
| [![contrast](bin/contrast-text.png)](color.review/check/FFFFFF-007FA9) [#FFFFFF - #007FA9](color.review/check/FFFFFF-007FA9) | [![contrast](bin/contrast-all-text.png)](color.review/check/FFFFFF-006080) [#FFFFFF - #006080](color.review/check/FFFFFF-006080) |

Dit is hoe het er uit zou zien met aangepaste kleuren.
![good-contrast](bin/good-contrast.png)

## Audits
| Volkswagen.nl | Lokaal geoptimaliseerde versie |
| --- | --- |
| [![audit volkswagen.nl](bin/audit-volkswagen.nl.png)](bin/audit-volkswagen.nl.png) | [![audit lokaal volkswagen.nl](bin/audit-local-volkswagen.nl.png)](bin/audit-local-volkswagen.nl.png)

### Pagespeed
[![volkswagen.nl pagespeed](bin/pagespeed.png)](bin/pagespeed.png)
