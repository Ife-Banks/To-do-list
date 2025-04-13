
var inputDEs;
var taskText;
var des;
//Addtask
document.getElementById('ad-btn').addEventListener('click',function(e){
    e.preventDefault();
const input = document.getElementById('todo-input');
if(input.value !== ''){
  taskText = input.value.trim();
 inputDEs = document.getElementById('todo-des');
des = inputDEs.value.trim();
}
// var text;
//create items
// if (input.value !== "" ){
//     const list = document.createElement('li');
//     list.className = 'list';
//     text = document.createElement('p');
// // storing
//     text.textContent = taskText;
// console.log();}
// return to null
// console.log(taskText);
saveList(taskText,des);
input.value = " ";
inputDEs.value=" ";
window.location.href='/public/Dashboard.html';
})

    const arr = JSON.parse(localStorage.getItem('listValue'))||[]

function saveList(value,value2){
    
     arr.push(
        {
            title:value,
            description:value2
         }
     );
    localStorage.setItem('listValue',JSON.stringify(arr));
    }




