import React from 'react'
import Header from '../../components/Header'
import { BiWorld } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { LuTwitter } from "react-icons/lu";
import Footer from '../../components/Footer';


const ContactUs = () => {
    return (
        <div className='bg-[#f5f7f9]'>
            <Header />

            <section className='py-5 md:py-10 px-4'>
                <div className='max-w-[1280px] mx-auto border-t-[5px] border-[#085b8f] p-6 rounded bg-white flex flex-col items-center gap-1 min-h-[500px]'>
                    <h2 className='text-[#085b8f] text-center py-2 font-bold'>اتصل بنا</h2>
                    <BiWorld className='text-[#085b8f] text-center mx-auto text-4xl' />
                    <p className='text-center text-sm'>
                        شكرًا لثقتكم في مستر عقار Mr aqar وسعداء للرد على أسئلتكم واستفساراتكم عبر قنوات التواصل التالية:
                    </p>

                    <Link to="mailto:kwmraqar@gmail.com" className='text-[#0000008A] text-center underline font-medium mx-auto hover:text-[#085b8f]'>kwmraqar@gmail.com</Link>
                    <Link to="https://mr-aqar.com" className='text-[#0000008A] text-center underline font-medium mx-auto hover:text-[#085b8f]'>https://mr-aqar.com</Link>

                    <div className='flex items-center justify-center gap-4 text-2xl mt-5'>
                        <Link to="https://api.whatsapp.com/send?phone=wa.me/96590078005&text=Hello,I need your help." target='_blank' className='hover:text-[#085b8f]'>
                            <LuTwitter />
                        </Link>

                        <Link to="https://www.instagram.com/mr_aqar_kw/?igshid=YmMyMTA2M2Y=" target='_blank' className='hover:text-[#085b8f]'>
                            <FaInstagram />
                        </Link>

                        <Link to="https://api.whatsapp.com/send?phone=wa.me/96590078005&text=Hello,I need your help." target='_blank' className='hover:text-[#085b8f]'>
                            <FaWhatsapp />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}

export default ContactUs