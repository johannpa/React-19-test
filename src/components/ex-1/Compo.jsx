import Compo2 from "./Compo2";

const Compo = ({name, email, age}) => {
    
    return ( 
        <div>
            <h1 className="font-medium text-2xl">Hello i am a component - {name}, {email}, {age} </h1>
            <Compo2 name={name} email={email} age={age}/>
        </div>
     );
}
 
export default Compo;