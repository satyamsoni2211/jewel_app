import React, { Component } from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    FormFeedback,
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    FormText
} from 'reactstrap';
import { Aux } from '../utilities/utilities.jsx';

class Login extends Component {
    state = {
        modal: false
    }
    render() {
        return (
            <Aux>
                <div className="row justify-content-center" style={{ height: '100vh' }}>
                    <div className="col-sm-4 p-5 m-5 bg-light align-self-center shadow rounded text-center">
                        <h2 className='text-uppercase'>login</h2>
                        <hr className='clear-both' />
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Username</Label>
                                <Input type='text' />
                                <FormFeedback>You will not be able to see this</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">Password</Label>
                                <Input type='password' />
                            </FormGroup>
                            <div className='row'>
                                <div className="col-md-6"></div>
                                <div className="col-md-6">
                                    <small className='text-info pull-right'
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => { this.setState({ modal: !this.state.modal }) }}>Dont have account ? Signup</small>
                                </div>
                            </div>
                            <Button className='btn btn-outline-dark mt-3'>Submit</Button>
                        </Form>
                    </div>
                </div>
                <Modal isOpen={this.state.modal}>
                    <ModalBody className='bg-dark text-light'>
                        <div className="col-md-12 p-4">
                            <h3 className='text-uppercase text-center'>Signup for Jewel app</h3>
                            <hr className='clear-both' />
                            <Form>
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleUrl">Url</Label>
                                    <Input type="url" name="url" id="exampleUrl" placeholder="url placeholder" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleNumber">Number</Label>
                                    <Input type="number" name="number" id="exampleNumber" placeholder="number placeholder" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleDatetime">Datetime</Label>
                                    <Input type="datetime" name="datetime" id="exampleDatetime" placeholder="datetime placeholder" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleDate">Date</Label>
                                    <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleTime">Time</Label>
                                    <Input type="time" name="time" id="exampleTime" placeholder="time placeholder" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleColor">Color</Label>
                                    <Input type="color" name="color" id="exampleColor" placeholder="color placeholder" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSearch">Search</Label>
                                    <Input type="search" name="search" id="exampleSearch" placeholder="search placeholder" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">Select</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelectMulti">Select Multiple</Label>
                                    <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleText">Text Area</Label>
                                    <Input type="textarea" name="text" id="exampleText" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleFile">File</Label>
                                    <Input type="file" name="file" id="exampleFile" />
                                    <FormText color="muted">
                                        This is some placeholder block-level help text for the above input.
                                        It's a bit lighter and easily wraps to a new line.
                            </FormText>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" />{' '}
                                        Option one is this and that—be sure to include why it's great
                                </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        Check me out
                                </Label>
                                </FormGroup>
                            </Form>
                        </div>
                    </ModalBody>
                    <ModalFooter className='bg-dark text-light'>
                        <Button className='btn btn-outline-light' onClick={this.toggle}>Do Something</Button>{' '}
                        <Button className='btn btn-outline-light' onClick={() => this.setState({ modal: !this.state.modal })}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </Aux>
        );
    }
}

export default Login;