function openMenu() {
  // Seleciona o menu e adiciona a classe .menu-expander ao corpo
  const menu = document.querySelector('.nav_header-menu');
  const openButton = document.querySelector('.open-menu');
  const closeButton = document.querySelector('.close-menu');
  document.body.classList.add('menu-expanded');
  
  // Alterna o display do menu para block
  menu.style.display = 'block';
  openButton.style.display = 'none';
  closeButton.style.display = 'block';
}

function closeMenu() {
  // Seleciona o menu e remove a classe .menu-expander do corpo
  var menu = document.querySelector('.nav_header-menu');
  const openButton = document.querySelector('.open-menu');
  const closeButton = document.querySelector('.close-menu');
  document.body.classList.remove('menu-expanded');
  
  // Alterna o display do menu para none
  menu.style.display = 'none';
  openButton.style.display = 'block';
  closeButton.style.display = 'none';
}
