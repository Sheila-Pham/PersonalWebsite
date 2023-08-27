import { Box, Card, CardContent, Grid, Tooltip, Typography } from "@mui/material"
import {useTheme} from "@mui/material";

const AboutPage = () => {
    const THEME = useTheme();
    return(
        <>
            <Grid container justifyContent="center">
                <Grid item xs={8}>
                {/* <Card elevation={0} sx={{ marginBottom: 2 }}>
                                <CardContent> */}
                                    <Grid container direction="row" spacing={2}>
                                        <Grid item xs={12} container alignItems="center">
                                            <Box
                                                sx={{ borderRadius: 2, p: 1 }}
                                            >
                                                <Grid container justifyContent="space-between" alignContent="center">
                                                    <Tooltip title="Epic7">
                                                        <Box sx={{ width: '20%', borderRadius: 50, m: 1 }} component="img" src="../PersonalWebsite/Images/pic1.png" />
                                                    </Tooltip>
                                                    <Tooltip title="League of Legends">
                                                        <Box sx={{ width: '20%', borderRadius: 50, m: 1 }} component="img" src="../PersonalWebsite/Images/pic2.png" />
                                                    </Tooltip>
                                                    <Tooltip title="Anime">
                                                        <Box sx={{ width: '20%', borderRadius: 50, m: 1 }} component="img" src="../PersonalWebsite/Images/pic3.gif" />
                                                    </Tooltip>
                                                    <Tooltip title="Novels">
                                                        <Box sx={{ width: '20%', borderRadius: 50, m: 1 }} component="img" src="../PersonalWebsite/Images/pic4.png" />
                                                    </Tooltip>
                                                </Grid>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                {/* </CardContent>
                </Card> */}
                </Grid>
            </Grid>

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
                Hi, my name is Sheila Eve Pham. I am a Vietnamese-American living in the Orange County. I went to The 
                University of California, San Diego for computer engineering. I enjoy traveling to new places, 
                eating delicious food, playing games, drawing and reading novels. 
                </Typography>
            </Box>

            <Grid container direction="row" spacing={2}>
                <Grid item xs={12} container alignItems="center">
                    <Box
                        sx={{ borderRadius: 2, p: 1 }}
                    >
                        <Grid container justifyContent="space-between" alignContent="center">
                            <Tooltip title="Beautiful lanterns in Hoi'An">
                                <Box sx={{ width: '20%', borderRadius: 50, m: 1 }} component="img" src="../PersonalWebsite/Images/headPic/vietnamPic.jpg" />
                            </Tooltip>
                            <Tooltip title="First time in Whistler">
                                <Box sx={{ width: '20%', borderRadius: 50, m: 1 }} component="img" src="../PersonalWebsite/Images/headPic/whistlerPic.jpg" />
                            </Tooltip>
                            <Tooltip>
                                <Box sx={{ width: '20%', borderRadius: 50, m: 1 }} component="img" src="../PersonalWebsite/Images/headPic/genericPic.jpg" />
                            </Tooltip>
                            <Tooltip title="Anime Expo">
                                <Box sx={{ width: '20%', borderRadius: 50, m: 1 }} component="img" src="../PersonalWebsite/Images/headPic/AXPic.jpg" />
                            </Tooltip>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>

        </>
    )
}
export default AboutPage