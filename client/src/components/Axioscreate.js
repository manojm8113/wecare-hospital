import axios from 'axios';

const SampleUrl = 'http://localhost:5000';
// Retrieve token and password from localStorage
const hospitaldatas = JSON.parse(localStorage.getItem("persist:hospitaldatas"));
const loginInfo = hospitaldatas?.login && JSON.parse(hospitaldatas.login)?.LoginInformation?.[0];
const AdminLoginInfo = hospitaldatas?.Adminlogin && JSON.parse(hospitaldatas.adminlogin)?.AdminLoginInformation?.[0];
const DoctorLoginInfo = hospitaldatas?.Dooctorlogin && JSON.parse(hospitaldatas.doctorlogin)?.DoctorLoginInformation?.[0];
 
// Check if token and password exist
const Token = loginInfo?.token;
const Pass = AdminLoginInfo?.pass;
const DoctorToken = DoctorLoginInfo?.doctorToken;
// Function to check if admin password is correct
const isAdminPassCorrect = () => {
    // Implement your logic here to check if the admin password is correct
    // For now, returning true always
    return true;
};
// Log token and admin pass
console.log("************", Token);
console.log("Admin Pass", Pass);
console.log("Doctor tokens", DoctorToken);
// Export Axios instances
export const basicRequest = axios.create({
    baseURL: SampleUrl
});
export const TokenRequest = axios.create({
    baseURL: SampleUrl,
    headers: { token: Token }
});
export const PassRequest = axios.create({
    baseURL: SampleUrl,
    headers: { pass: Pass }
});
export const doctorTokenRequest = axios.create({
    baseURL: SampleUrl,
    headers: { doctorToken: DoctorToken }
});
// Check if admin password is correct before using PassRequest
if (!Pass || !isAdminPassCorrect()) {
    console.error("Admin password is incorrect or missing.");
}