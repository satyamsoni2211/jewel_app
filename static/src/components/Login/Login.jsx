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
    ModalHeader
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
                                        onClick={()=> {this.setState({modal: !this.state.modal})}}>Dont have account ? Signup</small>
                                </div>
                            </div>
                            <Button className='btn btn-outline-dark mt-3'>Submit</Button>
                        </Form>
                    </div>
                </div>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader>Modal title</ModalHeader>
                    <ModalBody className='bg-dark text-light'>
                        <b>Look at the top right of the page/viewport!</b><br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                     </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={() => this.setState({modal: !this.state.modal})}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </Aux>
        );
    }
}

export default Login;