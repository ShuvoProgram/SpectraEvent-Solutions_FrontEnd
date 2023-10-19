import React from 'react'
import { Rating } from '../shared/Rating'
import { useWindowSize } from '@/hooks/useWindowSize';
import Button from '../shared/Button';

function Review({review}: any) {
    // const windowSize = useWindowSize();
  return (
    <div className="border-b border-b-light-border dark:border-b-main-gray-border pb-6">
      <div className="flex max-md:flex-col md:items-center md:gap-3">
        <h5 className="text-main-text-black dark:text-main-text-white font-semibold">Good Product</h5>
        <p className="text-side-text-light dark:text-side-text-gray text-[15px]">{`Posted on ${`23-12-23`}`}</p>
      </div>
      <div className={`flex items-center gap-[13px] mt-[6px] mb-2 max-sm:flex-col-reverse max-sm:items-start`}>
        <Rating/>
        <div className={`flex items-center gap-[13px]`}>
        <div className="flex items-center gap-[13px]">
        <div className="w-[1px] bg-light-border dark:bg-main-gray-border h-[17px]"></div>
            <p className="popular bg-bg-primary-btn-hover">Your review</p>
          </div>
        </div>
      </div>
      <p className="text-main-text-black dark:text-main-text-white">{'Have a good product'}</p>
      <p className="text-side-text-light dark:text-side-text-gray mt-2 text-[15px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ducimus aliquam non sunt, dicta animi. Praesentium voluptate, modi maxime consectetur a ab est neque rerum iusto consequuntur, quos ea, voluptatibus laboriosam dicta ipsa iste quidem.
      </p>
      <div className="gap-3 flex items-center">
      {/* <Button
          action={addHelpfulCount}
          completedText="Marked as helpful"
          defaultText="Helpful"
          loadingText="Marking as helpful"
          styles="secondary-btn h-[30px] mt-3"
          setErrorMessage={setErrorMessage}
        />
         <Button
          action={deleteReview}
          completedText="Review deleted"
          defaultText="Delete review"
          loadingText="Deleting review"
          styles="danger-btn h-[30px] mt-3"
          setErrorMessage={setErrorMessage}
        /> */}
      </div>
      {/* {errorMessage && 
      <ErrorMessage 
        error={errorMessage.message} 
        styles="!mt-4" 
      />} */}
    </div>
  )
}

export default Review