// ************************start heart function******************************
var heart = document.querySelectorAll(".fa-heart");
Array.from(heart).map((el) => {
    el.addEventListener("click", () => {
        el.classList.toggle("red")
    });
});

// ************************start romve function******************************

var removeIt = document.querySelectorAll(".fa-trash-o");
Array.from(removeIt).map((el) => {
    el.addEventListener("click", () => {
        el.parentElement.parentElement.parentElement.remove();
    });
});

// ************************start total function******************************

var pxTotal = document.querySelector(".total");
// apeller au btn .fa-minus-square
var minus = document.querySelectorAll(".fa-minus-square");
Array.from(minus).map((el) => {
    el.addEventListener("click", () => {
        if(el.nextElementSibling.innerHTML > 0) {
            el.nextElementSibling.innerHTML= parseInt(el.nextElementSibling.innerHTML)- 1;
            var price = el.parentElement.parentElement.previousElementSibling.previousElementSibling.innerHTML.replace("Dt" , "");
        pxTotal.innerHTML = parseInt(pxTotal.innerHTML.replace("Dt" , "")) - parseInt(price) + "Dt";
        }
     });
});

//appele aux btn .fa-plus-square
var plus = document.querySelectorAll(".fa-plus-square");
Array.from(plus).map((el) => {
    el.addEventListener("click", () => {
        el.previousElementSibling.innerHTML= parseInt(el.previousElementSibling.innerHTML)+ 1;
        var price = el.parentElement.parentElement.previousElementSibling.previousElementSibling.innerHTML.replace("Dt" , "");
        pxTotal.innerHTML = parseInt(pxTotal.innerHTML.replace("Dt" , "")) + parseInt(price) + "Dt";
     });
});