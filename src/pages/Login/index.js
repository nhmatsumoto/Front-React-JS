import React, { useState }  from 'react';

export default function Login () {
  
    const [fetchError, setFetchError] = useState();
    const [jsonResult, setJsonResult] = useState();

    const [successMessage, setSuccessMessage] = useState(false);
    const [hiddenForm, setHiddenForm] = useState(false);

    const [email, setEmail] = useState('joao@example.com');
    const [senha, setSenha] = useState('senha123');

    async function postData(url = "", data = {}) {

        const response = await fetch(url, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },            
            body: JSON.stringify(data), 
        });
        
        return response.json();
    }

    const handleLogin = (e) => {

        e.preventDefault();
        
        postData("https://localhost:7199/api/Auth/login", { email: email, senha: senha })
            .then((data) => {

            setSuccessMessage(true);

            const { accessToken, refreshToken } = data;

            localStorage.setItem('@user-set', JSON.stringify(data.usuario))
            localStorage.setItem('@token', accessToken);
            localStorage.setItem('@refresh-token', refreshToken); 

            setHiddenForm(true);

        }).catch((error) => {
            setFetchError(error);
        });
    }

    return (
        <div className="page-container">
            <span hidden={!successMessage}>Login efetuado</span>
            <span>{JSON.stringify(fetchError)}</span>

            <form onSubmit={handleLogin} hidden={hiddenForm}>
                <label>Email</label><br/>
                <input value={email} onChange={(e) => setEmail(e.target.value)} /><br/>

                <label>Password</label><br/>
                <input value={senha} onChange={(e) => setSenha(e.target.value)} /><br/>

                <button type="submit">Login</button>
            </form>
    
            {
                JSON.stringify(jsonResult)
            }
        </div>
    );
}