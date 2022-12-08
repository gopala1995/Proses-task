import {
    FormControl,
    FormGroup,
    Input,
    InputLabel,
    Typography,
    Button,
    styled,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import { getSingleUser,editUser } from "../server/Api";
  import { useNavigate, useParams } from "react-router-dom";
  
  const Form = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {
      margin-top: 20px;
    }
  `;
  
  export const EditUser = () => {
    const initial = {
      username: "",
      mobile: "",
      email: "",
      address: "",
    };
  
    const [user, setUser] = useState(initial);
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(()=>{
        getUserdata()
    },[])
     
    const getUserdata = async() =>{ 
        let res = await getSingleUser(id)
        console.log(res)
        setUser(res.data)
    }
  
    const onValueChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
      // console.log(user);
    };
    const addUser = async() => {
     await editUser(user,id )
     navigate("/")
    };
  
    return (
      <div>
        <Form>
          <Typography varient="h4">Eite User</Typography>
          <FormControl>
            <InputLabel>Name</InputLabel>
            <Input name="username" onChange={(e) => onValueChange(e)} value={user.username} />
          </FormControl>
          <FormControl>
            <InputLabel>MobileNo</InputLabel>
            <Input name="mobile" onChange={(e) => onValueChange(e)} value={user.mobile} />
          </FormControl>
          <FormControl>
            <InputLabel>Email</InputLabel>
            <Input name="email" onChange={(e) => onValueChange(e)} value={user.email}/>
          </FormControl>
          <FormControl>
            <InputLabel>Address</InputLabel>
            <Input name="address" onChange={(e) => onValueChange(e)} value={user.address}/>
          </FormControl>
          <FormControl>
            <Button onClick={() => addUser()} variant="contained">
              Edit User
            </Button>
          </FormControl>
        </Form>
      </div>
    );
  };
  