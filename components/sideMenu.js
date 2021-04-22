// Tämä on <side-menu> web komponenti, joka tuottaa sivuston sisäiset navigointi palstoja
//  

import fontAwesomeIcons from "./icons.js";

const bootstrapListItemClass =
  '<a href="#" class="list-group-item list-group-item-action" style="background-color: #f5f5f5">';
const kirjastoActive = 
  '<a href="#" class="list-group-item active disabled border-dark bg-dark">'

const bootstrapStyles = `<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">`;
const fontAwesomeStyles = `<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">`;

class SideMenu extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  get heading() {
    return this.getAttribute("heading");
  }

  get data() {
    const data = this.getAttribute("menu-items").split(",");
    const listItems = data.map(
      (el) => {
        return el === 'Kirjasto' ?
         `${kirjastoActive}<i class='${fontAwesomeIcons[el]}'></i> ${el}</a>` :
         `${bootstrapListItemClass}<i class='${fontAwesomeIcons[el]}'></i> ${el}</a>`;
      }
    );
    return listItems.join(" ");
  }

  render() {
    this.shadow.innerHTML = `
    

    ${bootstrapStyles}
    ${fontAwesomeStyles}
    
    <style>
    .side-menu__heading {
      text-transform: uppercase;
      font-size: 26px;
      letter-spacing: 1.5px;
    }
    .list-group-item {
      border-left: none;
      border-right: none;
      border-top: 1px solid #ddd;
    }
    .list-group-item:hover {
      color: black;
    }
    </style>


    <div class="container p-0 pb-2">
      <h2 class="side-menu__heading pl-2 pt-1 pb-2">${this.heading}</h2>
      <div class="list-group">${this.data}</div>
    </div>
    `;
  }
}

window.customElements.define("side-menu", SideMenu);
