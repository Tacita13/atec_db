import React from 'react';

const Table = () => {
  //render(){
    return(

      <div className="content">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-md-12">
                      <div className="card">
                          <div className="header">
                              <h4 className="title">Seller List</h4>
                              <p className="category">Manage</p>
                              <button className= "btn-manage" type="button" onclick="alert('Hello world!')">Create New</button>
                              <button className= "btn-manage" type="button" onclick="alert('Hello world!')">Edit</button>
                          </div>
                          <div className="content table-responsive table-full-width">
                              <table className="table table-hover table-striped">
                                  <thead>
                                    <th>Seller ID</th>
                                    <th>Name</th>
                                    <th>Date Created</th>
                                    <th>Last Login</th>
                                    <th>Activation Date</th>
                                    <th>Date Created</th>
                                    <th>Distributor Group ID</th>
                                    <th>Active</th>
                                  </thead>
                                  <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>Dakota Rice</td>
                                        <td>00001</td>
                                        <td>Niger</td>
                                        <td>30</td>
                                        <td>Dakota Rice</td>
                                        <td>00001</td>
                                          <td>
                                              <form action="">
                                                <input type="checkbox"/>
                                              </form>
                                          </td>
                                        </tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );

  }
  export default Table;
//}

/*
const TableList = (props) => {
  if(props.count > 0) {
    return (
      <div className="row">
        <div className="text-center">
          <h2 className= "category-text">{ props.category }</h2>
          {
            props.activeData.map(item =>
              <Box key={item._id} item={item}/>)
          }
        </div>
      </div>
    );
  } else {
    return (
      <div className="row">
      </div>
    );
  }
};*/
