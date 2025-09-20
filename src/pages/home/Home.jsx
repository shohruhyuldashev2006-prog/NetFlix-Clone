import Navbar from '../../components/navbar/Navbar';
import './Home.css';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCard from '../../components/cards/TitleCard';
import Footer from '../../components/footer/Footer';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem eos
            vero possimus ullam! Molestias odio asperiores cum eveniet ullam
            animi quam quibusdam, fuga assumenda ea.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <TitleCard />
        </div>
      </div>
      <div className="more-cards">
        <TitleCard title={'Blockbuster Movies'} category={'top_rated'} />
        <TitleCard title={'Only on Netflix '} category={'popular'} />
        <TitleCard title={'Upcoming'} category={'upcoming'} />
        <TitleCard title={'Top Pics for You '} category={'now_playing'} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
