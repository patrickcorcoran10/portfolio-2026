import style from "./style.module.css";
import Profile from "../../assets/img/corcoran-waterbackground.png";
//import wave from '../../assets/img/wave5.svg';
import { about }from '../../data/aboutData'

const About = () => {
  return (
    <div id="about" className={style.aboutContainer}>
      <div className={style.sectionAboutContainer}>
        <div className={style.aboutHeadingContainer}>
          <div className={style.aboutSmallHeadingContainer}>
            <h3 className={style.smallAboutHeading}>About</h3>
            <hr className={style.smallAboutHeadingLine} />
          </div>
          <h4 className={style.bigAboutHeading}>Who Is Pat?</h4>
        </div>
        <div className={style.aboutInformationContainer}>
          <div className={style.aboutInformation}>
            <p>
              {about.paragraphOne}
            </p>
            <p>
              {about.paragraphTwo}
            </p>
            <p>Technologies that I have have recently been working with:</p>
            <div className={style.technologyContainer}>
              <ul className={style.technologyList}>
                <li>JavaScript (ES6)</li>
                <li>React</li>
                <li>Node.JS</li>
                <li>MySQL</li>
                <li>MongoDB</li>
              </ul>
              <ul className={style.technologyList}>
                <li>Express</li>
                <li>Sequelize</li>
                <li>JQuery</li>
                <li>CSS3</li>
                <li>HTML5</li>
              </ul>
              <ul className={style.technologyList}>
                <li>Git</li>
                <li>Wordpress</li>
                <li>Bootstrap 5</li>
                <li>Materialize</li>
                <li>Heroku</li>
              </ul>
              <ul className={style.technologyList}>
                <li>Next.js</li>
                <li>Tailwind</li>
                <li>Typescript</li>
                <li>Jest</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
          <div className={style.aboutImageContainer}>
            <img src={Profile} alt="pat"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
