import { useNavigate } from 'react-router-dom'


function Vegeta(){
    const navigate = useNavigate();

    return(
<div>
    <h2>Hi i'm Vegeta</h2>  
    <p>I'm better than Goku</p>
    <button onClick={() => navigate('/')}>Clic here to main page!</button>
</div>
    )
}

export default Vegeta;