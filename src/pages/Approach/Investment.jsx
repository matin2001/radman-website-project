import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styles from "./Investment.module.css";

import logoImg from "../../assets/logo-white.png";
import linkEnSvg from "../../assets/Link-EN.svg";
import linkFaSvg from "../../assets/Link-FA.svg";
import planeImg from "../../assets/Approach Images/investment-plane.jpg";

export default function Investment() {
  const { lang } = useParams();
  const isFa = lang === "fa";
  const linkIconSrc = isFa ? linkFaSvg : linkEnSvg;

  return (
    <div className="bg-black overflow-hidden">
      <Helmet>
        <title>
          {isFa
            ? "رادمان | راهبرد سرمایه‌گذاری"
            : "RADMAN | Investment Strategies"}
        </title>
      </Helmet>

      {/* --- HERO & ENTIRE FIRST SECTION (Unified Background Image) --- */}
      <section className={styles.investmentHeroSection}>
        <div className="w-full px-6 md:px-16 pt-12" dir="ltr">
          <div className="w-full">
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

            <p className={`${styles.overviewIntroText} text-white!`}>
              Investment holding group is an integrated investment platform with
              a diversified portfolio across energy, mining & metals, capital
              markets, and commodity trading.
            </p>

            <div className="clear-both"></div>
          </div>
        </div>
        <div className="w-full px-6 md:px-16">
          <div className={styles.navigatorContainer}>
            <Link
              to={`/${lang}/Approach/Investment`}
              className={`${styles.navActive} w-min md:w-auto`}
            >
              {isFa ? "استراتژی‌های سرمایه‌گذاری" : "Investment Strategies"}
            </Link>
            <Link
              to={`/${lang}/Approach/Sustainability`}
              className={styles.navInactive}
            >
              {isFa ? "پایداری" : "Sustainability"}
            </Link>
          </div>

          {/* 3. Core Hero Content */}
          <h1 className={styles.titleThin}>
            {isFa
              ? "آینده‌نگری راهبردی، اثرگذاری پایدار"
              : "Strategic Foresight. Scalable Impact."}
          </h1>

          <h2 className={`${styles.serifHeading} mt-4 text-white!`}>
            {isFa
              ? "فراتر از سرمایه‌گذاری؛ ساختن آینده اقتصاد ایران"
              : "Investing Beyond Returns—Building the Future of Iran"}
          </h2>

          <h2 className={`${styles.textMedium} mt-4 text-white!`}>
            {isFa
              ? "در رادمان، سرمایه‌گذاری ابزاری برای تحول اقتصادی است."
              : "At Radman Investment Holding Group, investment is a tool for economic transformation. "}
          </h2>

          <p className={`${styles.textThin} text-zinc-100! mt-4 max-w-4xl`}>
            {isFa
              ? "سرمایه را به فرصت‌هایی هدایت می‌کنیم که با اتکا به شناخت عمیق از صنایع، راهبری فعال و تصمیم‌گیری مبتنی بر تحلیل، ظرفیت رشد و خلق ارزش پایدار دارند."
              : "We deploy capital where active ownership, sector expertise, and disciplined decision-making can strengthen priority industries, improve market position, and generate enduring economic returns."}
          </p>
          <p className={`${styles.textThin} text-zinc-100! max-w-4xl`}>
            {isFa
              ? "رویکرد سرمایه‌گذاری رادمان با در نظر گرفتن تحولات اقتصاد کلان، روندهای بازار و الزامات حاکمیت شرکتی شکل می‌گیرد و تلاش می‌کند میان بازده مالی، توسعه کسب‌وکار و اثرگذاری اقتصادی تعادل ایجاد کند."
              : "Every investment is aligned with national priorities, global trends, and ESG principles—supporting adaptive growth, sound governance, and sustainable business performance."}
          </p>

          <div className="my-8 md:my-16 border-t border-white/20"></div>

          <div>
            <span className={styles.editorialBadge}>
              {isFa ? "فلسفه سرمایه‌گذاری" : "Our Investment Philosophy"}
            </span>

            <h2 className={`${styles.titleThin} mt-2`}>
              {isFa
                ? "از شناسایی فرصت تا دستیابی به نتیجه"
                : "From Opportunity to Outcome—Every Step Matters"}
            </h2>

            <div className={styles.philosophyGrid}>
              {/* Col 1 */}
              <div>
                <h3 className={styles.philosophyColTitle}>
                  {isFa ? "تنوع‌بخشی هدفمند" : "Sector Diversification"}
                </h3>
                <p className={styles.philosophyColText}>
                  {isFa
                    ? "با ایجاد ترکیبی متوازن از فرصت‌های سرمایه‌گذاری، ریسک تمرکز را مدیریت کرده و امکان بهره‌گیری از ظرفیت‌های متفاوت بازار و صنایع را فراهم می‌کنیم."
                    : "Diversified investments across energy, mining, metals, capital markets, and infrastructure to create balanced exposure while managing risk."}
                </p>
              </div>

              {/* Col 2 */}
              <div>
                <h3 className={styles.philosophyColTitle}>
                  {isFa ? "راهبری فعال" : "Active Ownership"}
                </h3>
                <p className={styles.philosophyColText}>
                  {isFa
                    ? "فراتر از تأمین سرمایه، با راهبری راهبردی، استقرار حاکمیت شرکتی، ارتقای توان مدیریتی و بهره‌گیری از تحلیل‌های تخصصی، مسیر رشد شرکت‌های زیرمجموعه را هدایت می‌کنیم."
                    : "We strengthen portfolio companies with strategy, governance, operational expertise, and market intelligence."}
                </p>
              </div>

              {/* Col 3 */}
              <div>
                <h3 className={styles.philosophyColTitle}>
                  {isFa ? "رشد از مسیر مشارکت" : "Partnership-Driven Growth"}
                </h3>
                <p className={styles.philosophyColText}>
                  {isFa
                    ? "با مشارکت در سرمایه‌گذاری با نهادها و مؤسسات معتبر بین‌المللی، ظرفیت‌های صنعتی را توسعه می‌دهیم، انتقال دانش و فناوری را تسریع می‌کنیم و زمینه گسترش همکاری‌های منطقه‌ای را فراهم می‌سازیم."
                    : "We co-invest with leading global institutions to expand industrial capability, accelerate development, and deepen regional connectivity."}
                </p>
              </div>

              {/* Row 2: Col 1 */}
              <div>
                <h3 className={styles.philosophyColTitle}>
                  {isFa ? "نگاه بلندمدت" : "Enduring Perspective"}
                </h3>
                <p className={styles.philosophyColText}>
                  {isFa
                    ? "تصمیم‌های سرمایه‌گذاری ما بر پایه ایجاد دستاوردهای اقتصادی، اجتماعی و زیست‌محیطی پایدار است؛ نه منافع کوتاه‌مدت."
                    : "Our approach prioritizes enduring economic, social, and environmental value—not short-term gains."}
                </p>
              </div>

              {/* Row 2: Col 2 */}
              <div>
                <h3 className={styles.philosophyColTitle}>
                  {isFa ? "مدیریت ریسک" : "Risk Management"}
                </h3>
                <p className={styles.philosophyColText}>
                  {isFa
                    ? "پژوهش‌های تخصصی، پایش مستمر عملکرد و پایبندی به استانداردهای بین‌المللی، پایه تصمیم‌گیری‌های آگاهانه و حفظ پایداری عملکرد پرتفوی سرمایه‌گذاری ماست."
                    : "In-depth research, continuous performance monitoring, and adherence to international best practices support informed investment decisions and consistent portfolio performance."}
                </p>
              </div>

              <div className="flex items-end justify-start md:justify-end md:min-h-30">
                <Link to={`/${lang}/Company/Partnership`} className="ctaWhite">
                  <span>
                    {isFa
                      ? "همکاری‌های راهبردی رادمان را بشناسید"
                      : "Explore our Partnerships Model"}
                  </span>
                  <img src={linkIconSrc} alt="" className="linkIcon" />
                </Link>
              </div>
            </div>
          </div>

          <div className="my-8 md:my-20 border-t border-white/20"></div>

          <div>
            <span className={styles.editorialBadge}>
              {isFa ? "مدل سرمایه‌گذاری رادمان" : "Our Strategic Model"}
            </span>

            <h2 className={`${styles.textThin} mt-2 md:w-1/2`}>
              {isFa
                ? "مدل سرمایه‌گذاری رادمان، راهبری فعال، تخصص شرکت‌های زیرمجموعه و حاکمیت متمرکز را در یک ساختار یکپارچه گرد هم می‌آورد؛ ساختاری که امکان تصمیم‌گیری چابک، تخصیص هوشمند سرمایه و توسعه پایدار را فراهم می‌کند."
                : "A disciplined investment architecture that integrates active ownership, specialized subsidiaries, and centralized governance, enabling Radman to operate with agility, precision, and enduring stability."}
            </h2>

            {/* Row 1 */}
            <div className={styles.industryRow}>
              <div className="flex items-start justify-between gap-4">
                <span className={styles.editorialBadge}>
                  {isFa
                    ? "پرتفوی یکپارچه"
                    : "Integrated Portfolio & Value-Chain Strategy"}
                </span>
                <span
                  className={`${styles.sectionCounter} lg:hidden shrink-0 text-end`}
                >
                  01
                </span>
              </div>

              <div className={styles.modelTextStack}>
                <p className={styles.textThin}>
                  {isFa
                    ? "تمرکز بر حوزه‌هایی که از ظرفیت رشد و خلق ارزش برخوردارند."
                    : "Focus on high-growth sectors—energy, mining, metals, capital markets, and commodity trade."}
                </p>
                <p className={styles.textThin}>
                  {isFa
                    ? "تخصیص سرمایه بر اساس ارزیابی فرصت، میزان ریسک و جایگاه آن در سبد کلی."
                    : "Capital allocation guided by priority sectors, cross-business synergies, and disciplined investment principles."}
                </p>
                <p className={styles.textThin}>
                  {isFa
                    ? "ایجاد هم‌افزایی میان کسب‌وکارها، بدون تکرار یا هم‌پوشانی عملیاتی غیرضروری."
                    : "Vertical integration along key value chains to maximize efficiency and profitability."}
                </p>
              </div>

              <div className="hidden lg:flex flex-col justify-start items-end">
                <span className={styles.sectionCounter}>01</span>
              </div>
            </div>

            {/* Row 2 */}
            <div className={`${styles.industryRow} mt-0!`}>
              <div className="flex items-start justify-between gap-4">
                <span className={styles.editorialBadge}>
                  {isFa
                    ? "مدیریت تخصصی، راهبری متمرکز"
                    : "Subsidiary-Driven Operations, Holding-Level Governance"}
                </span>
                <span
                  className={`${styles.sectionCounter} lg:hidden shrink-0 text-end`}
                >
                  02
                </span>
              </div>

              <div className={styles.modelTextStack}>
                <p className={styles.textThin}>
                  {isFa
                    ? "اداره هر کسب‌وکار توسط تیم‌های مدیریتی متخصص و مستقل."
                    : "Specialized subsidiaries with independent strategies and expert management."}
                </p>
                <p className={styles.textThin}>
                  {isFa
                    ? "نظارت رادمان بر عملکرد، ریسک و حاکمیت شرکتی."
                    : "Radman provides investment oversight, risk management, and ESG governance."}
                </p>
                <p className={styles.textThin}>
                  {isFa
                    ? "ایجاد هماهنگی در سطح گروه برای تصمیم‌هایی که بر چند کسب‌وکار یا حوزه اثر می‌گذارند."
                    : "A unified Strategic Council ensures coordination, alignment, and group-wide synergy."}
                </p>
              </div>

              <div className="hidden lg:flex flex-col justify-start items-end">
                <span className={styles.sectionCounter}>02</span>
              </div>
            </div>

            {/* Row 3 */}
            <div className={`${styles.industryRow} mt-0!`}>
              <div className="flex items-start justify-between gap-4">
                <span className={styles.editorialBadge}>
                  {isFa
                    ? "تخصیص سرمایه مبتنی بر تحلیل"
                    : "Smart Financing & Capital Innovation"}
                </span>
                <span
                  className={`${styles.sectionCounter} lg:hidden shrink-0 text-end`}
                >
                  03
                </span>
              </div>

              <div className={styles.modelTextStack}>
                <p className={styles.textThin}>
                  {isFa
                    ? "ارزیابی فرصت‌ها بر اساس بازده مورد انتظار، ریسک، ظرفیت رشد و شرایط بازار."
                    : "Using capital markets to fund growth, optimize liquidity, and manage risk."}
                </p>
                <p className={styles.textThin}>
                  {isFa
                    ? "بازبینی مستمر تخصیص سرمایه متناسب با عملکرد و تغییرات محیط اقتصادی."
                    : "Applying modern financial instruments—bonds, funds, derivatives."}
                </p>
                <p className={styles.textThin}>
                  {isFa
                    ? "استفاده از داده و تحلیل برای بهبود کیفیت تصمیم‌های سرمایه‌گذاری."
                    : "Selective capital deployment toward emerging technologies and productivity-enhancing initiatives."}
                </p>
              </div>

              <div className="hidden lg:flex flex-col justify-start items-end">
                <span className={styles.sectionCounter}>03</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION TWO --- */}
      <section className={styles.sectionTwoGradient}>
        <div className="w-full px-6 md:px-16">
          <span className={styles.editorialBadge}>
            {isFa ? "چرا مدل سرمایه‌گذاری رادمان؟" : "Why Our Model Works"}
          </span>

          <h2 className={`${styles.serifHeading} mt-2 mb-8 md:mb-16`}>
            {isFa ? (
              <>
                ترکیب انضباط در تخصیص سرمایه با تخصص شرکت‌های زیرمجموعه، مدلی
                ایجاد می‌کند که می‌تواند هم‌زمان چابکی کسب‌وکار و انسجام گروهی
                را حفظ کند.
                <br className="my-2 block" />
                این ساختار به رادمان امکان می‌دهد منابع را به فرصت‌های مناسب
                هدایت کند، عملکرد سرمایه‌گذاری‌ها را به‌طور مستمر ارزیابی کند و
                در صورت تغییر شرایط، تصمیم‌های خود را با سرعت و دقت بازتنظیم
                کند.
              </>
            ) : (
              "Radman combines disciplined capital allocation with subsidiary-level specialization—enabling agility, cross-business synergies across energy, mining, metals, and trade, and integrated risk management. This structure positions us to grow efficiently and attract leading international investment partners."
            )}
          </h2>

          <div className="py-8 md:py-16 border-t border-white/20">
            <span className={styles.editorialBadge}>
              {isFa
                ? "سرمایه‌ای که فرصت‌ها را به یکدیگر متصل می‌کند"
                : "Capital That Connects. Strategy That Unites."}
            </span>
            {isFa ? (
              <div
                className={`${styles.textThin} text-zinc-100! mt-2 md:w-3/4 flex flex-col gap-3`}
              >
                <p>
                  اثرگذاری سرمایه زمانی بیشتر می‌شود که تصمیم‌های سرمایه‌گذاری
                  درک روشنی از ارتباط میان کسب‌وکارها، بازارها و ظرفیت‌های توسعه
                  داشته باشند.
                </p>
                <p>
                  رادمان با نگاه به کل سبد، فرصت‌های هم‌افزا را شناسایی می‌کند و
                  تلاش می‌کند سرمایه، تخصص و ظرفیت مدیریتی را در نقاطی به کار
                  گیرد که بیشترین ارزش اقتصادی را ایجاد می‌کنند.
                </p>
                <p>
                  این رویکرد به معنای یکسان‌سازی کسب‌وکارها نیست؛ بلکه ایجاد
                  هماهنگی در سطح گروه، در عین حفظ تخصص و استقلال عملیاتی هر
                  مجموعه است.
                </p>
              </div>
            ) : (
              <p className={`${styles.textThin} text-zinc-100! mt-2 md:w-1/2`}>
                We believe capital achieves its greatest impact when it connects
                industries, strengthens businesses, and enables sustainable
                economic development.
              </p>
            )}
          </div>
          <div className="border-t border-black mb-8 md:mb-16 "></div>
        </div>

        <div className="w-full px-6 md:px-16 text-black!">
          <span className={`${styles.editorialBadge} text-black`}>
            {isFa ? "اولویت‌های راهبردی" : "Strategic Priorities"}
          </span>

          {!isFa && (
            <h2 className={`${styles.titleThin} mt-2!`}>
              Where We Create Structural Impact
            </h2>
          )}
          <div
            className={`${isFa ? styles.threeColumnGridFa : styles.threeColumnGrid} mt-4 md:mt-8`}
          >
            <div className={styles.strategicGridBordered}>
              <h3 className={styles.serifHeading} style={{ color: "#000000" }}>
                {isFa
                  ? "توسعه ظرفیت‌های صنعتی"
                  : "Integrated Value Chains & Regional Ecosystem Strength"}
              </h3>
              <p
                className={`${styles.textThin} text-slate-900! mt-4 leading-relaxed`}
              >
                {isFa
                  ? "تمرکز بر فرصت‌هایی که می‌توانند ظرفیت تولید، زیرساخت و توانمندی‌های صنعتی را توسعه دهند و به شکل‌گیری کسب‌وکارهای ارزش‌آفرین منجر شوند."
                  : "We develop end-to-end vertical integration—from resource to global markets—reducing costs, improving transparency, and increasing bargaining power. Shared infrastructure, optimized logistics, and unified data systems strengthen Iran’s position as a regional commodities hub."}
              </p>
            </div>

            <div className={styles.strategicGridBordered}>
              <h3 className={styles.serifHeading} style={{ color: "#000000" }}>
                {isFa
                  ? "توسعه بازار و حضور بین‌المللی"
                  : "International Growth & Market Expansion"}
              </h3>
              <p
                className={`${styles.textThin} text-slate-900! mt-4 leading-relaxed`}
              >
                {isFa
                  ? "شناسایی فرصت‌هایی که امکان دسترسی به بازارهای جدید، توسعه فعالیت‌های فرامرزی و گسترش روابط تجاری را فراهم می‌کنند."
                  : "Through international partnerships, joint trading platforms, and diversified market presence, we enhance Iran’s footprint in global commodity flows. A strong governance and branding framework enable us to attract international investment, advanced technologies, and cross-border opportunities."}
              </p>
            </div>

            <div className={styles.strategicGridBordered}>
              <h3 className={styles.serifHeading} style={{ color: "#000000" }}>
                {isFa
                  ? "فناوری و بهره‌وری"
                  : "Digital Intelligence & Data-Led Performance"}
              </h3>
              <p
                className={`${styles.textThin} text-slate-900! mt-4 leading-relaxed`}
              >
                {isFa
                  ? "توجه به فناوری‌هایی که می‌توانند بهره‌وری، کیفیت تصمیم‌گیری و عملکرد عملیاتی کسب‌وکارها را ارتقا دهند."
                  : "A unified digital command center powers real-time decision-making, predictive risk management, and operational excellence. Data becomes a strategic asset, enabling faster insights, better resource allocation, and group-wide optimization."}
              </p>
            </div>

            {isFa && (
              <div className={styles.strategicGridBordered}>
                <h3
                  className={styles.serifHeading}
                  style={{ color: "#000000" }}
                >
                  تحول داده‌محور
                </h3>
                <p
                  className={`${styles.textThin} text-slate-900! mt-4 leading-relaxed`}
                >
                  استفاده از داده و تحلیل برای شناخت بهتر فرصت‌ها، ارزیابی ریسک
                  و بهبود تصمیم‌گیری در سطح سبد سرمایه‌گذاری.
                </p>
              </div>
            )}
          </div>

          <div className="my-8 md:my-16 border-t border-black"></div>

          <div>
            <span className={`${styles.editorialBadge} text-black!`}>
              {isFa ? "حوزه‌های تمرکز سرمایه‌گذاری" : "Investment Focus Areas"}
            </span>

            <h2 className={`${styles.titleThin} mt-2!`}>
              {isFa
                ? "سرمایه را به فرصت‌های راهبردی تبدیل می‌کنیم"
                : "Where Capital Creates Opportunity"}
            </h2>

            <p className={`${styles.textThin} text-zinc-900! mt-6 md:w-1/2`}>
              {isFa
                ? "راهبرد سرمایه‌گذاری رادمان از طریق مجموعه‌ای از کسب‌وکارهای تخصصی در حوزه‌های مختلف اجرا می‌شود. این حوزه‌ها در کنار یکدیگر، دامنه فرصت‌های سرمایه‌گذاری گروه را شکل می‌دهند و هر یک نقشی متفاوت در مدل ارزش‌آفرینی رادمان دارند."
                : "Radman's investment strategy is executed through a robust network of subsidiaries and specialized divisions, each contributing to national progress and global relevance:"}
            </p>

            <div className={styles.pillarsGridDark}>
              <div className={styles.pillarBoxDark}>
                <h3 className={`${styles.serifHeading} text-black`}>
                  {isFa ? "انرژی" : "Energy"}
                </h3>
                <p className={styles.pillarBoxText}>
                  {isFa
                    ? "توسعه زیرساخت‌های انرژی و راهکارهای نوآورانه برای افزایش تاب‌آوری صنایع."
                    : "Powering industrial growth through infrastructure and innovation."}
                </p>
              </div>

              <div className={styles.pillarBoxDark}>
                <h3 className={`${styles.serifHeading} text-black`}>
                  {isFa ? "معدن و صنایع معدنی" : "Mining & Metals"}
                </h3>
                <p className={styles.pillarBoxText}>
                  {isFa
                    ? "تبدیل ظرفیت‌های معدنی ایران به مزیت‌های رقابتی، همراه با بهره‌برداری مسئولانه از منابع."
                    : "Unlocking resource value with environmental stewardship."}
                </p>
              </div>

              <div className={styles.pillarBoxDark}>
                <h3 className={`${styles.serifHeading} text-black`}>
                  {isFa ? "بازار سرمایه" : "Capital Markets"}
                </h3>
                <p className={styles.pillarBoxText}>
                  {isFa
                    ? "تقویت نقدشوندگی، اعتماد سرمایه‌گذاران و توسعه ابزارهای نوین مالی."
                    : "Driving liquidity, investor confidence, and financial innovation."}
                </p>
              </div>

              <div className={styles.pillarBoxDark}>
                <h3 className={`${styles.serifHeading} text-black`}>
                  {isFa ? "تجارت کالا" : "Commodity Trading"}
                </h3>
                <p className={styles.pillarBoxText}>
                  {isFa
                    ? "ارتقای زنجیره‌های تأمین و توسعه تجارت بین‌المللی از طریق راهکارهای هوشمند و یکپارچه."
                    : "Optimizing global flows through integrated supply chain solutions."}
                </p>
              </div>
            </div>
          </div>

          <div className={styles.concludingRowLight}>
            <div className="flex flex-col gap-6">
              <h3 className={styles.serifHeading}>
                {isFa
                  ? "سرمایه‌گذاری با نگاهی فراتر از بازده مالی"
                  : "Building Impact Where It Matters Most"}
              </h3>
              <p className={styles.textThin}>
                {isFa
                  ? "در رادمان، سرمایه را به کسب‌وکارهایی اختصاص می‌دهیم که در کنار عملکرد مالی مطلوب، به توسعه صنعتی، شفافیت، حفاظت از محیط‌زیست و تقویت اقتصاد کشور نیز کمک کنند؛ رویکردی که همسو با اهداف توسعه پایدار سازمان ملل، آینده‌ای توانمندتر برای ایران رقم می‌زند."
                  : "We invest in businesses that combine strong financial performance with responsible environmental practices, transparent governance, and long-term industrial development—supporting Iran's economic future and the UN Sustainable Development Goals."}
              </p>
            </div>

            <div className="flex items-end justify-start lg:justify-end">
              <Link
                to={`/${lang}/Approach/Sustainability`}
                className="ctaBlack"
              >
                <span>
                  {isFa
                    ? "رویکرد رادمان به پایداری و ESG"
                    : "Discover Our ESG & Sustainability Approach"}
                </span>
                <img src={linkIconSrc} alt="" className="linkIcon" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.concludingBanner}>
        <img
          src={planeImg}
          alt="Radman Concluding Vision"
          className={styles.concludingBannerImage}
        />
      </section>
    </div>
  );
}
