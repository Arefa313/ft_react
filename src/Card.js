import './Card.css'
import Button from './Button'
import { render } from '@testing-library/react'
import React  from 'react'

const Card =({product}) =>{
  console.log("product ---",product)
  const {image,name,description}=product
    return (
      <div className="col">
      <div className="card">
        <img src={image} alt='ss'/>
        <div className="card_body">
        <h5 className='card_title'>{name}</h5>
        <p className='card_text'>
        { description}
       </p>
        <Button /> 
          </div>
      </div>
    </div>
    )
  }

// class Card extends React.Component{
//   render(){
//       return (
//         <div className="col">
//         <div className="card">
//           <img src='./images/download.jpg' alt='ss'></img>
//           <div className="card_body">
//           <h5 className='card_title'>shose</h5>
//           <p className='card_text'>
//             example of shose example of shose example of shose example of shosev 
//             example of shose vexample of shose v v example of shoseexample of shose .
//           </p>
//           <Button /> 
//             </div>
//         </div>
//       </div> 
//     )}}

  export default Card