import './index.css'
import 'pixi.js'
const appContainer = document.getElementById('app');
var pa = new PIXI.Application(appContainer.getBoundingClientRect().width, appContainer.getBoundingClientRect().height, {antialias: true, backgroundColor: 0xeeeeee});
appContainer.appendChild(pa.view);
