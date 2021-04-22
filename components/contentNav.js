const url = 'https://api.hel.fi/linkedevents/v1/event/?start=now&end=today';
const bootstrapListItemClass = '<a href="#" class="list-group-item list-group-item-action navigation-item" style="background-color: #f5f5f5">';
const template = document.createElement('template');


template.innerHTML = `
  <style>
  .list-group-item {
    border-left: none;
    border-right: none;
    border-top: 1px solid #ddd;
  }
  .list-group-item:hover {
    color: black;
  }
  
  </style>
  
  <div class="container p-0">
    <div class="list-group">
    <a href="#" class="text-light bg-dark list-group-item list-group-item-action">Tulipalot</a>    
    </div>
  </div>
  `;

class ContentNav extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const shadow = this.shadowRoot.querySelector('.list-group');
    
    const bootstrapStyles = document.querySelector('link[href*="bootstrap"]');
    if (bootstrapStyles) {
      this.shadowRoot.appendChild(bootstrapStyles.cloneNode());
    }

    let eventProviders = {};

    fetch(url)
      .then(response => response.json())
      .then(json => {
        json.data.forEach((el) => {
          console.log(el.provider)
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

window.customElements.define('content-nav', ContentNav);