import Button from "@mui/material/Button";
import Link from "next/link";
import { projects } from "./projectsData";


const MEDIUM_COVERS = [
    "/images/project1/cover.jpg",
    "/images/project3/cover.jpg",
    "/images/project4/cover.jpg",
];

const SMALL_COVERS = [
    "/images/project5/cover.jpg",
];


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
                                    width: project.cover.src && SMALL_COVERS.includes(project.cover.src)
                                        ? "50%" // Smaller size for specific covers
                                        : MEDIUM_COVERS.includes(project.cover.src ?? "") // Fallback to an empty string if undefined
                                            ? "60%" // Medium size for specific covers
                                            : "100%", // Default size
                                    height: "auto",
                                    objectFit: "contain", // Avoid cropping
                                    borderRadius: "10px",
                                    marginBottom: "20px",
                                }}
                            />
                        </Link>
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
