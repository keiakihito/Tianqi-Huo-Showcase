import Image from 'next/image';
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export async function generateMetadata(props:any){
    const {singleDocument} = await getSingleBlog(props);
    return {
        title: singleDocument.data.title,
        description: singleDocument.data.description,
    }
}

async function getSingleBlog(context: any){
    const {slug} = context.params;
    const data = await import(`../../../data/${slug}.md`);
    const singleDocument = matter(data.default);
    return{
        singleDocument: singleDocument
    }
}


const SingleBlog = async(props: any) =>{

    const {singleDocument} = await getSingleBlog(props);
    // console.log(singleDocument);
    getSingleBlog(props);
    return(
        <>
            <div>
                <Image src={singleDocument.data.image} alt = "blog-image" height = {500} width={1000} quality={90} priority = {true}/>
            </div>
            <div>
                <div>
                    <h1>Article page</h1>
                    <p>{singleDocument.data.data}</p>
                    <ReactMarkdown>{singleDocument.content}</ReactMarkdown>
                </div>
            </div>
        </>
    )
}

export default SingleBlog;

export async function generateStaticParams() {
    async function getAllBlogs() {
        const files = fs.readdirSync(path.join("data"));
        // console.log(files);
        const blogs = files.map((fileName) => {
            const slug = fileName.replace(".md", "");
            const fileData = fs.readFileSync(
                path.join("data", fileName),
                "utf-8"
            )
            // console.log(fileData);
            const{data} = matter(fileData);
            return {
                frontmatter: data,
                slug: slug,
            }
        })

        return {
            blogs: blogs
        }
    }
    const {blogs} = await getAllBlogs();
    const paths = blogs.map((blog) =>`/${blog.slug}`);
    return paths;

}