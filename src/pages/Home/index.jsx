import React from 'react'
import Header from '../../components/Header'
import Categories from '../../components/Categories'
import Ads from './AllAds'
import Footer from '../../components/Footer'
import UplaodAdBtn from '../../components/UploadAdBtn'
import Carousel from '../../components/Carousel'
import { Link } from 'react-router-dom'
import { FaAngleLeft } from "react-icons/fa6";


const Home = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <Categories />


      <div className='px-4 py-10 bg-[#f5f7f9]'>
        <div className='max-w-[800px] mx-auto w-full'>
          <h1 className='text-[#242424] font-bold text-lg md:text-2xl mb-6'>أحدث إعلانات العقارات في الكويت</h1>
          <Ads />
        </div>
      </div>

      {/* Discription  */}

      <div className='px-4 py-10'>
        <div className='max-w-[800px] mx-auto w-full'>
          <div>
            <p className="my-3 text-sm text-[#556885]">
              مستر عقار هو التطبيق العقاري الرائد في الكويت، حيث يقدم منصة متكاملة للإعلان والبحث عن العقارات بمختلف أنواعها. تأسس التطبيق منذ أكثر من 14 عامًا، ويهدف إلى تسهيل التقاء البائعين بالمشترين والمؤجرين بالمستأجرين من خلال موقع إلكتروني سهل الاستخدام وتطبيقات متميزة على أجهزة الأندرويد والآيفون.
            </p>
          </div>

          <div class="bo-px-page">
            <h2 class="text-lg">إحصائيات وميزات مستر عقار:</h2>

            <ul class="my-3 list-disc ps-5">
              <li className='text-sm text-[#556885]'>أكثر من 3 مليون زائر شهريًا يبحثون عن أفضل العروض العقارية.</li>
              <li className='text-sm text-[#556885]'>يتم نشر ما يزيد عن 3000 إعلان جديد شهريًا، تشمل شقق للإيجار، منازل للبيع، أراضٍ للبدل، وغيرها من العروض العقارية.</li>
              <li className='text-sm text-[#556885]'>واجهة مستخدم متطورة تجعل البحث عن العقار أسرع وأسهل، مع إمكانية مقارنة العقارات حسب الموقع والسعر والمميزات.</li>
              <li className='text-sm text-[#556885]'>عرض إعلاناتك بشكل أكثر جذبًا ووضوحًا عبر المنصات المختلفة، بما في ذلك الموقع الإلكتروني، وتيك توك، وفيسبوك، وإنستغرام، وواتساب، وتويتر، لضمان وصولها إلى أكبر عدد من العملاء وزيادة فرص البيع أو الإيجار.</li>
            </ul>

            <p className='my-3 text-lg'>خدماتنا:</p>

            <p className="my-3 text-sm text-[#556885]">
              مجانية بالكامل للباحثين عن العقارات، حيث يمكنك تصفح آلاف الإعلانات دون أي رسوم أو عمولات.
              إمكانية إضافة إعلانك العقاري بسهولة من خلال خطوات بسيطة تشمل تحديد نوع العقار، الغرض من الإعلان، الموقع، والمساحة، مع إمكانية إضافة صور وفيديو للعقار. <br />
              تحديثات جديدة قادمة قريبًا!
            </p>
            <p className='my-3 text-sm text-[#556885]'>تحسينات شاملة على سرعة وأداء التطبيق لضمان أفضل تجربة للمستخدم.</p>
            <p className='my-3 text-sm text-[#556885]'>ميزات متقدمة لمكاتب العقارات والشركات لعرض عقاراتهم بطريقة أكثر احترافية.</p>
            <p className='my-3 text-sm text-[#556885]'>دعم أكبر لزيادة ظهور الإعلانات أمام العملاء عبر منصات التواصل الاجتماعي المختلفة، مما يضمن جذب المزيد من الاهتمام.</p>
            <p className='my-3 text-sm text-[#556885]'>سواء كنت تبحث عن عقار للإيجار أو البيع أو كنت صاحب مكتب عقاري تسعى لتسويق عقاراتك، فإن مستر عقار هو الحل الأمثل لتحقيق أهدافك العقارية بسرعة وسهولة.</p>
            <p className='my-3 text-sm text-[#556885]'>اكتشف مستر عقار الآن – الطريق الأمثل لعقارات الكويت! 🚀</p>
          </div>
        </div>
      </div>

      <UplaodAdBtn />
      <Footer />
    </div>
  )
}

export default Home