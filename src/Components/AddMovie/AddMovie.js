import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';


const AddMovie = ({add}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title , setTitle] = useState("")

  const [description , setDescription] = useState("")

  const [rate , setRate] = useState(0)

  const [ posteUrl, setPosterUrl] = useState("")

  const [trailer , setTrailer] = useState("")
  
  const handleTitle = (e) => {
    setTitle(e.target.value)
  }
  const handleDescription = (e) => {
    setDescription(e.target.value)
  }
  const handleRate = (e) => {
    setRate(e.target.value)
  }
  const handlePosterUrl = (e) => {
    setPosterUrl(e.target.value)
  }
  const handleTrailer= (e) => {
    setTrailer(e.target.value)
  }
  const handleAdd = () => {
    let newMovie = {title , description , rate , posteUrl , trailer}
  add(newMovie)
  setShow(false)
  
  }



  return (
    <div>
   <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="title" onChange={(e)=> handleTitle(e)}/>

        <Form.Label>posterUrl</Form.Label>
        <Form.Control type="url" placeholder="posterUrl" onChange={(e)=> handlePosterUrl(e)}/>

        <Form.Label>trailer</Form.Label>
        <Form.Control type="url" placeholder="trailer"onChange={(e)=> handleTrailer(e)} />

        <Form.Label>description</Form.Label>
        <Form.Control type="text" placeholder="description" onChange={(e)=> handleDescription(e)}/>

        <Form.Label>rate</Form.Label>
        <Form.Control type="number" placeholder="rate" onChange={(e)=> handleRate(e)} />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={()=> handleAdd()}>Add Movie</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovie
