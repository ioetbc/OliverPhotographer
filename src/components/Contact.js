import React, { Component } from 'react';

import TextField from './Utils/TextField';
import Button from './Utils/Button';
import ButtonClose from './Utils/ButtonClose'

 class Contact extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        document.body.style.overflowY = 'hidden';
    }
    
    componentWillUnmount() {
        document.body.style.overflowY = '';
    }

    render() {
        const { handleContactScreen } = this.props;
        return (
            <React.Fragment>
                <div
                    className="hide-bg"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                <div className="button-close" onClick={handleContactScreen}></div>

                    <form
                        style={{ display: 'flex', flexDirection: 'column' }}
                        action="https://formspree.io/enquiry@oliverphotographer.co.uk"
                        method='POST'
                    >
                        <div className='text-field--container'>
                            <div className='text-field'>
                                <input className='text-field--input' name="Name" id="name" placeholder=' ' type='text' />
                                <label className='text-field--label' for='name'>Name</label>
                            </div>
                        </div>
                        <div className='text-field--container'>
                            <div className='text-field'>
                                <input className='text-field--input' name="Email address" id="email" placeholder=' ' type='email' />
                                <label className='text-field--label' for='email'>Email address</label>
                            </div>
                        </div>
                        <div className='text-field--container'>
                            <div className='text-field'>
                                <input className='text-field--input' name="phone number" id="phone" placeholder=' ' type='number' />
                                <label className='text-field--label' for='phone'>Phone number</label>
                            </div>
                        </div>
                        <div className='text-field--container'>
                            <div className='text-field'>
                                <input className='text-field--input' name="Message" id="message" placeholder=' ' type='text' />
                                <label className='text-field--label' for='message'>Message</label>
                            </div>
                        </div>
                        <button class="pure-material-button-contained">submit</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
 }
 export default Contact;
 