// // // console.log("Hello I am using Js")

// // // const sum=function(a,b){
// // //     result=(Math.sqrt(a)+Math.sqrt(b));
// // //     return result;
// // // }
// // // console.log(sum(10,20));
// // // const sum=(a,b)=>{return a+b};
// // // console.log(sum(10,20));
// // // (()=>{
// // // console.log("Heyyy using IIFE");
// // // })();
// // let  a=23;

// // if(a<40){
// //     let a=40;
// //     console.log("Values pf a inside a block="+a);
// // }

// // console.log("Values of a outside block"+a)
// function sum(a,b){
//     return a+b;
// }
// function msgWithSum(clbk,msg){
//     const result=clbk(40,50);
//     console.log("Hii, "+msg+" and your result is="+result );
// }
// msgWithSum(sum,"Rahul");
function login (error,msg){
    if(error){
        console.log("Error is :"+error);
    }

    else{
        console.log(msg)
    }
}
    function loginHandler(username,password,clbk){
        if (username=="ptomer40" &&password=="12345"){
            clbk(null,"LoginSuccess")
        }
        else{
            clbk("Username of password is incorrect ",null);
        }
    }
    loginHandler("ptomer40","12345",login);
  
    
