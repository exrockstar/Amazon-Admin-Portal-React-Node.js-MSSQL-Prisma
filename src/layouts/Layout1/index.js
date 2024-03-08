import React from 'react';
import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";

// Import for the page assets...
/*import { index } from "../../config/pluginsInit";*/
import '../../assets/scss/style.scss';
import '../../assets/css/style.css';

// Import Custom components...
import { SideBarStyle1, NavBarStyle1 } from '../../components/sofbox';
import Home from '../../views/Home';
import Subscriptions from '../../views/Subscriptions';
import AddSubscriptions from '../../views/Subscriptions/add';
import Dashboard1 from '../../views/Dashboard/Dashboard1';
import Analytics from '../../views/Dashboard/Analytics';
import WebAnalytics from '../../views/Dashboard/WebAnalytics';
import PatientDashboard from '../../views/Dashboard/PatientDashboard';
import TicketBooking from '../../views/Dashboard/TicketBooking';
import TrackingDashboard from '../../views/Dashboard/Tracking';
import {Row} from 'reactstrap';


import { Switch, Route } from 'react-router-dom'
import sideBarItems from '../../fakeData/json/sideBar';

class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    text: 'Dashboard',
                    href: '/dashboard1/home'
                },
                {
                    text: 'Home',
                    active: true
                }
            ],
            footerItems: [
                {
                    title: "Privacy Policy",
                    href: "/",
                },
                {
                    title: "Terms of Use",
                    href: "/",
                }
            ],
            footerTitle: "Copyright 2020 Sofbox All Rights Reserved.",
            collapsed: false
        }
    }
    componentDidMount() {
        /*index();*/
    }

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    };

    render() {
        const { items, footerItems, footerTitle, collapsed } = this.state;
        return (
            <>
                <div className="wrapper">

                    <SideBarStyle1
                        items={sideBarItems}
                        logo={require('../../assets/images/QE-Logo.png')}
                        homeUrl={"/"}
                    />

                    <NavBarStyle1
                        title={"Dashboard"}
                        homeUrl={"/"}
                        logo={require('../../assets/images/logo.png')}
                    >
                        <Row style={{width: '100%'}}>
                            <ul className="navbar-nav ml-auto navbar-list">
                                <li className="nav-item" style={{paddingRight: 20}}>
                                    <a className="search-toggle iq-waves-effect" href="!#">
                                        <i style={{fontSize: 23}} className="ri-user-line" /></a>
                                    <form action="#" className="search-box">
                                        <input type="text" className="text search-input"
                                            placeholder="Type here to search..." />
                                    </form>
                                </li>
                                <li className="nav-item" style={{display: 'flex', alignItems: 'center', paddingRight: 50}}>
                                    <span style={{color: 'black', fontSize: 18}}>
                                        Welcome JJ
                                    </span>
                                </li>
                                <li style={{display: 'flex', alignItems: 'center'}}>
                                    <button className="btn btn-primary">Logout</button>
                                </li>
                            </ul>
                        </Row>
                    </NavBarStyle1>

                    <div id="content-page" className={"content-page"}>
                        <div className="container-fluid">
                            <TransitionGroup>
                                <CSSTransition
                                    key={this.props.location.key}
                                    classNames="dialog"
                                    timeout={300}
                                >
                                    <Switch location={this.props.location}>
                                        <Route path="/subscriptions/add" component={AddSubscriptions} />
                                        <Route path="/subscriptions" component={Subscriptions} />


                                        <Route path="/dashboard2" component={Dashboard1} />
                                        <Route path="/analytics" component={Analytics} />
                                        <Route path="/web-analytics" component={WebAnalytics} />
                                        <Route path="/patient" component={PatientDashboard} />
                                        <Route path="/ticket-booking" component={TicketBooking} />
                                        <Route path="/tracking" component={TrackingDashboard} />
                                        <Route path="/" exect component={Home} />

                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        </div>

                    </div>

                </div>

                {/* <FooterStyle1 footerNavList={footerItems} title={footerTitle} /> */}
            </>
        );
    }
}

export default Index;
