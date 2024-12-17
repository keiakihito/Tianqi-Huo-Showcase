import Button from "@mui/material/Button";
import Link from "next/link";
import { projects } from "./projectsData";

// Define shared styles for covers
const SMALL_COVERS = [
    "/images/project2/cover.jpg",
    "/images/project5/cover.jpg"
];

const MEDIUM_COVERS = [
    "/images/project1/cover.jpg",
    "/images/project3/cover.jpg",
    "/images/project4/cover.jpg",
];

// Centralized styling for consistency
const containerStyle = {
    display: "flex",
    flexDirection: "column" as const, // Type assertion for flexDirection
    alignItems: "center",
    padding: "20px",
    borderRadius: "10px",
    // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Adds subtle shadow
    margin: "20px auto",
    width: "100%",
    maxWidth: "800px", // Restrict max width
    // backgroundColor: "#f9f9f9",
};

const imageStyle = (src: string): React.CSSProperties => ({
    width: SMALL_COVERS.includes(src) ? "50%" : MEDIUM_COVERS.includes(src) ? "60%" : "100%",
    height: "auto",
    objectFit: "contain", // This is now explicitly valid
    borderRadius: "10px",
    marginBottom: "20px",
});

// Map colors dynamically
const colorMap: { [key: string]: string } = {
    "Project 1: EcoStitch": "#AE5532",
    "Project 2: TasKit": "#8250A7",
    "Project 3: The Ivy": "#446038",
    "Project 4: Piggy Bank": "#D6B24E",
    "Project 5: Brand Identity": "#B46B3E",
};

const ProjectList = () => {
    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1 style={{ marginBottom: "30px" }}>Projects</h1>
            {projects.map((project, index) => (
                <div key={index} style={containerStyle}>
                    {/* Project Title */}
                    <h2
                        style={{
                            color: colorMap[project.title] || "black",
                            fontSize: "28px",
                            marginBottom: "10px",
                        }}
                    >
                        {project.title}
                    </h2>

                    {/* Project Description */}
                    <p
                        style={{
                            fontSize: "16px",
                            color: "#555",
                            marginBottom: "20px",
                            textAlign: "center",
                        }}
                    >
                        {project.description}
                    </p>

                    {/* Clickable Cover Image */}
                    {project.cover.type === "image" && (
                        <Link href={`/project/${project.slug}`} passHref>
                            <img
                                src={project.cover.src}
                                alt={`${project.title} Cover`}
                                style={imageStyle(project.cover.src)}
                            />
                        </Link>
                    )}

                    {/* Link Button */}
                    <div style={{ marginTop: "10px" }}>
                        <Link href={`/project/${project.slug}`} passHref>
                            <Button
                                variant="contained"
                                style={{
                                    backgroundColor: colorMap[project.title] || "#007bff",
                                    color: "white",
                                }}
                            >
                                View Project
                            </Button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectList;
