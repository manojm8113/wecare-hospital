import axios from "axios";
import { takeLogindata, LogoutData } from "../Redux/Loginslice";
import { TokenRequest, basicRequest, doctorTokenRequest, PassRequest } from "./Axioscreate";
import { AdmintakeLogindata } from "../Redux/AdminSlice";
import { DoctorLogoutData, DoctortakeLogindata } from "../Redux/DoctorSlice";
const doctorToken = localStorage.getItem('doctorToken');
const doctorId = localStorage.getItem('doctorId');
//user signup
export const signinData = async (data) => {
    try {
        const response = await basicRequest.post('/userRegister/signup', data);
        return response.data;
    } catch (err) {
        console.log(err.message);
        return { error: err.message };
    }
};
//end*************
//password update
export const Updatepassword = async (data, token) => {
    console.log("second check", data, token);
    try {
        const UpdateData = await axios.put(`/userLogin/reset-password/${token}`, data);
        console.log("updated datas", UpdateData);
        return UpdateData.data;  // Ensure the response is returned correctly
    } catch (err) {
        console.log(err.message);
        return { error: err.response?.data?.message || err.message };
    }
};
//end***********
//adminlogin
export const AdminLogin = async (data, dispatch) => {
    console.log("datas", data);
    try {
        const AdminLoginInfo = await basicRequest.post('/AdminLogin/login', data);
        console.log("Login user datas", AdminLoginInfo.data);
        dispatch(AdmintakeLogindata(AdminLoginInfo.data));
        return AdminLoginInfo; // Return the response to be handled in display function
    } catch (err) {
        console.error(err.message);
        throw err; // Rethrow error to be caught in display function
    }
};
//end*************
//Doctor login
export const DoctorLogin = async (data, dispatch) => {
    console.log("datas", data);
    try {
        const DoctorLoginInfo = await basicRequest.post('/doctorLogin/login', data);
        console.log("Login user datas", DoctorLoginInfo.data);
        dispatch(DoctortakeLogindata(DoctorLoginInfo.data));
        return DoctorLoginInfo; // Return the response to be handled in display function
    } catch (err) {
        console.error(err.message);
        throw err; // Rethrow error to be caught in display function
    }
};
//end*******
//userLogin
export const LoginDatas = async (data, dispatch) => {
    console.log("datas", data);
    try {
        const LoginInfo = await basicRequest.post('/userRegister/login', data);
        console.log("Login user datas", LoginInfo.data);
        dispatch(takeLogindata(LoginInfo.data));
        return LoginInfo; // Return the response to be handled in display function
    } catch (err) {
        console.error(err.message);
        throw err; // Rethrow error to be caught in display function
    }
};
//end*************
//users Datas
export const Getuserdetails = async (id) => {
    try {
        const Getprofile = await TokenRequest.get(`/userRegister/getuserDatas`, {  
        });
        console.log("user profile information", Getprofile);
        return Getprofile.data;
    } catch (err) {
        console.log(err.message);
    }
};
//end *************
//users Appontment
export const GetAppoinments = async (id) => {
    try {
        const Getprofile = await TokenRequest.get(`/appointment/getappointments`, {  
        });
        console.log("user profile information", Getprofile);
        return Getprofile.data;
    } catch (err) {
        console.log(err.message);
    }
};
//end *************
//add Doctors
export const AddDoctors = async (data) => {
    try {
        const response = await basicRequest.post('/doctors/addDoctor', data);
        return response.data;
    } catch (err) {
        console.log(err.message);
        return { error: err.message };
    }
};
//End***********
//Get Doctors Data
export const GetDoctordetails = async () => {
    try {
        const Getprofile = await doctorTokenRequest.get('/doctors/getDoctor',{
        });
        console.log("user profile information", Getprofile);
        return Getprofile.data;
    } catch (err) {
        console.log(err.message);
    }
};
//end *************
//Users Message
export const contactMessage = async (data) => {
    try {
        const response = await basicRequest.post('/usermessage/contact', data);
        return response.data;
    } catch (err) {
        console.log(err.message);
        return { error: err.message };
    }
};
//end***********
export const Getusermessage = async () => {
    try {
        const Getprofile = await basicRequest.get('/usermessage/messages',{
        });
        console.log("user profile information", Getprofile);
        return Getprofile.data;
    } catch (err) {
        console.log(err.message);
    }
};
//single users profile with id
export const Getmyprofile = async (id) => {
  try {
      const Getprofile = await TokenRequest.get(`/userRegister/Getdatas/${id}`);
      console.log("user profile information", Getprofile);
      console.log("usersss",id);   
      return Getprofile.data;
  } catch (err) {
      console.log(err.message);
  }
};
//end*******
//single admin profile with id
export const Getadminprofile = async (id) => {
    try {
        const Getprofile = await PassRequest.get(`/AdminLogin/Getdatas/${id}`);
        console.log("admin profile information", Getprofile);
        console.log("usersss",id);   
        return Getprofile.data;
    } catch (err) {
        console.log(err.message);
    }
  };
  //end*******
export const UpdateMydata = async (data, id) => {
    console.log("second check", data, id);
    try {
        const UpdateData = await basicRequest.put(`/userRegister/updateData/${id}`, data);
        console.log("updated datas", UpdateData);
    } catch (err) {
        console.log(err.message);
    }
};
//user data delete
export const deleteMydata = async (id, dispatch) => {
    try {
        await basicRequest.delete(`/userRegister/deletedata/${id}`);
        alert("Are you sure to delete...!", dispatch(LogoutData()));
    } catch (err) {
        console.log(err.message);
    }
};
//end*****
// Api.js

export const Getusersmessage = async () => {
    try {
      const response = await basicRequest.get('/usermessage/messages');
      const data = response.data; 
      return data; 
    } catch (error) {
      console.error('Error fetching user messages:', error);
      return { count: 0, messages: [] };
    }
  };
  
  //user doctor data delete
export const deleteDoctorData = async (id, dispatch) => {
    try {
        await basicRequest.delete(`/doctors/deletedoctor/${id}`);
        alert("Are you sure to delete...!");
    } catch (err) {
        console.log(err.message);
    }
};
//end*****
//update Doctor Data
export const UpdateDoctorData = async (data, id) => {
    console.log("second check", data, id);
    try {
        const UpdateData = await basicRequest.put(`/doctors/updatedata/${id}`, data);
        console.log("updated datas", UpdateData);
    } catch (err) {
        console.log(err.message);
    }
};
//end**********
export const GetDoctorProfile = async (id) => {
    try {
        const response = await doctorTokenRequest.get(`/doctors/GetDoctor/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching doctor profile:", error);
        throw error;
    }
};
  //end
  export const GetDoctorProfiles = async (doctorToken, doctorId) => {
    try {
        const response = await doctorTokenRequest.get(`/doctors/GetDoctor/${doctorId}`, {
            headers: { 
                Authorization: `Bearer ${doctorToken}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching doctor profile:", error);
        throw error;
    }
};