import { Link } from 'react-router-dom'
import { Link as LinkScroll, Element, animateScroll as scroll } from 'react-scroll';
import { useState } from 'react';

// Components
import { Timeline } from '../components/Timeline';
import { Slider } from '../components/Slider';
import { ContactForm } from '../components/Contact_Form/ContactForm';
import { Skills } from '../components/Skills';
import { Navigation } from '../components/Navigation';
import { ScrollUp } from '../components/ScrollUp';
import Typewriter from '../components/Typewriter';

// Photos
import myPhoto from '../images/my-photo.jpg'
import forumMain from '../images/forum-main.png'
import forumStart from '../images/forum-start.png'
import restaurantMain from '../images/orkanova-main.png'
import githubIcon from '../images/github/github-mark-white.png'
import linkedInIcon from '../images/linkedin/linkedin.png'


export const Home = () =>{
    
    const forumPhotos: string[] = [ forumMain, forumStart ]
    const restaurantPhotos: string[] = [ restaurantMain ]

    return (
        <>
            <Navigation/>

            <div className="content">

                <Element name='aboutme'>
                    <section id='aboutme' className="about-me">
                        <div className="info">
                            <h2 className="accent">{ <Typewriter textToAnimate='Hi!' animationSpeed={100} delay={100}/> }</h2>
                            <h3>{ <Typewriter textToAnimate={`I'm Piotr Zapała`} animationSpeed={50} delay={1000}/> }</h3>
                            <h4>{ <Typewriter textToAnimate={`Web developer `} animationSpeed={50} delay={2000}/> }</h4>
                            <p>{ <Typewriter  textToAnimate='IT student from Poland!' animationSpeed={50} delay={3000}/> }</p>
                            
                            <button>
                                <LinkScroll to="projects" offset={-100} smooth={true} duration={500} >Check out my projects!</LinkScroll>
                            </button>

                            <button>
                                <LinkScroll to="contact" offset={-100} smooth={true} duration={500} >Contact with me!</LinkScroll>
                            </button>

                        </div>
                        <div className="photo">
                            <img src={myPhoto} alt="my-photo" />
                        </div>
                    </section>
                </Element>

                    <hr />

                <Element name='about-me-description'>
                    <section className='about-me-description'>
                        <h2>About me</h2>

                        <section className='about-me-description-content'>
                            <h3>I<span className="accent">'</span>m Piotr</h3> 
                            <p>
                            And I'm living in the beautiful city of Kraków.<br /> <br />
                            I am a student of Applied Informatics with a strong passion for programming, with an emphasis on frontend development.<br /> <br />
                            I started programming in high school where I learned fundamental programming concepts, but serious learning began over the past year when I started my studies.<br /> <br />
                            I love solving problems, and I'm fully focused on learning new concepts and skills to become a professional coder in the future :)
                            </p>
                        </section>

                        <section className='about-me-description-socials'>
                            <h4>Visite my socials</h4>

                            <a href="https://github.com/justthedreamer" target='_blank'>
                                <img className='social-icon' src={githubIcon} alt="github-icon-link" />
                            </a>

                            <a href="https://www.linkedin.com/in/piotr-zapa%C5%82a-b9a75b274/" target='_blank'>
                                <img className='social-icon' src={linkedInIcon} alt="github-icon-link" />
                            </a>
                         
                        </section>

                    </section>
                </Element>

                    <hr />
        
                <Element name='education'>
                    <section className="education">
                        <h2>My Education</h2>
                        <Timeline />
                    </section>
                </Element>

                    <hr />

                <Element name='skills'>
                    <section className="skills">
                        <h2>Skills</h2>
                        <Skills />
                    </section>
                </Element>

                    <hr />

                <Element name='projects'>
                    <section className="projects">
                        <h2>Projects</h2>

                        <article className='project'>
                            <h3>Forum WPF</h3>
                            <ul className='horizontal-list'>
                                <li>C#</li>
                                <li>WPF</li>
                            </ul>
                            <Slider source={forumPhotos} title='Forum' />
                            <button>
                                <a target='_blank' href="https://github.com/justthedreamer/Forum-WPF">Check</a>
                            </button>
                        </article>

                        <article className='project'>
                            <h3>Restaurant site</h3>
                            <ul className='horizontal-list'>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>React</li>
                            </ul>
                            <Slider source={restaurantPhotos} title='Restaurant' />
                            <button>Check</button>
                        </article>
                        
                    </section>
                </Element>

                    <hr />
  
                <Element name='contact'>
                    <section className="contact">
                        <h2>Contact</h2>
                        <ContactForm />
                    </section>
                </Element>
                
            </div>

            <footer>
                <p>&#169; 2023 Piotr Zapała</p>
                <div className="socials">
                </div>
            </footer>

            <ScrollUp />
        </>
    )
}