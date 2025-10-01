import React from 'react'
import ForgotForm from '../components/common/auth/ForgotForm'

const ForgotPassword = () => {
  return (
    <>
    <section className='min-h-[100vh] py-4 content-center'>
        <div className="container mx-auto px-4">
            <ForgotForm/>
        </div>
    </section>
    </>
  )
}

export default ForgotPassword