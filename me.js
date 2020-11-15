let divmenu = document.getElementById('menu');

divmenu.innerHTML += '<nav><ul>'+
'<li><a href="https://gus25.github.io/w1/">Inicio</a>'+
 '<li><a href="#">grupos</a><ul>';
 
for (var k = 1 ; k <= 35; k++) {

	divmenu.innerHTML += '<li><a href="https://gus25.github.io/w1/g'+k+'.html">grupo'+k+'</a></li>';
}
divmenu.innerHTML +='</ul> </li></ul> </nav>';
