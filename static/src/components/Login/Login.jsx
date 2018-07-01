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
                <Modal isOpen={this.state.modal} className='rounded'>
                    <ModalBody className='bg-dark text-light'>
                        <div className="col-md-12 p-4">
                            <h3 className='text-uppercase text-center'>Signup for Jewel app</h3>
                            <hr className='clear-both' />
                            <Form>
                                <FormGroup>
                                    <Label for="Username">Username</Label>
                                    <Input type="text" name="username" id="Username" placeholder="Enter username" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="Email">Email</Label>
                                    <Input type="email" name="email" id="Email" placeholder="Enter Email" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="Password">Password</Label>
                                    <Input type="password" name="password" id="Password" placeholder="Enter Password" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="confirmPassword">Confirm Password</Label>
                                    <Input type="password" name="confirmpassword" id="confirmPassword" placeholder="Enter Password" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="Contact">Contact</Label>
                                    <Input type="text" name="contact" id="Contact" placeholder="Enter Phone number" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="Adress">Confirm Password</Label>
                                    <Input type="textarea" name="adress" id="Adress" placeholder="Enter Address" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="profilePic">Pic</Label>
                                    <Input type="file" name="pic" id="profilePic" placeholder="Select Profile Pic" />
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