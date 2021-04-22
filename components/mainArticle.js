// Tämä on <main-article> web komponenti, joka piirrä sekä 'default' että ulkoisten tideostojen tekstit, 
// Kommponetti saa <content-nav> muutokset ja niiden perusteella:
// - hakee API.hel.fi:lta tapahtumien tiedot
// - pirrä ne sivustolle

import defaultHTML from './defaultHTML.js';
import { bootstrapStyles, fontAwesomeStyles} from './externalLibs.js';

const contentNavBar = document.querySelector("content-nav");
const mainArticleDiv = document.querySelector("main-article");


const customStyle = `
    <style>
        .article__image {
            width: 40%;
          }
        .article__info {
            background-color: #f5f5f5;
            border: 1px solid #ddd;
        }
        .article__title {
            font-size: 2.5em;
        }
  </style>
`;

contentNavBar.addEventListener("click", (event) => {
  const eventProvider = event.composedPath()[0].innerText;
  mainArticleDiv.setAttribute("value", eventProvider);
  contentNavBar.setAttribute("current-page", eventProvider);

});

const url = "https://api.hel.fi/linkedevents/v1/event/?start=now&end=today";

class MainArticle extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["value"];
  }

  get value() {
    return this.getAttribute("value");
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(propName, oldValue, newValue) {
    if (propName === "value") {
      this.render();
    }
  }
  render() {
    console.log(this.value)
    if (this.value !== "Tulipalot") {
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          json.data.find((el) => {
            if (el.provider && el.name && el.description) {
              if (el.provider.fi === this.value) {
                this.shadow.innerHTML = `
                ${bootstrapStyles}
                ${fontAwesomeStyles}
                ${customStyle}

                <h2 class="article__title pt-1 mb-3">${el.name.fi}</h2>
                <div class="article__info d-flex justify-content-between p-2">
                  <div class="arcticle__details d-flex">
                    <div class="article__author pl-2">${el.provider.fi}</div>
                    <div class="article__details--separator pr-1 pl-1">|</div>
                    <div class="article__date">${new Date(el.start_time).toLocaleDateString()}</div>
                  </div>
                  <div class="d-flex article__feedback pr-2">
                    <div class="article__feedback--likes pr-2"><i class="fas fa-thumbs-up pr-2"></i>0</div>
                    <div class="article__feedback--comments pr-2"><i class="fas fa-comments pr-2"></i>0</div>
                  </div>
                </div>
                <img class="article__image img-fluid float-left pt-3 pr-3"
                     src="${el.images[0].url}" alt="${el.images[0].alt_text}">
                ${el.description.fi}`;
              }
            }
          });
        });
      }

      // otherwise render the default article

      if (this.value === "Tulipalot" || this.value === null) {
        this.shadow.innerHTML = `
        ${bootstrapStyles}
        ${fontAwesomeStyles}
        ${customStyle}
        ${defaultHTML}
        `;

    } 
  }
}

window.customElements.define("main-article", MainArticle);
