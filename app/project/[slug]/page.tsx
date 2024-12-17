import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "../projectsData";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import {textAlign} from "@mui/system";

const SMALL_IMAGES = [
    "/images/project1/Project1 Web_Page_11a.jpg",
    "/images/project1/Project1 Web_Page_11b.jpg",
    "/images/project1/Project1 Web_Page_11c.jpg",
    "/images/project1/Project1 Web_Page_11d.jpg",
    "/images/project3/Project3 Web_Page_01.jpg", //P3 pg1
    "/images/project3/Project3 Web_Page_02.jpg", //P3 pg2
    "/images/project3/Project3 Web_Page_03.jpg", //P3 pg3
    "/images/project3/Project3 Web_Page_03_5.jpg", //P3 pg4
    "/images/project3/Project3 Web_Page_04.jpg" // P3 pg5

];

const MEDIUM_COVERS = [
    "/images/project1/Project1 Web_Page_16.jpg",
    "/images/project1/Project1 Web_Page_17.jpg",
    "/images/project1/Project1 Web_Page_18.jpg",
]

const colorMap: { [key: string]: string } = {
    "Project 1: EcoStitch": "#AE5532",
    "Project 2: TasKit": "#8250A7",
    "Project 3: The Ivy": "#446038",
    "Project 4: Piggy Bank": "#D6B24E",
    "Project 5: Brand Identity": "#B46B3E",
};


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

    // // Debugging logs
    // console.log("Project data:", project);
    // console.log("Video file name:", project.fileName);

    const prevProject = projects[projectIndex - 1] || projects[projects.length - 1];
    const nextProject = projects[projectIndex + 1] || projects[0];

    // project.media?.forEach((item) => console.log("Item:", item));


    return (
        <div
            // style={{textAlign: "center"}}
        >

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center", // Centers the container horizontally
                    margin: "0 auto",
                    width: "100%",
                    padding: "0 10px", // Small padding for narrow screens
                    boxSizing: "border-box",
                }}
            >
                {/* Title */}
                <h1
                    style={{
                        fontSize: "45px",
                        textAlign: "center", // Center the title
                        marginBottom: "20px",
                    }}
                >
                    {project.title}
                </h1>

                {/* Description */}
                <p
                    style={{
                        textAlign: "center", // Center the project description
                        fontSize: "18px",
                        color: "#555",
                        maxWidth: "800px", // Restrict the description width
                    }}
                >
                    {project.description}
                </p>

                {/* Media Gallery */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", // Center the media gallery container
                        textAlign: "left", // Left-align the content inside
                        maxWidth: "800px",
                        margin: "0 auto",
                    }}
                >
                    {project.media?.map((item, index) => (
                        <div key={index} style={{width: "100%", marginBottom: "40px"}}>
                            {/* Header */}
                            {item.header && (
                                <h2
                                    style={{
                                        fontSize: "30px",
                                        fontWeight: "bold",
                                        color: colorMap[project.title] || "#4A4A4A",
                                        marginBottom: "15px",
                                    }}
                                >
                                    {item.header}
                                </h2>
                            )}

                            {/* Highlight Section */}
                            {/*{console.log("Highlight:", item.highlight)}*/}
                            {item.highlight !== null &&  (
                                <p
                                    style={{
                                        fontSize: "20px", // Larger font for emphasis
                                        fontWeight: "bold",
                                        color: "#4A4A4A", // Custom color for highlights
                                        marginBottom: "10px",
                                        textAlign: "left", // Align with other elements
                                    }}
                                >
                                    {item.highlight}
                                </p>
                            )}



                            {/* Image or Video */}
                            {item.type === "image" && item.src ? (
                                <img
                                    src={item.src}
                                    style={{
                                        width: item.src && SMALL_IMAGES.includes(item.src)
                                            ? "40%" // Smaller size for specific images
                                            : MEDIUM_COVERS.includes(item.src ?? "")
                                                ? "80%" // Medium size for specific images
                                                : "100%", // Default size
                                        maxWidth: item.src && SMALL_IMAGES.includes(item.src)
                                            ? "350px" // Smaller max width for specific images
                                            : MEDIUM_COVERS.includes(item.src ?? "")
                                                ? "650px" // Medium max width for specific images
                                                : "800px", // Default max width
                                        height: "auto",
                                        display: "block", // Ensures the image behaves as a block element
                                        margin: "0 auto", // Center the image horizontally
                                        borderRadius: "10px",
                                    }}
                                    alt="Project Media"
                                />
                            ) : item.type === "video" ? (
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    style={{
                                        width: "50%",
                                        display: "block", // Ensures the image behaves as a block element
                                        margin: "0 auto", // Center the image horizontally
                                        borderRadius: "10px",
                                        marginBottom: "20px",
                                    }}
                                >
                                    <source src={item.src} type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                            ) : null}



                            {/* Description */}
                            {item.description && (
                                <p
                                    style={{
                                        fontSize: "18px",
                                        lineHeight: "1.6",
                                        color: "#555",
                                        marginBottom: "20px",
                                    }}
                                >
                                    {item.description}
                                </p>
                            )}

                            {/* List */}
                            {item.list && (
                                <ul
                                    style={{
                                        paddingLeft: "20px",
                                        lineHeight: "1.8",
                                        color: "#555",
                                    }}
                                >
                                    {item.list.map((listItem, i) => (
                                        <li key={i} style={{marginBottom: "10px"}}>
                                            {listItem}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>


            {/* Navigation Arrows */}
            <div className="button-container">
                <Link href={`/project/${prevProject.slug}`} passHref>
                    <button className="view-button">⬅️ Previous</button>
                </Link>
                <Link href={`/project/${nextProject.slug}`} passHref>
                    <button className="view-button">Next ➡️</button>
                </Link>
            </div>
        </div>
    );
};

export default ProjectDetail;
