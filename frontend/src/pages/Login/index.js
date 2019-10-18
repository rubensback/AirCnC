import React, {useState} from 'react';
import api from '../../services/api';

//propriedade history = propriedade de navegação
export default function Login({ history }) {
    /*
    BUSCAR INFORMAÇÕES DENTRO DE INPUT
    email = retornar o valor do estado de email em tempo real, toda vez que o valor sofrer alteração, vai atualizar a variavel
    setEmail = serve para atualizar o valor da variavel email
    onChange(no input) = passar função que atualiza o valor da variavel (no caso o setEmail)
    value(no input) = passar o valor do email
    */
    const [email, setEmail] = useState(''); 

    async function handleSubmit(event) {
        event.preventDefault();
        
        const response = await api.post('/sessions', {email});

        const { _id } = response.data;
        console.log(_id);
        console.log(response.data);
        
        

        localStorage.setItem('user', _id);

        //enviar para a rota do parametro
        history.push('/dashboard')
    }

    //<> = isso é usado pois o react não permite que tenha duas tags na mesma posição. A primeira posição deve ter apenas uma tag
    return (
        <>
            <p> Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-MAIL *</label>
                <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={event => setEmail(event.target.value)}
                />

                <button type="submit" className="btn">Entrar</button>
            </form>
        </>
    )
}