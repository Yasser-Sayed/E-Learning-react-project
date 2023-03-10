import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'


export default function Form({addReview}) {

    const [name,setName] =useState('');
    const [message,setMessage] =useState('');
    const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    
  }
  const formSubmit = (e) => {
    e.preventDefault();
    const review = {
      id: 1,
      name,
      message,
      rating: rating 
    }
    addReview(review);
  }
  const isDisabled = () => {
    if (!name || !message || !rating){
      return true;
    }
  }


    
    return (
        <form className='mt-2' onSubmit= {(e) => formSubmit(e)}>
            <div className='mb-3'>
  <label htmlFor='name' className='form-label'>Your Name </label>
  <input 
  type='text' 
  name='name'
  value={name}
  onChange={(e) => setName(e.target.value)}
  className='form-control'
  placeholder='Name' />
</div>
<div className='mb-3'>
  <label htmlFor='message' className='form-label'>Your Feedback</label>
  <textarea 
   className='form-control'
   name='message' 
   value={message}
   onChange={(e) => setMessage(e.target.value)}
   placeholder='Feedback'
   rows='3'></textarea>
</div>

<div className='mb-3'>
      <Rating
        onClick={handleRating}
        ratingValue={rating}
         /* Available Props */

        // onPointerEnter={onPointerEnter}
        // onPointerLeave={onPointerLeave}
        // onPointerMove={onPointerMove}
       
      />
    </div>


<div className='mb-3'>
    <button 
    disabled = {isDisabled()}
    type='submit' 
    className='btn btn-primary mb-3'>
        Submit
    </button>
  </div>
        </form>

    )
}