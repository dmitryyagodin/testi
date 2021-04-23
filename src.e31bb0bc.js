// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"components/icons.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var fontAwesomeIcons = {
  'Oma työpöytä': 'fas fa-desktop',
  'Uutiset': 'fas fa-newspaper',
  'Ilmoitukset': 'fas fa-bell',
  'Kalenteri': 'fas fa-calendar',
  'Ryhmätyötila': 'fas fa-users',
  'Keskustelu': 'fas fa-comments',
  'Sähköposti': 'fas fa-envelope',
  'Henkilöstö': 'fas fa-users',
  'Koulutukset': 'fas fa-graduation-cap',
  'Asiakkaat ja vastuut': 'fas fa-briefcase',
  'Työsuunnitelmat': 'fas fa-clock',
  'Tietoturva': 'fas fa-lock',
  'Kirjasto': 'fas fa-book',
  'Yhteystiedot': 'fas fa-id-card',
  'User': 'fas fa-user',
  'Search': 'fas fa-search',
  'Folders': 'fas fa-folder-open'
};
var _default = fontAwesomeIcons;
exports.default = _default;
},{}],"components/userInfo.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserInfo = void 0;

var _icons = _interopRequireDefault(require("./icons.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var template = document.createElement('template');
template.innerHTML = "\n  <style>\n  .header__user-info {\n    color: #fff;\n    line-height: 3em;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 250px;\n  }\n\n  .fa-search,\n  .fa-folder-open,\n  .fa-bell {\n    cursor: pointer;\n  }\n  \n  </style>\n\n  <div class=\"header__user-info\">\n    <div>\n      <span class=\"user-icon\"></span>\n      <span class=\"user-info__details\"></span>\n    </div>\n    <div>\n      <span class=\"user-bell\"></span>\n      <span class=\"ilmoitusten-m\xE4\xE4r\xE4\"></span>\n    </div>\n    <span class=\"user-folders\"></span>\n    <span class=\"search-icon\"></span>        \n  </div>\n  ";

var UserInfo = /*#__PURE__*/function (_HTMLElement) {
  _inherits(UserInfo, _HTMLElement);

  var _super = _createSuper(UserInfo);

  function UserInfo() {
    var _this;

    _classCallCheck(this, UserInfo);

    _this = _super.call(this);

    _this.attachShadow({
      mode: 'open'
    });

    _this.shadowRoot.appendChild(template.content.cloneNode(true));

    _this.shadowRoot.querySelector('.user-info__details').innerText = _this.getAttribute('name');

    _this.shadowRoot.querySelector('.user-icon').setAttribute('class', "".concat(_icons.default['User']));

    _this.shadowRoot.querySelector('.ilmoitusten-määrä').innerText = _this.getAttribute('ilmoitukset');

    _this.shadowRoot.querySelector('.user-bell').setAttribute('class', "".concat(_icons.default['Ilmoitukset']));

    _this.shadowRoot.querySelector('.user-folders').setAttribute('class', "".concat(_icons.default['Folders']));

    _this.shadowRoot.querySelector('.search-icon').setAttribute('class', "".concat(_icons.default['Search']));

    return _this;
  }

  _createClass(UserInfo, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var iconStyles = document.querySelector('link[href*="fontawesome"]');

      if (iconStyles) {
        this.shadowRoot.appendChild(iconStyles.cloneNode());
      }
    }
  }]);

  return UserInfo;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

exports.UserInfo = UserInfo;
},{"./icons.js":"components/icons.js"}],"components/externalLibs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fontAwesomeStyles = exports.bootstrapStyles = void 0;
var bootstrapStyles = "<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\"\nintegrity=\"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh\" crossorigin=\"anonymous\">";
exports.bootstrapStyles = bootstrapStyles;
var fontAwesomeStyles = "<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.7.1/css/all.css\"\nintegrity=\"sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr\" crossorigin=\"anonymous\">";
exports.fontAwesomeStyles = fontAwesomeStyles;
},{}],"components/sideMenu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideMenu = void 0;

