parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"MtxU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a={"Oma työpöytä":"fas fa-desktop",Uutiset:"fas fa-newspaper",Ilmoitukset:"fas fa-bell",Kalenteri:"fas fa-calendar","Ryhmätyötila":"fas fa-users",Keskustelu:"fas fa-comments","Sähköposti":"fas fa-envelope","Henkilöstö":"fas fa-users",Koulutukset:"fas fa-graduation-cap","Asiakkaat ja vastuut":"fas fa-briefcase","Työsuunnitelmat":"fas fa-clock",Tietoturva:"fas fa-lock",Kirjasto:"fas fa-book",Yhteystiedot:"fas fa-id-card",User:"fas fa-user",Search:"fas fa-search",Folders:"fas fa-folder-open"},s=a;exports.default=s;
},{}],"j5oE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.UserInfo=void 0;var e=t(require("./icons.js"));function t(e){return e&&e.__esModule?e:{default:e}}function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}function i(e){var t=p();return function(){var n,o=h(e);if(t){var r=h(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?a(e):t}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e){var t="function"==typeof Map?new Map:void 0;return(l=function(e){if(null===e||!d(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return f(e,arguments,h(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),y(n,e)})(e)}function f(e,t,n){return(f=p()?Reflect.construct:function(e,t,n){var o=[null];o.push.apply(o,t);var r=new(Function.bind.apply(e,o));return n&&y(r,n.prototype),r}).apply(null,arguments)}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function d(e){return-1!==Function.toString.call(e).indexOf("[native code]")}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=document.createElement("template");b.innerHTML='\n  <style>\n  .header__user-info {\n    color: #fff;\n    line-height: 3em;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 250px;\n  }\n\n  .fa-search,\n  .fa-folder-open,\n  .fa-bell {\n    cursor: pointer;\n  }\n  \n  </style>\n\n  <div class="header__user-info">\n    <div>\n      <span class="user-icon"></span>\n      <span class="user-info__details"></span>\n    </div>\n    <div>\n      <span class="user-bell"></span>\n      <span class="ilmoitusten-määrä"></span>\n    </div>\n    <span class="user-folders"></span>\n    <span class="search-icon"></span>        \n  </div>\n  ';var v=function(t){c(r,l(HTMLElement));var n=i(r);function r(){var t;return o(this,r),(t=n.call(this)).attachShadow({mode:"open"}),t.shadowRoot.appendChild(b.content.cloneNode(!0)),t.shadowRoot.querySelector(".user-info__details").innerText=t.getAttribute("name"),t.shadowRoot.querySelector(".user-icon").setAttribute("class","".concat(e.default.User)),t.shadowRoot.querySelector(".ilmoitusten-määrä").innerText=t.getAttribute("ilmoitukset"),t.shadowRoot.querySelector(".user-bell").setAttribute("class","".concat(e.default.Ilmoitukset)),t.shadowRoot.querySelector(".user-folders").setAttribute("class","".concat(e.default.Folders)),t.shadowRoot.querySelector(".search-icon").setAttribute("class","".concat(e.default.Search)),t}return u(r,[{key:"connectedCallback",value:function(){var e=document.querySelector('link[href*="fontawesome"]');e&&this.shadowRoot.appendChild(e.cloneNode())}}]),r}();exports.UserInfo=v;
},{"./icons.js":"MtxU"}],"KxhR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.fontAwesomeStyles=exports.bootstrapStyles=void 0;var s='<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"\nintegrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">';exports.bootstrapStyles=s;var t='<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"\nintegrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">';exports.fontAwesomeStyles=t;
},{}],"c4d1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SideMenu=void 0;var t=n(require("./icons.js")),e=require("./externalLibs.js");function n(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}function a(t){var e=d();return function(){var n,r=h(t);if(e){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function l(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){var e="function"==typeof Map?new Map:void 0;return(f=function(t){if(null===t||!y(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return p(t,arguments,h(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),b(n,t)})(t)}function p(t,e,n){return(p=d()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&b(o,n.prototype),o}).apply(null,arguments)}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function y(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var v='<a href="#" class="list-group-item list-group-item-action" style="background-color: #f5f5f5">',g='<a href="#" class="list-group-item active disabled border-dark bg-dark">',m=function(n){u(i,f(HTMLElement));var r=a(i);function i(){var t;return o(this,i),(t=r.call(this)).shadow=t.attachShadow({mode:"open"}),t}return c(i,[{key:"connectedCallback",value:function(){this.render()}},{key:"heading",get:function(){return this.getAttribute("heading")}},{key:"data",get:function(){return this.getAttribute("menu-items").split(",").map(function(e){return"Kirjasto"===e?"".concat(g,"<i class='").concat(t.default[e],"'></i> ").concat(e,"</a>"):"".concat(v,"<i class='").concat(t.default[e],"'></i> ").concat(e,"</a>")}).join(" ")}},{key:"render",value:function(){this.shadow.innerHTML="\n    \n\n    ".concat(e.bootstrapStyles,"\n    ").concat(e.fontAwesomeStyles,'\n    \n    <style>\n    .side-menu__heading {\n      text-transform: uppercase;\n      font-size: 26px;\n      letter-spacing: 1.5px;\n    }\n    .list-group-item {\n      border-left: none;\n      border-right: none;\n      border-top: 1px solid #ddd;\n    }\n    .list-group-item:hover {\n      color: black;\n    }\n    </style>\n\n\n    <div class="container p-0 pb-2">\n      <h2 class="side-menu__heading pl-2 pt-1 pb-2">').concat(this.heading,'</h2>\n      <div class="list-group">').concat(this.data,"</div>\n    </div>\n    ")}}]),i}();exports.SideMenu=m;
},{"./icons.js":"MtxU","./externalLibs.js":"KxhR"}],"bRhF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a='\n<h2 class="article__title pt-1 mb-3">Tulipalot</h2>\n        <div class="article__info d-flex justify-content-between p-1">\n          <div class="arcticle__details d-flex">\n            <div class="article__author pl-2">Makke <em>"Jekke"</em> Peippaja</div>\n            <div class="article__details--separator pr-1 pl-1">|</div>\n            <div class="article__date">7.2.2020</div>\n          </div>\n          <div class="d-flex article__feedback pr-2">\n            <div class="article__feedback--likes pr-2"><i class="fas fa-thumbs-up pr-2"></i>102</div>\n            <div class="article__feedback--comments pr-2"><i class="fas fa-comments pr-2"></i>7</div>\n          </div>\n        </div>\n        <img class="article__image img-fluid float-left pt-3 pr-3"\n          src="https://images.unsplash.com/photo-1434139240289-56c519f77cb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Dark hill under fiery sky">\n        <p class="pt-3 pr-3">Jukolan talo, eteläisessä Hämeessä, seisoo erään mäen pohjoisella rinteellä, liki\n          Toukolan kylää. Sen\n          läheisin ym­päristö on kivinen tanner, mutta alempana alkaa pellot, joissa, ennenkuin talo oli häviöön\n          mennyt, aaltoili teräinen vilja. Peltojen alla on niittu, apilaäyräinen, halkileikkaama monipolvisen\n          ojan; ja runsaasti antoi se heiniä, ennenkuin joutui laitumeksi kylän karjalle. Muutoin on talolla\n          avaria metsiä, soita ja erämaita, jotka, tämän tilustan ensimmäisen perustajan oivallisen toiminnan\n          kautta, olivat langenneet sille osaksi jo ison jaon käydessä entisinä aikoina. Silloinpa Jukolan isäntä,\n          pitäen enemmän huolta jälkeentulevainsa edusta kuin omasta parhaastansa, otti vastaan osaksensa kulon\n          polttaman metsän ja sai sillä keinolla seitsemän vertaa enemmän kuin toiset naapurinsa. Mutta kaikki\n          kulovalkean jäljet olivat jo kadonneet hänen piiristänsä ja tuuhea metsä kasvanut sijaan. - Ja tämä on\n          niiden seitsemän veljen koto, joiden elämänvaiheita tässä nyt käyn kertoilemaan.</p>\n        \n        <p class="pt-0 mb-4 pr-3">Veljesten nimet vanhimmasta nuorimpaan ovat: Juhani, Tuomas, Aapo, Simeoni, Timo,\n          Lauri ja Eero. Ovat\n          heistä Tuomas ja Aapo kaksoispari ja samoin Timo ja Lauri. Juhanin, vanhimman veljen, ikä on\n          kaksikymmentä ja viisi vuotta, mutta Eero, nuorin heistä, on tuskin nähnyt kahdeksantoista auringon\n          kierrosta. Ruumiin vartalo heillä on tukeva ja harteva, pituus kohtalainen, paitsi Eeron, joka vielä on\n          kovin lyhyt. Pisin heistä kaikista on Aapo, ehkä ei suinkaan hartevin. Tämä jälkimmäinen etu ja kunnia\n          on Tuomaan, joka oikein on kuuluisa hartioittensa levyyden tähden. Omituisuus, joka heitä kaikkia\n          yhteisesti merkitsee, on heidän ruskea ihonsa ja kankea, hampunkarvainen tukkansa, jonka karheus etenkin\n          Juhanilla on silmään pistävä.</p>\n        \n        <blockquote class="blockquote">\n          <div class="border-top mx-auto mb-2" style="width: 23%;"></div>\n          <p class="mx-auto text-center font-italic w-60 pt-1 mb-0" style="font-size: 24px;">Veljesten nimet vanhimmasta nuorimpaan ovat:<br>\n            Juhani, Tuomas, Aapo, Simeoni, Timo, Lauri\n            ja Eero.</p>\n          <div class="border-top mx-auto mt-3" style="width: 23%;"></div>\n        </blockquote>\n        \n        <p class="pt-2 pr-3">Heidän isäänsä, joka oli ankaran innokas metsämies, kohtasi hänen parhaassa iässään\n          äkisti surma, kun hän tappeli äkeän karhun kanssa. Molemmat silloin, <strong>niin metsän kontio kuin mies, löyttiin\n            kuolleina</strong>, toinen toisensa rinnalla maaten verisellä tanterella. Pahoin oli mies haavoitettu, mutta pedonkin sekä\n          kurkku että kylki nähtiin puukon viiltämänä ja hänen rintansa kiväärin tuiman luodin lävistämänä. Niin\n          lopetti päivänsä roteva mies, joka oli kaatanut enemmän kuin viisikymmentä karhua. ­ Mutta näiden\n          metsäretkiensä kautta löi hän laimin työn ja toimen talossansa, joka vähitellen, ilman esimiehen johtoa,\n          joutui rappiolle. Eivät kyenneet hänen poikansakaan kyntöön ja kylvöön; sillä olivatpa he perineet\n          isältänsä saman voimallisen innon metsäotusten pyyntöön. He rakentelivat satimia, loukkuja, ansaita ja\n          teerentarhoja surmaksi linnuille ja jäniksille. Niin viettivät he poikuutensa ajat, kunnes rupesivat\n          käsittelemään tuliluikkua ja rohkenivat lähestyä otsoa korvessa.</p>\n        <p class="pt-1 pr-3">Äiti kyllä koetti sekä nuhteilla että kurilla saattaa heitä työhön ja ahkeruuteen,\n          mutta heidän\n          uppiniskaisuutensa oli jäykkä vastus kaikille hänen yrityksillensä. Oli hän muutoin kelpo vaimo;\n          tunnettu oli hänen suora ja vilpitön ehkä hieman jyrkkä mielensä. Kelpo mies oli myös hänen veljensä,\n          poikien oiva eno, joka nuoruudessaan oli uljaana merimiehenä, purjehtinut kaukaiset meret, nähnyt monta\n          kansaa ja kaupunkia; mutta näkönsäpä kadotti hän viimein, käyden umpisokeaksi, ja vietti ikänsä pimeät\n          päivät Jukolan talossa. Hän silloin usein, veistellen tunteensa viittauksen mukaan kauhoja, lusikoita,\n          kirvesvarsia, kurikkoja ja muita huoneessa tarpeellisia kaluja, kertoili sisarensa pojille tarinoita ja\n          merkillisiä asioita sekä omasta maasta että vieraista valtakunnista, kertoili myös ihmeitä ja tapauksia\n          raamatusta. Näitä hänen jutelmiansa kuultelivat pojat kaikella hartaudella ja painoivat lujasti\n          muistoonsa. Mutta yhtä mieluisasti eivät he kuullelleetkaan äitinsä käskyjä ja nuhteita, vaan olivatpa\n          kovakorvaisia vallan, huolimatta monestakaan pieksiäislöylystä. Useinpa kyllä, huomatessaan selkäsaunan\n          lähestyvän, vilkasi veliparvi karkutielle, saattaen tämän kautta sekä äitillensä että muille murhetta ja\n          kiusaa, ja sillä omaa asiaansa pahentaen.</p>',i=a;exports.default=i;
},{}],"qith":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MainArticle=void 0;var t=n(require("./defaultHTML.js")),e=require("./externalLibs.js");function n(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}function u(t){var e=d();return function(){var n,r=b(t);if(e){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function l(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){var e="function"==typeof Map?new Map:void 0;return(f=function(t){if(null===t||!v(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return p(t,arguments,b(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),y(n,t)})(t)}function p(t,e,n){return(p=d()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&y(o,n.prototype),o}).apply(null,arguments)}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function v(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=document.querySelector("content-nav"),_=document.querySelector("main-article"),m="\n    <style>\n        .article__image {\n            width: 40%;\n          }\n        .article__info {\n            background-color: #f5f5f5;\n            border: 1px solid #ddd;\n        }\n        .article__title {\n            font-size: 2.5em;\n        }\n  </style>\n";h.addEventListener("click",function(t){var e=t.composedPath()[0].innerText;_.setAttribute("value",e),h.setAttribute("current-page",e)});var w="https://api.hel.fi/linkedevents/v1/event/?start=now&end=today",g=function(n){a(i,f(HTMLElement));var r=u(i);function i(){var t;return o(this,i),(t=r.call(this)).shadow=t.attachShadow({mode:"open"}),t}return c(i,[{key:"value",get:function(){return this.getAttribute("value")}},{key:"connectedCallback",value:function(){this.render()}},{key:"attributeChangedCallback",value:function(t,e,n){"value"===t&&this.render()}},{key:"render",value:function(){var n=this;"Tulipalot"!==this.value&&fetch(w).then(function(t){return t.json()}).then(function(t){t.data.find(function(t){t.provider&&t.name&&t.description&&t.provider.fi===n.value&&(n.shadow.innerHTML="\n                ".concat(e.bootstrapStyles,"\n                ").concat(e.fontAwesomeStyles,"\n                ").concat(m,'\n\n                <h2 class="article__title pt-1 mb-3">').concat(t.name.fi,'</h2>\n                <div class="article__info d-flex justify-content-between p-2">\n                  <div class="arcticle__details d-flex">\n                    <div class="article__author pl-2">').concat(t.provider.fi,'</div>\n                    <div class="article__details--separator pr-1 pl-1">|</div>\n                    <div class="article__date">').concat(new Date(t.start_time).toLocaleDateString(),'</div>\n                  </div>\n                  <div class="d-flex article__feedback pr-2">\n                    <div class="article__feedback--likes pr-2"><i class="fas fa-thumbs-up pr-2"></i>0</div>\n                    <div class="article__feedback--comments pr-2"><i class="fas fa-comments pr-2"></i>0</div>\n                  </div>\n                </div>\n                <img class="article__image img-fluid float-left pt-3 pr-3"\n                     src="').concat(t.images[0].url,'" alt="').concat(t.images[0].alt_text,'">\n                ').concat(t.description.fi))})}),"Tulipalot"!==this.value&&null!==this.value||(this.shadow.innerHTML="\n        ".concat(e.bootstrapStyles,"\n        ").concat(e.fontAwesomeStyles,"\n        ").concat(m,"\n        ").concat(t.default,"\n        "))}}],[{key:"observedAttributes",get:function(){return["value"]}}]),i}();exports.MainArticle=g;
},{"./defaultHTML.js":"bRhF","./externalLibs.js":"KxhR"}],"VApk":[function(require,module,exports) {
"use strict";function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}function n(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function e(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function o(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}function r(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&p(t,n)}function i(t){var n=s();return function(){var e,o=d(t);if(n){var r=d(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return c(this,e)}}function c(n,e){return!e||"object"!==t(e)&&"function"!=typeof e?u(n):e}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){var n="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||!f(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return l(t,arguments,d(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),p(e,t)})(t)}function l(t,n,e){return(l=s()?Reflect.construct:function(t,n,e){var o=[null];o.push.apply(o,n);var r=new(Function.bind.apply(t,o));return e&&p(r,e.prototype),r}).apply(null,arguments)}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function f(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function p(t,n){return(p=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.ContentNav=void 0;var h="https://api.hel.fi/linkedevents/v1/event/?start=now&end=today",y='\n  <a href="#" class="list-group-item list-group-item-action navigation-item" \n              style="background-color: #f5f5f5"\n  >',b=document.createElement("template"),v="\n  <style>\n    .list-group-item {\n      border-left: none;\n      border-right: none;\n      border-top: 1px solid #ddd;\n      padding: 6px 12px;\n    }\n    .list-group-item:hover {\n      color: black;\n    }\n\n  </style>",g='\n  <link rel="stylesheet"\n        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"\n        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" \n        crossorigin="anonymous"\n  >',m='\n  <a href="#" \n     class="font-weight-bold text-light bg-dark list-group-item list-group-item-action navigation-item"\n     style="background-color: #f5f5f5"\n  >Tulipalot</a>\n',w=function(t){r(c,a(HTMLElement));var e=i(c);function c(){var t;return n(this,c),(t=e.call(this)).shadow=t.attachShadow({mode:"open"}),t}return o(c,[{key:"current",get:function(){return this.getAttribute("current-page")}},{key:"connectedCallback",value:function(){this.render()}},{key:"attributeChangedCallback",value:function(t,n,e){if("current-page"===t&&null!==n){var o=this.shadow.querySelectorAll(".list-group-item"),r=this.shadow.querySelector(".bg-dark");r.classList.remove("bg-dark"),r.classList.remove("font-weight-bold"),r.classList.remove("text-light"),o.forEach(function(t){t.innerText===e&&(t.className+="font-weight-bold text-light bg-dark")})}}},{key:"render",value:function(){var t=this,n={},e=[];fetch(h).then(function(t){return t.json()}).then(function(o){o.data.forEach(function(o){o.provider&&o.name&&o.description&&(n[o.provider.fi]||(n[o.provider.fi]=!0,e.push("".concat(y).concat(o.provider.fi,"</a>"))));var r=e[0],i=e[1],c=e.slice(2);t.shadow.innerHTML="\n             ".concat(g,"\n             ").concat(v,'   \n\n                <div class="content-nav__container container p-0">\n                  <div class="content-nav__list-group list-group mr-4 pr-1">\n                    ').concat(r,"\n                    ").concat(i,"\n                    ").concat(m," \n                    ").concat(c.join(""),"   \n                   </div>\n                </div>")})})}}],[{key:"observedAttributes",get:function(){return["current-page"]}}]),c}();exports.ContentNav=w;
},{}],"zbzq":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./components/userInfo.js"),n=require("./components/sideMenu.js"),s=require("./components/mainArticle.js"),i=require("./components/contentNav.js");require("./style.scss"),window.customElements.define("user-info",e.UserInfo),window.customElements.define("side-menu",n.SideMenu),window.customElements.define("main-article",s.MainArticle),window.customElements.define("content-nav",i.ContentNav);
},{"./components/userInfo.js":"j5oE","./components/sideMenu.js":"c4d1","./components/mainArticle.js":"qith","./components/contentNav.js":"VApk","./style.scss":"zbzq"}]},{},["Focm"], null)
//# sourceMappingURL=src.22198922.js.map