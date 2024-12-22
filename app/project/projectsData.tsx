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
    highlight?: string | null; // Optional highlight text
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
                highlight: null,
                header: "PROPOSAL ABSTRACT", // New field
                description:
                    "Many people are addicted to buying fast fashion and keeping up with the latest trends. Shopping for new styles—whether it’s shoes, jeans, tops, or jackets—allows us to express who we are to the world. But have you ever considered where all that clothing ends up once you’re done with it? Do you donate it, recycle it, or throw it away? Where do all these discarded clothes ultimately go?",
            },
            { type: "image", src: "/images/project1/Project1 Web_Page_02.jpg", highlight: null, description: "It’s time to end throwaway practices and stop destroying overstock clothing. As consumers, we can stop buying excessively by supporting eco-friendly manufacturers and repair services business. Because waste is out of fashion." },
            {
                type: "image",
                src: "/images/project1/Project1 Web_Page_03.jpg",
                highlight: null,
                description: " ",
            },
            { type: "image", src: "/images/project1/Project1 Web_Page_04a.jpg", description: " ", highlight: "PROBLEM" },
            { type: "image", src: "/images/project1/Project1 Web_Page_04b.jpg", description: " ", highlight: "SOLUTION" },
            { type: "image", src: "/images/project1/Project1 Web_Page_05.jpg",  highlight: "WHAT IS ECOSTITCH?", description: "A digital app that connects users in need of professional clothing repair, alteration, and upcycling services with skilled tailors and fashion experts. EcoStitch aims to transform the way users engage with their wardrobes and extend the lifespan of their clothing items." },
            { type: "image", highlight: "WHO IS THIS FOR?", description: "Anyone who seeks to extend the life of their clothing or accessories while reducing their carbon footprint will find value in EcoStitch. Whether it’s to repair a beloved garment, tailor a new purchase, or explore creative upcycling ideas, users benefit from its sustainable and user-centric approach." },
            { type: "image", src: "/images/project1/Project1 Web_Page_06.jpg", highlight: "WHAT DOES IT PROVIDE", description: "Convenient access to professional clothing repair, alteration, and upcycling services. The key benefits include virtual consultations, sustainable clothing care solutions, personalized clothing customization, and community engagement with fashion experts. " },
            { type: "image", src: "/images/project1/Project1 Web_Page_07.jpg", highlight: null, header: "COMPETITOR ANALYSIS", description: "A comparison of existing clothing care and repair platforms, evaluating their strengths, weaknesses, and opportunities. I highlights areas where EcoStitch can improve user experience, such as integrating intuitive interfaces, virtual assistance, and sustainable material recommendations." },
            { type: "image", src: "/images/project1/Project1 Web_Page_08.jpg", highlight: null, header: "MOOD BOARD", description: "My inspiration are the artworks of Gabriela Martínez. It inspires me using fabric scraps and yarn to give old garments new life. It’s very provoked to see how the artist embraces sustainability and organic concepts into her fashion practice. I want to integrate the principles of ‘slow fashion’ and the colors showing on my mood board into my UI design." },
            { type: "image", src: "/images/project1/Project1 Web_Page_09.jpg", highlight: null, header: "STYLE GUIDE" },
            { type: "image",  src: "/images/project1/Project1 Web_Page_10.jpg", highlight: "USER SURVEY INFOGRAPHIC", description: "A visual summary of survey insights from 47 participants. The data reveals user behavior, interest in slow fashion, and key motivations for sustainable clothing practices. Findings emphasize the need for a platform like EcoStitch to bridge gaps in awareness, accessibility, and eco-friendly solutions. ", header: "USER RESEARCH" },
            { type: "image", src: "/images/project1/Project1 Web_Page_11a.jpg", highlight: "AUDIENCE DESCRIPTION", description: "Individuals aged 25-44, with a moderate interest in sustainable fashion practices and a willingness to engage in clothing repair and alteration services for environmental and economic reasons. " },
            { type: "image", src: "/images/project1/Project1 Web_Page_11b.jpg", highlight: "THE MAIN LEARNINGS", description: "My target users show the high interests in sustainable fashion practices, the varying levels of familiarity with slow fashion, and the challenges associated with accessing reliable clothing repair and alteration services."},
            { type: "image", src: "/images/project1/Project1 Web_Page_11c.jpg", highlight: "THE MOST INTERESTING LEARNINGS", description: "The diverse motivations for embracing slow fashion, the significant proportion of respondents interested in using an app for clothing care, and the challenges related to finding cost-effective and high-quality clothing alteration services."},
            { type: "image", src: "/images/project1/Project1 Web_Page_11d.jpg", highlight: "HOW WILL I USE THEM", description: " ", list: ["- Emphasize the app’s user-friendly interface, affordability, and accessibility, highlighting its capacity to address the challenges users face in seeking reliable and cost-effective clothing repair and alteration services.",
                    "- Integrate educational resources and interactive features within the app to cater to users who are less familiar with sustainable fashion practices. ",
                    "- Leverage the motivations for embracing slow fashion to emphasize the environmental benefits and cost-saving aspects of the EcoStitch platform."]},
            { type: "image", src: "/images/project1/Project1 Web_Page_12.jpg", highlight: null, header: "PERSONA", description: "The persona represents Zoe Zhao, who values sustainable fashion but struggles to find reliable clothing repair services. Her frustrations include miscommunication, lack of trustworthy platforms, and unmet aesthetic needs. EcoStitch addresses these issues with accessible, user-friendly solutions tailored for people like Zoe." },
            { type: "image", src: "/images/project1/Project1 Web_Page_13.jpg", highlight: null, header: "STORY BOARD", description: "The storyboard illustrates Zoe's journey using EcoStitch. After struggling to fix a button on her favorite jacket, she discovers the app, uploads details, and successfully uses the platform to get her garment professionally repaired. The process highlights EcoStitch's seamless and efficient user experience."},
            { type: "image", src: "/images/project1/Project1 Web_Page_14.jpg", highlight: null, header: "TASK FLOW", description: "This task flow diagram illustrates Zoe Zhao’s journey as she interacts with the EcoStitch app, emphasizing the seamless and convenient process of accessing professional repair services for her cherished jacket by fix the dropped button." },
            { type: "image", src: "/images/project1/Project1 Web_Page_14_5.jpg", highlight: null, header: "INTERVIEW RESULTS", description: "I picked interviewers from my large target audience and interviewed them in person. During the interviews, I took a lot of notes and observed them. I found out that all of them care about sustainability, showing interests in slow fashion practices. It was interesting that each person has diverse demands for a trustworthy and easy-to-access clothing care app." },
            { type: "image", src: "/images/project1/Project1 Web_Page_15.jpg", highlight: null, header: "USER TESTING METRICS", description: " The user testing metrics summarize the app's usability improvements. After the second round of testing, participants' ease-of-use ratings increased from 4.14 to 4.85. Most users completed tasks successfully and expressed high satisfaction, validating the app's intuitive design and functionality."},
            { type: "image", src: "/images/project1/Project1 Web_Page_16.jpg", highlight: null, header: "HIGH-FIDELITY WIREFRAMES", description: " These screens shows the steps of user choosing service at the bottom menu bar, then selecting jacket at mending section, and choosing the service type of replacing buttons.  " },
            { type: "image", src: "/images/project1/Project1 Web_Page_17.jpg", highlight: null, description: "These screens illustrates the steps of user inputing item description, then inputing mending details, and choosing delivery preference.  " },
            { type: "image", src: "/images/project1/Project1 Web_Page_18.jpg", highlight: null, description: "These screens shows the steps of user checking out, then make payment, and finishing booking the service. " },
            // { type: "image", src: "/images/project1/Project1 Web_Page_19.jpg", header: "PROTOTYPE" },
            {
                type: "video",
                src: "/videos/P1Prototype.mp4",
                header: "Prototype",
                highlight: null,
                // description: "This is a prototype demonstration of EcoStitch.",
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
            { type: "image", src: "/images/project2/Project2 Web_Page_1.jpg", header: "BACKGROUND RESEARCH", highlight: null, description: "As remote work becomes the norm, effective digital tools are essential for managing tasks and meeting deadlines. Taskit is a task management dashboard designed to help teams track progress intuitively and efficiently. The project required tackling the challenges of remote collaboration by focusing on creating a user-friendly, visually appealing interface.\n" +
                    "\n" +
                    "This case study highlights the design process, from user research and ideation to iterative development and the final product. Key design decisions are examined, showcasing how they addressed user needs and contributed to a successful outcome.\n" },
            { type: "image",  header: "TasKit - Remote Employees/Freelancer Task Management Dashboard",highlight: null},
            { type: "image",  highlight: null, list:[
                    "Concept:   A task management solution designed for remote employees and freelancers.",
                ]},
            { type: "image",  highlight: null, list:[
                    "Target Audience:   Employees and freelancers aged 20-60 working remotely or in distributed teams.",
                ]},
            { type: "image", highlight: null,  list:[
                    "Benefits: ",
                    "- Streamlines task and workflow management for companies with distributed teams across regions or countries.\n",
                    "- Enhances communication and collaboration for teams working from home or other remote locations.\n",
                    "- Helps companies reduce overhead costs while maintaining productivity and efficiency.\n"
                ]},
            { type: "image", highlight: null,  list:[
                    "Features: ",
                    "- Streamlines task and workflow management for companies with distributed teams across regions or countries.\n",
                    "- Enhances communication and collaboration for teams working from home or other remote locations.\n",
                    "- Helps companies reduce overhead costs while maintaining productivity and efficiency.\n"
                ]},
            // { type: "image", src: "/images/project2/Project2 Web_Page_2.jpg", highlight: "Test" },
            { type: "image", src: "/images/project2/Project2 Web_Page_3.jpg", header: "PERSONA", highlight: null, description: "Emily Johnson, a skilled UI/UX designer. The persona shows her frustrations, needs, and goals, offering insights into the target audience’s challenges and priorities for the task management dashboard." },
            { type: "image", src: "/images/project2/Project2 Web_Page_4.jpg", header: "SKETCHES", highlight: null, description: "My initial hand-drawn sketches explore the core layout and structure of the dashboard, focusing on key components like task lists, team chats, and progress tracking." },
            { type: "image", src: "/images/project2/Project2 Web_Page_5.jpg", header: "MOOD BOARD", highlight: null, description: "The moodboard defines the visual direction, incorporating soothing pastel gradients, soft tones, and modern UI inspirations to create a calm and professional interface."},
            { type: "image", src: "/images/project2/Project2 Web_Page_6.jpg", header: "STYLE GUIDE", highlight: null, description: "My style guide establishes the design system, including a harmonious color palette, typeface choices, button styles, and icons, ensuring consistency across the dashboard." },
            { type: "image", src: "/images/project2/Project2 Web_Page_7.jpg", header: "LOW-FIDELITY WIREFRAMES", highlight: null, description: "The low-fidelity wireframe focuses on the dashboard’s functionality and layout, mapping out the basic structure without detailed visuals." },
            { type: "image", src: "/images/project2/Project2 Web_Page_8.jpg", header: "MID-FIDELITY WIREFRAMES", highlight: null, description: "This version adds more visual clarity, including refined layouts and placeholder elements, offering a closer look at the dashboard’s components." },
            { type: "image", src: "/images/project2/Project2 Web_Page_9.jpg", header: "HIGH-FIDELITY WIREFRAMES", highlight: null, description: "The final polished design integrates colors, typography, and interactive elements, showcasing the fully realized dashboard with visual appeal and user-friendly navigation." },
            { type: "image", src: "/images/project2/Project2 Web_Page_10.jpg", header: "MOCKUP", highlight: null},
            { type: "image", header: "TAKEAWAY", highlight: null, description: "This case study highlights the importance of understanding user needs, thoughtful design iteration, and visual consistency in creating a user-friendly task management dashboard. By combining research, ideation, and refined design systems, TasKit successfully addresses the challenges of remote collaboration, enhancing productivity and user experience." },
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
            { type: "image", src: "/images/project3/Project3 Web_Page_01.jpg", header: "BACKGROUND RESEARCH", highlight: "ABOUT THE IVY", description: " ",
                list: ["Located on Robertson Boulevard in Los Angeles, The Ivy is famous for its celebrity sightings and paparazzi presence. Known for its nouvelle American cuisine, the restaurant features charming country-cottage decor with a flowery outdoor terrace, framed by ivy and surrounded by a signature white picket fence.",
                    "Its cozy interior boasts rustic antiques, vibrant floral arrangements, and folksy touches, creating a warm and inviting atmosphere. The menu highlights American cuisine with a strong emphasis on Louisiana/Cajun specialties, complemented by an array of delightful desserts. "] },
            { type: "image", src: "/images/project3/Project3 Web_Page_02.jpg", highlight: "MY EXPERIENCE", description: " ",
                list: ["The restaurant's style blends Italian and American influences in both its decor and cuisine. While the interior was visually appealing, I found the dishes overpriced for their value.",
                    "I appreciated the charming decor, especially the fresh flowers that lifted my mood and the adorable plates. However, the steep prices were disappointing, and the menu design lacked elegance."]},
            { type: "image", src: "/images/project3/Project3 Web_Page_03.jpg", header: "COMPETITIVE ANALYSIS",highlight: "Larchmont Bungalow Café",  description: "Larchmont Bungalow Cafe, located in the vibrant Echo Park neighborhood of Los Angeles, is committed to healthier eating and quality dining. Their dishes are crafted with the freshest ingredients, ensuring freshness, quality, and consistency. Beyond the food, they prioritize warm, family-like service and offer a cozy environment for customers to enjoy their meals."},
            { type: "image", src: "/images/project3/Project3 Web_Page_03_5.jpg", header: "COMPETITIVE ANALYSIS",highlight: "Openaire",  description: "Openaire, located at The Line Hotel in Koreatown, occupies the former Commissary space and retains its greenhouse-inspired dining room reminiscent of a Hamptons estate. Now helmed by the chef from Melisse and Charcoal, the menu has undergone significant changes. Highlights include the hamachi crudo and sirloin steak with toasted garlic brown butter sauce, though some dishes, like shrimp paired with beans, turnips, and herby sauce, miss the mark."},
            { type: "image", src: "/images/project3/Project3 Web_Page_04.jpg", header: "IDENTIFY AUDIENCE", description: "TARGET AUDIENCE",
                list:["- Age 22-40, female 80%,  male 20%.\n",
                "- Prefer to dining at high-end restaurant .\n",
                "- Care about appearance of dishes.\n",
                "- Care about exquisite of restaurant and food.\n",
                "- Love to din in relatively expensive restaurant.\n",
                "- Love to eat with nature, fresh flowers.\n",
                "- Love floral, colorful and vivid interior.\n",
                "- Like Italian American style brunch.\n",
                "- Love to hang out and have brunch with friends.\n",
                "- Love to take photos and share on social media. "] },
            { type: "image", src: "/images/project3/Project3 Web_Page_05.jpg", header: "CONCEPT DEVELOPMENT", highlight: "WORD LIST", description: "A curated list of words like fresh, floral, and bright reflects The Ivy’s countryside charm, delicate ambiance, and nature-inspired experience, forming the foundation for the visual and brand identity. "},
            { type: "image", highlight: "MISSION STATEMENT", description: "The Ivy restaurant serves dishes made with the freshest ingredients, complemented by a welcoming country cottage ambiance adorned with ivy and fresh flowers. We strive to create a warm environment and provide family-like service, where food brings people together." },
            // { type: "image", src: "/images/project3/Project3 Web_Page_06.jpg", header: "" },
            { type: "image", src: "/images/project3/Project3 Web_Page_07.jpg", header: "MOOD BOARD", description: "My mood board captures the essence of The Ivy’s redesign—lush floral aesthetics, soft natural tones, rustic elegance, and a cozy countryside vibe—setting the tone for a fresh and inviting visual identity."},
            { type: "image", src: "/images/project3/Project3 Web_Page_08.jpg", header: "LOGO DESIGN", highlight: "LOGO SKETCHES", description: " "},
            { type: "image", src: "/images/project3/Project3 Web_Page_09.jpg", highlight: "TOP 3 SELECTIONS", description: " " },
            { type: "image", src: "/images/project3/Project3 Web_Page_10.jpg", highlight: "STYLE GUIDES", description: " " },
            { type: "image", src: "/images/project3/Project3 Web_Page_11.jpg", highlight: "FORBIDDEN USAGE", description: "The brand identity featuring the final logo, refined typography, and color palette. My design highlights The Ivy’s rustic, floral theme with a contemporary twist. " },
            { type: "image", src: "/images/project3/Project3 Web_Page_12.jpg", header: "IDENTITY DESIGN", highlight: "BUSINESS CARD", description: " " },
            { type: "image", src: "/images/project3/Project3 Web_Page_13.jpg", header: "VISUAL DESIGN & MOCKUP", description: "Visual mockups showcasing brand applications, including menus, business cards, and signage. My designs emphasize a clean, floral-inspired aesthetic that enhances the restaurant’s visual appeal. " },
            { type: "image", src: "/images/project3/The Ivy Web 1.png", header: "INTERACTION DESIGN", highlight: "LANDING PAGE", description: "The landing page introduces The Ivy’s essence with simple design, blending visuals of lush florals and vibrant dishes to invite users into its warm and upscale dining experience. " },
            { type: "image", src: "/images/project3/The Ivy Web 2.png", highlight: "MENU PAGE", description: "Featuring with with clean layouts,,the menu page showcasing exquisite dishes and vibrant photography that reflect The Ivy’s high-end and visually appealing offerings. " },
            { type: "image", src: "/images/project3/The Ivy Web 3.png", highlight: "MENU DETAIL PAGE", description: "Highlighting individual dishes with mouth-watering imagery, clear descriptions, and prices, ensuring users can easily explore the restaurant’s curated selections. " },
            { type: "image", src: "/images/project3/The Ivy Web 4.png", highlight: "RESERVATION PAGE", description: "Focusing on simplicity and elegance, reservation page allowing users to reserve a table effortlessly at The Ivy."},

        ],
        description: "A branding redesign project for The Ivy restaurant.",
        slug: "the-ivy",
    },
    {//Project 4
        title: "Project 4: Piggy Bank",
        type: "project",
        cover: {
            type: "image",
            src: "/images/project4/cover.png"
        },
        media: [
            { type: "image", src: "/images/project4/1.png", header: "BACKGROUND RESEARCH", highlight: "BACKGROUND", description: "According to the Clever’s COVID-19 Financial Impact Series, 61% of Americans will run out of emergency savings by the end of 2021. Many people have faced major financial struggles. It’s time to review finances and make a goal for saving money. Reducing expenses is key to building an emergency fund, and the first step is deciding the amount of money that can be reasonably afforded to save every month. Saving from now in order to have a secured financial future is vitally important." },
            { type: "image", src: "/images/project4/2.png", highlight:"GOALS",  description: "Let individuals realize the importance of saving money, learn the difficulties which hinder them to stay on budget and help them to reach their goals of saving money." },
            { type: "image", list:[
                "- Why do people think it is important to save money?",
                "- What are the benefits to have emergency fund?",
                "-  Do people usually spend on things they don’t really need?",
                "- What disturbs people to save money?",
                "- What are the good ways to control the desire of spending unnecessary money?",
                "- What do people find enjoyable and frustrated when they control the spend?"
                ]},
            { type: "image", src: "/images/project4/3.png", header: "EMPATHY RESEARCH",  highlight: "USER INTERVIEW QUOTES", description: "The participants below answered the 18 user interview questions. Some of their thought exceeded and even subverted my expectations, which were quite helpful for this project. I picked 4 most explanatory quotes from the each participant."},
            { type: "image", src: "/images/project4/4.png", highlight: "USER SURVEY RESULTS",   description: "I created a 9 questions survey about understanding how people think of staying on budget and saving money. There were 21 people took this survey. I pulled out 4 most revealing findings below." },
            { type: "image", src: "/images/project4/5.png", header: "PERSONA", 　description: "" },
            { type: "image", src: "/images/project4/6.png", header: "COMPETITOR ANALYSIS", description: "" },
            { type: "image", src: "/images/project4/7.png", header: "BRAIN STORMING", description: "This is the initial brainstorming showcases my rough ideas of Piggy Bank. It features first-hand sketches that outline key app functionalities, such as expense tracking, income recording, budgeting tools, and savings goals." },
            { type: "image", src: "/images/project4/8.png", header: "TASK FLOW", highlight:"TASK 1: USER RECORDS EXPENSE", description: "This task flow diagram illustrates Jamie’s journey as she interacts with the Piggy Bank app, emphasizing the process of she recording grocery expense journey." },
            { type: "image", src: "/images/project4/9.png", header: "WIREFRAME SKETCHES",  description: "" },
            { type: "image", src: "/images/project4/10.png", header: "LOW-FIDELITY WIREFRAMES",  description: "" },
            { type: "image", src: "/images/project4/11.png",  header: "PAPER PROTOTYPE TESTING",  description: ""},
            { type: "image", highlight: "TEST CONCLUSION",  description: "Keita was quite interested in the test process because he has a desire to stay on budget and saving money. According to his behavior and the question he asked during test and observation, I came up with the revision on the right." },
            { type: "image", highlight: "REVISE",  description: "I changed the piggy illustration to a calendar for providing users a overview of everyday expense and income of the selected month. " },
            { type: "image", src: "/images/project4/12.png", description: "" },
            { type: "image", highlight: "TEST CONCLUSION",  description: "Zoe took each process of the test seriously. She recently using an money recording application, therefore I think she was comparing the usability of the one she is using with my design. Based on her reaction summarized the revisions listing on the right." },
            { type: "image", highlight: "REVISE",  description: "I changed the default from a pencil mark to “0.00” in the input box of “Amount”. The purpose is to let users know instead of input dot themselves, the system will automatically show the dot when they input amount." },
            { type: "image", src: "/images/project4/13.png", header: "MOOD BOARD", description: "I was inspired by calming tones, modern typography, and clean design elements that convey simplicity, trust, and a peaceful aesthetic. I aim to incorporate these colors and shapes into my UI design." },
            { type: "image", src: "/images/project4/14.png", header: "STYLE GUIDE",  description: "Inspired by my mood board, my style guide defines the app’s design system, featuring a harmonious color palette, Roboto typography, and consistent UI components." },
            { type: "image", src: "/images/project4/15.png", header: "MID-FIDELITY WIREFRAMES", description: "" },
            { type: "image", src: "/images/project4/16_1.png", header: "High-FIDELITY WIREFRAMES", description: "" },
            { type: "image", src: "/images/project4/16_2.png", description: "The high-fidelity wireframes present the final design with polished visuals, incorporating the defined style guide. These screens highlight the app's interface and user-friendly features." },
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
