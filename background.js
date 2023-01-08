let delayToStart = 5 * 60 * 1000;
let flashInterval = 100;
let twitterUrl = "https://twitter.com/";
let listColors = [
  "rgb(21,32,43)",
  "rgb(196,30,30)",
  "rgb(30,196,30)",
  "rgb(30,30,196)",
  "rgb(225,225,225)"
  ];
let colorPosition = 0;
let interval;

// Esta función se ejecutará cada vez que se cambie la pestaña activa o se actualice la página actual
function update() {
  setListColor();
  console.log("Somos la función update");
  // Comprobamos si la página actual es Twitter
  console.log(getCurrentURL());
  if (getCurrentURL().startsWith(twitterUrl)) {
    setTimeout(
      ()=>{
        console.log("Activamos parpadeo");
        interval = setInterval( flashBackground, flashInterval);
    }, delayToStart);
    
  }else{
    stopFlashing();
  }
}

function flashBackground(){
  document.body.style.backgroundColor = listColors[colorPosition%listColors.length];
  colorPosition++;
  if(flashInterval>50){
    flashInterval -= 30;
  }
}

function stopFlashing(){
  console.log("stopFlashing()->No estamos en Twitter");
  clearInterval(interval);
}

function getCurrentURL() {
  return window.location.href;
}

function setListColor(){
  listColors[0] = document.body.style.backgroundColor;
}

(()=>{
  update();
})();