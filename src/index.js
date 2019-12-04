import _ from 'lodash';
import './style.css';
import BgImage from './1.png'

function component() {
  const element = document.createElement('div');
  const bg = new Image();
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  bg.src = BgImage;
  element.appendChild(bg)
  return element;
}

document.body.appendChild(component());