# Skúšobný zápočet: jednoduché obedové menu

Čas: 75 minút. Maximum: 100 bodov. Ide o tréning podľa tvojich projektov; bodovanie je len na sebakontrolu. Prvý pokus rob bez pôvodného kódu a bez nápovied.

Vytvor samostatný priečinok so súbormi `index.html`, `style.css`, `app.js` a `menu.json`. Použi čistý JavaScript. Spusti ho cez lokálny HTTP server.

Obsah `menu.json`:

```json
[
  {"id":1,"name":"Paradajková polievka","day":1,"type":"soup","price":2.5},
  {"id":2,"name":"Kurací rezeň","day":1,"type":"main","price":6.9},
  {"id":3,"name":"Zeleninové rizoto","day":2,"type":"main","price":5.2},
  {"id":4,"name":"Cesnaková polievka","day":2,"type":"soup","price":2.8}
]
```

## Požiadavky

1. **HTML a CSS – 10 bodov.** Nadpis, tlačidlo Načítať menu, výber Pondelok/Utorok, checkbox Len polievky, formulár na nové jedlo a kontajner výsledkov. Vstupy majú label. Obsah je použiteľný na mobile.
2. **Načítanie – 20 bodov.** Tlačidlo načíta JSON cez fetch. Počas načítania je zablokované. Kontroluj HTTP stav, základnú štruktúru dát a zobraz chybu pri zlyhaní. Po skončení ho vždy odblokuj. Platné dáta sú pole objektov s jedinečným celočíselným ID, neprázdnym názvom, dňom 1 alebo 2, typom `soup` alebo `main` a konečnou kladnou číselnou cenou.
3. **Vykreslenie – 15 bodov.** Každé jedlo má názov, typ, cenu s dvoma desatinnými miestami a tlačidlo Odstrániť. Použi DOM metódy a `textContent`. Opakované vykreslenie nesmie zdvojiť obsah.
4. **Filtre – 15 bodov.** Výber dňa a checkbox fungujú súčasne. Zobraz počet výsledkov a správu pri prázdnom výbere. Počiatočný deň je pondelok, checkbox nie je zaškrtnutý.
5. **Formulár – 15 bodov.** Pridaj jedlo s vlastným ID, názvom, dňom, typom a cenou. Názov nesmie pozostávať z medzier, cena musí byť konečné číslo väčšie než 0. Prázdne vstupy odmietni. Formulár nesmie obnoviť stránku.
6. **Mazanie – 10 bodov.** Odstráň správne jedlo podľa ID zo stavu aj zo stránky. Zachovaj aktuálny filter.
7. **Ukladanie – 15 bodov.** Po načítaní, pridaní aj odstránení ulož celé pole do localStorage. Pri štarte obnov platné uložené dáta. Chýbajúca alebo poškodená cache nezhodí aplikáciu. Tlačidlo Načítať menu vždy nahradí aktuálne dáta obsahom JSON; pri chybe zachová doterajšie údaje. Platné prázdne pole v cache musí zostať prázdne aj po obnovení stránky.

Na začiatku bez cache zobraz „Načítaj menu“. Filtre sa ukladať nemusia. Po pridaní položky, ktorú aktuálny filter nezobrazuje, oznám úspešné pridanie krátkou správou.

## Kontrola po dokončení

- Načítaj menu: pondelok má 2 jedlá; iba polievky zobrazia 1.
- Prepni utorok so zapnutým filtrom polievok: zobrazí sa Cesnaková polievka.
- Vypni filter: utorok má 2 jedlá.
- Pridaj na utorok hlavné jedlo Šalát za 4,50: utorok má 3 jedlá. Použi číselný vstup so `step="0.01"`; hodnota čítaná JavaScriptom musí byť správne prevedená na číslo.
- Odstráň Rizoto: zostanú 2 utorkové jedlá. Obnov stránku a opäť zvoľ utorok: odstránenie sa zachovalo.
- Názov z medzier, prázdna cena, 0 a záporná cena sa odmietnu.
- Názov `<b>Test</b>` sa zobrazí ako obyčajný text.
- Zmeň URL na neexistujúci súbor: zobrazí sa chyba, tlačidlo sa odblokuje a doterajšie dáta ostanú.
- Poškodený JSON v localStorage nespôsobí nezachytenú chybu.
- Odstráň všetky jedlá a obnov stránku: nevrátia sa automaticky.
- V konzole nie sú neošetrené chyby.

## Vyhodnotenie

- 85–100: zvládaš hlavné oblasti tohto tréningu; precvič vysvetľovanie kódu.
- 65–84: zopakuj oblasti, v ktorých si stratil body, a oprav riešenie bez kopírovania.
- Menej ako 65: vráť sa najmä k úlohám 2, 3, 5, 6 a 8, potom skús tento test znova.

Body si prideľ za fungujúce požiadavky, nie iba za existujúce funkcie. Záverom vysvetli tok: udalosť → zmena dát → uloženie → vykreslenie.


## Pripravená šablóna

Dáta sú v `menu.json`. V `index.html` priprav celé rozhranie; v `app.js` máš iba kostru funkcií. Použi HTTP server.
