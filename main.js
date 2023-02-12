var btnVisible = document.querySelector('.btn-1');


btnVisible.addEventListener('click', () => {
  let rullBlock = document.querySelector("#rullHiden")
  rullBlock.classList.toggle("visible")
 
  if (  !rullBlock.classList.contains('.visible')) {
    document.querySelector('.section-rull').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
  }
  

  return console.log(1);
});


let auth = localStorage.getItem('authorizationData');
let linkBtn = document.querySelectorAll(".btn")
if (auth) {
  for (i = 0; i < linkBtn.length;i++){
    linkBtn[i].href="https://melbet.ng/en/sport/"
  }
}

let positionBall = ["-50", "50", "-170", "17", "0"]

document.addEventListener('scroll',  ()=> {

  // document.querySelector('.showScroll-1').style = `top:${+(window.getComputedStyle(document.querySelector('.showScroll-1'),null).top.slice(0,-2)) +1}px`
  
  

  if (document.documentElement.clientWidth <= 775) {
    positionBall = ["20", "50", "-500", "47", "0"]

    document.querySelector('.showScroll-1').style=`top:${ +positionBall[0] + pageYOffset/50}%`
    // document.querySelector('.showScroll-2').style=`top:${ +positionBall[1] + pageYOffset/5}%`
    document.querySelector('.showScroll-3').style=`bottom:${ +positionBall[2] + pageYOffset/10}%`
    document.querySelector('.showScroll-4').style=`bottom:${ +positionBall[3] - pageYOffset/140}%`
    document.querySelector('.showScroll-5').style=`bottom:${ +positionBall[4] + pageYOffset/200}%`
  } else {
    document.querySelector('.showScroll-1').style=`top:${ +positionBall[0] + pageYOffset/12}%`
    document.querySelector('.showScroll-2').style=`top:${ +positionBall[1] + pageYOffset/15}%`
    document.querySelector('.showScroll-5').style=`bottom:${ +positionBall[4] + pageYOffset/70}%`
    document.querySelector('.showScroll-3').style=`top:${ +positionBall[2] + pageYOffset/18}%`
    document.querySelector('.showScroll-4').style=`bottom:${ +positionBall[3] - pageYOffset/200}%`
  }
 
});


window.addEventListener('resize', () => {
  if (document.documentElement.clientWidth== 775) {
   location.reload() 
  }
})

window.addEventListener("orientationchange", function() {
  location.reload() 
}, false);
