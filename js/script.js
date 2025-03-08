let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) => {
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links => {

    links.onmouseenter = () => {
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () => {
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});

// Get the modal
var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var img1 = document.getElementById("myImg1");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var img5 = document.getElementById("myImg5");
var img6 = document.getElementById("myImg6");
var img7 = document.getElementById("myImg7");
var img8 = document.getElementById("myImg8");
var img9 = document.getElementById("myImg9");
var img10 = document.getElementById("myImg10");
var img11 = document.getElementById("myImg11");


var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var modalImg1 = document.getElementById("img02");
var captionText1 = document.getElementById("caption1");

img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = "images/hitprotocol-xl.png";
    captionText.innerHTML = "HIT PROTOCOL";
}
img1.onclick = function () {
    modal1.style.display = "block";
    modalImg1.src = "images/hitprotocol-sm-f.png";
    captionText1.innerHTML = "HIT PROTOCOL";
}
img2.onclick = function () {
    modal.style.display = "block";
    modalImg.src = "images/annamalaimaligai-xl.png";
    captionText.innerHTML = "ANNAMALAI MALIGAI";
}
img3.onclick = function () {
    modal1.style.display = "block";
    modalImg1.src = "images/annamalaimaligai-sm-f.png";
    captionText1.innerHTML = "ANNAMALAI MALIGAI";
}
img4.onclick = function () {
    modal.style.display = "block";
    modalImg.src = "images/jobs-prizopriz-xl.png";
    captionText.innerHTML = "JOBS Prizo Priz";
}
img5.onclick = function () {
    modal1.style.display = "block";
    modalImg1.src = "images/jobs-prizopriz-sm-f.png";
    captionText1.innerHTML = "JOBS Prizo Priz";
}
img6.onclick = function () {
    modal.style.display = "block";
    modalImg.src = "images/mydailygainz.com-xl.png";
    captionText.innerHTML = "My Daily Gainz";
}
img7.onclick = function () {
    modal1.style.display = "block";
    modalImg1.src = "images/mydailygainz.com-sm-f.png";
    captionText1.innerHTML = "My Daily Gainz";
}
img8.onclick = function () {
    modal.style.display = "block";
    modalImg.src = "images/prizopriz-xl.png";
    captionText.innerHTML = "Prizo Priz";
}
img9.onclick = function () {
    modal1.style.display = "block";
    modalImg1.src = "images/prizopriz-sm-f.png";
    captionText1.innerHTML = "Prizo Priz";
}
img10.onclick = function () {
    modal.style.display = "block";
    modalImg.src = "images/greentree-xl.png";
    captionText.innerHTML = "Greentree";
}
img11.onclick = function () {
    modal1.style.display = "block";
    modalImg1.src = "images/greentree-sm-f.png";
    captionText1.innerHTML = "Greentree";
}


// Get the <span> element that closes the modal

var els = document.getElementsByClassName("close");
for(var i = 0; i < els.length; i++)
{
    els[i].onclick = function () {
        modal.style.display = "none";
        modal1.style.display = "none";
    }
}

$(document).ready(function () {
    console.log("hello");
});