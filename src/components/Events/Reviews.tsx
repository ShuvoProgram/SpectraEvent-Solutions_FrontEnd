import { useWindowSize } from '@/hooks/useWindowSize';
import React from 'react'
import { Rating } from '../shared/Rating';
import Review from './Review';
import WriteReview from './WriteReview';

function Reviews() {
    const windowSize = useWindowSize();
  return (
    <div className="flex max-xl:flex-col gap-8 max-xl:h-fit max-2xl:h-[630px] pb-2 mt-[20px]">
    <div className="light-component dark:gray-component p-5 pt-3 2xl:w-[65%] max-2xl:w-[60%] max-xl:w-full relative">
      <h4 className="text-[21px] mb-3 font-semibold">Rating & Reviews</h4>
      <div className={`flex mb-5 ${windowSize <= 315 ? "flex-col gap-1" : "items-center gap-4"}`}>
        <p className="text-side-text-light dark:text-side-text-gray mb-[3px]">{`Reviews (${8})`}</p>
        <Rating/>
      </div>
      <div className="flex gap-3 flex-wrap">
        {/* <OrderByOptions 
          options={orderReviews} 
          handleSort={getReviews.handleSort} 
          styles={`px-4 !rounded-md light-component dark:gray-component w-[180px] cursor-pointer 
          h-[40px] !shadow-none max-sm:!w-full ${getReviews.loading ? "pointer-events-none" : ""}`}
        />
        <FilterOptions 
          options={filterReviews} 
          handleFilter={getReviews.handleFilter} 
          styles={`px-4 !rounded-md light-component dark:gray-component w-[180px] cursor-pointer 
          h-[40px] !shadow-none max-sm:!w-full ${getReviews.loading ? "pointer-events-none" : ""}`} 
        /> */}
      </div>
      <div className="mt-5 h-[425px] overflow-y-scroll pr-5">
        <div className="flex flex-col gap-4">
        <Review 
                review={``} 
              />
          <p className="text-side-text-light dark:text-side-text-gray text-center">
            Be the first to write a Product
          </p>
        </div>
        <button className="secondary-btn h-[40px] cursor-pointer m-auto block mt-6 mb-5"
        >
          Read More Reviews
        </button>
        {/* {getReviews.errorMessage && <ErrorMessage error={getReviews.errorMessage.message} styles="!mt-0" />} */}
      </div>
    </div>
    <WriteReview event={''} />
  </div>
  )
}

export default Reviews;