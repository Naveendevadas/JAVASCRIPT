
let obj = {
    firstname: "john",
    lastname: "mendes",
    address : {
        city : 'city',
        street : 'street',

    },
    hobbies:['dance,sing'],
}

     


{
    for (let i = 1; i <= 5; i++) {
        let str = '';
        // Add spaces in the beginning of the row
        for (let j = 1; j <= 5 - i; j++) {
            str += ' *';
        }
        // Add stars for the current row
        // for (let k = 1; k <= 2 * i - 1; k++) {
        //     str += '';
        // }
        console.log(str);
    }
}
 
// loop
console.log("\n\n\n")
for(let i=0; i<10; i++) {
    console.log("hai world")
}
 
let i=0;
while(i<10){
    console.log("hai")
    i++
}

{
let str ='';
for(let i=0; i<10; i++){
    for(let j=0; j<i; j++){
        str =str +'m  '
    }
    str =str + '\n\n'
}
console.log(str);
}
console.log("\n\n\n\n")

//cal by value

{
  function update(a) {
    a=20
    console.log("a inside function call :", a)
  }

  let a=10;
  console.log("a before function call : ", a);

  update (a);
  console.log("a after function call : ", a);

}

console.log("\n\n");





// function updateArr(arr) {
//     arr(0)=100;
//     console.log("arr from inside the function : ", arr);
// }
//  let arr = [1,2,3,4,5];
//  console.log("arr:", arr) ;

//  updateArr(arr);
//  console.log("arr:", arr);
// }   






{
    //Event handling
    console.log("\n\n)")

    let btn = document.getElementById('btn');
    console.log("btn :", btn);

    btn.addEventListener('click',function(){
        console.log("hello")
    })

    btn
    btn.addEventListener('mouseover',function(){
        console.log("mouseover event fired")
    })

    btn.addEventListener('click',function(){
        console.log("enna thodunnoda myre")
    })

    btn.addEventListener('click',function(){
        console.log("enna thodunnoda myre")
    })

    btn.addEventListener('click',function(){
        console.log("enna thodunnoda myre")
    })

    btn.addEventListener('click',function(){
        console.log("enna thodunnoda myre")
    })


}

// {

    // function putZero(value) {
    //     return value < 10 ? "0" + value : value ;
    // }


    // function show() {
    //     let dt = new Date();
    //     console.log("dt : ", dt);

    //     let hours = dt.getHours();
    //     console.log("hours : ", hours);

    //     let ampm = hours < 12 ? "am" : "pm";
    //     console.log("ampm : ", ampm);

    //     let time = document.getElementById("time");
    //     console.log("time : ", time);

    //     time.innerHTML = putZero(hours) + ":" + putZero(dt.getMinutes()) + ":" + putZero(dt.getSeconds())

    //     setTimeout(show,1000);

        
    // }
    
//     show();
// }

{
    //spred operator
    console.log("\n\n\n")
    let arr = [1,2,3,4];
    console.log("arr : ",arr);


    let arr1 = [...arr,5];
    console.log("arr1 :", arr1);


    let obj ={
        name :"naveen",
        email :"naveen@gmail.com",
    }
    console.log ("obj :",obj);




    //dest5ructuring
    let [a,b,c,d] = arr ;
    console.log("a :", a)


    let {email} = obj;
    console.log("email :", email);


    //nested destructuring

    // let matrix = [
    //     [1,2,3],
    //     [4,5,6],
    //     [7,8,9],
    // ];
    // console.log ("matrix :", matrix);


    // let [row1, row2,[g,h,i]] = matrix;
    // console.log("row1 :", row1);
    // console.log("row2 :", row2);
    // console.log("row3 :", row3);


    // let [a,b,c] = row1 ;
    // console.log("a : ", a);


    let data = {
        name : "jfrnhasx"
    }






}

{
    // array methode
    console.log("\n\n\n\n")

    let arr = [10,20,30,40,50];

    let result = arr.forEach((item) => {
        console.log ("item :", item);
        return item >30

    })
    console.log("result :", result)//undefined


     

}

