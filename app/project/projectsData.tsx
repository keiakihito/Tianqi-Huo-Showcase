// // Define a new type for images with description
// export type ImageWithDescription = {
//     src: string;
//     header?: string | null; // Optional field for a header above the image
//     description?: string | null; // Optional description for the image
//     list?: string[] | null; // Optional list of strings for additional details
// };

export type MediaItem = {
    type: "image" | "video" | "pdf"; // Indicates whether it's an image or video
    src?: string; // The source URL for the media (image or video)
    header?: string | null; // Optional header for the media
    description?: string | null; // Optional description for the media
    highlight?: string | null; // Optional highlight text
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
                description:
                    "Many people are addicted to buying fast fashion and keeping up with the latest trends. Shopping for new styles—whether it’s shoes, jeans, tops, or jackets—allows us to express who we are to the world. But have you ever considered where all that clothing ends up once you’re done with it? Do you donate it, recycle it, or throw it away?",
                highlight: "Where do all these discarded clothes ultimately go?",
            },
            { type: "image", src: "/images/project1/Project1 Web_Page_02.jpg", description: "" },
            {
                type: "image",
                src: "/images/project1/Project1 Web_Page_03.jpg",
                description:
                    "It’s time to end throwaway practices and stop destroying overstock clothing. As consumers, we can stop buying excessively by supporting eco-friendly manufacturers and repair services business.",
                highlight: "Because waste is out of fashion",
            },
            { type: "image", src: "/images/project1/Project1 Web_Page_04a.jpg", header: "PROBLEM" },
            { type: "image", src: "/images/project1/Project1 Web_Page_04b.jpg", header: "SOLUTION" },
            { type: "image", src: "/images/project1/Project1 Web_Page_05.jpg", header: "WHAT IS ECOSTITCH?", description: "A digital app that connects users in need of professional clothing repair, alteration, and upcycling services with skilled tailors and fashion experts. EcoStitch aims to transform the way users engage with their wardrobes and extend the lifespan of their clothing items." },
            { type: "image", header: "WHO IS THIS FOR?", description: "Anyone who seeks to extend the life of their clothing or accessories while reducing their carbon footprint will find value in EcoStitch. Whether it’s to repair a beloved garment, tailor a new purchase, or explore creative upcycling ideas, users benefit from its sustainable and user-centric approach." },
            { type: "image", src: "/images/project1/Project1 Web_Page_06.jpg", header: "WHAT DOES IT PROVIDE", description: "Convenient access to professional clothing repair, alteration, and upcycling services. The key benefits include virtual consultations, sustainable clothing care solutions, personalized clothing customization, and community engagement with fashion experts. " },
            { type: "image", src: "/images/project1/Project1 Web_Page_07.jpg", header: "COMPETITOR ANALYSIS" },
            { type: "image", src: "/images/project1/Project1 Web_Page_08.jpg", header: "MOOD BOARD", description: "My inspiration are the artworks of Gabriela Martínez. It inspires me using fabric scraps and yarn to give old garments new life. It’s very provoked to see how the artist embraces sustainability and organic concepts into her fashion practice. I want to integrate the principles of ‘slow fashion’ and the colors showing on my mood board into my UI design." },
            { type: "image", src: "/images/project1/Project1 Web_Page_09.jpg", header: "STYLE GUIDE" },
            { type: "image",  src: "/images/project1/Project1 Web_Page_10.jpg", header: "USER SURVEY INFOGRAPHIC" },
            { type: "image", src: "/images/project1/Project1 Web_Page_11a.jpg", header: "USER RESEARCH" },
            { type: "image", src: "/images/project1/Project1 Web_Page_11b.jpg", header: "AUDIENCE DESCRIPTION", description: "Individuals aged 25-44, with a moderate interest in sustainable fashion practices and a willingness to engage in clothing repair and alteration services for environmental and economic reasons." },
            { type: "image", src: "/images/project1/Project1 Web_Page_11c.jpg", header: "THE MAIN LEARNING", description: "My target users show the high interests in sustainable fashion practices, the varying levels of familiarity with slow fashion, and the challenges associated with accessing reliable clothing repair and alteration services."},
            { type: "image", src: "/images/project1/Project1 Web_Page_11d.jpg", header: "THE MOST INTERESTING LEARNINGS", description: "The diverse motivations for embracing slow fashion, the significant proportion of respondents interested in using an app for clothing care, and the challenges related to finding cost-effective and high-quality clothing alteration services."},
            { type: "image", header: "HOW WILL I USE THEM", list: ["- Emphasize the app’s user-friendly interface, affordability, and accessibility, highlighting its capacity to address the challenges users face in seeking reliable and cost-effective clothing repair and alteration services.",
                "- Integrate educational resources and interactive features within the app to cater to users who are less familiar with sustainable fashion practices. ",
                "- Leverage the motivations for embracing slow fashion to emphasize the environmental benefits and cost-saving aspects of the EcoStitch platform."]},
            { type: "image", src: "/images/project1/Project1 Web_Page_12.jpg", header: "PERSONA" },
            { type: "image", src: "/images/project1/Project1 Web_Page_13.jpg", header: "STORY BOARD" },
            { type: "image", src: "/images/project1/Project1 Web_Page_14.jpg", header: "TASK FLOW", description: "This task flow diagram illustrates Zoe Zhao’s journey as she interacts with the EcoStitch app, emphasizing the seamless and convenient process of accessing professional repair services for her cherished jacket by fix the dropped button." },
            { type: "image", header: "INTERVIEW RESULTS", description: "I picked interviewers from my large target audience and interviewed them in person. During the interviews, I took a lot of notes and observed them. I found out that all of them care about sustainability, showing interests in slow fashion practices. It was interesting that each person has diverse demands for a trustworthy and easy-to-access clothing care app." },
            { type: "image", src: "/images/project1/Project1 Web_Page_15.jpg", header: "USER TESTING METRICS", description: "   After second user testing,\n" +
                    "participants rate from 1-5 ease of use increased from 4.14 to ", highlight: "4.85"},
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
            { type: "image", src: "/images/project5/1.jpg", header: "Word List.", description: "These words reflect key aspects of my professional identity, resonate with the message I want to convey, and serve as a guiding light for my entire project." },
            { type: "image", src: "/images/project5/2.png", header: "Three Posters.", description: "The combination of Mrs Eaves for headings and PT Sans for subheadings creates a balance between traditional elegance and modern simplicity. The soft, natural tones in primary and secondary color palettes reinforce the meticulous and serene identity." },
            { type: "image", src: "/images/project5/3.png", header: "Moodboard.",  description: "The images reflects the serene, leisurely, and meticulous qualities of my brand words. The muted colors and delicate imagery, giving off an airy and peaceful vibe that aligns with my identity. " },
            { type: "image", src: "/images/project5/4.jpg", header: "Logo Sketches.", description: "Aligned with the tone set by my moodboard and the selected words leisurely, meticulous, and serene, my logo sketches display an exploration of various logo forms, using both abstract shapes and letterforms to interpret my brand identity and convey a sense of traditional Asian aesthetics." },
            { type: "image", src: "/images/project5/5.jpg", header: "Digital Logos.", description: "Resonating with the identity I’m building, I explored different visual styles. This demonstrates versatility in expressing my brand identity and interprets a meticulous and serene feeling, conveying a sense of traditional Asian aesthetics." },
            { type: "image", src: "/images/project5/6.png", header: "Style Guide.", description: "The combination of Mrs Eaves for headings and PT Sans for subheadings creates a balance between traditional elegance and modern simplicity. The soft, natural tones in primary and secondary color palettes reinforce the meticulous and serene identity." },
            { type: "image", src: "/images/project5/7.png", header: "Final Logo.", description: "Based on my style guide, the orange gradient variant conveys warmth and creativity, which resonate with relaxed and refined aesthetic. The organic shape inspired by Japanese stamp and calligraphy, reflecting traditional Asian aesthetics." },
            { type: "image",  src: "/images/project5/8.png", header: "Logo Usage.", description: "The orange version offers a vibrant, energetic visual impact. It draws attention but remains grounded due to the organic form. The three sizes show consistent use across different platforms."},
            { type: "image", src: "/images/project5/9.png", header: "Brand Mantra.", description: "Capturing the essence of who I am as a designer and focused on quality, it communicates my value proposition to potential employers, emphasizing my ability to elevate product design with care and precision." },
            { type: "image", src: "/images/project5/10.png", header: "Resume.", description: "By integrating typography choices from my style guide, the hierarchy makes it easy for the reader to navigate, providing concise, digestible information while maintaining brand consistency." },
            { type: "image", src: "/images/project5/11.png", header: "Business Card.", description: "Focusing on a balanced visual hierarchy, I use clean, modern typography to express elegance and sophistication. The logo is displayed on both sides of my business card in different ways, showing its versatility and consistency." },
            { type: "image", src: "/images/project5/12.png", header: "Business Card Mockup.", description: "The contrast between the front and back makes my business card dynamic without losing cohesion. The orange gradient on the back enhances the warmth and creativity of my brand. It creates a visually engaging and energetic feel that aligns with my identity as a product designer." },

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
