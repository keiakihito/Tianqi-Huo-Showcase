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
        title: "Project 1: EcoStitch",
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
                //     list: [
                //     "",
                //     "",
                //     "",
                // ] ,// New list of strings
            },
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
                src: "/videos/P1Prototype.mp4",
                header: "Prototype Demo",
                description: "This is a prototype demonstration of EcoStitch.",
            },
        ],
        description: "A digital app that connects users in need of professional clothing repair.",
        slug: "eco-stitch",
    },

    { // Project 2
        title: "Project 2: TasKit",
        type: "project",
        cover: {
            type: "image",
            src: "/images/project2/cover.jpg"
        },
        media: [
            { type: "image", src: "/images/project2/Project2 Web_Page_1.jpg", header: "BACKGROUND RESEARCH" },
            { type: "image", src: "/images/project2/Project2 Web_Page_2.jpg" },
            { type: "image", src: "/images/project2/Project2 Web_Page_3.jpg", header: "PERSONA" },
            { type: "image", src: "/images/project2/Project2 Web_Page_4.jpg", header: "SKETCH" },
            { type: "image", src: "/images/project2/Project2 Web_Page_5.jpg", header: "MOOD BOARD" },
            { type: "image", src: "/images/project2/Project2 Web_Page_6.jpg", header: "STYLE GUIDE" },
            { type: "image", src: "/images/project2/Project2 Web_Page_7.jpg", header: "LOW-FIDELITY WIREFRAMES" },
            { type: "image", src: "/images/project2/Project2 Web_Page_8.jpg", header: "MID-FIDELITY WIREFRAMES" },
            { type: "image", src: "/images/project2/Project2 Web_Page_9.jpg", header: "HIGH-FIDELITY WIREFRAMES" },
            { type: "image", src: "/images/project2/Project2 Web_Page_10.jpg", header: "MOCKUP" }
        ],
        description: "Dashboard design for remote worker’s task management.",
        slug: "taskit",
    },
    {//Project 3
        title: "Project 3: The Ivy",
        type: "project",
        cover: {
            type: "image",
            src: "/images/project3/cover.jpg"
        },
        media: [
            { type: "image", src: "/images/project3/Project3 Web_Page_01.jpg", header: "BACKGROUND RESEARCH" },
            { type: "image", src: "/images/project3/Project3 Web_Page_02.jpg", header: "" },
            { type: "image", src: "/images/project3/Project3 Web_Page_03.jpg", header: "COMPETITIVE ANALYSIS" },
            { type: "image", src: "/images/project3/Project3 Web_Page_04.jpg", header: "IDENTIFY AUDIENCE" },
            { type: "image", src: "/images/project3/Project3 Web_Page_05.jpg", header: "CONCEPT DEVELOPMENT" },
            { type: "image", src: "/images/project3/Project3 Web_Page_06.jpg", header: "" },
            { type: "image", src: "/images/project3/Project3 Web_Page_07.jpg", header: "MOOD BOARD" },
            { type: "image", src: "/images/project3/Project3 Web_Page_08.jpg", header: "LOGO DESIGN" },
            { type: "image", src: "/images/project3/Project3 Web_Page_09.jpg", header: "" },
            { type: "image", src: "/images/project3/Project3 Web_Page_10.jpg", header: "" },
            { type: "image", src: "/images/project3/Project3 Web_Page_11.jpg", header: "" },
            { type: "image", src: "/images/project3/Project3 Web_Page_12.jpg", header: "IDENTITY DESIGN" },
            { type: "image", src: "/images/project3/Project3 Web_Page_13.jpg", header: "VISUAL DESIGN & MOCKUP" },
            { type: "image", src: "/images/project3/The Ivy Web 1.png", header: "HIGH-FIDELITY WIREFRAMES" },
            { type: "image", src: "/images/project3/The Ivy Web 2.png", header: "" },
            { type: "image", src: "/images/project3/The Ivy Web 3.png", header: "" },
            { type: "image", src: "/images/project3/The Ivy Web 4.png", header: "" },

        ],
        description: "A branding redesign project for The Ivy restaurant.",
        slug: "the-ivy",
    },
    {//Project 4
        title: "Project 4: Piggy Bank",
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
        description: "An expense and income tracking app design",
        slug: "piggy-bank",
    },
    { // Project 5
        title: "Project 5: Brand Identity",
        type: "project",
        cover: {
            type: "image",
            src: "/images/project5/cover.jpg"
        },
        media: [
            {
                type: "image",
                src: "/images/project5/cover.jpg",
                header: "PROPOSAL ABSTRACT", // New field
            },// New list of strings
            { type: "image", src: "/images/project5/Tianqi Huo_Branding_Page_03.jpg", description: "" },
            { type: "image", src: "/images/project5/Tianqi Huo_Branding_Page_04.jpg", description: "" },
            { type: "image", src: "/images/project5/Tianqi Huo_Branding_Page_05.jpg", description: "" },
            { type: "image", src: "/images/project5/Tianqi Huo_Branding_Page_06.jpg", description: "" },
            { type: "image", src: "/images/project5/Tianqi Huo_Branding_Page_07.jpg", description: "" },
            { type: "image", src: "/images/project5/Tianqi Huo_Branding_Page_08.jpg", header: "" },
            { type: "image", src: "/images/project5/Tianqi Huo_Branding_Page_09.jpg", header: "" },
            { type: "image", src: "/images/project5/Tianqi Huo_Branding_Page_10.jpg", header: "" },
            { type: "image",  src: "/images/project5/Tianqi Huo_Branding_Page_11.jpg", description: "" },
            { type: "image", src: "/images/project5/Tianqi Huo_Branding_Page_12.jpg", header: "" },
            { type: "image", src: "/images/project5/Tianqi Huo_Branding_Page_13.jpg", header: "" },
            { type: "image", src: "/images/project5/Tianqi Huo_Branding_Page_14.jpg", header: "" },
            { type: "image", src: "/images/project5/Tianqi Huo_Branding_Page_15.jpg", header: "" },
            { type: "image", src: "/images/project5/Tianqi Huo_Branding_Page_16.jpg", header: "" },
            { type: "image", src: "/images/project5/Tianqi Huo_Branding_Page_17.jpg", header: "" },
            { type: "image", src: "/images/project5/Tianqi Huo_Branding_Page_18.jpg", description: "" },

            // {
            //     type: "video",
            //     src: "/videos/P1Prototype.mp4",
            //     header: "Prototype Demo",
            //     description: "This is a prototype demonstration of EcoStitch.",
            // },
        ],
        description: "My personal brand identity package showcases the story behind my brand..",
        slug: "brand-identity",
    },
];
