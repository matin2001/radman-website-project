import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styles from "./Home.module.css";
import linkEnSvg from "../assets/Link-EN.svg";
import linkFaSvg from "../assets/Link-FA.svg";
import logoImg from "../assets/logo-white.svg";

export default function Home() {
  const { lang } = useParams();
  const isFa = lang === "fa";
  const linkIconSrc = isFa ? linkFaSvg : linkEnSvg;

  return (
    <>
      <Helmet>
        <title>{isFa ? "رادمان | خانه" : "RADMAN | Homepage"}</title>
        <meta
          name="description"
          content={
            isFa
              ? "هلدینگ سرمایه‌گذاری رادمان در زمینه‌های انرژی، فلزات و معادن"
              : "Investment Holding Group specializing in Energy, Mining & Metals"
          }
        />
      </Helmet>

      {/* --- HERO SECTION --- */}
      <section className={styles.heroSection}>
        <div className="w-full px-6 md:px-16" dir="ltr">
          <div className="w-full">
            <Link
              to={`/${lang}`}
              className="hidden md:flex float-left w-1/4 2xl:w-1/5 h-6 md:h-8 items-center justify-start pe-4 mb-1"
            >
              <img
                src={logoImg}
                alt="RADMAN Logo"
                className="h-full w-auto object-contain"
              />
            </Link>

            <p className={`${styles.heroMainText} reveal-text`}>
              Investment connects capital, industry and international markets
              across energy, mining & metals, capital markets, and commodity
              trading—turning opportunities into business growth and lasting
              economic value.
            </p>

            <div className="clear-both"></div>
          </div>
        </div>

        <div className={styles.heroBgBanner}>
          <div className={styles.heroTitleOverlay}>
            <div className={styles.heroTitleLineWrapper}>
              <h1 className={`${styles.sectionThreeTitleWhite} reveal-text`}>
                {isFa
                  ? "آینده، مقصد نیست؛ حاصل تصمیم‌های امروز است."
                  : "Investing in the Foundations of Tomorrow"}
              </h1>
              <p
                className={`${styles.sectionFiveText} mt-8 md:w-1/2! reveal-text reveal-delay-1`}
              >
                {isFa
                  ? "گروه سرمایه گذاری رادمان با تمرکز در صنایع راهبردی، سرمایه را به موتور توسعه، نوآوری و رقابت‌پذیری تبدیل می‌کند. از انرژی و معدن تا بازار سرمایه و تجارت کالا، نگاه ما فراتر از بازده مالی است؛ ما زیرساخت‌های رشد فردا را می‌سازیم."
                  : "Radman Investment operates across capital markets, energy, mining & metals, and commodity trading, creating lasting value through disciplined capital allocation, active ownership, and trusted partnerships."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 01 --- */}
      <section className={styles.sectionOnePanoramic}>
        <div className="w-full px-6 md:px-16">
          <div className="border-b border-white/20 pb-4">
            <div className="grid grid-cols-12 items-baseline">
              <div className="col-span-11">
                <h2 className={`${styles.sedctiontwoTitle} reveal-text`}>
                  {isFa
                    ? "سرمایه‌گذاری، آغاز یک تحول"
                    : "Building Long-Term Value Through Responsible Investment"}
                </h2>
              </div>
              <div className="col-span-1 text-right rtl:text-left">
                <span className={`${styles.sectionCounter} reveal-text`}>
                  01
                </span>
              </div>
            </div>

            {isFa ? (
              <div className="mt-4 w-5/6 md:w-1/2 flex flex-col gap-3">
                <p
                  className={`${styles.cardBoxText} reveal-text reveal-delay-1`}
                >
                  سرمایه‌گذاری برای رادمان تنها تأمین منابع مالی نیست؛ بلکه
                  فرآیندی برای شکل‌دادن به کسب‌وکارهای توانمند، توسعه زنجیره‌های
                  ارزش و ایجاد زیرساخت‌هایی است که رشد امروز را به ظرفیت فردا
                  تبدیل می‌کنند.
                </p>
                <p
                  className={`${styles.cardBoxText} reveal-text reveal-delay-2`}
                >
                  از تصمیم‌گیری‌های راهبردی تا مالکیت فعال و توسعه مشارکت‌های
                  مؤثر، هر اقدام با هدف ساختن آینده‌ای رقابت‌پذیر انجام می‌شود.
                </p>
              </div>
            ) : (
              <div className="mt-4 w-5/6 md:w-1/2 flex flex-col gap-3">
                <p
                  className={`${styles.cardBoxText} reveal-text reveal-delay-1`}
                >
                  Investment is more than capital allocation—it is an
                  opportunity to develop businesses, advance industrial
                  capabilities, and contribute to economic progress.
                </p>
                <p
                  className={`${styles.cardBoxText} reveal-text reveal-delay-2`}
                >
                  At Radman, we combine a clear vision, disciplined governance,
                  and sector expertise to build businesses that strengthen
                  industrial capabilities, foster sustainable growth, and expand
                  regional economic reach.
                </p>
              </div>
            )}

            <Link
              className="ctaWhite reveal-text reveal-delay-3"
              to={
                isFa
                  ? `/${lang}/Approach/Investment`
                  : `/${lang}/Company/Overview`
              }
            >
              <span>
                {isFa
                  ? "درباره راهبرد سرمایه‌گذاری رادمان"
                  : "Learn About Radman"}
              </span>
              <img src={linkIconSrc} alt="" className="linkIcon" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- SECTION 02 --- */}
      <section className={styles.sectionTwoOverlap}>
        <div className="w-full px-6 md:px-16">
          <div className="mb-4 border-t border-white/20"></div>

          <div className="grid grid-cols-12 items-baseline">
            <div className="col-span-11">
              <h2 className={`${styles.sedctiontwoTitle} reveal-text`}>
                {isFa ? "سرمایه‌گذاری در قلب صنایع راهبردی" : "Where We Invest"}
              </h2>
            </div>
            <div className="col-span-1 text-right rtl:text-left">
              <span className={`${styles.sectionCounter} reveal-text`}>02</span>
            </div>
          </div>

          <p
            className={`${styles.sectiontwoDesc} mt-4 reveal-text reveal-delay-1`}
          >
            {isFa
              ? "چهار حوزه، یک چشم انداز"
              : "An integrated portfolio designed to strengthen industries, expand markets, and create value across complementary sectors."}
          </p>
        </div>
      </section>

      {/* --- SECTION 02: Upper Cards --- */}
      <section className={styles.sectionTwoBlackSpace}>
        <div className="w-full px-6 md:px-16">
          <div className={styles.cardsContainer}>
            <div className={styles.upperCardsRow}>
              <div className={`${styles.cardBox} reveal-text`}>
                <div>
                  <h3 className={styles.cardBoxTitle}>
                    {isFa ? "بازار سرمایه" : "Capital Markets"}
                  </h3>
                  <p className={styles.cardBoxText}>
                    {isFa
                      ? "بهره‌گیری از ابزارهای مالی و ظرفیت‌های بازار سرمایه برای تأمین مالی، مدیریت سرمایه و توسعه فرصت‌های سرمایه‌گذاری"
                      : "Applying financial expertise and market insight to identify investment opportunities, structure financing, and manage capital."}
                  </p>
                </div>
                <Link
                  to={`/${lang}/Businesses/CapitalMarket`}
                  className="ctaWhite"
                >
                  <span>
                    {isFa
                      ? "ورود به حوزه بازار سرمایه"
                      : "Explore Capital Markets"}
                  </span>
                  <img src={linkIconSrc} alt="" className="linkIcon" />
                </Link>
              </div>

              <div className={`${styles.cardBox} reveal-text reveal-delay-1`}>
                <div>
                  <h3 className={styles.cardBoxTitle}>
                    {isFa ? "تجارت کالا" : "Commodity Trading"}
                  </h3>
                  <p className={styles.cardBoxText}>
                    {isFa
                      ? "پیوند ظرفیت‌های تولیدی ایران با بازارهای منطقه‌ای و جهانی از طریق تجارت راهبردی و زنجیره‌های تأمین هوشمند."
                      : "Connecting producers with buyers through commercial networks, coordinated supply chains, and access to regional and international markets."}
                  </p>
                </div>
                <Link
                  to={`/${lang}/Businesses/CommodityTrading`}
                  className="ctaWhite"
                >
                  <span>
                    {isFa
                      ? "ورود به حوزه تجارت کالا"
                      : "Explore Commodity Trading"}
                  </span>
                  <img src={linkIconSrc} alt="" className="linkIcon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 03 --- */}
      <div className={styles.spotlightBackgroundContainer}>
        {/* Lower Cards */}
        <div className="w-full px-6 md:px-16">
          <div className={styles.cardsContainer}>
            <div className={styles.lowerCardsRow}>
              <div className={`${styles.cardBox} reveal-text`}>
                <div>
                  <h3 className={styles.cardBoxTitle}>
                    {isFa ? "انرژی" : "Energy"}
                  </h3>
                  <p className={styles.cardBoxText}>
                    {isFa
                      ? "سرمایه‌گذاری در زیرساخت‌های انرژی، فناوری‌های نو و پروژه‌هایی که امنیت انرژی و تاب‌آوری صنعتی را تقویت می‌کنند"
                      : "Powering industrial growth through strategic investment in energy infrastructure, low-carbon solutions, while supporting long-term energy security."}
                  </p>
                </div>
                <Link to={`/${lang}/Businesses/Energy`} className="ctaWhite">
                  <span>
                    {isFa ? "ورود به حوزه انرژی رادمان" : "Explore Energy"}
                  </span>
                  <img src={linkIconSrc} alt="" className="linkIcon" />
                </Link>
              </div>

              <div className={`${styles.cardBox} reveal-text reveal-delay-1`}>
                <div>
                  <h3 className={styles.cardBoxTitle}>
                    {isFa ? "معدن و صنایع معدنی" : "Mining & Metals"}
                  </h3>
                  <p className={styles.cardBoxText}>
                    {isFa
                      ? "توسعه زنجیره ارزش از معدن تا صنایع پایین‌دستی با تمرکز بر بهره‌وری، فناوری و مزیت رقابتی"
                      : "Unlocking the value of natural resources through responsible development, vertically integrated value chains, and industrial innovation."}
                  </p>
                </div>
                <Link to={`/${lang}/Businesses/Mining`} className="ctaWhite">
                  <span>
                    {isFa
                      ? "ورود به حوزه صنایع معدنی و فلزات"
                      : "Explore Mining & Metals"}
                  </span>
                  <img src={linkIconSrc} alt="" className="linkIcon" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Section 03 Content Area */}
        <section className={styles.sectionThreeContentArea}>
          <div className="w-full px-6 md:px-16">
            <div className="grid grid-cols-12 md:flex justify-between items-baseline">
              <span
                className={`${styles.sedctiontwoTitle} ${styles.sectionThreeSubTitle} col-span-11 reveal-text`}
              >
                {isFa
                  ? "آنچه مسیر رادمان را شکل می‌دهد"
                  : "Our Investment Approach"}
              </span>
              <Link
                to={
                  isFa
                    ? `/${lang}/Company/Vision`
                    : `/${lang}/Approach/Investment`
                }
                className="ctaBlack hidden! md:inline-flex! reveal-text"
              >
                <span>
                  {isFa
                    ? "معرفی چشم‌انداز و اهداف"
                    : "Discover Our Investment Strategy"}
                </span>
                <img src={linkIconSrc} alt="" className="linkIcon" />
              </Link>
              <div className="col-span-1 text-right rtl:text-left md:hidden! inline-block!">
                <span
                  className={`${styles.sectionCounter} ${styles.sectionThreeCounter} reveal-text`}
                >
                  03
                </span>
              </div>
            </div>

            <h2 className={`${styles.sectionThreeTitle} mt-4 reveal-text`}>
              {isFa
                ? "سرمایه‌گذاری موفق، حاصل تصمیم‌های سنجیده، مدیریت مسئولانه و نگاه بلندمدت است"
                : "Disciplined Decisions. Enduring Value."}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
              <div className="lg:col-span-10">
                <div className={styles.approachColumnsGrid}>
                  <div className={`${styles.approachColumn} reveal-text`}>
                    <h4 className={styles.approachColTitle}>
                      {isFa ? "همراه رشد کسب‌وکارها" : "Active Ownership"}
                    </h4>
                    <p className={styles.approachColText}>
                      {isFa
                        ? "فراتر از سرمایه‌گذاری، در مسیر رشد و ارتقای عملکرد شرکت‌ها همراه هستیم."
                        : "We work alongside our portfolio companies to improve governance, enhance operational performance, and build stronger businesses."}
                    </p>
                  </div>

                  <div
                    className={`${styles.approachColumn} reveal-text reveal-delay-1`}
                  >
                    <h4 className={styles.approachColTitle}>
                      {isFa
                        ? "مسئولیت، بخشی از هر تصمیم است"
                        : "Responsible Investment"}
                    </h4>
                    <p className={styles.approachColText}>
                      {isFa
                        ? "اصول ESG و خلق ارزش پایدار، بخشی جدایی‌ناپذیر از تصمیم‌های سرمایه‌گذاری ماست."
                        : "Every investment is guided by financial discipline, ESG principles, and responsible value creation."}
                    </p>
                  </div>

                  <div
                    className={`${styles.approachColumn} reveal-text reveal-delay-2`}
                  >
                    <h4 className={styles.approachColTitle}>
                      {isFa
                        ? "آینده را با مشارکت می‌سازیم"
                        : "Collaborative Partnerships"}
                    </h4>
                    <p className={styles.approachColText}>
                      {isFa
                        ? "با سرمایه‌گذاران، نهادهای مالی و شرکای صنعتی همکاری می‌کنیم تا فرصت‌های بزرگ‌تری خلق شود."
                        : "We collaborate with leading investors, industrial partners, and institutions to unlock new opportunities and achieve shared objectives."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 text-right rtl:text-left hidden! md:inline-block!">
                <span className={`${styles.sectionCounter} reveal-text`}>
                  03
                </span>
              </div>
              <Link
                to={
                  isFa
                    ? `/${lang}/Company/Vision`
                    : `/${lang}/Approach/Investment`
                }
                className="ctaWhite md:hidden! inline-flex! mt-4 mb-4 reveal-text"
              >
                <span>
                  {isFa
                    ? "معرفی چشم‌انداز و اهداف"
                    : "Discover Our Investment Strategy"}
                </span>
                <img src={linkIconSrc} alt="" className="linkIcon" />
              </Link>
            </div>

            <div className={styles.shadowPeopleBottomSpacer} />
          </div>
        </section>
      </div>

      {/* --- SECTION 04 --- */}
      <section className={styles.sectionFourCloudy}>
        <div className="w-full px-6 md:px-16">
          <div className="grid grid-cols-12 items-baseline">
            <div className="col-span-11">
              <span className={`${styles.sedctiontwoTitle} reveal-text`}>
                {isFa
                  ? "فراتر از سود، به‌سوی ارزش پایدار"
                  : "Investing with Purpose"}
              </span>
            </div>
            <div className="col-span-1 text-right rtl:text-left">
              <span className={`${styles.sectionCounter} reveal-text`}>04</span>
            </div>
          </div>

          <h2 className={`${styles.sectionFourTitle} mt-4 reveal-text`}>
            {isFa
              ? "آفرینش ارزش فراتر از بازده‌های مالی"
              : "Creating Value Beyond Financial Returns"}
          </h2>

          <p
            className={`${styles.sectionFourIntroText} md:w-3/4 reveal-text reveal-delay-1`}
          >
            {isFa
              ? "در رادمان، عملکرد اقتصادی در کنار مسئولیت‌پذیری محیط‌زیستی، توسعه اجتماعی و حکمرانی شرکتی معنا پیدا می‌کند. ما باور داریم سرمایه‌گذاری زمانی موفق است که علاوه بر بازده، آینده‌ای توانمندتر برای صنعت، جامعه و نسل‌های بعد بسازد."
              : "Our investment philosophy balances financial performance with environmental responsibility, social progress, and responsible governance. Through sustainable investment practices, we contribute to stronger industries, resilient communities, and enduring economic development."}
          </p>

          <Link
            to={`/${lang}/Approach/Sustainability`}
            className="ctaBlack mt-8 reveal-text reveal-delay-2"
          >
            <span>
              {isFa ? "نگاه ما به پایداری" : "Explore Sustainability"}
            </span>
            <img src={linkIconSrc} alt="" className="linkIcon" />
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-baseline mt-16">
            <div className="md:col-span-10">
              <span className={`${styles.sedctiontwoTitle} reveal-text`}>
                {isFa ? "رادمان" : "Why Radman"}
              </span>
            </div>
          </div>

          <h2 className={`${styles.sectionFourTitle} mt-4 reveal-text`}>
            {isFa
              ? "مزیتی که بر تجربه و آینده‌نگری بنا شده است"
              : "A Platform Built for Sustainable Growth"}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16 items-center">
            <div className="lg:col-span-7 relative z-10">
              <div className={styles.bulletBoxGrid}>
                <div className={`${styles.bulletBox} reveal-text`}>
                  <h4 className={styles.bulletTitle}>
                    {isFa
                      ? "یکپارچه سرمایه‌گذاری"
                      : "Integrated Investment Platform"}
                  </h4>
                  <p className={styles.bulletText}>
                    {isFa
                      ? "هم‌افزایی میان صنایع مکمل برای خلق ارزش مشترک."
                      : "Connecting complementary industries to create long-term value."}
                  </p>
                </div>

                <div
                  className={`${styles.bulletBox} reveal-text reveal-delay-1`}
                >
                  <h4 className={styles.bulletTitle}>
                    {isFa
                      ? "تخصیص هوشمند سرمایه"
                      : "Disciplined Capital Allocation"}
                  </h4>
                  <p className={styles.bulletText}>
                    {isFa
                      ? "هدایت سرمایه به فرصت‌هایی که تخصص، حاکمیت و ظرفیت رشد در آن‌ها همسو هستند."
                      : "Deploying capital where expertise, governance, and opportunity align."}
                  </p>
                </div>

                <div
                  className={`${styles.bulletBox} reveal-text reveal-delay-2`}
                >
                  <h4 className={styles.bulletTitle}>
                    {isFa ? "تصمیم‌گیری مبتنی بر تحلیل" : "Market Insight"}
                  </h4>
                  <p className={styles.bulletText}>
                    {isFa
                      ? "تبدیل داده‌ها و تحلیل‌های بازار به تصمیم‌های سرمایه‌گذاری مؤثر."
                      : "Turning insight into informed investment decisions."}
                  </p>
                </div>

                <div
                  className={`${styles.bulletBox} reveal-text reveal-delay-3`}
                >
                  <h4 className={styles.bulletTitle}>
                    {isFa ? "مشارکت برای رشد" : "Long-Term Partnerships"}
                  </h4>
                  <p className={styles.bulletText}>
                    {isFa
                      ? "ساختن ارزش مشترک از طریق همکاری‌های پایدار و اعتماد متقابل."
                      : "Creating shared value through trusted collaboration."}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className={`${styles.deskPersonGridItem} reveal-text`} />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 05 --- */}
      <section className={styles.sectionFivePerspectives}>
        <div className="w-full px-6 md:px-16">
          <div className="grid grid-cols-12 items-baseline">
            <div className="col-span-11">
              <span className={`${styles.sedctiontwoTitle} reveal-text`}>
                {isFa ? "نگاهی فراتر از اعداد" : "Perspectives"}
              </span>
            </div>
            <div className="col-span-1 text-right rtl:text-left">
              <span className={`${styles.sectionCounter} reveal-text`}>05</span>
            </div>
          </div>

          <div>
            <h2 className={`${styles.sectionThreeTitleWhite} mt-4 reveal-text`}>
              {isFa
                ? "تحلیل‌هایی برای تصمیم‌های آگاهانه‌تر"
                : "Insights That Shape Better Decisions"}
            </h2>

            <p
              className={`${styles.sectionFiveText} mt-4 w-5/6 md:w-1/2 reveal-text reveal-delay-1`}
            >
              {isFa
                ? "گزارش‌ها، تحلیل‌های تخصصی و دیدگاه‌های رادمان را درباره روندهای سرمایه‌گذاری، تحولات صنایع و فرصت‌های نوظهور دنبال کنید."
                : "Explore industry analysis, market perspectives, and corporate reports covering investment trends, industrial development, and emerging opportunities."}
            </p>

            <Link
              to={`/${lang}/Insights/Perspectives`}
              className="ctaWhite reveal-text reveal-delay-2"
            >
              <span>{isFa ? "مشاهده دیدگاه‌ها" : "Read Perspectives"}</span>
              <img src={linkIconSrc} alt="" className="linkIcon" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- SECTION 06 --- */}
      <section className={styles.sectionSixCTA}>
        <div className="w-full px-6 md:px-16 text-center">
          <h2 className={`${styles.sectionSixTitle} reveal-text`}>
            {isFa
              ? "گفتگو را از امروز شروع کنیم"
              : "Let’s Build Long-Term Value Together"}
          </h2>

          <p className={`${styles.sectionSixText} reveal-text reveal-delay-1`}>
            {isFa
              ? "اگر به دنبال فرصت‌های سرمایه‌گذاری، همکاری‌های راهبردی یا توسعه پروژه‌های مشترک هستید، رادمان آماده آغاز گفت‌وگویی برای خلق ارزش‌های ماندگار است."
              : "Whether you are exploring investment opportunities, seeking partnerships, or considering industrial collaboration, Radman welcomes conversations that open new avenues for growth."}
          </p>
        </div>
      </section>
    </>
  );
}
