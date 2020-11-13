let n=1; 
  
  
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

document.getElementById("img1").src= "https://1.bp.blogspot.com/-yd5sgLiRfT4/X2J51dHg2sI/AAAAAAAAAIY/d6rviV1G19EWlZsHROa3wWzk0TBaFQD-gCLcBGAsYHQ/s200/1.png"; 
document.getElementById("txt1").innerHTML = "➡✅Como Hacer un Cautin Casero con Transformador‼️😮✅<br>"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br>"+
												"https://youtu.be/KyNjEaHtb0c";   

  
document.getElementById("img2").src= "https://1.bp.blogspot.com/-PGIrPploZh4/X2J8Lb6Nx4I/AAAAAAAAAJM/vxBnWd-MdvMXS8eiAp7dxzAUTMhjCaQhACLcBGAsYHQ/s200/2.png"; 
document.getElementById("txt2").innerHTML =  "✅💥Como amplificar la señal de tu celular con simple truco‼️😮<br>"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br>"+
												"https://youtu.be/vXdWtDFA_cM";

  
document.getElementById("img3").src= "https://1.bp.blogspot.com/-FzhWoPJNv_k/X2J8QVjjqXI/AAAAAAAAAJ4/2mvpLLpvXPkAAHRyBFXPpkzvXrlIuuLfACLcBGAsYHQ/s265/3.png";
document.getElementById('txt3').innerHTML ="💥Haz tu propio cautin casero, te puede salvar de un apuro‼️😮💥<br>"+
												"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️ <br>"+
												"https://youtu.be/KAjPSyUslL0";   
 
  
document.getElementById("img4").src= "https://1.bp.blogspot.com/-QJbJgPt7bgc/X2J8UFqIrbI/AAAAAAAAAKk/bqgo8TSqc94SZBUqUVRVx4NIptBY-lfRwCLcBGAsYHQ/s261/4.png"; 
document.getElementById('txt4').innerHTML ="✅💥Como evitar que las lamparas parpadeen, aquí te explico!💥💡😮 <br>"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇 <br>"+
												"https://youtu.be/WWXZUvsZ21M";   
  
  
document.getElementById("img5").src= "https://1.bp.blogspot.com/-mqAlfCBngfA/X2J8YsS1zFI/AAAAAAAAALQ/bpd1f45ZF4siS7tCuPVD-blG5ocZs2wegCLcBGAsYHQ/s268/5.png"; 
document.getElementById('txt5').innerHTML ="🔌💥Como hacer un Cargador de Batería con transformador‼️💥✅<br>"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br>"+
												"https://youtu.be/RuRDiat6jTw";   

document.getElementById("img6").src= "https://1.bp.blogspot.com/-VIpcjGRHHB0/X2J8d-iFQaI/AAAAAAAAAL8/kd7_olIe3O0IB04h4mKcP9xR4XJIxYEqQCLcBGAsYHQ/s268/6.png";
document.getElementById('txt6').innerHTML = "✅Como lograr que un foco LED dure 50 años!‼️💥😮<br />"+
											"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
											"https://www.facebook.com/watch/?v=517897095640295"; 
  
  
document.getElementById("img7").src= "https://1.bp.blogspot.com/-Fd6kZROAaH8/X2J8hU7patI/AAAAAAAAAMQ/x9P52ZLKNoc74VHuxd7Ni3WzrcsLEHxPQCLcBGAsYHQ/s268/7.png";
document.getElementById('txt7').innerHTML = "✅💥10 cosas que puedes hacer con teléfonos celulares viejos‼️💥😮<br />"+
											"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️<br />"+
											"https://www.facebook.com/watch/?v=2423827951037059";
  
  
document.getElementById("img8").src= "https://1.bp.blogspot.com/-C10QWSTAnJE/X2J8hhe_FvI/AAAAAAAAAMU/dhaoPdzFK8AhYhPUDK7msFsVNmha0aQLACLcBGAsYHQ/s268/8.png";
document.getElementById('txt8').innerHTML = "✅💥Como hacer un Inversor de voltaje de 12v a 120v muy fácil‼️💥<br />"+
											"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️<br />"+
											"https://youtu.be/D8nhm7_y6PY";  
  
  
