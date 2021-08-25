import React, { useMemo } from 'react'
import  queryString  from 'query-string';
import { useLocation } from 'react-router-dom';
// import { heroes } from '../../data/heroes';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {

    // Para obtener el query usamos el Hook UseLocation de react routeer-dom


    const  location =useLocation();
    // Usamos el paquete  npm install query-string para parsear el query y separarlo por valores
    // Sacamos el valor de q , que previamente asigne yo 
    const { query = '' } = queryString.parse(location.search)

    
    const [values, handleInputChange ] = useForm({
        searchText: query
    });
    
    const { searchText  } = values;
    
    // Use memo es para evitar que se renderice todo el componete cada vez que cambie el estado, el query es la unica dependencia que cambia
    const heroesFiltered = useMemo(() => getHeroesByName(query), [query]);
    
    

    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log(searchText);
        history.push(`?query=${searchText}`);


    }
    
    return (
        <div>
            <h4>Search Screen</h4>
            <hr/>
            <div className="row mt-5">
                <div className="col-5">
                    <form>
                        <input
                            type ="text"
                            placeholder = "Find your hero"
                            onChange = { handleInputChange  }
                            className="form-control"
                            name = "searchText"
                            autoComplete = "off"
                            value = { searchText }
                        />
                        <button 
                            type ="submit"
                            className="btn m-1 btn-block btn btn-outline-primary"
                            onClick = { handleSubmit }
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Resulados</h4>
                    {
                    (query === '') && 
                        <div className="alert alert-info">
                            Busqueda
                        </div>
                    }
                    {
                    (query !== '' && heroesFiltered.length=== 0) && 
                        <div className="alert alert-danger">
                             There are not hero with this name { query }
                        </div>
                    }
                    {
                        heroesFiltered.map( hero =>(
                            <HeroCard
                                key = { hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
