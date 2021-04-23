# Abako rekrytointitesti

npm install (lataa dependencies)
npm run dev (avaa selaimella automattisesti)

Tehtävänanto löytyy [tästä](https://www.abako.fi/rekrytointi/rekry.html)

- tekija: *Dmitry Yagodin*
- sähköposti: dmitry.yagodin@gmail.com
- alku: 20.04.2021 20:00
- loppu: 22.04.2021 23:00
- tehtävän kokonaisaika noin: **10 tuntia** (sis. ulkoisen tiedoston löytämien)

## Kuvaus
Tämä sivu näyttää mallisivustoa ja hakee tietoa ajankohtasista tapahtumista pääkaupunkiseudulla.
Sivun avatessa käyttäjä näkee sivupalstalla eri tapahtumien järjestäjen nimet.
Napsauttamalla kutakin nimeä käyttäjä pääsee näkeemään lyhyttä esitystekstia ja kuvaa eri tapahtumista.
Tämän saavuttamiseksi sivu hyödyntää avoimestä lähteestä ([Helsinki LinkedEvents palvelusta](https://dev.hel.fi/apis/linkedevents))

## Tehtävässä käytettyt teknologiat ja ressursit
- Bootstrap 4 (v4.4.1)
- FontAwesome Ikonit (v5.7.1)
- Parcel bundler (v1.12.5)
- VS Code (editointi)
- Unsplash.com (kuva)
- Loremipsum.fi (teksti)
- api.hel.fi (ulkoiset tiedostot)

## Projektille kuluu
- index.html
- style.scss => style.css && style.css.map
- assets/lauren-coleman-shy0cEi7h1o-unsplash.jpg
- 4 komponenttia (components/)
- 3 data js tiedostoa

## Komponentit
1. `contentNav.js`
2. `mainArticle.js`
3. `sideMenu.js`
4. `userInfo.js`
