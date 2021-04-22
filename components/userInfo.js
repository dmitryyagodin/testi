import fontAwesomeIcons from './icons.js';

const template = document.createElement('template');
template.innerHTML = `
  <style>
  .header__user-info {
    color: #fff;
    line-height: 3em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 250px;
  }
  
  </style>

  <div class="header__user-info">
    <div>
      <span class="user-icon"></span>
      <span class="user-info__details"></span>
    </div>
    <div>
      <span class="user-bell"></span>
      <span class="ilmoitusten-määrä"></span>
    </div>
    <span class="user-folders"></span>
    <span class="search-icon"></span>        
  </div>
  `;

class UserInfo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('.user-info__details').innerText = this.getAttribute('name');
    this.shadowRoot.querySelector('.user-icon').setAttribute('class', `${fontAwesomeIcons['User']}`);
    this.shadowRoot.querySelector('.ilmoitusten-määrä').innerText = this.getAttribute('ilmoitukset'); 
    this.shadowRoot.querySelector('.user-bell').setAttribute('class', `${fontAwesomeIcons['Ilmoitukset']}`)
    this.shadowRoot.querySelector('.user-folders').setAttribute('class', `${fontAwesomeIcons['Folders']}`)
    this.shadowRoot.querySelector('.search-icon').setAttribute('class', `${fontAwesomeIcons['Search']}`)
  }
  
  connectedCallback() {
    const iconStyles = document.querySelector('link[href*="fontawesome"]');
    
    if (iconStyles) {
      this.shadowRoot.appendChild(iconStyles.cloneNode());
    }
  }

}

window.customElements.define('user-info', UserInfo);