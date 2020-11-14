//let n=1; 
  
  
let div1 = document.getElementById('contenedor1');

 
for (var k = 1 ; k <= 55; k++) {

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
  
for (var j = 1; j <= 55; j++) {
  
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
document.getElementById("txt1").innerHTML = "Como Hacer Cargador de Bateria con un Transformador! <br>"+
											"https://youtu.be/RuRDiat6jTw";
   
document.getElementById("img2").src= "im/v2.png"; 
document.getElementById("txt2").innerHTML = "Como Cargar tu Celular con la Batería de tu Auto! <br>"+
											"https://youtu.be/TEtKZ6QsaiU";
  
document.getElementById("img3").src= "im/v3.png";
document.getElementById('txt3').innerHTML ="Como hacer cautin un casero con un transformador! <br>"+
											"https://youtu.be/KyNjEaHtb0c";
  
document.getElementById("img4").src= "im/v4.png"; 
document.getElementById('txt4').innerHTML ="Como Hacer una Linterna LED casera Super Potente en 5 minutos! <br>"+
											"https://youtu.be/ahuhLR84-JY"; 
  
  
document.getElementById("img5").src= "im/v5.png"; 
document.getElementById('txt5').innerHTML ="Como hacer un control de temperatura para cautin con transformador!<br>"+
											"https://youtu.be/wTaSgQr7Bas";  

document.getElementById("img6").src= "im/v6.png";
document.getElementById('txt6').innerHTML = "Como hacer un mini compresor de aire super potente!!<br />"+
											"https://youtu.be/yrgfCPm2Igo";
  
document.getElementById("img7").src= "im/v7.png";
document.getElementById('txt7').innerHTML = "Como hacer un aspirador casero super potente!<br />"+
											"https://youtu.be/HdXVuncV6UE ";
  
document.getElementById("img8").src= "im/v8.png";
document.getElementById('txt8').innerHTML = "Como cargar la bateria de tu auto con dos funetes de PC!<br />"+
											"https://youtu.be/dcVF3cvD7Ss";
  
document.getElementById("img9").src= "im/v9.png";
document.getElementById('txt9').innerHTML = "5 Inventos que puedes hacer con un foco!<br />"+
											"https://youtu.be/o7ou85UB6YQ";
  
document.getElementById("img10").src= "im/v10.png";
document.getElementById('txt10').innerHTML = "Como Hacer Fuente de Voltaje Variable de 1.5v a 15v DC<br />"+
											"https://youtu.be/OLZdhimB-MU";
  
document.getElementById("img11").src= "im/v11.png";
document.getElementById('txt11').innerHTML =  "Como Hacer un Control de Iluminación Temperatura y Velocidad!<br />"+
											"https://youtu.be/qvCW94dLe-g";
  
document.getElementById("img12").src= "im/v12.png";
document.getElementById('txt12').innerHTML = "Como comprobar capacitor dañado con ingenioso invento!<br />"+
											"https://youtu.be/ZA7As6IWkHE";
  
document.getElementById("img13").src= "im/v13.png";
document.getElementById('txt13').innerHTML = "Tutorial de Electrónica #1 Resistencia Electrica<br />"+
												"https://youtu.be/vIKie68laWE";
  
document.getElementById("img14").src= "im/v14.png";
document.getElementById('txt14').innerHTML =  "Tutorial de Electrónica #2 Resistencias de montaje superficial<br />"+
												"https://youtu.be/MF5O-xnPwqc";
  
document.getElementById("img15").src= "im/v15.png";
document.getElementById('txt15').innerHTML ="Como hacer una lampara serie para prueba de corto circuito!<br/>"+
												"https://youtu.be/Dhk_AHE8eNY";
  
document.getElementById("img16").src= "im/v16.png";
document.getElementById('txt16').innerHTML = "Reparación bombilla LED no enciende, aquí te explico que hacer!<br />"+
												"https://youtu.be/l7AjlO8P34g";
  
document.getElementById("img17").src= "im/v17.png";
document.getElementById('txt17').innerHTML = "Aprende a reparar cargadores de celular con este video!<br />"+
												"https://youtu.be/qOtZLY2SZgs";
  
document.getElementById("img18").src= "im/v18.png";
document.getElementById('txt18').innerHTML = "Aprende a reparar focos ahorradores con este tutorial!<br />"+
												"https://youtu.be/zXa3ASK-I4g";
  
document.getElementById("img19").src= "im/v19.png";
document.getElementById('txt19').innerHTML = "Comprueba componentes electronicos con este genial invento!<br />"+
												"https://youtu.be/hrEG_CLXKbQ";
  
document.getElementById("img20").src= "im/v20.png";
document.getElementById('txt20').innerHTML = "Como lograr que un foco LED nunca se dañe con simple truco!<br />"+
												"https://youtu.be/tZ7oN47uC3o";
  
document.getElementById("img21").src= "im/v21.png";
document.getElementById('txt21').innerHTML =  "Aprende a fabricar un foco LED con fuente capacitiva!<br />"+
												"https://youtu.be/efRFB7zCzd0";
  
document.getElementById("img22").src= "im/v22.png";
document.getElementById('txt22').innerHTML = "Como Hacer un Cargador de Celular Casero Muy Fácil!<br />"+
												"https://youtu.be/Px47QXRwpms";
  
document.getElementById("img23").src= "im/v23.png";
document.getElementById('txt23').innerHTML ="Como evitar el parpadeo de las lamparas Fácil solución! <br/>"+
												"https://youtu.be/lR893qNCk8Q";
											
document.getElementById("img24").src= "im/v24.png";
document.getElementById('txt24').innerHTML = "Como aumentar la señal de cualquier teléfono celular con simple truco!<br />"+
												"https://youtu.be/vXdWtDFA_cM";

document.getElementById("img25").src= "im/v25.png";
document.getElementById('txt25').innerHTML =	"Aprende a reparar lamparas ahorradoras con simple truco! <br />"+
												"https://youtu.be/df6XZ11NQUM";
											
document.getElementById("img26").src= "im/v26.png";
document.getElementById('txt26').innerHTML = "Repara tus artefactos electricos con simple truco <br />"+
												"https://youtu.be/qp5FqIhDjjc";
											
document.getElementById("img27").src= "im/v27.png";
document.getElementById('txt27').innerHTML ="Truco para ahorrar hasta 50% en la factura electrica! <br />"+
												"https://youtu.be/dKbOT3cLsRo";
											
document.getElementById("img28").src= "im/v28.png";
document.getElementById('txt28').innerHTML =" <br />"+
												"";
											
document.getElementById("img29").src= "im/v29.png" ;
document.getElementById('txt29').innerHTML =" <br />"+
												"";
											
document.getElementById("img30").src= "im/v30.png";
document.getElementById('txt30').innerHTML =" <br />"+
												"";
											
document.getElementById("img31").src= "im/v31.png";
document.getElementById('txt31').innerHTML ="<br />"+
												"";

document.getElementById("img32").src= "im/v32.png";
document.getElementById('txt32').innerHTML = 	"<br />"+
												"";

document.getElementById("img33").src= "im/v33.png";
document.getElementById('txt33').innerHTML = 	"<br />"+
												"";
											
document.getElementById("img34").src= "im/v34.png";
document.getElementById('txt34').innerHTML =	"<br />"+
												"";
											
document.getElementById("img35").src= "im/v35.png";
document.getElementById('txt35').innerHTML = 	"<br />"+
												"";
											
document.getElementById("img36").src= "im/v36.png";
document.getElementById('txt36').innerHTML =	"<br />"+
												"";
											
document.getElementById("img37").src= "im/v37.png";
document.getElementById('txt37').innerHTML =	" <br />"+
												"";
											
document.getElementById("img38").src= "im/v38.png";
document.getElementById('txt38').innerHTML = 	"<br />"+
												"";
	
											
document.getElementById("img39").src= "im/v39.png";
document.getElementById('txt39').innerHTML = 	"<br />"+
												"";

document.getElementById("img40").src= "im/v40.png";
document.getElementById('txt40').innerHTML =	"<br />"+
												"";											

document.getElementById("img41").src= "im/v41.png";
document.getElementById('txt41').innerHTML =	" <br />"+
						"";											
											
document.getElementById("img42").src= "im/v42.png";
document.getElementById('txt42').innerHTML = 	" <br />"+
												"";											
											
document.getElementById("img43").src= "im/v43.png";
document.getElementById('txt43').innerHTML =	" <br />"+
												"";											
											
document.getElementById("img44").src= "im/v44.png";
document.getElementById('txt44').innerHTML =	" <br />"+
												"";											
											
document.getElementById("img45").src= "im/v45.png";
document.getElementById('txt45').innerHTML =	" <br />"+
												"";									
											
											
document.getElementById("img46").src= "im/v46.png";
document.getElementById('txt46').innerHTML =	" <br />"+
												"";									
											
											
document.getElementById("img47").src= "im/v47.png";
document.getElementById('txt47').innerHTML = 	" <br />"+
												"";


document.getElementById("img48").src= "im/v48.png";
document.getElementById('txt48').innerHTML =	" <br />"+
												"";										
											

document.getElementById("img49").src= "im/v49.png";
document.getElementById('txt49').innerHTML =	" <br />"+
												"";									
											
											
document.getElementById("img50").src= "im/v50.png";
document.getElementById('txt50').innerHTML = 	" <br />"+
												"";										
											
											
document.getElementById("img51").src= "im/v51.png";
document.getElementById('txt51').innerHTML =	" <br />";
												"";										
											
											
document.getElementById("img52").src= "im/v52.png";
document.getElementById('txt52').innerHTML =	" <br />"+
												"";									
											
											
document.getElementById("img53").src= "im/v53.png";
document.getElementById('txt53').innerHTML =	" <br />"+
												"";									
											
											
document.getElementById("img54").src= "im/v54.png";
document.getElementById('txt54').innerHTML =	" <br />"+
												"";									
											
											
document.getElementById("img55").src= "im/v55.png";
document.getElementById('txt55').innerHTML = 	" <br />"+
												"";


									
											

