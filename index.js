


document.getElementById('ad-btn').addEventListener('click',function(){
const input = document.getElementById('todo-input');
taskText = input.value.trim();

if (input.value !== "" ){
    const list = document.createElement('li');
    list.className = 'list';
    const text = document.createElement('p');

text.textContent = taskText;

console.log();
input.value = " ";

// Add delete fxn
const dltbtn= document.createElement('button');
dltbtn.className = 'btn-sty';
dltbtn.textContent = 'Delete';
dltbtn.addEventListener('click', () => {
    list.remove();
})

//Modify fxn
const modbtn = document.createElement('button');
modbtn.className='btn-sty';
modbtn.textContent = 'Modify';
modbtn.addEventListener('click', () => {
    const inp = document.createElement('input');
    inp.className='inpp';
    inp.type='text';
    inp.placeholder='enter';
   if(modbtn.textContent == 'Modify'){
    inp.value= list.firstElementChild.textContent;
    modbtn.textContent = 'Save';
    list.replaceChild(inp, text);
   }else if(modbtn.textContent == 'Save'){
    const newContent = inp.value.trim();
    text.textContent = newContent;
    modbtn.textContent = 'Modify';
    list.replaceChild(newContent, inp);

   }
    // document.getElementById('todo-list').appendChild(inp);
}

)


// Appending
list.appendChild(text);
list.append(dltbtn);
list.append(modbtn);
document.getElementById('todo-list').appendChild(list);



}
   }

)


