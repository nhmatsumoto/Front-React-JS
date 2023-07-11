import { ReactDOM } from 'react';
import { Link } from 'react-router-dom';

const Contato = () => {
    return (
        <div className='page-container'>
            <h1>Contato</h1>
            <Link to={`/home`}>Home</Link>
        </div>
    );
}

export default Contato;