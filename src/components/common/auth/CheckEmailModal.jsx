import React from 'react'
import { Modal, ModalBody, ModalFooter } from "flowbite-react";
import Text from '../../ui/Text';
import CustomBtn from '../../ui/CustomBtn';
import { Link, useNavigate } from 'react-router';

const CheckEmailModal = ({ showModal, handleCloseModal }) => {

        const navigate = useNavigate('');

    const handleNavigate = () => {
        navigate('/');
    }

    return (
        <>
            <Modal show={showModal} onClose={handleCloseModal}>
                <ModalBody>
                    <div className="animate__animated animate__bounceIn animate__delay-0.5s">
                        <Text as='h4' className='font-inter font-bold text-2xl md:text-4xl text-(--text-black-10) capitalize tracking-[-0.01px] mx-auto mb-6 text-center'>Check your email</Text>
                        <Text as='p' className='font-inter font-normal text-md sm:text-lg text-(--text-black-200) text-center'>We've sent a password reset link to your email. Please check your inbox and follow the instructions.</Text>
                    </div>
                    <ModalFooter className='flex flex-col gap-4 mt-6 px-0 pb-0'>
                        <CustomBtn onClick={handleNavigate} buttonClass='btn-primary font-urbanist text-xl font-semibold w-full h-[55px]' label='return to login' />
                        <Text as='p'>Didn't get the email? <Link to='' className='text-(--text-primary) font-medium'>Resend</Link></Text>
                    </ModalFooter>
                </ModalBody>
            </Modal>
        </>
    )
}

export default CheckEmailModal