import React from 'react';
import {Link} from 'react-router-dom';

import ProjectIntroCS from '../components/ProjectIntroCS';
import RightCS from '../components/RightCS';
import LeftCS from '../components/LeftCS';
import FullCS from '../components/FullCS';
import ThreeCS from '../components/ThreeCS';
import DoubleImgCS from '../components/DoubleImgCS';

import protopersona from '../assets/images/cohabitat-proto-persona.png';
import affinitydiagram from '../assets/images/cohabitat-affinity.png';
import sketch from '../assets/images/cohabitat-sketches.png';
import onboarding from '../assets/images/cohabitat-onboarding.png';
import chores from '../assets/images/cohabitat-chores.png';
import expenses from '../assets/images/cohabitat-expenses.png';
import feedback from '../assets/images/cohabitat-quotes.png';
import iteration1 from '../assets/images/cohabitat-iteration.png';
import iteration2 from '../assets/images/cohabitat-final-iteration.png';
import final from '../assets/images/cohabitat-final.png';

function Cohabitat({ uxProjects, projectIndex}) {
    const project = uxProjects[projectIndex];
    const adjacentIndexes = [
        projectIndex > 0 ? projectIndex - 1 : null,
        projectIndex < uxProjects.length - 1 ? projectIndex + 1 : null
    ].filter(index => index !== null); // Remove nulls
    return (
        <div className="case-study__wrapper">
            <ProjectIntroCS project={project}/>
            <FullCS header="Overview" subtitle="Struggles among adult roommates to balance their home life are all too common. Our team felt adulting is hard enough and that roommates shouldn’t make it harder." textContent={"But through our research, we discovered most chore and task management apps are geared towards families with children – not adults cohabitating as equals. We set out to change that.\nWe saw an opportunity to create a solution built specifically for adult roommates, making it easy to divide chores, track shared expenses, and ultimately promote responsibility without passive-aggressive sticky notes or awkward conversions.\nBy focusing on a user-friendly experience tailored to an older audience with unique needs, we aim to reduce household fiction and help roomies live in harmony."}></FullCS>
            <FullCS className="case-study__bg" header="Problem Statement" subtitle="Roommates often find themselves juggling chores, bills, and expectations with no clear system in place. Without an easy way to divvy up responsibilities, minor tasks grow into major sources of conflict." textContent={"How might we create a friendly tool to foster discussion, communicate expectations, and share responsibilities to create joyful and harmonious homes where everyone feels valued and heard?"}></FullCS>
            <h2 className="case-study__section-title case-study__padding"><span class ="title__break">|</span> research and definition</h2>
            <RightCS  header="User Research" subtitle="Beginning with insight collection to define our app, we sought to understand user pain points, behavior, and interest." textContent={"We conducted five user interviews with the goal of understanding people’s past experience with roommates. Our main points of interest were:"} listContent={"What are some primary challenges people experience managing household chores and responsibilities?\nHow do users currently communicate with roommates (methods, tools, solutions)?\nWhat features or functions would users find most helpful in a household management app tailored to adult roommates?"} imgLabel="User Persona" img={protopersona} imgAlt={"A proto-persona named Jen used to conduct research listing needs, frustrations, and goals. Jen lives in a Philly townhouse with two roommates and hates chasing them around to get chores done."}></RightCS>
            <LeftCS header="Results" subtitle="By analyzing our interview insights and grouping similar feedback, we could identify features that met user needs." textContent={"We found that adults who share a household with others:"} listContent={"need an app to manage household chores because people disagree on how the chores should be split\nneed an app to manage shared expenses because it can help things run smoother and reduce conflict.\nneed an app to aid discussion/foster harmony because the home is a space for everyone."} img={affinitydiagram} imgStyle="case-study-image__no-radius" imgLabel="Affinity Diagram" imgAlt={"Affinity diagram showing that user insights support Cohabitat's problem statement. User needs are high in task management, expense splitting, and positive reinforcement."}> </LeftCS>
            <ThreeCS subtitle="For our MVP, we focused on these core features discovered from user interviews, a feature priority matrix, and ideal user flows." statTitle="Chore Completion" statText="Basic layouts of primary pages, showcasing habitat tasks and function." statTitle2="Positive Reinforcement" statText2="Built throughout app, rewarding users with tidy stars for completing tasks and encouraging messages." statTitle3="Expense Sharing" statText3="Core functionality for keeping track of and splitting shared expenses"></ThreeCS>
            <h2 className="case-study__section-title case-study__bg case-study__padding"><span class ="title__break">| </span> wireframing and prototyping</h2>
            <DoubleImgCS className="case-study__bg" header="Sketching and Wireframing" subtitle="Collaboratively sketching by hand kept ideation quick, simple, and loose." textContent={"Sketching and creating a collaborative mood board helped us form our ideas and bring our user flow to life, guiding us to the concepts that would shape our first wireframes."} imgLabel="Early sketches" img={sketch} imgAlt={"Paper sketches of task organization, expense splitting, and a user dashboard."} img2={onboarding} imgAlt2={"Onboarding wireframes explaining chore management, split expense tracking, and rewards and challenges."} imgLabel2="Onboarding wireframes"></DoubleImgCS>
            <DoubleImgCS className="case-study__bg" header="Our First Prototype" subtitle="With features defined from our research and a general flow sketched out, we wanted to see Cohabitat in action." textContent={"We utlized rapid prototyping in Figma to check our app's functionality during early iterations, making it easy to see the feasibility and usability of our ideas in real time. With core functionalities prototyped, we could get our app in front of our first testers."} imgStyle="case-study-image__no-radius" imgLabel="Chore management flow" img={chores} imgAlt={"Wireframes for creating a task, room views, and progress."} img2={expenses} imgLabel2="Expenses and dashboard" imgAlt2={"Wireframes for expense splitting, new expenses, and a user dashboard view."} Link="https://www.figma.com/proto/cUEp0424ReEasaQQHVjBpr/final-project?type=design&node-id=105-336&t=8cuKE9gBxza4VSmW-1&scaling=scale-down&page-id=103%3A333&starting-point-node-id=105%3A336&show-proto-sidebar=1&mode=design" LinkText="View low-fidelity prototype"></DoubleImgCS>
            <h2 className="case-study__section-title case-study__padding"><span class ="title__break">| </span> usability testing and iterating</h2>
            <RightCS  header="Usability Testing" subtitle="Testing was a key focus to ensure our app was easy to navigate and user-friendly." textContent={"We conducted testing with in two stages, focusing on three tasks to test the usability of our core features:"} listContent={"Completing the sign up and onboarding process\nCompleting an overdue task\nAdding a new shared grocery expense"} imgLabel="User feedback" img={feedback} imgAlt={"User feedback detailing confusing task disappearance, expense navigation frustrations, and confusion about urgency."}></RightCS>
            <LeftCS header="Lo-fi Testing Takeaways and Iterations" subtitle="We used valuable testing feedback to improve our product." textContent={"We had positive feedback about onboarding and general navigation, but users expressed confusion within key functions to complete goals.\nKey takeaways and iterations:"} listContent={"Users were confused by disappearing tasks, so we added an affirming message and smoother interactions.\nUsers needed a less overwhelming expense page, so we implemented a simpler tab system and balance.\nWe clarified confusing copy, sizing, and clickable elements to create a consistent overall experience"} imgLabel="Expense iterations" img={iteration1} imgAlt={"Wireframe showing expenses with an updated tab view to sort by pending, bills, and paid history."}></LeftCS>
            <FullCS header="Mid-fi Testing Takeaways" subtitle="Validating our iterations by putting them to the test, we revisited our tasks with fresh users." textContent={"Our greatest area of improvement observed in testing was with the new tab system in expenses, where we observed users completing tasks 50% faster. Our iterated prototype recieved overall positive feedback but we still found friction points.\n Key takeaways:"} listContent={"Users still struggled with understanding task organization and experienced scroll fatigue.\nUsers expected to see their newest expenses first, but in tasks, preferred urgency.\nUsers desired a more consistent experience between expense sharing and task management."} Link="https://www.figma.com/proto/cUEp0424ReEasaQQHVjBpr/final-project?type=design&node-id=261-6693&t=oyWAhoeFZaXRF6j8-1&scaling=scale-down&page-id=103%3A334&starting-point-node-id=261%3A6693&mode=design" LinkText="View mid-fidelity prototype"></FullCS>
            <RightCS  header="Final Iterations" subtitle="By analyzing and implementing the valuable feedback of our users, we increased task completion 2x." textContent={"To ensure user sucess from our final round of testing, we implemented the following changes influenced by our user insights:"} listContent={"We adopted the user-approved tab system for the tasks page to avoid scroll fatigue, achieving a consistent experience with expenses.\nWe further clarified some expense details, such as meanings with color and listing by most recent."} imgLabel="Chore iterations" img={iteration2} imgAlt={"A before and after screenshot of task page iterations. Scrolling to task sections has been replaced with a tab system organized by now, soon, and future."}></RightCS>
            <h2 className="case-study__section-title case-study__bg case-study__padding"><span class ="title__break">| </span> our final product</h2>
            <FullCS className="case-study__bg" img={final} imgAlt2={"Final mockups of Cohabitat, showing tasks, expenses, and new task creation with updated branding."}></FullCS>
            <div className="case-study__button-wrap case-study__bg case-study__padding">
                <a href="https://www.figma.com/proto/cUEp0424ReEasaQQHVjBpr/final-project?type=design&node-id=435-19607&t=mw4iZDE4rDUpP0M7-1&scaling=scale-down&page-id=103%3A335&starting-point-node-id=435%3A19607&mode=design" className="contactForm__button case-study__link">Final prototype here<i class="fa-solid fa-arrow-right"></i></a>
                <a href="https://docs.google.com/presentation/d/1Ub0w1h1oIiMQwqN8_zuHRa2mXgfmvA-WpwcSSFG2uNo/edit?usp=sharing" className="contactForm__button case-study__link button__secondary">Case study slidedeck here<i class="fa-solid fa-arrow-right"></i></a>
                
            </div>
            
            <FullCS className="case-study__bg" header="Conclusion" subtitle="Final thoughts:" textContent={"Collaborating, iterating often, and applying methodologies from our combined toolsets defined this case study for our team. We learned the continued importance of communication and feedback, be it from users or from your own network of peers.\n Future Development:"} listContent={"Continuing to iterate on expense features within our app is of top priority. Our user research showed that finances can be tricky for users and we want to make this experience as simple as possible for them.\nWe want to fully flesh out our reward system. We’ve given our users tidy stars, but now we want to get creative and give them practical use and value.\nOn user habitat dashboards, we've added in the future concept of challenges. Developing lessons and adding in content that fulfills user goals of communication support is our next step!"}></FullCS>
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

export default Cohabitat;