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
                <div id="boxes" id="btn" onclick=handleClick(${data[i].id})> 
               
                 <img src=${data[i].image} > 
                 <div id="classs">
                 <div>${(data[i].title).slice(0,30)+".."}</div> 
                 </div>
                  <div class="rak">${(data[i].description).slice(0,30)+".."}</div>
                  <div class="link-danger">$${data[i].price}</div>
                </div>
                `
            }
            console.log("box : ", box);
            datacontainer.innerHTML = box;
        }

    }

}
}
function loadData(id){
    console.log("button clicked")
    console.log(id)
}

function handleClick(id){
    console.log("button clicked");
    console.log("button clicked id :",id);
    window.location.href =`view.html?id=${id}`
    return;
}

function loadedproducts(){
    console.log("loading...");

    let location = window.location;
    console.log("location",location);

    let querystring = location.search;
    console.log("querystring",querystring);

    let urlParams = new URLSearchParams(querystring);
    console.log("url",urlParams);

    let id = urlParams.get("id");
    console.log("id",id);

    let xhr = new XMLHttpRequest();

    xhr.open("get", `https://fakestoreapi.com/products/${id} `)

    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log("status:", xhr.status);

            if (xhr.status === 200) {
                console.log("success");

                let userData = xhr.response;
                console.log("userData:",userData);

                let parsed_userData = JSON.parse (userData);
                console.log("parsed_userData",parsed_userData);


                let load = document.getElementById('loadeditems-title');
                console.log("load",load);
                let load1 = document.getElementById('loadeditems-description');
                let load2 = document.getElementById('loadeditems-image');
                let load3 = document.getElementById('loadeditems-price');
                let load4 = document.getElementById('loadeditems-catogory');
                let load5 = document.getElementById('loadeditems-rating-rate');
                let load6 = document.getElementById('loadeditems-rating-count');
                // let load6 = document.getElementById('loadeditems1');

                // load.value =.title;
                    load.innerHTML = parsed_userData.title; 
                    load1.innerHTML = parsed_userData.description; 
                    load2.innerHTML =`<img src="${parsed_userData.image}" style="width:400px; height:400px;">`
                    load3.innerHTML =`$ ${parsed_userData.price}  `;
                    load4.innerHTML=parsed_userData.category;
                    load5.innerHTML=` ${parsed_userData.rating.rate} rating`;
                    load6.innerHTML=` ${parsed_userData.rating.count} count`;

                
                    console.log("Element with id 'loadeditems' not found");     

            }else{
                alert("failed to load")
            }
            
            
        }
    }

}