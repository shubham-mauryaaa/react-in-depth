
function customRender(reactE, cont){
    // const domEle = document.createElement(reactE.type)
    // domEle.innerHTML = reactE.children
    // domEle.setAttribute('href',reactE.props.href)
    // domEle.setAttribute('target', reactE.props.target)

    // cont.appendChild(domEle)


    const domE = document.createElement(reactE.type);
    domE.innerHTML = reactE.children;
    for (const prop in reactE.props) {
        domE.setAttribute(prop, reactE.props[prop]);
    }
    cont.appendChild(domE);
}

const reactEle = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: 'Click me to visit Google!'
}

const mainCont = document.getElementById('root');

customRender(reactEle, mainCont);

