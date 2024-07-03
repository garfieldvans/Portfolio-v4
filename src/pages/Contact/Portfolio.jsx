import React from 'react'
import { project } from '../../utils/data'

const Portfolio = () => {
  return (
    <div className='flex flex-col lg:px-40 pt-2 sm:px-10 px-4 text-white pb-20'>
      <h1>Portfolio</h1>
      {/* <div className='flex flex-wrap gap-10'>
        {project.map((item, i) => {
          return(
            <div key={i} >
              <iframe src={item.url} style={{ width: 'auto', height: '300px', border: 'none' }}/>

            </div>
          )
        })}
      </div> */}
    </div>
  )
}

export default Portfolio
