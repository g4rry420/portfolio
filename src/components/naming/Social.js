import React from 'react'
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa"
import { GoMarkGithub } from "react-icons/go"

export default function Social() {
    return (
        <ul className="icons">
            <li>
                <a href="https://www.linkedin.com/in/gurkiran-singh-0535b019a/twi" target="_blank" rel="noopener noreferrer">
                    <span className="fab fa-facebook-f">
                        <FaLinkedin/>
                    </span>
                </a>
            </li>

            <li>
                <a href="https://twitter.com/GurkiranSingh3" target="_blank" rel="noopener noreferrer">
                    <span className="fab fa-twitter">
                        <FaTwitter/>
                    </span>
                </a>
            </li>

            <li>
                <a href="https://www.instagram.com/gurkiransinghk/" target="_blank" rel="noopener noreferrer">
                    <span className="fab fa-instagram">
                        <FaInstagram/>
                    </span>
                </a>
            </li>

            <li>
                <a href="https://github.com/g4rry420" target="_blank" rel="noopener noreferrer">
                    <span className="fab fa-github">
                        <GoMarkGithub/>
                    </span>
                </a>
            </li>
        </ul>
    )
}
