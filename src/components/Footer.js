import React, { Fragment } from 'react';
import { Button} from 'react-bootstrap'

function Footer() {
    return (
        <Fragment>
            <footer>
                <div className="container">
                    <div className="box-footer">
                        <div className="reseaux">
                            <a href="https://www.linkedin.com/in/jamila-hammani/" className="text-light" target="_blank"><i className="icon fab fa-linkedin "></i></a>
                            <a href="https://github.com/JamilaaH" className="text-light" target="_blank"><i className="icon fab fa-github "></i></a>
                            <a href="https://www.instagram.com/jamila.hmn/" className="text-light" target="_blank"><i className="icon fab fa-instagram "></i></a>
                        </div>
                    </div>
                </div>
                <div className=" pb-4 text-center">
                    <span className = " copy font-weight-light">
                        &copy; All rights reserved <br />2021</span>
                </div>
            </footer>
        </Fragment>
    );
}

export default Footer;