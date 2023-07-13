import React, { useEffect, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  useToast,
  Divider,
  HStack,
  Button,
  VStack,
  Heading,
  Center,
  TableContainer,
  TableCaption,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
} from "@chakra-ui/react";
import { action_get_Data } from "../Redux/Blog/action";
import { useDispatch, useSelector } from "react-redux";
import NoteList from "./Notelist";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { logout } from "../Redux/User/action";

export default function Dashboard() {
  const [flag, setflag] = useState(true);
  const dispatch = useDispatch();
 const navigate=useNavigate()
  const token = useSelector((store) => {
    return store.LoginReducer.token;
  });

  const data = useSelector((store) => {
    return store.BlogReducer.data;
  });

  // Delete

  const handleDelete = (_id) => {
    console.log(_id)
    axios({
      method: "delete",
      url: `http://localhost:8000/blog/delete/${_id}`,
      headers: { Authorization: `${token}` },
    })
      .then((res) => {
        setflag(!flag);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    dispatch(action_get_Data(token));
  }, [flag]);

  const logoutuser=()=>{
    console.log("userlogout")
    navigate("/")
    dispatch(logout())
    console.log(token)

  }
  return (
    <Box bg="#ACDCFA" h="100vh">
      <Box px={5} py={1} display={"flex"} justifyContent={"space-between"} bg="orange">
     <Link to={"/"}>
     <Heading
          color={"#fff"}
          fontWeight={"400"}
         
          fontFamily={"monoscape"}
          letterSpacing={1}>
          App Avengers
        </Heading>
     </Link>
    
          <Link to="/notes" width={"100%"}>
            <Button>Add Blogs</Button>
          </Link>
          <Link to="/dashboard">
            <Button width={"100%"}>All Blogs</Button>
          </Link>
      
        <Menu>
          <MenuButton  as={Button}>Profile</MenuButton>
          <MenuList>
            <MenuItem  onClick={logoutuser}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Divider />
      <HStack p={5}>
       
        <Box flex={3}>
          {data.length > 0 ? (
            <Center>
              <TableContainer color={"#fff"}>
                <Table variant="simple">
                  <TableCaption>Blog List</TableCaption>
                  <Thead>
                    <Tr>
                      <Th>S.no</Th>
                      <Th>Title</Th>
                      <Th>Blog</Th>
                      <Th>View</Th>
                      <Th>Edit</Th>
                      <Th>Delete</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data.map((item, ind) => {
                      return (
                        <NoteList
                          {...item}
                          key={Math.random()}
                          ind={ind + 1}
                          handleDelete={handleDelete}
                        />
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
              ;
            </Center>
          ) : (
            <Center>
              <Link to="/notes">
                <Button width={"100%"}>Create Blogs</Button>
              </Link>
            </Center>
          )}
        </Box>
      </HStack>
    </Box>
  );
}