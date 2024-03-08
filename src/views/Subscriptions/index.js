import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import { NavLink, Nav,NavItem,TabContent,TabPane} from 'reactstrap';
import DataTable from "react-data-table-component";
import axios from 'axios';

const header = [
    {
        name:"Subscription Id",
        selector:"id",
        sortable:true,
    },
    {
        name:"Name",
        selector:"name",
        sortable:true,
    },
    {
        name:"Store",
        selector:"store",
    },
    {
        name:"Email Id",
        selector:"email",
    },
    {
        name:"Capital for Inventory",
        selector:"capital",
        sortable:true,
    },
    {
        name:"Action",
        selector:"action",
    },
];

export default function Subscriptions () {

    const [activeTab, setActiveTab] = useState("active");
    const [subscriptionData, setSubscriptionData] = useState([]);

    useEffect(() => {
        axios
            .get('http://100.25.25.75:7000/Subscription')
            .then((res) => {
                let data = res.data.slice(0, 50)
                console.log(data)
                let temp = [];
                data.map((subscription) => {
                    temp.push({
                        id: subscription.subscriptionId,
                        name: "Dylan Haselton",
                        store: "Warehouse Sales Amazon",
                        email: subscription.subscriptionTitle,
                        capital: "$5000",
                        action: (<div></div>)
                    });
                })
                setSubscriptionData(temp);
            });
    }, [])

    return(
        <div>
            <div className="row iq-card" style={{justifyContent: 'space-between', padding: 15}}>
                <span style={{fontSize: 22, color: 'black', fontWeight: 500}}>Subscriptions</span>
                <Link to="/subscriptions/add" className="btn btn-primary mt">
                    <span style={{fontSize: 18}}>Add Subscriptions</span>
                </Link>
            </div>
            <div className="row iq-card" style={{padding: 40}}>
                <div style={{width: '100%'}}>
                    <Nav className="nav nav-tabs" id="myTab-1" role="tablist">
                        <NavItem className="nav-item">
                            <NavLink
                                className={(activeTab === "active" ? " active" : "")}
                                onClick={() => { setActiveTab('active'); }}
                            >
                                Active
                            </NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink
                                className={(activeTab === "blocked" ? " active" : "")}
                                onClick={() => { setActiveTab('blocked'); }}
                            >
                                Blocked
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab} className="tab-content">
                        <TabPane tabId="active">
                            <DataTable
                                columns={header}
                                data={subscriptionData}
                            />
                        </TabPane>
                        <TabPane tabId="blocked">
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </div>
    )
}
