import React from 'react';


const defaultText = "Submit review";
const loadingText = "Submitting review...";
const completedText = "Review submitted";
const minReviewLength = 100;
const maxReviewLength = 400;

interface IEvent {
    event: string;
}

function WriteReview({event}: IEvent) {
  return (
    <div className="light-component dark:gray-component 2xl:w-[35%] max-2xl:w-[40%] max-xl:w-full p-5 pt-3 relative">
    <h4 className="text-[19px] mb-3 font-semibold">Write a review</h4>
    <p className="text-side-text-light dark:text-side-text-gray mb-1">Rating</p>
    {/* <RatingStars rating={rating} setRating={setRating} /> */}
    <p className="text-side-text-light dark:text-side-text-gray mt-3 mb-2">Heading</p>
    <input type="text" className="text-box-light dark:text-box w-full mb-3" maxLength={40} placeholder="Enter review heading" 
    // value={reviewTitle}
    // onChange={(e) => updateReviewTitle(e.target.value)} 
    />
    <p className="text-side-text-light dark:text-side-text-gray mb-2">{`Review of the product (must be between ${minReviewLength} and ${maxReviewLength} characters)`}</p>
    <textarea className="text-box-light dark:text-box w-full h-[300px]" placeholder="Share your thoughts on the product"
    //  value={review}
    // onChange={(e) => updateReview(e.target.value)} maxLength={400} 
    />
    {/* {errorMessage && 
    <ErrorMessage
      error={errorMessage.message} 
      styles="absolute top-0 left-0 w-full !mt-0 rounded-b-[0px]"
    />} */}
    {/* <Button 
      action={submitReview} 
      completedText={completedText}
      defaultText={defaultText} 
      loadingText={loadingText}
      styles={`btn-primary px-3 h-[40px] ml-auto block mt-6`}
      setErrorMessage={setErrorMessage}
    /> */}
  </div>
  )
}

export default WriteReview