const imagemIntroducao = document.querySelector('#conteudo-img img');
const smallTela = window.matchMedia('(max-width: 1000px)');

if(smallTela.matches){
  imagemIntroducao.src = './images/image-hero-mobile.png';
  console.log('tela menor');
}else{
  imagemIntroducao.src = './images/image-hero-desktop.png';
  console.log('tela maior');
}

console.log(window.innerHeight);