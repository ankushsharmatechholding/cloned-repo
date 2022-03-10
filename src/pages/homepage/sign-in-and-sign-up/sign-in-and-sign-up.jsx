import React from "react";

import SignIn from '/Users/ankushsharma/lesson-3-master/src/components/sign-in/sign-in.component';
import SignUp from "../../../components/sign-up/sign-up.component";


import './sign-in-and-sign-up.scss';

const SignInAndSignUpPage =() =>(
<div className="Sign-in-and-sign-up">SIGN IN
<SignIn />
<SignUp />
</div>
);
export default SignInAndSignUpPage;