var _icons = _interopRequireDefault(require("./icons.js"));

var _externalLibs = require("./externalLibs.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var bootstrapListItemClass = '<a href="#" class="list-group-item list-group-item-action" style="background-color: #f5f5f5">';
var kirjastoActive = '<a href="#" class="list-group-item active disabled border-dark bg-dark">';

var SideMenu = /*#__PURE__*/function (_HTMLElement) {
  _inherits(SideMenu, _HTMLElement);

  var _super = _createSuper(SideMenu);

  function SideMenu() {
    var _this;

    _classCallCheck(this, SideMenu);

    _this = _super.call(this);
    _this.shadow = _this.attachShadow({
      mode: "open"
    });
    return _this;
  }

  _createClass(SideMenu, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "heading",
    get: function get() {
      return this.getAttribute("heading");
    }
  }, {
    key: "data",
    get: function get() {
      var data = this.getAttribute("menu-items").split(",");
      var listItems = data.map(function (el) {
        return el === 'Kirjasto' ? "".concat(kirjastoActive, "<i class='").concat(_icons.default[el], "'></i> ").concat(el, "</a>") : "".concat(bootstrapListItemClass, "<i class='").concat(_icons.default[el], "'></i> ").concat(el, "</a>");
      });
      return listItems.join(" ");
    }
  }, {
    key: "render",
    value: function render() {
      this.shadow.innerHTML = "\n    \n\n    ".concat(_externalLibs.bootstrapStyles, "\n    ").concat(_externalLibs.fontAwesomeStyles, "\n    \n    <style>\n    .side-menu__heading {\n      text-transform: uppercase;\n      font-size: 26px;\n      letter-spacing: 1.5px;\n    }\n    .list-group-item {\n      border-left: none;\n      border-right: none;\n      border-top: 1px solid #ddd;\n    }\n    .list-group-item:hover {\n      color: black;\n    }\n    </style>\n\n\n    <div class=\"container p-0 pb-2\">\n      <h2 class=\"side-menu__heading pl-2 pt-1 pb-2\">").concat(this.heading, "</h2>\n      <div class=\"list-group\">").concat(this.data, "</div>\n    </div>\n    ");
    }
  }]);

  return SideMenu;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)); // window.customElements.define("side-menu", SideMenu);


