// Tämä on <content-nav> web komponenti, joka toimii sivuston nav-bar:ina
// Se hakee API.hel.fi:lta ajankohtaisia tapahtumia ja listaa niiden järjestäjän nimet sivu palstalla 

const url = "https://api.hel.fi/linkedevents/v1/event/?start=now&end=today";
const bootstrapListItemClass = `
  <a href="#" class="list-group-item list-group-item-action navigation-item" 
              style="background-color: #f5f5f5"
  >`;
const template = document.createElement("template");
const customStyles = `
  <style>
    .list-group-item {
      border-left: none;
      border-right: none;
      border-top: 1px solid #ddd;
      padding: 6px 12px;
    }
    .list-group-item:hover {
      color: black;
    }

  </style>`
const bootstrapStyles = `
  <link rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" 
        crossorigin="anonymous"
  >`;

const defaultItem = `
  <a href="#" 
     class="font-weight-bold text-light bg-dark list-group-item list-group-item-action navigation-item"
     style="background-color: #f5f5f5"
  >Tulipalot</a>
`;

export class ContentNav extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["current-page"];
  }

  get current() {
    return this.getAttribute("current-page");
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(propName, oldValue, newValue) {
    
    if (propName === "current-page" && oldValue !== null) {
      const listItems = this.shadow.querySelectorAll('.list-group-item');
      const currentItem = this.shadow.querySelector('.bg-dark');
      currentItem.classList.remove('bg-dark');
      currentItem.classList.remove('font-weight-bold');
      currentItem.classList.remove('text-light');

      listItems.forEach(el => {
        if (el.innerText === newValue) {
          el.className += 'font-weight-bold text-light bg-dark';
        }
      });
    }
  }

  render() {
    let eventProviders = {};
    let itemsToRender = [];
    

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        json.data.forEach((el) => {
          if (el.provider && el.name && el.description) {
            if (!eventProviders[el.provider.fi]) {
              eventProviders[el.provider.fi] = true;
              itemsToRender.push(`${bootstrapListItemClass}${el.provider.fi}</a>`);
            }
          }

          const [item1, item2, ...restItems] = itemsToRender;
          
          this.shadow.innerHTML = `
             ${bootstrapStyles}
             ${customStyles}   

                <div class="content-nav__container container p-0">
                  <div class="content-nav__list-group list-group mr-4 pr-1">
                    ${item1}
                    ${item2}
                    ${defaultItem} 
                    ${restItems.join('')}   
                   </div>
                </div>`;
        });
      });
  }
}


