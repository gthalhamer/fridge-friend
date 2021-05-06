import React from 'react';
import ScrollToTop from '../utils/ScrollToTop';
import SignIn from '../components/Signin/Signin';

//todo sign in page header looks different than Home page Header
const SignInPage = () => {
    return (
        <>
            <ScrollToTop />
            <SignIn />
        </>
    );
};

export default SignInPage
