import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroScreen = ({history}) => {

    const {heroeId} = useParams();

    // const hero = getHeroesById( heroeId );
    const hero = useMemo(() => getHeroesById( heroeId ), [heroeId])
    if( !hero ){
        return <Redirect to ="/" />
    }
    const {
        // id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
     } = hero;

     const handleReturn = ()=>{
        if( history.length<=2){
            history.push('/');
        }else{
            history.goBack();
        }
     }
    return (
        <div className=" row mt-5">
            <div className="col-md-4">
                <img
                    src = {`../assets/heroes/${heroeId}.jpg`}
                    className="img-thumbnail  animate__animated animate__backInDown"
                    alt = {superhero}
                    />
            </div>
            <div className=" col-8  animate__animated animate__backInDown">
                <h3>{ superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter_ego : { alter_ego}</b>
                    </li>
                    <li className="list-group-item">
                        <b>publisher  : { publisher}</b>
                    </li>
                    <li className="list-group-item">
                        <b>Fistr appereance  : { first_appearance }</b>
                    </li>
                </ul>
                <h5> Characters : <p>{ characters}</p></h5>

                <button 
                    className="btn btn-primary"
                    onClick= { handleReturn }
                >Return </button>
            </div>
        </div>
    )
}

