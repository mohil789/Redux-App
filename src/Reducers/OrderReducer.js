import _ from 'lodash';

const initialState = {
    orderinfo: [
        { orderid: 0, 
          name: "Kratika Yadav", 
          email: "email@email.com", 
          orderno: 12345, 
          ordertype: ["Clothing ","Acessories "], 
          orderstatus: "Completed" },
        { orderid: 1,
          name: "Test Name", 
          email: "test@test.com", 
          orderno: 45678, 
          ordertype: ["Clothing"], 
          orderstatus: "In Process" },
    ],
};

const OrderReducer = (state = initialState, action)=>{
    switch(action.type){
        case "CREATE":
            return{
                ...state,
                orderinfo: [...state.orderinfo, ...[action.payload]],
            };

        case "EDIT":
            const updateid = _.get(action.payload, "id");
            const updateorder = _.map(state.orderinfo, (order)=>{
                if(order.orderid=== _.toNumber(updateid)){
                    return {...order, ...action.payload};
                }
                return order;
            });

            return {
                ...state,
                orderinfo: updateorder,
            };

        case "DELETE":
            const id = action.payload;
            return{
                ...state,
                orderinfo: _.filter(
                    state.orderinfo,
                    (order)=> order.orderid !== _.isNumber(id)
                ),
            };
        
        default:
            return state;
    }
};
export default OrderReducer;