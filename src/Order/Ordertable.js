import _ from 'lodash';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteOrder } from '../Actions/Order_action';
import Header from '../Header/Header';

const Ordertable = () => {

    const dispatch = useDispatch();
    const {orderinfo}= useSelector((state)=>state.order);
    console.log("order", orderinfo);
    
   return (
    <div>
        <Header/>
        <div className="container">
        <div className="row d-flex flex-column">
        <div className="col-md-10 mx-auto my-4">
          <table className="table table-hover">
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Order No</th>
                <th scope="col">Order Status</th>
                <th scope="col">Order Type</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orderinfo.length && _.map(orderinfo, ((row,i)=>{
                  return(
                      <tr key ={i}>
                       <td>{row.orderid}</td>
                       <td>{row.name}</td>
                       <td>{row.email}</td>
                       <td>{row.orderno}</td>
                       <td>{row.orderstatus}</td>
                       <td>
                          {_.join(_.map(row.ordertype , (d)=>{
                              return _.camelCase(d)
                          }), ", ")}   
                        </td>
                        <td>
                           <Link to={`/edit-order/${row.orderid}`}>
                               <button className='btn btn-sm btn-primary mr-1 mx-2'>
                                   Edit</button></Link>
                            <button className='btn btn-sm btn-danger' 
                            onClick={()=> dispatch(deleteOrder(row.orderid))}>Delete</button>
                        </td>   
                      </tr>
                       )
                        }))}      
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Ordertable