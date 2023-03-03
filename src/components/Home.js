import "./components.css";
import { FaMicrosoft, FaAmazon } from "react-icons/fa";
import { SiNetflix } from "react-icons/si";
import { BsGoogle, BsApple } from "react-icons/bs";
import card from "../assets/card.jpg";
function Home() {
  const CardItem = () => {
    return (
      <div className="card-itm">
        <img className="card-image" src={card} alt="card" />
        <div className="card-des">
          <h4>OVERCOMING CREATIVE BLOCK</h4>
          <p>LOREM IPSUM DOLOR SIT AMET . CONSECTETUR ELIT.</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="section1">
        <div className="overlay" style={{ height: "95vh" }}>
          <div className="section-container">
            <div className="column" style={{ width: "50%" }}>
              <div className="overlay-heading">We crush minimal design.</div>
              <div className="overlay-paragraph">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem
                ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
            <div className="column" style={{ width: "50%" }}></div>
          </div>
        </div>
        <div className="content">
          <div className="content-container">
            <div>
              <div className="content-heading"> We build experience. </div>
              <p> lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <br />
              <br />
            </div>
            <div className="content-paragraph">
              <div>
                <h3>Design</h3>
                <p>
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
                  dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className="content-button">Learn More</button>
              </div>
              <div>
                <h3>Design</h3>
                <p>
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
                  dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className="content-button">Learn More</button>
              </div>
              <div>
                <h3>Design</h3>
                <p>
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
                  dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className="content-button">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="overlay">
          <div className="section-container">
            <div className="column" style={{ width: "100%" }}>
              <div className="overlay-heading">We design brands</div>
              <div className="overlay-paragraph">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem
                ipsum dolor sit amet
                <br />
                <br />
              </div>
              <div className="logos">
                <BsApple />
                <FaMicrosoft />
                <FaAmazon />
                <SiNetflix />
                <BsGoogle />
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="content-container">
            <div>
              <div className="content-heading"> We create Stories. </div>
              <p> lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <br />
              <br />
            </div>
            <div className="card-container">
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
            </div>
          </div>
        </div>
      </div>

      <div className="band">
        Hit the ground running with a minimalist look.
        <button className="band-button">LEARN MORE</button>
      </div>
      <footer>
        <p>&copy; 2023 Your Company Name</p>
      </footer>
    </>
  );
}

export default Home;
