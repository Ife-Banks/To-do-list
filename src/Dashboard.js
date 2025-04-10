const a =[];
const b =localStorage.getItem('username');
for(var i=0;i<=b.length-1;i++){
    a.push(b[i]);
}
a.join(',');
const c = a[0];
document.getElementById('FirstLetter').textContent=a[0];

document.getElementById('Usernam').textContent=' Hello, ' + b;

