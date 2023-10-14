import React from 'react'
import headerImg from '../../assets/img/header-img.svg'
export default function Banner() {


  return <>
    <section className="banner" id='home'>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <span className='tagline'> Welcome To My Portfolio</span>
            <h2>hi i,m Melad Web Developer and Designer</h2>
            <p>Junior Front-End Developer who is eager to learn in software development and use new technologies in Web Applications, with a demonstrated history in developing and achieving different tasks including building huge responsive websites using React JS.
              I'm very passionate about tackling new problems and figuring out ways to overcome and solve them.
              I completed Full stack diploma in Route Academy</p>
            <button className='btn btn-outline-light'> <a target='_blank' className='text-decoration-none' href="https://drive.google.com/file/d/1aJrtt7ukbBjeCzh3KtnjBYwihmNyQh-F/view?usp=sharing">
              My Resume</a> </button>
          </div>
          <div className="col-md-6">
            <img src={headerImg} alt="Header" />
          </div>
        </div>
      </div>
    </section>
  </>
}