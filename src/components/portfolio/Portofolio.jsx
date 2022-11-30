import React from 'react'
import './portfolio.css'
import HoverVideoPlayer from 'react-hover-video-player'
import ProjetResto from '../../assets/ProjetResto.jpg'
import ProjetCovid from '../../assets/ProjetCovid.jpeg'
import VideoDetection1 from '../../assets/VideoDetection.mp4'
import { BiFolder } from 'react-icons/bi'

import { FaGithub } from 'react-icons/fa'
const Portofolio = () => {
  return (
    <section className='tilte' id='portfolio'>
      <h2>Some Things I’ve Built</h2>
      <ul>
        <li className='listProject'>
          <div className='container project__container'>

            <div className='project__content'>

              <h2>Generation of dynamic restaurant websites </h2>
              <p>
                Web application
                Web Application Functionality: Dynamically create restaurant chain related websites and it offers different functionalities such as menu management, integration of foreign
                services like “Square Up” and other options.
              </p>
              <h5> Angular -  Laravel  - Mysql -  UML</h5>

            </div>
            <div className='project__me'>
              <div className='project__me-image'>
                <img src={ProjetResto} alt="project Image" />
              </div>
            </div>
          </div>
        </li>
        <li className='listProject'>
          <div className='container project__container'>
            <div className='project__me'>
              <div className='project__me-image'>
                <img src={ProjetCovid} alt="project Image" />
              </div>
            </div>

            <div className='project__content'>

              <h2>Covid19 Test</h2>
              <p>
                Desktop App
                Functionality: Allowing to give the possibility of
                presence of the Covid-19 disease based on the
                user symptom, this treatment respects on a system
                expert integrate, as well as it allows you to view your latest tests without forgetting the possibility of downloading them. It informs us about the health status
                (number of contaminates, deaths and treating them) of each city.
              </p>
              <h5>Java - Swing Drools - MongoDB   </h5>
              <div className='iconegit'>
                <a href="https://github.com/ahmedamine12/-Test-Covid19" target="__blank"> <FaGithub /></a>
              </div>

            </div>

          </div>
        </li>
        <li className='listProject'>
          <div className='container project__container'>
            <div className='project__content'>

              <h2>Detection of colored objects and their direction </h2>
              <p>
                Allows the detection of the object which has the color
                specify by the user as he determines the direction of the object when it is moving </p>
              <h5> Python with the use of this modules:argparse - cv2 - imutils - time - VideoStream - numpy</h5>
              <div className='iconegit'><a href="https://github.com/ahmedamine12/detection-of-colors-and-directions" target="__blank"> <FaGithub /></a></div>

            </div>
            <div className='project__me'>
              <div className='project__me-image'>
                <HoverVideoPlayer
                  videoSrc={VideoDetection1}
                  pausedOverlay={
                    <img
                      src="bg-texture.png"
                      alt=""
                      style={{
                        // Make the image expand to cover the video's dimensions
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  }
                  loadingOverlay={
                    <div className="loading-overlay">
                      <div className="loading-spinner" />
                    </div>
                  }
                />
              </div>
            </div>

          </div>
        </li>
      </ul>

      <h2>Other Noteworthy Projects</h2>
      <ul className='UlListOtherProject'>
        <li className='LiListOtherProject'>
          <div className='icone'> <BiFolder /> </div>
          <div className='iconegit'><a href="https://github.com/ahmedamine12/controlling-mousse" target="__blank"> <FaGithub /></a></div>
          <h2>Controle cursor by voice</h2>
          <p>
            Allows you to control the mouse cursor with the
            voice by specifying the commands to be executed such as the click and
            double click, Play/pause a video and the movement of the
            cursor.
          </p>
          <h5> Python en utilisant les modules
            suivant : speech_recognition, gui_automation, numpy</h5>

        </li>
        <li className='LiListOtherProject'>
          <div className='icone'> <BiFolder /> </div>  <div className='iconegit'>
            <a href="https://github.com/ahmedamine12/Agence_allocation_Voitures" target="__blank"> <FaGithub /></a></div>
          <h2>Car allocation management</h2>
          <p>
            It is a desktop application that allows us apart from the normal management, the allocation of cars to the
            customer and to make different searches by filtering.
          </p>
          <h5> Java - Swing</h5>

        </li>
        <li className='LiListOtherProject'>
          <div className='icone'> <BiFolder /> </div>
          <div className='iconegit'>
            <a href="https://github.com/ahmedamine12/Ecomerce-website" target="__blank"> <FaGithub /></a></div>
          <h2>E-Commerce</h2>
          <p>
            Design and creation of a website
            dynamic which includes customer management,
            of administrators, products, stocks and purchase.
          </p>
          <h5> Merise - Mysql - php - HTML - CSS - JavaScript</h5>

        </li>
        <li className='LiListOtherProject'>
          <div className='icone'> <BiFolder /> </div>
          <div className='iconegit'>
            <a href="https://github.com/ahmedamine12/AppBanqueForm" target="__blank"> <FaGithub /></a></div>
          <h2>Performing banking transactions</h2>
          <p>
            This project allows us to perform the various banking transactions such as withdrawal and deposit with the possibility of changing
            currency and the customer can view their account informations
          </p>
          <h5> C#  -  SqlServer</h5>

        </li>
        <li className='LiListOtherProject'>
          <div className='icone'> <BiFolder /> </div>
          <div className='iconegit'>
            <a href="https://github.com/ahmedamine12/Recrutement-app-" target="__blank"> <FaGithub /></a></div>
          <h2>Recruitment management</h2>
          <p>
            A web application that is based on the operation of mega servlette its objective is to manage the various postulations of the candidates and
            to be able to manage them to send them a response afterwards
          </p>
          <h5> Java EE - Jsp</h5>

        </li>
        <li className='LiListOtherProject'>
          <div className='icone'> <BiFolder /> </div>
          <div className='iconegit'><a href="https://github.com/ahmedamine12/" target="__blank"> <FaGithub /></a></div>
          <h2>Application of reports</h2>
          <p>
            It is an application that has the final goal of creating reports using the companies entered by the user without
            forgetting that there is a separate management of the companies.
          </p>
          <h5> Pl/sql - Oracle Data base (using Oracle Forms and Reports software)</h5>

        </li>
      </ul>









    </section>
  )
}

export default Portofolio