import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const PrivateRoute = () => {
    const {loading} = useContext(AuthContext);

    if(loading){
        return <div>loading...</div>
    }
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;