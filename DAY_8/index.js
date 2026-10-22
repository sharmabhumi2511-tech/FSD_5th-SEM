const root=ReactDOM.createRoot(
    document.getElementById("root"));
    const ChildComponent=({props})=>{
        return(<div><h1>Hello{props}</h1></div>)
        // console.log(props);
        const{name,email,section}=props;
        return (<div>
            <h1>Hello {name} </h1>
            <h1>{email}</h1>
            <h2>{section}</h2>
        </div>)
    }
    const ParentComponent=()=>{
        let name="Bhumi";
        let email="bhumisharma@gmail.com";
        let section="cse-16";
        return(<div>
            <ChildComponent name={name} email={email} section={section}/>
        </div>)

    }


root.render(<ParentComponent/>)