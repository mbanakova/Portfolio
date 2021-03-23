import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaTelegramPlane, FaGithub } from "react-icons/fa";

function Footer() {
  let contacts = [
    {
      type: "email",
      link: "mailto:mbanakova@yandex.ru",
      icon: <HiOutlineMail />
    },
    {
      type: "phone",
      link: "tel:+79268757522",
      icon: <HiOutlinePhone />
    },
    {
      type: "telegram",
      link: "https://t.me/mbanakova",
      icon: <FaTelegramPlane />
    },
    {
      type: "github",
      link: "https://github.com/mbanakova",
      icon: <FaGithub />
    }
  ];
  return (
    <footer className="footer">
      <div className="footer__container">
        <Link to="/portfolio/" className="footer__author">
          Maria Banakova
        </Link>
        <div className="footer__copyright">Portfolio © 2021</div>
        <div className="footer__social">
          {contacts.map(contact => {
            return (
              <a
                className="footer__social-link"
                href={contact.link}
                target="_blank"
                aria-label={contact.type}
                rel="noreferrer"
              >
                {contact.icon}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
