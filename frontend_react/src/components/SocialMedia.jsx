import React from 'react';
import { images } from '../constants';
import { SiGmail, SiInstagram, SiGithub } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn, FaDribbble} from 'react-icons/fa'; 
const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div className='meta'>
          <a href='https://www.facebook.com/'>
            <img src={images.meta} alt="" />
          </a>
        </div>
        <div>
          <a href='https://dribbble.com/Nihar29'>
            <img src={images.dribble} alt="" />
          </a>
        </div>
        <div>
          <a href='https://www.twitter.com/'>
            <img src={images.twitter} alt="" />
          </a>
        </div>
        <div>
          <a href='mailto:nihar2097@gmail.com'>
            <img src={images.gmail} alt="" />
          </a>
        </div>
        <div>
          <a href='https://www.instagram.com/'>
            <img src={images.insta} alt="" />
          </a>
        </div>
        <div>
          <a href='https://github.com/NiharPanda23'>
            <img src={images.github} alt="" />
          </a>
        </div>
        <div>
          <a href='https://www.linkedin.com/in/nihar-ranjanpanda/'>
            <img src={images.linkedin} alt="" />
          </a>
        </div>
    </div>
  )
}

export default SocialMedia;