
const loader=document.createElement('div');
const container=document.getElementById('container');
const button=document.getElementById('btn');


container.appendChild(loader);
const img=document.createElement('img');
const h1=document.createElement('h1');
h1.innerText='Resume';



function myresume() {
    try {
        container.innerHTML='<h2>My Resume</h2>';
        h1.style.backgroundColor='cyan';
        h1.style.color='red';
        container.appendChild(h1);
        img.src='https://info340.github.io/img/html/dom-tree.jpg';
        img.setAttribute('height',200);
        img.setAttribute('Width',200);
        container.appendChild(img);

    } catch (e) {
        loader.innerHTML='<h2 style="color:red">Error in loading data</h2>';
        container.appendChild(loader);
    }
}

button.addEventListener('click',myresume);