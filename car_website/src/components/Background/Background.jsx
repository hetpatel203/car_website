import React,{useState} from 'react'
import video1 from '../../assets/video1.mp4'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'

import './Background.css'

const Background = ({play, heroCount}) => {
        if(play){
          return(
            <video className='background fade-in' autoPlay loop muted>
              <source src={video1} type='video/mp4' />
            </video>
          )
          }
          else if(heroCount === 0){

            return <img src={image1} alt="" className='background fade-in' />

          }
          
          else if(heroCount === 1){

            return <img src={image2} alt="" className='background fade-in' />

          }

          else if(heroCount === 2){ 

            return <img src={image3} alt="" className='background fade-in' />

          }
          else {
            return null; // Return null if none of the conditions are met
          }
        }
        export default Background;

