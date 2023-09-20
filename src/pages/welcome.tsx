import CanvasSky from "../components/CanvasSky";
import { Link } from 'react-router-dom'

export const WelcomeSite = () =>{
    return (
        <div className="welcome">
            <CanvasSky />
            <Link to={'../home'}>Welcome</Link>
        </div>
    );
}