//Normal functions
// To print odd numbers in a array 

// var arr = [6,8,12,15,17,19,23,27];
// var result =[];
// function odd(arr){
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]%2!=0){
//             result.push(arr[i]);

//         }
//     }
//     return result;
// }

// console.log(odd(arr));

//Anonymous function

/* var arr = [1,3,4,6,78,89,34,43,57];
var odd = function(arr){
    var result =[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            result.push(arr[i]);

        }
    }
    return result;
}
console.log(odd(arr)); */

//IIFE (Immediately Invoked function Expression)

/* (function odd(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            result.push(arr[i]);

        }
    }
    console.log(result) ;
})([31,32,33,34,35,36,37]) */

//Arrow function
/* 
var odd = (arr)=>{
    var result =[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            result.push(arr[i]);

        }
    }
    return result; 
}

console.log (odd([31,32,33,34,35,36,37])) */

//function without parameter

function greet (){
    console.log("Welcome")
}
greet()

//Template literals
var a =10;
var b = 20;
console.log(`the sum of two number a & b = ${a+b}`)

//spread operator 
// example 1
var arr= ["Trinethra"];
console.log(...arr)

//examle 2 
var arr1 =["bob","john","sofia"];
var arr2 =["Anish","TTS"];
var arr3 = [...arr1 , ...arr2];
console.log(arr3)


// rest parameter
function foo(a,b,...rest){
    var sum = 0;
    for (var i=0;i<rest.length;i++){
        sum = sum + rest[i];
    }
    return sum ;
}
console.log(foo(12,13,14,15,16,17))
