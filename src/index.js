document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form =document.querySelector("form");
const input=document.querySelector("#new-task-description");
const btn=document.createElement("button");
form.addEventListener("submit",function(e){
  e.preventDefault();

  const li =document.createElement('li');
  const newTodo =input.value;

  li.textContent=`${newTodo} `;
 
  btn.textContent="x"
  li.appendChild(btn);
  
  const ul =document.querySelector('#tasks');
  ul.appendChild(li);
  form.reset();

})
function deleteButton() {
  btn.parentElement.remove();
}
btn.addEventListener("click",deleteButton);

});


