const btnMobile = document.querySelector('#btn-mobile');

const features = document.querySelector('#features');
const SubMenuFeatures = document.querySelector('.sub-menu-features');

const compay = document.querySelector('#company');
const subMenuCompany = document.querySelector('.sub-menu-company');



btnMobile.addEventListener('click', ()=>{
  const header = document.querySelector('#header');
  header.classList.toggle('active');
});

// ativar sub-menu
features.addEventListener('click', (event)=>{
  const pergunta = event.currentTarget;
  console.log(pergunta);
  SubMenuFeatures.classList.toggle('ativo');
  const ativo = SubMenuFeatures.classList.contains('ativo');
  pergunta.setAttribute("aria-expanded", ativo);
    console.log(ativo);
});
compay.addEventListener('click', (event)=>{
  const pergunta = event.currentTarget;
  subMenuCompany.classList.toggle('ativo');
  const ativo = subMenuCompany.classList.contains('ativo');
  pergunta.setAttribute("aria-expanded", ativo);
  console.log(ativo);
});
