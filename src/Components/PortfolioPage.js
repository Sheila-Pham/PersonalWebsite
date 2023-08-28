import Carousel from "react-material-ui-carousel";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import {Box} from "@mui/material";
import { Card, CardHeader, CardContent, Typography, CardMedia } from "@mui/material";
import "./carouselX.css";

const PortfolioPage = () => {
  const carouselItems = [
    {
      name: "An entry for Epic Seven's chibi contest",
      description: "Probably the most random thing you have ever seen!",
      imgRoute:"../PersonalWebsite/Images/2dpicasset/natalonMonkGimp.png",
    },
    {
        name: "Inspired to recreate the famouse Honolulu Cookie Company t-shirt design with Adobe Illustrator",
        description: "Hello World!",
        imgRoute:"../PersonalWebsite/Images/2dpicasset/pineappleCookie.png",
    },
    {
        name: "Made up of only simple shapes, text and limited color selections",
        description: "Hello World!",
        imgRoute:"../PersonalWebsite/Images/2dpicasset/hamsta.jpg",
    },
    {
        name: "Upcoming foodtruck for 626 Night market",
        description: "Hello World!",
        imgRoute:"../PersonalWebsite/Images/2dpicasset/arthureatLogoSS.jpg",
    },
    {
      name: "Used Blender to make a game asset",
      description: "Hello World!",
      imgRoute:"../PersonalWebsite/Images/3dpicasset/solitariaSS.jpg",
    },
    {
      name: "Final fantasy inspired golem",
      description: "Hello World!",
      imgRoute:"../PersonalWebsite/Images/2dpicasset/golem.jpg",
    },
    {
        name: "I make stickers for Discord",
        description: "Hello World!",
        imgRoute:"../PersonalWebsite/Images/2dpicasset/hachikujiStickerUWU.png",
    },
    {
        name: "Had a go with acrylic paint",
        description: "Hello World!",
        imgRoute:"../PersonalWebsite/Images/2dpicasset/mdzs.jpg",
    }
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
export default PortfolioPage