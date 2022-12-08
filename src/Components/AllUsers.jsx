import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getUser } from "../server/Api";

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
            </TBody>
          ))}
        </TableBody>
      </StyledTable>
    </div>
  );
};
