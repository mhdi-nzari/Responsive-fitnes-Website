import Header from "../../components/Header";
import HeaderImages from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

import "./contact.css";

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch " image={HeaderImages}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
        asperiores officia tempora sed quibusdam deserunt?
      </Header>

      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a
              href="mailto:nazarii.eng@gmail.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              <MdEmail />
            </a>
            <a
              href="instagram.com/mhdi_nzari"
              rel="noreferrer noopener"
              target="_blank"
            >
              <BsMessenger />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=+989162890084"
              rel="noreferrer noopener"
              target="_blank"
            >
          
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
