import React from 'react'
import Review from './Review'

interface IWork {
  work: []
}

function Event({work}: IWork) {
  return (
    <div className=''>
        <div className="container">
    <div className="mt-24 flex flex-col items-center justify-center">
      <h1 className="text-center text-2xl font-semibold sm:text-3xl md:text-4xl">{`Bridal Haven`}</h1>
      <p className="mt-4 flex items-center text-gray-400">
        <span>{`12-08-23`}</span>
        <span className="mx-2 h-1.5 w-1.5 rounded-full bg-primary-500"></span>
        <span>{`Wedding`}</span>
      </p>
    </div>
    <div className="mt-10">
      {/* <Slider {...settings}>
        {work.images.map((image, index) => (
          <div className="overflow-hidden rounded-xl" key={index}>
            <Image src={image} height={720} width={1280} layout="responsive" alt={work.title} />
          </div>
        ))}
      </Slider> */}
    </div>

    <div className="my-10">
      <h3 className="text-xl font-semibold">Summary</h3>
      <p className="mt-4">{`test`}</p>
      <h3 className="mt-10 text-xl font-semibold">Feature List</h3>
      <ul className="mt-4 list-disc pl-4">
        {/* {work.featureList.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))} */}
      </ul>
    </div>

    <div className="my-10 rounded-lg bg-gray-50 py-3 shadow-md dark:bg-gray-700">
      <table className="w-full">
        <tbody>
          {/* {work.attributes.map((attribute, index) => (
            <tr key={index}>
              <td className="w-48 px-4 py-2 font-semibold">{attribute.name}</td>
              <td>{attribute.value}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
    <Review/>
  </div>
    </div>
  )
}

export default Event