import React from "react";
import './Reviews.css'

const reviewsData =[
    {
        name: "Ben Stokes",
        score: "4.5/5",
        text: "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat. Dapibus id interdum fusce sed odio massa tellus nibh consequat justo mauris, donec nec tempus iaculis pellente.",
        src:"https://websitedemos.net/digital-agency-02/wp-content/uploads/sites/836/2021/05/customer-1.jpg",
      },
      {
        name: "Mark Taylor",
        score: "4.5/5",
        text: "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat. Dapibus id interdum fusce sed odio massa tellus nibh consequat justo mauris, donec nec tempus iaculis pellente.",
        src:"https://websitedemos.net/digital-agency-02/wp-content/uploads/sites/836/2021/05/customer-3.jpg",
      },
      {
        name: "Josh Hazelwood",
        score: "4.5/5",
        text: "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat. Dapibus id interdum fusce sed odio massa tellus nibh consequat justo mauris, donec nec tempus iaculis pellente.",
        src:"https://websitedemos.net/digital-agency-02/wp-content/uploads/sites/836/2021/06/customer-4.jpg",
      },
      {
        name: "Joe Root",
        score: "4.5/5",
        text: "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat. Dapibus id interdum fusce sed odio massa tellus nibh consequat justo mauris, donec nec tempus iaculis pellente.",
        src:"https://websitedemos.net/digital-agency-02/wp-content/uploads/sites/836/2021/05/customer-1.jpg",
      },
]

const Reviews=()=>{
    return(
        <>
            <div className="review-head">
                What Our Clients Say
            </div>
            <div className="review-container">
                {reviewsData.map((review,index) =>(
                    <div className="review" key={index}>
                        <div className="score">Review Score :{review.score}</div>
                        <div className="review-text">{review.text}</div>
                        <div className="review-photo-name">
                            <img src={review.src} alt={`photo of ${review.name}`} className="rev-image"/>
                            <div className="name">{review.name}</div>
                        </div>
                    </div>
                ))}
            
            </div>
        
        </>
    )
}

export default Reviews;