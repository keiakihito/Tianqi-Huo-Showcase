import Button from "@mui/material/Button";
import Link from "next/link";
import { projects, Project } from "./projectsData";

const ProjectList = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Projects</h1>
            <p>A collection of previous projects</p>
            {projects.map((project, index) => (
                <div key={index} style={{ marginBottom: "50px" }}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>

                    {/* Render Thumbnail Based on Type */}
                    {project.type === "image" && (
                        <img
                            src={project.images?.[0]}
                            alt={`${project.title} Thumbnail`}
                            style={{ width: "100%", maxWidth: "600px", height: "auto" }}
                        />
                    )}
                    {project.type === "youtube" && (
                        <img
                            src="/projects/images/youtube-thumbnail.png"
                            alt={`${project.title} YouTube Thumbnail`}
                            style={{ width: "100%", maxWidth: "600px", height: "auto" }}
                        />
                    )}
                    {project.type === "video" && (
                        <img
                            src="/projects/images/video-thumbnail.png"
                            alt={`${project.title} Video Thumbnail`}
                            style={{ width: "100%", maxWidth: "600px", height: "auto" }}
                        />
                    )}
                    <div style={{ textAlign: "center", marginBottom: "20px" }}>
                    <Link href={`/project/${project.slug}`} passHref>
                        <Button
                            variant="contained"
                            style={{
                                backgroundColor: "#A8DADC", // Soft pastel blue color
                                color: "#1D3557",           // Darker text color for contrast
                                borderRadius: "10px",
                                padding: "8px 16px",
                                minWidth: "150px",
                                maxWidth: "200px",
                                fontSize: "14px",
                                fontWeight: "bold",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                textTransform: "none",     // Prevents uppercase text
                            }}
                        >
                            View Project Details
                        </Button>
                    </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

// This is important: Ensure the component is exported as default
export default ProjectList;
