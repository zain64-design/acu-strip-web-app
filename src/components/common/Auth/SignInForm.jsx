import CustomInput from '../../ui/CustomInput'
import { Link, useNavigate } from "react-router";
import Text from "../../ui/Text";
import usePasswordToggle from "../../../hooks/usePasswordToggle";
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";
import CustomBtn from "../../ui/CustomBtn";


const SignInForm = () => {

    const navigate = useNavigate('');

    const handleNavigate = () => {
        navigate('/dashboard');
    }

    const { isPasswordVisible, passwordToggle } = usePasswordToggle()
    return (
        <>
            <form>
                <div className=""></div>
                <CustomInput
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    wrapperClassName='mb-3 sm:mb-6'
                    labelClassName="font-urbanist font-semibold text-base sm:text-lg text-(--text-white) tracking-[0.8%] mb-2 sm:mb-4"
                    inputClassName="h-[62px] w-full p-[19px] bg-[linear-gradient(316deg,rgba(0,0,0,0.65)_0%,rgba(0,0,0,0.65)_99%)] border-(--border-gray-50) rounded-xl font-urbanist text-base text-(--text-white) tracking-[0.8%] focus:outline-none focus:shadow-none border border-(--border-gray-50) placeholder:text-(--text-white) placeholder:capitalize"
                    required
                />
                <CustomInput
                    label="Password"
                    type={isPasswordVisible['password1'] ? 'text' : 'password'}
                    name="password"
                    placeholder="Enter your password"
                    wrapperClassName='mb-3 sm:mb-6 relative'
                    labelClassName="font-urbanist font-semibold text-base sm:text-lg text-(--text-white) tracking-[0.8%] mb-2 sm:mb-4"
                    inputClassName="h-[62px] w-full p-[19px] bg-[linear-gradient(316deg,rgba(0,0,0,0.65)_0%,rgba(0,0,0,0.65)_99%)] border-(--border-gray-50) rounded-xl font-inter text-base text-(--text-white) tracking-[0.8%] focus:outline-none focus:shadow-none border border-(--border-gray-50) placeholder:text-(--text-white) placeholder:capitalize placeholder:font-urbanist"
                    required
                    iconToggler={
                        <CustomBtn
                            type="button"
                            buttonClass="absolute bottom-[18px] right-0 inline-block bg-transparent border-none text-2xl focus:outline-none focus:shadow-none focus:ring-0 px-[19px] hover:bg-transparent cursor-pointer"
                            onClick={() => passwordToggle('password1')}
                            icon={isPasswordVisible['password1'] ? <PiEyeLight /> : <PiEyeSlash />}
                        />

                    }
                />

                <Text as='p' className='login-form-para mt-[14px]'>Forgot your password? <Link to='/' className="capitalize font-semibold underline">reset now</Link></Text>

                <CustomBtn
                    type="button"
                    onClick={handleNavigate}
                    label='Sign In'
                    buttonClass="btn-primary h-[56px] w-full font-urbanist font-bold text-lg capitalize mt-5 sm:mt-[38px]"
                />
            </form>
        </>
    )
}

export default SignInForm