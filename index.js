
var inputDEs;
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
// console.log(localStorage.getItem('listValue'));
input.value = " ";
inputDEs.value=" ";
window.location.href='/public/Dashboard.html';
})

var arr = [
]

function saveList(value,value2){
 var a={
        title:value,
        description:value2
     };
     arr.push(a);
    localStorage.setItem('listValue',JSON.stringify(arr));
    var b =JSON.parse(localStorage.getItem('listValue'));
    console.log(arr.length);
    for(i=0;i<b.length;i++){
        console.log(b[i]);
    }

}




// // // Add delete fxn
// // const dltbtn= document.createElement('button');
// // dltbtn.className = 'btn-sty';
// // dltbtn.textContent = 'Delete';
// // dltbtn.addEventListener('click', () => {
// //     list.remove();
// // })

// // //Modify fxn
// // const modbtn = document.createElement('button');
// // modbtn.className='btn-sty';
// // modbtn.textContent = 'Modify';
// // modbtn.addEventListener('click', () => {
// //     const inp = document.createElement('input');
// //     inp.className='inpp';
// //     inp.type='text';
// //     inp.placeholder='enter';
// //    if(modbtn.textContent == 'Modify'){
// //     inp.value= list.firstElementChild.textContent;
// //     list.replaceChild(inp, text);
// //     modbtn.inputElement = inp ;
// //     modbtn.textContent = 'Save';
// //    }else if(modbtn.textContent == 'Save'){
// //     const newContent = modbtn.inputElement.value.trim();
// //     text.textContent = newContent;
// //     list.replaceChild(text, modbtn.inputElement);
// //     modbtn.textContent = 'Modify';
// //    }   // document.getElementById('todo-list').appendChild(inp);
// // })
// // // Appending
// // list.appendChild(text);
// // list.append(dltbtn);
// // list.append(modbtn);
// // document.getElementById('todo-list').appendChild(list);
// // }
// console.log(taskText);
// saveList(text.textContent);
// console.log(localStorage.getItem('listValue'));
//    })