exports.SideMenu = SideMenu;
},{"./icons.js":"components/icons.js","./externalLibs.js":"components/externalLibs.js"}],"components/defaultHTML.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var defaultHTML = "\n<h2 class=\"article__title pt-1 mb-3\">Tulipalot</h2>\n        <div class=\"article__info d-flex justify-content-between p-1\">\n          <div class=\"arcticle__details d-flex\">\n            <div class=\"article__author pl-2\">Makke <em>\"Jekke\"</em> Peippaja</div>\n            <div class=\"article__details--separator pr-1 pl-1\">|</div>\n            <div class=\"article__date\">7.2.2020</div>\n          </div>\n          <div class=\"d-flex article__feedback pr-2\">\n            <div class=\"article__feedback--likes pr-2\"><i class=\"fas fa-thumbs-up pr-2\"></i>102</div>\n            <div class=\"article__feedback--comments pr-2\"><i class=\"fas fa-comments pr-2\"></i>7</div>\n          </div>\n        </div>\n        <img class=\"article__image img-fluid float-left pt-3 pr-3\"\n          src=\"https://images.unsplash.com/photo-1434139240289-56c519f77cb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80\" alt=\"Dark hill under fiery sky\">\n        <p class=\"pt-3 pr-3\">Jukolan talo, etel\xE4isess\xE4 H\xE4meess\xE4, seisoo er\xE4\xE4n m\xE4en pohjoisella rinteell\xE4, liki\n          Toukolan kyl\xE4\xE4. Sen\n          l\xE4heisin ym\xADp\xE4rist\xF6 on kivinen tanner, mutta alempana alkaa pellot, joissa, ennenkuin talo oli h\xE4vi\xF6\xF6n\n          mennyt, aaltoili ter\xE4inen vilja. Peltojen alla on niittu, apila\xE4yr\xE4inen, halkileikkaama monipolvisen\n          ojan; ja runsaasti antoi se heini\xE4, ennenkuin joutui laitumeksi kyl\xE4n karjalle. Muutoin on talolla\n          avaria metsi\xE4, soita ja er\xE4maita, jotka, t\xE4m\xE4n tilustan ensimm\xE4isen perustajan oivallisen toiminnan\n          kautta, olivat langenneet sille osaksi jo ison jaon k\xE4ydess\xE4 entisin\xE4 aikoina. Silloinpa Jukolan is\xE4nt\xE4,\n          pit\xE4en enemm\xE4n huolta j\xE4lkeentulevainsa edusta kuin omasta parhaastansa, otti vastaan osaksensa kulon\n          polttaman mets\xE4n ja sai sill\xE4 keinolla seitsem\xE4n vertaa enemm\xE4n kuin toiset naapurinsa. Mutta kaikki\n          kulovalkean j\xE4ljet olivat jo kadonneet h\xE4nen piirist\xE4ns\xE4 ja tuuhea mets\xE4 kasvanut sijaan. - Ja t\xE4m\xE4 on\n          niiden seitsem\xE4n veljen koto, joiden el\xE4m\xE4nvaiheita t\xE4ss\xE4 nyt k\xE4yn kertoilemaan.</p>\n        \n        <p class=\"pt-0 mb-4 pr-3\">Veljesten nimet vanhimmasta nuorimpaan ovat: Juhani, Tuomas, Aapo, Simeoni, Timo,\n          Lauri ja Eero. Ovat\n          heist\xE4 Tuomas ja Aapo kaksoispari ja samoin Timo ja Lauri. Juhanin, vanhimman veljen, ik\xE4 on\n          kaksikymment\xE4 ja viisi vuotta, mutta Eero, nuorin heist\xE4, on tuskin n\xE4hnyt kahdeksantoista auringon\n          kierrosta. Ruumiin vartalo heill\xE4 on tukeva ja harteva, pituus kohtalainen, paitsi Eeron, joka viel\xE4 on\n          kovin lyhyt. Pisin heist\xE4 kaikista on Aapo, ehk\xE4 ei suinkaan hartevin. T\xE4m\xE4 j\xE4lkimm\xE4inen etu ja kunnia\n          on Tuomaan, joka oikein on kuuluisa hartioittensa levyyden t\xE4hden. Omituisuus, joka heit\xE4 kaikkia\n          yhteisesti merkitsee, on heid\xE4n ruskea ihonsa ja kankea, hampunkarvainen tukkansa, jonka karheus etenkin\n          Juhanilla on silm\xE4\xE4n pist\xE4v\xE4.</p>\n        \n        <blockquote class=\"blockquote\">\n          <div class=\"border-top mx-auto mb-2\" style=\"width: 23%;\"></div>\n          <p class=\"mx-auto text-center font-italic w-60 pt-1 mb-0\" style=\"font-size: 24px;\">Veljesten nimet vanhimmasta nuorimpaan ovat:<br>\n            Juhani, Tuomas, Aapo, Simeoni, Timo, Lauri\n            ja Eero.</p>\n          <div class=\"border-top mx-auto mt-3\" style=\"width: 23%;\"></div>\n        </blockquote>\n        \n        <p class=\"pt-2 pr-3\">Heid\xE4n is\xE4\xE4ns\xE4, joka oli ankaran innokas mets\xE4mies, kohtasi h\xE4nen parhaassa i\xE4ss\xE4\xE4n\n          \xE4kisti surma, kun h\xE4n tappeli \xE4ke\xE4n karhun kanssa. Molemmat silloin, <strong>niin mets\xE4n kontio kuin mies, l\xF6yttiin\n            kuolleina</strong>, toinen toisensa rinnalla maaten verisell\xE4 tanterella. Pahoin oli mies haavoitettu, mutta pedonkin sek\xE4\n          kurkku ett\xE4 kylki n\xE4htiin puukon viilt\xE4m\xE4n\xE4 ja h\xE4nen rintansa kiv\xE4\xE4rin tuiman luodin l\xE4vist\xE4m\xE4n\xE4. Niin\n          lopetti p\xE4iv\xE4ns\xE4 roteva mies, joka oli kaatanut enemm\xE4n kuin viisikymment\xE4 karhua. \xAD Mutta n\xE4iden\n          mets\xE4retkiens\xE4 kautta l\xF6i h\xE4n laimin ty\xF6n ja toimen talossansa, joka v\xE4hitellen, ilman esimiehen johtoa,\n          joutui rappiolle. Eiv\xE4t kyenneet h\xE4nen poikansakaan kynt\xF6\xF6n ja kylv\xF6\xF6n; sill\xE4 olivatpa he perineet\n          is\xE4lt\xE4ns\xE4 saman voimallisen innon mets\xE4otusten pyynt\xF6\xF6n. He rakentelivat satimia, loukkuja, ansaita ja\n          teerentarhoja surmaksi linnuille ja j\xE4niksille. Niin viettiv\xE4t he poikuutensa ajat, kunnes rupesivat\n          k\xE4sittelem\xE4\xE4n tuliluikkua ja rohkenivat l\xE4hesty\xE4 otsoa korvessa.</p>\n        <p class=\"pt-1 pr-3\">\xC4iti kyll\xE4 koetti sek\xE4 nuhteilla ett\xE4 kurilla saattaa heit\xE4 ty\xF6h\xF6n ja ahkeruuteen,\n          mutta heid\xE4n\n          uppiniskaisuutensa oli j\xE4ykk\xE4 vastus kaikille h\xE4nen yrityksillens\xE4. Oli h\xE4n muutoin kelpo vaimo;\n          tunnettu oli h\xE4nen suora ja vilpit\xF6n ehk\xE4 hieman jyrkk\xE4 mielens\xE4. Kelpo mies oli my\xF6s h\xE4nen veljens\xE4,\n          poikien oiva eno, joka nuoruudessaan oli uljaana merimiehen\xE4, purjehtinut kaukaiset meret, n\xE4hnyt monta\n          kansaa ja kaupunkia; mutta n\xE4k\xF6ns\xE4p\xE4 kadotti h\xE4n viimein, k\xE4yden umpisokeaksi, ja vietti ik\xE4ns\xE4 pime\xE4t\n          p\xE4iv\xE4t Jukolan talossa. H\xE4n silloin usein, veistellen tunteensa viittauksen mukaan kauhoja, lusikoita,\n          kirvesvarsia, kurikkoja ja muita huoneessa tarpeellisia kaluja, kertoili sisarensa pojille tarinoita ja\n          merkillisi\xE4 asioita sek\xE4 omasta maasta ett\xE4 vieraista valtakunnista, kertoili my\xF6s ihmeit\xE4 ja tapauksia\n          raamatusta. N\xE4it\xE4 h\xE4nen jutelmiansa kuultelivat pojat kaikella hartaudella ja painoivat lujasti\n          muistoonsa. Mutta yht\xE4 mieluisasti eiv\xE4t he kuullelleetkaan \xE4itins\xE4 k\xE4skyj\xE4 ja nuhteita, vaan olivatpa\n          kovakorvaisia vallan, huolimatta monestakaan pieksi\xE4isl\xF6ylyst\xE4. Useinpa kyll\xE4, huomatessaan selk\xE4saunan\n          l\xE4hestyv\xE4n, vilkasi veliparvi karkutielle, saattaen t\xE4m\xE4n kautta sek\xE4 \xE4itillens\xE4 ett\xE4 muille murhetta ja\n          kiusaa, ja sill\xE4 omaa asiaansa pahentaen.</p>";
var _default = defaultHTML;
exports.default = _default;
},{}],"components/mainArticle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainArticle = void 0;

