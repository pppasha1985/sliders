//slider icons
let offset = 0; //смещение от левого края
const sliderLine = document.querySelector('.slider_lineicons');

document.querySelector('.slider-next').addEventListener('click', function(){
  offset = offset + 256;  // offset += 256
  if (offset > 1024) {
    offset = 0
  }
  sliderLine.style.left = -offset + 'px';
});
document.querySelector('.slider-prev').addEventListener('click', function(){
  offset = offset - 256;  // offset -= 256
  if (offset < 0) {
    offset = 1024 ;
  }
  sliderLine.style.left = -offset + 'px';
});

console.log(sliderLine);

// slider smiles

let offse = 0; //смещение от левого края
const slidersmileLine = document.querySelector('.slider_linesmiles');

document.querySelector('.slider-smilenext').addEventListener('click', function(){
  offse = offse + 128;  // offse += 128
  if (offse > 384) {
    offse = 0
  }
  slidersmileLine.style.left = -offse + 'px';
});
document.querySelector('.slider-smileprev').addEventListener('click', function(){
  offse = offse - 128;  // offset -= 128
  if (offse < 0) {
    offse = 384 ;
  }
  slidersmileLine.style.left = -offse + 'px';
});


//louisvuiton

const prev = document.getElementById('btn_prev'),
      next = document.getElementById('btn_next'),
      slideslv = document.querySelectorAll('.slidelv'),
      dots = document.querySelectorAll('.dot');

 let index = 0;

 console.log(slideslv);
 
 const activeSlide = n => {
    
    for(let slidelv of slideslv) {
       slidelv.classList.remove('active');
    }
    slideslv[n].classList.add('active');
 }
 const activeDot = n => {
    
    for(dot of dots) {
       dot.classList.remove('active');
    }
    dots[n].classList.add('active');
 }

 const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
 }

 const nextSlide = ()=> {
    if(index == slideslv.length - 1) {
        index = 0;  
        prepareCurrentSlide(index);      
    } else {
        index++;
        prepareCurrentSlide(index);
    }
 }
 const prevSlide = ()=> {
    if(index == 0) {
        index = slideslv.length - 1;  
        prepareCurrentSlide(index);      
    } else {
        index--;
        prepareCurrentSlide(index);
    }
 }

 next.addEventListener('click', nextSlide);
 prev.addEventListener('click', prevSlide);

 //balls

 const prevball = document.getElementById('btn_prev_ball'),
       nextball = document.getElementById('btn_next_ball'),
       slidesball = document.querySelectorAll('.slideball');
     

 let iball = 0;

 console.log(slidesball);
 
 const activeSlideball = n => {
    
    for(let slideball of slidesball) {
       slideball.classList.remove('active');
    }
    slidesball[n].classList.add('active');
 }

 const nextSlideball = ()=> {
    if(iball == slidesball.length - 1) {
        iball = 0;  
        activeSlideball(iball);      
    } else {
        iball++;
        activeSlideball(iball);
    }
 }
 const prevSlideball = ()=> {
    if(iball == 0) {
        iball = slidesball.length - 1;  
        activeSlideball(iball);      
    } else {
        iball--;
        activeSlideball(iball);
    }
 }

 nextball.addEventListener('click', nextSlideball);
 prevball.addEventListener('click', prevSlideball);

// Nike

const prevnike = document.getElementById('btn_prev_nike'),
      nextnike = document.getElementById('btn_next_nike'),
      nikeslides = document.querySelectorAll('.nike_slide'); 

let nike = 0;

console.log(nikeslides);

const activeSlideNike = n => {

for(let nike_slide of nikeslides) {
    nike_slide.classList.remove('active');
}
nikeslides[n].classList.add('active');
}

const nextSlideNike = ()=> {
if(nike == nikeslides.length - 1) {
    nike = 0;  
  activeSlideNike(nike);      
} else {
    nike++;
  activeSlideNike(nike);
}
}
const prevSlideNike = ()=> {
if(nike == 0) {
    nike = nikeslides.length - 1;  
  activeSlideNike(nike);      
} else {
    nike--;
  activeSlideNike(nike);
}
}

nextnike.addEventListener('click', nextSlideNike);
prevnike.addEventListener('click', prevSlideNike);

// Kyrie

let start = 0; //смещение от левого края
const sliderLineKyrie = document.querySelector('.slider_line_kyrie');

document.querySelector('.kyrie-next').addEventListener('click', function(){
  start = start + 256;  // start += 256
  if (start > 768) {
    start = 0
  }
  sliderLineKyrie.style.left = -start + 'px';
});
document.querySelector('.kyrie-prev').addEventListener('click', function(){
  start = start - 256;  // start -= 256
  if (start < 0) {
    start = 768 ;
  }
  sliderLineKyrie.style.left = -start + 'px';
});


// Games

let startGame = 0; //смещение от левого края
const sliderLineGame = document.querySelector('.slider_line_game');

document.querySelector('.game-next').addEventListener('click', function(){
  startGame = startGame + 600;  // satartgame += 600
  if (startGame > 2400) {
    startGame = 0
  }
  sliderLineGame.style.left = -startGame + 'px';
});
document.querySelector('.game-prev').addEventListener('click', function(){
  startGame = startGame - 600;  // startgame -= 600
  if (startGame < 0) {
    startGame = 2400 ;
  }
  sliderLineGame.style.left = -startGame + 'px';
});

// Watch 

let rolex = 0; //смещение от левого края
const sliderLineWatch = document.querySelector('.slider_line_watch');

document.querySelector('.watch-next').addEventListener('click', function(){
  rolex = rolex + 400;  // rolex += 400
  if (rolex > 1600) {
    rolex = 0
  }
  sliderLineWatch.style.left = -rolex + 'px';
});
document.querySelector('.watch-prev').addEventListener('click', function(){
  rolex = rolex - 400;  // rolex -= 400
  if (rolex < 0) {
    rolex = 1600 ;
  }
  sliderLineWatch.style.left = -rolex + 'px';
});
// Dogs 

let akita = 0; //смещение от левого края
const sliderLineDog = document.querySelector('.slider_line_dog');

document.querySelector('.dog-next').addEventListener('click', function(){
  akita = akita + 500;  // akita += 500
  if (akita > 2000) {
    akita = 0
  }
  sliderLineDog.style.left = -akita + 'px';
});
document.querySelector('.dog-prev').addEventListener('click', function(){
  akita = akita - 500;  // akita -= 500
  if (akita < 0) {
    akita = 2000 ;
  }
  sliderLineDog.style.left = -akita + 'px';
});
// cats 

let kitty = 0; //смещение от левого края
const sliderLineCat = document.querySelector('.slider_line_cat');

document.querySelector('.cat-next').addEventListener('click', function(){
  kitty = kitty + 500;  // kitty += 500
  if (kitty > 1000) {
    kitty = 0
  }
  sliderLineCat.style.left = -kitty + 'px';
});
document.querySelector('.cat-prev').addEventListener('click', function(){
  kitty = kitty - 500;  // kitty -= 500
  if (kitty < 0) {
    kitty = 1000 ;
  }
  sliderLineCat.style.left = -kitty + 'px';
});


