const str1 = "the cat is white";
const str2 = "Rat eats fish";
const str3 = "Is eats fish";
const str4 = `
Hello 
good meat 
is always good
Hai`;


const regexp1 = /a/;
const result1 = regexp1.test(str1);//checks if str1 contain letter 'a'
console.log("result1 : ", result1);//true


const regexp2 = /A/i;
const result2 = regexp2.test(str1);//checks if str1 contain letter 'A' and perform case-insensitive search
console.log("result2 : ", result2);//true


const regexp3 = /ab/;
const result3 = regexp3.test(str1);//checks if str1 contain 'ab'
console.log("result3 : ", result3);//false


const regexp4 = /[crb]a/i;
const result4 = regexp4.test(str1);//checks if str1 contain 'c' 'r' or 'b' before 'a'
console.log("result4 : ", result4);//true


const regexp5 = /[a-z]a/i;
const result5 = regexp5.test(str1);//checks if str1 contain any letter in between 'a' to 'z' before 'a' ,also represent case insensitive search
console.log("result5 : ", result5);//true


const regexp6 = /[a-z0-9]a/i;
const result6 = regexp6.test(str1);//checks if str1 contain letter 'A' and perform case-insensitive search
console.log("result6 : ", result6);//true


//represent 

const regexp7 = /^rat/i;
const result7 = regexp7.test(str2);//checks if str1 starts with 'rat' and perform case-insensitive search
console.log("result7 : ", result7);//true


const regexp8 = /^good/im;
const result8 = regexp8.test(str4);//checks if str1 starts with 'good' m-flag using multyline matching
console.log("result8 : ", result8);//true


const regexp9 = /fish$/i;
const result9 = regexp9.test(str3);//checks if str1 end with 'fish' and perform case-insensitive search
console.log("result9 : ", result9);//true

const regexp10 = /good$/im;
const result10 = regexp10.test(str4);//checks if str1 end with 'good' m-flag using multyline matching
console.log("result10 : ", result10);//true


const str5 = "Hello";

const regexp11 = /[kjm]/im;
const result11 = regexp11.test(str5);//if there is a 'k' or 'j' or 'm' then it will be true
console.log("result11 : ", result11);//

const regexp12 = /[^kjm]/im;
const result12 = regexp12.test(str5);//if there is no 'k' or 'j' or 'm' then it will be true
console.log("result12 : ", result12);//

const regexp13 = /[H+]/im;
const result13 = regexp13.test(str4);//atleast 1 'H' is requierd
console.log("result13 : ", result13);//

// const regexp11 = //im;
// const result11 = regexp11.test(str4);//
// console.log("result11 : ", result11);//

// const regexp11 = //im;
// const result11 = regexp11.test(str4);//
// console.log("result11 : ", result11);//

// const regexp11 = //im;
// const result11 = regexp11.test(str4);//
// console.log("result11 : ", result11);//



//

const regexp14 = /l{2}o$/i;
const result14 = regexp14.test(str5);//'o' should be exactly after 2 l's 



const regexp15 = /l{2,4}o$/i;
const result15 = regexp15.test(str5);//'o' should be exactly after between 2 to 4 L's 

console.log("result15 : ", result15)



const regexp16 = /Hel{2,4}o$/i;
const result16 = regexp16.test(str5);//'o' should be exactly after between 2 to 4 l's and 'o' is requierd
console.log("result16 : ", result16)



const regexp17 = /l{2}o$/i;
const result17 = regexp17.test(str5);// 2 or more 'L' is required
console.log("result17 : ", result17)

{


    const regexpDate = /^\d{1,2}-\d{1,2}-\d{5}/i;

function checkResult(value) {
    // console.log("value check :",value )
    const result = regexpDate.test(value);
    // console.log("redger :", result)
    if (result){
        return 'ruigweaiuhuhiewuhwerhuwerhouwerthtwhitwihowt4hwtrhuwtrehuwrhurw';
    } 
    else {
        return 'Invalid String';
    }
}
}
   const value = "16-2-20045"; 
   let resulting = checkResult (value)
   console.log("resultDate : ", resulting);
   

// function onchange(arg){
//     let resulting  = checkResult(arg.value);
//     let map = document.getElementById('reg')
//     if (resulting){
//         map.innerHTML = resulting 
//     } 
//     else {
//         return 'Invalid String';
//     }
// }