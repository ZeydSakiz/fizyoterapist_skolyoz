
//formdan bilgi alma ve o bilgileri alert ekranında yazdırma... başarılı





let btn = document.querySelector("#submit");
let uisim = document.getElementById("unikisim").value;
let uemail = document.getElementById("email").value;
let ukonu = document.getElementById("konu").value;
let umesaj = document.getElementById("mesaj").value;
function anasayfagit(){
  window.location.href="http://127.0.0.1:5500/index.html";
}

btn.onclick = function(){
   uisim = document.getElementById("unikisim").value;
   uemail = document.getElementById("email").value;
   ukonu = document.getElementById("konu").value;
   umesaj = document.getElementById("mesaj").value;
  if(uisim =="" || uemail=="" || umesaj=="")
  {
    alert("boş alanları doldurunuz...");
  }else
  {
   anasayfagit();
   alert("talebiniz kaydedilmiştir..." + "\n" + uisim+"\n "+ uemail+"\n " + ukonu +"\n "+ umesaj);
   
  } 
  
}

 














// console da çalışıyor console da çalışan bir şeyi live server da çalıştırabilir misin?
//dosyaya veri aktarmak için
/*
    var selamla = "selamlarımı iletiyorum..";
    var sutla = "uza buradan.."
const fs = require('fs');

fs.appendFile('iletisim.txt', "\n" + uisim + "\n" + uemail  , function (err) {
  if (err) throw err;
  console.log('Kayıt Edildi!');
});

*/






/*
// dosyadan veri okumak için
const fs = require('fs');

fs.appendFile('iletisim.txt', 'Data To Append', (err) => {
if (err) throw err;
fs.readFile('iletisim.txt',(error , input ) =>{

    console.log(input.toString());  
    })

})
*/
