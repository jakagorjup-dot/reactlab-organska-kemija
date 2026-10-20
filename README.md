# React Lab: Organska kemija za 3. in 4. letnik

Kratka, interaktivna aplikacija za utrjevanje organske kemije v 3. in 4. letniku srednje šole. Uporablja HTML, CSS in JavaScript ter ne potrebuje gradnje, strežnika ali nameščanja paketov.

## Začetek

Datoteko `index.html` odprite v sodobnem namiznem ali mobilnem brskalniku. Osnovne lekcije, razlage in napredek delujejo neposredno z lokalne datoteke tudi brez povezave.

## Učna pot

- **3. letnik:** zgradba in poimenovanje, ogljikovodiki, izomerija in benzen, alkoholi in estri.
- **4. letnik:** ogljikovi hidrati, maščobe in mila, aminokisline in beljakovine, polimeri in materiali.
- Skupaj: osem tematskih sklopov, 24 izbirnih vprašanj in takojšnje razlage.

Razlage so zasnovane za srednješolsko raven. Reakcijske sheme in formule ohranjajo običajne kemijske oznake, druge razlage pa najprej pojasnijo osnovno idejo.

## Napredek in zasebnost

Točke XP, dnevni niz in napredek se shranjujejo v lokalno shrambo brskalnika v tej napravi. Podatki se nikamor ne pošiljajo. Ker je učna pot prilagojena novemu predmetniku, se ob prvi posodobitvi ohranijo točke in dnevni niz, stare zaključene teme pa se ponastavijo.

## Dodajanje snovi iz zvezka

1. Izberite **Dodaj svojo snov** in vnesite naslov ter letnik.
2. Fotografirajte zapiske ali izberite sliko. Prepoznavanje besedila zahteva internetno povezavo za brezplačen OCR-program in slovenski jezikovni paket. Ti se naložijo iz jsDelivr in tessdata; fotografija se obdeluje samo v brskalniku in se ne pošilja na strežnik.
3. Preglejte in po potrebi popravite prepis, saj lahko OCR napačno prebere rokopis, šumnike ali kemijske formule. Lahko tudi ročno vnesete besedilo brez fotografije.
4. Iz prepisa nastanejo do trije izbirni izzivi za dopolnjevanje povedi. Preverite predogled in pravilne odgovore, nato shranite lekcijo. Lekcije in prepis ostanejo v lokalni shrambi brskalnika.

Samodejna vprašanja temeljijo na izbranih besedah iz prepisanih povedi; niso generirana z jezikovnim modelom in niso strokovno preverjena. Pred učenjem primerjajte odgovore z izvirnimi zapiski.

## Razvoj

Vgrajene lekcije so v polju `lessons` v datoteki `app.js`. Sintakso preverite z ukazom `node --check app.js`. Za uporabo aplikacije Node.js ni potreben.
