import {createSlice}from '@reduxjs/toolkit'
const AdminLoginInfo=createSlice({
    name:"adminlogin",
    initialState:{
        AdminLoginInformation:[]
    },
    reducers:{
        AdmintakeLogindata:(state,action)=>{
            console.log("action values are",action);
            state.AdminLoginInformation.push(action.payload)
        },
         AdminLogoutData:(state,action)=>{
            state.AdminLoginInformation=[]
         }
    }
})
export const {AdmintakeLogindata,AdminLogoutData}=AdminLoginInfo.actions
export default AdminLoginInfo.reducer