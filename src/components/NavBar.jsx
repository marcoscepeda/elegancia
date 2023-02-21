import React from "react";
import CartWidget from "./CartWidget";
import { Menu, MenuButton, MenuList, MenuItem, Flex, Square, Box, Center } from "@chakra-ui/react";


const NavBar = () => {
  return (
    <>
        <Flex color="white">
            <Center w="200px" bg="tomato">
                <h2>Elegancia</h2>
            </Center>
            <Square bg="green" size="100px">
                <Menu>
                    <MenuButton>Categorias</MenuButton>
                    <MenuList  bg="green">
                        <MenuItem bg="green">Interior</MenuItem>
                        <MenuItem   bg="green">Comercial</MenuItem>
                        <MenuItem bg="green">Oficina</MenuItem>                
                    </MenuList>
                </Menu>
            </Square>
            <Box flex="1" bg="tomato">
                <CartWidget/>
            </Box>
        </Flex>         
    </>
  )
}

export default NavBar