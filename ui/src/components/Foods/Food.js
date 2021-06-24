import React from 'react'

import { connect }  from 'react-redux'
import {addToCart} from '../../redux/food-order/actions'

const Food = ({foodData, addToCart}) => {
    return(
        <div>
            <h1>{foodData.id}</h1>
            <h1>{foodData.title}</h1>
            <h1>{foodData.price}</h1>

            <button onClick={()=>addToCart(foodData.id)}>Add to cart</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addToCart: (id) => dispatch(addToCart(id)),
    }
}

export default connect(null, mapDispatchToProps)(Food);
