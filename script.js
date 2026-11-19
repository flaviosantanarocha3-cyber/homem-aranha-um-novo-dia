/*
SCRIPT DA LANDING PAGE SPIDER-MAN

*/
const links = document.querySelectorAll('.js-link');
const sections = document.querySelectorAll('section');
const header = document.querySelector('.topo');

// Função para calcular a altura do header
function getHeaderHeight() {
  return header ? header.offsetHeight : 80;
}

window.addEventListener('scroll', () => {
  const headerHeight = getHeaderHeight();

  sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop - headerHeight;
    let height = section.offsetHeight;
    let id = section.getAttribute('id');

    if (top >= offset && top < offset + height) {
      links.forEach(link => {
        link.classList.remove('is-active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('is-active');
        }
      });
    }
  });
});

// Atualiza ao redimensionar a tela
window.addEventListener('resize', () => {
  const headerHeight = getHeaderHeight();
  // Atualiza apenas as seções que precisam de altura fixa (exclui #videos e #historia)
  sections.forEach(section => {
    if (section.id !== 'videos' && section.id !== 'historia') {
      section.style.height = `calc(105vh - ${headerHeight}px)`;
    }
  });
});


/* ============================================================
   1. CARROSSEL DE VIDEOS (Swiper)
   
   ============================================================ */
const swiper = new Swiper('.swiper', {

    loop: true,          // ao chegar no ultimo video, volta ao primeiro
    speed: 600,          // duracao da animacao de troca (milissegundos)

    // troca de slide automatica a cada 4 segundos
    autoplay: {
        delay: 4000,
        // mesmo se o usuario interagir, o autoplay volta depois
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',   // onde as bolinhas aparecem
        clickable: true,            // permite clicar nas bolinhas
    },

    navigation: {
        nextEl: '.swiper-button-next',   // seta proximo
        prevEl: '.swiper-button-prev',   // seta anterior
    },

    // quantos cards aparecem ao mesmo tempo, por tamanho de tela
    breakpoints: {
        320: {                    // celular: 1 card por vez
            slidesPerView: 1,
            spaceBetween: 16,
        },
        
        767: {                  // tablet: 2 cards por vez
            slidesPerView: 2.1,
            spaceBetween: 24,
        },
        1024: {                 // desktop: 3 cards por vez
            slidesPerView: 3.1,
            spaceBetween: 24,
        },
        1200: {                 // desktop: 3 cards por vez
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
});

// Inicialização padrão
ScrollReveal().reveal('.title', {
  duration: 2000,       // tempo da animação (ms)
  distance: '20%',     // deslocamento
  origin: 'left',     // direção da entrada (top, right, bottom, left)
  opacity: 0,           // começa invisível
  scale: 0.95,          // leve zoom inicial
  easing: 'ease-in-out',
  reset: true,          // anima novamente ao voltar na tela
  interval: 100         // atraso entre elementos em sequência
});

ScrollReveal().reveal('.subtitle', {
  duration: 2000,       // tempo da animação (ms)
  distance: '20%',     // deslocamento
  origin: 'right',     // direção da entrada (top, right, bottom, left)
  opacity: 0,           // começa invisível
  scale: 0.95,          // leve zoom inicial
  easing: 'ease-in-out',
  reset: true,          // anima novamente ao voltar na tela
  interval: 100         // atraso entre elementos em sequência
});

ScrollReveal().reveal('.s-video', {
  duration: 2000,       // tempo da animação (ms)
  distance: '20%',     // deslocamento
  origin: 'bottom',     // direção da entrada (top, right, bottom, left)
  opacity: 0,           // começa invisível
  scale: 0.95,          // leve zoom inicial
  easing: 'ease-in-out',
  reset: true,          // anima novamente ao voltar na tela
  interval: 100         // atraso entre elementos em sequência
});

ScrollReveal().reveal('.imagem-div', {
  duration: 2000,
  distance: '20%',
  origin: 'left',
  opacity: 0,
  scale: 0.95,
  easing: 'ease-in-out',
  reset: true,
  interval: 100
});

ScrollReveal().reveal('.historia-texto', {
  duration: 1500,
  distance: '20%',
  origin: 'bottom',
  opacity: 0,
  scale: 0.95,
  easing: 'ease-in-out',
  reset: true,
  interval: 100
});

/* ============================================================
   MENU HAMBÚRGUER MOBILE
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Pega o botão hambúrguer e o menu
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll('.navbar-burger'),
    0
  );

  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        // Pega o target do menu
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Alterna a classe is-active no botão e no menu
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});