document.getElementById("img9").src= "https://1.bp.blogspot.com/-KgYqCt6yods/X2J8hkGQsKI/AAAAAAAAAMY/GgduU-aAHbQWOtdiROHmZuaXA5-xRcHLgCLcBGAsYHQ/s268/9.png";
document.getElementById('txt9').innerHTML = "✅💥Como Cargar la Batería de tu auto con un foco!‼️💥<br />"+
											"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
											"https://www.facebook.com/watch/?v=1186645654869885"; 
  
  
document.getElementById("img10").src= "https://1.bp.blogspot.com/-M0IGgz2JgEo/X2J8HXYLsFI/AAAAAAAAAIo/JaXPGS1scq4O5mEl5lZkYzIKPksSByAkwCLcBGAsYHQ/s268/10.png";
document.getElementById('txt10').innerHTML = "✅💥Como Hacer un Control de Temperatura para Cautin‼️💥😮<br />"+
											"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️<br />"+
											"https://www.facebook.com/watch/?v=2452532694854760";
  
  
document.getElementById("img11").src= "https://1.bp.blogspot.com/-F-e_YVl1vIs/X2J8HZSQPGI/AAAAAAAAAIs/mXnp1Ycgr5Ec8ktf825MehqKMuPxn-lXACLcBGAsYHQ/s268/11.png";
document.getElementById('txt11').innerHTML =  "✅💥Como hacer un cargador universal de batería de celular‼️💥😮<br />"+
											"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
											"https://www.facebook.com/watch/?v=2463910967063385";
  
document.getElementById("img12").src= "https://1.bp.blogspot.com/-mrqG9zbYDzk/X2J8Hch6zcI/AAAAAAAAAIk/-wZGg8jb0gg1BAPPPm1yc2kJpEEVCgnsQCLcBGAsYHQ/s200/12.png";
document.getElementById('txt12').innerHTML = "✅💥Como hacer el motor mas simple del mundo‼️💥😮<br />"+
											"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️<br />"+
											"https://youtu.be/eLvZOFccYA0"; 
  
  
document.getElementById("img13").src= "https://1.bp.blogspot.com/-lu4nwKtEZeo/X2J8H9jPjxI/AAAAAAAAAIw/mOiCteJj3VYSRAaXWjyQvSgWenFpyCmrQCLcBGAsYHQ/s268/13.png";
document.getElementById('txt13').innerHTML = "🔥✅Como encender un foco desde tres lugares diferentes‼️⚡💡👷<br />"+
											"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
											"https://www.facebook.com/watch/?v=364493738129511";
  
  
document.getElementById("img14").src= "https://1.bp.blogspot.com/-LLT8A4fOUO0/X2J8Ibhat9I/AAAAAAAAAI0/h1xdwKh_xlgObKXqyZdqM2IxyrEMllsNgCLcBGAsYHQ/s268/14.png";
document.getElementById('txt14').innerHTML =  "🔥⚠️7 errores en instalaciones eléctricas caseras que debes evitar‼️💥😮<br />"+
											"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
											"https://www.facebook.com/watch/?v=471383470184162"; 
  
  
document.getElementById("img15").src= "https://1.bp.blogspot.com/-TvUwNF4FslY/X2J8IxKzerI/AAAAAAAAAI4/fKSZ67ioPZQIs_3PsuJOzKwfBWey_vj6gCLcBGAsYHQ/s265/15.png";
document.getElementById('txt15').innerHTML ="💥✅Como hacer un amplificador wifi para conectar con redes distantes‼️💥😮<br/>"+
											"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️<br />"+
											"https://youtu.be/H2kFEReckyQ";
  
  
document.getElementById("img16").src= "https://1.bp.blogspot.com/-4LNG-hje02U/X2J8JVV8nYI/AAAAAAAAAI8/Yi4AZ8BrV-oLz4BxU8e51Z_XEye5kFmHQCLcBGAsYHQ/s265/16.png";
document.getElementById('txt16').innerHTML = "💥✅Como hacer una antena wifi super potente‼️💥😮<br />"+
											"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
											"https://youtu.be/sXA460nTMbQ";
  
  
