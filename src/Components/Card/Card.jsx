import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Card.css"


export default function CardComponent(props) {
  
    const [isFavorite, setIsFavorite] = useState(false)

  

    return (

    <>
      <div className='card-movie backgroundPurple'>
        <div>
          <img className='card-image' src={props.img} alt="" />
          <h1 className='titles-custom'>{props.title}</h1>
          {isFavorite ? (<FaHeart className='icon-heart' onClick={() => setIsFavorite(false)} />) : <FaRegHeart className='icon-heart-empty' onClick={() => setIsFavorite(true)} />}
          <p className='text-custom'>{props.description}</p>
          <div className='card-play'>
            <span>
              Play
            </span>
          </div>
        </div>
      </div>
    </>

    )
}




 /* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */