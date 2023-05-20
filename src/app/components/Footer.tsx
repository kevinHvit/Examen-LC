"use client"

import React from 'react'
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { CgMail } from 'react-icons/Cg';

const Footer = () => {
  return (
    <footer className="bg-dark p-5 rounded-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
          <img src="https://i.redd.it/wjl1x8tfahm41.jpg" alt="" className='d-block w-25 h-25' />
          </div>
          <div className="col-12 col-md-6">
            <h4 className="text-white">Redes Sociales</h4>
            <ul className="list-unstyled ">
              <li className='text-white'>
                <a href="https://www.facebook.com/#" target="_blank" >
                  <AiOutlineFacebook />
                </a>
                    Kevin Castrillo
              </li>
              <li className='text-white'>
                <a href="https://www.instagram.com/#" target="_blank" >
                  <AiOutlineInstagram/>
                </a>
                Kevin.Castrillo
              </li>
              <li className='text-white '>
                <a href="https://www.linkedin.com/in/#" target="_blank" rel="noreferrer">
                  <AiOutlineLinkedin />
                </a>
                Kevin Castrillo Jimenez
              </li>
              <li className='text-white'>
                <a href="https://www.gmail.com/#" target="_blank" rel="noreferrer">
                  <CgMail/>
                </a>
                castrillo.jimenezk@gmai.com
              </li>
            </ul>

          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer