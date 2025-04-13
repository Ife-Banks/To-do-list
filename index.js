

//Addtask
document.getElementById('ad-btn').addEventListener('click',function(e){
    e.preventDefault();
    const input = document.getElementById('todo-input');
    const  inputDEs = document.getElementById('todo-des');
    const  taskText = input.value.trim();
    const des = inputDEs.value.trim();
    const d = new Date();
   
if(taskText){
    saveList(taskText,des,d.toUTCString());
    input.value = " ";
    inputDEs.value=" ";
    alert('Task added successfully!');
    window.location.href='/public/Dashboard.html';
}else{
    alert('Task title cannot be empty');
}



})
   
    
   

function saveList(value,value2,value3){
    const arr = JSON.parse(localStorage.getItem('listValue'))||[];
     arr.push(
        {
            title:value,
            description:value2,
            date:value3,
            
         }
     );
    localStorage.setItem('listValue',JSON.stringify(arr));
    }




