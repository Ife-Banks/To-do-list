
// SignUp credentials
const user = document.getElementById('user');
    const emal =document.getElementById('emal');
    const pass = document.getElementById('pass');
    var user1;
    var emal1;
    var pass1;
   
document.getElementById('sign').addEventListener('click', () => {
    if(user.value !== ' ' && emal.value !== '' && pass.value !== ''){
        user1 = user.value.trim();
         emal1 = emal.value.trim();
         pass1 = pass.value.trim();
        }
     saveTask(user1,emal1,pass1);
     console.log(user1);
     window.location.href='/public/login.html';
    }
    );

function saveTask(user,email,password){
    localStorage.setItem('username',user);
    localStorage.setItem('email',email);
    localStorage.setItem('password',password);
    console.log(localStorage.length);
}