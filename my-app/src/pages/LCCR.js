import React from 'react';
import {Link} from 'react-router-dom';

import ProjectIntroCS from '../components/ProjectIntroCS';
import RightCS from '../components/RightCS';
import LeftCS from '../components/LeftCS';
import FullCS from '../components/FullCS';
import ThreeCS from '../components/ThreeCS';
import DoubleImgCS from '../components/DoubleImgCS';

import protopersona from '../assets/images/lccr-persona.png';
import quotes from '../assets/images/lccr-quotes.png';
import survey1 from '../assets/images/lccr-survey1.png';
import survey2 from '../assets/images/lccr-survey2.png';
import survey3 from '../assets/images/lccr-survey3.png';
import survey4 from '../assets/images/lccr-survey4.png';
import evaluation from '../assets/images/lccr-evaluation.png';
import cardsort from '../assets/images/lccr-card-sort.jpg';
import sketch from '../assets/images/lccr-sketch.png';
import sketch2 from '../assets/images/lccr-sketch2.png';
import iterations from '../assets/images/lccr-iterations.gif';
import final from '../assets/images/lccr-final.png';

function LCCR({ uxProjects, projectIndex}) {
    const project = uxProjects[projectIndex];
    const adjacentIndexes = [
        projectIndex > 0 ? projectIndex - 1 : null,
        projectIndex > 0 ? projectIndex - 3 : null
    ].filter(index => index !== null); // Remove nulls
    return (
        <div className="case-study__wrapper">
            <ProjectIntroCS project={project}/>
            <FullCS header="Overview" subtitle="Loving Care Cat Rescue is a pillar in their community, providing care to every cat, but their outdated website leaves their mission behind." textContent={"Loving Care Cat Rescue, a 501c3 local nonprofit, is dedicated to providing love, care, and homes to every cat that comes through their rescue. They are an all-volunteer organization, relying on community donations and support to save the lives of rescued cats.\nTo make matters more urgent, they do not have a physical location and rely entirely on fosters. Euthanasia is not an option at LCCR."}></FullCS>
            <FullCS className="case-study__bg" header="Problem Statement" subtitle="Cat lovers with a heart for adoption or supporting Loving Care Cat Rescue encounter frustrating usability barriers on their website, making it hard for them to get involved in fostering, adopting, and donating." textContent={"How might we streamline donations, drive community interest in the organization’s mission, and showcase cats in need of a home to ultimately get cats adopted?"}></FullCS>
            <h2 className="case-study__section-title case-study__padding"><span class ="title__break">|</span> research and definition</h2>
            <RightCS  header="User Research" subtitle="To kick off our research, we conducted user interviews to reveal their goals, frustrations, and feelings about pet rescues." textContent={"Most importantly, our interviews consistently identified trust as a core user need to engage with rescues by giving time and money. Transparency about donations, values, and nonprofit credentials were essential.\nAdditionally, we found that interested supporters:"} listContent={"Prioritize adopting from a good organization\nWant to browse adoptable pets easily\nEnjoy the convenience of mobile devices"}imgLabel="User-Persona" img={protopersona} imgDescription="Our user persona synthesized from user insights to guide our redesign." imgAlt={"Our proto-persona Jane wants to adopt a kitten but needs a convenient web experience to browse on her breaks with reliable information to make the search easier."}></RightCS>
            <DoubleImgCS header="Survey Results" subtitle="To further understand our users and align our redesign with their insights, we sent out a survey to quantify their experiences, pain points, and expectations." textContent={"Our survey results strengthened our interview findings, showing that 47.4% of users saw lack of trust for organizations and donation use as a barrier to donation.\n Similarly, 81.8% of users claimed that transparent information from the organization itself was important when considering adoption. All of our users claimed that a rescue website's visual appearance and usability factored into their trust and credibility."} imgLabel="Donation barriers" img={survey1} imgAlt={"Pie chart for donation barriers survey results highlighting 42.1% donation trust, 5.4% organizational trust, and 31.3% uncertainty about donation impact."} img2={survey2}  imgLabel2="Important adoption aspects" imgAlt2={"Bar chart for important adoption information survey results highlighting 81.9% transparency in organization information, 72.7% pet information, and 63.6% adoption fees and health history."}></DoubleImgCS>
            <DoubleImgCS textContent={"More key user survey takeaways:"} listContent={"36.8% of users dropped out of adoption due to confusing websites or processes\n72.6% of users wanted information about the organization’s mission\n45.5% of users wanted information about getting involved in volunteering and donating"} imgLabel="Helpful information" img={survey3} imgAlt={"Bar chart survey results show most helpful information to be 72.7% organization mission, 45.5% volunteering and donation, and 54.6% success stories."} img2={survey4}  imgLabel2="Adoption drop-offs" imgAlt2={"Pie chart showing factors preventing adoption to be 36.8% confusing websites and 31.6% being lack of information."}></DoubleImgCS>
            <RightCS  header="Heuristic Evaluation" subtitle="Auditing the current home page, we looked at navigation, content, and structure to grasp usability errors." textContent={"For users trying to get involved, their current experience is overwhelming. The page is crowded with information with no visual hierarchy and cluttered with donation prompts.\nLack of focus is impacting Loving Care's communication goals.\nOther takeaways:"} listContent={"Completely unresponsive on mobile devices\nPets are not featured at all, only accessible by petfinder\nOpportunities to get involved are buried in complicated navigation"} imgLabel="Original site audit" img={evaluation} imgAlt={"An annotated screenshot of Loving Care Cat Rescue's original website showing excessive donation information in many areas, a navigation with 15+ links, and no visual hiearchy."}></RightCS>
            <h2 className="case-study__section-title case-study__bg case-study__padding"><span class ="title__break">| </span> wireframing and low fidelity</h2>
            <LeftCS className="case-study__bg" header="Information Architecture" subtitle="From our research and ideation, we focused our redesign on the homepage to create a meaningful hub for involvement, a focused donation flow, and a revamped navigation." textContent={"To organize our site's content, we conducted a card sort to give our new navigation logical structure.\nCategorization decluttered our navigation bar from a list of over 20 pages to 5 helpful categories."} imgLabel="Card sort" img={cardsort} imgAlt={"A screenshot of our card sort grouping pages into the following categories: Services, About Us, Donations, Adoption, and Get Involved."}></LeftCS>
            <DoubleImgCS className="case-study__bg" header="Sketches Through Low Fidelity" subtitle="Collaboratively sketching as a team provided us the provided us the space to explore ideas quickly, minimizing resource investment and maximizing creativity." textContent={"Thoughtfully curating concepts that resonated with us in moodboards and our sketches paved the way to our first prototype."} imgLabel="Sketches and wireframes" img={sketch} imgAlt={"Collected drawings of the homepage layout and a sample lo-fi wireframe."} img2={sketch2} imgLabel2="Low fidelity prototype" imgAlt2={"Responsive wireframes from our first prototype showing content and call to actions."} Link="https://www.figma.com/proto/ofA43UYm4hiy4jShm0rHOm/nonprofit-group-4?type=design&node-id=122-1687&t=oKx4MqRGSApZijQF-1&scaling=min-zoom&page-id=78%3A875&starting-point-node-id=122%3A1687&show-proto-sidebar=1&mode=design" LinkText="View Lo-Fi Prototype"></DoubleImgCS>
            <h2 className="case-study__section-title case-study__padding"><span class ="title__break">| </span> testing and iterating</h2>
            <LeftCS header="Usability Testing Results" subtitle="To make sure our redesign was user-friendly, we conducted task-based testing focused on two primary areas: site navigation and the donation flow." textContent={"Key takeaways:"} listContent={"Navigation: Users had a 100% navigational task success rate, easily locating key information.\nDonation Flow: Users found the donation CTA copy ambiguous, creating uncertainty that disrupted donations. Auto-scrolling also made users lose their place, creating frustration.\nAvailable Cats Visibility: Users overlooked the option to browse cats in the header and thought available cats needed more of a spotlight. "} imgLabel="User feedback quotes" img={quotes} imgAlt={"User feedback detailing confusion with the Give Back button and wanting to see available cats in the success story section."}></LeftCS>
            <RightCS header="Iterations" subtitle="Based on usability insights, we implemented key design updates to improve clarity and user experience." textContent={"Key iterations:"} listContent={"To prioritize adoptable cats, we replaced the success stories carousel with available cats to put adoptable kitties front and center.\nWe revised our hero with clarified CTA text to clearly communicate donation need and improve user confidence.\nTo prevent scrolling disorientation, we transitioned the donation experience into a modal window."} imgLabel="Mid-Fi Iterated Prototype" img={iterations} Link="https://www.figma.com/proto/ofA43UYm4hiy4jShm0rHOm/nonprofit-group-4?type=design&node-id=434-7363&t=NGvFJ3Nc9e4Y5L0a-1&scaling=min-zoom&page-id=434%3A7362&starting-point-node-id=766%3A5499&mode=design" LinkText="View Our Mid-Fidelity Prototype" imgAlt={"A scroll-through gif of the iterated homepage, showing a new hero, CTA button, and available cats carousel."}></RightCS>
            <FullCS header="Validating Our Improvements" subtitle="To measure the effectiveness of our updates, we conducted A/B testing on our new hero and donation flow." textContent={"Users who recieved the new design demonstrated a higher click through rate, supporting our design decisions. Participants responded positively to the button interaction animation and streamlined modal experience, noting it felt smooth and intuitive.\nHowever, both test groups commented that the design felt disconnected due to excessive white space, highlighting one more improvement to make as we finalized our prototype."}></FullCS>
            <h2 className="case-study__section-title case-study__bg case-study__padding"><span class ="title__break">| </span> our final product</h2>
            <FullCS className="case-study__bg" img={final} imgAlt={"Responsive mockups of Loving Care Cat Rescue's redesign on laptop, tablet, and mobile devices."}></FullCS>
            <div className="case-study__button-wrap case-study__padding case-study__bg">
                <a href="https://www.figma.com/proto/ofA43UYm4hiy4jShm0rHOm/nonprofit-group-4?page-id=3241%3A4419&node-id=3241-4860&viewport=-814%2C1042%2C0.25&t=J7pzbU16V3Jn3B35-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3241%3A4860&show-proto-sidebar=1" className="contactForm__button case-study__link">Full prototype here<i class="fa-solid fa-arrow-right"></i></a>
                <a href="https://docs.google.com/presentation/d/1QcE_BvcXOFG2qXOvzdsLnifwmJxA5LwexuQ6hPGgb10/edit?usp=sharing" className="contactForm__button case-study__link button__secondary">Case study slidedeck here<i class="fa-solid fa-arrow-right"></i></a>
                
            </div>
            <FullCS className="case-study__bg" header="Conclusion" subtitle="Final thoughts:" textContent={"It's important to put down as many ideas as possible when brainstorming with a team. Our prototype's success came from rounds of iteration and feedback sessions.\nWhen designing a product, it is vital to fall back on strategic thinking and user insights. By utilizing testing and feature prioritization aligned with our core business goals, we brought clarity to our prototype. \nFuture Development:"} listContent={"Expand the redesign to the rest of the site following the UI style guide and future user tests.\nBuild a donation and adoption application system into the site.\nRefine the microinteractions and implement more across the site to improve the browsing experience."}></FullCS>
            <section className="case-study__padding featured__wrapper">
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

export default LCCR;