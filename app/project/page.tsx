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

                    {/* Render Thumbnail Based on Type */}
                    {project.type === "image" && (
                        <img
                            src={project.images?.[0]?.src}
                            alt={`${project.title} Thumbnail`}
                            className="thumbnail"
                        />
                    )}
                    {project.type === "youtube" && (
                        <img
                            src="/projects/images/youtube-thumbnail.png"
                            alt={`${project.title} YouTube Thumbnail`}
                            className="thumbnail"
                        />
                    )}
                    {project.type === "video" && (
                        <img
                            src="/projects/images/video-thumbnail.png"
                            alt={`${project.title} Video Thumbnail`}
                            className="thumbnail"
                        />
                    )}

                    {/* Link Button */}
                    <div className="center-button-container">
                        <Link href={`/project/${project.slug}`} passHref>
                            <Button variant="contained" className="center-view-button">
                                View Project Details
                            </Button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectList;
