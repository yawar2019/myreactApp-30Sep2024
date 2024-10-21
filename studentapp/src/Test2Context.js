import { ConterContext } from "./ContextApiExample";
import { useContext } from "react";
const Test2Context = () => {
    const bcount = useContext(ConterContext);
    return ( 
    <>
    <span>{bcount}</span>
    </> );
}
 
export default Test2Context;