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
                                    paddingLeft: "20%",
                                    textAlign: "left",
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
                        {item.type === "image" ? (
                            <img
                                src={item.src}
                                alt={item.header || `Media ${index + 1}`}
                                style={{
                                    maxWidth: "100%",
                                    height: "auto",
                                    objectFit: "contain", // Avoid cropping
                                    borderRadius: "10px",
                                    marginTop: "20px",
                                }}
                            />
                        ) : item.type === "video" ? (
                            <video
                                autoPlay
                                loop
                                muted
                                style={{
                                    maxWidth: "80%",
                                    width: "auto",
                                    height: "auto",
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
