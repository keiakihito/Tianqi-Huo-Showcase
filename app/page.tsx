import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import heroPic from "../public/images/index-Tianqi.jpg"
import profilePic from "../public/images/profile.jpg"


export const metadata = {
    title: "Tianqi Huo",
    description: "Tianqi Huo's portfolio page",
}


const Index = () => {
  return(
      <>
          <div className="hero">
              <Image src={heroPic} alt="hero" />
              <div className="textContainer">
                  <h1>Tianqi Huo</h1>
                  <h3>UI / UX Designer</h3>
              </div>
          </div>
          <div className="container">
              <div className="profile">
                  <div>
                      <h2>UI / UX Designer</h2>
                      <p>Crafting exceptional quality through meticulous detail, I elevate product design to deliver unparalleled value and aesthetics. As a skilled professional residing in Los Angeles, I am currently seeking a product design related job, equipped with a strong foundation in user-centered design methods, wireframing, prototyping, and usability testing.</p>
                  </div>
                  <div>
                      <Image src={profilePic} alt="hero" />
                  </div>
              </div>
              <div className="skills">
                  <h2>Skills</h2>
                  <div className="skillsContainer">
                      {/*<div><img src="/images/javascript.svg" alt="javascript"/><span>JavaScript / 10 years</span></div>*/}
                      {/*<div><img src="/images/react.svg"alt="react"/><span>React / 5 years</span></div>*/}
                      {/*<div><img src="/images/gatsby.svg" alt="gatsby"/><span>Gatsby / 3 years</span></div>*/}
                      {/*<div><img src="/images/next.svg" alt="next"/><span>Next.JS / 3 years</span></div>*/}
                  </div>
              </div>
              <div className="ctaButton">
                  <Link href="/contact">Make It Happen!</Link>
              </div>
          </div>
      </>
  )
}

export default Index;