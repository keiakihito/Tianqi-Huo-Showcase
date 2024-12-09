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
          <div className="profile">
              <div className="profile">
                  <div>
                      <Image className="profileImage" src={profilePic} alt="hero"/>
                  </div>
                  <div className="profileText">
                      <h2 className = "helloText">Hello, </h2>
                      <p>I am Tianqi Huo, residing in Los Angeles. I am a life lover, food lover, and fashion lover. I
                          enjoy the little things in life and am good at discovering small joys and happiness around me.<br/>
                          <br/>After earning a bachelor’s degree in Fashion Design from the Academy of Art University, I have
                          worked as a fashion designer for the past few years. Driven by my passion for product design,
                          I am now pursuing a master’s degree in UI/UX design and will graduate this December.<br/>
                          <br/>My current aspiration is to transition into the dynamic field of product design, leveraging my
                          creativity and technical expertise to deliver impactful solutions.
                      </p>
                  </div>
              </div>
              <div className="ctaButton">
                  <Link href="/contact">Reach Me Out!</Link>
              </div>
          </div>
      </>
  )
}

export default Index;
