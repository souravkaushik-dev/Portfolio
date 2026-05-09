const reveals =
document.querySelectorAll('.reveal');

window.addEventListener(
'scroll',
revealSection
);

function revealSection(){

  reveals.forEach((element)=>{

    const windowHeight =
    window.innerHeight;

    const revealTop =
    element.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){

      element.classList.add('active');

    }

  });

}

revealSection();


// GLASS HOVER EFFECT

const cards =
document.querySelectorAll('.hover-card');

cards.forEach((card)=>{

  card.addEventListener(
  'mousemove',
  (e)=>{

    const rect =
    card.getBoundingClientRect();

    const x =
    e.clientX - rect.left;

    const y =
    e.clientY - rect.top;

    card.style.background = `
      radial-gradient(
      circle at ${x}px ${y}px,
      rgba(255,255,255,0.95),
      rgba(255,255,255,0.55)
      )`;

  });

  card.addEventListener(
  'mouseleave',
  ()=>{

    card.style.background =
    'rgba(255,255,255,0.55)';

  });

});