import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

export default function Dashboard() {
    const [spots, setSpots] = useState([])

    //Bom para uma busca de dados da API
    //primeiro parametro = 
    //segundo parametro = quando que o primeiro parametro vai ser executado, por exemplo quando o usuario utilizar um filtro. Se for [] é porque só vai ser executado uma vez
    useEffect(() => {
        //Criado uma função dentro pois nesta função do primeiro parametro não aceita função async
        async function loadSpots() {
            const user_id = localStorage.getItem('user')
            const response = await api.get('/dashboard', {
                headers: {user_id}
            })
            console.log(user_id);
            console.log(response.data);
            
            setSpots(response.data);     
        }

        loadSpots();
    },[])

    //toda vez que mexer com map em react deve-se botar uma propriedade key
    //Link = levar a pagina para outro link
    return (
        <>
            <ul className="spot-list">
                {spots.map(spot => (
                    <li key={spot.id}>
                        <header style={{backgroundImage: `url(${spot.thumbnail_url})`}}></header>
                        <strong>{spot.company}</strong>
                        <span>{spot.price ? `R$${spot.price} /dia` : 'GRATUITO'}</span>
                    </li>
                ))}
            </ul>

            < Link to='/new'>
                <button className="btn">Cadastrar novo spot</button>
            </Link>
        </>
    )
}