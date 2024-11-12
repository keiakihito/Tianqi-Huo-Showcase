import path from "path";
import fs from "fs";
import { notFound } from "next/navigation";
import { projects, Project } from "../projectsData";

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

const ProjectDetail = ({ params }: { params: { slug: string } }) => {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>{project.title}</h1>
            <p>{project.description}</p>

            {/* Display Project Images */}
            {project.images?.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`${project.title} Image ${index + 1}`}
                    style={{ width: "100%", maxWidth: "800px", height: "auto", marginBottom: "20px" }}
                />
            ))}
        </div>
    );
};

export default ProjectDetail;
