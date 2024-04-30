import { useNavigate } from 'react-router-dom'


function Goku(){
    const navigate = useNavigate();

    return(
<div>
    <h2>Hi i'm Goku</h2>
    <button onClick={() => navigate('/')}>Clic here to main page!</button>

</div>
    )
}

export default Goku;