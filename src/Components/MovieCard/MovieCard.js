import React from 'react'
import { Button, Card} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";

const MovieCard = ({movie}) => {
  return (
    <div>
  <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.description}
        </Card.Text>
        <Card.Text>
        
  <ReactStars
    value= {movie.rate}
    size={24}
    activeColor="#ffd700"
    edit={false}
  />,
        </Card.Text>
        <Button variant="primary">Trailer</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard
