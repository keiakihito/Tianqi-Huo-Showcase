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
        type: "pdf",
        slug: "eco-stitch"
    },
    {
        title: "Campaigns One, Two & Three Compilation",
        fileName: "8_2_HuoT.pdf",
        description: "Description of Campaigns One, Two & Three Compilation.",
        type: "pdf",
        slug: "campaigns"
    },
    // {
    //     title: "The Ivy Restaurant",
    //     fileName: "9_1_Tianqi Huo.pdf",
    //     description: "Description of The Ivy Restaurant.",
    //     type: "pdf"
    // },
    {
        title: "Movie 1",
        fileName: "6_1_Tianqi_Huo.mov",
        youtubeLink: "https://www.youtube.com/watch?v=AoiK6pU1umk",
        description: "Description of movie 1.",
        type: "youtube",
        slug: "movie-1"
    },
    {
        title: "Movie 2",
        fileName: "AsMod4.2_Tianqi Huo.mp4",
        description: "Description of movie 2.",
        type: "mp4",
        slug: "movie-2"
    },
];


const ProjectList = () => {
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

                            {/* Conditionally Render MP4 Video */}
                            {project.type === "mp4" && (
                                <div style={{ margin: "0 auto", width: "75%", maxWidth: "800px" }}>
                                    <video width="100%" controls>
                                        <source src={`/projects/video/${project.fileName}`} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            )}


                            {project.type === "youtube" && (
                                <div style={{ margin: "0 auto", width: "75%", maxWidth: "800px" }}>
                                    <a href={project.youtubeLink} target="_blank" rel="noopener noreferrer">
                                        Watch Video on YouTube
                                    </a>
                                </div>
                            )}

                            <Link href={`/project/${project.slug}`}>
                                View Project Details
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProjectList;
