import Button from "@mui/material/Button";
import Link from "next/link";
import { projects } from "./projectsData";

const ProjectList = () => {
    return (
        <div className="main-content">
            <h1>Projects</h1>
            {projects.map((project, index) => (
                <div key={index} className="project-card">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>

                    {/* Render the cover */}
                    {project.cover.type === "image" && (
                        <img
                            src={project.cover.src}
                            alt={`${project.title} Cover`}
                            style={{
                                width: "60%",
                                height: "auto",
                                borderRadius: "10px",
                                margin: "20px 0",
                            }}
                        />
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
