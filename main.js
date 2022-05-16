var icon = document.getElementById("icon");


if(localStorage.getItem("theam") == null){
    localStorage.setItem("theam","light");
}

let localData = localStorage.getItem("theam");

if(localData == "light"){
    icon.src = "/imges/moon.png";
    document.body.classList.remove("dark-theam")
}else if(localData == "dark"){
    icon.src = "/imges/sun.png";
    document.body.classList.add("dark-theam")
}

icon.onclick = function(){
    document.body.classList.toggle("dark-theam");
    if(document.body.classList.contains("dark-theam")){
        icon.src ="/imges/sun.png";
        localStorage.setItem("theam","dark");
    }else{
        icon.src = "/imges/moon.png";
        localStorage.setItem("theam","light");
    }
}
