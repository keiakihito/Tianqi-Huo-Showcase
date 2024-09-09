import path from "path";
import fs from "fs";
import { notFound } from "next/navigation";

const projects = [
    {
        title: "EcoStitch",
        fileName: "3_1_1_Huo_best_UX_casestudy.pdf",
        description: "Description of EcoStitch.",
        slug: "eco-stitch"
    },
    {
        title: "Campaigns One, Two & Three Compilation",
        fileName: "8_2_HuoT.pdf",
        description: "Description of Campaigns One, Two & Three Compilation.",
        slug: "campaigns"
    },
    {
        title: "Movie 2",
        fileName: "AsMod4.2_Tianqi Huo.mp4",
        description: "Description of movie 2.",
        slug: "movie-2"
    },
];

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

const ProjectDetail = ({ params }: { params: { slug: string } }) => {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound(); // Show 404 if project is not found
    }

    const filePath = `/projects/pdf/${project.fileName}`;

    return (
        <div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>

            {/* Display the embedded PDF */}
            {project.fileName.endsWith(".pdf") && (
                <embed src={filePath} type="application/pdf" width="100%" height="600px" />
            )}

            {/* If there is a video */}
            {project.fileName.endsWith(".mp4") && (
                <video width="100%" height="600" controls>
                    <source src={`/projects/video/${project.fileName}`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
        </div>
    );
};

export default ProjectDetail;
