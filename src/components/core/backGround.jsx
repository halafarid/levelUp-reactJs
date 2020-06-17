import React from 'react';
import {Button} from 'react-bootstrap';

const BackGround = () => {
    return (  
        <React.Fragment>
            <div className="bg">
                <div className="bg-layer">
                    <div className="col-md-18 bg-text">
                        <h1 className="text-white font-weight-bold">LevelUp Free Online Training Courses</h1>
                        <br />
                        <p className="h4 text-white">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant, eu pro alii error homero.</p>
                        <br />
                        <Button className="btn btn--secondary btn--pd">Get Started!</Button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default BackGround;