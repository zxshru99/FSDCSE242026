const container=document.getElementById('root');

const root=ReactDOM.createRoot(container);
const h2=React.createElement('h2',{style:{color:'red',backgroundColor: 'cyan'}},"Welcome to React App Development");
const h1=React.createElement('h1',{style:{color:'brown'}},"ABES Engineering College");

const img=React.createElement('img',{src:'dom-tree.jpg',style:{height:'200px',width:'200px'}});
const div=React.createElement('div',{style:{border: '2px solid red'}},h1,h2);
root.render(div);