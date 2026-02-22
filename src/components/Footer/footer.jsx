import React from 'react';
import './footer.css';
import { FaRegFileCode } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import  resume from '../../../public/Sebastian_haloho_resume.pdf'


export default function Footer() {
    return (
        <div className='footer-section'>
            <div className="footer-content">
                <div className="footer-greatings">
                    <span className="footer-quote">Let's Connect</span>
                    <span className="mail-to">
                        Start by <a href="mailto:bastianhalo19@gmail.com">saying Hi!</a>
                    </span>
                    <div className="download-cv">
                        <span className="download-text">
                            or you can see my
                        </span>
                        <a className="download" href={resume} download='sebastian-resume' target='_blank' rel='noopener noreferrer'>
                            <FaRegFileCode />
                            <span>Résumé</span>
                        </a>
                    </div>
                </div>
                <div className="about-me">
                    <span className='other-info'>Other Informations</span>
                    <div className="dom">
                        <IoLocationSharp size={24} />
                        <span>Surabaya, East Java, Indonesia</span>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <small>&copy; Copyright 2023, Bastian Haloho. All Rights Reserved</small>
            </div>
        </div>
    )
}