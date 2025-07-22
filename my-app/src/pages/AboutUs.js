import React from 'react';
import {Link} from 'react-router-dom';

import ProjectIntroCS from '../components/ProjectIntroCS';
import RightCS from '../components/RightCS';
import LeftCS from '../components/LeftCS';
import FullCS from '../components/FullCS';
import ThreeCS from '../components/ThreeCS';
import DoubleImgCS from '../components/DoubleImgCS';

import scrolling from '../assets/images/aboutus-scrolling.gif';
import scrollmap from '../assets/images/aboutus-scrollmap.png';
import clickmap from '../assets/images/aboutus-clickmap.png';
import personas from '../assets/images/aboutus-quotes.png';
import wireframe from '../assets/images/aboutus-wireframes.png';
import sketch from '../assets/images/aboutus-sketch.png';
import iteration1 from '../assets/images/aboutus-iteration1.png';
import iteration2 from '../assets/images/aboutus-iteration2.png';
import final from '../assets/images/aboutus-final.png';
import finalscroll from '../assets/images/aboutus-finalscroll.gif';

function AboutUs({ uxProjects, projectIndex}) {
    const project = uxProjects[projectIndex];
    const adjacentIndexes = [
        projectIndex > 0 ? projectIndex - 1 : null,
        projectIndex < uxProjects.length - 1 ? projectIndex + 1 : null
    ].filter(index => index !== null); // Remove nulls
    return (
        <div className="case-study__wrapper">
            <ProjectIntroCS project={project}/>
            <FullCS header="Overview" subtitle="The Restaurant Store is a major e-commerce supplier for food-service professionals who value speed, clarity, and reliability when choosing where to shop, but its dated About Us page left customers with more questions than answers." textContent={"I led the redesign of the About Us page to better reflect the company’s brand, simplify communication, and align content with real needs identified by research. I worked on this project with a small intern team from early ideation and research to launching it.\nThe result was a more strategic entry-point into the brand, designed to support informed decisions and convert interested visitors to loyal customers."}></FullCS>
            <FullCS className="case-study__bg" header="Problem Statement" subtitle="Busy foodservice professionals visit The Restaurant Store’s About Us page for fast, clear answers before making purchasing decisions. They are met with vague messaging and text overload, leaving them confused on how to get started with the brand and place their first order with confidence." textContent={"How might we create a more welcoming experience that builds trust, meets key user needs up front, and supports long-term customer relationships?"}></FullCS>
            <h2 className="case-study__section-title case-study__padding"><span class ="title__break">|</span>user research and problem discovery</h2>
            <RightCS  header="Heuristic Evaluation" subtitle="Before defining any goals or problems, we conducted an initial evaluation of the page to surface immediate usability issues." textContent={"Our evaluation revealed dense blocks of text, vague messaging, and minimal visual hierarchy observed in these key findings:"} listContent={"Page layout wasted valuable space, pushing content far down.\nThe fast-shipping graphic was irrelevant and distracted users, creating expectations that we had more locations than we did.\nUsers ignored text-heavy sections altogether, highlighting the need for scannable and goal aligned content."} imgLabel="Original page" img={scrolling} imgAlt={"Scrolling gif of The Restaurant Store's original About Us page, showing a long page with lots of text."}></RightCS>
            <DoubleImgCS  header="User Research" subtitle="With foundational knowledge of the page, we needed to understand and define our target audience." textContent={"We conducted both quantitative and qualitative research to better understand how users interact with the page, what they’re trying to accomplish, and friction points.\n Quantitative Quick Behavior Stats:"} listContent={"Demographics: 75% of sessions came from new users over a 30-day period, emphasizing the page’s importance as a first impression.\nScroll Depth: Average scroll depth was just 45%. Considering the page layout, this means only 25% of users reach the page’s most important content.\nClick Behavior: Our calls to action receive only 1.4% of clicks signalling issues with visibility, placement, and effectiveness."} imgLabel="Scroll Depth Heat Map" img={scrollmap} imgAlt={"Scroll map showing 50% mobile drop-off before passing the header and a 45% average scroll."} img2={clickmap} imgLabel2="Click Touch Map" imgAlt2={"Touch map showing only 1.4% of clicks on call to actions and 5% of clicks on non-interactive map graphics, highlighting user confusion."}></DoubleImgCS>
            {/*<LeftCS subtitle="Through session recordings, user traffic, and click maps, we identified common user goals." textContent={"We found that users visited the About Us page as an early step of their help journey but overwhelmingly left the page for Membership, FAQ, and contact pages, needing to scan multiple pages for answers.\nCommon user goals:"} listContent={"Find store locations to quickly know where to shop\nUnderstand membership requirements to know if the business is open to the public\nLocate support details such as contact or help information"} imgLabel="User Personas" img={personas} imgAlt={"User personas detailing users expecting to find crucial information on the About page and wanting upfront information to get started quickly."}></LeftCS>*/}
            <LeftCS header="Aligning User Problems and Goals" subtitle="We found that users visited the About Us page as an early step of their help journey but overwhelmingly left the page for Membership, FAQ, and contact pages." textContent={"With users needing to scan multiple pages for answers, we knew we weren't meeting their goals. We analyzed user traffic and recordings to identify these common user goals:"} listContent={"Find store locations to quickly know where to shop\nUnderstand membership requirements - is the business public?\nLocate support details such as contact or help information"} imgLabel="User Personas" img={personas} imgAlt={"User personas detailing users expecting to find crucial information on the About page and wanting upfront information to get started quickly."}></LeftCS>
            <ThreeCS header="Reframing Our Problem with Insights" subtitle="Our research clearly demonstrated that while the About Us page attracted high-interest visitors, it failed to support their key goals." textContent={"Research insights helped us convert user problems into opportunities, defining the guiding goals of our redesign:"}statTitle="Scannability" statText="Replace dense text with visuals and bite-sized content to match user browsing behavior." statTitle2="Goal-Aligned Content" statText2="Redefine our content strategy to focus on user needs like membership, locations, and support. " statTitle3="Location Clarity" statText3="Introduce an intuitive, expansion-friendly store directory to guide users."></ThreeCS>
            <h2 className="case-study__section-title case-study__bg case-study__padding"><span class ="title__break">| </span> wireframing and our iterative process</h2>
            {/*<LeftCS className="case-study__bg" header="Wireframes" subtitle="I turned our research findings into these first wireframes, connecting our insights to visuals that reflected our goals." textContent={"This collaborative process involved brainstorming with marketing and stakeholders to ensure alignment with company goals and gather feedback to drive continuous improvement."} img={wireframe} imgAlt={"A screenshot of our card sort grouping pages into the following categories: Services, About Us, Donations, Adoption, and Get Involved."} Link="https://www.figma.com/proto/s40jK91K2Zf4TxQrpOqPvH/About-Us-Page-Redesign?page-id=7%3A2034&node-id=4293-7798&viewport=146%2C355%2C0.14&t=BV5WjznkWOVakhO6-1&scaling=min-zoom&content-scaling=fixed" LinkText="View Lo-Fi Prototype"></LeftCS>*/}
            <DoubleImgCS className="case-study__bg" header="Sketches and Wireframes" subtitle="I turned our research findings into these first wireframes, connecting our insights to visual solutions." textContent={"This collaborative process involved brainstorming with marketing and stakeholders to ensure alignment with company goals and gather feedback to drive continuous improvement."} imgLabel="Early sketches" img={sketch} imgAlt={"Sketches on paper and a rough wireframe showing exploration and simplification of ideas."} img2={wireframe} imgLabel2="Responsive Wireframes" imgAlt2={"Resonsive wireframes showinf how the idea evolved across desktop, tablet, and mobile devices."} Link="https://www.figma.com/proto/s40jK91K2Zf4TxQrpOqPvH/About-Us-Page-Redesign?page-id=7%3A2034&node-id=4293-7798&viewport=146%2C355%2C0.14&t=BV5WjznkWOVakhO6-1&scaling=min-zoom&content-scaling=fixed" LinkText="View Lo-Fi Prototype"></DoubleImgCS>
            <RightCS className="case-study__bg" header="Iterating" subtitle="A key iteration made at this stage was scaling back our membership information, simplifying membership for every customer." textContent={"Iteration made our new page as simple and refined as we could get it.\n Stakeholder feedback showed our membership messaging was still too long and lacked clarity for different user types, so we streamlined our content.\nTo do this, we: "} listContent={"Combined our messaging with callouts, shortening the page by 20%\nCut out unnecessary copy to keep users engaged\nTailored the experience to meet the unique needs of both in-market and out-of-market users"} img={iteration1} imgAlt={"Before and after comparison showing improved hierarchy and clearer call to actions after iteration."}></RightCS>
            <LeftCS className="case-study__bg" subtitle="As our final iteration, we revamped our store locations to scale smarter." textContent={"To support The Restaurant Store’s 30 by 30 store expansion goal, we restructured our store directory for clarity and future growth.\nAdditionally, I collaborated with graphic design to ensure our store pin icon usage tied in with our updated map key, making it easier for users to know from a glance if their store was open or coming soon.\nThe result was a cleaner, scannable list that removed clutter while helping users easily find their local store."} img={iteration2} imgAlt={"Before and after comparisons showing stores organized by state and simplified to fit more stores as the business expands."} Link="https://www.figma.com/proto/s40jK91K2Zf4TxQrpOqPvH/About-Us-Page-Redesign?page-id=9%3A1295&node-id=2087-5699&viewport=678%2C369%2C0.15&t=RwNJQ7oUJni5NtwW-1&scaling=min-zoom&content-scaling=fixed&show-proto-sidebar=1" LinkText="View Iterated Prototype"></LeftCS>
            <h2 className="case-study__section-title case-study__padding"><span class ="title__break">| </span> final product and conclusion</h2>
            <FullCS img={final} imgAlt={"Responsive mockups of The Restaurant Store's About Us page redesign on laptop, tablet, and mobile devices."}></FullCS>
            <LeftCS header="Impact" subtitle="Our redesign helped increase user engagement and reduce confusion on the About Us page, fulfilling our goals." textContent={"After launch, I tracked user sessions and traffic to validate our designs through these findings:"} listContent={"Scroll depth improved from 45% to 65%. With our shorter page, this means more than half of visitors are viewing the full page.\nCall to action click rates increased by 75%, especially on mobile where engagement rose to 10%.\nMap confusion dropped sharply with fewer clicks and faster user flow.\nTraffic to secondary help and membership pages declined, suggesting better experience and user support."} imgLabel="Final Scroll-through" img={finalscroll} imgAlt={"Scrolling gif of the updated About Us page, showing scannable graphics and text, clear visual hierarchy, and 2x shorter scroll length."}></LeftCS>
            <div className="case-study__button-wrap case-study__padding">
                <a href="https://www.therestaurantstore.com/about-us" className="contactForm__button case-study__link">Live page here<i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <FullCS header="Conclusion" subtitle="Final thoughts:" textContent={"This project reinforced the value of user-centered design in strengthening customer relationships and supporting business growth. Through teamwork, research, and continuous iteration, we made meaningful improvements that better supported users and set the stage for an intuitive entry-point to the brand. \nAs the UI Designer, I led thoughtful, research-driven design decisions that not only elevated user experience but also reflected the needs of The Restaurant Store’s brand identity as a trusted, service-focused partner of foodservice professionals.\n I learned that when designing a product, early feedback and alignment with stakeholders is vital to stay aligned with business strategy.\n "}></FullCS>
            <section className="case-study__bg case-study__padding featured__wrapper">
                        <h2><span className="title__break">|</span> you may also enjoy</h2>
                            <div className="featured-projects__wrapper">
                                {adjacentIndexes.map((index) =>{
                                    const adjProject = uxProjects[index];
                                    return(
                                        <section className="portfolio__project--card portfolio__project--card-feature" key={index}>
                                        <div className="portfolio__project--info-feature">
                                            <img src={adjProject.image} alt={adjProject.imgAlt} className="featured__project-image"></img>
                                        </div>
                                        <div className="portfolio__project--info-feature">
                                            <h3 className="project__title">{adjProject.name}</h3>
                                                <ul className="project__skills--list">
                                                    {adjProject.skills.map((skill, skillIndex) => (
                                                        <li className="label-text" key={skillIndex}>{skill}</li>
                                                    ))}
                                                </ul>
                                                <section>
                                                    <Link className="portfolio-case__link" to={adjProject.link} onClick={() => window.scrollTo(0, 0)}>View Case Study
                                                    </Link>
                                                </section>
                                                                  
                                        </div>
                                        </section>
                                        )
                                        })}
                                        </div>
                                    </section>
        </div>
    );
}

export default AboutUs;