import React, {useState,useMemo} from 'react';
import api from '../../services/api';

import "./styles.css";

import camera from '../../assets/camera.svg';

export default function New({history}) {
    const [thumbnail, setThumbnail] = useState(null);
    const [company, setCompany] = useState("");
    const [techs, setTechs] = useState("");
    const [price, setPrice] = useState("");

    //useMemo = fica observando o valor de uma variavel e toda vez que ela altera o valor ele gera um novo valor
    //neste caso esta sendo usado para fazer uma preview da foto que o usuario fizer o upload
    const preview = useMemo(
        () => {
            return thumbnail ? URL.createObjectURL(thumbnail) : null;
        }, [thumbnail])

    // função para quando o usuario realizar o submit
    async function handleSubmit(event) {
        event.preventDefault();

        const data = new FormData();
        const user_id = localStorage.getItem('user');

        console.log(thumbnail);
        

        data.append('thumbnail', thumbnail);
        data.append('company', company);
        data.append('techs', techs);
        data.append('price', price);

        //terceiro parametro é para adicionar nos headers o user_id:user_id
        await api.post('/spots', data,{
            headers: { user_id }
        } );

        history.push('/dashboard');
    }

    return(
        <form onSubmit={handleSubmit}>
            <label id="thumbnail" style={{backgroundImage: `url(${preview})`}} className={thumbnail ? 'has-thumbnail' : ''}>
                <input type="file" onChange={event => setThumbnail(event.target.files[0])} />
                <img src={camera} alt="Selecione a imagem"></img>
            </label>

            <label htmlFor="company">EMPRESA *</label>
            <input 
            id="company" 
            placeholder="Sua empresa"
            value={ company }
            onChange={event => setCompany(event.target.value)}
            />

            <label htmlFor="company">TECNOLOGIAS * <span> (separadas por virgulas)</span></label>
            <input 
            id="techs" 
            placeholder="Quais tecnologias usam"
            value={ techs }
            onChange={event => setTechs(event.target.value)}
            />

            <label htmlFor="company">VALOR DA DIARIA * <span> (Em branco para GRATUITO)</span></label>
            <input 
            id="price" 
            placeholder="Valor cobrado por dia"
            value={ price }
            onChange={event => setPrice(event.target.value)}
            />

            <button className="btn">Cadastrar</button>

        </form>
    )
}