import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "../projectsData";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const SMALL_IMAGES = [
    "/images/project1/Project1 Web_Page_16.jpg",
    "/images/project1/Project1 Web_Page_17.jpg",
    "/images/project1/Project1 Web_Page_18.jpg",
];


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
            <p>{project.description}</p>

            {/* Display Images with Headers, Descriptions, and Lists */}
            <div className="media-gallery">
                {project.media?.map((item, index) => (
                    <div key={index} style={{marginBottom: "40px"}}>
                        {/* Header */}
                        {item.header && (
                            <h2
                                style={{
                                    fontSize: "24px",
                                    fontWeight: "bold",
                                    color: "#A54f25",
                                    marginBottom: "10px",
                                    marginTop: "100px", // Add this line for space above the header
                                }}
                            >
                                {item.header}
                            </h2>
                        )}

                        {/* Description */}
                        {item.description && (
                            <div
                                style={{
                                    textAlign: "center",
                                    margin: "20px auto",
                                    padding: "10px 20px",
                                    maxWidth: "800px", // Limit width for better readability
                                }}
                            >
                                <p
                                    style={{
                                        fontSize: "25px", // Slightly larger font
                                        lineHeight: "1.6", // Improve readability with better line spacing
                                        color: "#4A4A4A", // A slightly muted color for text
                                        fontWeight: "400", // Regular font weight for body text
                                        // marginBottom: "20px",
                                    }}
                                >
                                    {item.description}
                                </p>
                                {/* Additional Highlighted Text */}
                                {item.highlight && (
                                    <p
                                        style={{
                                            fontSize: "25px", // Larger font for emphasis
                                            fontWeight: "bold", // Bold for emphasis
                                            color: "#A54f25", // Match the theme color
                                            // marginBottom: "15px",
                                        }}
                                    >
                                        {item.highlight}
                                    </p>
                                )}
                            </div>
                        )}

                        {/* List */}
                        {item.list && (
                            <ul
                                style={{
                                    paddingLeft: "5%",
                                    textAlign: "center",
                                    marginBottom: "10px",
                                    color: "#555",
                                }}
                            >
                                {item.list.map((listItem, i) => (
                                    <li key={i} style={{marginBottom: "5px"}}>
                                        {listItem}
                                    </li>
                                ))}
                            </ul>
                        )}

                        {/* Render Image or Video */}
                        {item.type === "image" && item.src? (
                            <img
                                src={item.src}
                                // alt={"" || `Media ${index + 1}`}
                                style={{
                                    maxWidth: SMALL_IMAGES.includes(item.src)
                                        ? "70%" // Smaller size for specific images
                                        : "85%", // Default size for other images
                                    height: "auto",
                                    objectFit: "contain", // Avoid cropping
                                    borderRadius: "10px",
                                    // marginTop: "5px",
                                }}
                            />
                        ) : item.type === "video" ? (
                            <video
                                autoPlay
                                loop
                                muted
                                style={{
                                    maxWidth: "35%",
                                    // width: "auto",
                                    maxHeight: "auto",
                                    objectFit: "contain", // Avoid cropping
                                    borderRadius: "10px",
                                    marginTop: "20px",
                                }}
                            >
                                <source src={item.src} type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        ) : null}
                    </div>
                ))}
            </div>


            {/* Navigation Arrows */}
            <div className="button-container">
                <Link href={`/project/${prevProject.slug}`} passHref>
                    <button className="view-button">⬅️ Previous </button>
                </Link>
                <Link href={`/project/${nextProject.slug}`} passHref>
                    <button className="view-button">Next  ➡️</button>
                </Link>
            </div>
        </div>
    );
};

export default ProjectDetail;
