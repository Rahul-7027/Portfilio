import React from 'react'

const Port = (props) => {
    return (
        <>
            <div>
                {/* <!--===== HEADER =====--> */}
                <header className="l-header">
                    <nav className="nav bd-grid">
                        <div>
                            <a href="#" className="nav__logo">{props.name}</a>
                        </div>

                        <div className="nav__menu" id="nav-menu">
                            <ul className="nav__list">
                                <li className="nav__item"><a href="home" className="nav__link active">Home</a></li>
                                <li className="nav__item"><a href="about" className="nav__link">About</a></li>
                                <li className="nav__item"><a href="skills" className="nav__link">Skills</a></li>
                                <li className="nav__item"><a href="work" className="nav__link">Work</a></li>
                                <li className="nav__item"><a href="contact" className="nav__link">Contact</a></li>
                            </ul>
                        </div>

                        <div className="nav__toggle" id="nav-toggle">
                            <i className='bx bx-menu'></i>
                        </div>
                    </nav>
                </header>

                <main className="l-main">
                    {/* <!--===== HOME =====--> */}
                    <section className="home bd-grid" id="home">
                        <div className="home__data">
                            <h1 className="home__title">Hi,<br/>I'am <span className="home__title-color">{props.name}</span><br/> Web Designer And<br/> <span className='home__title-color'>{props.developer}</span></h1>

                            <a href="#" className="button">Contact</a>
                        </div>

                        <div className="home__social">
                            <a href="" className="home__social-icon"><i className='bx bxl-linkedin'></i></a>
                            <a href="" className="home__social-icon"><i className='bx bxl-behance' ></i></a>
                            <a href="" className="home__social-icon"><i className='bx bxl-github' ></i></a>
                        </div>

                        <div className="home__img">
                            <svg className="home__blob" viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <mask id="mask0" mask-type="alpha">
                                    <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                                </mask>
                                <g mask="url(#mask0)">
                                    <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                                    <image className="home__blob-img" x="50" y="60" href="" />
                                    <img src="../port1.jpeg" className="home__blob-img" x="50" y="60" alt="" />
                                </g>
                            </svg>
                        </div>
                    </section>

                    {/* <!--===== ABOUT =====--> */}
                    <section className="about section " id="about">
                        <h2 className="section-title">About</h2>

                        <div className="about__container bd-grid">
                            <div className="about__img">
                                <img src="assets/img/about.jpg" alt="" />
                            </div>

                            <div>
                                <h2 className="about__subtitle">I'am <span className='home__title-color'>{props.name}</span></h2>
                                <p className="about__text"><b>A React JS developer with 2 years of experience is expected to have a strong understanding of React JS core concepts and be able to build and maintain complex React applications. They should also have experience with popular React libraries and frameworks, as well as unit testing and performance optimization techniques..Experience working with version control systems like Git and collaboration tools like GitHub or GitLab.</b></p>
                            </div>
                        </div>
                    </section>

                    {/* <!--===== SKILLS =====--> */}
                    <section className="skills section" id="skills">
                        <h2 className="section-title">Skills</h2>

                        <div className="skills__container bd-grid">
                            <div>
                                <h2 className="skills__subtitle">Profesional Skills</h2>
                                <p className="skills__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit optio id vero amet, alias architecto consectetur error eum eaque sit.</p>
                                <div className="skills__data">
                                    <div className="skills__names">
                                        <i className='bx bxl-html5 skills__icon'></i>
                                        <span className="skills__name">HTML5</span>
                                    </div>
                                    <div className="skills__bar skills__html">

                                    </div>
                                    <div>
                                        <span className="skills__percentage">100%</span>
                                    </div>
                                </div>
                                <div className="skills__data">
                                    <div className="skills__names">
                                        <i className='bx bxl-html5 skills__icon'></i>
                                        <span className="skills__name">CSS</span>
                                    </div>
                                    <div className="skills__bar skills__html">

                                    </div>
                                    <div>
                                        <span className="skills__percentage">100%</span>
                                    </div>
                                </div>
                                <div className="skills__data">
                                    <div className="skills__names">
                                        <i className='bx bxl-html5 skills__icon'></i>
                                        <span className="skills__name">JAVASCRIPT (ES6)</span>
                                    </div>
                                    <div className="skills__bar skills__html">

                                    </div>
                                    <div>
                                        <span className="skills__percentage">100%</span>
                                    </div>
                                </div>
                                <div className="skills__data">
                                    <div className="skills__names">
                                        <i className='bx bxl-html5 skills__icon'></i>
                                        <span className="skills__name">REACT JS AND REDUX</span>
                                    </div>
                                    <div className="skills__bar skills__html">

                                    </div>
                                    <div>
                                        <span className="skills__percentage">100%</span>
                                    </div>
                                </div>
                                <div className="skills__data">
                                    <div className="skills__names">
                                        <i className='bx bxl-html5 skills__icon'></i>
                                        <span className="skills__name">BOOTSTRAP</span>
                                    </div>
                                    <div className="skills__bar skills__html">

                                    </div>
                                    <div>
                                        <span className="skills__percentage">100%</span>
                                    </div>
                                </div>
                                <div className="skills__data">
                                    <div className="skills__names">
                                        <i className='bx bxl-html5 skills__icon'></i>
                                        <span className="skills__name">JAVA</span>
                                    </div>
                                    <div className="skills__bar skills__html">

                                    </div>
                                    <div>
                                        <span className="skills__percentage">100%</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <img id='myimg' src="https://cdn.technadu.com/wp-content/uploads/2018/06/behind_the_mac.jpg" alt="" className="skills__img" />
                            </div>
                        </div>
                    </section>

                    {/* <!--===== WORK =====--> */}
                    <section className="work section" id="work">
                        <h2 className="section-title">Work</h2>

                        <div className="work__container bd-grid">
                            <a href="" className="work__img">
                                <img src="https://www.extensiv.com/hubfs/Skubana/Blog%20Pages/Imported_Blog_Media/inventory-management-checklist-e1580929618538-2-2.jpeg" alt="" />
                            </a>
                            <a href="" className="work__img">
                                <img src="https://rebeccaparen.files.wordpress.com/2020/08/pexels-photo-373076-1.jpeg?w=1568" alt="" />
                            </a>
                            <a href="" className="work__img">
                                <img src="https://www.new-perspective-counseling.com/wp-content/uploads/2020/04/NPC-Online-Therapy.jpg" alt="" />
                            </a>
                            <a href="" className="work__img">
                                <img src="https://static.wixstatic.com/media/11062b_8bfaa3d6762740aebf1cfae47d905c3a~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg" alt="" />
                            </a>
                            <a href="" className="work__img">
                                <img src="https://blog.accu-time.com/hubfs/AccuTimeSystems_May2018%20/Images/blog/pexels-photo-392018-1200x800.jpeg" alt="" />
                            </a>
                            <a href="" className="work__img">
                                <img src="https://media.muckrack.com/images/1692892455.7908103-this_week_in_bad_pr_pitches.width-800.jpg" alt="" />
                            </a>
                        </div>
                    </section>

                    {/* <!--===== CONTACT =====--> */}
                    <section className="contact section" id="contact">
                        <h2 className="section-title">Contact</h2>

                        <div className="contact__container bd-grid">
                            <form action="" className="contact__form">
                                <input type="text" placeholder="Name" className="contact__input" />
                                <input type="mail" placeholder="Email" className="contact__input" />
                                <textarea name="" id="" cols="0" rows="10" className="contact__input"></textarea>
                                <input type="button" value="SUBMIT" className="contact__button button" />
                            </form>
                        </div>
                    </section>
                </main>

                {/* <!--===== FOOTER =====--> */}
                <footer className="footer">
                    <p className="footer__title">{props.name}</p>
                    <div className="footer__social">
                        <a href="#" className="footer__icon"><i className='bx bxl-facebook' ></i></a>
                        <a href="#" className="footer__icon"><i className='bx bxl-instagram' ></i></a>
                        <a href="#" className="footer__icon"><i className='bx bxl-twitter' ></i></a>
                    </div>
                    <p className="footer__copy">&#169; rahulbhati0202@gmail.com . All rigths reserved</p>
                </footer>
            </div>
        </>
    )
}

export default Port
