import {createSlice}from '@reduxjs/toolkit'
const DoctorLoginInfo=createSlice({
    name:"doctorlogin",
    initialState:{
        DoctorLoginInformation:[]
    },
    reducers:{
        DoctortakeLogindata:(state,action)=>{
            console.log("action values are",action);
            state.DoctorLoginInformation.push(action.payload)
        },
         DoctorLogoutData:(state,action)=>{
            state.DoctorLoginInformation=[]
         }
    }
})
export const {DoctortakeLogindata,DoctorLogoutData}=DoctorLoginInfo.actions
export default DoctorLoginInfo.reducer