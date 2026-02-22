import React from 'react'
import './portfolio.css'
import { projects } from '../../utils/data'


const Portfolio = ({ sectionID }) => {
  return (
    <div className='flex flex-col lg:px-40 pt-2 sm:px-10 px-4 text-white pb-20' id={`${sectionID}`}>
      <div className="section-wrapper">
        <div className="section-header">
          <div className="h-px bg-slate-200/25 w-full" />
          <h2 className='section-header-title font-bold text-3xl text-center animate-fade-up'><b className="text-indigo-400">Ideas</b> Brought to Life</h2>
          <div className="h-px bg-slate-200/25 w-full" />
        </div>

        {/* portfolio list */}
        <div className="section-content">

          {projects.map((item, i) => {
            return (
              <div className="project-card" key={i}>
                <div className='card-container'>
                  <div className="bola-kosong" bis_skin_checked="1"></div>
                  <div className="project-image">
                    <img src={item.img} alt={item.name} />
                  </div>

                  <div className="project-content">
                    <h3 className='card-title'>{item.name}</h3>
                    <p className='card-desc'>
                      {item.desc}
                    </p>
                    <div className="card-redirect">
                      { item.url && (
                        <a className='redirect-to' href={item.url}>Visit site..</a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

            )

          })}

        </div>
      </div>
    </div>
  )
}

export default Portfolio
