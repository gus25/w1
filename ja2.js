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
document.getElementById("txt1").innerHTML = "";
  

  
document.getElementById("img2").src= "im/v2.png"; 
document.getElementById("txt2").innerHTML =  "";

  
document.getElementById("img3").src= "im/v3.png";
document.getElementById('txt3').innerHTML ="";

  
document.getElementById("img4").src= "im/v4.png"; 
document.getElementById('txt4').innerHTML ="<br>";
 
  
  
document.getElementById("img5").src= "im/v5.png"; 
document.getElementById('txt5').innerHTML ="<br>";
  

document.getElementById("img6").src= "im/v6.png";
document.getElementById('txt6').innerHTML = "<br />";

  
document.getElementById("img7").src= "im/v7.png";
document.getElementById('txt7').innerHTML = "<br />";

  
document.getElementById("img8").src= "im/v8.png";
document.getElementById('txt8').innerHTML = "<br />";

  
document.getElementById("img9").src= "im/v9.png";
document.getElementById('txt9').innerHTML = "<br />";

  
document.getElementById("img10").src= "im/v10.png";
document.getElementById('txt10').innerHTML = "<br />";

  
document.getElementById("img11").src= "im/v11.png";
document.getElementById('txt11').innerHTML =  "<br />";

  
document.getElementById("img12").src= "im/v12.png";
document.getElementById('txt12').innerHTML = "<br />";

  
document.getElementById("img13").src= "im/v13.png";
document.getElementById('txt13').innerHTML = "<br />";

  
document.getElementById("img14").src= "im/v14.png";
document.getElementById('txt14').innerHTML =  "<br />";

  
document.getElementById("img15").src= "im/v15.png";
document.getElementById('txt15').innerHTML ="<br/>";

  
document.getElementById("img16").src= "im/v16.png";
document.getElementById('txt16').innerHTML = "<br />";

  
document.getElementById("img17").src= "im/v17.png";
document.getElementById('txt17').innerHTML = "<br />";  

  
document.getElementById("img18").src= "im/v18.png";
document.getElementById('txt18').innerHTML = "<br />";

  
document.getElementById("img19").src= "im/v19.png";
document.getElementById('txt19').innerHTML = "<br />"; 

  
document.getElementById("img20").src= "im/v20.png";
document.getElementById('txt20').innerHTML = "<br />";

  
document.getElementById("img21").src= "im/v21.png";
document.getElementById('txt21').innerHTML =  "<br />";

  
document.getElementById("img22").src= "im/v22.png";
document.getElementById('txt22').innerHTML = "<br />"; 

  
document.getElementById("img23").src= "im/v23.png";
document.getElementById('txt23').innerHTML =" <br/>"; 

											
document.getElementById("img24").src= "im/v24.png";
document.getElementById('txt24').innerHTML = "<br />";


document.getElementById("img25").src= "im/v25.png";
document.getElementById('txt25').innerHTML =	" <br />";

											
document.getElementById("img26").src= "im/v26.png";
document.getElementById('txt26').innerHTML = " <br />";

											
document.getElementById("img27").src= "im/v27.png";
document.getElementById('txt27').innerHTML =" <br />";

											
document.getElementById("img28").src= "im/v28.png";
document.getElementById('txt28').innerHTML =" <br />";

											
document.getElementById("img29").src= "im/v29.png" ;
document.getElementById('txt29').innerHTML =" <br />";

											
document.getElementById("img30").src= "im/v30.png";
document.getElementById('txt30').innerHTML =" <br />";

											
document.getElementById("img31").src= "im/v31.png";
document.getElementById('txt31').innerHTML ="<br />";


document.getElementById("img32").src= "im/v32.png";
document.getElementById('txt32').innerHTML = 	"<br />";


document.getElementById("img33").src= "im/v33.png";
document.getElementById('txt33').innerHTML = 	"<br />";

											
document.getElementById("img34").src= "im/v34.png";
document.getElementById('txt34').innerHTML =	"<br />";

											
document.getElementById("img35").src= "im/v35.png";
document.getElementById('txt35').innerHTML = 	"<br />";

											
document.getElementById("img36").src= "im/v36.png";
document.getElementById('txt36').innerHTML =	"<br />";

											
document.getElementById("img37").src= "im/v37.png";
document.getElementById('txt37').innerHTML =	" <br />";

											
document.getElementById("img38").src= "im/v38.png";
document.getElementById('txt38').innerHTML = 	"<br />";

	
											
document.getElementById("img39").src= "im/v39.png";
document.getElementById('txt39').innerHTML = 	"<br />";


document.getElementById("img40").src= "im/v40.png";
document.getElementById('txt40').innerHTML =	"<br />";
											

document.getElementById("img41").src= "im/v41.png";
document.getElementById('txt41').innerHTML =	" <br />";
											
											
document.getElementById("img42").src= "im/v42.png";
document.getElementById('txt42').innerHTML = 	" <br />";
											
											
document.getElementById("img43").src= "im/v43.png";
document.getElementById('txt43').innerHTML =	" <br />";
											
											
document.getElementById("img44").src= "im/v44.png";
document.getElementById('txt44').innerHTML =	" <br />";
											
											
document.getElementById("img45").src= "im/v45.png";
document.getElementById('txt45').innerHTML =	" <br />";
									
											
											
document.getElementById("img46").src= "im/v46.png";
document.getElementById('txt46').innerHTML =	" <br />";
									
											
											
document.getElementById("img47").src= "im/v47.png";
document.getElementById('txt47').innerHTML = 	" <br />";



document.getElementById("img48").src= "im/v48.png";
document.getElementById('txt48').innerHTML =	" <br />";
										
											

document.getElementById("img49").src= "im/v49.png";
document.getElementById('txt49').innerHTML =	" <br />";
									
											
											
document.getElementById("img50").src= "im/v50.png";
document.getElementById('txt50').innerHTML = 	" <br />";
										
											
											
document.getElementById("img51").src= "im/v51.png";
document.getElementById('txt51').innerHTML =	" <br />";
										
											
											
document.getElementById("img52").src= "im/v52.png";
document.getElementById('txt52').innerHTML =	" <br />";
									
											
											
document.getElementById("img53").src= "im/v53.png";
document.getElementById('txt53').innerHTML =	" <br />";
									
											
											
document.getElementById("img54").src= "im/v54.png";
document.getElementById('txt54').innerHTML =	" <br />";
									
											
											
document.getElementById("img55").src= "im/v55.png";
document.getElementById('txt55').innerHTML = 	" <br />";



									
											

