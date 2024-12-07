export const metadata = {
    title: "About",
    description: "This is the about page",
}

const About = () => {
    return (
        <>
            <div className="wrapper">
                <div className="container" style={{ textAlign: "center" }}>
                    <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Resume</h1>
                    {/* Displaying the JPG version of the resume */}
                    <img
                        src="/images/Resume_for_Website.jpg"
                        alt="Resume"
                        width="100%"
                        style={{ maxWidth: "800px", margin: "0 auto", display: "block" }}
                    />
                    {/* Button to download the PDF version */}
                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                        <a
                            href="/Resume_for_Website.pdf"
                            download
                            style={{
                                padding: "10px 20px",
                                backgroundColor: "#A54f25",
                                color: "#FFF",
                                textDecoration: "none",
                                borderRadius: "5px",
                            }}
                        >
                            Download PDF
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
