import { UserInfo } from './components/userInfo.js';
import { SideMenu } from './components/sideMenu.js';
import { MainArticle} from './components/mainArticle.js';
import { ContentNav} from './components/contentNav.js';
import './style.scss';


window.customElements.define('user-info', UserInfo);
window.customElements.define("side-menu", SideMenu);
window.customElements.define("main-article", MainArticle);
window.customElements.define("content-nav", ContentNav);