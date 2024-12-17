import Link from "next/link";

export const metadata = {
    title: "Contact",
    description: "This is contact page",
}

const Contact = () => {
    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <h1>Contact</h1>
                    <p>Feel free to reach me out</p>
                    <form action="https://formspree.io/f/xxxxxxx" method="POST">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" required/>
                        <label htmlFor="email">E-mail Address</label>
                        <input type="email" name="email" id="email" required/>
                        <label htmlFor="textarea">Description</label>
                        <textarea name="message" rows={10} id="textarea" required></textarea>
                        <div className="ctaButton">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
