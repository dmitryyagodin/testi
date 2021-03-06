const defaultHTML = `
<h2 class="article__title pt-1 mb-3">Tulipalot</h2>
        <div class="article__info d-flex justify-content-between p-1">
          <div class="arcticle__details d-flex">
            <div class="article__author pl-2">Makke <em>"Jekke"</em> Peippaja</div>
            <div class="article__details--separator pr-1 pl-1">|</div>
            <div class="article__date">7.2.2020</div>
          </div>
          <div class="d-flex article__feedback pr-2">
            <div class="article__feedback--likes pr-2"><i class="fas fa-thumbs-up pr-2"></i>102</div>
            <div class="article__feedback--comments pr-2"><i class="fas fa-comments pr-2"></i>7</div>
          </div>
        </div>
        <img class="article__image img-fluid float-left pt-3 pr-3"
          src="https://images.unsplash.com/photo-1434139240289-56c519f77cb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Dark hill under fiery sky">
        <p class="pt-3 pr-3">Jukolan talo, eteläisessä Hämeessä, seisoo erään mäen pohjoisella rinteellä, liki
          Toukolan kylää. Sen
          läheisin ym­päristö on kivinen tanner, mutta alempana alkaa pellot, joissa, ennenkuin talo oli häviöön
          mennyt, aaltoili teräinen vilja. Peltojen alla on niittu, apilaäyräinen, halkileikkaama monipolvisen
          ojan; ja runsaasti antoi se heiniä, ennenkuin joutui laitumeksi kylän karjalle. Muutoin on talolla
          avaria metsiä, soita ja erämaita, jotka, tämän tilustan ensimmäisen perustajan oivallisen toiminnan
          kautta, olivat langenneet sille osaksi jo ison jaon käydessä entisinä aikoina. Silloinpa Jukolan isäntä,
          pitäen enemmän huolta jälkeentulevainsa edusta kuin omasta parhaastansa, otti vastaan osaksensa kulon
          polttaman metsän ja sai sillä keinolla seitsemän vertaa enemmän kuin toiset naapurinsa. Mutta kaikki
          kulovalkean jäljet olivat jo kadonneet hänen piiristänsä ja tuuhea metsä kasvanut sijaan. - Ja tämä on
          niiden seitsemän veljen koto, joiden elämänvaiheita tässä nyt käyn kertoilemaan.</p>
        
        <p class="pt-0 mb-4 pr-3">Veljesten nimet vanhimmasta nuorimpaan ovat: Juhani, Tuomas, Aapo, Simeoni, Timo,
          Lauri ja Eero. Ovat
          heistä Tuomas ja Aapo kaksoispari ja samoin Timo ja Lauri. Juhanin, vanhimman veljen, ikä on
          kaksikymmentä ja viisi vuotta, mutta Eero, nuorin heistä, on tuskin nähnyt kahdeksantoista auringon
          kierrosta. Ruumiin vartalo heillä on tukeva ja harteva, pituus kohtalainen, paitsi Eeron, joka vielä on
          kovin lyhyt. Pisin heistä kaikista on Aapo, ehkä ei suinkaan hartevin. Tämä jälkimmäinen etu ja kunnia
          on Tuomaan, joka oikein on kuuluisa hartioittensa levyyden tähden. Omituisuus, joka heitä kaikkia
          yhteisesti merkitsee, on heidän ruskea ihonsa ja kankea, hampunkarvainen tukkansa, jonka karheus etenkin
          Juhanilla on silmään pistävä.</p>
        
        <blockquote class="blockquote">
          <div class="border-top mx-auto mb-2" style="width: 23%;"></div>
          <p class="mx-auto text-center font-italic w-60 pt-1 mb-0" style="font-size: 24px;">Veljesten nimet vanhimmasta nuorimpaan ovat:<br>
            Juhani, Tuomas, Aapo, Simeoni, Timo, Lauri
            ja Eero.</p>
          <div class="border-top mx-auto mt-3" style="width: 23%;"></div>
        </blockquote>
        
        <p class="pt-2 pr-3">Heidän isäänsä, joka oli ankaran innokas metsämies, kohtasi hänen parhaassa iässään
          äkisti surma, kun hän tappeli äkeän karhun kanssa. Molemmat silloin, <strong>niin metsän kontio kuin mies, löyttiin
            kuolleina</strong>, toinen toisensa rinnalla maaten verisellä tanterella. Pahoin oli mies haavoitettu, mutta pedonkin sekä
          kurkku että kylki nähtiin puukon viiltämänä ja hänen rintansa kiväärin tuiman luodin lävistämänä. Niin
          lopetti päivänsä roteva mies, joka oli kaatanut enemmän kuin viisikymmentä karhua. ­ Mutta näiden
          metsäretkiensä kautta löi hän laimin työn ja toimen talossansa, joka vähitellen, ilman esimiehen johtoa,
          joutui rappiolle. Eivät kyenneet hänen poikansakaan kyntöön ja kylvöön; sillä olivatpa he perineet
          isältänsä saman voimallisen innon metsäotusten pyyntöön. He rakentelivat satimia, loukkuja, ansaita ja
          teerentarhoja surmaksi linnuille ja jäniksille. Niin viettivät he poikuutensa ajat, kunnes rupesivat
          käsittelemään tuliluikkua ja rohkenivat lähestyä otsoa korvessa.</p>
        <p class="pt-1 pr-3">Äiti kyllä koetti sekä nuhteilla että kurilla saattaa heitä työhön ja ahkeruuteen,
          mutta heidän
          uppiniskaisuutensa oli jäykkä vastus kaikille hänen yrityksillensä. Oli hän muutoin kelpo vaimo;
          tunnettu oli hänen suora ja vilpitön ehkä hieman jyrkkä mielensä. Kelpo mies oli myös hänen veljensä,
          poikien oiva eno, joka nuoruudessaan oli uljaana merimiehenä, purjehtinut kaukaiset meret, nähnyt monta
          kansaa ja kaupunkia; mutta näkönsäpä kadotti hän viimein, käyden umpisokeaksi, ja vietti ikänsä pimeät
          päivät Jukolan talossa. Hän silloin usein, veistellen tunteensa viittauksen mukaan kauhoja, lusikoita,
          kirvesvarsia, kurikkoja ja muita huoneessa tarpeellisia kaluja, kertoili sisarensa pojille tarinoita ja
          merkillisiä asioita sekä omasta maasta että vieraista valtakunnista, kertoili myös ihmeitä ja tapauksia
          raamatusta. Näitä hänen jutelmiansa kuultelivat pojat kaikella hartaudella ja painoivat lujasti
          muistoonsa. Mutta yhtä mieluisasti eivät he kuullelleetkaan äitinsä käskyjä ja nuhteita, vaan olivatpa
          kovakorvaisia vallan, huolimatta monestakaan pieksiäislöylystä. Useinpa kyllä, huomatessaan selkäsaunan
          lähestyvän, vilkasi veliparvi karkutielle, saattaen tämän kautta sekä äitillensä että muille murhetta ja
          kiusaa, ja sillä omaa asiaansa pahentaen.</p>`;

export default defaultHTML;