import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.css';
import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);


// import React, {useState, useEffect} from 'react';
// import {motion} from 'framer-motion';
// import { images } from '../../constants';

// import { AppWrap } from '../../wrapper';

// import "./About.scss";

// const abouts = [
//   {
//     title: 'web Development',
//     description: 'I am a good web developer',
//     imgUrl: images.about01
//   },
//   {
//     title: 'web Design',
//     description: 'I am a good web designer',
//     imgUrl: images.about02
//   },
//   {
//     title: 'UI/UX Design',
//     description: 'I am a good Ui/Ux designer',
//     imgUrl: images.about03
//   },
//   {
//     title: 'Web Animation',
//     description: 'I am a good web Animator',
//     imgUrl: images.about04
//   }
// ];

// const About = () => {


//   return (
//     <>
//       <h2 className='head-text'>I know That <span>Good Development</span><br/>means <span>Good Business</span></h2>

//       <div className='app__profiles'>
//         {abouts.map((about, index) => (
//           <motion.div
//             whileInView={{opacity: 1}}
//             whileHover={{ scale: 1.1}}
//             transition={{duration: 0.5, type: 'tween'}}
//             className='app__profile-item'
//             key={about.title + index}
//           >
//             <img src={about.imgUrl} alt={about.title}/>
//             <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
//             <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </>
//   )
// }

// export default AppWrap(About, 'about');
