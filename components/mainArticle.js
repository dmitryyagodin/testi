const url = 'https://api.hel.fi/linkedevents/v1/event/?start=now&end=today';
const template = document.createElement('template');

template.innerHTML = '<div class="main-article></div>';

class MainArticle extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: 'open'});
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
      const shadow = this.shadowRoot.querySelector('.main_article');
      
      let eventProviders = {};
  
      fetch(url)
        .then(response => response.json())
        .then(json => {
          json.data.forEach((el) => {
            if (el.provider && el.name && el.description) {
              if (!eventProviders[el.provider.fi]) {
                eventProviders[el.provider.fi] = true;
                shadow.innerHTML += `${bootstrapListItemClass}${el.provider.fi}</a>`;
              }       
            }
          });
      })
    }
}
  
    
window.customElements.define('main-article', MainArticle);