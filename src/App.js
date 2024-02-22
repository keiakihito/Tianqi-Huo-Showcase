import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Hello World! These are Tianqi Huo's sample work</p>
            </header>


            {/*project 1*/}
            <div className="project">
                <p>Clickable Prototype Task 1</p>
                <iframe
                    width="375"
                    height="812"
                    src="https://xd.adobe.com/embed/b5c53ab3-14e2-4866-81f4-ff095190eaaf-e096/"
                    frameBorder="0"
                    allowFullScreen
                    title="Project 1 Description">
                </iframe>
            </div>

            {/*project2*/}
            <div className="project">
                <p>Clickable Prototype Task 2</p>
                <iframe
                    width="375"
                    height="812"
                    src="https://xd.adobe.com/embed/e3363f98-3603-4607-97ea-aa0b5151aad2-b665/"
                    frameBorder="0"
                    allowFullScreen
                    title="Project 2 Description">
                </iframe>
            </div>

            {/*project3*/}
            <div className="project">
                <p>Clickable Prototype Task 3</p>
                <iframe
                    width="375"
                    height="812"
                    src="https://xd.adobe.com/embed/53128845-27b7-4e95-be24-31c78a3c4e1e-0641/"
                    frameBorder="0"
                    allowFullScreen
                    title="Project 3 Description">
                </iframe>
            </div>

            {/*video*/}
            <div className="video">
                <p>After Effect Sample work</p>
                <video width="820" height="640" controls>
                    <source src="AsMod4.2_TianqiHuo.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default App;
