import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class Page1 extends React.Component {

    componentDidMount(){
        const {catalog, addCatalog} = this.props;
        if(!catalog){
            axios.get('https://www.wecasa.fr/api/techtest/universe/', {headers: {'Accept': 'application/json'}})
            .then((response) =>{
                addCatalog(response.data);
              })
              .catch(function (error) {
                console.log(error);
              })
        }
    }

    render(){
        const { catalog, addToBasket } = this.props; 
        return (
        <div>
            {catalog && 
                <div>
                    {"Categorie: " + catalog.title}
                    {catalog.categories.map(
                        (categorie, index)=>(
                            <ul key={index+categorie}>
                                <b>{categorie.title+":"}</b>
                                {categorie.prestations.map(
                                    (prestation, i)=>
                                    <li key={prestation+i}>
                                        {prestation.title+" -> Prix: " + prestation.price + "; Duration: " + prestation.duration}
                                        <button onClick={()=>addToBasket(prestation)}>+</button>
                                        <button>-</button>
                                    </li>
                                )}
                            </ul>
                        )   
                    )}
                </div> 
            }
            
        </div>
        )
    }
}


Page1.propTypes = {
    addToBasket: PropTypes.func,
    catalog: PropTypes.object
  }; 

export default Page1;