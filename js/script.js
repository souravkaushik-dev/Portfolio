// ===============================
// APPLE STYLE PORTFOLIO SCRIPT
// ===============================


// -------------------------------
// REVEAL ANIMATION
// -------------------------------

const reveals =
document.querySelectorAll('.reveal');

function revealSections(){

  reveals.forEach((section)=>{

    const sectionTop =
    section.getBoundingClientRect().top;

    const triggerPoint =
    window.innerHeight - 120;

    if(sectionTop < triggerPoint){

      section.classList.add('active');

    }

  });

}

window.addEventListener(
  'scroll',
  revealSections
);

revealSections();


// -------------------------------
// GLASS HOVER EFFECT
// -------------------------------

const hoverCards =
document.querySelectorAll('.hover-card');

hoverCards.forEach((card)=>{

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
        rgba(255,255,255,0.14),
        rgba(255,255,255,0.05)
      )`;

      card.style.transform =
      `
      rotateX(${(y - rect.height / 2) / 20}deg)
      rotateY(${-(x - rect.width / 2) / 20}deg)
      translateY(-8px)
      `;

    }
  );

  card.addEventListener(
    'mouseleave',
    ()=>{

      card.style.background =
      'rgba(255,255,255,0.05)';

      card.style.transform =
      'rotateX(0deg) rotateY(0deg) translateY(0px)';

    }
  );

});


// -------------------------------
// NAVBAR BLUR ON SCROLL
// -------------------------------

const navbar =
document.querySelector('.navbar');

window.addEventListener(
  'scroll',
  ()=>{

    if(window.scrollY > 50){

      navbar.style.background =
      'rgba(10,10,10,0.75)';

      navbar.style.backdropFilter =
      'blur(24px)';

      navbar.style.border =
      '1px solid rgba(255,255,255,0.08)';

    }

    else{

      navbar.style.background =
      'rgba(255,255,255,0.04)';

    }

  }
);


// -------------------------------
// PARALLAX BACKGROUND EFFECT
// -------------------------------

const gradient1 =
document.querySelector('.gradient-1');

const gradient2 =
document.querySelector('.gradient-2');

window.addEventListener(
  'mousemove',
  (e)=>{

    const x =
    e.clientX / window.innerWidth;

    const y =
    e.clientY / window.innerHeight;

    gradient1.style.transform =
    `
    translate(
      ${x * 30}px,
      ${y * 30}px
    )
    `;

    gradient2.style.transform =
    `
    translate(
      ${x * -30}px,
      ${y * -30}px
    )
    `;

  }
);


// -------------------------------
// BUTTON RIPPLE EFFECT
// -------------------------------

const buttons =
document.querySelectorAll(
'.primary-btn, .secondary-btn'
);

buttons.forEach((button)=>{

  button.addEventListener(
    'click',
    function(e){

      const circle =
      document.createElement('span');

      const diameter =
      Math.max(
        button.clientWidth,
        button.clientHeight
      );

      const radius =
      diameter / 2;

      circle.style.width =
      circle.style.height =
      `${diameter}px`;

      circle.style.left =
      `${e.clientX - button.offsetLeft - radius}px`;

      circle.style.top =
      `${e.clientY - button.offsetTop - radius}px`;

      circle.classList.add('ripple');

      const ripple =
      button.querySelector('.ripple');

      if(ripple){

        ripple.remove();

      }

      button.appendChild(circle);

    }
  );

});


// -------------------------------
// ACTIVE NAV LINK
// -------------------------------

const sections =
document.querySelectorAll('section');

const navLinks =
document.querySelectorAll('.nav-links a');

window.addEventListener(
  'scroll',
  ()=>{

    let current = '';

    sections.forEach((section)=>{

      const sectionTop =
      section.offsetTop;

      if(window.scrollY >= sectionTop - 200){

        current =
        section.getAttribute('id');

      }

    });

    navLinks.forEach((link)=>{

      link.classList.remove('active-link');

      if(
        link.getAttribute('href')
        .includes(current)
      ){

        link.classList.add('active-link');

      }

    });

  }
);


// -------------------------------
// SMOOTH FLOATING EFFECT
// -------------------------------

const floatingCards =
document.querySelectorAll(
'.hero-card'
);

floatingCards.forEach((card,index)=>{

  card.animate(

    [
      {
        transform:'translateY(0px)'
      },

      {
        transform:'translateY(-10px)'
      },

      {
        transform:'translateY(0px)'
      }

    ],

    {
      duration:3000 + index * 400,
      iterations:Infinity
    }

  );

});


// -------------------------------
// LOADING ANIMATION
// -------------------------------

window.addEventListener(
  'load',
  ()=>{

    document.body.classList.add(
      'loaded'
    );

  }
);