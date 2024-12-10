import React from "react";
import Header from "../../components/Header";
import CompanyLogoOne from "../../assets/company-1.jpg"
import CompanyLogoTwo from "../../assets/company-2.jpg"
import CompanyLogothree from "../../assets/company-3.png"
import CompanyLogoFour from "../../assets/company-4.png"
import CompanyLogoFive from "../../assets/company-5.png"
import CompanyLogoSix from "../../assets/company-6.jpg"
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { MdOutlineMail } from "react-icons/md";
import { LuTwitter } from "react-icons/lu";




const companiesdata = [
  {
    id: 1,
    logo: CompanyLogoOne,
    name: "شركه عقاريه",
    number: "65584470",
    whatshap: "https://api.whatsapp.com/send?phone=96565584470&text=السلام عليكم %0aاذا ممكن ترسل تفاصيل هذا الإعلان في تطبيق مستر عقار%0ahttps://mr-aqar.com/ar/65584470/%D8%B4%D8%B1%D9%83%D9%87%20%D8%B9%D9%82%D8%A7%D8%B1%D9%8A%D9%87",
    twiter: "",
    instagram: "",
    gmail: ""
  },

  {
    id: 2,
    logo: CompanyLogoTwo,
    name: "دار العقارات",
    number: "66689615",
    whatshap: "https://api.whatsapp.com/send?phone=96566689615&text=السلام عليكم %0aاذا ممكن ترسل تفاصيل هذا الإعلان في تطبيق مستر عقار%0ahttps://mr-aqar.com/ar/66689615/%D8%AF%D8%A7%D8%B1%20%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1%D8%A7%D8%AA",
    twiter: "https://twitter.com/user-vd8vp3pd5h",
    instagram: "https://www.instagram.com/anyhaljrawh",
    gmail: "mailto:adwkalb1994@gmail.com"
  },

  {
    id: 3,
    logo: CompanyLogothree,
    name: "شركة دار نيو العقارية",
    number: "66101567",
    whatshap: "https://api.whatsapp.com/send?phone=96566101567&text=السلام عليكم %0aاذا ممكن ترسل تفاصيل هذا الإعلان في تطبيق مستر عقار%0ahttps://mr-aqar.com/ar/66101567/%D8%B4%D8%B1%D9%83%D8%A9%20%D8%AF%D8%A7%D8%B1%20%D9%86%D9%8A%D9%88%20%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1%D9%8A%D8%A9",
    twiter: "",
    instagram: "https://www.instagram.com/Dar_new_realestat",
    gmail: "mailto:realestatet66@gmail.com"
  },
  {
    id: 4,
    logo: CompanyLogoFour,
    name: "شركة نجمة الجنوب لأعمال السمسرة العقارية",
    number: "98775700",
    whatshap: "https://api.whatsapp.com/send?phone=96598775700&text=السلام عليكم %0aاذا ممكن ترسل تفاصيل هذا الإعلان في تطبيق مستر عقار%0ahttps://mr-aqar.com/ar/98775700/%D8%B4%D8%B1%D9%83%D8%A9%20%D9%86%D8%AC%D9%85%D8%A9%20%D8%A7%D9%84%D8%AC%D9%86%D9%88%D8%A8%20%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%84%20%D8%A7%D9%84%D8%B3%D9%85%D8%B3%D8%B1%D8%A9%20%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1%D9%8A%D8%A9",
    twiter: "",
    instagram: "",
    gmail: ""
  },
  {
    id: 5,
    logo: CompanyLogoFive,
    name: "AQAR RENT",
    number: "90078005",
    whatshap: "https://api.whatsapp.com/send?phone=96590078005&text=السلام عليكم %0aاذا ممكن ترسل تفاصيل هذا الإعلان في تطبيق مستر عقار%0ahttps://mr-aqar.com/ar/90078005/AQAR%20RENT",
    twiter: "",
    instagram: "",
    gmail: ""
  },
  {
    id: 6,
    logo: CompanyLogoSix,
    name: "مؤسسة بروكر المتميزة العقارية",
    number: "55357714",
    whatshap: "https://api.whatsapp.com/send?phone=96555357714&text=السلام عليكم %0aاذا ممكن ترسل تفاصيل هذا الإعلان في تطبيق مستر عقار%0ahttps://mr-aqar.com/ar/55357714/%D9%85%D8%A4%D8%B3%D8%B3%D8%A9%20%D8%A8%D8%B1%D9%88%D9%83%D8%B1%20%D8%A7%D9%84%D9%85%D8%AA%D9%85%D9%8A%D8%B2%D8%A9%20%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1%D9%8A%D8%A9",
    twiter: "",
    instagram: "https://www.instagram.com/brokeralkuwait?igsh=MXZ3aWcyN2dxMGN6Mg==",
    gmail: "mailto:myhome965@gmail.com"
  },
]

const Companies = () => {
  return (
    <div>
      <Header />

      <section className="px-4 py-10">
        <h1 className="text-center text-black/90 text-2xl md:text-3xl font-semibold pb-5">قائمة المكاتب</h1>
        <div className="max-w-[1280px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {companiesdata.map((company, index) => (
            <div key={index} className="shadow-2 bg-white rounded-lg p-4 flex flex-col items-center justify-between">
              <div className="flex items-center flex-col">
                <div className="h-[200px] w-full rounded-lg overflow-hidden mb-4">
                  <img src={company.logo} alt={company.name} className="h-full w-full object-cover" />
                </div>

                <Link to="/companydetails" className="text-lg font-medium uppercase text-center hover:underline transition-all duration-300 mb-2">{company.name}</Link>
                <Link to={`tel:+965${company.number}`} className="block text-[#2e6290] font-semibold text-lg">{company.number}</Link>
              </div>

              <div className="flex items-center justify-center flex-wrap gap-2 mt-4">
                {company.whatshap && (
                  <Link to={company.whatshap} className="bg-[#f5f7f9] text-[#4caf50] rounded-lg p-0 h-9 w-9 flex items-center justify-center">
                    <FaWhatsapp size={22} />
                  </Link>
                )}

                {company.instagram && (
                  <Link to={company.instagram} className="bg-[#f5f7f9] text-[#4caf50] rounded-lg p-0 h-9 w-9 flex items-center justify-center">
                    <FaInstagram size={22} />
                  </Link>
                )}

                {company.gmail && (
                  <Link to={company.gmail} className="bg-[#f5f7f9] text-[#4caf50] rounded-lg p-0 h-9 w-9 flex items-center justify-center">
                    <MdOutlineMail size={22} />
                  </Link>
                )}

                {company.twiter && (
                  <Link to={company.twiter} className="bg-[#f5f7f9] text-[#4caf50] rounded-lg p-0 h-9 w-9 flex items-center justify-center">
                    <LuTwitter size={22} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
};

export default Companies;
