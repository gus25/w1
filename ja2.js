//let n=1; 
  
  
let div1 = document.getElementById('contenedor1');

 
for (var k = 1 ; k <= 63; k++) {

	div1.innerHTML += 
    '<div class="numero" id="num'+k+'">'+k+'</div>'+
    '<div class="imagen"><img id="img'+k+'" alt="" width="100%" ></div>'+
    '<div class="texto" id="txt'+k+'" ></div>'+
    '<div class="cbox"><input class="unpresed" id="checkbox'+n+'#'+k+'" type="checkbox" onClick="clickboton('+k+')"></div>';

 }   
  
  
  

function clickboton(i) { 
    //var cbox = "checkbox"+i;      
    var checkbox = document.getElementById("checkbox"+n+"#"+i);
    localStorage.setItem("checkbox"+n+"#"+i, checkbox.checked);  
  
  
  
  if (document.getElementById("checkbox"+n+"#"+i).checked == true)
  {
    var hoy = new Date();
  	var dia = hoy.getDate();
  	var mes = hoy.getMonth() + 1;
    
    localStorage.setItem("diachecked"+n+"#"+i,dia);
  	localStorage.setItem("meschecked"+n+"#"+i,mes);
    
  	//console.log("diacheckedu"+i+dia);
  }	
  else
  {
  	
  }   
  
 
  
}
  
  
var hoy = new Date();
var dia = hoy.getDate();
var mes = hoy.getMonth() + 1;  
  
for (var j = 1; j <= 63; j++) {
  
	var checked = JSON.parse(localStorage.getItem("checkbox"+n+"#"+j));
    if (checked == true)
    {
    	document.getElementById("checkbox"+n+"#"+j).checked = true;

      
  	}
  	else
    {
    
    	document.getElementById("checkbox"+n+"#"+j).checked = false;
    } 
  
  
	if (checked == true)
    {
          

          
        var diachecked = localStorage.getItem('diachecked'+n+'#'+j);
        var meschecked = localStorage.getItem('meschecked'+n+'#'+j);
          
          
    	if (meschecked == mes)
        {
         	if ( (dia - diachecked) > 10)
            {
              	localStorage.setItem("checkbox"+n+"#"+j,false);
                
            }  
            
        }
        else if (Math.abs(meschecked-mes)==1)
        {
          	//if ( ( (dia + 31) - diachecked ) > 10)
          	if (((31-diachecked)+dia)>10) 
            {
             	localStorage.setItem("checkbox"+n+"#"+j,false);
                
            }             
            
        }
      	else if (Math.abs(meschecked-mes)>1)
        {
        	localStorage.setItem("checkbox"+n+"#"+j,false);	
        
        }  
      
      
    		//console.log("dia"+j+"="+localStorage.getItem('diachecked'+n+'#'+j) );
      		//console.log("mes"+j+"="+localStorage.getItem('meschecked'+n+'#'+j) );
    }  
  
  
}

document.getElementById("img1").src= "im/v1.png"; 
document.getElementById("txt1").innerHTML = "➡✅Como Hacer un Cautin Casero con Transformador‼️😮✅<br>"+
  

  
document.getElementById("img2").src= "im/v2.png"; 
document.getElementById("txt2").innerHTML =  "✅💥Como amplificar la señal de tu celular con simple truco‼️😮<br>"+

  
document.getElementById("img3").src= "im/v3.png";
document.getElementById('txt3').innerHTML ="💥Haz tu propio cautin casero, te puede salvar de un apuro‼️😮💥<br>"+

  
document.getElementById("img4").src= "im/v4.png"; 
document.getElementById('txt4').innerHTML ="✅💥Como evitar que las lamparas parpadeen, aquí te explico!💥💡😮 <br>"+
 
  
  
document.getElementById("img5").src= "im/v5.png"; 
document.getElementById('txt5').innerHTML ="🔌💥Como hacer un Cargador de Batería con transformador‼️💥✅<br>"+
  

