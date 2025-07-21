// Navegación móvil
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// Navegación suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Animación de barras de habilidades al hacer scroll
const skillBars = document.querySelectorAll('.skill-progress');
const skillsSection = document.querySelector('.skills');

const animateSkillBars = () => {
  const sectionTop = skillsSection.offsetTop;
  const sectionHeight = skillsSection.offsetHeight;
  const scrollTop = window.pageYOffset;
  const windowHeight = window.innerHeight;

  if (scrollTop + windowHeight > sectionTop && scrollTop < sectionTop + sectionHeight) {
    skillBars.forEach(bar => {
      const currentWidth = bar.style.width;
      if (currentWidth && currentWidth !== '0%') {
        const targetWidth = currentWidth;
        bar.style.width = '0%';
        setTimeout(() => {
          bar.style.width = targetWidth;
        }, 100);
      }
    });
  }
};

// Observador de intersección para animaciones
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-up');
    }
  });
}, observerOptions);

// Observar elementos para animaciones
document.addEventListener('DOMContentLoaded', () => {
  const animateElements = document.querySelectorAll('.project-card, .skill-item, .tech-item, .experience-item');
  animateElements.forEach(el => observer.observe(el));
  
  // Inicializar barras de habilidades
  setTimeout(() => {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
      const targetWidth = bar.style.width;
      bar.style.width = '0%';
      setTimeout(() => {
        bar.style.width = targetWidth;
      }, 100);
    });
  }, 1000);
});

// Efecto parallax para el hero
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  const rate = scrolled * -0.5;
  hero.style.transform = `translateY(${rate}px)`;
});

// Animación de escritura para el título
const typeWriter = (element, text, speed = 100) => {
  let i = 0;
  element.innerHTML = '';
  
  const timer = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
};

// Aplicar efecto de escritura al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  const heroTitle = document.querySelector('.hero-title .gradient-text');
  if (heroTitle) {
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 150);
  }
});

// Efecto hover para las tarjetas de proyectos
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Animación de contador para las habilidades
const animateCounter = (element, target, duration = 2000) => {
  let start = 0;
  const increment = target / (duration / 16);
  
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target + '%';
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start) + '%';
    }
  }, 16);
};

// Efecto de partículas en el fondo del hero
const createParticle = () => {
  const particle = document.createElement('div');
  particle.style.position = 'absolute';
  particle.style.width = '2px';
  particle.style.height = '2px';
  particle.style.background = 'rgba(255, 255, 255, 0.5)';
  particle.style.borderRadius = '50%';
  particle.style.pointerEvents = 'none';
  
  const hero = document.querySelector('.hero');
  const heroRect = hero.getBoundingClientRect();
  
  particle.style.left = Math.random() * heroRect.width + 'px';
  particle.style.top = heroRect.height + 'px';
  
  hero.appendChild(particle);
  
  const animation = particle.animate([
    { transform: 'translateY(0px)', opacity: 1 },
    { transform: `translateY(-${heroRect.height}px)`, opacity: 0 }
  ], {
    duration: Math.random() * 3000 + 2000,
    easing: 'linear'
  });
  
  animation.onfinish = () => {
    particle.remove();
  };
};

// Crear partículas periódicamente
setInterval(createParticle, 300);

// Efecto de resaltado en la navegación
const highlightNavLink = () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
};

// Aplicar resaltado al hacer scroll
window.addEventListener('scroll', highlightNavLink);

// Efecto de carga de página
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Animación de scroll para el indicador
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
  scrollIndicator.addEventListener('click', () => {
    const aboutSection = document.querySelector('#about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  });
}

// Efecto de hover para los enlaces de contacto
document.querySelectorAll('.contact-link').forEach(link => {
  link.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-3px) scale(1.05)';
  });
  
  link.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Animación de las barras de habilidades al hacer scroll
window.addEventListener('scroll', animateSkillBars);

// Función para mostrar las barras de habilidades inmediatamente
const showSkillBars = () => {
  const skillBars = document.querySelectorAll('.skill-progress');
  skillBars.forEach(bar => {
    const targetWidth = bar.style.width;
    bar.style.width = '0%';
    setTimeout(() => {
      bar.style.width = targetWidth;
    }, 200);
  });
};

// Mostrar barras cuando se carga la página
window.addEventListener('load', showSkillBars);

// Efecto de typing para la descripción
const typeDescription = () => {
  const description = document.querySelector('.hero-description');
  if (description) {
    const originalText = description.textContent;
    description.textContent = '';
    
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < originalText.length) {
        description.textContent += originalText.charAt(i);
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);
  }
};

// Aplicar efecto de typing después de que termine el título
setTimeout(typeDescription, 2000);

// Efecto de hover para las tarjetas de habilidades
document.querySelectorAll('.skill-item').forEach(item => {
  item.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px) scale(1.02)';
    this.style.boxShadow = '0 8px 25px rgba(0, 212, 255, 0.3)';
  });
  
  item.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
    this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
  });
});

// Efecto de hover para las tarjetas de experiencia
document.querySelectorAll('.experience-item').forEach(item => {
  item.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.02)';
  });
  
  item.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
});

// Animación de entrada para el logo
const logo = document.querySelector('.logo-text');
if (logo) {
  logo.style.opacity = '0';
  logo.style.transform = 'translateY(-20px)';
  
  setTimeout(() => {
    logo.style.transition = 'all 0.6s ease';
    logo.style.opacity = '1';
    logo.style.transform = 'translateY(0)';
  }, 500);
} 