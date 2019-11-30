var div = document.createElement('div');
div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';
document.body.append(div);
var swd = div.offsetWidth - div.clientWidth
div.remove();
return swd;