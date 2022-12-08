import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getUser,deleteUser } from "../server/Api";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;
const THead = styled(TableRow)`
  background: #000;
  & > th {
    color: #fff;
    font-size: 20px;
  }
`;
const TBody = styled(TableRow)`
  & > td {
    font-size: 20px;
  }
`;

export const AllUsers = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUsedeatils();
  }, []);
  const getUsedeatils = async () => {
    let res = await getUser();
    setUser(res.data);
    console.log(res);
  };

  const delete1User = async(id) =>{
   await deleteUser(id)
   getUsedeatils()
  }

  return (
    <div>
      <StyledTable>
        <TableHead>
          <THead>
            <TableCell>ID</TableCell>
            <TableCell>UserName</TableCell>
            <TableCell>Mobile</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Address</TableCell>
            <TableCell></TableCell>
          </THead>
        </TableHead>
        <TableBody>
          {user.map((el) => (
            <TBody>
              <TableCell>{el.id}</TableCell>
              <TableCell>{el.username}</TableCell>
              <TableCell>{el.mobile}</TableCell>
              <TableCell>{el.email}</TableCell>
              <TableCell>{el.address}</TableCell>
              <TableCell>
                <Button variant="contained" component={Link} to={`/edit/${el.id}`}>
                  Edit
                </Button>
                <Button onClick={()=>delete1User(el.id)} variant="contained" style={{marginLeft:10, backgroundColor:"red"}}>Delete</Button>
              </TableCell>
            </TBody>
          ))}
        </TableBody>
      </StyledTable>
    </div>
  );
};
