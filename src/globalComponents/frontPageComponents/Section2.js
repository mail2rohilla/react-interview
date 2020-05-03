import React, {Component} from 'react';

class Section2 extends Component {

    render (){
        return (
            <section id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <h2>About this page</h2>
                            <p className="lead">This is a great place to talk about your webpage. This template is
                                purposefully unstyled so you can use it as a boilerplate or starting point for you own
                                landing page designs! This template features:</p>
                            <ul>
                                <li>Clickable nav links that smooth scroll to page sections</li>
                                <li>Responsive behavior when clicking nav links perfect for a one page website</li>
                                <li>Bootstrap's scrollspy feature which highlights which section of the page you're on
                                    in the navbar
                                </li>
                                <li>Minimal custom CSS so you are free to explore your own unique design options</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


export {Section2}