document.getElementById("img17").src= "https://1.bp.blogspot.com/-pAEp9CTbEZg/X2J8J3FI-8I/AAAAAAAAAJA/tQFA4DvdbfAnn-55SLab8tvr6Ngvb_ZKgCLcBGAsYHQ/s265/17.png";
document.getElementById('txt17').innerHTML = "💥5 cosas que puedes hacer con un simple foco!💥😁💡🏠<br />"+  
											"💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡<br />"+
											"https://youtu.be/o7ou85UB6YQ";  
  
  
document.getElementById("img18").src= "https://1.bp.blogspot.com/-QD3ig1qqcZI/X2J8KUGcrVI/AAAAAAAAAJE/VDa6YTWgZrQvWsrMFEF4ItGVNoeKTShqQCLcBGAsYHQ/s265/18.png";
document.getElementById('txt18').innerHTML = "💥✅Como convertir un foco LED de 120v a 12v con simple truco‼️💥😮<br />"+
											"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️<br />"+
											"https://youtu.be/eAwwOXcNlBk"; 
  
  
document.getElementById("img19").src= "https://1.bp.blogspot.com/-ueTi9ycxHxg/X2J8KwJgiuI/AAAAAAAAAJI/BVHWkSjG-64eMTxCt3PCpZ830Ss3azKlQCLcBGAsYHQ/s263/19.png";
document.getElementById('txt19').innerHTML = "👍💥7 errores que debes evitar en instalaciones eléctricas (parte 2)🏠🔌👷<br />"+ 
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
												"https://youtu.be/qyKR5j8aw8k";
  
  
document.getElementById("img20").src= "https://1.bp.blogspot.com/-_N1PVRzai1s/X2J8L9y1t_I/AAAAAAAAAJQ/pjSTvKVfw6o6ejIA9yJjLSCZ8MFLL-sFQCLcBGAsYHQ/s263/20.png";
document.getElementById('txt20').innerHTML = "✅💥Como hacer un estabilizador de voltaje casero🏠🔌👷<br />"+
											"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️<br />"+
											"https://www.facebook.com/watch/?v=2641468062596533";  
  
  
document.getElementById("img21").src= "https://1.bp.blogspot.com/-imG8tTol6o8/X2J8Mf1d2TI/AAAAAAAAAJU/20ExAmnI3aQRbxOzLvqEiDpHZfZcXHkEQCLcBGAsYHQ/s265/21.png";
document.getElementById('txt21').innerHTML =  "✅Como hallar la fase y el neutro en un toma corriente‼️💥😁💡💯<br />"+ 
											"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
											"https://www.facebook.com/watch/?v=776840472798029";
  
  
document.getElementById("img22").src= "https://1.bp.blogspot.com/-ZroQyDC5qVM/X2J8MzE6SII/AAAAAAAAAJY/9QunFSO80XwbLQc5zYCgPNvVJyLzMtLwACLcBGAsYHQ/s265/22.png";
document.getElementById('txt22').innerHTML = "✅💥Como cargar la batería de tu coche con un cargador de portátil‼️💥😁💯<br />"+ 
											"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️<br />"+
											"https://www.facebook.com/watch/?v=467989700551312";
  
  
document.getElementById("img23").src= "https://1.bp.blogspot.com/-h1arMZ8bqkQ/X2J8Ncg9R6I/AAAAAAAAAJc/DVRUgOJYHoISL-P4Y-o2KDHnSzTkpmNKACLcBGAsYHQ/s267/23.png";
document.getElementById('txt23').innerHTML ="✅Convierte tu disco duro viejo en una memoria USB de gran capacidad‼️💥😁💯 <br/>"+ 
											"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+ 
											"https://www.facebook.com/watch/?v=446144352937158"; 
											
											
document.getElementById("img24").src= "https://1.bp.blogspot.com/-SSvBaYpyt44/X2J8NySFBtI/AAAAAAAAAJg/FbAgf-llELsYt-PzrtfLbU5YiUigkX0mgCLcBGAsYHQ/s267/24.png";
document.getElementById('txt24').innerHTML = "👉✅Como hacer un encendedor eléctrico para la cocina‼️🔥💯<br />"+
											"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
											"https://youtu.be/Fv1Y-yiEw2Q";											
											

