import Header from "../../components/Header";
import HeaderImages from "../../images/header_bg_3.jpg";
import "./gallery.css";

import "./gallery.css";
const Gallery = () => {
  const galleryLength = 15;
  const images = [];

  for (let index = 1; index <= galleryLength; index++) {
    images.push(require(`../../images/gallery${index}.jpg`));
  }

  console.log(images);
  return (
    <>
      <Header title="Our Gallery " image={HeaderImages}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
        asperiores officia tempora sed quibusdam deserunt?
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {images.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} alt={`Gallery iMg ${index + 1}`} />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
