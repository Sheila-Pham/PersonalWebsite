import { Route, Switch } from "react-router-dom";
import {Grid} from '@mui/material';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import WorkPage from './Components/WorkPage';
import PortfolioPage from './Components/PortfolioPage';
import ContactPage from './Components/ContactPage';
import Navbar from "./UI/Navbar";

const Routes = (props) => {
    const routes = (
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/about' component={AboutPage}/>
            <Route exact path='/work' component={WorkPage}/>
            <Route exact path='/portfolio' component={PortfolioPage}/>
            <Route exact path='/contact' component={ContactPage}/>
        </Switch>
    )

    return(
        <Grid>
            <Navbar/>
            {routes}
        </Grid>
    )
}

export default Routes;