document.getElementById("img25").src= "https://1.bp.blogspot.com/-2CDh6YHUqDk/X2J8Ou7m1BI/AAAAAAAAAJk/gpsM6eIGDv4S0FXxDjlQG9b6naqTSbDgwCLcBGAsYHQ/s263/25.png";
document.getElementById('txt25').innerHTML =	"👉✅Ahorrar dinero haciendo reparaciones en casa‼️💥😁💯 <br />"+
											"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
											"https://youtu.be/qp5FqIhDjjc";										
											
											
document.getElementById("img26").src= "https://1.bp.blogspot.com/-uU9siCGkJuY/X2J8O1qGgqI/AAAAAAAAAJo/g4kYV6lkYJUYj9JgKTzrG2Cy49xkHGqogCLcBGAsYHQ/s263/26.png";
document.getElementById('txt26').innerHTML = "🔌😮Como hacer un probador de fase estilo bolígrafo‼️👍💥💯 <br />"+
										"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️<br />"+
										"https://www.facebook.com/watch/?v=116927772921270";											
											
											
document.getElementById("img27").src= "https://1.bp.blogspot.com/-W5OdXyFcAqQ/X2J8PWHosaI/AAAAAAAAAJs/qvxAzlIN2WoRkX_3Th6BrwZQ1_yZ6xDlgCLcBGAsYHQ/s263/27.png";
document.getElementById('txt27').innerHTML ="✅💥Como hacer una antena wifi de largo alcance fácil en 5 min‼️👍💥💯 <br />"+
										"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
										"https://www.facebook.com/watch/?v=474599099894621";											
											
											
document.getElementById("img28").src= "https://1.bp.blogspot.com/-rooZ924lvS0/X2J8PnTfYpI/AAAAAAAAAJw/KbQ3FKOE4vMOMtkcUUyRf83gNyvdsntKwCLcBGAsYHQ/s267/28.png";
document.getElementById('txt28').innerHTML ="✅💥Tutorial básico sobre resistencias y capacitores‼️😁💥💯 <br />"+
										"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️<br />"+
										"https://youtu.be/vJnGSqnFgvw";											
											
											
document.getElementById("img29").src= "https://1.bp.blogspot.com/-5pmEzljLqEE/X2J8Pw29MeI/AAAAAAAAAJ0/zmGxHGqivAkmqTMfqlWI7sRowt27q04wQCLcBGAsYHQ/s267/29.png" ;
document.getElementById('txt29').innerHTML ="✅💥Tutorial de electrónica Inductores y diodos‼️😁💥💯 <br />"+
										"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
										"https://youtu.be/vJnGSqnFgvw";											
											
											
document.getElementById("img30").src= "https://1.bp.blogspot.com/-YqN4efU_AOQ/X2J8QaFljjI/AAAAAAAAAJ8/AeAvRv8WWwEnQsNNQedMgCMLMhZKNLfNQCLcBGAsYHQ/s267/30.png";
document.getElementById('txt30').innerHTML ="🔌😮✅Por que se dañan los cargadores en el mismo lugar‼️💥💯 <br />"+
											"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️<br />"+
											"https://youtu.be/TMqpT68rRfA";											
											
											
document.getElementById("img31").src= "https://1.bp.blogspot.com/-I4yEzn1sKbE/X2J8QY-rFnI/AAAAAAAAAKA/ZhwdeBpT8uY-GQ6A0KPT9uB9YgPBs_hsgCLcBGAsYHQ/s200/31.png";
document.getElementById('txt31').innerHTML ="🔌😮✅Como reparar cargador de celular fácil y gratis‼️💥💯😁<br />"+
											"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
											"https://www.facebook.com/watch/?v=2636736939756607";


