import _ from 'lodash';
import './style.css';
import BgImage from './1.png'
import data from './data.json'
function component() {
  const element = document.createElement('div');
  const bg = new Image();
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  bg.width = 20
  bg.height =20
  bg.src = BgImage;
  element.appendChild(bg)
  const auth = document.createElement('div');
  auth.innerText = data.name +'------>' + data.job;
  element.appendChild(auth)
  return element;
}

document.body.appendChild(component());