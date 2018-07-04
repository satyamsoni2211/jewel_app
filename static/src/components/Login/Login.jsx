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
    ModalFooter
} from 'reactstrap';
import { Aux, imageHandler, notify } from '../utilities/utilities.jsx';
import $ from 'jquery';
import { ToastContainer } from 'react-toastify';

class Login extends Component {
    state = {
        modal: false,
        username: '',
        usernameInvalid: false,
        email: '',
        emailInvalid: false,
        password: '',
        passwordInvalid: false,
        passwordMessage: '',
        password1: '',
        password1Invalid: false,
        password1Message: '',
        pic: '',
        adress: '',
        contact: '',
        contactInvalid: false,
        contactMessage: '',
        usernameMessage: '',
        emailMessage: '',
    }
    validateForm = () => {
        let {
            usernameInvalid,
            password1Invalid,
            passwordInvalid,
            emailInvalid,
            contactInvalid
        } = this.state;
        return !usernameInvalid && !password1Invalid && !passwordInvalid && !emailInvalid && !contactInvalid
    }
    signUp = () => {
        // console.log(this.validateForm())
        let {
            username,
            password,
            email,
            contact,
            adress,
            pic
        } = this.state;
        let data = {
            username,
            password,
            email,
            contact,
            adress,
            pic
        }
        if (this.validateForm()) {
            console.log('signing up');
            $.ajax({
                url: '/accounts/signUp/',
                data: data,
                type: 'POST',
                success: response => {
                    console.log(response);
                    notify(response.details, 'info');
                    this.setState({ modal: false });
                },
                error: (xhr, status, error) => {
                    console.log(error);
                }
            });
        }
    }
    // login = () => {
    //     let {
    //         username,
    //         password,
    //         usernameInvalid,
    //         passwordInvalid
    //     } = this.state;
    //     let data = {
    //         username,
    //         password
    //     };
    //     if (!usernameInvalid && !passwordInvalid) {
    //         $.ajax({
    //             url: '/accounts/login/',
    //             data: data,
    //             type: 'POST',
    //             success: response => {
    //                 console.log(response);
    //             },
    //             error: (xhr,status,error) => {
    //                 console.log(error);
    //             }
    //         });
    //     }
    // }
    validate = (field, type = null) => {
        if (type != null) {
            switch (type) {
                case 'username':
                    $.ajax({
                        url: '/accounts/checkUserName/',
                        type: 'POST',
                        data: {
                            username: field
                        },
                        success: (response) => {
                            if (response.username && field.length > 5) {
                                this.setState({ username: field, usernameInvalid: false });
                            }
                            else if (response.username && !(field.length > 5)) {
                                this.setState({
                                    username: field, usernameInvalid: true,
                                    usernameMessage: <span>
                                        <i className="far fa-times-circle"></i>{' '}Length Should be greater than 5 Characters
                            </span>
                                });
                            }
                            else if (!response.username) {
                                this.setState({
                                    username: field, usernameInvalid: true,
                                    usernameMessage: <span>
                                        <i className="far fa-times-circle"></i>{' '}Oh noes! that name is already taken
                                </span>
                                });
                            }
                        }
                    });
                    break;
                case 'email':
                    if (/\S+\@\S+(\.com|\.co\.\S{2,})$/g.test(field)) {
                        this.setState({
                            email: field, emailInvalid: false,
                            emailMessage: <span className='text-success'>
                                <span className='badge badge-success'><i className="fas fa-check"></i></span> Valid Email
                    </span>
                        });

                    } else {
                        this.setState({
                            email: field, emailInvalid: true,
                            emailMessage: <span>
                                <i className="far fa-times-circle"></i>{' '}Please enter a valid email
                        </span>
                        });
                    }
                    break;
                case 'password':
                    if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@!%*#?&\.])[A-Za-z\d$@!%*#?&\.]{6,}$/g.test(field)) {
                        this.setState({
                            password: field, passwordInvalid: false,
                            passwordMessage: <span className='text-success'>
                                <span className='badge badge-success'><i className="fas fa-check"></i></span> Password Valid
                                </span>
                        });
                    }
                    else {
                        this.setState({
                            password: field, passwordInvalid: true,
                            passwordMessage: <span>
                                <i className="far fa-times-circle"></i>{' '}Password must be atleast 6 characters long
                                and contain one letter, one number and once special character ($@!%*#?&.)
                    </span>
                        });
                    }
                    break;
                case 'password1':
                    if (field == this.state.password) {
                        this.setState({
                            password1: field, password1Invalid: false,
                            password1Message: <span className='text-success'>
                                <span className='badge badge-success'><i className="fas fa-check"></i></span> Matched
                                </span>
                        });
                    } else {
                        this.setState({
                            password1: field, password1Invalid: true,
                            password1Message: <span>
                                <i className="far fa-times-circle"></i>{' '}Password does not match
                </span>
                        });
                    }
                    break;
                case 'contact':
                    if (/^(\+\d{12}|\d{10})$/g.test(field)) {
                        this.setState({
                            contact: field, contactInvalid: false,
                            contactMessage: <span className='text-success'>
                                <span className='badge badge-success'><i className="fas fa-check"></i></span> Valid Contact
                                </span>
                        });
                    } else {
                        this.setState({
                            contact: field, contactInvalid: true,
                            contactMessage: <span>
                                <i className="far fa-times-circle"></i>{' '}Invalid Contact can start with +91 and should contain 10 digits
            </span>
                        });
                    }
                    break;
                default:
                    return;
            }
        }
    }
    render() {
        return (
            <Aux>
                <ToastContainer />
                <div className="row justify-content-center" style={{ height: '100vh' }}>
                    <div className="col-sm-4 p-5 m-5 bg-light align-self-center shadow rounded text-center">
                        <h2 className='text-uppercase'>login</h2>
                        <hr className='clear-both' />
                        <Form action='/accounts/login/' method='POST'>
                            <FormGroup>
                                <Label for="exampleEmail">Username</Label>
                                <Input type='text' name='username'
                                    value={this.state.username}
                                    onChange={e => {
                                        let username = e.target.value;
                                        if (username != '') {
                                            this.setState({ username, usernameInvalid: false });
                                        } else {
                                            this.setState({ usernameInvalid: true })
                                        }
                                    }}
                                    invalid={this.state.usernameInvalid} />
                                <FormFeedback>Please provide password</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">Password</Label>
                                <Input type='password' name='password'
                                    value={this.state.password}
                                    onChange={e => {
                                        let password = e.target.value;
                                        if (password != '') {
                                            this.setState({ password, passwordInvalid: false });
                                        } else {
                                            this.setState({ passwordInvalid: true })
                                        }
                                    }}
                                    invalid={this.state.passwordInvalid} />
                                <FormFeedback>Please provide password</FormFeedback>
                            </FormGroup>
                            <div className='row'>
                                <div className="col-md-6"></div>
                                <div className="col-md-6">
                                    <small className='text-info pull-right'
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => { this.setState({ modal: !this.state.modal }) }}>Dont have account ? Signup</small>
                                </div>
                            </div>
                            {
                                !this.state.usernameInvalid && !this.state.passwordInvalid && 
                            <Button className='btn btn-outline-dark mt-3' type='submit'>Submit</Button>
                            }
                        </Form>
                    </div>
                </div>
                <Modal isOpen={this.state.modal} className='rounded'>
                    <ModalBody className='bg-light text-info'>
                        <div className="col-md-12 p-4">
                            <h3 className='text-uppercase text-center'>Signup for Jewel app</h3>
                            <hr className='clear-both' />
                            <Form>
                                <FormGroup>
                                    <Label for="Username">Username</Label>
                                    <Input type="text" name="username" id="Username" placeholder="Enter username"
                                        invalid={this.state.usernameInvalid}
                                        value={this.state.username}
                                        onChange={e => this.validate(e.target.value, 'username')} />{
                                        !this.state.usernameInvalid && this.state.username != '' &&
                                        <span className='text-success'>
                                            <span className='badge badge-success'><i className="fas fa-check"></i></span> Valid Username
                                                </span>
                                    }
                                    <FormFeedback>{this.state.usernameMessage}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="Email">Email</Label>
                                    <Input type="email" name="email" id="Email" placeholder="Enter Email"
                                        value={this.state.email}
                                        onChange={e => this.validate(e.target.value, 'email')}
                                        invalid={this.state.emailInvalid} />
                                    {!this.state.emailInvalid && this.state.emailMessage}
                                    <FormFeedback>{this.state.emailMessage}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="Password">Password</Label>
                                    <Input type="password" name="password" id="Password" placeholder="Enter Password"
                                        value={this.state.password}
                                        invalid={this.state.passwordInvalid}
                                        onChange={e => this.validate(e.target.value, 'password')} />
                                    {
                                        !this.state.passwordInvalid && this.state.passwordMessage
                                    }
                                    <FormFeedback>{this.state.passwordMessage}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="confirmPassword">Confirm Password</Label>
                                    <Input type="password" name="confirmpassword" id="confirmPassword" placeholder="Enter Password"
                                        value={this.state.password1}
                                        onChange={e => this.validate(e.target.value, 'password1')}
                                        invalid={this.state.password1Invalid}
                                    />
                                    {
                                        !this.state.password1Invalid && this.state.password1Message
                                    }
                                    <FormFeedback>{this.state.password1Message}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="Contact">Contact</Label>
                                    <Input type="text" name="contact" id="Contact" placeholder="Enter Phone number"
                                        value={this.state.contact}
                                        onChange={e => this.validate(e.target.value, 'contact')}
                                        invalid={this.state.contactInvalid} />
                                    {
                                        !this.state.contactInvalid && this.state.contactMessage
                                    }
                                    <FormFeedback>{this.state.contactMessage}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="Adress">Address</Label>
                                    <Input type="textarea" name="adress" id="Adress" placeholder="Enter Address"
                                        value={this.state.adress}
                                        onChange={e => this.setState({ adress: e.target.value })} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="profilePic">Pic</Label>
                                    <Input type="file" name="pic" id="profilePic" placeholder="Select Profile Pic"
                                        onChange={e => imageHandler(e, (data) => this.setState({ pic: data }))}
                                    />
                                </FormGroup>
                            </Form>
                        </div>
                    </ModalBody>
                    <ModalFooter className='bg-dark text-light'>
                        <Button className='btn btn-outline-light' onClick={this.signUp}>Signup</Button>{' '}
                        <Button className='btn btn-outline-light' onClick={() => this.setState({ modal: !this.state.modal })}>Cancel</Button>
                    </ModalFooter>
                </Modal>

            </Aux>
        );
    }
}

export default Login;