document.getElementById("img32").src= "https://1.bp.blogspot.com/-ru8PwSlInmo/X2J8QjvgR1I/AAAAAAAAAKE/0sbzd3auTCUS6QMir2QXuuQ7w-zd4m5GQCLcBGAsYHQ/s200/32.png";
document.getElementById('txt32').innerHTML = 	"✅🔌Como hacer empalmes eléctricos de la forma correcta‼️✌️🔧😁<br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
												"https://www.facebook.com/watch/?v=190339965688671";											
											

document.getElementById("img33").src= "https://1.bp.blogspot.com/-5m82cPXzlmg/X2J8Qzs5xWI/AAAAAAAAAKI/xC0IPX3zaX8lDCKE3P1DwKMR7wAh5VzVQCLcBGAsYHQ/s200/33.png";
document.getElementById('txt33').innerHTML = 	"😮✅Mira que pasa si conecto una memoria usb a un cargador de celular‼️💥💯😁<br />"+
												"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️<br />"+
												"https://www.facebook.com/watch/?v=986625688385149";											
											
											
document.getElementById("img34").src= "https://1.bp.blogspot.com/-HREK0F0CUd4/X2J8RDgKApI/AAAAAAAAAKM/-gOrN6Nf2i8ZSep461tBZGPeha5TNxiUQCLcBGAsYHQ/s200/34.png";
document.getElementById('txt34').innerHTML =	"😮✅El secreto que esconden los focos LED! Aquí te explico‼️💥💯😁<br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
												"https://www.facebook.com/watch/?v=594083594746498";										
											
											
document.getElementById("img35").src= "https://1.bp.blogspot.com/-fjViWncIAl8/X2J8RncY9fI/AAAAAAAAAKQ/9XQobDargO098JrtXF9infsEujleZOXWgCLcBGAsYHQ/s263/35.png";
document.getElementById('txt35').innerHTML = 	"😮✅Como hacer un panel solar casero (parte II)‼️💥💯😁<br />"+
												"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️<br />"+
												"https://www.facebook.com/watch/?v=266748820957236";											
											
											
document.getElementById("img36").src= "https://1.bp.blogspot.com/-Z2EcFjKCxMQ/X2J8SMH59EI/AAAAAAAAAKU/P2NSML1A-eQNg6JjAFI0mhbvFe7imeNwQCLcBGAsYHQ/s267/36.png";
document.getElementById('txt36').innerHTML =	"✅🔌Tutorial fuentes conmutadas Switching Power Suply‼️✌️😁<br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
												"https://www.facebook.com/watch/?v=743807042810889";										
											
											
document.getElementById("img37").src= "https://1.bp.blogspot.com/-8AOSQKWmm4s/X2J8SnqNSfI/AAAAAAAAAKY/j-rDlIvY2-MKtAm3GS0OTnn27n3e9QguQCLcBGAsYHQ/s200/37.png";
document.getElementById('txt37').innerHTML =	"✅Reparación DVD no lee disco solución muy fácil‼️⚠️💥💯 <br />"+
												"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️<br />"+
												"https://www.facebook.com/watch/?v=191112305337521";										
											
											
document.getElementById("img38").src= "https://1.bp.blogspot.com/-0lK7uV9vzSs/X2J8TOsocyI/AAAAAAAAAKc/_t_wWI8gx701inwL7PVo6evnjY815EtigCLcBGAsYHQ/s200/38.png";
document.getElementById('txt38').innerHTML = 	"✅Como cargar la batería de tu auto en tu casa Muy fácil de hacer‼️🔌💡😮<br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
												"https://www.youtube.com/watch?v=bWwWLM_GIJA";											
											
											
document.getElementById("img39").src= "https://1.bp.blogspot.com/-CY4tCb3UQw8/X2J8TpqYIDI/AAAAAAAAAKg/14PWjOxOER0YH-qdE7bF-3VcjTYTNob2ACLcBGAsYHQ/s200/39.png";
document.getElementById('txt39').innerHTML = 	"💥✅Como eliminar parpadeo de los focos LED 💡 con simple truco‼️💥😊<br />"+
												"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️<br />"+
												"https://youtu.be/lR893qNCk8Q";


