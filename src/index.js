// ES Moudule 模块引入方式
// import Header from './header';
// import Sidebar from './sidebar';
// import Content from './content';
// var dom = document.getElementById('root');
let Content = require('./content.js');
let Header = require('./header.js');
let Sidebar = require('./sidebar.js');
// let picture = require('./picture.jpg');

new Content();
new Header();
new Sidebar();



