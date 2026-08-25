
const loader = document.createElement('div');
const container = document.getElementById('container');
const button = document.getElementById('btn');


container.appendChild(loader);

const h1 = document.createElement('h1');
h1.innerText = 'Resume';


function myresume() {
    try {
        container.innerHTML = '<h2>My Resume</h2>';
        container.appendChild(h1);
    } catch (e) {
        loader.innerHTML = '<h2 style="color:red">Error in loading data</h2>';
        container.appendChild(loader);
    }
}

button.addEventListener('click', myresume);