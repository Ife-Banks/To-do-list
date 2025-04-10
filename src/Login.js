// Login credentials
document.getElementById('login').addEventListener('click', () => {
    const Cemal =document.getElementById('Cemal');
    const Cpass = document.getElementById('Cpass');
    if(Cemal.value !== '' & Cpass.value !== ''){
      var  Cemal1 = Cemal.value.trim();
      var Cpass1 = Cpass.value.trim();
        if(Cemal1 == localStorage.getItem('email') && Cpass1 == localStorage.getItem('password')){
            alert('congrats');
        }else {
            console.log('nil');
        }
    }
    console.log(localStorage.length);
})