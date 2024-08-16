let xhr = new XMLHttpRequest()
console.log("req :",xhr);
xhr.open('get',"https://fakestoreapi.com/products");
xhr.send();

xhr.onreadystatechange = function () {
    console.log("readystate :", xhr.readyState);
    if (xhr.readyState === 4) {
        console.log("status :",xhr.status);
    }
    if (xhr.status === 200) {
        let response = xhr.response;
        console.log("response :", response);
        let data =JSON.parse(response);
        console.log(data);
        let texterss = document.getElementsByClassName("texterss");
        // let texterss = document.getElementsByClassName("texterss");
        // let texterss = document.getElementsByClassName("texterss");
        // let texterss = document.getElementsByClassName("texterss");

        for (let i=0; i<texterss.length && i<data.length; i++) {
            texterss[i].innerHTML = data[i].title
        }
    }
}