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

function formValidation(){
    const isim = document.forms["contact"]["isim"].value;
    const soyisim = document.forms["contact"]["soyisim"].value;
    const email = document.forms["contact"]["email"].value;
    const mail_format = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
    const isim_format = /^([a-zA-ZçÇğĞıİöÖşŞüÜ]{2,}\s?)+$/;
    if(isim == "" || soyisim == "" || email == ""){              
        alert("Lütfen tüm alanları doldurunuz.");
        return false;
    }
    else{
        if(!isim_format.test(isim)){
            alert("Lütfen geçerli bir isim giriniz.");
            return false;
        }
        if(!isim_format.test(soyisim)){
            alert("Lütfen geçerli bir soyisim giriniz.");
            return false;
        }
        if(!mail_format.test(email)){
            alert("Lütfen geçerli bir email adresi giriniz.");
            return false;
        }

        alert("Form başarıyla gönderildi.");
        return true;

    }
}

function see_more(){
    hide_text = document.getElementById("hide_text");
    see_text = document.getElementById("see_more");

    if(hide_text.style.display != "none"){
        hide_text.style.display = "none";
        see_text.textContent = "daha fazla";
        see_text.style.marginTop = "10px";
    }
    else{
        hide_text.style.display = "block";
        see_text.textContent = "daha az";
        see_text.style.marginTop = "80px";
    }
}

function sortProjects(flag){
    if(flag){
        document.getElementById("project1").src="assets/Teknofest-logo.jpg";
        document.getElementById("desc1").innerHTML = "teknofest";
        document.getElementById("project2").src = "assets/console-app.jpg";
        document.getElementById("desc2").innerHTML = "console";
        document.getElementById("project3").src = "assets/therone.jpg";
        document.getElementById("desc3").innerHTML = "therone";
    }
    else{
        document.getElementById("project1").src="assets/therone.jpg";
        document.getElementById("desc1").innerHTML = "therone";
        document.getElementById("project2").src = "assets/console-app.jpg";
        document.getElementById("desc2").innerHTML = "console";
        document.getElementById("project3").src = "assets/Teknofest-logo.jpg";
        document.getElementById("desc3").innerHTML = "teknofest";
    }


    



}