const img = document.getElementsByClassName(".img_controls");
const i1 = document.getElementById("i1");
const i2 = document.getElementById("i2");
const i3 = document.getElementById("i3");
const i4 = document.getElementById("i4");
const i5 = document.getElementById("i5");
const range = document.getElementById("imgRange");

function imgZoomer(imgId){
  if(imgId === "1"){
    i1.classList.add("active");
  }if(imgId === "2") {
    i2.classList.add("active");
  }if(imgId === "3") {
    i3.classList.add("active");
  }if(imgId === "4") {
    i4.classList.add("active");
  }if(imgId === "5") {
    i5.classList.add("active");
  }
}

function imgShrink(imgId){
  if(imgId !== "1"){
    i1.classList.remove("active");
  } if(imgId !== "2") {
    i2.classList.remove("active");
  } if(imgId !== "3") {
    i3.classList.remove("active");
  } if(imgId !== "4") {
    i4.classList.remove("active");
  } if(imgId !== "5") {
    i5.classList.remove("active");
  }
}


function handleRange(event){
  const gauge = event.target.value;
  imgZoomer(gauge);
  imgShrink(gauge);
}

if(range){
  range.addEventListener("input",handleRange);
}

function init(){
  imgZoomer();
  imgShrink();
}



init();