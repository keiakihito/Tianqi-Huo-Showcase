export const metadata = {
    title: "About",
    description: "This is the about page",
}

const About = () => {
    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <h1>About Me</h1>
                    <p>Below is my resume:</p>
                    {/* Embedding the PDF using embed */}
                    <embed
                        src="/Resume_for_Website.pdf"
                        type="application/pdf"
                        width="100%"
                        height="800px"
                    />
                </div>
            </div>
        </>
    )
}

export default About;
