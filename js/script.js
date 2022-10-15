'use strict'

{
  const open = document.getElementById('open');
  const hide_navi = document.querySelector('.hide-navi');
  const close = document.getElementById('close');
  
  open.addEventListener('click', () =>{
    hide_navi.classList.add('show');
    close.classList.add('show');
    open.classList.add('hide');  
  });
  
  
  
  close.addEventListener('click', () =>{
    hide_navi.classList.remove('show');
    close.classList.remove('show');
    open.classList.remove('hide');  
  });
}