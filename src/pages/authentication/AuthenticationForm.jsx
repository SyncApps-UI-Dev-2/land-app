import { useEffect, useState } from 'react';
import SignUpForm from './SignUpForm.jsx';
import LoginForm from './LoginForm.jsx';
import { useSearchParams } from 'react-router-dom';
import GoogleAuth from './GoogleAuth.jsx';

function AuthenticationForm() {
  const [userType, setUserType] = useState('User');
  const userTypes = ['User', 'Owner', 'Agent', 'Other'];
  const [activeTab, setActiveTab] = useState('signup');
  const [searchParams] = useSearchParams();

  const tab = searchParams.get('tab');

  useEffect(() => {
    if (tab === 'login') {
      setActiveTab('login');
    } else {
      setActiveTab('signup');
    }
  }, [tab]);

  console.log(tab, searchParams);
  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        {activeTab === 'signup' ? 'Create an account' : 'Log in to account'}
      </h1>
      {/* start Button  */}
      <div className="max-w-md w-full">
        <div className="grid grid-cols-2 mb-3 relative">
          <button
            onClick={() => setActiveTab('signup')}
            className={`p-2 text-sm  text-quaternary border z-10 border-bPrimary transition-all font-semibold duration-300  rounded-lg shadow-sm  ${
              activeTab === 'signup' &&
              '  text-secondary font-bold  border-bQuinary bg-blightMode'
            }`}
          >
            Sign up
          </button>
          <button
            onClick={() => setActiveTab('login')}
            className={` p-2  absolute left-[40%] w-[60%]  text-sm border-bPrimary text-quaternary border transition-all font-semibold duration-300   rounded-lg shadow-sm border-l-0  rounded-s-none overflow-hidden  ${
              activeTab === 'login' &&
              '  text-secondary font-bold  border-bQuinary  rounded-s-lg bg-gradient-to-r  from-transparent to-blightMode '
            }`}
          >
            Log in
          </button>
        </div>
      </div>

      {/* End Button  */}

      {/* User Type Section */}
      <div className="mb-6">
        <p className="text-xl font-semibold mb-3">You are</p>
        <div className="flex flex-wrap gap-3">
          {userTypes.map(type => (
            <button
              key={type}
              onClick={() => setUserType(type)}
              className={`px-6 py-2 rounded-full border border-solid border-bQuinary text-secondary text-sm ${
                userType === type && 'bg-blightMode b text-primary'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
      {activeTab === 'signup' ? <SignUpForm /> : <LoginForm />}

      <GoogleAuth mode={activeTab} />

      {/* Footer */}
      <div className="mt-6 flex gap-2 items-center justify-center">
        <p className="text-tertiary text-sm  text-center">
          {activeTab === 'signup' ? 'Already ' : 'Dont '} have an account?{' '}
        </p>
        <span
          className="text-buttontertiary text-sm cursor-pointer  font-semibold"
          onClick={() =>
            setActiveTab(activeTab === 'signup' ? 'login' : 'signup')
          }
        >
          {activeTab === 'signup' ? 'Login' : 'Sign up'}
        </span>
      </div>
    </div>
  );
}

export default AuthenticationForm;
