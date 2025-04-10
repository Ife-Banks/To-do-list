const a =[];
const b =localStorage.getItem('username');
for(var i=0;i<=b.length-1;i++){
    a.push(b[i]);
}
a.join(',');
const c = a[0];
document.getElementById('FirstLetter').textContent=a[0];

document.getElementById('Usernam').textContent=' Hello, ' + b;

document.getElementById('add').addEventListener('click',()=>{
    window.location.href='/public/addTask.html';
})

document.addEventListener('DOMContentLoaded',function(){
    const lisValue = localStorage.getItem('listValue');
    const des =  localStorage.getItem('Des');
const lisContainer= document.querySelector('.list');
if(lisValue){
    //create list and text
   
   const list= document.createElement('li');
   const div = document.createElement('div');
   const spn =document.createElement('span');
   list.appendChild(div);
   list.appendChild(spn);
   div.className = 'bound';
   list.className = 'list';
   text =document.createElement('h1');
   text.className='list-tit'
   text.textContent = lisValue;
    text2=document.createElement('p');
    text2.className='list-des';
    text2.textContent=des;


   // Add delete fxn
    const dltbtn= document.createElement('button');
    dltbtn.className = 'btn-sty';
    dltbtn.textContent = 'Delete';
    dltbtn.addEventListener('click', () => {
        list.remove();
    })


   // Modify fxn
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
        list.replaceChild(inp, text);
        modbtn.inputElement = inp ;
        modbtn.textContent = 'Save';
       }else if(modbtn.textContent == 'Save'){
        const newContent = modbtn.inputElement.value.trim();
        text.textContent = newContent;
        list.replaceChild(text, modbtn.inputElement);
        modbtn.textContent = 'Modify';
       }   // document.getElementById('todo-list').appendChild(inp);
    })
    
     div.appendChild(text);
     div.appendChild(text2);
   
   spn.append(dltbtn);
   spn.append(modbtn);
   (div);
  
   document.getElementById('todo-list').appendChild(list);
  
}
})


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