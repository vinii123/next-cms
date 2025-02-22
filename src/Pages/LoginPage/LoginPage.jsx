
'use client'
import LoginButton from '@/components/LoginButton';
import { GoogleOAuthProvider } from '@react-oauth/google';

const LoginPage = () => {
  return (
    <div className="flex" id="signInButton">
      <GoogleOAuthProvider clientId={'198568962451-k5bh2tbken5mjum76bftq377fpcmqre3.apps.googleusercontent.com'} children={''}>
        <LoginButton />
      </GoogleOAuthProvider>
    </div>
  );
};

export default LoginPage;