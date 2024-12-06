import Button from "@mui/material/Button";
import Link from "next/link";
import { projects, Project } from "./projectsData";

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
                        <img
                            src={project.media[0].src}
                            alt={`${project.title} Thumbnail`}
                            className="thumbnail"
                            style={{
                                maxWidth: "90%", // Set the thumbnail size
                                height: "auto",
                                borderRadius: "10px",
                                marginBottom: "20px",
                            }}
                        />
                    )}
                    {project.media?.[0]?.type === "video" && (
                        <video
                            className="thumbnail"
                            autoPlay
                            loop
                            muted
                            style={{
                                maxWidth: "90%", // Set the thumbnail size
                                height: "auto",
                                borderRadius: "10px",
                                marginBottom: "20px",
                            }}
                        >
                            <source src={project.media[0].src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
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
