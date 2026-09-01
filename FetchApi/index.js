const root = document.getElementById('container');
const button = document.getElementById('btn');
const disp = document.getElementById('disp');
const loader = document.getElementById('loader');

async function fetchData() {
    try {
        loader.innerHTML = '<h2>Loading Data....</h2>';
        const serverData = await fetch('https://fakestoreapi.com/products');
        const jsonData = await serverData.json();

        
        // disp.innerHTML = `${jsonData[0].title}`;

        
        let table = `<table border=2px>
            <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>Category</th>
            </tr>
            ${jsonData.map(ele => `
                <tr>
                    <td><img src="${ele.image}" height="200" width="200"></td>
                    <td>${ele.title}</td>
                    <td>${ele.description}</td>
                    <td>$${ele.price}</td>
                    <td>${ele.category}</td>
                </tr>
            `)}
        </table>`;

        root.innerHTML = table;
    } catch (e) {
        console.log("The error is"+ e);
       
    } finally {
        loader.innerHTML = '';
    }
}

button.addEventListener('click', fetchData);
