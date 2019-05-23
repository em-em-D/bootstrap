const navslide =() =>{
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navlinks');
  const navlinks = document.querySelectorAll('..navlinks li');
  ///toggle nav
  burger.addEventListener('click',()=>{

 nav.classList.toggle('nav-active');

});
/// animate links
navlinks.foreach((link, index)=>{
  link.style.animation = 'navlinksFade 0.5s ease foward ${index/7 + 0.3} a';
  console.log(index);
});
}

navslide();
