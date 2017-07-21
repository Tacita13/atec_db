import React from 'react';

const Navbar = () => {

  return(

<nav className="navbar navbar-default navbar-fixed">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Admin Broker Portal</a>
            </div>
            <div className="collapse navbar-collapse">


                <ul className="nav navbar-nav navbar-right">

                    <li>
                        <a href="#">
                            <p>Log out</p>
                        </a>
                    </li>
        <li className="separator hidden-lg hidden-md"></li>
                </ul>
            </div>
        </div>
    </nav>

  );

}

export default Navbar;