document.getElementById("img40").src= "https://1.bp.blogspot.com/-2Pz-iENBfvE/X2J8UowA_AI/AAAAAAAAAKo/zYqZweHUG78zYz1nOIKtwzAmI35TtfdEQCLcBGAsYHQ/s200/40.png";
document.getElementById('txt40').innerHTML =	"💥✅Como hacer un cargador de baterías con una fuente de PC antigua‼️💥😊<br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
												"https://www.facebook.com/watch/?v=1483362778492678";										
											

document.getElementById("img41").src= "https://1.bp.blogspot.com/-McNhNpI2EWw/X2J8VLEnBBI/AAAAAAAAAKs/kWfP6-dJyfsYoQJqEVcZb6zHEPNMjaTZQCLcBGAsYHQ/s200/41.png";
document.getElementById('txt41').innerHTML =	"✅💡Ahorra dinero con este invento, batería Infinita!‼️👀😊 <br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇 <br />"+
												"https://www.facebook.com/watch/?v=2239704986331346";										
											
											
document.getElementById("img42").src= "https://1.bp.blogspot.com/-7n6V-dFw5v8/X2J8VhfQq9I/AAAAAAAAAKw/iTgFTaVGk_gSKZhxRCr6TpH61WAym4S7gCLcBGAsYHQ/s200/42.png";
document.getElementById('txt42').innerHTML = 	"✅👉Como reconocer los cables de cualquier transformador con simple truco‼️😊💯 <br />"+
												"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️ <br />"+
												"https://www.facebook.com/watch/?v=2811299322435589";											
											
											
document.getElementById("img43").src= "https://1.bp.blogspot.com/-Mj3yGjFvWP4/X2J8WHTAowI/AAAAAAAAAK0/mgejOaRLQkoZjjgpKE_TaDQCBVqTvC90ACLcBGAsYHQ/s200/43.png";
document.getElementById('txt43').innerHTML =	"✅👉Que pasa si acerco un imán a un disco duro de una portatil?😮🔥👀 <br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇 <br />"+
												"https://www.facebook.com/watch/?v=613795682516568";										
											
											
document.getElementById("img44").src= "https://1.bp.blogspot.com/-snHOKRpmUh4/X2J8Wr-R2ZI/AAAAAAAAAK4/i9juMrf23bASANo4V2nQLNUvor4uzKL3gCLcBGAsYHQ/s200/44.png";
document.getElementById('txt44').innerHTML =	"💥✅7 errores de diseño que se cometieron en estos equipos‼️😮🔥👀 <br />"+
												"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️ <br />"+
												"https://www.facebook.com/watch/?v=494135334866509";										
											
											
document.getElementById("img45").src= "https://1.bp.blogspot.com/-LsfN5OS-NCg/X2J8XBb5ZjI/AAAAAAAAAK8/qdg8yJxyANckm83popcoIn9AvqTkAAabQCLcBGAsYHQ/s200/45.png";
document.getElementById('txt45').innerHTML =	"💥✅Como hacer un control de iluminaciòn con ajuste fino‼️😊💯 <br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇 <br />"+
												"https://www.facebook.com/watch/?v=2865307933793799";										
											
											
document.getElementById("img46").src= "https://1.bp.blogspot.com/-yMK9Ka7xOEk/X2J8Xn6USTI/AAAAAAAAALA/7SrH4-s2lo0zD5Z864ijUareBgz3dokBACLcBGAsYHQ/s200/46.png";
document.getElementById('txt46').innerHTML =	"💥Como reparar cualquier cargador de celular con simple truco‼️😮✅ <br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇 <br />"+
												"https://www.facebook.com/watch/?v=3397730273614451";										
											
											
document.getElementById("img47").src= "https://1.bp.blogspot.com/-efOyFqlgwgk/X2J8X5jkT2I/AAAAAAAAALE/obuGMuap3K8qIwKJ_sENhdIBPNrVVt8OQCLcBGAsYHQ/s200/47.png";
document.getElementById('txt47').innerHTML = 	"💥✅Como detectar cables rotos con este ingenioso invento‼️😮✅ <br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇 <br />"+
												"https://www.facebook.com/watch/?v=537397113797159";


