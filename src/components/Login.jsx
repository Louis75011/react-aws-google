// import { AmplifyAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react';
import { useState } from 'react'
import '../style/Login.css'

function LoginPage() {
//   const [isSignedIn, setIsSignedIn] = useState(false);

//   function handleSignIn() {
//     setIsSignedIn(true);
//   }

  return (
    <div>
        <div>
          <h1>You are not signed in!</h1>
        </div>
    </div>
  );
}

export default LoginPage;

// {isSignedIn ? (
//     ) 
//     : (
//       <div></div>
//     )}
// <AmplifyAuthenticator>
//   <AmplifySignIn slot="sign-in" onSignIn={handleSignIn} />
// </AmplifyAuthenticator>