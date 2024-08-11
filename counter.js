let counter = 0;

document.getElementById('dec').onclick = function() {
    count -=1
    document.getElementById('number').innerHTML = count;
    
}
document.getElementById('res').onclick = function() {
    count =0
    document.getElementById('number').innerHTML = count;
    
}
document.getElementById('inc').onclick = function() {
    count +=1
    document.getElementById('number').innerHTML = count;
    
}