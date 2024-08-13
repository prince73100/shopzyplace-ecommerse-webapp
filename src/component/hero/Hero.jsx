import './hero.css'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png';
const Hero = () => {
    return <div className="hero">
        <div className="hero-left">
            <h2>NEW ARRIVELS ONLY </h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>collection</p>
                <p>for everyone</p>
                <div className="hero-latest-button">
                    <div>
                        Latest Collection
                    </div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
        </div>
        <div className="hero-right">
          <img src={hero_image} alt="" />
        </div>
    </div>
}

export default Hero;