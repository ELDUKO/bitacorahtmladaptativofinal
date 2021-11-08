let writing = str => {

    let arrFromStr = str.split('');
    let i = 0;
    let printStr = setInterval(function(){
        document.body.innerHTML += arrFromStr[i];
        i++;

        if(i === arrFromStr.length){
            clearInterval(printStr);
            document.body.style.color ='white'


        }
    },1200);
};



window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})