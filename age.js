let date = new Date ();
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();

console.log(`${day},${month},${year}`);

document.getElementById('current').innerHTML = (`${day},${month},${year}`);

let submit = document.getElementById('sub').onclick = function(){
    let input = document.getElementById('input').value;
    console.log('input',input)

let inputarr = input.split(`-`);
console.log('inputarr',inputarr);

let age = '';
let agedisplay = document.getElementById('age-display');
age=year-inputarr[0];
console.log('age',age);
agedisplay.innerHTML=age;
}