document.getElementById("img48").src= "https://1.bp.blogspot.com/-jQAbXrM0lVc/X2J8YNbt7dI/AAAAAAAAALI/2TvnbKDIkeMbO0njE9UphxO2hE277t2ygCLcBGAsYHQ/s200/48.png";
document.getElementById('txt48').innerHTML =	"💥✅Como hacer un amplificador de audio super potente 📣 para tu celular‼️😊💯 <br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
												"https://www.facebook.com/watch/?v=795283341294669";										
											

document.getElementById("img49").src= "https://1.bp.blogspot.com/-XrpxJ9QA_LY/X2J8Yf9_zKI/AAAAAAAAALM/jvy07NfY1D86dA0IbXaaj5CSoaZOiX-IQCLcBGAsYHQ/s200/49.png";
document.getElementById('txt49').innerHTML =	"💥Como modificar salida de voltaje de un cargador de celular‼️✅😮 <br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇 <br />"+
												"https://www.facebook.com/watch/?v=3774640519245065";										
											
											
document.getElementById("img50").src= "https://1.bp.blogspot.com/-8X8XDnYs0NU/X2J8Y_iZ-JI/AAAAAAAAALU/LIiWF5eT2C0cb_4pJHa5uTEXI2Oo3-6FgCLcBGAsYHQ/s200/50.png";
document.getElementById('txt50').innerHTML = 	"💥Que pasa si conectas positivo con negativo por error‼️👀✅😮 <br />"+
												"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️ <br />"+
												"https://youtu.be/slWJZZQApl8";											
											
											
document.getElementById("img51").src= "https://1.bp.blogspot.com/-uHJAo8f_INs/X2J8ZRFpehI/AAAAAAAAALY/jd19ikyeRLA5Id5rpzTJcw_BsBNLBStygCLcBGAsYHQ/s200/51.png";
document.getElementById('txt51').innerHTML =	"💥Como cambiar componentes de montaje superficial sin usar estación de calor‼️😊💯✅ <br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇 <br />"+
												"https://www.facebook.com/watch/?v=2545678402368037";										
											
											
document.getElementById("img52").src= "https://1.bp.blogspot.com/-8MkzXP1mq5A/X2J8Z9RcJ9I/AAAAAAAAALc/zWLpNY76n7M5Z-bPoWJNdURLTQ5tk3FgACLcBGAsYHQ/s266/52.png";
document.getElementById('txt52').innerHTML =	"💥Ahorra dinero con este invento Batería infinita (parte 2)‼️😊💯💥 <br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇 <br />"+
												"https://youtu.be/zC7k2FLgfOI";										
											
											
document.getElementById("img53").src= "https://1.bp.blogspot.com/-23JL_KEtdUk/X2J8af_E6tI/AAAAAAAAALg/oFt4hok2b1stRIDyaISUjcANZfEkAFEEgCLcBGAsYHQ/s263/53.png";
document.getElementById('txt53').innerHTML =	"✅💥7 errores que acortan la vida de tu móvil‼️😮💯💥 <br />"+
												"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️ <br />"+
												"https://youtu.be/gIHMKUEZU6g";										
											
											
document.getElementById("img54").src= "https://1.bp.blogspot.com/-INIWmC5HoFA/X2J8a_r0fwI/AAAAAAAAALk/WZGAYvUh0x4lYDOP4DbRHjh1Iunf8kAqgCLcBGAsYHQ/s200/54.png";
document.getElementById('txt54').innerHTML =	"✅💥Tutorial Electrónica básica TRANSISTORES‼️😊💯💥 <br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇 <br />"+
												"https://www.facebook.com/watch/?v=4010015599023388";										
											
											
document.getElementById("img55").src= "https://1.bp.blogspot.com/-jKTtEvIybt8/X2J8bfiAlaI/AAAAAAAAALo/97W83i7xkdwsafJPxrsTYaqyNLW94PKXACLcBGAsYHQ/s200/55.png";
document.getElementById('txt55').innerHTML = 	"✅💥Tutorial electrónica básica REGULADORES‼️😊💯💥 <br />"+
												"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️ <br />"+
												"https://www.facebook.com/watch/?v=730213121049943";


