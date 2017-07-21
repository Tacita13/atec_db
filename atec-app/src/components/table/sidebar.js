import React from 'react';

const Sidebar = () => {

  return(

    <div className="sidebar" data-color="purple" data-image="../../assets/img/beach_pr.png">
    <div className="sidebar-wrapper">
            <div className="logo">
                <div className="bg-dark text-center login-container">
                  <div className="text-center">
                    <img className="login-logo" src="../../assets/img/logo.svg"/>
                  </div>
                </div>
            </div>

            <ul className="nav">
                <li className="active">
                    <a href="index.html">
                        <p>Seller List</p>
                    </a>
                </li>
                <li>
                    <a href="distributorList.html">
                        <p>Distributor List</p>
                    </a>
                </li>
                <li>
                    <a href="agentList.html">
                        <p>Agent List</p>
                    </a>
                </li>
                <li>
                    <a href="groupList.html">
                        <p>Group List</p>
                    </a>
                </li>
            </ul>
      </div>
    </div>

  );

}

export default Sidebar;
