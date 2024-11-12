export type Project = {
    title: string;
    type: "image" | "youtube" | "video" | "pdf";
    images?: string[];
    youtubeLink?: string;
    fileName?: string;
    description: string;
    slug: string;
};

export const projects: Project[] = [
    // {
    //     title: "EcoStitch",
    //     type: "image",
    //     images: ["/projects/images/ecostitch-1.png", "/projects/images/ecostitch-2.png"],
    //     description: "EcoStitch is a clothing customization app focusing on sustainable fashion.",
    //     slug: "eco-stitch",
    // },
    {
        title: "Campaigns One, Two & Three Compilation",
        type: "image",
        images: ["/images/project2/Taskit_IXD635_Project_Page_01.jpg","/images/project2/Taskit_IXD635_Project_Page_02.jpg",
                        "/images/project2/Taskit_IXD635_Project_Page_03.jpg","/images/project2/Taskit_IXD635_Project_Page_04.jpg",
                        "/images/project2/Taskit_IXD635_Project_Page_05.jpg","/images/project2/Taskit_IXD635_Project_Page_06.jpg",
                        "/images/project2/Taskit_IXD635_Project_Page_07.jpg","/images/project2/Taskit_IXD635_Project_Page_08.jpg",
                        "/images/project2/Taskit_IXD635_Project_Page_09.jpg", "/images/project2/Taskit_IXD635_Project_Page_10.jpg",
                        "/images/project2/Taskit_IXD635_Project_Page_11.jpg","/images/project2/Taskit_IXD635_Project_Page_12.jpg"],
        description: "Compilation of three campaigns showcasing various marketing strategies.",
        slug: "campaigns",
    },
    // {
    //     title: "Project3",
    //     type: "image",
    //     images: ["/project/images/campaigns-1.png", "/projects/images/campaigns-2.png"],
    //     description: "Project3 description.",
    //     slug: "project3",
    // },
    // {
    //     title: "Project4",
    //     type: "image",
    //     images: ["/project/images/campaigns-1.png", "/projects/images/campaigns-2.png"],
    //     description: "Project4 description.",
    //     slug: "project4",
    // },
    // {
    //     title: "Movie 1",
    //     type: "youtube",
    //     youtubeLink: "https://www.youtube.com/watch?v=AoiK6pU1umk",
    //     description: "A short film project titled 'Movie 1'.",
    //     slug: "movie-1",
    // },
    // {
    //     title: "Movie 2",
    //     type: "video",
    //     fileName: "AsMod4.2_Tianqi Huo.mp4",
    //     description: "A short film project titled 'Movie 2'.",
    //     slug: "movie-2",
    // },

];
