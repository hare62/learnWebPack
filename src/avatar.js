import avatar from './picture.jpg';

function createAvatar() {
    var img = new Image();
    img.src = avatar;
    img.classList.add('avatar');

    var root = document.getElementById('root');

    root.append(img);
}

export default createAvatar;