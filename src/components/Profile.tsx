import { Outlet, useParams } from "react-router-dom";
import DefaultProfile from "./DefaultProfile";
import Goku from "./Goku";
import Vegeta from "./Vegeta";

function Profile(){
    const {name} = useParams();
    return(
        <div>
            <h1>Profile page!!</h1>
            <p>I like tacos and hamburguers</p>
            {
            name === "Goku"? (<Goku />
            ) :name === "Vegeta"?(
            <Vegeta/>):(
                <DefaultProfile/>
            )}

        </div>
    );
}

export default Profile;