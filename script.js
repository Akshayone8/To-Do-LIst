let btn = document.getElementById('submit_btn');
let txt = document.getElementById('todo_text');
let ls = document.getElementById('list_');


btn.addEventListener('click',function(){
  let li = document.createElement('li');
  
  li.innerText=txt.value;
  ls.appendChild(li);
  txt.value='';
  li.addEventListener('click',function(){
    li.style.textDecoration='line-through';
  })
  li.addEventListener('dblclick',function(){
  ls.removeChild(li);
  })
})
