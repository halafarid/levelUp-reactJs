import React from 'react';
import { FiUsers } from 'react-icons/fi';
import { FaFlask, FaComments, FaMedapps } from 'react-icons/fa';
import { AiFillPlayCircle } from 'react-icons/ai'

const About = () => {
    return (
        <React.Fragment>
            <div className="about">
                <div className="about__section">
                    <h2 className="about__title">Welcome to Edusite</h2>
                    <h3 className="about__title about__title--white">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.</h3>
                    <br />
                    <div className="about__text">
                        <div>
                            <div className="about__paragraph">
                                <div><div className="about__feature"><FaFlask className="about__feature-icon" /></div></div>
                                <div>
                                    <h4 className="about__title about__title--secondary">Online Courses</h4>
                                    <p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
                                </div>
                            </div>
                            <div className="about__paragraph">
                                <div><div className="about__feature"><FiUsers className="about__feature-icon" /></div></div>
                                <div><h4 className="about__title about__title--secondary">Expert Teachers</h4>
                                    <p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
                                </div>
                            </div>
                            <div className="about__paragraph">
                                <div><div className="about__feature"><FaComments className="about__feature-icon" /></div></div>
                                <div><h4 className="about__title about__title--secondary">Community</h4>
                                    <p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about__img">
                    <img className="about__img-community" src={require("../../images/about.png")} alt="about" />
                </div>
            </div> <br/><br/>

            <div className="InfoSection">
                <div className="InfoSection__header">
                    <h2 className="InfoSection__text">Why Level-Up</h2>
                    <p className="InfoSection__text InfoSection__text--p">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.</p>

                </div>
                <div className="InfoSection__infoContainer">
                    <div className="col-md-4">
                        <div className="InfoSection__sub">
                            <FaFlask className="InfoSection__icon"></FaFlask>
                            <div className="InfoSection__sub--content">
                                <h4 className="InfoSection__text InfoSection__text--secondary">Online Courses</h4>
                                <p className="InfoSection__text--info">Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="InfoSection__sub">
                            <FaMedapps className="InfoSection__icon"></FaMedapps>
                            <div className="InfoSection__sub--content">
                                <h4 className="InfoSection__text InfoSection__text--secondary">Expert Teachers</h4>
                                <p className="InfoSection__text--info">Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="InfoSection__sub">
                            <FaComments className="InfoSection__icon"></FaComments>
                            <div className="InfoSection__sub--content">
                                <h4 className="InfoSection__text InfoSection__text--secondary">Comunity</h4>
                                <p className="InfoSection__text--info">Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="InfoSection__hr"></hr>

                <div className="InfoSection__sub--content">

                    <div className="row InfoSection__infoContainer">
                        <div className="col-md-6">
                            <h3 className="InfoSection__text">Persius imperdiet incorrupte et qui, munere nusquam et nec.</h3>
                            <p className="InfoSection__text--info" >Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.</p>
                            <p className="InfoSection__text--color">No vel facete sententiae, quodsi dolores no quo, pri ex tamquam interesset necessitatibus. Te denique cotidieque delicatissimi sed. Eu doming epicurei duo. Sit ea perfecto deseruisse theophrastus. At sed malis hendrerit, elitr deseruisse in sit, sit ei facilisi mediocrem.</p>
                            <a className="FixedSection__btn InfoSection__infoContainer--space">Contact Us</a>
                        </div>
                        <div className="col-md-5 col-md-offset-1 InfoSection__trans">
                            <a className="InfoSection__vedio">
                                <div className="InfoSection__vedio--img" ></div>
                                <AiFillPlayCircle className="InfoSection__vedio--icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default About;