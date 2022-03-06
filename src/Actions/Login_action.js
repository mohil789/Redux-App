import _ from 'lodash';

const user = [
    {id: 1, name: "Kratika", email: "kratika@gmail.com", password: "Kratika" },
    {id: 2, name: "Anika", email: "anika@gmail.com", password: "Anika123"},
];

export const request = ()=>{
    return {
        type: "REQUEST",
    };
};

export const login = (data) =>{
    const userEmail = _.filter(user,
        (u)=> u.email===data.email && u.password===data.password).map((u)=>{
            return u.email;
        });
        return{
            type: "LOGIN",
            payload: _.isEmpty(userEmail)? false: true,
        };
};

export const logout = () => {
    return {
        type: "LOGOUT",
    };
};