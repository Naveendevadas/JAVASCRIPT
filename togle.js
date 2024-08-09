
let obj = document.getElementById('img');
let color = ["black","white"]
let text = ["white","black"];
let i = 0 ;
let t=0;
obj.addEventListener("click", function() {
    document.body.style.color = text[t];
    document.body.style.background = color[i];
    i = (i + 1)% color.length;
    t = (t+1)% text.length
});
