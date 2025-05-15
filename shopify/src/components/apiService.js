import axios from "axios";
//const BASE_URL = "https://kizaapi.ksesystem.com/"
 const BASE_URL = "http://localhost:1000/api/"
class ApiService {
    getToken() {
        return {
            Authorization: localStorage.getItem("token")
        }
    }
    loginApi(data) {
      
      return  axios.post(BASE_URL + "login", data)
    }
    registerApi(data){
        
        return axios.post(BASE_URL+"customer/add",data)
        
    }
    addCategory(data){
       
        return axios.post(BASE_URL+"catagory/add",data, {headers:this.getToken()})
    }
    getCatagory(){
        return axios.post(BASE_URL+"catagory/getCatagory",{},{headers:this.getToken()})
    }
    getDashboardApi(){
        // console.log(localStorage.getItem("token"))
        return axios.post(BASE_URL+"dashboard",{}, {headers:this.getToken()})  
    }
    addSubCategory(data){
        return axios.post(BASE_URL+"subcatagory/add",data, {headers:this.getToken()})
    }
    addProduct(data){
        return axios.post(BASE_URL+"product/add",data, {headers:this.getToken()})
    }
    placeOrder(data){
        return axios.post(BASE_URL+"order/placeOrder",data, {headers:this.getToken()})
    }
    
    getSubCatagory(){
        return axios.post(BASE_URL+"subcatagory/getSubcatagory",{},{headers:this.getToken()})
    }
    getProducts(){
        return axios.post(BASE_URL+"product/getProduct",{}, {headers:this.getToken()})
    }
      getUsers(){
        return axios.post(BASE_URL+"customer/getall",{}, {headers:this.getToken()})
    }

     getOrders(){
        return axios.post(BASE_URL+"order/getOrder",{}, {headers:this.getToken()})
    }
    singleSubCategory(data){
        return axios.post(BASE_URL+"subcatagory/single",data, {headers:this.getToken()})
    }
    
    updateStatusCategory(data){
        return axios.post(BASE_URL+"catagory/changeStatus",data, {headers:this.getToken()})
    }
    updateSubStatusCategory(data){
        return axios.post(BASE_URL+"subcatagory/changeStatus",data, {headers:this.getToken()})
    }
    singleCategory(data){
        return axios.post(BASE_URL+"catagory/single",data, {headers:this.getToken()})
    }
    updateCategory(data){
        return axios.post(BASE_URL+"catagory/update",data, {headers:this.getToken()})
    }
    singleProduct(data){
        return axios.post(BASE_URL+"product/singleProduct",data, {headers:this.getToken()})
    }
     singleOrder(data){
        return axios.post(BASE_URL+"order/single",data, {headers:this.getToken()})
    }
     changeOrderStatus(data){
        return axios.post(BASE_URL+"order/changeStatus",data, {headers:this.getToken()})
    }
     changeProductStatus(data){
        return axios.post(BASE_URL+"product/changeStatus",data, {headers:this.getToken()})
    }
    getProfile(data){
        return axios.post(BASE_URL+"customer/single",data, {headers:this.getToken()})
    }
     editProfile(data){
        return axios.post(BASE_URL+"customer/editProfile",data, {headers:this.getToken()})
    }
     changePassword(data){
        return axios.post(BASE_URL+"changePassword",data, {headers:this.getToken()})
    }
     updateProduct(data){
        return axios.post(BASE_URL+"product/update",data, {headers:this.getToken()})
    }

}
export default new ApiService