import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import conn from './db.js';
import doctor from './models/doctors.js';
import jsdom from 'jsdom';
import bodyParser from 'body-parser';
import ileti from './models/iletisimBilgi.js';



const app = express();
//deneme
// kullalnıcının girdiği datayı obje olarak yakalamızı sağlayan paket 
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())




// index.ejs deki combooxtan veri almak için


// iletisimBilgi veirlerine ulaşmak için bu sabit değişken tanımlamasını yaptım
ileti()



dotenv.config();

//mongoose değğişikliği uygulama uyarısını bastırmak için özelliği default yerine manuel olarak böyle ayarladım.

mongoose.set('strictQuery', true);

//db connections
conn();

// doctor verileri almak için eklediğin fonks (syntax a bir (,) koymadığın için 3 saatin gg oldu hadi eyv)
doctor();


const port = 1000;




//iletisime gec textlerinin veri tabanı sorguları
// bu kısımda ileti koleksiyonuna kaydedilen verilerin görüntülenmesi sağlanıyor
app.get('/iletiler',(req,res) => {
    ileti.find()
    .then((result) => {
        res.send(result)
    })
    .catch((err) =>{
        console.log(err);
    })
    });




 // veri tabanına kayıt yapma denemesi
 /*
app.get('/add',(req,res)=>{
       const doctor = new doctor({
       city: "Elazığ",
       name: "Zeyd",
       surname: "Sakız",
       telephone:"051111111",
       location:"elz merkez",
       certificate:"qweqwe"


    });
    doctor.save()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    })
});
*/



//veri tabanında kayıtlı olan doktorları bu istek üzerine görebiliyoruz başka bilgisayardan eriştiğim ilk db o yüzden başarı olarak görüyorum.

app.get('/all',(req,res) => {
doctor.find()
.then((result) => {
    res.send(result)
})
.catch((err) =>{
    console.log(err);
})
});

/*
//ID bazlı doktorlara ulaşmak
app.get('/single', (req,res) =>{
    doctor.findById('6395d34e42effb7f0a8cfdca')
    .then((result) => {
        res.send(result);
    })
     .catch((err) => {
        console.log(err);
     }) 

});
*/

//şehir bazlı doktor araması callback fonksiyon içindeki  find methodu kriterleri belirlemesiyle yapıldı

//index.ejs den ara bbutonunun yönlendirmesini düzenle(/search) şu anda ara butonunu ara.ejs yönlendirdiğin için kaldırdın
function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};
// html de selectten çektiğin veriyi burada kullandın...
// indexteki şehir isimlerini düzenle ya da gi kullan ama düzenlemeyi dşünüyorsun hatırlatma...
/*
app.get('/search' ,(req,res) => {
    
doctor.find({city:req.query.sehir})
.then((result) => {
    res.send(result);
})
.catch((err) => {
    console.log(err);
})


})
*/

// verileri html e gönderme denemesi...

app.get('/search' ,(req,res) => {
    
    doctor.find({city:req.query.sehir})
    .then((doctors) => {
        res.render('../views/ara.ejs' ,{doctors:doctors});
    })
    .catch((err) => {
        console.log(err);
    
    })

    })




/*
//combobasxtaki değere göre veri arama
/bu formata göre denendi ama başarılı bi sonuca varamadın

app.get("/ara", (req,res) => {
if(req.query.sehir){
const regex = new RegExp(escapeRegex(req.query.sehir),'gi');
doctor.find({"city":regex})
console.log(regex)

res.render('ara')

}
}
*/


//view  engine adının ejs olarak ayarlanmsaı ayarlaması
app.set('view engine', 'ejs');



//statik dosyalar
//bu ara yazılımı css dosyalarının bulunduğu public static klasörünü sabit olarak çalıştırmak için kullandım
app.use('/public',express.static('public'));


app.get('/',(req,res) => {
    res.render('index');
});

app.get('/about',(req,res) => {
    res.render('about');
});

app.get('/skolyoznedir',(req,res) => {
    res.render('skolyoznedir');
});
app.get('/skolyoztedavisi',(req,res) => {
    res.render('skolyoztedavisi');
});
app.get('/iletisim',(req,res) => {
    res.render('iletisim');
});

app.get('/ara',(req,res) => {
    res.render('ara');
});
//iletişim mesajı ve bilgilerini kaydeden istek satırı. bunu daha sonra dene çalışıp çalışmayacağını görmek için en son kaldığın nokta burası..
app.post('/post/content',(req,res) => {
   ileti.create(req.body)
   res.redirect('/')
    
});

/*
app.post('/post/city',(req,res) => {
   
        doctor.find({city:req.body})
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
        res.redirect('/ara')
        
      
 });
 */


app.listen(port, ()=>{

    console.log("app is running on port:" + (port));
});


