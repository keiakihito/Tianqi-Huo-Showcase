import Link from "next/link";

export const metadata = {
    title: "Projects",
    description: "List of previous projects in PDF and video format",
}

const projects = [
    {
        title: "EcoStitch",
        fileName: "3_1_1_Huo_best_UX_casestudy.pdf",
        description: "Description of EcoStitch.",
        type: "pdf"
    },
    {
        title: "Campaigns One, Two & Three Compilation",
        fileName: "8_2_HuoT.pdf",
        description: "Description of Campaigns One, Two & Three Compilation.",
        type: "pdf"
    },
    // {
    //     title: "The Ivy Restaurant",
    //     fileName: "9_1_Tianqi Huo.pdf",
    //     description: "Description of The Ivy Restaurant.",
    //     type: "pdf"
    // },
    // {
    //     title: "Movie 1",
    //     fileName: "6_1_Tianqi_Huo.mov",
    //     description: "Description of movie 1.",
    //     type: "mov"
    // },
    {
        title: "Movie 2",
        fileName: "AsMod4.2_Tianqi Huo.mp4",
        description: "Description of movie 2.",
        type: "mp4"
    },
];

const Project = () => {
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <div>
                    <h1>Projects</h1>
                    <p>A collection of previous projects in PDF and video format</p>
                    {projects.map((project, index) => (
                        <div key={index} style={{ marginBottom: "50px" }}>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>

                            {/* Conditionally Render PDF */}
                            {project.type === "pdf" && (
                                <embed
                                    src={`/projects/pdf/${project.fileName}`}
                                    type="application/pdf"
                                    width="100%"
                                    height="600px"
                                />
                            )}

                            {/* Conditionally Render Video */}
                            {project.type === "mp4" && (
                                <div style={{ margin: "0 auto", width: "75%", maxWidth: "800px" }}>
                                    <video width="100%" controls>
                                        <source src={`/projects/video/${project.fileName}`} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            )}

                            {/*{project.type === "mov" && (*/}
                            {/*    <div style={{ margin: "0 auto", width: "75%", maxWidth: "800px" }}>*/}
                            {/*        <video width="100%" controls>*/}
                            {/*            <source src={`/projects/video/${project.fileName}`} type="video/quicktime" />*/}
                            {/*            Your browser does not support the video tag.*/}
                            {/*        </video>*/}
                            {/*    </div>*/}
                            {/*)}*/}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Project;
