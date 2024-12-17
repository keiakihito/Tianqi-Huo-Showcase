import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "../projectsData";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import {textAlign} from "@mui/system";

const SMALL_IMAGES = [
    "/images/project1/Project1 Web_Page_16.jpg",
    "/images/project1/Project1 Web_Page_17.jpg",
    "/images/project1/Project1 Web_Page_18.jpg",
    "/images/project3/Project3 Web_Page_01.jpg", //P3 pg1
    "/images/project3/Project3 Web_Page_02.jpg", //P3 pg2
    "/images/project3/Project3 Web_Page_03.jpg", //P3 pg3
    "/images/project3/Project3 Web_Page_03_5.jpg", //P3 pg4
    "/images/project3/Project3 Web_Page_04.jpg" // P3 pg5

];

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

    return (
        <div
            // style={{textAlign: "center"}}
        >

            <div
                style={{
                    textAlign: "center"
                }}>
                <h1
                    style={{
                        fontSize: "45px",
                    }}
                >{project.title}</h1>
                <p>{project.description}</p>
            </div>

            {/*#####*/}
            {/*/!* Display Images with Headers, Descriptions, and Lists *!/*/}
            {/*<div className="media-gallery"*/}
            {/*     style={{*/}
            {/*         textAlign: "left"*/}
            {/*     }}*/}
            {/*>*/}
            {/*    {project.media?.map((item, index) => (*/}
            {/*        <div*/}
            {/*            key={index}*/}
            {/*            // style={{*/}
            {/*            // marginBottom: "40px",*/}
            {/*            // textAlign: "center"*/}
            {/*            // }}*/}
            {/*            style={{*/}
            {/*                display: "flex",*/}
            {/*                flexDirection: "column", // Align items vertically*/}
            {/*                alignItems: "center", // Center align content horizontally*/}
            {/*                margin: "0 auto", // Center the entire block*/}
            {/*                maxWidth: "90%", // Ensure consistent width for both image and text*/}
            {/*                textAlign: "left", // Left-align the text*/}
            {/*            }}*/}
            {/*        >*/}
            {/*            /!* Header *!/*/}
            {/*            {item.header && (*/}
            {/*                <h2*/}
            {/*                    style={{*/}
            {/*                        textAlign: "left",*/}
            {/*                        fontSize: "35px",*/}
            {/*                        fontWeight: "bold",*/}
            {/*                        maxWidth: "800px", // Consistent with the other elements*/}
            {/*                        margin: "0 auto", // Center align horizontally*/}
            {/*                        // color: "#A54f25",*/}
            {/*                        color: colorMap[project.title] || "#4A4A4A", // Default color if no match*/}
            {/*                        marginBottom: "10px",*/}
            {/*                        marginTop: "120px",*/}
            {/*                        // marginTop: "100px", // Add this line for space above the header*/}
            {/*                    }}*/}
            {/*                >*/}
            {/*                    {item.header}*/}
            {/*                </h2>*/}
            {/*            )}*/}

            {/*            /!* Description *!/*/}
            {/*            {item.description && (*/}
            {/*                <div*/}
            {/*                    style={{*/}
            {/*                        textAlign: "left",*/}
            {/*                        margin: "20px auto",*/}
            {/*                        padding: "10px 20px",*/}
            {/*                        maxWidth: "90%", // Limit width for better readability*/}
            {/*                    }}*/}
            {/*                >*/}
            {/*                    /!* Additional Highlighted Text *!/*/}
            {/*                    {item.highlight && (*/}
            {/*                        <p*/}
            {/*                            style={{*/}
            {/*                                fontSize: "20px", // Larger font for emphasis*/}
            {/*                                fontWeight: "bold", // Bold for emphasis*/}
            {/*                                color: "#4A4A4A", // Match the theme color*/}
            {/*                                // marginBottom: "15px",*/}
            {/*                            }}*/}
            {/*                        >*/}
            {/*                            {item.highlight}*/}
            {/*                        </p>*/}
            {/*                    )}*/}
            {/*                </div>*/}
            {/*            )}*/}

            {/*            /!* Render Image or Video *!/*/}
            {/*            {item.type === "image" && item.src? (*/}
            {/*                <img*/}
            {/*                    src={item.src}*/}
            {/*                    // alt={"" || `Media ${index + 1}`}*/}
            {/*                    style={{*/}
            {/*                        maxWidth: SMALL_IMAGES.includes(item.src)*/}
            {/*                            ? "50%" // Smaller size for specific images*/}
            {/*                            : "85%", // Default size for other images*/}
            {/*                        height: "auto",*/}
            {/*                        objectFit: "contain", // Avoid cropping*/}
            {/*                        borderRadius: "10px",*/}
            {/*                        // marginTop: "5px",*/}
            {/*                    }}*/}
            {/*                />*/}
            {/*            ) : item.type === "video" ? (*/}
            {/*                <video*/}
            {/*                    autoPlay*/}
            {/*                    loop*/}
            {/*                    muted*/}
            {/*                    style={{*/}
            {/*                        maxWidth: "35%",*/}
            {/*                        // width: "auto",*/}
            {/*                        maxHeight: "auto",*/}
            {/*                        objectFit: "contain", // Avoid cropping*/}
            {/*                        borderRadius: "10px",*/}
            {/*                        marginTop: "20px",*/}
            {/*                    }}*/}
            {/*                >*/}
            {/*                    <source src={item.src} type="video/mp4"/>*/}
            {/*                    Your browser does not support the video tag.*/}
            {/*                </video>*/}
            {/*            ) : null}*/}


            {/*            /!* Description *!/*/}
            {/*            {item.description && (*/}
            {/*                <div*/}
            {/*                    style={{*/}
            {/*                        textAlign: "left",*/}
            {/*                        // margin: "20px auto",*/}
            {/*                        // padding: "10px 20px",*/}
            {/*                        maxWidth: "90%", // Limit width for better readability*/}
            {/*                    }}*/}
            {/*                >*/}
            {/*                    <p*/}
            {/*                        style={{*/}
            {/*                            fontSize: "20px", // Slightly larger font*/}
            {/*                            lineHeight: "1.6", // Improve readability with better line spacing*/}
            {/*                            color: "#4A4A4A", // A slightly muted color for text*/}
            {/*                            fontWeight: "400", // Regular font weight for body text*/}
            {/*                            // marginBottom: "20px",*/}
            {/*                        }}*/}
            {/*                    >*/}
            {/*                        {item.description}*/}
            {/*                    </p>*/}


            {/*                </div>*/}
            {/*            )}*/}


            {/*            {item.list && (*/}
            {/*                <ul*/}
            {/*                    style={{*/}
            {/*                        margin: "20px auto", // Center align with spacing*/}
            {/*                        // paddingLeft: "20px", // Standard left padding for the list*/}
            {/*                        textAlign: "left",*/}
            {/*                        maxWidth: "90%", // Align with description width*/}
            {/*                        lineHeight: "1.8", // Improve line spacing*/}
            {/*                    }}*/}
            {/*                >*/}
            {/*                    {item.list.map((listItem, i) => (*/}
            {/*                        <li*/}
            {/*                            key={i}*/}
            {/*                            style={{*/}
            {/*                                marginBottom: "15px", // Add space after each list item*/}
            {/*                                fontSize: "18px", // Slightly larger font*/}
            {/*                                color: "#4A4A4A", // Muted text color*/}
            {/*                            }}*/}
            {/*                        >*/}
            {/*                            {listItem}*/}
            {/*                        </li>*/}
            {/*                    ))}*/}
            {/*                </ul>*/}
            {/*            )}*/}

            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}

            {/*####*/}

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

                            {/* Image or Video */}
                            {item.type === "image" && item.src ? (
                                <img
                                    src={item.src}
                                    style={{
                                        width: "60%", // Reduce the image size
                                        maxWidth: "600px", // Ensure it doesn’t get too large on wide screens
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
                                        width: "100%",
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
