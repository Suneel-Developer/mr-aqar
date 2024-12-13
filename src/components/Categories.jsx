import React from 'react'
import Forrentlogo from "../assets/for-rent.jpg"
import Internationallogo from "../assets/international-icon.jpg"
import Matloblogo from "../assets/matloblogo.jpg"
import Shopslogo from "../assets/shops.jpg"
import ForSalelogo from "../assets/for-sale.jpg"
import Farmlogo from "../assets/farm.jpg"
import Otherslogo from "../assets/others.jpg"
import Chaletlogo from "../assets/chalet.jpg"
import Exchangelogo from "../assets/exchange.png"
import HomeServiceslogo from "../assets/home-services.jpg"
import Landslogo from "../assets/lands.jpg"
import Officeslogo from "../assets/offices.jpg"
import { useNavigate } from 'react-router-dom'

const categoriesdata = [
    { categoryname: "للإيجار", logo: Forrentlogo },
    { categoryname: "دولي", logo: Internationallogo },
    { categoryname: "مطلوب", logo: Matloblogo },
    { categoryname: "محلات", logo: Shopslogo },
    { categoryname: "للبيع", logo: ForSalelogo },
    { categoryname: "مزرعة", logo: Farmlogo },
    { categoryname: "دعامة أخرى", logo: Otherslogo },
    { categoryname: "شاليه", logo: Chaletlogo },
    { categoryname: "للبدل", logo: Exchangelogo },
    { categoryname: "خدمات المنزل", logo: HomeServiceslogo },
    { categoryname: "أرض", logo: Landslogo },
    { categoryname: "مكاتب", logo: Officeslogo },
]
const Categories = () => {
    const navigate = useNavigate()
    return (
        <section className='px-4 py-10'>
            <div className='max-w-[500px] w-full mx-auto'>
                <div>
                    <ul className='grid grid-cols-4 gap-2'>
                        {categoriesdata.map((categry) => (
                            <li onClick={(() => navigate('/category'))} className='cursor-pointer p-1 md:p-3 bg-white shadow-2 flex flex-col justify-center items-center rounded-md gap-1'>
                                <img src={categry.logo} alt={categry.categoryname} className='h-10 md:h-12 w-auto object-cover' />
                                <span className='text-[#353535] text-xs font-medium text-center'>{categry.categoryname}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Categories