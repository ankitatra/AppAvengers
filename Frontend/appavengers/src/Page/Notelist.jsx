import { DeleteIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Center, Icon, Td, Tr, useToast } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function NoteList({ _id, title, blog, ind, handleDelete }) {
  const toast = useToast();
  return (
    <Tr cursor={"pointer"} color={"orange"}>
      <Td>{ind}</Td>
      <Td>{title}</Td>
      <Td>{blog}</Td>
      <Td>
        <Center>
          <Link to={`/dashboard/${_id}`}>
            {" "}
            <Icon color={"#fff"} fontSize={"20px"}>
              <ViewIcon  color={"orange"}/>
            </Icon>
          </Link>
        </Center>
      </Td>
      <Td>
        <Center>
          {" "}
          <Link to={`/dashboard/edit/${_id}`}>
            <Icon color={"#fff"} fontSize={"20px"}>
              <EditIcon  color={"orange"}/>
            </Icon>
          </Link>
        </Center>
      </Td>

      <Td>
        <Center>
          <Icon
            color={"#fff"}
            fontSize={"20px"}
            onClick={() => {
              handleDelete(_id);
              toast({
                title: `Note has been deleted `,
                status: "error",
                isClosable: true,
              });
            }}
          >
            <DeleteIcon color={"orange"} />
          </Icon>
        </Center>
      </Td>
    </Tr>
  );
}