document.getElementById("img6").src= "im/v6.png";
document.getElementById('txt6').innerHTML = "✅Como lograr que un foco LED dure 50 años!‼️💥😮<br />"+

  
document.getElementById("img7").src= "im/v7.png";
document.getElementById('txt7').innerHTML = "✅💥10 cosas que puedes hacer con teléfonos celulares viejos‼️💥😮<br />"+

  
document.getElementById("img8").src= "im/v8.png";
document.getElementById('txt8').innerHTML = "✅💥Como hacer un Inversor de voltaje de 12v a 120v muy fácil‼️💥<br />"+

  
document.getElementById("img9").src= "im/v9.png";
document.getElementById('txt9').innerHTML = "✅💥Como Cargar la Batería de tu auto con un foco!‼️💥<br />"+

  
document.getElementById("img10").src= "im/v10.png";
document.getElementById('txt10').innerHTML = "✅💥Como Hacer un Control de Temperatura para Cautin‼️💥😮<br />"+

  
document.getElementById("img11").src= "im/v11.png";
document.getElementById('txt11').innerHTML =  "✅💥Como hacer un cargador universal de batería de celular‼️💥😮<br />"+

  
document.getElementById("img12").src= "im/v12.png";
document.getElementById('txt12').innerHTML = "✅💥Como hacer el motor mas simple del mundo‼️💥😮<br />"+

  
document.getElementById("img13").src= "im/v13.png";
document.getElementById('txt13').innerHTML = "🔥✅Como encender un foco desde tres lugares diferentes‼️⚡💡👷<br />"+

  
document.getElementById("img14").src= "im/v/v14.png";
document.getElementById('txt14').innerHTML =  "🔥⚠️7 errores en instalaciones eléctricas caseras que debes evitar‼️💥😮<br />"+

  
document.getElementById("img15").src= "im/v15.png";
document.getElementById('txt15').innerHTML ="💥✅Como hacer un amplificador wifi para conectar con redes distantes‼️💥😮<br/>"+

  
document.getElementById("img16").src= "im/v16.png";
document.getElementById('txt16').innerHTML = "💥✅Como hacer una antena wifi super potente‼️💥😮<br />"+

  
document.getElementById("img17").src= "im/v17.png";
document.getElementById('txt17').innerHTML = "💥5 cosas que puedes hacer con un simple foco!💥😁💡🏠<br />"+  

  
document.getElementById("img18").src= "im/v18.png";
document.getElementById('txt18').innerHTML = "💥✅Como convertir un foco LED de 120v a 12v con simple truco‼️💥😮<br />"+

  
document.getElementById("img19").src= "im/v19.png";
document.getElementById('txt19').innerHTML = "👍💥7 errores que debes evitar en instalaciones eléctricas (parte 2)🏠🔌👷<br />"+ 

  
document.getElementById("img20").src= "im/v20.png";
document.getElementById('txt20').innerHTML = "✅💥Como hacer un estabilizador de voltaje casero🏠🔌👷<br />"+

  
document.getElementById("img21").src= "im/v21.png";
document.getElementById('txt21').innerHTML =  "✅Como hallar la fase y el neutro en un toma corriente‼️💥😁💡💯<br />"+ 

  
document.getElementById("img22").src= "im/v22.png";
document.getElementById('txt22').innerHTML = "✅💥Como cargar la batería de tu coche con un cargador de portátil‼️💥😁💯<br />"+ 

  
document.getElementById("img23").src= "im/v23.png";
document.getElementById('txt23').innerHTML ="✅Convierte tu disco duro viejo en una memoria USB de gran capacidad‼️💥😁💯 <br/>"+ 

											
document.getElementById("img24").src= "im/v24.png";
document.getElementById('txt24').innerHTML = "👉✅Como hacer un encendedor eléctrico para la cocina‼️🔥💯<br />"+


document.getElementById("img25").src= "im/v25.png";
document.getElementById('txt25').innerHTML =	"👉✅Ahorrar dinero haciendo reparaciones en casa‼️💥😁💯 <br />"+

											
document.getElementById("img26").src= "im/v26.png";
document.getElementById('txt26').innerHTML = "🔌😮Como hacer un probador de fase estilo bolígrafo‼️👍💥💯 <br />"+

											
document.getElementById("img27").src= "im/v27.png";
document.getElementById('txt27').innerHTML ="✅💥Como hacer una antena wifi de largo alcance fácil en 5 min‼️👍💥💯 <br />"+

											
document.getElementById("img28").src= "im/v28.png";
document.getElementById('txt28').innerHTML ="✅💥Tutorial básico sobre resistencias y capacitores‼️😁💥💯 <br />"+

											
document.getElementById("img29").src= "im/v29.png" ;
document.getElementById('txt29').innerHTML ="✅💥Tutorial de electrónica Inductores y diodos‼️😁💥💯 <br />"+

											
document.getElementById("img30").src= "im/v30.png";
document.getElementById('txt30').innerHTML ="🔌😮✅Por que se dañan los cargadores en el mismo lugar‼️💥💯 <br />"+

											
document.getElementById("img31").src= "im/v31.png";
document.getElementById('txt31').innerHTML ="🔌😮✅Como reparar cargador de celular fácil y gratis‼️💥💯😁<br />"+


document.getElementById("img32").src= "im/v32.png";
document.getElementById('txt32').innerHTML = 	"✅🔌Como hacer empalmes eléctricos de la forma correcta‼️✌️🔧😁<br />"+


