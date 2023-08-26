import { Box, Grid, Typography } from "@mui/material"
import {useTheme} from "@mui/material";

const HomePage = () => {
    const THEME = useTheme();
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
                    From idea, to reality
                </Typography>
            </Box>
            
            <Grid container justifyContent="center">
                <Grid item xs={8}>
                    <Grid container direction="row" spacing={2}>
                        <Grid item xs={12} container justifyContent="center">
                            <Box
                                sx={{ borderRadius: 2, p: 1 ,}}
                            >
                                <Grid container justifyContent="space-between" alignContent="center" >

                                    <Box sx={{ height: 600, borderRadius: 30, m: 1 }} component="img" src="../Images/2dpicasset/tml.png" />
                                    <Box sx={{ height: 600, borderRadius: 30, m: 1 }} component="img" src="../Images/3dpicasset/tml3d.png" />
                                    <Box sx={{ height: 600, borderRadius: 30, m: 1 }} component="img" src="../Images/3dpicasset/tml3dprint.jpg" />

                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container justifyContent="center">
                <Grid item xs={12}>
                    <Grid container direction="row" spacing={2} >
                        <Grid item xs={12} container justifyContent="center">
                            <Box
                                sx={{ borderRadius: 2, p: 1 ,}}
                            >
                                <Grid container justifyContent="space-between" alignContent="center">

                                    <Box sx={{ height: 600, borderRadius: 30, m: 1 }} component="img" src="../Images/2dpicasset/tml_desktop_yaga.png" />
                                    <Box sx={{ height: 600, borderRadius: 30, m: 1 }} component="img" src="../Images/2dpicasset/tmlKeypad.jpg" />

                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </>
    )
}
export default HomePage