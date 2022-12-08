import axios from "axios";

const URL_ = "http://localhost:3001/users";

export const AddUser = async (data) => {
  try {
   return await axios.post(URL_, data);
  } catch (err) {
    console.log("Errorn on AddUser", err.message);
  }
};


export const getUser = async () => {
    try {
     return await axios.get(URL_);
    } catch (err) {
      console.log("Errorn on getUser", err.message);
    }
  };
  
  export const getSingleUser = async (data) => {
    try {
     return await axios.get(`${URL_}/${data}`);
    } catch (err) {
      console.log("Errorn on getSingleUser", err.message);
    }
  };

  export const editUser = async (data,id) => {
    try {
     return await axios.put(`${URL_}/${id}`,data);
    } catch (err) {
      console.log("Errorn on editUser", err.message);
    }
  };

  export const deleteUser = async (id) => {
    try {
     return await axios.delete(`${URL_}/${id}`);
    } catch (err) {
      console.log("Errorn on deleteUser", err.message);
    }
  };
