import React from 'react'
import { Form } from 'react-bootstrap'

const Filtermovie = ({inputSearch , setInputSearch}) => {
  return (
    <div>
        <Form.Control type="text" placeholder="enter your movie"
        onChange ={(e) => setInputSearch(e.target.value)}
value ={inputSearch}/>


    </div>
  )
}

export default Filtermovie
