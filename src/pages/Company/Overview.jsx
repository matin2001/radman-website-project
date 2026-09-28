import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styles from "./Overview.module.css";

import logoImg from "../../assets/logo-black.png";
import slide1 from "../../assets/Company Images/company-slide1.jpg";
import slide2 from "../../assets/Company Images/company-slide2.jpg";
import slide3 from "../../assets/Company Images/company-slide3.jpg";
import slide4 from "../../assets/Company Images/company-slide4.jpg";
import slide5 from "../../assets/Company Images/company-slide5.jpg";

export default function Overview() {
  const { lang } = useParams();
  const isFa = lang === "fa";

  return (
    <div className="bg-white overflow-hidden">
      <Helmet>
        <title>{isFa ? "رادمان | بررسی اجمالی" : "RADMAN | Overview"}</title>
      </Helmet>

      {/* --- OVERVIEW INTRO --- */}
      <section className="bg-white text-black pt-12 w-full">
        <div className="w-full px-6 md:px-16" dir="ltr">
          <div className="w-full">
            <Link
              to={`/${lang}`}
              className="hidden md:flex float-left w-2/5 h-6 md:h-8 items-center justify-start pe-4 mb-1"
            >
              <img
                src={logoImg}
                alt="RADMAN Logo"
                className="h-6 md:h-8 w-auto object-contain"
              />
            </Link>

            <p className={styles.overviewIntroText}>
              Radman Investment Holding Group is an integrated investment
              platform with a diversified portfolio across energy, mining &
              metals, capital markets, and commodity trading.
            </p>

            <div className="clear-both"></div>
          </div>
        </div>
      </section>

      {/* --- SLIDER NAVIGATOR --- */}
      <section className="bg-white text-black w-full md:px-16">
        <div className={styles.sliderGrid}>
          <Link
            to={`/${lang}/Company/Overview`}
            className={`${styles.sliderCard} ${styles.activeCard}`}
          >
            <div
              className={styles.sliderImage}
              style={{ backgroundImage: `url(${slide1})` }}
            />
            <span className={styles.activeLabel}>
              {isFa ? "بررسی اجمالی" : "Overview"}
            </span>
          </Link>

          <Link
            to={`/${lang}/Company/Vision`}
            className={`${styles.sliderCard} ${styles.inactiveCard}`}
          >
            <div
              className={styles.sliderImage}
              style={{ backgroundImage: `url(${slide2})` }}
            />
            <span className={styles.inactiveLabel}>
              {isFa ? "چشم‌انداز و هدف" : "Vision & Purpose"}
            </span>
          </Link>

          <Link
            to={`/${lang}/Company/Governance`}
            className={`${styles.sliderCard} ${styles.inactiveCard}`}
          >
            <div
              className={styles.sliderImage}
              style={{ backgroundImage: `url(${slide3})` }}
            />
            <span className={styles.inactiveLabel}>
              {isFa ? "حاکمیت شرکتی" : "Corporate Governance"}
            </span>
          </Link>

          <Link
            to={`/${lang}/Company/Partnership`}
            className={`${styles.sliderCard} ${styles.inactiveCard}`}
          >
            <div
              className={styles.sliderImage}
              style={{ backgroundImage: `url(${slide4})` }}
            />
            <span className={styles.inactiveLabel}>
              {isFa ? "مشارکت‌ها" : "Partnership"}
            </span>
          </Link>

          <Link
            to={`/${lang}/Company/Careers`}
            className={`${styles.sliderCard} ${styles.inactiveCard}`}
          >
            <div
              className={styles.sliderImage}
              style={{ backgroundImage: `url(${slide5})` }}
            />
            <span className={styles.inactiveLabel}>
              {isFa ? "مشارکت‌ها" : "Careers"}
            </span>
          </Link>
        </div>
      </section>

      {/* --- GLOBE BANNER --- */}
      <section className={styles.globeBanner}>
        <div className={styles.globeTitleOverlay}>
          <h2 className={styles.globeTitle}>
            {isFa
              ? "سرمایه‌گذاری برای ساختن آینده‌ای ماندگار"
              : "Building Lasting Value Across Borders"}
          </h2>
          <div className={styles.globeSubtitleLineWrapper}>
            <p className={styles.globeSubtitle}>
              {isFa
                ? "نگاهی جهانی، اثری ماندگار"
                : "Global Vision. Local Impact."}
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION CLOUDY SPACE --- */}
      <section className={styles.sectionTwoCloudy}>
        <div className="w-full px-6 md:px-16">
          <h2 className={styles.largeSerifTitle}>
            {isFa
              ? "ما با تکیه بر سرمایه‌گذاری هدفمند، راهبری مؤثر و نگاهی بلندمدت، در کسب‌وکارهایی حضور می‌یابیم که زمینه‌ساز توسعه صنایع، تقویت زیرساخت‌ها و ارتقای توان رقابتی اقتصاد هستند."
              : "Guided by disciplined capital allocation, responsible stewardship, and a forward-looking perspective, we build businesses that strengthen industries, expand infrastructure, and create enduring economic value."}
          </h2>
          <p
            className={`${styles.textHelveticaThin} mt-6 w-full md:w-1/2 text-zinc-900`}
          >
            {isFa
              ? "رادمان با بهره‌گیری از شبکه‌ای از شرکت‌های تخصصی، ظرفیت‌های داخلی را به فرصت‌های منطقه‌ای و بین‌المللی متصل می‌کند؛ فرصت‌هایی که به توسعه صنایع، شکل‌گیری زنجیره‌های ارزش، خلق کسب‌وکارهای توانمند و ارتقای توان رقابتی اقتصاد منجر می‌شوند."
              : "Through a network of specialized subsidiaries, Radman connects domestic resources with global markets. We identify high-potential opportunities, develop industrial capabilities, and build high-performing businesses that generate sustainable returns while contributing to national economic growth."}
          </p>

          <Link
            to={`/${lang}/Company/Vision`}
            className={`${styles.linkHelveticaLight} ${styles.linkVision} border-black/20! text-slate-900! hover:bg-black! hover:text-white!`}
          >
            {isFa
              ? "چشم‌انداز و اهداف رادمان ↖"
              : "Discover Our Vision & Purpose ↗"}
          </Link>

          <div className="my-8 border-t border-black"></div>

          <h3 className={styles.principlesTitle}>
            {isFa
              ? "اصولی که مسیر سرمایه‌گذاری ما را شکل می‌دهند"
              : "The Principles Behind Every Investment"}
          </h3>

          <div className={styles.principlesGrid}>
            <div className={styles.principleBox}>
              <h4 className={styles.principleBoxTitle}>
                {isFa ? "آینده‌نگری راهبردی" : "Strategic Foresight"}
              </h4>
              <p className={styles.principleBoxText}>
                {isFa
                  ? "سرمایه‌گذاری بر پایه شناخت روندهای بلندمدت، تحولات بازار و فرصت‌های نوظهور."
                  : "Investing with a forward-looking perspective informed by structural trends and emerging opportunities."}
              </p>
            </div>

            <div className={styles.principleBox}>
              <h4 className={styles.principleBoxTitle}>
                {isFa ? "شفافیت و پاسخ‌گویی" : "Integrity & Transparency"}
              </h4>
              <p className={styles.principleBoxText}>
                {isFa
                  ? "پایبندی به حاکمیت شرکتی، اصول اخلاق حرفه‌ای و شفافیت در تمامی سطوح تصمیم‌گیری."
                  : "Strong governance, ethical standards, and accountability at every level."}
              </p>
            </div>

            <div className={styles.principleBox}>
              <h4 className={styles.principleBoxTitle}>
                {isFa ? "رشد مسئولانه" : "Sustainable Impact"}
              </h4>
              <p className={styles.principleBoxText}>
                {isFa
                  ? "ایجاد بازده اقتصادی در کنار توجه به ملاحظات محیط‌زیستی، اجتماعی و حکمرانی شرکتی."
                  : "Creating economic value alongside measurable social and environmental outcomes."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION THREE: GRADIENT --- */}
      <section className={styles.sectionThreeGradient}>
        <div className="w-full px-6 md:px-16">
          <div className={`${styles.principlesGrid} mt-0!`}>
            <div className={styles.principleBox}>
              <h4 className={styles.principleBoxTitle}>
                {isFa ? "نوآوری و چابکی" : "Innovation & Agility"}
              </h4>
              <p className={styles.principleBoxText}>
                {isFa
                  ? "پاسخ‌گویی هوشمندانه به تحولات بازار و بهره‌گیری از راهکارهای نو برای خلق فرصت‌های تازه."
                  : "Bold thinking and decisive execution in dynamic, complex markets."}
              </p>
            </div>
            <div className={styles.principleBox}>
              <h4 className={styles.principleBoxTitle}>
                {isFa ? "همکاری‌های بین‌المللی" : "Global Collaboration"}
              </h4>
              <p className={styles.principleBoxText}>
                {isFa
                  ? "توسعه مشارکت‌های راهبردی که زمینه‌ساز انتقال دانش، سرمایه و خلق ارزش مشترک باشند."
                  : "Building cross-border partnerships that unlock shared value and mutual growth."}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <span className={styles.badgeBigCaslon}>
              {isFa ? "جایی که ارزش می‌آفرینیم" : "Where We Create Value"}
            </span>
            <h2 className={styles.valueSectionTitle}>
              {isFa
                ? "از منابع ملی تا بازارهای جهانی"
                : "Investing Across Industries. Driving Sustainable Growth."}
            </h2>
          </div>

          {/* --- INDUSTRY ROW 1: ENERGY --- */}
          <div className={styles.industryRow}>
            <div className="grid grid-cols-12 items-baseline gap-2 lg:hidden">
              <div className="col-span-3 sm:col-span-2">
                <span className={styles.badgeBigCaslon}>
                  {isFa ? "انرژی" : "Energy"}
                </span>
              </div>
              <div className="col-span-7 sm:col-span-9">
                <h3 className={`${styles.industryLeftTitle} mt-0!`}>
                  {isFa
                    ? "زیرساختی مطمئن برای رشد اقتصادی"
                    : "Reliable energy infrastructure underpins economic growth"}
                </h3>
              </div>
              <div className="col-span-2 sm:col-span-1 text-end flex justify-end items-center">
                <span className={styles.sectionCounter}>01</span>
              </div>
            </div>

            <div className="hidden lg:flex flex-col justify-between">
              <span className={styles.badgeBigCaslon}>
                {isFa ? "انرژی" : "Energy"}
              </span>
              <h3 className={styles.industryLeftTitle}>
                {isFa
                  ? "زیرساختی مطمئن برای رشد اقتصادی"
                  : "Reliable energy infrastructure underpins economic growth"}
              </h3>
            </div>

            <div>
              <p className={`${styles.textHelveticaThin} `}>
                {isFa
                  ? "انرژی یکی از ارکان راهبرد سرمایه‌گذاری رادمان است. با تمرکز بر انرژی‌های تجدیدپذیر، راهکارهای کم‌کربن و پروژه‌های زیرساختی، در مسیر تقویت امنیت انرژی، توسعه صنعتی و گذار به آینده‌ای پایدار سرمایه‌گذاری می‌کنیم. تلفیق زیرساخت، فناوری‌های هوشمند و راهکارهای نوآورانه، بستری برای توسعه سامانه‌های انرژی کارآمد و آینده‌نگر فراهم می‌آورد"
                  : "Energy is a cornerstone of Radman's investment approach, with a focused commitment to renewable and low-carbon solutions. We develop in utility-scale clean energy projects and next-generation technologies that strengthen energy security, support industrial expansion, and accelerate the transition to a sustainable future. By combining infrastructure investment with smart solutions and digital optimization, we deliver efficient and future-ready energy systems."}
              </p>
            </div>

            <div className="flex flex-col justify-between items-start lg:items-end min-h-0 lg:min-h-40">
              <span className={`${styles.sectionCounter} hidden lg:block`}>
                01
              </span>
              <Link
                to={`/${lang}/Businesses/Energy`}
                className={`${styles.linkHelveticaLight} mt-0! lg:mt-8! border-white/20! text-white! hover:bg-white! hover:text-black!`}
              >
                {isFa
                  ? "سرمایه‌گذاری‌های در حوزه انرژی ↖"
                  : "Explore Our Energy Investments ↗"}
              </Link>
            </div>
          </div>

          {/* --- INDUSTRY ROW 2: MINING & METALS --- */}
          <div className={`${styles.industryRow} mt-0!`}>
            <div className="grid grid-cols-12 items-baseline gap-2 lg:hidden">
              <div className="col-span-3 sm:col-span-2">
                <span className={styles.badgeBigCaslon}>
                  {isFa ? "معدن و صنایع فلزات" : "Mining & Metals"}
                </span>
              </div>
              <div className="col-span-7 sm:col-span-9">
                <h3 className={`${styles.industryLeftTitle} mt-0!`}>
                  {isFa
                    ? "تبدیل ظرفیت‌های معدنی به مزیت‌های اقتصادی"
                    : "Turning Natural Resources into Economic Strength"}
                </h3>
              </div>
              <div className="col-span-2 sm:col-span-1 text-end flex justify-end items-center">
                <span className={styles.sectionCounter}>02</span>
              </div>
            </div>

            <div className="hidden lg:flex flex-col justify-between">
              <span className={styles.badgeBigCaslon}>
                {isFa ? "معدن و صنایع فلزات" : "Mining & Metals"}
              </span>
              <h3 className={styles.industryLeftTitle}>
                {isFa
                  ? "تبدیل ظرفیت‌های معدنی به مزیت‌های اقتصادی"
                  : "Turning Natural Resources into Economic Strength"}
              </h3>
            </div>

            <div>
              <p className={`${styles.textHelveticaThin} `}>
                {isFa
                  ? "رادمان با بهره‌گیری از ظرفیت‌های معدنی ایران، زنجیره‌های ارزش رقابت‌پذیر و صنایع صادرات‌محور را توسعه می‌دهد. از دسترسی به منابع تا فرآوری پیشرفته و یکپارچگی زنجیره ارزش، رویکرد ما بر افزایش بهره‌وری، توسعه پایدار و هم‌سویی با استانداردهای جهانی محیط‌زیستی، اجتماعی و حاکمیت شرکتی است."
                  : "Radman converts Iran’s mineral wealth into products that meet international standards. Through secure resource access, advanced processing, and vertical integration, we build integrated supply chains and export-ready industries—aligned with environmental stewardship and global ESG standards."}
              </p>
            </div>

            <div className="flex flex-col justify-between items-start lg:items-end min-h-0 lg:min-h-40">
              <span className={`${styles.sectionCounter} hidden lg:block`}>
                02
              </span>
              <Link
                to={`/${lang}/Businesses/Mining`}
                className={`${styles.linkHelveticaLight} mt-0! lg:mt-8! border-white/20! text-white! hover:bg-white! hover:text-black!`}
              >
                {isFa
                  ? "حوزه صنایع معدنی و فلزات ↖"
                  : "Discover Mining & Metals ↗"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION THREE: GRADIENT --- */}
      <section className={styles.sectionThreeGradientDark}>
        <div className="w-full px-6 md:px-16">
          <div
            className={`${styles.industryRow} relative z-10 border-t-0! mt-0!`}
          >
            <div className="grid grid-cols-12 items-baseline gap-2 lg:hidden">
              <div className="col-span-3 sm:col-span-2">
                <span className={styles.badgeBigCaslon}>
                  {isFa ? "بازار سرمایه" : "Capital Markets"}
                </span>
              </div>
              <div className="col-span-7 sm:col-span-9">
                <h3 className={`${styles.industryLeftTitle} mt-0!`}>
                  {isFa
                    ? "تبدیل سرمایه به پیشران توسعه صنعتی"
                    : "Transforming Capital into Industrial Progress"}
                </h3>
              </div>
              <div className="col-span-2 sm:col-span-1 text-end flex justify-end items-center">
                <span className={styles.sectionCounter}>03</span>
              </div>
            </div>

            <div className="hidden lg:flex flex-col justify-between">
              <span className={styles.badgeBigCaslon}>
                {isFa ? "بازار سرمایه" : "Capital Markets"}
              </span>
              <h3 className={styles.industryLeftTitle}>
                {isFa
                  ? "تبدیل سرمایه به پیشران توسعه صنعتی"
                  : "Transforming Capital into Industrial Progress"}
              </h3>
            </div>

            <div>
              <p className={`${styles.textHelveticaThin} `}>
                {isFa
                  ? "بازار سرمایه یکی از ابزارهای راهبردی رادمان برای تحقق رشد پایدار است. با بهره‌گیری از ظرفیت‌های تأمین مالی، مدیریت ریسک و تحلیل بازار، ساختارهای سرمایه‌ای مقیاس‌پذیر و کارآمد را برای پروژه‌های انرژی، معدن، زیرساخت و سایر سرمایه‌گذاری‌های راهبردی فراهم می‌کنیم."
                  : "Our capital markets platform is a financial engine of growth. By integrating financing, risk management, and market intelligence, we ensure every industrial venture—across energy, mining, and infrastructure—is supported by scalable, disciplined capital structures."}
              </p>
            </div>

            <div className="flex flex-col justify-between items-start lg:items-end min-h-0 lg:min-h-40">
              <span className={`${styles.sectionCounter} hidden lg:block`}>
                03
              </span>
              <Link
                to={`/${lang}/Businesses/CapitalMarket`}
                className={`${styles.linkHelveticaLight} mt-0! lg:mt-8! border-white/20! text-white! hover:bg-white! hover:text-black!`}
              >
                {isFa
                  ? "مشاهده بازار سرمایه ↖"
                  : "View Capital Market Capabilities ↗"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION THREE: City --- */}
      <section className={styles.panoramaBottomContainer}>
        <div className="w-full px-6 md:px-16">
          <div
            className={`${styles.industryRow} relative z-10 border-t-0! mt-0! border-b-0!`}
          >
            <div className="grid grid-cols-12 items-baseline gap-2 lg:hidden">
              <div className="col-span-3 sm:col-span-2">
                <span className={styles.badgeBigCaslon}>
                  {isFa ? "تجارت کالا" : "Commodity Trading"}
                </span>
              </div>
              <div className="col-span-7 sm:col-span-9">
                <h3 className={`${styles.industryLeftTitle} mt-0!`}>
                  {isFa
                    ? "پیوند ظرفیت‌های داخلی با بازارهای جهانی"
                    : "Turning Domestic Strength into Global Advantage"}
                </h3>
              </div>
              <div className="col-span-2 sm:col-span-1 text-end flex justify-end items-center">
                <span className={styles.sectionCounter}>04</span>
              </div>
            </div>

            <div className="hidden lg:flex flex-col justify-between">
              <span className={styles.badgeBigCaslon}>
                {isFa ? "تجارت کالا" : "Commodity Trading"}
              </span>
              <h3 className={styles.industryLeftTitle}>
                {isFa
                  ? "پیوند ظرفیت‌های داخلی با بازارهای جهانی"
                  : "Turning Domestic Strength into Global Advantage"}
              </h3>
            </div>

            <div>
              <p className={`${styles.textHelveticaThin} `}>
                {isFa
                  ? "رادمان با تکیه بر یک پلتفرم هوشمند و راهبردی، تولیدکنندگان ایرانی را به بازارهای بین‌المللی متصل می‌کند. تجارت محصولات پتروشیمی، فلزات و مواد معدنی، همراه با مدیریت هوشمند زنجیره تأمین و کنترل ریسک، بستری برای توسعه تجارت پایدار و حضور مؤثر در بازارهای جهانی فراهم می‌سازد."
                  : "Radman connects Iranian producers to international markets through a disciplined, intelligence-driven trading platform. Trading petrochemicals, metals, and minerals, we optimize global supply chains, manage risk with precision, and deliver responsible, sustainable returns."}
              </p>
            </div>

            <div className="flex flex-col justify-between items-start lg:items-end min-h-0 lg:min-h-40">
              <span className={`${styles.sectionCounter} hidden lg:block`}>
                04
              </span>
              <Link
                to={`/${lang}/Businesses/CommodityTrading`}
                className={`${styles.linkHelveticaLight} mt-0! lg:mt-8! border-white/20! text-white! hover:bg-white! hover:text-black!`}
              >
                {isFa
                  ? "ورود به تجارت کالا ↖"
                  : "Explore Global Trading Platform ↗"}
              </Link>
            </div>
          </div>

          <p className={`${styles.panoramaBottomText} w-auto`}>
            {isFa
              ? "در تمامی حوزه‌های فعالیت، رادمان با نگاهی بلندمدت، مدیریت حرفه‌ای و تعهد به اصول پایداری سرمایه‌گذاری می‌کند؛ رویکردی که به تقویت صنایع، افزایش رقابت‌پذیری و توسعه اقتصادی کشور می‌انجامد."
              : "Across every sector, Radman combines disciplined capital allocation, operational excellence, and responsible stewardship to create enduring value for industries, communities, and the wider economy."}
          </p>
        </div>
      </section>

      {/* --- SECTION 07: CONCLUDING STATEMENT --- */}
      <section className={styles.sectionSevenConcluding}>
        <div className="w-full px-6 md:px-16 text-left rtl:text-right">
          <h2 className={styles.sectionSevenTitle}>
            {isFa
              ? "ما در کسب‌وکارها سرمایه‌گذاری نمی‌کنیم؛ آن‌ها را برای آینده توانمند می‌سازیم"
              : "We build businesses, not just portfolios"}
          </h2>

          <p className={`${styles.textHelveticaThin} md:w-1/2`}>
            {isFa
              ? "سرمایه‌گذاری برای ما تنها آغاز مسیر است. رادمان با راهبری فعال، هم‌افزایی میان شرکت‌ها و توسعه زنجیره‌های ارزش، ظرفیت‌های بالقوه را به کسب‌وکارهایی توانمند و مقیاس‌پذیر تبدیل می‌کنیم؛ کسب‌وکارهایی که زمینه‌ساز رشد صنعتی، توسعه اقتصادی و خلق مزیت‌های رقابتی در سطح ملی و منطقه‌ای هستند."
              : "By combining disciplined investment with active ownership, Radman builds scalable businesses, unlocks hidden potential, and creates industrial ecosystems that strengthen national capability and regional prosperity."}
          </p>
        </div>
      </section>
    </div>
  );
}
