import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  Button,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { AddUser } from "../server/Api";
import { useNavigate } from "react-router-dom";

const Form = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

export const AddUsers = () => {
  const initial = {
    username: "",
    mobile: "",
    email: "",
    address: "",
  };

  const [user, setUser] = useState(initial);
  const navigate = useNavigate()

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };
  const addUser = async() => {
   await AddUser(user)
   navigate("/")
  };

  return (
    <div>
      <Form>
        <Typography varient="h4">Add User</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input name="username" onChange={(e) => onValueChange(e)} />
        </FormControl>
        <FormControl>
          <InputLabel>MobileNo</InputLabel>
          <Input name="mobile" onChange={(e) => onValueChange(e)} />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input name="email" onChange={(e) => onValueChange(e)} />
        </FormControl>
        <FormControl>
          <InputLabel>Address</InputLabel>
          <Input name="address" onChange={(e) => onValueChange(e)} />
        </FormControl>
        <FormControl>
          <Button onClick={() => addUser()} variant="contained">
            Add User
          </Button>
        </FormControl>
      </Form>
    </div>
  );
};
