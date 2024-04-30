import React from 'react';
import { SiGmail, SiInstagram, SiGithub } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn, FaDribbble, FaFacebookF} from 'react-icons/fa'; 
const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href='https://www.facebook.com/'>
            <FaFacebookF/>
          </a>
        </div>
        <div>
          <a href='https://dribbble.com/Nihar29'>
            <FaDribbble/>
          </a>
        </div>
        <div>
          <a href='https://www.twitter.com/'>
            <BsTwitterX/>
          </a>
        </div>
        <div>
          <a href='mailto:nihar2097@gmail.com'>
            <SiGmail/>
          </a>
        </div>
        <div>
          <a href='https://www.instagram.com/'>
            <SiInstagram/>
          </a>
        </div>
        <div>
          <a href='https://github.com/NiharPanda23'>
            <SiGithub/>
          </a>
        </div>
        <div>
          <a href='https://www.linkedin.com/in/nihar-ranjanpanda/'>
            <FaLinkedinIn/>
          </a>
        </div>
    </div>
  )
}

export default SocialMedia;