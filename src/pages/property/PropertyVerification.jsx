import React, { useState } from 'react';
import { ArrowLeft, Lock, Pencil } from 'lucide-react';
import Input from '@/components/ui/Input.jsx';
import OTPInput from './OtpInput.jsx';
import Button from '@/components/ui/Button.jsx';
import LockScreen from '@/assets/lock-screen.svg';
import { useNavigate } from 'react-router-dom';

const PropertyPhoneNumberVerification = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const [phone, setPhone] = useState('+91 9668123599');
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto p-6  flex  gap-3">
      {/* Header */}
      <div className="flex-1 px-8  min-w-[500px]">
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <button
              className="text-blue-500 flex items-center"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="h-4 w-4 mr-1 text-tertiary" />
              <span className="text-[18px] text-primary font-bold">Back to</span>
            </button>
          </div>

          <h1 className="text-3xl font-semibold mb-2 text-[#242731] ">
            Welcome back,
          </h1>
          <p className="text-[#575f6e] text-[18px]">
            Fill in the registration data. It will take a couple of minutes. All
            you need is a phone number
          </p>
        </div>

        {/* Phone Input Section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 justify-between    border border-[#E2E4E5]  rounded-lg px-4">
            <div className="px-1 py-2">
              <input
                className="text-base  font-semibold text-[#242426] outline-none border-none mb-1"
                defaultValue=" +91 9966132599"
                value={phone}
                type="text"
                onChange={e => setPhone(e.target.value)}
              />

              <p className="text-base text-[#575F6E] ">
                Number not confirmed yet
              </p>
            </div>
            <Pencil className=" w-4 h-4 text-blue-500" />
          </div>
        </div>

        {/* Verification Code Input */}
        <div className="mb-6">
          <div className="flex justify-between items-center gap-2">
            <div>
              <OTPInput />
              <div className="border-b-[1px] border-[#007aff]  h-2 w-full "></div>{' '}
              <p className="text-[#575f6e] text-base mt-2 ">
                Confirm phone number with code from sms message
              </p>
            </div>
            <button className="text-[#007aff] text-sm flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <span className="mr-1 text-[##007aff] font-semibold text-base">
                Send again
              </span>
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            className="w-full bg-primary text-white py-3 rounded-lg font-medium border hover:bg-primary/50"
            onClick={() => navigate('/create-property/property-details')}
          >
            Verify & Login
          </Button>
          <Button className="w-full  py-3 rounded-lg   border border-[#d6bbfb] bg-white text-buttontertiary font-medium">
            Verify with missed call
          </Button>
        </div>
      </div>

      {/* Why We Verify Section */}
      <div className=" p-8 flex flex-col justify-center gap-2 bg-brandSecondary rounded-lg shadow-sm  max-w-[300px] w-full">
        {/* <Lock className="w-12 h-12 text-white" /> */}
        <img
          src={LockScreen}
          alt="lockscreen"
          className="object-cover  w-full"
        />
        <h2 className="text-base font-semibold mb-2">
          Why we Verify your number?
        </h2>
        <p className="text-[#575f6e] text-sm">
          Your phone number gives easy access to your account and will help
          connect with buyers
        </p>
      </div>
    </div>
  );
};

export default PropertyPhoneNumberVerification;
