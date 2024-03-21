import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsArrowDownRightCircle } from "react-icons/bs";

const Hero: React.FC = () => {
  const [heroData] = useState({
    title: "Elevate your workout experience with us",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Quo eum repellat perferendis aut cumque sapiente asperiores error dolorem. M
     repellat perferendis aut cumque sapiente asperiores error dolorem. M
     repellat perferendis aut cumque sapiente asperiores error dolorem. M aut cumque.
    `,
    images: [
      "assets/images/img1.jpg",
      "assets/images/img2.jpg",
      "assets/images/img3.jpg",
      "assets/images/img4.jpg",
      "assets/images/img5.jpg",
      "assets/images/img6.jpg",
      "assets/images/img7.jpg",
    ],
    icons: [<FaFacebook />, <FaTwitter />, <FaInstagram />, <FaYoutube />],
  });

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % heroData.images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroData.images.length]);

  return (
    <div className="hero">
      <div className="hero__content">
        <div className="hero__content--top">
          <h1 className="hero__content--top-title">{heroData.title}</h1>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 450 450"
            fill="#d00000"
            className="svg"
          >
            <path d="M208 394.6C94.4 387 4 247 64 146.9c28-49 85.9-78 142-75 58.7 8.3 102.6 61.1 108 118.5 3.8 56-35.1 119.9-95.2 121.6-33 .4-68.7-23.3-83.7-51.7-22.6-38-10.7-92.3 31.8-108.3 31.6-12.2 74 9.1 82.4 42.8 9.4 34.7-36.8 61.7-63.6 42.4-29.8-32.3 19.2-58 46.8-36.3-5.2-31.5-51.9-49.7-74.5-24-53.7 53.9 31.8 152.9 95.6 107.4 40-27.8 54-87.8 33.2-129.3-19.6-42.7-60.2-74.1-107.1-66-67.6 9-123.4 68-117 138.7 7.7 86 98.2 173.8 188.2 145.9 43.9-12.2 78-43.3 100.9-79.2 36.3-70.9 47-153.2 23-229.2-1.5-4.5 1.8-8.8 6.1-9.9 4.4-1 9.4 1.1 10.9 5.6 23.7 75 15 152.6-16 224C350.5 345.5 274 400 208.2 394.6Zm10.7-170c2.5-1.4 4-2.2 7.1-5-.7-1.2-1-2.5-.9-3.8-7.5-8.5-24.7-11.3-30.6-.2-.8 3.6.7 6.8 3.6 10 5.4 4 16.8.2 20.8-1Z"></path>
          </svg> */}
          <div className="hero__content--top-icons">
            {heroData.icons.map((i, index) => (
              <ul key={index}>
                <IconContext.Provider
                  value={{ color: "#d00000", className: "icon-name" }}
                >
                  <a>{i}</a>
                </IconContext.Provider>
              </ul>
            ))}
          </div>
        </div>
        <div className="hero__content--middle">
          <p>{heroData.description}</p>
          <div className="enquire">
            <button>Enquire More</button>
          </div>
        </div>
        <div className="hero__content--bottom">
          <div className="hero__content--bottom-images">
            <div className="parallax-container">
              {heroData.images.map((image, i) => (
                <div key={i} className="parallax-item">
                  <img
                    key={i}
                    src={image}
                    alt={`img ${i + 1}`}
                    loading="lazy"
                    className={`parallax-image ${index === i ? "active " : ""}`}
                  />
                  <BsArrowDownRightCircle className="icon" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
