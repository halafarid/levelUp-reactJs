import React from 'react';
const Navbar = () => {
    
    return (

        <React.Fragment>

            <div>
                <nav className="fixed-top navbar navbar-expand-lg  py-3 border-bottom">
                    <div className="container">
                        <div className="logo">
                        </div>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item"><a href="#" className="nav-link text-uppercase font-weight-bold text-white">Home <span className="sr-only">(current)</span></a></li>
                                <li className="nav-item"><a href="#" className="nav-link text-uppercase font-weight-bold text-white">About</a></li>
                                <li className="nav-item"><a href="#" className="nav-link text-uppercase font-weight-bold text-white">Profile</a></li>
                                <li className="nav-item"><a href="#" className="nav-link text-uppercase font-weight-bold text-white">Following</a></li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-warning my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
                <div className="bg">
                    <div className="bg-layer">
                        <div className="col-md-18 bg-text">
                            <h1 className="text-white font-weight-bold">LevelUp Free Online Training Courses</h1>
                            <br />
                            <p className="h4 text-white">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant, eu pro alii error homero.</p>
                            <br />
                            <button className="btn btn-info btn-lg " type="submit">Get Started!</button>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default Navbar;