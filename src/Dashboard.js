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

const store =JSON.parse(localStorage.getItem('listValue'))||[];
const lists = document.getElementById('todo-list');
lists.innerHTML="";
store.forEach((element) => {
    const list= document.createElement('li');
    const div = document.createElement('div');
    const spn =document.createElement('span');
    const text =document.createElement('h1');
    const text2=document.createElement('p');
    text.textContent = element.title || 'untitled';
    text2.textContent=element.description||' no des';

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
     var inp;
     var inp2;
     modbtn.addEventListener('click', () => {
          inp = document.createElement('input');
          inp2 =document.createElement('input');
         inp2.className='inpp';
         inp.className='inpp';
         inp.type='text';
         inp2.typr='text';
         inp.placeholder='enter';
        if(modbtn.textContent == 'Modify'){
         let text = div.firstElementChild;
         let text2 = div.lastElementChild;
         inp.value= text.textContent;
         inp2.value=text2.textContent
         modbtn.inputElement = inp ;
 
         div.replaceChild(inp, text);
         div.replaceChild(inp2,text2);
 
         
         modbtn.textContent = 'Save';
        }else if(modbtn.textContent == 'Save'){
         const newContent = modbtn.inputElement.value.trim();
         const newContent2 =inp2.value.trim();
         text2.textContent=newContent2
         text.textContent = newContent;
         div.replaceChild(text, modbtn.inputElement);
 
         modbtn.textContent = 'Modify';
        }   // document.getElementById('todo-list').appendChild(inp);
     })

    div.className = 'bound';
    list.className = 'list';
     spn.className = 'span';
    text.className='list-tit' 
    text2.className='list-des';

    div.appendChild(text);
    div.appendChild(text2);
    list.appendChild(div);
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