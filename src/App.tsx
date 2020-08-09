import React, { Fragment, lazy, Suspense } from 'react';
import { Switch, Route, withRouter} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
// import loadable from '@loadable/component';

import Header from './components/Header/header.component';
import Footer from './components/Footer/footer.component';
// import LandingPage from './pages/landing';
// import PageNotFound from './pages/404page';
// import PortfolioEventPage from './pages/portfolioEvent';
// import PortfolioPage from './pages/portfolio';
// import ContactsPage from './pages/contacts';
// import PartiesPage from './pages/parties';
// import PartyPage from './pages/party';
import scrollToTop from './hooks/scrollToTop.hook';
import Fallback from './components/Fallback/fallback.component';

const LandingPage = lazy(() => import('./pages/landing'))
const PortfolioPage = lazy(() => import('./pages/portfolio'))
const PageNotFound = lazy(() => import('./pages/404page'))
const PortfolioEventPage = lazy(() => import('./pages/portfolioEvent'))
const ContactsPage = lazy(() => import('./pages/contacts'))
const PartiesPage = lazy(() => import('./pages/parties'))
const PartyPage = lazy(() => import('./pages/party'))

const App = ({location}:any) => {

    scrollToTop()

    return (
        <Fragment>
            <Header/>
            <Suspense fallback={<Fallback/>}>
                <AnimatePresence exitBeforeEnter>
                    <Switch location={location} key={location.pathname}>
                        <Route exact path='/' component={LandingPage}/>
                        <Route exact path='/portfolio/:eventId' component={PortfolioEventPage}/>
                        <Route exact path='/portfolio' component={PortfolioPage}/>
                        <Route exact path='/contacts' component={ContactsPage}/>
                        <Route exact path='/parties' component={PartiesPage}/>
                        <Route exact path='/parties/:partyId' component={PartyPage}/>
                        <Route path='*' component={PageNotFound}/>
                    </Switch>
                </AnimatePresence>
            </Suspense>
            <Footer/>
        </Fragment>
    )
}

export default withRouter(App);