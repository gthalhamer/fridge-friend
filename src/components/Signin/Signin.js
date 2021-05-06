import React from 'react'

import { Container, FormLabel, FormWrap, Icon, FormContent, Form, FormH1, FormInput, FormButton, Text } from './SigninElements'

const SignIn = () => {


    return (
        <>
            <Container>
                <FormWrap>
                    {/* <Icon to="/">Fridge Friend</Icon> */}
                    <FormContent>
                        <Form action="#">
                        <Icon to="/">Fridge Friend</Icon>
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                                <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                                <FormInput type='password' required />
                            <FormButton type='submit' onClick={() => alert("This feature isn't available yet! Please click the logo at the top of the box to return to the main screen.")}>Continue</FormButton>
                            <Text>Forgot password?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container> 
        </>
    )
}

export default SignIn
