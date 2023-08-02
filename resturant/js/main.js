//=======================NAVIGATION=======================//
const mainMenu = document.querySelector('.mainMenu')
const openMenu = document.querySelector('.openMenu')
const closeMenu = document.querySelector('.closeMenu')
const navlink1 = document.getElementById('nav_link1')
const navlink2 = document.getElementById('nav_link2')
const navlink3 = document.getElementById('nav_link3')
const active = document.querySelector('.active')

navlink1.onclick = function(){
    mainMenu.style.top = '-150%';
}

navlink2.onclick = function(){
    mainMenu.style.top = '-150%';
}

navlink3.onclick = function(){
    mainMenu.style.top = '-150%';
}

active.onclick = function(){
    mainMenu.style.top = '-150%';
}



openMenu.addEventListener('click',show)
closeMenu.addEventListener('click',close)

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close(){
    mainMenu.style.top = '-150%';
}


// ========================FOOD SECTION=======================//
// Get the modal
var modal = document.getElementById('myModal');
var menu = document.querySelector('nav')

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg1');
var img2 = document.getElementById('myImg2');
var img3 = document.getElementById('myImg3');
var img4 = document.getElementById('myImg4');
var img5 = document.getElementById('myImg5');
var img6 = document.getElementById('myImg6');
var img7 = document.getElementById('myImg7');
var img8 = document.getElementById('myImg8');

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
    menu.style.display = 'none';
}

img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
    menu.style.display = 'none';
}

img3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
    menu.style.display = 'none';
}

img4.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
    menu.style.display = 'none';
}

img5.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
    menu.style.display = 'none';
}

img6.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
    menu.style.display = 'none';
}

img7.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
    menu.style.display = 'none';
}

img8.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
    menu.style.display = 'none';
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    menu.style.display = '';
}