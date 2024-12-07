import Button from "@mui/material/Button";
import Link from "next/link";
import { projects } from "./projectsData";

const ProjectList = () => {
    return (
        <div className="main-content">
            <h1>Projects</h1>
            <p>A collection of previous projects</p>
            {projects.map((project, index) => (
                <div key={index} className="project-card">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>

                    {/* Render Thumbnail Based on First Media Item */}
                    {project.media?.[0]?.type === "image" && (
                        <div
                            style={{
                                maxWidth: "90%",
                                height: "auto",
                                overflow: "hidden",
                                margin: "0 auto 20px",
                                borderRadius: "10px",
                                backgroundColor: "#f0f0f0",
                            }}
                        >
                            <img
                                src={project.media[0].src}
                                alt={`${project.title} Thumbnail`}
                                style={{
                                    maxWidth: "90%",
                                    height: "auto",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                    )}
                    {project.media?.[0]?.type === "video" && (
                        <div
                            style={{
                                maxWidth: "90%",
                                height: "auto",
                                overflow: "hidden",
                                margin: "0 auto 20px",
                                borderRadius: "10px",
                                backgroundColor: "#f0f0f0",
                            }}
                        >
                            <video
                                autoPlay
                                loop
                                muted
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            >
                                <source src={project.media[0].src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    )}

                    {/* Link Button */}
                    <div className="center-button-container">
                        <Link href={`/project/${project.slug}`} passHref>
                            <Button variant="contained" className="center-view-button">
                                Project Details
                            </Button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectList;
