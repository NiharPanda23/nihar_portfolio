import React from 'react';
import { BsInstagram} from 'react-icons/bs';
import { FaGithub, FaLinkedinIn} from 'react-icons/fa'; 
const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href='https://www.instagram.com/'>
            <BsInstagram/>
          </a>
        </div>
        <div>
          <a href='https://github.com/NiharPanda23'>
            <FaGithub/>
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