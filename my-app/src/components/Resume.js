import React from 'react';
import pdf from '../assets/images/josie-griffin-resume.pdf';

function Resume() {
    return (
        <div className="resume__page">
            <h1 className="resume__title"><span className="title__break">|</span> my resume</h1>
            <div className="pdf__wrap">
                <embed src={pdf} type="application/pdf" width="100%" height="600px" />
            </div>
        </div>
    );
}
export default Resume;