import React from 'react'

export default function ProjectCard({ title, description, imgUrl, linka }) {
  return <>
    <div className="col-md-4">
      <div className="proj-imgbx">

        <img src={imgUrl} />


        <div className="proj-txtx">

          <h4>{title}</h4>
          <span>{description}</span>
          <div className='my-2'>
            <button className='btn btn-outline-light ' >
              <a target='_blank' href={linka} className='text-decoration-none '>
                Go to Website 
              </a>
            </button>
          </div>


        </div>
      </div>
    </div>
  </>

}
