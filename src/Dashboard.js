const b =localStorage.getItem('username');
document.getElementById('FirstLetter').textContent=b.charAt(0).toUpperCase();
document.getElementById('Usernam').textContent=' Hello, ' + b;



document.getElementById('add').addEventListener('click',()=>{
    window.location.href='/public/addTask.html';
})




const store =JSON.parse(localStorage.getItem('listValue'))||[];
const lists = document.getElementById('todo-list');
lists.innerHTML="";
store.forEach((element) => {
    
    
    const list= document.createElement('li');
    const div = document.createElement('div');
    const spn =document.createElement('span');
    const text =document.createElement('h1');
    const text2=document.createElement('p');
    const dat =document.createElement('p');
    text.textContent = element.title || 'untitled';
    text2.textContent=element.description||' No description';
    dat.textContent=element.date;
    

        // Add delete fxn
        const dltbtn= document.createElement('button');
        dltbtn.className = 'btn-sty';
        dltbtn.textContent = 'Delete';
        dltbtn.addEventListener('click', () => {
            const index = store.findIndex(task => task.title === element.title);
            if (index !== -1) {
                store.splice(index, 1); // Remove from array
                localStorage.setItem('listValue', JSON.stringify(store)); // Update storage
                lists.removeChild(list); // Remove from UI
            }
        });

    //      // Modify fxn
   // Modify function - corrected version
const modbtn = document.createElement('button');
modbtn.className = 'btn-sty';
modbtn.textContent = 'Modify';

modbtn.addEventListener('click', () => {
    if (modbtn.textContent == 'Modify') {
        // Create input fields
        const titleInput = document.createElement('input');
        const descInput = document.createElement('input');
        
        // Set up input fields
        titleInput.className = 'inpp';
        descInput.className = 'inpp';
        titleInput.type = 'text';
        descInput.type = 'text';
        titleInput.value = text.textContent;
        descInput.value = text2.textContent;
        
        // Store references to the original elements and inputs
        modbtn.originalTitle = text;
        modbtn.originalDesc = text2;
        modbtn.titleInput = titleInput;
        modbtn.descInput = descInput;
        
        // Replace text with input fields
        div.replaceChild(titleInput, text);
        div.replaceChild(descInput, text2);
        
        modbtn.textContent = 'Save';
    } 
    else if (modbtn.textContent == 'Save') {
        // Get updated values
        const newTitle = modbtn.titleInput.value.trim();
        const newDesc = modbtn.descInput.value.trim();
        
        // Update text elements
        modbtn.originalTitle.textContent = newTitle || 'untitled';
        modbtn.originalDesc.textContent = newDesc || 'No description';
        
        // Restore original elements
        div.replaceChild(modbtn.originalTitle, modbtn.titleInput);
        div.replaceChild(modbtn.originalDesc, modbtn.descInput);
        
        // Update localStorage
        const index = store.findIndex(task => task.title === element.title);
        if (index !== -1) {
            store[index].title = newTitle;
            store[index].description = newDesc;
            localStorage.setItem('listValue', JSON.stringify(store));
        }
        
        modbtn.textContent = 'Modify';
    }
});
    div.className = 'bound';
    list.className = 'list';
     spn.className = 'span';
    text.className='list-tit' 
    text2.className='list-des';
    dat.className='DATE';

    div.appendChild(text);
    div.appendChild(text2);
    list.appendChild(div);
    div.appendChild(dat);
    
     spn.appendChild(dltbtn);
    spn.appendChild(modbtn);
     list.appendChild(spn);
    lists.appendChild(list);
   });
    //create list and text
    console.log(store.length)
   
    
   
     
 
 

 
 
   
     
      
console.log(localStorage.key(0));
console.log(localStorage.key(1));
console.log(localStorage.key(2));
console.log(localStorage.key(3));
console.log(localStorage.key(4));


// document.getElementById('ad-btn').addEventListener('click',function(){
//     if (input.value !== "" ){
//         const list = document.createElement('li');
//         list.className = 'list';
//         text = document.createElement('p');
//     // storing
//         text.textContent = localStorage.getItem('listValue');
//     console.log();
//     //return to null
//     input.value = " ";
    
//     // Add delete fxn
//     const dltbtn= document.createElement('button');
//     dltbtn.className = 'btn-sty';
//     dltbtn.textContent = 'Delete';
//     dltbtn.addEventListener('click', () => {
//         list.remove();
//     })
    
//     //Modify fxn
//     const modbtn = document.createElement('button');
//     modbtn.className='btn-sty';
//     modbtn.textContent = 'Modify';
//     modbtn.addEventListener('click', () => {
//         const inp = document.createElement('input');
//         inp.className='inpp';
//         inp.type='text';
//         inp.placeholder='enter';
//        if(modbtn.textContent == 'Modify'){
//         inp.value= list.firstElementChild.textContent;
//         list.replaceChild(inp, text);
//         modbtn.inputElement = inp ;
//         modbtn.textContent = 'Save';
//        }else if(modbtn.textContent == 'Save'){
//         const newContent = modbtn.inputElement.value.trim();
//         text.textContent = newContent;
//         list.replaceChild(text, modbtn.inputElement);
//         modbtn.textContent = 'Modify';
//        }   // document.getElementById('todo-list').appendChild(inp);
//     })
//     // Appending
//     list.appendChild(text);
//     list.append(dltbtn);
//     list.append(modbtn);
//     document.getElementById('todo-list').appendChild(list);
//     }
//     console.log(taskText);
//     saveList(text.textContent);
//     console.log(localStorage.getItem('listValue'));
//        })

// // 