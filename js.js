function loadDatas(){
    let xhr = new XMLHttpRequest();
console.log("xhr :", xhr);
xhr.open("get", "https://fakestoreapi.com/products")

xhr.send();
 
xhr.onreadystatechange = function () {
    console.log("readyState :", xhr.readyState);

    if (xhr.readyState === 4) {
        console.log("status ; ", xhr.status);

        if (xhr.status === 200) {

            let response = xhr.response;
            console.log("response : ", response);
            console.log("typeof(response) : ", typeof(response));

            let data = JSON.parse(response);
            console.log("datas :", data)

            let datacontainer = document.getElementById('datacontainer');
            console.log("dataContainer :", datacontainer);

            let box = '';

            for (let i = 0; i < data.length ; i++) {
                box =box + 

                `
                <div id="classs">
                <div id="boxes">
                 <div>${data[i].title}</div>
                 <img src=${data[i].image}>
                  <div>${data[i].description}</div> 
                  <div>${data[i].price}</div>
                </div> 
                </div>

                `
            }

            console.log("box : ", box);
            datacontainer.innerHTML = box;
        }

    }

}
}