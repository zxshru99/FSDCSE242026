const container=document.getElementById('container');
const button =document.getElementById('btn');
container.appendChild(loader);
const h1=document.createElement('h1');
console.log(h1)
h1.innerText='Resume';
function myresume(){
    try{
    loader.innerHTML='<h2>Loading Data . . . </h2>'
container.innerHTML= '<h2>My Resume<h2>'
container.appendChild(h1);
    }
    catch(e){
        loader.innerHTML='<h2 style=color:red>Error in loading data</h2>'
    }
    finally{
        loader.innerHTML='';
    }


}
button.addEventListener('click',ping);
