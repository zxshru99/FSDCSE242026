const root = document.getElementById('container');
const button = document.getElementById('btn');

function showData() {
    try {
        const h2 = document.createElement('h2');
        h2.innerText='Welcome to DOM';
        h2.style.color='red';
        h2.style.backgroundColor='red';
        const img=document.createElement('img');
        img.src = './dom-tree.jpg';
        img.setAttribute('height', 200);
        img.setAttribute('width', 200);

        root.appendChild(h2);
        root.appendChild(img);
    } catch (e) {
        console.log(e);
    }
}

button.addEventListener('click', showData);
