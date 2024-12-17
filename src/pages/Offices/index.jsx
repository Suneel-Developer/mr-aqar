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
import { IoMdCall } from "react-icons/io";
import Footer from "../../components/Footer";
import UploadAdBtn from "../../components/UploadAdBtn";
import Carousel from "../../components/Carousel";





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

const Offices = () => {
  return (
    <div>
      <Header />

      <Carousel />

      <section className="px-4 py-10">

        <div className="max-w-[900px] w-full mx-auto flex flex-col space-y-4">
          <h1 className="text-black/90 text-2xl text-center font-semibold">قائمة المكاتب</h1>

          {companiesdata.map((company, index) => (
            <Link to="/officesdetails" key={index}>
              <div className="shadow-2 bg-white rounded-lg p-3 flex gap-4">
                <div className="h-[110px] w-[110px] rounded-md overflow-hidden">
                  <img src={company.logo} alt={company.name} className="h-full w-full object-cover" />
                </div>

                <div className="flex-1 justify-center flex-col items-center md:items-start md:justify-start flex">
                  <h2 className="text-lg font-medium uppercase text-center">{company.name}</h2>

                  <Link to={`tel:+965${company.number}`} className="bg-[#3a7bb7] my-2 w-fit font-medium text-sm text-white px-3 flex items-center gap-2 rounded-md py-2">
                    {company.number}
                    <IoMdCall size={18} />
                  </Link>

                  <div className="flex items-center justify-center flex-wrap gap-2">
                    {company.whatshap && (
                      <Link to={company.whatshap} className="bg-[#f5f7f9] text-[#4caf50] rounded-full p-0 h-8 w-8 flex items-center justify-center">
                        <FaWhatsapp size={18} />
                      </Link>
                    )}

                    {company.instagram && (
                      <Link to={company.instagram} className="bg-[#f5f7f9] text-[#4caf50] rounded-full p-0 h-8 w-8 flex items-center justify-center">
                        <FaInstagram size={18} />
                      </Link>
                    )}

                    {company.gmail && (
                      <Link to={company.gmail} className="bg-[#f5f7f9] text-[#4caf50] rounded-full p-0 h-8 w-8 flex items-center justify-center">
                        <MdOutlineMail size={18} />
                      </Link>
                    )}

                    {company.twiter && (
                      <Link to={company.twiter} className="bg-[#f5f7f9] text-[#4caf50] rounded-full p-0 h-8 w-8 flex items-center justify-center">
                        <LuTwitter size={18} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <UploadAdBtn />
      <Footer />
    </div>
  )
};

export default Offices;
