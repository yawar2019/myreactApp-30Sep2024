
import { useContext } from "react";
import { MyContext } from "./ContextEx";

const Component3 = () => {
const value=useContext(MyContext);

    return (<><span>Compoent3:</span>{value}</>  );
}
 
export default Component3;