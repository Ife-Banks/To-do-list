// Login credentials
document.getElementById('login').addEventListener('click', () => {
    const Cemal =document.getElementById('Cemal');
    const Cpass = document.getElementById('Cpass');
    if(Cemal.value !== '' & Cpass.value !== ''){
      var  Cemal1 = Cemal.value.trim();
      var Cpass1 = Cpass.value.trim();
        if(Cemal1 == localStorage.getItem('email') && Cpass1 == localStorage.getItem('password')){
            window.location.href='/public/Dashboard.html';
        }else {
            alert('Password incorrect, Try again');
        }
    }
    console.log(localStorage.length);
})