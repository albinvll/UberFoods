import React from 'react';
import Food from './Food';

import { connect } from 'react-redux'

const Foods = ( {products} ) =>{
    return(
        <div>
            {products.map((food)=>(
                <Food key={food.id} foodData={food}/>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        products: state.food.products,
    };
};

export default connect(mapStateToProps)(Foods);