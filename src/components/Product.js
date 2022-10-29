/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import JsonData from '../Data/JsonData.json'
import {useDispatch} from "react-redux"
import { incrementCart } from '../Redux/Reducer/CartReducer'
const Product = () => {
  const dispatch = useDispatch()
  return (
    <div>
    <div className='container'>
    <div className='row'>
        {
            JsonData.products.map(item => 
            <div className='col' key={item.id}>
            <div className="card m-1" style={{"width":"18rem", "height": "25rem", "textAlign": "center"}}>
  <img className="card-img-top" src={item.src}alt=""/>
  <p className="card-title">{item.name} | {item.price}</p>
  <div className="card-body">
  <button className='btn btn-primary ml-auto' 
  onClick={()=>dispatch(incrementCart({
    productName : item.name,
    productPrice : item.price
  }))}
  >Add</button> &nbsp;&nbsp;&nbsp;&nbsp;

  <button className='btn btn-primary ml-auto'>Remove</button>
  </div>
</div>

            </div>
            )
        }
    </div>
    </div>
    </div>
  )
}

export default Product