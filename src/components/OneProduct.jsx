import React from 'react'
import {ImMinus, ImPlus} from "react-icons/im"
const OneProduct = ({prodName,prodDesc}) => {

    const design = {margin:10, borderStyle: "dashed"}

  return (
    <div className='card' style={design}>
        <img src="https://picsum.photos/200" alt="Slika proizvoda" className='card-img-top' />
        <div className='card-body'>
            <h3 className='card-title'>{prodName}</h3>
            <p className='card-text'>{prodDesc}</p>
            <a href="" className='btn'><ImPlus></ImPlus></a>
            <a href="" className='btn'><ImMinus></ImMinus></a>
        </div>
    </div>
  )
}

export default OneProduct