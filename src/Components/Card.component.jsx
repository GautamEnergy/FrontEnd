import React from "react";
import { Stack, Card, CardHeader, Image, Box, Heading } from "@chakra-ui/react";

const CardComponent = ({ imageSrc, header, source, date }) => (
  <Card borderWidth="" borderRadius="sm" bg="white">
    <Stack direction="row" spacing={4}>
        <Box padding={{base:'11px',md:'31px',lg:'40px'}}>
      <Image
      width={{base:'350px',md:'444px',lg:'350px'}}
        borderRadius="sm"
        src={imageSrc}
        alt="Card image"
      />
      </Box>
      <Box _hover={{cursor:'pointer',textDecoration:'underline'}} flexGrow={1} paddingTop={{base:'9px',md:'32px',lg:'50px'}}>
        <Heading color={'grey'} display={{base:'none',md:'block',lg:'block'}} fontSize={'15px'}>{`by ${source}n | ${date}`}</Heading>
       <Heading fontSize={{base:'14px',md:'25px',lg:'30px'}}>{header}</Heading>
      </Box>
    </Stack>
  </Card>
);

export default CardComponent;
