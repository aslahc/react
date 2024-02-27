/**
 * 
 * <div id='parent>
 * <div id=child>
 * <h1> hello world</h1>
 * 
 * </div>
 * </div>
 * 
 * 
 */


const parent = React.createElement("div",{id:"parent"},[React.createElement('div',{id:"child"},React.createElement("h1",{},'hello world')),React.createElement('div',{id:"child"},React.createElement("h1",{},'hello world'))]);

console.log(parent)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)


// const heading = React.createElement("h1", {id:'heading'}, "hello world from React");
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);