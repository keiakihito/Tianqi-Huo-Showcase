// // Define a new type for images with description
// export type ImageWithDescription = {
//     src: string;
//     header?: string | null; // Optional field for a header above the image
//     description?: string | null; // Optional description for the image
//     list?: string[] | null; // Optional list of strings for additional details
// };

export type MediaItem = {
    type: "image" | "video"; // Indicates whether it's an image or video
    src: string; // The source URL for the media (image or video)
    header?: string | null; // Optional header for the media
    description?: string | null; // Optional description for the media
    list?: string[] | null; // Optional list for additional details
};


export type Project = {
    title: string;
    // type: "image" | "youtube" | "video" | "pdf";
    // images?: ImageWithDescription[]; // Change this line
    type: "project";
    cover: MediaItem; // Explicitly define the cover
    media: MediaItem[]; // Updated to use the new `MediaItem` array
    youtubeLink?: string;
    fileName?: string;
    description: string;
    slug: string;
};
export const projects: Project[] = [

    { // Project 1
        title: "EcoStitch",
        type: "project",
        cover: {
            type: "image",
            src: "/images/project1/cover.jpg"
        },
        media: [
            {
                type: "image",
                src: "/images/project1/Project1 Web_Page_01.jpg",
                header: "PROPOSAL ABSTRACT", // New field
                // description: "A digital app that connects users in need of professional clothing repair.",
                list: [
                "- List Item 1",
                "- List Item 2",
                "- List Item 3",
            ] },// New list of strings
            { type: "image", src: "/images/project1/Project1 Web_Page_02.jpg", description: "" },
            { type: "image", src: "/images/project1/Project1 Web_Page_03.jpg", description: "" },
            { type: "image", src: "/images/project1/Project1 Web_Page_04.jpg", description: "" },
            { type: "image", src: "/images/project1/Project1 Web_Page_05.jpg", description: "" },
            { type: "image", src: "/images/project1/Project1 Web_Page_06.jpg", description: "" },
            { type: "image", src: "/images/project1/Project1 Web_Page_07.jpg", header: "COMPETITOR ANALYSIS" },
            { type: "image", src: "/images/project1/Project1 Web_Page_08.jpg", header: "MOOD BOARD" },
            { type: "image", src: "/images/project1/Project1 Web_Page_09.jpg", header: "STYLE GUIDE" },
            { type: "image",  src: "/images/project1/Project1 Web_Page_10.jpg", description: "" },
            { type: "image", src: "/images/project1/Project1 Web_Page_11.jpg", header: "USER RESEARCH" },
            { type: "image", src: "/images/project1/Project1 Web_Page_12.jpg", header: "PERSONA" },
            { type: "image", src: "/images/project1/Project1 Web_Page_13.jpg", header: "STORY BOARD" },
            { type: "image", src: "/images/project1/Project1 Web_Page_14.jpg", header: "TASK FLOW" },
            { type: "image", src: "/images/project1/Project1 Web_Page_15.jpg", header: "USER TESTING METRICS" },
            { type: "image", src: "/images/project1/Project1 Web_Page_16.jpg", header: "HIGH-FIDELITY WIREFRAMES" },
            { type: "image", src: "/images/project1/Project1 Web_Page_17.jpg", description: "" },
            { type: "image", src: "/images/project1/Project1 Web_Page_18.jpg", description: "" },
            { type: "image", src: "/images/project1/Project1 Web_Page_19.jpg", header: "PROTOTYPE" },
            {
                type: "video",
                src: "/videos/AsMod4.2_TianqiHuo.mp4",
                header: "Video Demo",
                description: "This is a video demonstration of EcoStitch.",
            },
        ],
        description: "A digital app that connects users in need of professional clothing repair.",
        slug: "eco-stitch",
    },

    { // Project 2
        title: "TasKit",
        type: "project",
        cover: {
            type: "image",
            src: "/images/project2/cover.jpg"
        },
        media: [
            { type: "image", src: "/images/project2/Huo_Tianqi_IxD755_Page_33.jpg", description: "" },
            { type: "image", src: "/images/project2/Huo_Tianqi_IxD755_Page_34.jpg", description: "" },
            { type: "image", src: "/images/project2/Taskit_IXD635_Project_Page_03.jpg", description: "" },
            { type: "image", src: "/images/project2/Taskit_IXD635_Project_Page_04.jpg", description: "" },
            { type: "image", src: "/images/project2/Taskit_IXD635_Project_Page_05.jpg", description: "" },
            { type: "image", src: "/images/project2/Taskit_IXD635_Project_Page_06.jpg", description: "" },
            { type: "image", src: "/images/project2/Taskit_IXD635_Project_Page_07.jpg", description: "" },
            { type: "image", src: "/images/project2/Taskit_IXD635_Project_Page_08.jpg", description: "" },
            { type: "image", src: "/images/project2/Taskit_IXD635_Project_Page_09.jpg", description: "" },
            { type: "image", src: "/images/project2/Taskit_IXD635_Project_Page_10.jpg", description: "" },
            { type: "image", src: "/images/project2/Taskit_IXD635_Project_Page_11.jpg", description: "" },
            { type: "image", src: "/images/project2/Taskit_IXD635_Project_Page_12.jpg", description: "" },
        ],
        description: "Project 2 description.",
        slug: "taskit",
    },
    {//Project 3
        title: "The Ivy",
        type: "project",
        cover: {
            type: "image",
            src: "/images/project3/cover.jpg"
        },
        media: [
            { type: "image", src: "/images/project3/The_IVY_WNM605_Page_01.jpg", description: "" },
            { type: "image", src: "/images/project3/The_IVY_WNM605_Page_02.jpg", description: "" },
            { type: "image", src: "/images/project3/The_IVY_WNM605_Page_04.jpg", description: "" },
            { type: "image", src: "/images/project3/The_IVY_WNM605_Page_06.jpg", description: "" },
            { type: "image", src: "/images/project3/The_IVY_WNM605_Page_08.jpg", description: "" },
            { type: "image", src: "/images/project3/The_IVY_WNM605_Page_10.jpg", description: "" },
            { type: "image", src: "/images/project3/The_IVY_WNM605_Page_12.jpg", description: "" },
            { type: "image", src: "/images/project3/The_IVY_WNM605_Page_14.jpg", description: "" },
            { type: "image", src: "/images/project3/The_IVY_WNM605_Page_15.jpg", description: "" },
            { type: "image", src: "/images/project3/The_IVY_WNM605_Page_16.jpg", description: "" },
            { type: "image", src: "/images/project3/The_IVY_WNM605_Page_17.jpg", description: "" },
            { type: "image", src: "/images/project3/The_IVY_WNM605_Page_18.jpg", description: "" },
            { type: "image", src: "/images/project3/The_IVY_WNM605_Page_19.jpg", description: "" },
            { type: "image", src: "/images/project3/The_IVY_WNM605_Page_20.jpg", description: "" },
            { type: "image", src: "/images/project3/The_IVY_WNM605_Page_21.jpg", description: "" },
            { type: "image", src: "/images/project3/The_IVY_WNM605_Page_22.jpg", description: "" },
            { type: "image", src: "/images/project3/The_IVY_WNM605_Page_24.jpg", description: "" },
            { type: "image", src: "/images/project3/The_IVY_WNM605_Page_25.jpg", description: "" },
            { type: "image", src: "/images/project3/The_IVY_WNM605_Page_27.jpg", description: "" },
            { type: "image", src: "/images/project3/The_IVY_WNM605_Page_29.jpg", description: "" },
            { type: "image", src: "/images/project3/The_IVY_WNM605_Page_30.jpg", description: "" },
            { type: "image", src: "/images/project3/The_IVY_WNM605_Page_31.jpg", description: "" },
            { type: "image", src: "/images/project3/The_IVY_WNM605_Page_32.jpg", description: "" },
            { type: "image", src: "/images/project3/The_IVY_WNM605_Page_33.jpg", description: "" },
            { type: "image", src: "/images/project3/The_IVY_WNM605_Page_34.jpg", description: "" },
            { type: "image", src: "/images/project3/The_IVY_WNM605_Page_35.jpg", description: "" },
            { type: "image", src: "/images/project3/The_IVY_WNM605_Page_36.jpg", description: "" },
        ],
        description: "Project 3 description.",
        slug: "the-ivy",
    },
    {//Project 4
        title: "Piggybank",
        type: "project",
        cover: {
            type: "image",
            src: "/images/project4/cover.jpg"
        },
        media: [
            { type: "image", src: "/images/project4/Huo_Tianqi_IxD755_Page_37.jpg", description: "" },
            { type: "image", src: "/images/project4/Huo_Tianqi_IxD755_Page_38.jpg", description: "" },
            { type: "image", src: "/images/project4/Piggybank_Tianqi_Huo_Page_04.jpg", description: "" },
            { type: "image", src: "/images/project4/Piggybank_Tianqi_Huo_Page_05.jpg", description: "" },
            { type: "image", src: "/images/project4/Piggybank_Tianqi_Huo_Page_11.jpg", description: "" },
            { type: "image", src: "/images/project4/Piggybank_Tianqi_Huo_Page_12.jpg", description: "" },
            { type: "image", src: "/images/project4/Piggybank_Tianqi_Huo_Page_13.jpg", description: "" },
            { type: "image", src: "/images/project4/Piggybank_Tianqi_Huo_Page_15.jpg", description: "" },
            { type: "image", src: "/images/project4/Piggybank_Tianqi_Huo_Page_17.jpg", description: "" },
            { type: "image", src: "/images/project4/Piggybank_Tianqi_Huo_Page_19.jpg", description: "" },
            { type: "image", src: "/images/project4/Piggybank_Tianqi_Huo_Page_21.jpg", description: "" },
            { type: "image", src: "/images/project4/Piggybank_Tianqi_Huo_Page_26.jpg", description: "" },
            { type: "image", src: "/images/project4/Piggybank_Tianqi_Huo_Page_28.jpg", description: "" },
            { type: "image", src: "/images/project4/Piggybank_Tianqi_Huo_Page_49.jpg", description: "" },
            { type: "image", src: "/images/project4/Piggybank_Tianqi_Huo_Page_50.jpg", description: "" },
            { type: "image", src: "/images/project4/Piggybank_Tianqi_Huo_Page_61.jpg", description: "" },
            { type: "image", src: "/images/project4/Piggybank_Tianqi_Huo_Page_64.jpg", description: "" },
            { type: "image", src: "/images/project4/Piggybank_Tianqi_Huo_Page_76.jpg", description: "" },
            { type: "image", src: "/images/project4/Piggybank_Tianqi_Huo_Page_85.jpg", description: "" },
            { type: "image", src: "/images/project4/Piggybank_Tianqi_Huo_Page_87.jpg", description: "" },
            { type: "image", src: "/images/project4/Piggybank_Tianqi_Huo_Page_88.jpg", description: "" },
            { type: "image", src: "/images/project4/Piggybank_Tianqi_Huo_Page_94.jpg", description: "" },
        ],
        description: "Project 4 description",
        slug: "piggybank",
    },
];
