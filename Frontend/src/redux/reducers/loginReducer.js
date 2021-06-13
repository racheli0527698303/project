import produce from 'immer';

const initialState = {
    employed: {
        name: "",
        email: "",
        password: "",        
        status:""
    }
}
export default produce((state, action) => {
    switch (action.type) {
        case 'SET_DETAILS': {
            debugger;
            state.user.name = action.payLoad.fullName;
            state.user.password = action.payLoad.passWord;
            state.user.email = action.payLoad.email;
            state.user.adminId = action.payLoad.status;
        }
    }
}, initialState)