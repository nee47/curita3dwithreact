import React from "react";
import "./BasicStyles.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-wrapper">
          <p>Contáctanos</p>
          <ul className="footer-wrapper__ul">
            <li>
              <a
                href="https://www.instagram.com/curita3d"
                target="_blank"
                rel="noreferrer"
              >
                <img src="imgs/instagram_icon.png" alt="icono instagram" />
              </a>
            </li>
            <li>
              <img src="imgs/whatsapp_icon.png" alt="icono instagram" />
            </li>
            <li>
              <p>1156459866</p>
            </li>
          </ul>
          <p>Ciudad Autónoma de Buenos Aires</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
