import React, {Component} from 'react';

class SignUpComponent extends Component {

    render (){
        return (

            <div>
                <div id="services" className="bg-light" style={{width  : "50%", margin : "auto"}}>
                    <div className="card p10" style={{height : "100%", width : "50%", display : "inline-block"}}>
                        <div className="card-body" style={{height : "100%"}}>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email"
                                            placeholder="Enter email" />
                                        <small id="emailHelp" className="form-text text-muted">Some warning text/ confirmation text</small>
                                </div>
                                <div>
                                    <div >
                                        <label htmlFor="passwd">Password</label>
                                        <input type="password" className="form-control" id="passwd"
                                               placeholder="Password" />
                                    </div>
                                    <div>
                                        <div style={{width : "50%", textAlign : "left", display: "inline-block"}}>
                                            <a>
                                                <small>New to website. Register</small>
                                            </a>
                                        </div>
                                        <div style={{width : "50%", textAlign: "right", display: "inline-block"}}>
                                            <a>
                                                <small>Forgot Password</small>
                                            </a>
                                        </div>
                                    </div>
                                    {/*<span  style={{position : "relative", right : 0, top : 0}}>*/}
                                        {/*<small>Forgot Password</small>*/}
                                    {/*</span>*/}
                                </div>

                                <button type="submit" style={{marginTop : "10px"}} className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="card p10" style={{ width : "50%", display : "inline-block"}}>
                        <img  src={require('./../../images/frontPageImages/interviewee.png')} />
                        <img  src={require('./../../images/frontPageImages/interViewer.png')} />
                    </div>
                </div>
            </div>

        );
    }
}


export {SignUpComponent}