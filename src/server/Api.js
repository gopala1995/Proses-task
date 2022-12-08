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
  
