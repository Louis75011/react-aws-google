import React, { useState } from 'react';
import { AmplifyAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react';

export default function LoginPage() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  function handleSignIn() {
    setIsSignedIn(true);
  }

  return (
    <div>
      {isSignedIn ? (
        <div>
          <h1>You are now signed in!</h1>
        </div>
      ) : (
        <AmplifyAuthenticator>
          <AmplifySignIn slot="sign-in" onSignIn={handleSignIn} />
        </AmplifyAuthenticator>
      )}
    </div>
  );
}