document.getElementById("img33").src= "im/v33.png";
document.getElementById('txt33').innerHTML = 	"😮✅Mira que pasa si conecto una memoria usb a un cargador de celular‼️💥💯😁<br />"+

											
document.getElementById("img34").src= "im/v34.png";
document.getElementById('txt34').innerHTML =	"😮✅El secreto que esconden los focos LED! Aquí te explico‼️💥💯😁<br />"+

											
document.getElementById("img35").src= "im/v35.png";
document.getElementById('txt35').innerHTML = 	"😮✅Como hacer un panel solar casero (parte II)‼️💥💯😁<br />"+

											
document.getElementById("img36").src= "im/v36.png";
document.getElementById('txt36').innerHTML =	"✅🔌Tutorial fuentes conmutadas Switching Power Suply‼️✌️😁<br />"+

											
document.getElementById("img37").src= "im/v37.png";
document.getElementById('txt37').innerHTML =	"✅Reparación DVD no lee disco solución muy fácil‼️⚠️💥💯 <br />"+

											
document.getElementById("img38").src= "im/v38.png";
document.getElementById('txt38').innerHTML = 	"✅Como cargar la batería de tu auto en tu casa Muy fácil de hacer‼️🔌💡😮<br />"+

	
											
document.getElementById("img39").src= "im/v39.png";
document.getElementById('txt39').innerHTML = 	"💥✅Como eliminar parpadeo de los focos LED 💡 con simple truco‼️💥😊<br />"+


document.getElementById("img40").src= "im/v40.png";
document.getElementById('txt40').innerHTML =	"💥✅Como hacer un cargador de baterías con una fuente de PC antigua‼️💥😊<br />"+
											

document.getElementById("img41").src= "im/v41.png";
document.getElementById('txt41').innerHTML =	"✅💡Ahorra dinero con este invento, batería Infinita!‼️👀😊 <br />"+
											
											
document.getElementById("img42").src= "im/v42.png";
document.getElementById('txt42').innerHTML = 	"✅👉Como reconocer los cables de cualquier transformador con simple truco‼️😊💯 <br />"+
											
											
document.getElementById("img43").src= "im/v43.png";
document.getElementById('txt43').innerHTML =	"✅👉Que pasa si acerco un imán a un disco duro de una portatil?😮🔥👀 <br />"+
											
											
document.getElementById("img44").src= "im/v44.png";
document.getElementById('txt44').innerHTML =	"💥✅7 errores de diseño que se cometieron en estos equipos‼️😮🔥👀 <br />"+
											
											
document.getElementById("img45").src= "im/v45.png";
document.getElementById('txt45').innerHTML =	"💥✅Como hacer un control de iluminaciòn con ajuste fino‼️😊💯 <br />"+
									
											
											
document.getElementById("img46").src= "im/v46.png";
document.getElementById('txt46').innerHTML =	"💥Como reparar cualquier cargador de celular con simple truco‼️😮✅ <br />"+
									
											
											
document.getElementById("img47").src= "im/v47.png";
document.getElementById('txt47').innerHTML = 	"💥✅Como detectar cables rotos con este ingenioso invento‼️😮✅ <br />"+



document.getElementById("img48").src= "im/v48.png";
document.getElementById('txt48').innerHTML =	"💥✅Como hacer un amplificador de audio super potente 📣 para tu celular‼️😊💯 <br />"+
										
											

document.getElementById("img49").src= "im/v49.png";
document.getElementById('txt49').innerHTML =	"💥Como modificar salida de voltaje de un cargador de celular‼️✅😮 <br />"+
									
											
											
document.getElementById("img50").src= "im/v50.png";
document.getElementById('txt50').innerHTML = 	"💥Que pasa si conectas positivo con negativo por error‼️👀✅😮 <br />"+
										
											
											
document.getElementById("img51").src= "im/v51.png";
document.getElementById('txt51').innerHTML =	"💥Como cambiar componentes de montaje superficial sin usar estación de calor‼️😊💯✅ <br />"+
										
											
											
document.getElementById("img52").src= "im/v52.png";
document.getElementById('txt52').innerHTML =	"💥Ahorra dinero con este invento Batería infinita (parte 2)‼️😊💯💥 <br />"+
									
											
											
document.getElementById("img53").src= "im/v53.png";
document.getElementById('txt53').innerHTML =	"✅💥7 errores que acortan la vida de tu móvil‼️😮💯💥 <br />"+
									
											
											
document.getElementById("img54").src= "im/v54.png";
document.getElementById('txt54').innerHTML =	"✅💥Tutorial Electrónica básica TRANSISTORES‼️😊💯💥 <br />"+
									
											
											
document.getElementById("img55").src= "im/v55.png";
document.getElementById('txt55').innerHTML = 	"✅💥Tutorial electrónica básica REGULADORES‼️😊💯💥 <br />"+



									
											

