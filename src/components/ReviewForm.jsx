import React from 'react'
import { BsFillEmojiFrownFill, BsFillEmojiHeartEyesFill, BsFillEmojiNeutralFill, BsFillEmojiSmileFill } from 'react-icons/bs'

import './ReviewForm.css'

const ReviewForm = ({data, updateFieldHandler}) => {
  return (
    <div className="reviewForm">
      <div className="formControl scoreContainer">

        <label className='radioContainer'>
          <input type="radio" name="review"value="unsatisfied" required checked= {data.review === "unsatisfied"} onChange={(e) => updateFieldHandler("review", e.target.value)}/>
          <BsFillEmojiFrownFill/>
          <p>Insatisfeito</p>
          </label>

          <label className='radioContainer'>
          <input type="radio" name="review"value="neutral" required checked= {data.review === "neutral"} onChange={(e) => updateFieldHandler("review", e.target.value)}/>
          <BsFillEmojiNeutralFill/>
          <p>Poderia ser melhor</p>
        </label>

        <label className='radioContainer'>
          <input type="radio" name="review"value="satisfied" required checked= {data.review === "satisfied"} onChange={(e) => updateFieldHandler("review", e.target.value)}/>
          <BsFillEmojiSmileFill/>
          <p>Satisfeito</p>
        </label>

        <label className='radioContainer'>
          <input type="radio" name="review"value="verySatisfied" required checked= {data.review === "verySatisfied"} onChange={(e) => updateFieldHandler("review", e.target.value)}/>
          <BsFillEmojiHeartEyesFill/>
          <p>Muito Satisfeito</p>
        </label>
      </div>

    <div className="formControl">
      <label htmlFor="comment">Comentário:</label>
      <textarea name="comment" id="comment" placeholder='Conte-nos como foi sua experiência comprando com a gente :)' required value= {data.comment} onChange={(e) => updateFieldHandler("comment", e.target.value)}></textarea>
    </div>

    </div>
  )
}

export default ReviewForm
