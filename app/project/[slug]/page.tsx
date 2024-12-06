import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "../projectsData";

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

const ProjectDetail = ({ params }: { params: { slug: string } }) => {
    const projectIndex = projects.findIndex((p) => p.slug === params.slug);
    if (projectIndex === -1) {
        notFound();
    }

    const project = projects[projectIndex];

    // // Debugging logs
    // console.log("Project data:", project);
    // console.log("Video file name:", project.fileName);

    const prevProject = projects[projectIndex - 1] || projects[projects.length - 1];
    const nextProject = projects[projectIndex + 1] || projects[0];

    return (
        <div style={{textAlign: "center"}}>
            <h1>{project.title}</h1>
            {/*<p>{project.description}</p>*/}

            {/* Display Images with Headers, Descriptions, and Lists */}
            <div className="image-gallery">
                {project.images?.map((item, index) => (
                    <div key={index} style={{ marginBottom: "40px" }}>
                        {/* Header */}
                        {item.header && (
                            <h2
                                style={{
                                    fontSize: "24px",
                                    fontWeight: "bold",
                                    color: "#0073e6",
                                    marginBottom: "10px",
                                }}
                            >
                                {item.header}
                            </h2>
                        )}

                        {/* Description */}
                        {item.description && (
                            <p
                                style={{
                                    fontSize: "16px",
                                    color: "#333",
                                    marginBottom: "10px",
                                }}
                            >
                                {item.description}
                            </p>
                        )}

                        {/* List */}
                        {item.list && (
                            <ul
                                style={{
                                    paddingLeft: "20px",
                                    textAlign: "left", // Align list to the left
                                    marginBottom: "10px",
                                    color: "#555",
                                }}
                            >
                                {item.list.map((listItem, i) => (
                                    <li key={i} style={{ marginBottom: "5px" }}>
                                        {listItem}
                                    </li>
                                ))}
                            </ul>
                        )}

                        {/* Image */}
                        <img
                            src={item.src}
                            alt={item.header || `Image ${index + 1}`}
                            style={{
                                width: "800px", // Adjust width as needed
                                maxWidth: "90%", // Ensure responsiveness
                                height: "auto",
                                borderRadius: "10px",
                                marginTop: "20px",
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Video Section */}
            {project.type === "video" && project.fileName && (
                <div>
                    <video
                        autoPlay
                        loop
                        muted
                        style={{
                            maxWidth: "90%", // Match the maxWidth of the images
                            width: "100%",
                            height: "auto",
                            // marginTop: "5px",
                            borderRadius: "10px", // Optional: Add rounded corners to match image styling
                        }}
                    >
                        <source src={project.fileName} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}

            {/* Navigation Arrows */}
            <div className="button-container">
                <Link href={`/project/${prevProject.slug}`} passHref>
                    <button className="view-button">⬅️ Previous Project</button>
                </Link>
                <Link href={`/project/${nextProject.slug}`} passHref>
                    <button className="view-button">Next Project ➡️</button>
                </Link>
            </div>
        </div>
    );
};

export default ProjectDetail;