document.getElementById("img56").src= "https://1.bp.blogspot.com/-qKIl2DwrqPs/X2J8bz2zxBI/AAAAAAAAALs/R0452rtugK4syuQDybvVG_ZNIq3xO11PgCLcBGAsYHQ/s200/56.png";
document.getElementById('txt56').innerHTML =	"✅💥Como hacer una antena HD Tv digital Fácil y barato‼️😊💥💯✅ <br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇 <br />"+
												"https://www.facebook.com/watch/?v=316547962661143";										
											

document.getElementById("img57").src= "https://1.bp.blogspot.com/-OYd_CpE2w7c/X2J8cVciZsI/AAAAAAAAALw/kOeia8-9VAcesmQ3OM3U3ddAe38UwUQZgCLcBGAsYHQ/s200/57.png";
document.getElementById('txt57').innerHTML =	"✅💥Cómo detectar cables cortados con este invento (parte 2) ‼️😊💯✅ <br />"+
												"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️ <br />"+
												"https://www.facebook.com/watch/?v=273690620456183";										
											
											
document.getElementById("img58").src= "https://1.bp.blogspot.com/-0wwyc2-qpOE/X2J8c0rPg1I/AAAAAAAAAL0/HKXEkDg_cMwFvnzoqYpowfldJg2pKbsIwCLcBGAsYHQ/s200/58.png";
document.getElementById('txt58').innerHTML = 	"💥Como Hacer una Celda Solar Casera con materiales reciclados‼️😊💯💥 <br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇 <br />"+
												"https://youtu.be/lH-FLc8yI4Y";											
											
											
document.getElementById("img59").src= "https://1.bp.blogspot.com/-TizDADjjTOA/X2J8dZ-JqfI/AAAAAAAAAL4/QL14apwgXpsLBlBLyLRTTBA9-WjuPrXOQCLcBGAsYHQ/s200/59.png";
document.getElementById('txt59').innerHTML =	"✅💡Aprende a reparar focos ahorradores con este vídeo‼️😊💯💥 <br />"+
												"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️ <br />"+
												"https://youtu.be/zXa3ASK-I4g";										
											
											
document.getElementById("img60").src= "https://1.bp.blogspot.com/-XOAyCUelYME/X2J8eXg4qlI/AAAAAAAAAMA/RKXnPpm20JMJZMyT-gDJ3Kp5Hslf_y9IwCLcBGAsYHQ/s200/60.png";
document.getElementById('txt60').innerHTML =	"✅Como cargar un celular con una batería de 9v‼️😊💯💥✅ <br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇 <br />"+
												"https://youtu.be/3tS-5h-MObo";										
											
											
document.getElementById("img61").src= "https://1.bp.blogspot.com/-JugvA0u5__A/X2J8e4x5GYI/AAAAAAAAAME/bFwqbXryfHodJ1O_BeSwMpX7Mf8LVs6gACLcBGAsYHQ/s200/61.png";
document.getElementById('txt61').innerHTML =	"💥Como recargar Celular con pin de carga dañado‼️😊💯💥 <br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇 <br />"+
												"https://youtu.be/XeL1Xw1mTjU";										
											
											
document.getElementById("img62").src= "https://1.bp.blogspot.com/-oOny4QgqKxU/X2J8feUboSI/AAAAAAAAAMI/E1R6nnlYYbc2VtYR76ueXSBBCxLfyJT1gCLcBGAsYHQ/s200/62.png";
document.getElementById('txt62').innerHTML =	"✅💥10 errores de electricidad residencial que debes evitar‼️🔌😮🔥✅ <br />"+
												"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️ <br />"+
												"https://youtu.be/nJnAfoNvmHE";										
											
											
document.getElementById("img63").src= "https://1.bp.blogspot.com/-4LMqtqydHK8/X2J8f-hPDVI/AAAAAAAAAMM/UPSbanaZ_VoLSy804OHK8wdFBTLT8gg4ACLcBGAsYHQ/s200/63.png";
document.getElementById('txt63').innerHTML = 	"✅💥Como lograr que los focos LED nunca se dañen‼️🔌😮💥✅<br />"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br />"+
												"https://youtu.be/tZ7oN47uC3o";
