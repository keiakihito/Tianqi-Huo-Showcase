// Define a new type for images with description
export type ImageWithDescription = {
    src: string;
    description: string | null;
};

export type Project = {
    title: string;
    type: "image" | "youtube" | "video" | "pdf";
    images?: ImageWithDescription[]; // Change this line
    youtubeLink?: string;
    fileName?: string;
    description: string;
    slug: string;
};
export const projects: Project[] = [

    { // Project 1
        title: "EcoStitch",
        type: "image",
        images: [
            { src: "/images/project1/Huo_Tianqi_IxD755_Page_04.jpg", description: "" },
            { src: "/images/project1/Huo_Tianqi_IxD755_Page_05.jpg", description: "" },
            { src: "/images/project1/Huo_Tianqi_IxD755_Page_06.jpg", description: "" },
            { src: "/images/project1/Huo_Tianqi_IxD755_Page_07.jpg", description: "" },
            { src: "/images/project1/Huo_Tianqi_IxD755_Page_08.jpg", description: "" },
            { src: "/images/project1/Huo_Tianqi_IxD755_Page_09.jpg", description: "" },
            { src: "/images/project1/Huo_Tianqi_IxD755_Page_10.jpg", description: "" },
            { src: "/images/project1/Huo_Tianqi_IxD755_Page_11.jpg", description: "" },
            { src: "/images/project1/Huo_Tianqi_IxD755_Page_12.jpg", description: "" },
            { src: "/images/project1/Huo_Tianqi_IxD755_Page_13.jpg", description: "" },
            { src: "/images/project1/Huo_Tianqi_IxD755_Page_14.jpg", description: "" },
            { src: "/images/project1/Huo_Tianqi_IxD755_Page_16.jpg", description: "" },
            { src: "/images/project1/Huo_Tianqi_IxD755_Page_17.jpg", description: "" },
            { src: "/images/project1/Huo_Tianqi_IxD755_Page_18.jpg", description: "" },
            { src: "/images/project1/Huo_Tianqi_IxD755_Page_19.jpg", description: "" },
            { src: "/images/project1/Huo_Tianqi_IxD755_Page_20.jpg", description: "" },
            { src: "/images/project1/Huo_Tianqi_IxD755_Page_22.jpg", description: "" },
            { src: "/images/project1/Huo_Tianqi_IxD755_Page_23.jpg", description: "" },
            { src: "/images/project1/Huo_Tianqi_IxD755_Page_24.jpg", description: "" },
            { src: "/images/project1/Huo_Tianqi_IxD755_Page_25.jpg", description: "" },
            { src: "/images/project1/Huo_Tianqi_IxD755_Page_26.jpg", description: "" },
            { src: "/images/project1/Huo_Tianqi_IxD755_Page_27.jpg", description: "" },
            { src: "/images/project1/Huo_Tianqi_IxD755_Page_28.jpg", description: "" },
            { src: "/images/project1/Huo_Tianqi_IxD755_Page_29.jpg", description: "" },
            { src: "/images/project1/Huo_Tianqi_IxD755_Page_30.jpg", description: "" },
            { src: "/images/project1/Huo_Tianqi_IxD755_Page_32.jpg", description: "" },
        ],
        description: "Project 1 description.",
        slug: "eco-stitch",
    },
    { // Project 2
        title: "TasKit",
        type: "image",
        images: [
            { src: "/images/project2/Huo_Tianqi_IxD755_Page_33.jpg", description: "" },
            { src: "/images/project2/Huo_Tianqi_IxD755_Page_34.jpg", description: "" },
            { src: "/images/project2/Taskit_IXD635_Project_Page_03.jpg", description: "" },
            { src: "/images/project2/Taskit_IXD635_Project_Page_04.jpg", description: "" },
            { src: "/images/project2/Taskit_IXD635_Project_Page_05.jpg", description: "" },
            { src: "/images/project2/Taskit_IXD635_Project_Page_06.jpg", description: "" },
            { src: "/images/project2/Taskit_IXD635_Project_Page_07.jpg", description: "" },
            { src: "/images/project2/Taskit_IXD635_Project_Page_08.jpg", description: "" },
            { src: "/images/project2/Taskit_IXD635_Project_Page_09.jpg", description: "" },
            { src: "/images/project2/Taskit_IXD635_Project_Page_10.jpg", description: "" },
            { src: "/images/project2/Taskit_IXD635_Project_Page_11.jpg", description: "" },
            { src: "/images/project2/Taskit_IXD635_Project_Page_12.jpg", description: "" },

        ],
        description: "Project 2 description.",
        slug: "taskit",
    },
    {//Project 3
        title: "The Ivy",
        type: "image",
        images: [
            { src: "/images/project3/The_IVY_WNM605_Page_01.jpg", description: "" },
            { src: "/images/project3/The_IVY_WNM605_Page_02.jpg", description: "" },
            { src: "/images/project3/The_IVY_WNM605_Page_04.jpg", description: "" },
            { src: "/images/project3/The_IVY_WNM605_Page_06.jpg", description: "" },
            { src: "/images/project3/The_IVY_WNM605_Page_08.jpg", description: "" },
            { src: "/images/project3/The_IVY_WNM605_Page_10.jpg", description: "" },
            { src: "/images/project3/The_IVY_WNM605_Page_12.jpg", description: "" },
            { src: "/images/project3/The_IVY_WNM605_Page_14.jpg", description: "" },
            { src: "/images/project3/The_IVY_WNM605_Page_15.jpg", description: "" },
            { src: "/images/project3/The_IVY_WNM605_Page_16.jpg", description: "" },
            { src: "/images/project3/The_IVY_WNM605_Page_17.jpg", description: "" },
            { src: "/images/project3/The_IVY_WNM605_Page_18.jpg", description: "" },
            { src: "/images/project3/The_IVY_WNM605_Page_19.jpg", description: "" },
            { src: "/images/project3/The_IVY_WNM605_Page_20.jpg", description: "" },
            { src: "/images/project3/The_IVY_WNM605_Page_21.jpg", description: "" },
            { src: "/images/project3/The_IVY_WNM605_Page_22.jpg", description: "" },
            { src: "/images/project3/The_IVY_WNM605_Page_24.jpg", description: "" },
            { src: "/images/project3/The_IVY_WNM605_Page_25.jpg", description: "" },
            { src: "/images/project3/The_IVY_WNM605_Page_27.jpg", description: "" },
            { src: "/images/project3/The_IVY_WNM605_Page_29.jpg", description: "" },
            { src: "/images/project3/The_IVY_WNM605_Page_30.jpg", description: "" },
            { src: "/images/project3/The_IVY_WNM605_Page_31.jpg", description: "" },
            { src: "/images/project3/The_IVY_WNM605_Page_32.jpg", description: "" },
            { src: "/images/project3/The_IVY_WNM605_Page_33.jpg", description: "" },
            { src: "/images/project3/The_IVY_WNM605_Page_34.jpg", description: "" },
            { src: "/images/project3/The_IVY_WNM605_Page_35.jpg", description: "" },
            { src: "/images/project3/The_IVY_WNM605_Page_36.jpg", description: "" },
        ],
        description: "Project 3 description.",
        slug: "the-ivy",
    },
    {//Project 4
        title: "Piggybank",
        type: "image",
        images: [
            { src: "/images/project4/Huo_Tianqi_IxD755_Page_37.jpg", description: "" },
            { src: "/images/project4/Huo_Tianqi_IxD755_Page_38.jpg", description: "" },
            { src: "/images/project4/Piggybank_Tianqi_Huo_Page_04.jpg", description: "" },
            { src: "/images/project4/Piggybank_Tianqi_Huo_Page_05.jpg", description: "" },
            { src: "/images/project4/Piggybank_Tianqi_Huo_Page_11.jpg", description: "" },
            { src: "/images/project4/Piggybank_Tianqi_Huo_Page_12.jpg", description: "" },
            { src: "/images/project4/Piggybank_Tianqi_Huo_Page_13.jpg", description: "" },
            { src: "/images/project4/Piggybank_Tianqi_Huo_Page_15.jpg", description: "" },
            { src: "/images/project4/Piggybank_Tianqi_Huo_Page_17.jpg", description: "" },
            { src: "/images/project4/Piggybank_Tianqi_Huo_Page_19.jpg", description: "" },
            { src: "/images/project4/Piggybank_Tianqi_Huo_Page_21.jpg", description: "" },
            { src: "/images/project4/Piggybank_Tianqi_Huo_Page_26.jpg", description: "" },
            { src: "/images/project4/Piggybank_Tianqi_Huo_Page_28.jpg", description: "" },
            { src: "/images/project4/Piggybank_Tianqi_Huo_Page_49.jpg", description: "" },
            { src: "/images/project4/Piggybank_Tianqi_Huo_Page_50.jpg", description: "" },
            { src: "/images/project4/Piggybank_Tianqi_Huo_Page_61.jpg", description: "" },
            { src: "/images/project4/Piggybank_Tianqi_Huo_Page_64.jpg", description: "" },
            { src: "/images/project4/Piggybank_Tianqi_Huo_Page_76.jpg", description: "" },
            { src: "/images/project4/Piggybank_Tianqi_Huo_Page_85.jpg", description: "" },
            { src: "/images/project4/Piggybank_Tianqi_Huo_Page_87.jpg", description: "" },
            { src: "/images/project4/Piggybank_Tianqi_Huo_Page_88.jpg", description: "" },
            { src: "/images/project4/Piggybank_Tianqi_Huo_Page_94.jpg", description: "" },
        ],
        description: "Project 4 description",
        slug: "piggybank",
    },
];
