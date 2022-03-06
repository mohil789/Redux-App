import { toast } from "react-toastify";

export const createOrder = (data)=>{
    console.log(data);
    return{
        type: "CREATE",
        payload: data
    };
}

export const editOrder = (data,id) =>{
    return{
        type: "EDIT",
        payload: data,id,
    };
}

export const deleteOrder = (id)=>{
    toast.error("Order Deleted Sucessfully");
    return{
        type: "DELETE",
        payload: id,
    };
}
