/********* Import        ********** */
import React, { useState } from 'react';

import {

  Box,
  Flex,
  Spacer,
  Button,
  Link,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,

  Input, InputGroup, InputRightElement, useMediaQuery, Avatar, Text, Slide
} from '@chakra-ui/react';
import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons';


/****************** Component          ********************** */
const Navbar = () => {

  /***************  States ************** */

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const IsTablet = useMediaQuery('(min-width: 768px) and (max-width: 991px)')

  /******************* function *********************** */


  /***responsvie Navbar open toggle */
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  /******   responsive Navbar close toggle****** */
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Flex
      p={{ base: 2, md: 4 }}
      bgColor="#272829"
      color="white"
      alignItems="center"
      position="sticky"
      top="0"
      zIndex="1000"
      boxShadow={"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}
    >
      <Box>



        <Link fontSize={{ base: 'md', md: 'xl' }} fontWeight="bold" >
          USA solar
        </Link>
      </Box>
      <Spacer />
      <Box display={{ base: 'none', md: 'flex' }} borderRadius={30}>
        {/* Display buttons for larger screens */}



        <Menu>
          <MenuButton _hover={{ color: 'black', bgColor: "white" }} color={'white'} bgColor={'#272829'} as={Button} rightIcon={<ChevronDownIcon />}>
            Articles
          </MenuButton>
          <MenuList color={'black'} border={'1px'}>
            <MenuItem _hover={{ color: 'white', bgColor: "black" }}>Most Recent Posts</MenuItem>
            <MenuItem _hover={{ color: 'white', bgColor: "black" }} >News</MenuItem>
            <MenuItem _hover={{ color: 'white', bgColor: "black" }}>Featured</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton _hover={{ color: 'black', bgColor: "white" }} color={'white'} bgColor={'#272829'} as={Button} rightIcon={<ChevronDownIcon />}>
            Policy
          </MenuButton>
          <MenuList color={'black'} border={'1px'}>
            <MenuItem _hover={{ color: 'white', bgColor: "black" }}>The Solar Policy Scop</MenuItem>
            <MenuItem _hover={{ color: 'white', bgColor: "black" }} >IRA Coverage</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton _hover={{ color: 'black', bgColor: "white" }} color={'white'} bgColor={'#272829'} as={Button} rightIcon={<ChevronDownIcon />}>
            Markets
          </MenuButton>
          <MenuList color={'black'} border={'1px'}>
            <MenuItem _hover={{ color: 'white', bgColor: "black" }}>Residental</MenuItem>
            <MenuItem _hover={{ color: 'white', bgColor: "black" }} >Commercial</MenuItem>
            <MenuItem _hover={{ color: 'white', bgColor: "black" }}>Community Solar</MenuItem>
            <MenuItem _hover={{ color: 'white', bgColor: "black" }}>Utility</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton _hover={{ color: 'black', bgColor: "white" }} color={'white'} bgColor={'#272829'} as={Button} rightIcon={<ChevronDownIcon />}>
            Resources
          </MenuButton>
          <MenuList color={'black'} border={'1px'}>
            <MenuItem _hover={{ color: 'white', bgColor: "black" }}>About SPW</MenuItem>
            <MenuItem _hover={{ color: 'white', bgColor: "black" }} >Digital Issues</MenuItem>
            <MenuItem _hover={{ color: 'white', bgColor: "black" }}>Event Coverage</MenuItem>
            <MenuItem _hover={{ color: 'white', bgColor: "black" }}>Podcast</MenuItem>
            <MenuItem _hover={{ color: 'white', bgColor: "black" }}>Solar Classrooms</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton _hover={{ color: 'black', bgColor: "white" }} color={'white'} bgColor={'#272829'} as={Button} rightIcon={<ChevronDownIcon />}>
            Leadership
          </MenuButton>
          <MenuList color={'black'} border={'1px'}>
            <MenuItem _hover={{ color: 'white', bgColor: "black" }}>2023 Winners</MenuItem>
            <MenuItem _hover={{ color: 'white', bgColor: "black" }} >2022 Winners</MenuItem>
            <MenuItem _hover={{ color: 'white', bgColor: "black" }}>Mark as Draft</MenuItem>

          </MenuList>
        </Menu>

      </Box>
      <Box display={{ base: '', md: 'none' }} marginTop={'0px'} flexDirection={''} onClick={handleDrawerOpen}>
        {/* Display hamburger icon for smaller screens */}
   {/**<IconButton
      icon={<HamburgerIcon size={{ base: "10" }} />}
      variant="ghost"
      onClick={handleDrawerOpen}
      color={"white"}
      size={'10'}
  /> **/}
<div style={{display:'grid'}} >
  <div style={{width:'20px', padding:'1px',background:'white',marginBottom:'3px'}}></div>
 
  <div  style={{width:'13px', padding:'1px',background:'white', marginBottom:'3px',marginLeft:'7px'}}> </div>
  <div style={{width:'7px', padding:'1px',background:'white',marginLeft:'13px'}}></div>
  </div>
      </Box>

      {/* Responsive Drawer for smaller screens */}
      <Drawer isOpen={isDrawerOpen} onClose={handleDrawerClose} placement="right" >
        <DrawerOverlay />
        <DrawerContent bgColor="#272829" color={"white"} >
          <DrawerCloseButton />
          <DrawerBody>
            {/* Use VStack to stack items vertically */}
            <VStack spacing={4} align="start" color={'white'}>
            <Menu>
          <MenuButton _hover={{ color: 'black', bgColor: "white" }} color={'white'} bgColor={'#272829'} as={Button} rightIcon={<ChevronDownIcon />}>
            Articles
          </MenuButton>
          <MenuList color={'black'} border={'1px'}>
            <MenuItem _hover={{ color: 'white', bgColor: "black" }}>Most Recent Posts</MenuItem>
            <MenuItem _hover={{ color: 'white', bgColor: "black" }} >News</MenuItem>
            <MenuItem _hover={{ color: 'white', bgColor: "black" }}>Featured</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton _hover={{ color: 'black', bgColor: "white" }} color={'white'} bgColor={'#272829'} as={Button} rightIcon={<ChevronDownIcon />}>
            Policy
          </MenuButton>
          <MenuList color={'black'} border={'1px'}>
            <MenuItem _hover={{ color: 'white', bgColor: "black" }}>The Solar Policy Scop</MenuItem>
            <MenuItem _hover={{ color: 'white', bgColor: "black" }} >IRA Coverage</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton _hover={{ color: 'black', bgColor: "white" }} color={'white'} bgColor={'#272829'} as={Button} rightIcon={<ChevronDownIcon />}>
            Markets
          </MenuButton>
          <MenuList color={'black'} border={'1px'}>
            <MenuItem _hover={{ color: 'white', bgColor: "black" }}>Residental</MenuItem>
            <MenuItem _hover={{ color: 'white', bgColor: "black" }} >Commercial</MenuItem>
            <MenuItem _hover={{ color: 'white', bgColor: "black" }}>Community Solar</MenuItem>
            <MenuItem _hover={{ color: 'white', bgColor: "black" }}>Utility</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton _hover={{ color: 'black', bgColor: "white" }} color={'white'} bgColor={'#272829'} as={Button} rightIcon={<ChevronDownIcon />}>
            Resources
          </MenuButton>
          <MenuList color={'black'} border={'1px'}>
            <MenuItem _hover={{ color: 'white', bgColor: "black" }}>About SPW</MenuItem>
            <MenuItem _hover={{ color: 'white', bgColor: "black" }} >Digital Issues</MenuItem>
            <MenuItem _hover={{ color: 'white', bgColor: "black" }}>Event Coverage</MenuItem>
            <MenuItem _hover={{ color: 'white', bgColor: "black" }}>Podcast</MenuItem>
            <MenuItem _hover={{ color: 'white', bgColor: "black" }}>Solar Classrooms</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton _hover={{ color: 'black', bgColor: "white" }} color={'white'} bgColor={'#272829'} as={Button} rightIcon={<ChevronDownIcon />}>
            Leadership
          </MenuButton>
          <MenuList color={'black'} border={'1px'}>
            <MenuItem _hover={{ color: 'white', bgColor: "black" }}>2023 Winners</MenuItem>
            <MenuItem _hover={{ color: 'white', bgColor: "black" }} >2022 Winners</MenuItem>


          </MenuList>
        </Menu>

            </VStack>
          </DrawerBody>
        </DrawerContent>

      </Drawer>

    </Flex>
  );
};


export default Navbar
