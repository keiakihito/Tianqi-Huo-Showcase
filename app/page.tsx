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
              <Image src={heroPic}
                     alt="hero"
                     style={{
                         width: "100%",
                         height: "auto",
                         objectFit: "cover"
              }}/>
              <div className="textContainer">
                  <h1>Tianqi Huo</h1>
                  <h3>UI / UX Designer</h3>
              </div>
          </div>
          <div className="profile"
               style={{
                   display: "flex",
                   flexDirection: "column",
                   alignItems: "center", // Center the media gallery container
                   textAlign: "left", // Left-align the content inside
                   maxWidth: "800px",
                   margin: "0 auto",
               }}>
                  <div>
                      <Image className="profileImage"
                             src={profilePic}
                             alt="hero"
                             style={{
                                 width: "100%",
                                 maxWidth: "800px",
                                 height: "auto",
                                 // borderRadius: "50%", // Circular profile image
                                 margin: "0 auto", // Center the image horizontally
                                 objectFit: "cover",
                             }}/>
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
              <div className="ctaButton">
                  <Link href="/contact">Reach Me Out!</Link>
              </div>
          </div>
      </>
  )
}

export default Index;
