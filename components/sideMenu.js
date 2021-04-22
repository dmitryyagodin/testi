import fontAwesomeIcons from './icons.js';

const bootstrapListItemClass = '<a href="#" class="list-group-item list-group-item-action" style="background-color: #f5f5f5">';

const template = document.createElement('template');

template.innerHTML = `
  <style>
  .side-menu__heading {
    text-transform: uppercase;
    font-size: 26px;
    letter-spacing: 1.5px;
  }
  </style>
  
  <div class="container p-0">
    <h2 class="side-menu__heading"></h2>
    <div class="list-group"></div>
  </div>
  `;

class SideMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    
    // pass the menu heading as h2
    this.shadowRoot.querySelector('h2').innerText = this.getAttribute('heading');
    
    // pass the menu items as an undordered list with corresponding icons
    const data = this.getAttribute('menu-items').split(',');
    const listItems = data.map((el) => `${bootstrapListItemClass}<i class='${fontAwesomeIcons[el]}'></i> ${el}</a>`);
    this.shadowRoot.querySelector('.list-group').innerHTML = listItems.join(' ');
    }

  connectedCallback() {
    const iconStyles = document.querySelector('link[href*="fontawesome"]');
    const bootstrapStyles = document.querySelector('link[href*="bootstrap"]');
    if (iconStyles) {
      this.shadowRoot.appendChild(iconStyles.cloneNode());
    }
    if (bootstrapStyles) {
      this.shadowRoot.appendChild(bootstrapStyles.cloneNode());
    }
  }
}

window.customElements.define('side-menu', SideMenu);