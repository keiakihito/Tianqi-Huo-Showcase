import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "../projectsData";

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

const ProjectDetail = ({ params }: { params: { slug: string } }) => {
    const projectIndex = projects.findIndex((p) => p.slug === params.slug);
    if (projectIndex === -1) {
        notFound();
    }

    const project = projects[projectIndex];
    const prevProject = projects[projectIndex - 1] || projects[projects.length - 1];
    const nextProject = projects[projectIndex + 1] || projects[0];

    return (
        <div style={{textAlign: "center"}}>
            <h1>{project.title}</h1>
            <p>{project.description}</p>

            {/* Display Images with Descriptions */}
            <div className="image-gallery">
                {project.images?.map((item, index) => (
                    <div key={index} style={{marginBottom: "20px"}}>
                        <img
                            src={item.src}
                            alt={`Image ${index + 1} of ${project.title}`}
                            style={{width: "100%", maxWidth: "600px", height: "auto", borderRadius: "10px"}}
                        />
                        <p style={{marginTop: "10px", fontStyle: "italic"}}>{item.description}</p>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <div className="button-container">
                <Link href={`/project/${prevProject.slug}`} passHref>
                    <button className="view-button">⬅️ Previous Project</button>
                </Link>
                <Link href={`/project/${nextProject.slug}`} passHref>
                    <button className="view-button">Next Project ➡️</button>
                </Link>
            </div>
        </div>
    );
};

export default ProjectDetail;
