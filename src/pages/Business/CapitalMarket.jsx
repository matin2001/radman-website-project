import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styles from "./CapitalMarket.module.css";

import logoImg from "../../assets/Logo-black.svg";
import linkEnSvg from "../../assets/Link-EN.svg";
import linkFaSvg from "../../assets/Link-FA.svg";
import ringImg from "../../assets/Businesses Images/capital-hero.png";
import handsImg from "../../assets/Businesses Images/capital-hands.jpg";

export default function CapitalMarket() {
  const { lang } = useParams();
  const isFa = lang === "fa";
  const linkIconSrc = isFa ? linkFaSvg : linkEnSvg;

  return (
    <div className="bg-white overflow-hidden">
      <Helmet>
        <title>
          {isFa ? "رادمان | بازار سرمایه" : "RADMAN | Capital Markets"}
        </title>
      </Helmet>

      {/* --- SECTION ONE --- */}
      <section className={styles.sectionOneContainer}>
        <div className={styles.ringContainer}>
          <img
            src={ringImg}
            alt="Fluid Glass Ring Background"
            className={styles.ringImage}
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
            <div className={styles.verticalNavigator}>
              <Link
                to={`/${lang}/Businesses/CapitalMarket`}
                className={styles.navActive}
              >
                {isFa ? "بازارهای مالی" : "Capital Market"}
              </Link>
              <Link
                to={`/${lang}/Businesses/CommodityTrading`}
                className={styles.navInactive}
              >
                {isFa ? "تجارت کالا" : "Commodity Trading"}
              </Link>
              <Link
                to={`/${lang}/Businesses/Energy`}
                className={styles.navInactive}
              >
                {isFa ? "انرژی" : "Energy"}
              </Link>
              <Link
                to={`/${lang}/Businesses/Mining`}
                className={styles.navInactive}
              >
                {isFa ? "معادن" : "Mining"}
              </Link>
            </div>

            <h1 className={styles.titleThin}>
              {isFa
                ? "نگاهی ۳۶۰ درجه به بازار"
                : "We approach the market with a 360o view"}
            </h1>

            <h2 className={`${styles.serifHeading} mt-2 text-black!`}>
              {isFa
                ? "تبدیل سرمایه به پیشرفت صنعتی"
                : "Transforming Capital into Industrial Progress"}
            </h2>

            <p className={`${styles.textHelveticaThin} text-slate-900! mt-8`}>
              {isFa
                ? "بازار سرمایه، بنیان مدل سرمایه‌گذاری رادمان است. ما با ایجاد بازده مالی، بهینه‌سازی تخصیص سرمایه و به‌کارگیری رویکردهای منضبط در سرمایه‌گذاری، ظرفیت مالی لازم را برای تداوم سرمایه‌گذاری در حوزه‌های انرژی، معدن و صنایع فلزات، تجارت کالا و صنایع راهبردی آینده فراهم می‌کنیم."
                : "Capital markets are the foundation of Radman's investment model. By generating financial returns, optimizing capital allocation, and applying disciplined investment strategies, we create the financial capacity that enables sustained investment across energy, mining, commodity trading, and future strategic industries."}
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION TWO --- */}
      <section className={styles.sectionTwoWhite}>
        <div className="w-full px-6 md:px-16">
          <div>
            <span className={styles.editorialBadge}>
              {isFa
                ? "رویکرد رادمان در بازار سرمایه"
                : "Radman’s Capital Markets Mantra"}
            </span>

            <h2 className={`${styles.titleThin} mt-2`}>
              {isFa
                ? "پیوند دادن فرصت‌ها. هم‌سو کردن چشم‌اندازها. ساختن در کنار یکدیگر."
                : "Connect the dots. Share the vision. Build together"}
            </h2>
          </div>

          {/* Part 1: Content Grid Row  */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mt-8 w-full">
            <div className="col-span-12 lg:col-span-7 flex flex-col gap-6">
              <p className={styles.textHelveticaThin}>
                {isFa
                  ? "پلتفرم بازار سرمایه رادمان با هدف ایجاد بازده مالی پایدار، بهینه‌سازی به‌کارگیری سرمایه و تأمین ظرفیت مالی موردنیاز برای توسعه و گسترش فعالیت‌های صنعتی طراحی شده است."
                  : "Radman's capital markets platform is designed to generate sustainable financial returns, optimize capital deployment, and provide the financial capacity required for industrial growth and expansion."}
              </p>
              <p className={styles.textHelveticaThin}>
                {isFa
                  ? "با بهره‌گیری از تحلیل‌های پیشرفته، تأمین مالی ساختاریافته و ابزارهای نوین سرمایه‌گذاری، فرصت‌های مالی را به سرمایه‌گذاری‌های صنعتی مقیاس‌پذیر تبدیل می‌کنیم و زمینه تداوم رشد گروه را فراهم می‌سازیم."
                  : "Through advanced analytics, structured finance, and sophisticated investment strategies, we convert financial opportunities into scalable industrial investments that support the Group's continued growth."}
              </p>
            </div>
            <div className="col-span-12 lg:col-span-5 flex justify-start lg:justify-end">
              <Link to={`/${lang}/Approach/Investment`} className="ctaBlack">
                <span>
                  {isFa
                    ? "رویکرد سرمایه‌گذاری رادمان را ببینید"
                    : "Explore Our Investment Strategy"}
                </span>
                <img src={linkIconSrc} alt="" className="linkIcon" />
              </Link>
            </div>
          </div>

          <div className="my-16 border-t border-black/50"></div>

          {/* Part 2: Strategic Focus Areas Grid */}
          <div>
            <h2 className={styles.titleThin}>
              {isFa ? "حوزه‌های تمرکز" : "Strategic Focus Areas"}
            </h2>
            <div className={`${styles.threeColumnGrid} mt-8`}>
              <div className={styles.threeColumnGridBordered}>
                <h3 className={styles.serifHeading}>
                  {isFa
                    ? "مدیریت راهبردی سبد سرمایه‌گذاری"
                    : "Strategic Portfolio Management"}
                </h3>
                <ul className={styles.bulletListDark}>
                  <li>
                    {isFa
                      ? "تدوین راهبردهای متنوع‌سازی سبد سرمایه‌گذاری، هم‌راستا با چشم‌انداز و اهداف سرمایه‌گذاری رادمان و متناسب با تحولات اقتصاد کلان."
                      : "Developing diversified portfolio strategies aligned with Radman's vision, investment objectives, and evolving macroeconomic conditions."}
                  </li>
                  <li>
                    {isFa
                      ? "ارزیابی مستمر عملکرد مالی، تحولات صنایع و فرصت‌های نوظهور در بازار."
                      : "Continuous assessment of financial performance, industry dynamics, and emerging market opportunities."}
                  </li>
                  <li>
                    {isFa
                      ? "مدیریت منضبط ریسک با هدف حفظ سرمایه و بهبود عملکرد سبد در طول زمان."
                      : "Disciplined risk management to preserve capital and improve portfolio performance over time."}
                  </li>
                </ul>
              </div>

              <div className={styles.threeColumnGridBordered}>
                <h3 className={styles.serifHeading}>
                  {isFa
                    ? "راهکارهای نوآورانه تأمین سرمایه"
                    : "Innovative Capital Solutions"}
                </h3>
                <ul className={styles.bulletListDark}>
                  <li>
                    {isFa
                      ? "اجرای معاملات بلوکی و معاملات هدفمند برای بهینه‌سازی ترکیب سبد سرمایه‌گذاری."
                      : "Executing structured block trades and targeted transactions to optimize portfolio composition."}
                  </li>
                  <li>
                    {isFa
                      ? "افزایش تنوع فرصت‌های سرمایه‌گذاری از طریق صندوق‌های تخصصی و ساختارهای سرمایه‌گذاری جایگزین."
                      : "Expanding investment exposure through specialized funds and alternative investment vehicles."}
                  </li>
                  <li>
                    {isFa
                      ? "به‌کارگیری ابزارهای مشتقه، از جمله قراردادهای آتی و اختیار معامله، برای مدیریت مواجهه با ریسک بازار و افزایش تاب‌آوری سبد سرمایه‌گذاری."
                      : "Applying derivatives, including futures and options, to manage market exposure and enhance portfolio resilience."}
                  </li>
                </ul>
              </div>

              <div className={styles.threeColumnGridBordered}>
                <h3 className={styles.serifHeading}>
                  {isFa
                    ? "تأمین مالی پروژه و توسعه"
                    : "Project & Growth Financing"}
                </h3>
                <ul className={styles.bulletListDark}>
                  <li>
                    {isFa
                      ? "بهینه‌سازی ساختار سرمایه برای تقویت ترازنامه و فراهم‌کردن امکان توسعه."
                      : "Capital structure optimization to strengthen balance sheets and enable expansion."}
                  </li>
                  <li>
                    {isFa
                      ? "طراحی و انتشار اوراق بدهی و سایر ابزارهای تأمین مالی برای پروژه‌های صنعتی بزرگ‌مقیاس."
                      : "Designing and issuing bonds and debt instruments for large-scale industrial financing."}
                  </li>
                  <li>
                    {isFa
                      ? "به‌کارگیری سازوکارهای مالی ساختاریافته و متناسب با نیاز پروژه‌های پیچیده و اثرگذار."
                      : "Implementing structured and customized financial mechanisms for complex, high-impact projects."}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="my-16 border-t border-black/50"></div>
        </div>
      </section>

      {/* --- SECTION THREE --- */}
      <section className={styles.handsSection}>
        <img
          src={handsImg}
          alt="Capital in Motion Hands"
          className={styles.handsBgImage}
        />

        <div className={styles.handsContent}>
          <div className="w-full px-6 md:px-16">
            <span className={`${styles.editorialBadge} text-black`}>
              {isFa
                ? "چگونه اکوسیستم بازار سرمایه رادمان به توسعه صنعت کمک می‌کند؟"
                : "How Radman’s Capital Market Ecosystem Powers Industry"}
            </span>

            <div
              className={`${styles.textThin} text-zinc-900! mt-4 md:w-3/4 flex flex-col gap-3`}
            >
              {isFa ? (
                <>
                  <p>
                    بازار سرمایه برای رادمان صرفاً یک فعالیت تجاری نیست؛ موتور
                    مالی رشد صنعتی گروه است.
                  </p>
                  <p>
                    با پیوند دادن تخصص سرمایه‌گذاری با شناخت و راهبری صنعتی،
                    اطمینان می‌دهیم که طرح‌ها و فعالیت‌های اصلی گروه—از معدن و
                    صنایع فلزات گرفته تا انرژی و تجارت کالا—از ساختارهای مالی
                    مقیاس‌پذیر و تخصیص منضبط سرمایه برخوردار باشند.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Capital markets are not simply a business activity within
                    Radman—they are the financial engine that powers the Group's
                    industrial growth.
                  </p>
                  <p>
                    By integrating investment expertise with industrial
                    strategy, we ensure that every major initiative—from mining
                    & metals to energy and commodity trading—is supported by
                    scalable financial structures and disciplined capital
                    allocation.
                  </p>
                </>
              )}
            </div>

            {/* Row 1 */}
            <div className={`${styles.industryRowDark} border-0!`}>
              <div className="flex items-start justify-between gap-4">
                <span className={styles.serifHeading}>
                  {isFa
                    ? "تأمین مالی توسعه صنعتی"
                    : "Financing Industrial Expansion"}
                </span>
                <span
                  className={`${styles.sectionCounter} border-t border-black/50 lg:hidden shrink-0 text-end`}
                >
                  01
                </span>
              </div>

              <div>
                <p className={styles.textThin}>
                  {isFa
                    ? "ما راهکارهای تأمین مالی از طریق سهام، بدهی و تأمین مالی پروژه را طراحی و اجرا می‌کنیم تا دسترسی به‌موقع به سرمایه برای توسعه صنعتی، زیرساخت‌ها و پروژه‌های بزرگ‌مقیاس فراهم شود."
                    : "We structure equity, debt, and project financing solutions that provide timely access to capital for industrial expansion, infrastructure development, and large-scale priority projects."}
                </p>
              </div>

              <div className="hidden lg:flex flex-col justify-start items-end">
                <span
                  className={`${styles.sectionCounter} border-t border-black/50 text-end`}
                >
                  01
                </span>
              </div>
            </div>

            {/* Row 2 */}
            <div className={`${styles.industryRowDark} mt-0! border-0!`}>
              <div className="flex items-start justify-between gap-4">
                <span className={styles.serifHeading}>
                  {isFa
                    ? "تخصیص راهبردی سرمایه"
                    : "Strategic Capital Allocation"}
                </span>
                <span
                  className={`${styles.sectionCounter} border-t border-black/50 lg:hidden shrink-0 text-end`}
                >
                  02
                </span>
              </div>

              <div>
                <p className={styles.textThin}>
                  {isFa
                    ? "با برخورداری از دیدی جامع نسبت به بخش‌های مختلف اقتصاد، رادمان سرمایه را به حوزه‌هایی اختصاص می‌دهد که بیشترین ارزش عملیاتی و اقتصادی را ایجاد می‌کنند؛ با تمرکز بر کسب‌وکارهایی که زنجیره‌های تأمین ملی را تقویت کرده و جایگاه ایران را در بازارهای جهانی توسعه می‌دهند."
                    : "With deep visibility across sectors, Radman allocates capital where it can generate the greatest operational and economic value—prioritizing ventures that reinforce national supply chains and expand Iran's position in global markets."}
                </p>
              </div>

              <div className="hidden lg:flex flex-col justify-start items-end">
                <span
                  className={`${styles.sectionCounter} border-t border-black/50 text-end`}
                >
                  02
                </span>
              </div>
            </div>

            {/* Row 3 */}
            <div className={`${styles.industryRowDark} mt-0! border-0!`}>
              <div className="flex items-start justify-between gap-4">
                <span className={styles.serifHeading}>
                  {isFa
                    ? "شناخت بازار برای چابکی صنعتی"
                    : "Market Intelligence for Industrial Agility"}
                </span>
                <span
                  className={`${styles.sectionCounter} border-t border-black/50 lg:hidden shrink-0 text-end`}
                >
                  03
                </span>
              </div>

              <div>
                <p className={styles.textThin}>
                  {isFa
                    ? "ارتباط مستمر با بازارهای مالی و کالا، دیدی به‌روز نسبت به احساسات سرمایه‌گذاران، روندهای قیمت و تحولات ژئوپلیتیک فراهم می‌کند و به اتخاذ تصمیم‌های دقیق‌تر در زمینه تأمین مالی در سراسر گروه کمک می‌کند."
                    : "Continuous engagement with financial and commodity markets provides real-time insight into investor sentiment, pricing trends, and geopolitical developments—enabling more informed financing decisions across the Group."}
                </p>
              </div>

              <div className="hidden lg:flex flex-col justify-start items-end">
                <span
                  className={`${styles.sectionCounter} border-t border-black/50 text-end`}
                >
                  03
                </span>
              </div>
            </div>

            {/* Row 4 */}
            <div className={`${styles.industryRowDark} mt-0! border-0!`}>
              <div className="flex items-start justify-between gap-4">
                <span className={styles.serifHeading}>
                  {isFa ? "ارتباط با سرمایه‌گذاران" : "Investor Connectivity"}
                </span>
                <span
                  className={`${styles.sectionCounter} border-t border-black/50 lg:hidden shrink-0 text-end`}
                >
                  04
                </span>
              </div>

              <div>
                <p className={styles.textThin}>
                  {isFa
                    ? "رادمان با سرمایه‌گذاران نهادی، صندوق‌های حاکمیتی و شرکای بین‌المللی، روابطی مبتنی بر اعتماد ایجاد می‌کند تا سرمایه را به سمت دارایی‌ها و فرصت‌های اولویت‌دار هدایت کرده و از رشد صنعتی و توسعه پایدار اقتصادی پشتیبانی کند."
                    : "We build trusted relationships with institutional investors, sovereign funds, and global partners to channel capital into priority assets that support industrial growth and sustainable economic development."}
                </p>
              </div>

              <div className="hidden lg:flex flex-col justify-start items-end">
                <span
                  className={`${styles.sectionCounter} border-t border-black/50 text-end`}
                >
                  04
                </span>
              </div>
            </div>

            <div
              className={`${styles.industryRowDark} relative z-20 border-0! mt-0! pb-0!`}
            >
              <div className="hidden lg:block"></div>
              <div className="flex justify-start">
                <Link to={`/${lang}/Company/Overview`} className="ctaBlack">
                  <span>
                    {isFa
                      ? "حوزه‌های ایجاد ارزش در رادمان را ببینید"
                      : "Explore Where We Create Value"}
                  </span>
                  <img src={linkIconSrc} alt="" className="linkIcon" />
                </Link>
              </div>
              <div className="hidden lg:block"></div>
            </div>

            {/* Concluding Headline Section */}
            <div className={styles.handsBottomText}>
              <h2 className={styles.handsBottomText}>
                {isFa
                  ? "تخصص مالی، پشتوانه هر سرمایه‌گذاری"
                  : "Financial Expertise Behind Every Investment"}
              </h2>
              <p
                className={`${styles.textThin} text-zinc-900! mt-6 max-w-4xl mx-auto`}
              >
                {isFa
                  ? "پلتفرم بازار سرمایه رادمان مجموعه‌ای از متخصصان حوزه سرمایه‌گذاری سهام، تأمین مالی ساختاریافته، ابزارهای بدهی، اوراق بهادار قابل تبدیل و تأمین مالی مبتنی بر دارایی را گرد هم می‌آورد تا از تمامی مراحل چرخه سرمایه‌گذاری پشتیبانی کند."
                  : "Our capital markets platform brings together specialists in equity investments, structured finance, debt instruments, convertible securities, and asset-backed financing to support every stage of the investment lifecycle."}
              </p>
              <p
                className={`${styles.textThin} text-zinc-900! mt-6 max-w-4xl mx-auto`}
              >
                {isFa
                  ? "هم‌زمان با گسترش سبد صنعتی رادمان، توانمندی‌های مالی ما نیز متناسب با پیچیده‌تر شدن فرصت‌های سرمایه‌گذاری و نیازهای تأمین مالی توسعه می‌یابد."
                  : "As Radman expands its industrial portfolio, our financial capabilities continue to evolve to meet increasingly sophisticated investment opportunities and complex financing requirements."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