var _defaultHTML = _interopRequireDefault(require("./defaultHTML.js"));

var _externalLibs = require("./externalLibs.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var contentNavBar = document.querySelector("content-nav");
var mainArticleDiv = document.querySelector("main-article");
var customStyle = "\n    <style>\n        .article__image {\n            width: 40%;\n          }\n        .article__info {\n            background-color: #f5f5f5;\n            border: 1px solid #ddd;\n        }\n        .article__title {\n            font-size: 2.5em;\n        }\n  </style>\n";
contentNavBar.addEventListener("click", function (event) {
  var eventProvider = event.composedPath()[0].innerText;
  mainArticleDiv.setAttribute("value", eventProvider);
  contentNavBar.setAttribute("current-page", eventProvider);
});
var url = "https://api.hel.fi/linkedevents/v1/event/?start=now&end=today";

var MainArticle = /*#__PURE__*/function (_HTMLElement) {
  _inherits(MainArticle, _HTMLElement);

  var _super = _createSuper(MainArticle);

  function MainArticle() {
    var _this;

    _classCallCheck(this, MainArticle);

    _this = _super.call(this);
    _this.shadow = _this.attachShadow({
      mode: "open"
    });
    return _this;
  }

  _createClass(MainArticle, [{
    key: "value",
    get: function get() {
      return this.getAttribute("value");
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(propName, oldValue, newValue) {
      if (propName === "value") {
        this.render();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.value !== "Tulipalot") {
        fetch(url).then(function (response) {
          return response.json();
        }).then(function (json) {
          json.data.find(function (el) {
            if (el.provider && el.name && el.description) {
              if (el.provider.fi === _this2.value) {
                // if there is a valid event by a specified provider, render it
                // otherwise render the default text
                _this2.shadow.innerHTML = "\n                ".concat(_externalLibs.bootstrapStyles, "\n                ").concat(_externalLibs.fontAwesomeStyles, "\n                ").concat(customStyle, "\n\n                <h2 class=\"article__title pt-1 mb-3\">").concat(el.name.fi, "</h2>\n                <div class=\"article__info d-flex justify-content-between p-2\">\n                  <div class=\"arcticle__details d-flex\">\n                    <div class=\"article__author pl-2\">").concat(el.provider.fi, "</div>\n                    <div class=\"article__details--separator pr-1 pl-1\">|</div>\n                    <div class=\"article__date\">").concat(new Date(el.start_time).toLocaleDateString(), "</div>\n                  </div>\n                  <div class=\"d-flex article__feedback pr-2\">\n                    <div class=\"article__feedback--likes pr-2\"><i class=\"fas fa-thumbs-up pr-2\"></i>0</div>\n                    <div class=\"article__feedback--comments pr-2\"><i class=\"fas fa-comments pr-2\"></i>0</div>\n                  </div>\n                </div>\n                <img class=\"article__image img-fluid float-left pt-3 pr-3\"\n                     src=\"").concat(el.images[0].url, "\" alt=\"").concat(el.images[0].alt_text, "\">\n                ").concat(el.description.fi);
              }
            }
          });
        });
      } // otherwise render the default article


      if (this.value === "Tulipalot" || this.value === null) {
        this.shadow.innerHTML = "\n        ".concat(_externalLibs.bootstrapStyles, "\n        ").concat(_externalLibs.fontAwesomeStyles, "\n        ").concat(customStyle, "\n        ").concat(_defaultHTML.default, "\n        ");
      }
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ["value"];
    }
  }]);

  return MainArticle;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

exports.MainArticle = MainArticle;
},{"./defaultHTML.js":"components/defaultHTML.js","./externalLibs.js":"components/externalLibs.js"}],"components/contentNav.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentNav = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// Tämä on <content-nav> web komponenti, joka toimii sivuston nav-bar:ina
// Se hakee API.hel.fi:lta ajankohtaisia tapahtumia ja listaa niiden järjestäjän nimet sivu palstalla 
var url = "https://api.hel.fi/linkedevents/v1/event/?start=now&end=today";
var bootstrapListItemClass = "\n  <a href=\"#\" class=\"list-group-item list-group-item-action navigation-item\" \n              style=\"background-color: #f5f5f5\"\n  >";
var template = document.createElement("template");
var customStyles = "\n  <style>\n    .list-group-item {\n      border-left: none;\n      border-right: none;\n      border-top: 1px solid #ddd;\n      padding: 6px 12px;\n    }\n    .list-group-item:hover {\n      color: black;\n    }\n\n  </style>";
var bootstrapStyles = "\n  <link rel=\"stylesheet\"\n        href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\"\n        integrity=\"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh\" \n        crossorigin=\"anonymous\"\n  >";
var defaultItem = "\n  <a href=\"#\" \n     class=\"font-weight-bold text-light bg-dark list-group-item list-group-item-action navigation-item\"\n     style=\"background-color: #f5f5f5\"\n  >Tulipalot</a>\n";

var ContentNav = /*#__PURE__*/function (_HTMLElement) {
  _inherits(ContentNav, _HTMLElement);

  var _super = _createSuper(ContentNav);

  function ContentNav() {
    var _this;

    _classCallCheck(this, ContentNav);

    _this = _super.call(this);
    _this.shadow = _this.attachShadow({
      mode: "open"
    });
    return _this;
  }

  _createClass(ContentNav, [{
    key: "current",
    get: function get() {
      return this.getAttribute("current-page");
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(propName, oldValue, newValue) {
      if (propName === "current-page" && oldValue !== null) {
        var listItems = this.shadow.querySelectorAll('.list-group-item');
        var currentItem = this.shadow.querySelector('.bg-dark');
        currentItem.classList.remove('bg-dark');
        currentItem.classList.remove('font-weight-bold');
        currentItem.classList.remove('text-light');
        listItems.forEach(function (el) {
          if (el.innerText === newValue) {
            el.className += 'font-weight-bold text-light bg-dark';
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var eventProviders = {};
      var itemsToRender = [];
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.data.forEach(function (el) {
          if (el.provider && el.name && el.description) {
            if (!eventProviders[el.provider.fi]) {
              eventProviders[el.provider.fi] = true;
              itemsToRender.push("".concat(bootstrapListItemClass).concat(el.provider.fi, "</a>"));
            }
          }

          var item1 = itemsToRender[0],
              item2 = itemsToRender[1],
              restItems = itemsToRender.slice(2);
          _this2.shadow.innerHTML = "\n             ".concat(bootstrapStyles, "\n             ").concat(customStyles, "   \n\n                <div class=\"content-nav__container container p-0\">\n                  <div class=\"content-nav__list-group list-group mr-4 pr-1\">\n                    ").concat(item1, "\n                    ").concat(item2, "\n                    ").concat(defaultItem, " \n                    ").concat(restItems.join(''), "   \n                   </div>\n                </div>");
        });
      });
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ["current-page"];
    }
  }]);

  return ContentNav;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

exports.ContentNav = ContentNav;
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _userInfo = require("./components/userInfo.js");

var _sideMenu = require("./components/sideMenu.js");

var _mainArticle = require("./components/mainArticle.js");

var _contentNav = require("./components/contentNav.js");

require("./style.scss");

window.customElements.define('user-info', _userInfo.UserInfo);
window.customElements.define("side-menu", _sideMenu.SideMenu);
window.customElements.define("main-article", _mainArticle.MainArticle);
window.customElements.define("content-nav", _contentNav.ContentNav);
},{"./components/userInfo.js":"components/userInfo.js","./components/sideMenu.js":"components/sideMenu.js","./components/mainArticle.js":"components/mainArticle.js","./components/contentNav.js":"components/contentNav.js","./style.scss":"style.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52971" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map