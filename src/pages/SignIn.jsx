import React from 'react'
import loginBG from '/images/login-bg.webp'
import logo from '/images/login-logo.svg'
import Image from '../components/ui/Image'
import Text from '../components/ui/Text'
import SignInForm from '../components/common/auth/SignInForm';

const SignIn = () => {
  return (
    <>
      <section className="min-h-[100vh] bg-cover bg-center bg-no-repeat content-center" style={{ backgroundImage: `url(${loginBG})` }}>
        <div className="container px-4 mx-auto">
          <div className="max-w-[1000px] relative shadow-(--soft-shadow) rounded-3xl overflow-hidden mx-auto p-5 sm:p-[61px_41px_37px_41px] form-blur-50 form-bg z-50">
            <div className="flex items-center flex-wrap justify-center lg:justify-between">
              <figure>
                <Image src={logo} className="object-contain object-center max-w-full max-h-[80px] sm:max-h-[132px] mb-6 lg:mb-0" />
              </figure>

              <div className="w-full lg:w-[493px]">
                <Text as='h5' className='font-urbanist font-bold text-2xl sm:text-4xl text-(--text-white) capitalize text-center leading-[30px] tracking-[-0.1px] mb-2 sm:mb-4'>Welcome Back</Text>
                <Text as='p' className='login-form-para'>Please enter your credentials to continue</Text>
                <div className="mt-5 sm:mt-[38px]">
                  <SignInForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignIn