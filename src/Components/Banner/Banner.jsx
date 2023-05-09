import React, { useEffect, useState } from 'react'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../../assets/img/header-img.svg'
export default function Banner() {

        const [loopNum, setLoopNum] = useState(0);
        const [isDeleting, setIsDeleting] = useState(false);
        const [text, setText] = useState('');
        const [delta, setDelta] = useState(300 - Math.random() * 100);
        const [index, setIndex] = useState(1);
        const toRotate = [ "Web Developer", "Web Designer"];
        const period = 2000;
      
        useEffect(() => {
          let ticker = setInterval(() => {
            tick();
          }, delta);
      
          return () => { clearInterval(ticker) };
        }, [text])
      
        const tick = () => {
          let i = loopNum % toRotate.length;
          let fullText = toRotate[i];
          let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
      
          setText(updatedText);
      
          if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
          }
      
          if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
          } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
          } else {
            setIndex(prevIndex => prevIndex + 1);
          }
        }


  return <>
 <section className="banner"id='home'>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <span className='tagline'> Welcome To My Portfolio</span>
           <h1>{`hi i,m Melad`} <span className='wrap'> {text}</span> </h1>
           <p>Junior Front-End Developer who is eager to learn in software development and use new technologies in Web Applications, with a demonstrated history in developing and achieving different tasks including building huge responsive websites using React JS.
I'm very passionate about tackling new problems and figuring out ways to overcome and solve them.
I completed Full stack diploma in Route Academy</p>
           <button className='btn btn-outline-light'> <a target='_blank' className='text-decoration-none' href="https://drive.google.com/file/d/1pOLrOpWbYZ0kjbA3J4CuUyvZqHvVcle-/view?usp=share_link">
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