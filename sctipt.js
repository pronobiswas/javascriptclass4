let input = document.getElementById("input");
let btn = document.getElementById("btn");
let demo = document.getElementById("demo");
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let fulnam = document.getElementById("fulnam");
let pass = document.getElementById("pass");
let checkbtn = document.getElementsByClassName("checkbtn");
let final = document.getElementsByClassName("final");
let result = "hi"
result = "hello"


btn.addEventListener("click", function () {

    demo.innerHTML = input.value.length;
});
yourname.addEventListener("click", function () {

    fulnam.innerHTML = fname.value + lname.value;
});

checkbtn.addEventListener("click", function () {
    // document.getElementById("pass").type = 'text';
    final.innerHTML = "logo";

});




