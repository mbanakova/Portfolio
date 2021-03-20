import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import { HiOutlineMail, HiOutlinePhone, } from 'react-icons/hi';
import { FaTelegramPlane, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Maria Banakova
            </Link>
          </div>
          <small className='website-rights'>Portfolio © 2021</small>
          <div className='social-icons'>
            <a className='social-icon-link' href='mailto:mbanakova@yandex.ru' target='_blank' aria-label='email' rel='noreferrer'>
              <HiOutlineMail />
            </a>
            <a className='social-icon-link' href='tel:+79268757522' target='_blank' aria-label='phone' rel='noreferrer'>
              <HiOutlinePhone />
            </a>
            <a className='social-icon-link' href='https://t.me/mbanakova' target='_blank' aria-label='telegram' rel='noreferrer'>
              <FaTelegramPlane />
            </a>
            <a className='social-icon-link' href='https://github.com/mbanakova' target='_blank' aria-label='github' rel='noreferrer'>
              <FaGithub />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;