// saat basamaklarına göre sıfır ekleyen fonksiyon
function paddingZero(num){
    let z_num;
    if(num < 10){
        z_num="0"+num.toString();
    }
    else{
        z_num=num;
    }
    return z_num;
}
// saati string formatına dönüştüre fonksiyon
function updateClock() {
    const now=new Date();
    const hour= now.getHours();
    const minute= now.getMinutes();
    const second= now.getSeconds();

    let s_hour = paddingZero(hour);
    let s_minute = paddingZero(minute);
    let s_second = paddingZero(second);

    document.getElementById("saat").innerHTML=s_hour+":"+s_minute+":"+s_second;
}

setInterval(updateClock, 1000);
updateClock();

//formda isim soyisim ve email alanlarının formatlarını kontrol eden fonksiyon
function formValidation(){
    const isim = document.forms["contact"]["isim"].value;
    const soyisim = document.forms["contact"]["soyisim"].value;
    const email = document.forms["contact"]["email"].value;
    const mail_format = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
    const isim_format = /^([a-zA-ZçÇğĞıİöÖşŞüÜ]{2,}\s?)+$/;
    if(isim == "" || soyisim == "" || email == ""){              
        alert("Lütfen tüm alanları doldurunuz.");
        
    }
    else{
        if(!isim_format.test(isim)){
            alert("Lütfen geçerli bir isim giriniz.");
            
        }
        else if(!isim_format.test(soyisim)){
            alert("Lütfen geçerli bir soyisim giriniz.");
            
        }
        else if(!mail_format.test(email)){
            alert("Lütfen geçerli bir email adresi giriniz.");
            
        }
        else{
            alert("Form başarıyla gönderildi.");
        }
    }
}

// daha fazla ve daha az göster butonunu kontrol eden fonksiyon
function see_more(){
    hide_text = document.getElementById("hide_text");
    see_text = document.getElementById("see_more");

    if(hide_text.style.display != "none"){
        hide_text.style.display = "none";
        see_text.textContent = "Daha fazla";
        see_text.style.marginTop = "10px";
    } 
    else{
        hide_text.style.display = "block";
        see_text.textContent = "Daha az";
        see_text.style.marginTop = "80px";
    }
}

// projeleri tarih ve beğeniye göre sıralayan fonksiyon
function sortProjects(flag){
    const therone_title = "Deprem sonrası acil durum müdahalelerinde hızlı ve etkili bir şekilde enkaz alanlarını ve güvenli yolları tespit etmek kritik öneme sahiptir."+ 
        "Bu ihtiyacı karşılamak için geliştirilen Deprem Dronu, yapay zeka tabanlı görüntü işleme teknolojisiyle donatılmış, otonom bir haritalama aracıdır."+
        "Deprem Dronu, enkaz alanlarında hızlı ve etkili bir şekilde haritalama yaparak, enkaz altında kalan insanları tespit etmeyi ve kurtarma ekiplerine yol göstermeyi hedefler.";
   
    const pharmacy_title = "Bu proje, java programlama dili kullanılarak geliştirilmiş bir konsol uygulamasıdır. "+
        "bir eczanenin temel iş süreçlerini dijital olarak yönetmek için geliştirilen bir Java konsol uygulamasıdır."+
         "Bu uygulama, eczane çalışanlarının ve yöneticilerinin ilaç stoklarını, müşteri taleplerini, satışları ve tedarik işlemlerini kolayca takip etmelerini sağlar."+ 
         "Konsol tabanlı arayüzü sayesinde hızlı, kullanıcı dostu ve düşük kaynak tüketimli bir çözüm sunar.";

    const library_title = "Bu proje, bir kütüphane yönetim sistemi geliştirmek için oluşturulmuş, C# dilinde yazılmış bir konsol tabanlı uygulamadır."+
    "Sistem, kütüphane çalışanlarının ve yöneticilerinin kitapları, üyeleri ve ödünç alma süreçlerini kolaylıkla yönetmesine yardımcı olmak amacıyla tasarlanmıştır."+ 
    "Hızlı, kullanıcı dostu ve özelleştirilebilir yapısıyla hem küçük hem de büyük ölçekli kütüphaneler için etkili bir çözümdür.";    


    if(flag){
        document.getElementById("project1").src="assets/library-management-system.png";
        document.getElementById("desc1").innerHTML = library_title;
        document.getElementById("link1").href ="https://github.com/berhankokum/ce103-hw3-2022-2023-muhammedberhan-kokum.git";

        document.getElementById("project2").src = "assets/pharmacy-management-system.jpg";
        document.getElementById("desc2").innerHTML = pharmacy_title;
        document.getElementById("link2").href ="https://github.com/berhankokum/ce103-hw4-2022-2023-muhammedberhan-kokum.git";

        document.getElementById("project3").src = "assets/therone.jpg";
        document.getElementById("desc3").innerHTML = therone_title;
        document.getElementById("link3").href ="https://www.linkedin.com/company/the-rone/";
    }
    else{
        document.getElementById("project1").src="assets/therone.jpg";
        document.getElementById("desc1").innerHTML = therone_title;
        document.getElementById("link1").href ="https://www.linkedin.com/company/the-rone/";

        document.getElementById("project2").src = "assets/pharmacy-management-system.jpg";
        document.getElementById("desc2").innerHTML = pharmacy_title;
        document.getElementById("link2").href ="https://github.com/berhankokum/ce103-hw4-2022-2023-muhammedberhan-kokum.git";

        document.getElementById("project3").src = "assets/library-management-system.png";
        document.getElementById("desc3").innerHTML = library_title;
        document.getElementById("link3").href ="https://github.com/berhankokum/ce103-hw3-2022-2023-muhammedberhan-kokum.git";
    }
}