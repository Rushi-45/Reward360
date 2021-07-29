import { Container } from '@material-ui/core';
import '../../App.css'
import github from "super-tiny-icons/images/svg/github.svg";
import linkedin from "super-tiny-icons/images/svg/linkedin.svg";
import twitter from "super-tiny-icons/images/svg/twitter.svg";
import instagram from "super-tiny-icons/images/svg/instagram.svg";
import gmail from "super-tiny-icons/images/svg/gmail.svg";
import profilePic from '../../images/rc.jpg';

function AboutMe() {
    const centered = {
        textAlign: 'center',
    };
    const centeredPara1 = {
        textAlign: 'center',
        color: 'grey',
    };
    const centeredPara2 = {
        textAlign: 'center',
        color: 'purple',
        fontSize: '2vh',
    };
    const verticalLine = {        
        marginTop: '10px',
        borderLeft: ' 1px solid black',
        height: 500,
    };
    
    return (
        <Container className="py-5">
            <div className="box">
                <div className="row">
                    <div className="m-5 col-md-2 text-white">
                        <img src={profilePic} className="rounded-circle" alt="Profile Image" />
                        <br />
                        <br />
                        <h5 style={centered}>Man Parvesh Singh Randhawa</h5>
                        <p style={centeredPara1}>CS Graduate Student</p>
                        <p style={centeredPara2}>The University Of Texas, Dallas</p>
                        <div className="mt-5 mx-auto">
                            <a href="mailto:peksen.eren@gmail.com">
                                <img className="social-link" alt="gmail" src={gmail} />
                            </a>
                            <a href="https://www.linkedin.com/" target="blank">
                                <img className="social-link" alt="linkedin" src={linkedin} />
                            </a>
                            <a href="https://github.com/" target="blank">
                                <img className="social-link" alt="github" src={github} />
                            </a>
                            <a href="https://twitter.com/" target="blank">
                                <img className="social-link" alt="twitter" src={twitter} />
                            </a>
                            <a href="https://www.instagram.com/" target="blank">
                                <img className="social-link" alt="instagram" src={instagram} />
                            </a>
                        </div>
                    </div>

                    <p style={verticalLine}></p>

                    <div className="m-5 col-md-8">
                        <p><b>Biography</b></p>
                        <p>I am a Graduate student in the Department of Computer Science at the University of Texas at Dallasgraduating in May 202. J have a Bachelor of Technology degree from the Indian institue of Technology (IIT) Guwahati</p>
                        <p>Previously, I wokred at Works Applications, Signapore as a Software Engineer, where i worked on delivering central libraries, micorservices and distributed multi-tenant architecture to thousands of developers inside the company who utilized them to build various products for our customers. Aside from work, I am also anopen-source enthusiast and have created projects that were listed in Github trending.</p>
                        <p>My interests lie in solving problems related to large-scale distributed software systems.</p>
                        {/* <Link to="/projects">my github projects</Link> */}
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default AboutMe;
