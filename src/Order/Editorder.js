import _ from 'lodash';
import React, { useState , useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import Header from '../Header/Header';
import { editOrder } from '../Actions/Order_action';
import { toast } from 'react-toastify';
const Editorder = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [orderno, setOrderNo] = useState("");
    const [orderstatus, setOrderStatus]= useState("");
    const [ordertype, setOrderType] = useState([]);

    const oldOrder= useSelector((state)=> state.order);
    const {pathname}= useLocation();

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    useEffect(()=>{
        const id= parseInt(pathname.replace("/edit-order/", ""));
        const currentOrder = _.find(
            _.filter(
                _.get(oldOrder, "orderinfo"),
                (o)=> _.toNumber(o.orderid)=== _.toNumber(id)
            )
        );
        // orderid = id
        setName(currentOrder.name);
        setEmail(currentOrder.email)
        setOrderNo(currentOrder.orderno)
        setOrderStatus(currentOrder.orderstatus)
        setOrderType(currentOrder.ordertype)

    },[]);
    
    const handleSubmit = (e)=>{
        e.preventDefault();

        const data ={
            id: parseInt(pathname.replace("/edit-order/", "")),
            name: name,
            email: email,
            orderno: orderno,
            orderstatus : orderstatus,
            ordertype: ordertype,
        }
        if(data){
            dispatch(editOrder(data));
        }
            toast.success("Order Updated Sucessfully");
            console.log(data)
            navigate('/order');
        
    };
    const OrdertypeChange= (e)=>{
        if(e.target.checked){
            setOrderType([...ordertype, e.target.value]);
        }
        else{
            setOrderType(
                _.filter(ordertype, (o)=> o !== e.target.value)
            );
        }
    };

  return (
    <div>
        <Header/>
        <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-10">Create new order here!!</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={handleSubmit}>
          <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Full name"
                value = {name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                value = {email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="number"
                placeholder="Order Number"
                value = {orderno}
                onChange={(e) => setOrderNo(e.target.value)}
              />
            </div>
            <br/>
            <div className="form-group">
            <p><b>Order Type </b></p>
            <input type= "checkbox"
             name='ordertype'
             value="Electronics"
             checked= {ordertype.includes("Electronics")}
             onChange={OrdertypeChange}
             />
            <label htmlfor= 'ordertype'>Electronics</label><br></br>

            <input type= "checkbox"
            name='ordertype'
            value="Clothing"
            checked= {ordertype.includes("Clothing")}
            onChange={OrdertypeChange}
            />
            <label htmlfor= 'ordertype'>Clothing</label><br></br>

            <input type= "checkbox"
            name='ordertype'
            value="Acessories"
            checked= {ordertype.includes("Acessories")}
            onChange={OrdertypeChange}
             />
            <label htmlfor= 'ordertype'>Acessories</label><br></br>
            </div>
            <div className="form-group">
              <br/>
            <p> <b> Order Status </b> </p>

            <input type="radio" name="orderstatus" value="Completed"
            onChange={(e) => setOrderStatus(e.target.value)}/>Completed
            <br></br>
            <input type="radio" name="orderstatus" value="In Process"
                onChange={(e) => setOrderStatus(e.target.value)}/>In Process
            <br/>
              
            </div>
            <br/>
            <div className="form-group">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Update order"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Editorder