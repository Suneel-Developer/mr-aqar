import React, { useState } from 'react'
import Header from '../../components/Header'
import { FaUserAlt } from "react-icons/fa";
import { IoIosUnlock } from "react-icons/io";
import { IoEyeOff, IoEye } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo_header_ar.png';
import kuwaitflag from '../../assets/kuwait-flag.png';





const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;

    // Allow only numeric input and limit to 8 digits
    if (/^\d{0,8}$/.test(value)) {
      setInputValue(value);
    }
  };
  return (
    <div>
      <Header />

      <section className='py-20 px-4'>
        <div className='max-w-[400px] w-full mx-auto'>
          <form>
            <div className='hidden lg:flex justify-center mb-20'>
              <Link to="/">
                <img src={Logo} alt="logo" className='h-20' />
              </Link>
            </div>

            {/* Username or number Field */}
            <div className="space-y-2 mb-4">
              <label htmlFor="password" className="font-medium text-[#242424]"> اسم المستخدم أو رقم الهاتف:</label>
              <div className="h-14 w-full flex items-center relative">
                <FaUserAlt size={18} className="absolute top-0 bottom-0 right-4 m-auto z-30 text-[#3a7bb7]" />
                <input
                  type="text"
                  id="phone"
                  value={inputValue}
                  onChange={handleChange}
                  className="relative block w-full h-full rounded-lg border pr-12"
                  placeholder="اسم المستخدم أو رقم الهاتف"
                />
                <img src={kuwaitflag} alt="kuwaitflag" className="absolute top-0 bottom-0 left-4 m-auto z-30 h-5" />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2 mb-4">
              <label htmlFor="confirm-password" className="font-medium text-[#242424]">كلمة المرور:</label>
              <div className="h-14 w-full flex items-center relative">
                <IoIosUnlock size={24} className="absolute top-0 bottom-0 right-4 m-auto z-30 text-[#3a7bb7]" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="relative block w-full h-full rounded-lg border pr-12"
                  placeholder='كلمة المرور'
                  id="confirm-password"
                />
                <button
                  type="button"
                  className="absolute top-0 bottom-0 left-4 m-auto z-30 text-[#3a7bb7] text-2xl"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IoEye /> : <IoEyeOff />}
                </button>
              </div>
            </div>

            {/* forgot password  */}
            <div className='flex justify-center text-center'>
              <Link to="#" className='text-sm text-[#3a7bb7] font-semibold hover:underline transition-all duration-500'>نسيت كلمة المرور</Link>
            </div>

            <button className='text-base flex items-center justify-center whitespace-nowrap duration-500 transition-all mt-6 hover:opacity-80 h-12 px-8 rounded-lg font-bold bg-[#3a7bb7] text-white w-full'>
              تسجيل الدخول
            </button>

            <p className='text-center text-xs font-medium mt-4 text-[#556885]'>
              ليس لديك حساب؟&nbsp;
              <Link to="/register" className='text-[#2e6290] font-semibold hover:underline transition-all duration-500'>
                التسجيل
              </Link>
            </p>
          </form>
        </div>
      </section>

    </div>
  )
}

export default Login