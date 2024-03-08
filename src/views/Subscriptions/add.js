import React, { useEffect } from 'react';
import { Col, Form, FormGroup,Label,Input} from 'reactstrap';


export default function Subscriptions () {

    useEffect(() => {

    }, [])

    return(
        <div>
            <div className="row iq-card" style={{padding: 15}}>
                <span style={{fontSize: 22, color: 'black', fontWeight: 500}}>Add Subscriptions</span>
            </div>
            <div className="row iq-card" style={{padding: 40}}>
                <div style={{width: '40%'}}>
                    <Form className="form-horizontal">
                        <FormGroup className="form-group row">
                            <Col style={{display: 'flex', alignItems: 'center'}} sm={3}>
                                <Label className="control-label align-self-center mb-0" for="id">Unique ID</Label>
                            </Col>
                            <Col sm={9}>
                                <Input type="text" className="form-control" id="id" placeholder="Enter ID" />
                            </Col>
                        </FormGroup>
                        <FormGroup className="form-group row">
                            <Col style={{display: 'flex', alignItems: 'center'}} sm={3}>
                                <Label className="control-label align-self-center mb-0" for="name">Name</Label>
                            </Col>
                            <Col sm={9} >
                                <Input type="text" className="form-control" id="name" placeholder="Enter Name" />
                            </Col>
                        </FormGroup>
                        <FormGroup className="form-group row">
                            <Col style={{display: 'flex', alignItems: 'center'}} sm={3}>
                                <Label className="control-label align-self-center mb-0" for="email">Email ID</Label>
                            </Col>
                            <Col sm={9} >
                                <Input type="email" className="form-control" id="email" placeholder="Enter Email" />
                            </Col>
                        </FormGroup>
                        <FormGroup className="form-group row">
                            <Col style={{display: 'flex', alignItems: 'center'}} sm={3}>
                                <Label className="control-label align-self-center mb-0" for="note">Note</Label>
                            </Col>
                            <Col sm={9} >
                                <Input type="text" className="form-control" id="note" placeholder="Enter Note" />
                            </Col>
                        </FormGroup>
                        <FormGroup className="form-group row">
                            <Col style={{display: 'flex', alignItems: 'center'}} sm={3}>
                                <Label className="control-label align-self-center mb-0" for="capital">Capital for Inventory</Label>
                            </Col>
                            <Col sm={9} >
                                <Input type="text" className="form-control" id="capital" placeholder="Enter Capital Inventory" />
                            </Col>
                        </FormGroup>
                        <FormGroup className="form-group row">
                            <Col style={{display: 'flex', alignItems: 'center'}} sm={3}>
                                <Label className="control-label align-self-center mb-0" for="inventory_note">Inventory Note</Label>
                            </Col>
                            <Col sm={9} >
                                <Input type="text" className="form-control" id="inventory_note" placeholder="Enter Inventory Note" />
                            </Col>
                        </FormGroup>
                        <FormGroup style={{marginTop: 60, justifyContent: 'center', display: 'flex'}} className="form-group">
                            <button style={{width: 200}} type="submit" className="btn btn-primary">Submit</button>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
    )
}
