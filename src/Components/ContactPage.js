import { Box, Card, CardContent, Grid, Tooltip, Typography } from "@mui/material"
import {useTheme} from "@mui/material";

const ContactPage = () => {
    return(
        <>
            <Grid container justifyContent="center">
                <Grid item xs={4}>
                {/* <Card elevation={0} sx={{ marginBottom: 2 }}>
                                <CardContent> */}
                                    <Grid container direction="row" spacing={2}>
                                        <Grid item xs={12} container alignItems="center">
                                            <Box
                                                sx={{ borderRadius: 2, p: 1 }}
                                            >
                                                <Grid container justifyContent="space-between" alignContent="center">
                                                    <Tooltip>
                                                        <Box sx={{ width: '20%', borderRadius: 50, m: 1 }} component="img" src="../PersonalWebsite/Images/logopic/LinkedIn_logo.png" onClick={() => window.open('https://www.linkedin.com/in/sheila-eve-pham-657468175/')}/>
                                                    </Tooltip>
                                                    <Tooltip>
                                                        <Box sx={{ width: '20%', borderRadius: 50, m: 1 }} component="img" src="../PersonalWebsite/Images/logopic/youtube_logo.jpg" onClick={() => window.open('https://www.youtube.com/@bingbunz/featured')}/>
                                                    </Tooltip>
                                                    <Tooltip>
                                                        <Box sx={{ width: '20%', borderRadius: 50, m: 1 }} component="img" src="../PersonalWebsite/Images/logopic/twitter_logo.jpg" onClick={() => window.open('https://twitter.com/bingbunz')}/>
                                                    </Tooltip>
                                                    <Tooltip>
                                                        <Box sx={{ width: '20%', borderRadius: 50, m: 1 }} component="img" src="../PersonalWebsite/Images/logopic/DeviantArt_logo.png" onClick={() => window.open('https://www.deviantart.com/sheilabananapeela')}/>
                                                    </Tooltip>
                                                </Grid>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                {/* </CardContent>
                </Card> */}
                </Grid>
            </Grid>
        </>
    )
}
export default ContactPage