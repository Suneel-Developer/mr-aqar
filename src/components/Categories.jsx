import React from 'react'
import Forrentlogo from "../assets/house-service.png"
import { useNavigate } from 'react-router-dom'

const categoriesdata = [
    { categoryname: "للإيجار", logo: Forrentlogo },
    { categoryname: "دولي", logo: Forrentlogo },
    { categoryname: "مطلوب", logo: Forrentlogo },
    { categoryname: "للإيجار", logo: Forrentlogo },
    { categoryname: "للبيع", logo: Forrentlogo },
    { categoryname: "مزرعة", logo: Forrentlogo },
    { categoryname: "آحرون", logo: Forrentlogo },
    { categoryname: "شاليه", logo: Forrentlogo },
    { categoryname: "تبادل", logo: Forrentlogo },
    { categoryname: "خدمات المنزل", logo: Forrentlogo },
    { categoryname: "الأراضي", logo: Forrentlogo },
    { categoryname: "مكتب", logo: Forrentlogo },
]
const Categories = () => {
    const navigate = useNavigate()
    return (
        <section className='px-4 py-10'>
            <div className='max-w-[500px] w-full mx-auto'>
                <div>
                    <ul className='grid grid-cols-4 gap-2'>
                        {categoriesdata.map((categry) => (
                            <li onClick={(() => navigate('/category'))} className='cursor-pointer p-1 md:p-3 bg-white shadow-2 flex flex-col justify-center items-center rounded-md gap-2'>
                                <img src={categry.logo} alt={categry.categoryname} className='h-10 md:h-12 w-auto object-cover' />
                                <span className='text-[#353535] font-medium text-center'>{categry.categoryname}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Categories