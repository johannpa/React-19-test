

const Compo = (props) => {
    const {name, email, age} = props;
    return ( 
        <div>
            <h1 className="font-medium text-2xl">Hello i am a component - {name}, {email}, {age} </h1>
        </div>
     );
}
 
export default Compo;