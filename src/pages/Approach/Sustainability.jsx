import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styles from "./Sustainability.module.css";

import logoImg from "../../assets/logo-black.png";
import bambooImg from "../../assets/Approach Images/sustainability-trees.jpg";
import cubesImg from "../../assets/Approach Images/sustainability-flowers.jpg";
import sdgImg from "../../assets/Approach Images/sustainability-model.png";
import stairsImg from "../../assets/Approach Images/sustainability-stairs.jpg";

export default function Sustainability() {
  const { lang } = useParams();
  const isFa = lang === "fa";

  return (
    <div className="bg-white overflow-hidden">
      <Helmet>
        <title>{isFa ? "رادمان | پایداری" : "RADMAN | Sustainability"}</title>
      </Helmet>

      {/* --- HERO & INTRO --- */}
      <section className={styles.sectionOneContainer}>
        <div className={styles.bambooContainer}>
          <img
            src={bambooImg}
            alt="Lush Bamboo Forest Background"
            className={styles.bambooImage}
          />
        </div>

        <div className={`${styles.contentWrapper} w-full px-6 md:px-16`}>
          <div className="w-full mb-12" dir="ltr">
            <Link
              to={`/${lang}`}
              className="hidden md:flex float-left w-1/4 2xl:w-1/5 h-6 md:h-8 items-center justify-start pe-4 mb-1"
            >
              <img
                src={logoImg}
                alt="RADMAN Logo"
                className="h-6 md:h-8 w-auto object-contain"
              />
            </Link>

            <p className={styles.overviewIntroText}>
              Investment holding group is an integrated investment platform with
              a diversified portfolio across energy, mining & metals, capital
              markets, and commodity trading.
            </p>

            <div className="clear-both"></div>
          </div>

          <div className={styles.textCol}>
            <div className={styles.navigatorContainer}>
              <Link
                to={`/${lang}/Approach/Sustainability`}
                className={styles.navActive}
              >
                {isFa ? "پایداری" : "Sustainability"}
              </Link>
              <Link
                to={`/${lang}/Approach/Investment`}
                className={styles.navInactive}
              >
                {isFa ? "استراتژی‌های سرمایه‌گذاری" : "Investment Strategies"}
              </Link>
            </div>

            <h1 className={styles.titleThin}>
              {isFa
                ? "سرمایه‌گذاری مسئولانه، آینده‌ای ماندگار"
                : "Investing Responsibly. Growing Sustainably."}
            </h1>

            <h2 className={`${styles.serifHeading} mt-2 text-black!`}>
              {isFa
                ? "سرمایه‌گذاری امروز، بنیان تاب‌آوری فرداست"
                : "Creating Enduring Prosperity Through Responsible Investment"}
            </h2>

            <p
              className={`${styles.textHelveticaThin} text-slate-900! md:w-3/4 mt-8`}
            >
              {isFa
                ? "در رادمان، پایداری یک برنامه مستقل نیست؛ بخشی از شیوه سرمایه‌گذاری، راهبری و مدیریت کسب‌وکارهاست."
                : "At Radman, sustainability is not a separate initiative—it is an integral part of how we invest, govern, and create enduring value."}
            </p>

            <p
              className={`${styles.textHelveticaThin} text-slate-900! md:w-3/4 mt-6`}
            >
              {isFa
                ? "ما با ایجاد تعادل میان عملکرد اقتصادی، حفاظت از محیط‌زیست، حاکمیت شرکتی و توسعه اجتماعی، کسب‌وکارهایی را شکل می‌دهیم که برای مواجهه با تغییرات آینده آمادگی بیشتری دارند و می‌توانند ارزش اقتصادی ماندگارتری ایجاد کنند."
                : "By balancing economic performance with environmental stewardship, responsible governance, and social progress, we build businesses that are more adaptable, more competitive, and better prepared for the future."}
            </p>

            <div className="my-8 border-t border-black"></div>
          </div>
        </div>
      </section>

      {/* --- SECTION TWO --- */}
      <section className={styles.sectionTwoFramework}>
        <div className="w-full px-6 md:px-16">
          <div className="w-full">
            <span className={styles.editorialBadge}>
              {isFa
                ? "چارچوب پایداری در رادمان"
                : "Our Sustainability Framework"}
            </span>
            <h2 className={`${styles.titleThin} mt-2`}>
              {isFa
                ? "چهار اصل که مسیر تصمیم‌های ما را شکل می‌دهند"
                : "Building Stronger Businesses for a Stronger Future"}
            </h2>
            <p
              className={`${styles.textHelveticaThin} text-slate-900! mt-6 md:w-3/4`}
            >
              {isFa
                ? "پایداری در رادمان بر چهار محور استوار است؛ محورهایی که از ارزیابی فرصت‌های سرمایه‌گذاری تا مدیریت شرکت‌های زیرمجموعه، مبنای تصمیم‌گیری و عملکرد ما هستند."
                : "Our approach to sustainability is built around four interconnected priorities that guide investment decisions, portfolio management, and long-term business performance."}
            </p>
          </div>

          <div className={styles.pillarsGridDark}>
            <div className={styles.pillarBoxDark}>
              <h3 className={styles.serifHeading}>
                {isFa ? "توسعه اقتصادی" : "Economic Development"}
              </h3>
              <p className={styles.pillarBoxText}>
                {isFa
                  ? "در کسب‌وکارهایی سرمایه‌گذاری می‌کنیم که موجب تقویت صنایع راهبردی، ایجاد اشتغال تخصصی، ارتقای توان صنعتی و توسعه پایدار اقتصاد کشور شوند."
                  : "We invest in businesses that strengthen strategic industries, create skilled employment, improve industrial capability, and contribute to sustainable economic development."}
              </p>
            </div>

            <div className={styles.pillarBoxDark}>
              <h3 className={styles.serifHeading}>
                {isFa ? "حفاظت از محیط‌زیست" : "Environmental Stewardship"}
              </h3>
              <p className={styles.pillarBoxText}>
                {isFa
                  ? "در حوزه‌هایی مانند انرژی، معدن و صنایع وابسته، بهره‌برداری مسئولانه از منابع، فناوری‌های کم‌کربن و بهبود مستمر عملکرد زیست‌محیطی را در اولویت قرار می‌دهیم."
                  : "From energy infrastructure to mining operations, we promote responsible resource management, lower-impact technologies, and operational practices that continuously improve environmental performance."}
              </p>
            </div>

            <div className={styles.pillarBoxDark}>
              <h3 className={styles.serifHeading}>
                {isFa ? "توسعه فراگیر" : "Inclusive Growth"}
              </h3>
              <p className={styles.pillarBoxText}>
                {isFa
                  ? "با سرمایه‌گذاری در زیرساخت‌ها، انتقال دانش، توسعه مهارت‌ها و ایجاد فرصت‌های اقتصادی، به رشد متوازن و توانمندسازی جوامع کمک می‌کنیم."
                  : "Our investments contribute to stronger communities by supporting employment, infrastructure development, knowledge transfer, and broader economic participation."}
              </p>
            </div>

            <div className={styles.pillarBoxDark}>
              <h3 className={styles.serifHeading}>
                {isFa ? "حاکمیت مسئولانه" : "Responsible Governance"}
              </h3>
              <p className={styles.pillarBoxText}>
                {isFa
                  ? "شفافیت، پاسخگویی، اخلاق حرفه‌ای و نظارت مؤثر، پایه تمامی تصمیم‌ها و فعالیت‌های سرمایه‌گذاری رادمان است."
                  : "Integrity, transparency, accountability, and disciplined oversight guide every investment decision and every stage of portfolio management."}
              </p>
            </div>
          </div>

          <div className="my-8 md:my-16 border-t border-black"></div>
        </div>
      </section>

      {/* --- SECTION THREE --- */}
      <section className={styles.sectionThreeCubes}>
        <div className={styles.cubesContainer}>
          <img
            src={cubesImg}
            alt="Holographic Green Cubes Background"
            className={styles.cubesImage}
          />
        </div>

        <div className={`${styles.contentWrapper} w-full px-6 md:px-16`}>
          <div className={styles.textCol}>
            <span className={styles.editorialBadge}>
              {isFa
                ? "پایداری در تمام مراحل سرمایه‌گذاری"
                : "Sustainability in Every Decision"}
            </span>

            <h2 className={`${styles.titleThin} mt-2`}>
              {isFa
                ? "از انتخاب فرصت تا راهبری بلندمدت"
                : "From Investment Selection to Long-Term Stewardship"}
            </h2>

            <h3
              className={`${styles.textHelveticaThin} mt-4 text-slate-900! md:w-1/2`}
            >
              {isFa
                ? "پایداری تنها یک معیار برای انتخاب سرمایه‌گذاری نیست؛ رویکردی است که در تمام مراحل سرمایه‌گذاری جریان دارد."
                : "Sustainability is embedded throughout the investment lifecycle."}
            </h3>

            {/* Paragraph 1 */}
            <p
              className={`${styles.textHelveticaThin} mt-4 text-slate-900! md:w-1/2`}
            >
              {isFa
                ? "پیش از هر تصمیم، فرصت‌ها را از جنبه‌های اقتصادی، عملیاتی، زیست‌محیطی و حاکمیت شرکتی ارزیابی می‌کنیم. پس از سرمایه‌گذاری نیز با راهبری فعال، پایش مستمر عملکرد و حمایت از بهبود مستمر، به افزایش تاب‌آوری، رقابت‌پذیری و عملکرد بلندمدت کسب‌وکارها کمک می‌کنیم."
                : "Before investing, we evaluate opportunities through financial, operational, environmental, and governance perspectives. During ownership, we support responsible business practices, monitor performance, encourage continuous improvement, and build greater resilience across our portfolio."}
            </p>

            {/* Paragraph 2 */}
            <p
              className={`${styles.textHelveticaThin} text-slate-900! mt-4 md:w-1/2`}
            >
              {isFa
                ? "این رویکرد، مدیریت ریسک را تقویت کرده و زمینه‌ساز رشد پایدار و عملکرد اثربخش در سراسر پرتفوی سرمایه‌گذاری رادمان می‌شود."
                : "This disciplined approach helps manage risk while improving competitiveness, operational excellence, and sustainable business performance."}
            </p>

            <div className="my-8 md:my-16 md:w-1/2 border-t border-black"></div>

            <div className="">
              <span className={styles.editorialBadge}>
                {isFa
                  ? "پایداری در کسب‌وکارهای رادمان"
                  : "Sustainability Across Our Businesses"}
              </span>
              <h2 className={`${styles.titleThin} mt-2`}>
                {isFa
                  ? "رویکردی مشترک، در تمامی حوزه‌های فعالیت"
                  : "Creating Measurable Impact Across Every Business"}
              </h2>
              <p
                className={`${styles.textHelveticaThin} text-slate-900! mt-4 md:w-1/4`}
              >
                {isFa
                  ? "اصول پایداری در تمام کسب‌وکارهای رادمان جاری است و متناسب با ویژگی‌های هر صنعت به اجرا درمی‌آید."
                  : "Our sustainability principles are applied across each of Radman's investment platforms."}
              </p>
            </div>

            <div className={styles.pillarsGridDark}>
              <div className={styles.pillarBoxDark}>
                <h3 className={styles.serifHeading}>
                  {isFa ? "انرژی" : "Energy"}
                </h3>
                <p className={styles.pillarBoxText}>
                  {isFa
                    ? "سرمایه‌گذاری در زیرساخت‌های انرژی، انرژی‌های تجدیدپذیر، نوآوری در شبکه برق و راهکارهایی که به امنیت انرژی و کاهش اثرات زیست‌محیطی کمک می‌کنند."
                    : "Investing in reliable, lower-impact energy infrastructure, renewable energy, and grid innovation that support future energy security."}
                </p>
              </div>

              <div className={styles.pillarBoxDark}>
                <h3 className={styles.serifHeading}>
                  {isFa ? "معدن و صنایع معدنی" : "Mining & Metals"}
                </h3>
                <p className={styles.pillarBoxText}>
                  {isFa
                    ? "توسعه مسئولانه منابع، بهینه‌سازی فرآیندهای تولید و رعایت ملاحظات زیست‌محیطی در سراسر زنجیره ارزش."
                    : "Supporting responsible resource development, efficient operations, and environmental stewardship throughout the mining value chain."}
                </p>
              </div>

              <div className={styles.pillarBoxDark}>
                <h3 className={styles.serifHeading}>
                  {isFa ? "بازار سرمایه" : "Capital Markets"}
                </h3>
                <p className={styles.pillarBoxText}>
                  {isFa
                    ? "کمک به شکل‌گیری بازارهای شفاف‌تر، توسعه ابزارهای مالی، بهبود بهره‌وری سرمایه و تقویت تاب‌آوری نظام مالی."
                    : "Promoting transparent markets, responsible financing, efficient capital allocation, and long-term financial resilience."}
                </p>
              </div>

              <div className={styles.pillarBoxDark}>
                <h3 className={styles.serifHeading}>
                  {isFa ? "تجارت کالا" : "Commodity Trading"}
                </h3>
                <p className={styles.pillarBoxText}>
                  {isFa
                    ? "توسعه شیوه های تأمین مسئولانه، ارتقای شفافیت تجاری و پشتیبانی از تجارت بین‌المللی کارآمد و پایدار."
                    : "Advancing responsible supply chains, improving market transparency, and supporting efficient international trade."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION THREE --- */}
      <section className={styles.sectionThreeSDG}>
        <div className="w-full px-6 md:px-16">
          <div className="w-full">
            <span className={styles.editorialBadge}>
              {isFa
                ? "همسو با اهداف توسعه پایدار سازمان ملل"
                : "How Radman Contributes to UN Sustainable Development Goals"}
            </span>
            <h2 className={`${styles.titleThin} mt-2`}>
              {isFa
                ? "نگاهی جهانی، اثری ماندگار در ایران"
                : "Bridging Global Vision and Local Execution"}
            </h2>
          </div>

          {/* Left-aligned UN SDG Grid Image */}
          <div className="w-full flex justify-start my-12">
            <img
              src={sdgImg}
              alt="UN Sustainable Development Goals Grid"
              className="w-full max-w-150 h-auto object-contain"
            />
          </div>

          {/* --- SDG ROW 1: SDG 7 --- */}
          <div className={styles.sdgRow}>
            <div className="flex items-start justify-between gap-4">
              <h3 className={styles.sdgLeftTitle}>
                {isFa
                  ? "هدف هفتم | انرژی پاک و مقرون‌به‌صرفه"
                  : "SDG 7 – Affordable and Clean Energy"}
              </h3>
              <span
                className={`${styles.sdgCounter} border-t border-black/50 lg:hidden shrink-0 text-end`}
              >
                01
              </span>
            </div>

            <div>
              <p className={styles.textHelveticaThin}>
                {isFa
                  ? "حمایت از توسعه انرژی‌های تجدیدپذیر، بهبود بهره‌وری و حرکت به سوی نظام‌های انرژی با اثرات زیست‌محیطی کمتر."
                  : "We invest in reliable energy infrastructure, renewable energy, and lower-carbon technologies that improve energy security while reducing environmental impact."}
              </p>
            </div>

            <div className="hidden lg:flex flex-col justify-start items-end">
              <span
                className={`${styles.sdgCounter} border-t border-black/50 text-end`}
              >
                01
              </span>
            </div>
          </div>

          {/* --- SDG ROW 2: SDG 8 --- */}
          <div className={styles.sdgRow}>
            <div className="flex items-start justify-between gap-4">
              <h3 className={styles.sdgLeftTitle}>
                {isFa
                  ? "هدف هشتم | اشتغال شایسته و رشد اقتصادی"
                  : "SDG 8 – Decent Work and Economic Growth"}
              </h3>
              <span
                className={`${styles.sdgCounter} border-t border-black/50 lg:hidden shrink-0 text-end`}
              >
                02
              </span>
            </div>

            <div>
              <p className={styles.textHelveticaThin}>
                {isFa
                  ? "با حمایت از کسب‌وکارهایی که مهارت‌افزایی و اشتغال تخصصی ایجاد می‌کنند، به رشد فراگیر و پایدار اقتصاد کشور کمک می‌کنیم."
                  : "Our investments support businesses that create employment, strengthen industries, and contribute to sustained economic development."}
              </p>
            </div>

            <div className="hidden lg:flex flex-col justify-start items-end">
              <span
                className={`${styles.sdgCounter} border-t border-black/50 text-end`}
              >
                02
              </span>
            </div>
          </div>

          {/* --- SDG ROW 3: SDG 9 --- */}
          <div className={styles.sdgRow}>
            <div className="flex items-start justify-between gap-4">
              <h3 className={styles.sdgLeftTitle}>
                {isFa
                  ? "هدف نهم | صنعت، نوآوری و زیرساخت"
                  : "SDG 9 – Industry, Innovation, and Infrastructure"}
              </h3>
              <span
                className={`${styles.sdgCounter} border-t border-black/50 lg:hidden shrink-0 text-end`}
              >
                03
              </span>
            </div>

            <div>
              <p className={styles.textHelveticaThin}>
                {isFa
                  ? "حمایت از نوسازی صنعتی، توسعه زیرساخت، فناوری و راهکارهایی که بهره‌وری و ظرفیت تولید را ارتقا می‌دهند."
                  : "We support infrastructure development, technological advancement, industrial modernisation, and productivity across priority sectors."}
              </p>
            </div>

            <div className="hidden lg:flex flex-col justify-start items-end">
              <span
                className={`${styles.sdgCounter} border-t border-black/50 text-end`}
              >
                03
              </span>
            </div>
          </div>

          {/* --- SDG ROW 4: SDG 12 --- */}
          <div className={styles.sdgRow}>
            <div className="flex items-start justify-between gap-4">
              <h3 className={styles.sdgLeftTitle}>
                {isFa
                  ? "هدف دوازدهم | تولید و مصرف مسئولانه"
                  : "SDG 12 – Responsible Consumption and Production"}
              </h3>
              <span
                className={`${styles.sdgCounter} border-t border-black/50 lg:hidden shrink-0 text-end`}
              >
                04
              </span>
            </div>

            <div>
              <p className={styles.textHelveticaThin}>
                {isFa
                  ? "ترویج مدیریت مسئولانه منابع، تولید کارآمد و شیوه های پایدار در تامین و مصرف."
                  : "We promote responsible resource management, efficient production, and sustainable supply chains throughout our investment portfolio."}
              </p>
            </div>

            <div className="hidden lg:flex flex-col justify-start items-end">
              <span
                className={`${styles.sdgCounter} border-t border-black/50 text-end`}
              >
                04
              </span>
            </div>
          </div>

          {/* --- SDG ROW 5: SDG 17 --- */}
          <div className={styles.sdgRow}>
            <div className="flex items-start justify-between gap-4">
              <h3 className={styles.sdgLeftTitle}>
                {isFa
                  ? "هدف هفدهم | مشارکت برای تحقق اهداف"
                  : "SDG 17 – Partnerships for the Goals"}
              </h3>
              <span
                className={`${styles.sdgCounter} border-t border-black/50 lg:hidden shrink-0 text-end`}
              >
                05
              </span>
            </div>

            <div>
              <p className={styles.textHelveticaThin}>
                {isFa
                  ? "گسترش همکاری با سرمایه‌گذاران، نهادهای تخصصی، شرکت‌های فناور و شرکای صنعتی برای تبادل دانش، توسعه همکاری‌های بین‌المللی و تسریع مسیر توسعه پایدار."
                  : "We work alongside investors, institutions, technology leaders, and industry partners to expand expertise, strengthen collaboration, and accelerate sustainable development."}
              </p>
            </div>

            <div className="hidden lg:flex flex-col justify-start items-end">
              <span
                className={`${styles.sdgCounter} border-t border-black/50 text-end`}
              >
                05
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* --- SECTION THREE --- */}
      <section className={styles.concludingBanner}>
        <img
          src={stairsImg}
          alt="Radman Concluding Vision"
          className={styles.concludingBannerImage}
        />
      </section>
      {/* --- SECTION FOUR --- */}
      <section className={styles.concludingSectionLight}>
        <div className="w-full px-6 md:px-16">
          <div className={styles.concludingRowLight}>
            <div className="flex flex-col text-left rtl:text-right">
              {/* Badge */}
              <span className={styles.editorialBadge}>
                {isFa ? "فراتر از امروز می‌اندیشیم" : "Looking Beyond Today"}
              </span>

              <h2 className={`${styles.titleThin} mt-2!`}>
                {isFa
                  ? "سرمایه‌گذاری برای آینده‌ای ماندگار"
                  : "Creating Resilient Businesses for Future Generations"}
              </h2>

              {isFa ? (
                <div className="mt-4 flex flex-col gap-3">
                  <p className={styles.textHelveticaThin}>
                    موفقیت یک سرمایه‌گذاری تنها با بازده مالی سنجیده نمی‌شود؛
                    بلکه به استحکام کسب‌وکارهایی که می‌سازد، تاب‌آوری صنایعی که
                    تقویت می‌کند و اثری که برای نسل‌های آینده بر جای می‌گذارد
                    نیز وابسته است.
                  </p>
                  <p className={styles.textHelveticaThin}>
                    در رادمان، با تلفیق پایداری در تصمیم‌های سرمایه‌گذاری،
                    حاکمیت شرکتی و راهبری فعال، کسب‌وکارهایی می‌سازیم که علاوه
                    بر خلق ارزش اقتصادی، آینده‌ای توانمندتر و پایدارتر برای
                    جامعه و اقتصاد رقم بزنند.
                  </p>
                </div>
              ) : (
                <div className="mt-4 flex flex-col gap-3">
                  <p className={styles.textHelveticaThin}>
                    Responsible investment is measured not only by financial
                    performance, but by the strength of the businesses we build,
                    the resilience of the industries we support, and the
                    positive impact we create over time.
                  </p>
                  <p className={styles.textHelveticaThin}>
                    By integrating sustainability into investment decisions,
                    governance, and active ownership, Radman creates businesses
                    that generate enduring economic value while contributing to
                    a more adaptable, inclusive, and prosperous future.
                  </p>
                </div>
              )}
            </div>

            <div className="flex items-end justify-start lg:justify-end">
              <Link
                to={`/${lang}/Approach/Investment`}
                className={styles.linkLight}
              >
                {isFa
                  ? "راهبرد سرمایه‌گذاری رادمان را ببینید ↖"
                  : "Explore Our Investment Strategy ↗"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
