import './Card.css'

function Card(){
    return (
      <div className="col">
      <div className="card">
        <img src='./images/download.jpg' alt='ss'></img>
        <div className="card_body">
        <h5 className='card_title'>shose</h5>
        <p className='card_text'>
          example of shose example of shose example of shose example of shosev 
          example of shose vexample of shose v v example of shoseexample of shose .
        </p>
        <button className='add_to_card'>add to card</button>
          </div>
      </div>
    </div>
    )
  }

  export default Card