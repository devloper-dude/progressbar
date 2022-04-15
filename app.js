var data = 'I Love Coding';
const input = document.querySelector('.input');
const submit = document.querySelector('.button-sub');
const success = document.querySelector('.button-suc');
const error = document.querySelector('.button-err');
const btn = document.querySelector('.button');
const hover = document.querySelector('.hover');

btn.addEventListener('click',()=>{
  
  var prog =0;
  var id = setInterval(add,10);
  
  function add(){
    if(prog >= 100){
      clearInterval(id);
      
      if(input.value == data){
        submit.style.display = 'none';
        success.style.display = 'block';
        input.value = '';
      }
      else{
        submit.style.display = 'none';
        error.style.display = 'block';
        input.value = '';
      }
    }
    else{
      prog++;
      hover.style.width = `${prog}%`;
    }
  }
})

function reload(){
    location.reload(true);
}

success.addEventListener('click',reload);
error.addEventListener('click',reload);

document.querySelector('.subbtn').addEventListener('click', () => {
  subbtn.classList.toggle('stop');
})