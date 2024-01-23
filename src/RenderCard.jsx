import React, { useEffect, useState } from "react";
import axios from 'axios'
import CardComponent from "./Components/Card.component";

import { ChakraProvider, CSSReset, Box } from "@chakra-ui/react";
import DelayedModal from "./Components/DelayedModal";



const RenderCard = (search,from,Page)=>{
   

    const  [data, SetData] = useState(null)
    
    const [isModalOpen, setModalOpen] = useState(false);
  
    useEffect(() => {
      // Set a timeout to open the modal after 10 seconds
      const modalTimeout = setTimeout(() => {
        setModalOpen(true);
      }, 5000);
  
      // Clear the timeout when the component unmounts
      return () => clearTimeout(modalTimeout);
    }, []);
  
    const closeModal = () => {
      setModalOpen(false);
    };

    useEffect(async()=>{
         /** Fetching Data From  News API */
         const {data} = await axios.get(`https://nutty-cape-bee.cyclic.app/News?search=Solar&from=2024-01-22&Page=1`)
         console.log(data)
      SetData(data.articles)
   

      return (()=>{
        
      })
    },[])



    return ( 
      <div style={{paddingLeft:'20px',paddingRight:'20px'}}>
        <ChakraProvider>
        <CSSReset />
        <Box>
          {/* Your main content goes here */}
          <p></p>

          {/* Render the DelayedModal component */}
          <DelayedModal isOpen={isModalOpen} onClose={closeModal} />
        </Box>
      </ChakraProvider>

      {data ? data.map((card,i) => <CardComponent imageSrc={`https://www.hindustantimes.com/ht-img/img/2023/03/22/550x309/Black_and_silver_solar_panels_1676005255798_1679523955977_1679523955977.jpg`} header={card.title} source={card.source.name} date={card.publishedAt} url={card.url} author={card.author} key={i} />) : null}
</div>
    )
}



export default RenderCard