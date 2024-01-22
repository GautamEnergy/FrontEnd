import React, { useEffect, useState } from "react";
import CardComponent from "./Components/Card.component";





const RenderCard = ()=>{
   

    const  [data, SetData] = useState(null)

    useEffect(()=>{
      let data = [{
        img:'https://www.solarpowerworldonline.com/wp-content/uploads/2022/11/franklinwh-1-268x170.jpg',
        header:'FranklinWH adds lifting dolly to product lineup to better install residential battery',
        source:'Kelli Kalvin',
        date:'January 19, 2024'
      },{
        img:'https://www.solarpowerworldonline.com/wp-content/uploads/2024/01/pentagon-aerial-DOD-photo-268x170.jpg',
        header:'Pentagon and more federal buildings are adding solar to their campuses',
        source:'Kelli Pickerel',
        date:'January 18, 2024'
      },{
        img:'https://www.solarpowerworldonline.com/wp-content/uploads/2024/01/stock-storage-battery-residential-268x170.jpg',
        header:'Connecticut increases incentives available to residents installing battery storage',
        source:'Kelli Kalvin',
        date:'January 20, 2024'
      },{
        img:'https://www.solarpowerworldonline.com/wp-content/uploads/2022/07/stock-solar-array-4-268x170.jpg',
        header:'Old government document updated to allow more solar in Western US',
        source:'Kelli Kalvin',
        date:'January 21, 2024'
      },{
        img:'https://www.solarpowerworldonline.com/wp-content/uploads/2024/01/MLPE-Mounted-with-Clip-268x170.jpg',
        header:'S-5! debuts MLPE Mount at Intersolar',
        source:'Kelli Kalvin',
        date:'January 20, 2024'
      },{
        img:'https://www.solarpowerworldonline.com/wp-content/uploads/2024/01/Edwards-and-Sanborn-solar-project-268x170.jpg',
        header:'The largest US solar + storage project is complete',
        source:'Kelli Kalvin',
        date:'January 21, 2024'
      },{
        img:'https://www.solarpowerworldonline.com/wp-content/uploads/2022/07/solar-stock-half-cut-1-268x170.jpg',
        header:'EPRI launches Interoperability Lab to advance DER integration',
        source:'Kelli Kalvin',
        date:'January 22, 2024'
      },{
        img:'https://www.solarpowerworldonline.com/wp-content/uploads/2024/01/ohana-hope-village-web-268x170.jpg',
        header:'How solar + storage technologies are aiding Hawaii wildfire relief',
        source:'Kelli Kalvin',
        date:'January 22, 2024'
      }]

      SetData(data)
    },[])



    return ( 
        <div style={{paddingLeft:'20px',paddingRight:'20px'}}>
                   {data ? data.map((card,i) => <CardComponent imageSrc={card.img} header={card.header} source={card.source} date={card.date} key={i} />) : null}
        </div>

    )
}



export default RenderCard