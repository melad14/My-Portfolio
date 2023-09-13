import React from 'react'
import { Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard.jsx";
import projImg1 from "../../assets/img/project2.jpeg";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export default function Projects() {
  const projects = [
    {
      title: "e-commerce",
      description: "Design & Development",
      imgUrl: projImg1,
      linka: 'https://melad14.github.io/e-commerce/'
    },
    {
      title: "Movies website",
      description: "Design & Development",
      imgUrl: projImg1,
      linka: 'https://melad14.github.io/your-movie/'
    },
    {
      title: "Games Website",
      description: "Design & Development",
      imgUrl: projImg1,
      linka: 'https://melad14.github.io/your-Game/'
    },
    {
      title: "Garage Website",
      description: "Design & Development",
      imgUrl: projImg1,
      linka: 'https://melad14.github.io/Garage/'
    },
    
    {
      title: "Weather website",
      description: "Design & Development",
      imgUrl: projImg1,
      linka:'https://melad14.github.io/weather-app/'

    },
    {
      title: "recipes website",
      description: "Design & Development",
      imgUrl: projImg1,
      linka: 'https://melad14.github.io/Yummy-app/'
    },
  ];
  const projects2 = [
    {
      title: "Restaurant",
      description: "Design & Development",
      imgUrl: projImg1,
      linka: 'https://melad14.github.io/reastaurant/'
    },
    {
      title: "Crud System",
      description: "Design & Development",
      imgUrl: projImg1,
      linka: 'https://melad14.github.io/crud-system/'
    },
    {
      title: "Smart Login",
      description: "Design & Development",
      imgUrl: projImg1,
      linka: 'https://melad14.github.io/smart-login/sign-up.html'
    },
    {
      title: "Bookmarks",
      description: "Design & Development",
      imgUrl: projImg1,
      linka: 'https://melad14.github.io/bookmarks-app/'
    },
    {
      title: "Random Quotes",
      description: "Design & Development",
      imgUrl: projImg1,
      linka: 'https://melad14.github.io/random-qoutes/'
    },
    {
      title: "Dom Example",
      description: "Design & Development",
      imgUrl: projImg1,
      linka:'https://melad14.github.io/dom-example/'

    },
   
  ];

  return <>
    <section className="project" id="projects">
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>these are my all projects <br />
                  I used all my skills in these projects
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  
                      <Tab.Pane eventKey="first">
                        <div className='row'>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className='row'>
                          {
                            projects2.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div className='row'>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </div>
                      </Tab.Pane>
                      
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </div>
        </div>
      </div>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  </>
}
