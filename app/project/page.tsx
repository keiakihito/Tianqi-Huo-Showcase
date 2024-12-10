import Button from "@mui/material/Button";
import Link from "next/link";
import { projects } from "./projectsData";

const ProjectList = () => {
    return (
        <div className="main-content">
            <h1>Projects</h1>
            {projects.map((project, index) => (
                <div key={index} className="project-card">
                    <h2
                        style={{
                            color:
                                project.title === "Project 1: EcoStitch"
                                    ? "#AE5532"
                                    : project.title === "Project 2: TasKit"
                                        ? "#8250A7"
                                        : project.title === "Project 3: The Ivy"
                                            ? "#446038"
                                            : project.title === "Project 4: Piggy Bank"
                                                ? "#D6B24E"
                                                : project.title === "Project 5: Brand Identity"
                                                    ? "#B46B3E"
                                                    : "black", // Default color
                        }}
                    >
                        {project.title}
                    </h2>
                    <p>{project.description}</p>


                    {/* Make the cover image clickable */}
                    {project.cover.type === "image" && (
                        <Link href={`/project/${project.slug}`}>
                            <img
                                src={project.cover.src}
                                alt={`${project.title} Cover`}
                                style={{
                                    width: "60%",
                                    height: "auto",
                                    borderRadius: "10px",
                                    margin: "20px 0",
                                    cursor: "pointer", // Add pointer cursor for better UX
                                }}
                            />
                        </Link>
                    )}

                    {/*/!* Link Button *!/*/}
                    {/*<div className="center-button-container">*/}
                    {/*    <Link href={`/project/${project.slug}`} passHref>*/}
                    {/*        <Button variant="contained" className="center-view-button">*/}
                    {/*            Project Details*/}
                    {/*        </Button>*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                </div>
            ))}
        </div>
    );
};

export default ProjectList;
