
import avatar from './picture.jpg';
// import './index.css';
let src = avatar;
var img = new Image();
img.src = src ;
// img.classList.add('avatar');

var root = document.getElementById('root');

root.append(img);

var dom = document.getElementById('root');
var header = document.createElement('div');
header.innerText = 'header';
dom.append(header);







