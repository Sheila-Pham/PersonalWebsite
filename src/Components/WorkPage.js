import { Box, Card, CardContent, Grid, Tooltip, Typography } from "@mui/material"
import {useTheme} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import "./carouselX.css";

const WorkPage = () => {
    const carouselItems = [
        {
          name: "Airbus beluga but it can swim and fly",
          description: "Probably the most random thing you have ever seen!",
          imgRoute:"../PersonalWebsite/Images/3dpicasset/airBusBelugaSS.png",
        },
        {
            name: "An airport tug",
            description: "Hello World!",
            imgRoute:"../PersonalWebsite/Images/3dpicasset/airportTugSS.png",
        },
        {
            name: "A fire extinguisher",
            description: "Hello World!",
            imgRoute:"../PersonalWebsite/Images/3dpicasset/fireExtinguisherSS.png",
        },
        {
            name: "Commission for D&D fantasy story",
            description: "Hello World!",
            imgRoute:"../PersonalWebsite/Images/2dpicasset/dragon.jpg",
        },
        {
            name: "Safety cone",
            description: "Hello World!",
            imgRoute:"../PersonalWebsite/Images/3dpicasset/safetyConeSS.png",
        },
        {
          name: "Inspired by Japan's Mori Gate",
          description: "Hello World!",
          imgRoute:"../PersonalWebsite/Images/3dpicasset/shintoShrineSS.png",
        },
      ]
    
      function CarouselCard(props) {
        const {item} = props;
        return(
          <Card>
            <CardContent sx={{textAlign: "center",}}>
              <Box
                sx={{
                  height: 600,
                  maxHeight: { xs: 300, md: 600 },
                  justifyContent:"center"
                }}
                component="img"
                src={item.imgRoute}
              >
              </Box>
      
              <Typography sx={{
                          fontFamily: 'monospace',
                          fontWeight: 100,
                          letterSpacing: '.1rem',
                          color: 'black',
                          }}
              >
              {item.name}
              </Typography>
              
            </CardContent>
          </Card>
        )
       } 

    return(
        <>
            <Box sx={{ bgcolor: '#f4d0da ', 
                       height: '10vh',
                       display: 'flex',
                       justifyContent: 'center',
                       alignContent:'center' }}>
                <Typography
                    variant="h6"
                    component="a"
                    href="/"
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex'},
                    fontFamily: 'monospace',
                    fontWeight: 100,
                    letterSpacing: '.1rem',
                    color: 'black',
                    textDecoration: 'none',
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems:"center"
                    }}
                >
                    I am a technical artist with software engineering experience working in the aerospace industry. Some tools I use are
                    Adobe Illustrator, 3DS Max, Unreal Engine and Git.
                </Typography>
            </Box>

            <Carousel
                autoPlay={false}
                next={ () => {/* Do stuff */} }
                prev={ () => {/* Do other stuff */} }
                NextIcon={<ArrowForward/>}
                PrevIcon={<ArrowBack/>}
                showArrows={true}
            >
                {carouselItems.map((item, index)=> <CarouselCard item={item}/>)}
            </Carousel>

        </>
    )
}
export default WorkPage