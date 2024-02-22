import './App.css';
import * as pdfjsLib from 'pdfjs-dist/webpack';
import { useEffect, useRef } from 'react';

function App() {
    const pdfContainerRef = useRef(null); // Reference to the container for PDF canvases

    // Function to render all pages of the PDF
    const renderPDF = async (url) => {
        try {
            const pdf = await pdfjsLib.getDocument(url).promise;
            for(let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                // Create a canvas for each page
                const canvas = document.createElement('canvas');
                canvas.id = `pdfCanvas-${pageNum}`;
                pdfContainerRef.current.appendChild(canvas);

                const page = await pdf.getPage(pageNum);
                const viewport = page.getViewport({scale: 1.5});
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                const renderContext = {
                    canvasContext: context,
                    viewport: viewport,
                };
                await page.render(renderContext).promise;
            }
        } catch (error) {
            console.error('Error rendering PDF:', error);
        }
    };

    // useEffect to render PDF after component mounts
    useEffect(() => {
        const pdfUrl = 'Huo_Tianqi_Final.pdf'; // Change this to the path of your PDF
        renderPDF(pdfUrl);
    }, []);

    return (
        <div className="App">
            {/*<header className="App-header">*/}
            {/*    <p>Hello World! These are Tianqi Huo's sample work</p>*/}
            {/*</header>*/}

            {/* PDF Display Container */}
            <div className="pdf-display" ref={pdfContainerRef}>
                {/* Canvases will be appended here */}
            </div>

        </div>
    );
}

export default App;
