const root = ReactDOM.createRoot(document.getElementById("root"))

const ReactComponent = ()=> {
    return (
        <div>
            <h1> this is react component heading </h1>
        </div>
    )
}

const reactElement = < ReactComponent />
// const reactElement = ReactComponent(); they all are type to call fucntion in component
// const reactElement = < ReactComponent></ReactComponent>
/* <> </> =  fragment - empty tag called as fragment ,,, js code should be in curly bracket*/ 


root.render(reactElement);