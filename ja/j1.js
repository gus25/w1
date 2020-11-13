
let div1 = document.getElementById('titulogrupo1');

 
for (var k = 1 ; k <= 35; k++) {

	div1.innerHTML += 
    '<div class="imagen"><img alt="" id="img'+k+'" width="100%" /></div>'+
	'<div class="nombregrupo"><a id="a'+k+'" width="auto"> </a></div>';  
 }  
