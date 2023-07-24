import React,{useContext} from 'react';
import {Box, Typography} from '@mui/material';
import { ScrollMenu , VisibilityContext} from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../../assets/icons/right-arrow.png';
import LeftArrowIcon from '../../assets/icons/left-arrow.png';
import {BodyParts , ExerciseCard} from '../../Components'



const LeftArrow = () => {

    const { scrollPrev } = useContext(VisibilityContext);
    
    return(

        <Typography  onClick={()=>scrollPrev()} className ='left-arrow'>
            <img src={LeftArrowIcon}  alt='right-arrow'/>
        </Typography>

    );


};


const RightArrow = ()=>{

    const { scrollNext } = useContext(VisibilityContext);
    
    return(

        <Typography  onClick={()=>scrollNext()} className ='right-arrow'>
            <img src={RightArrowIcon}  alt='left-arrow'/>
        </Typography>

    )


}





const HorizontalScrollBar = ({data, bodyPart, setBodyPart, isBodyParts}) => {

    
    if (!data) return 'Loading';
    console.log(data);

  return (

            <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
             {
                data.map( (item)=>(
                    <Box 
                    key={item.id || item}
                    itemID={item.id || item}
                    title={item.id || item}
                    m='0 40px'
                         >
                         { 
                            
                            isBodyParts ? 
                            <BodyParts  item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>:
                            <ExerciseCard  exercise={item}/>
                        }
                    </Box>
                        
                ))
             }


            </ScrollMenu>

  )
}

export default HorizontalScrollBar