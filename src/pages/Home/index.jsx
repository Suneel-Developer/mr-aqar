import React from 'react'
import Header from '../../components/Header'
import Categories from '../../components/Categories'
import Ads from '../../components/Ads'
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
            <h2 class="text-2xl">بوشملان دليل عقارات الكويت</h2>
            <p className="my-3 text-sm text-[#556885]">بو شملان هو دليل الكويت العقاري الأول والاكبر والأكثر شهرة في الكويت وقد تأسس عام 2016، وهو عبارة عن محرك للبحث والإعلان عن العقارات، يسهل بوشملان إلتقاء البائع بالمشتري أو المؤجر بالمستأجر عبر الموقع الإلكتروني والتطبيقات التابعة له، حيث يتم نشر ما يقارب 6000 إعلان جديد شهريًا لمختلف العروض العقارية مثل <Link to="" className='text-[#2e6290] font-bold'>شقق للايجار</Link>، <Link to="" className='text-[#2e6290] font-bold'>بيوت للبيع</Link>، <Link to="" className='text-[#2e6290] font-bold'>اراضي للبدل</Link>، والمزيد من الاقسام الاخرى. يتميز بوشملان بأنه الأول في الكويت، وهذا بعدد زواره الذي تجاوز 3 مليون زائر، وأكثر من 400 ألف تحميل للتطبيقات، وما يزيد عن 3500 عملية إتصال يوميًا مع آلاف العقارات المعروضة في الكويت من الملاك مباشرة أو من خلال <Link to="" className='text-[#2e6290] font-bold'>المكاتب العقارية</Link>.<br />أحدث بوشملان تغيير في طريقة بحث الأشخاص عن العقارات للإيجار أو البيع في الكويت. وطور ميزة البحث عن العقارات لتكون سهلة وسريعة وعلى مدار الساعة، وإمكانية مقارنة العقارات جنبًا إلى جنب وفي نفس المنطقة على سبيل المثال، حيث يمكن مقارنة أسعار ومواقع ومميزات العقارات المختلفة.<br />نقدم خدماتنا بشكل مجاني للباحثين عن <Link to="" className='text-[#2e6290] font-bold'>عقار للبيع</Link> أو <Link to="" className='text-[#2e6290] font-bold'>للايجار</Link> او حتى <Link to="" className='text-[#2e6290] font-bold'>للبدل</Link>، ولسنا وسيط عقاري ولا نتدخل بأي شكل من الأشكال بين البائع والمشتري في أي من الاستفسارات أو المفاوضات أو الاتفاقيات. ولا نتقاضى أي عمولة أو رسوم على الصفقات العقارية. مهمتنا فقط تسهيل أعمال قطاع تسويق العقارات من خلال الموقع والتطبيق، ولا نتدخل في عمليات الوساطة والصفقات العقارية، حيث أن خدماتنا تنحصر في مساعدة إلتقاء البائع بالمشتري والمؤجر بالمستأجر بشكل مباشر أو غير مباشر من خلال وسيط عقاري، ولا نتدخل بأي شكل من الأشكال في تفاصيل هذه العمليات.<br />يمكنك كذلك إضافة إعلانك مجانًا لدينا من خلال التسجيل بشكل مجاني ايضا، ويجب عليك تفعيل حسابك عن طريق رسالة نصية SMS تستقبلها على رقم موبايلك وبعدها ستتمكن من إضافة إعلانك مجانًا، ويجب تحديد البيانات التالية: المنطقة، نوع العقار، الغرض من الإعلان، كتابة تفاصيل الإعلان والعقار مثل المساحة وعدد الغرف وعدد الصالات والحمامات، والأدوار، وعدد مواقف السيارات المتوفرة، وتوفر المصعد، ومستوى التشطيب، وكذلك يمكنك بشكل اختياري تحديد السعر المطلوب، وإضافة صور او فيديو العقار في الإعلان.</p>
          </div>

          <div className="gap-3 grid grid-cols-1 md:grid-cols-3 my-8">
            <Link className="bg-[#3a7bb7] flex items-center justify-between gap-2 ps-[18px] pe-2 text-white py-[6px] rounded-full" to="/search">
              <span class="font-bold leading-[1.4]">عقارات للايجار في الكويت</span>
              <div class="size-9 rounded-full bg-white text-[#3a7bb7] flex items-center justify-center">
                <FaAngleLeft size={20} />
              </div>
            </Link>

            <Link className="bg-[#3a7bb7] flex items-center justify-between gap-2 ps-[18px] pe-2 text-white py-[6px] rounded-full" to="/search">
              <span class="font-bold leading-[1.4]">عقارات للبيع في الكويت</span>
              <div class="size-9 rounded-full bg-white text-[#3a7bb7] flex items-center justify-center">
                <FaAngleLeft size={20} />
              </div>
            </Link>

            <Link className="bg-[#3a7bb7] flex items-center justify-between gap-2 ps-[18px] pe-2 text-white py-[6px] rounded-full" to="/search">
              <span class="font-bold leading-[1.4]">عقارات للبدل في الكويت</span>
              <div class="size-9 rounded-full bg-white text-[#3a7bb7] flex items-center justify-center">
                <FaAngleLeft size={20} />
              </div>
            </Link>

          </div>

          <div class="bo-px-page">
            <h2 class="text-2xl">شقق للايجار في الكويت</h2>

            <p class="my-3 text-sm text-[#556885]">سواء كنت مواطن أو مقيم تبحث عن عقار في الكويت أو كنت وسيط عقاري وتحاول عقد صفقات عقارية، فإن زيارتك لدليل بوشملان هي الخطوة الأولى لتحقيق هدفك بفعالية وسرعة، فنحن نقدم حلول تسويق العقارات بشكل متطور وحديث من خلال موقعنا الالكتروني وتطبيقاتنا المتوفرة على اجهزة <Link to="#">الاندرويد</Link> أو <Link to="">الايفون</Link>. باستخدام محرك البحث المبسط تستطيع تحديد البيانات التالية:</p>

            <ul class="my-3 list-disc ps-5">
              <li className='text-sm text-[#556885]'>الغرض من الإعلان: للايجار او للبيع او للبدل</li>
              <li className='text-sm text-[#556885]'>نوع العقار: مثل شقق، بيوت، ادوار، اراضي، عمارات، مكاتب ومحلات تجارية، مزارع، شاليهات.</li>
              <li className='text-sm text-[#556885]'>المنطقة: ويمكنك تحديد أي منطقة من مناطق الكويت من خلال كتابة أو اختيار اسم المنطقة مثل سلوى، السالمية، الجابرية، غرب عبدالله المبارك، صباح السالم، حولي، جابر الاحمد، سعد العبدالله، شمال غرب الصليبيخات، الجهراء، الأندلس، الخيران، بيان، الرميثية، وغيرها من مناطق الكويت.</li>
            </ul>

            <p class="my-3 text-sm text-[#556885]">وبعد تحديد خيارات البحث ستجد أكبر عدد ممكن من الإعلانات العقارية وستتمكن من الوصول إلى أكبر عدد ممكن من الإعلانات المرتبطة بطلبك. كما يمكنك إستخدام فلتر لتصفية البحث بناءً على معايير مختلفة مثل المنطقة والسعر ونوع العقار أو كلمات بحث محددة. ويوفر بوشملان مجموعة واسعة من المعلومات حول العقارات بما في ذلك الصور والفيديو وتفاصيل العقار مثل عدد الغرف وموقع العقار ومساحته. وفي حال وجدت ما يناسب متطلباتك يمكنك التواصل مع صاحب الإعلان بشكل مباشر عن طريق الاتصال أو من خلال الواتس اب حسب اختيارك، وهنا ينتهي دور بوشملان حيث انه لا يتدخل بين الأطراف المعنية في تفاصيل الصفقات العقارية.</p>
          </div>

          <div className='pt-10'>
              <h2 className='text-[#242424] font-bold'>الأسئلة الشائعة</h2>
              <p className='my-3 text-sm text-[#556885]'>كم عدد الإعلانات العقارية الجديدة في الكويت؟</p>
              <p className='my-3 text-sm text-[#556885]'>يوجد 4742 إعلان عقاري جديد في الكويت معروض في بوشملان</p>
          </div>

        </div>
      </div>

      <UplaodAdBtn />
      <Footer />
    </div>
  )
}

export default Home