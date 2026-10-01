import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styles from "./Vision.module.css";
import logoImg from "../../assets/logo-black.png";
import slide1 from "../../assets/Company Images/company-slide1.jpg";
import slide2 from "../../assets/Company Images/company-slide2.jpg";
import slide3 from "../../assets/Company Images/company-slide3.jpg";
import slide4 from "../../assets/Company Images/company-slide4.jpg";
import slide5 from "../../assets/Company Images/company-slide5.jpg";
import tunnelImg from "../../assets/Company Images/vision-tunnels.jpg";

export default function Vision() {
  const { lang } = useParams();
  const isFa = lang === "fa";

  return (
    <div className="bg-white overflow-hidden">
      <Helmet>
        <title>
          {isFa ? "رادمان | چشم‌انداز و هدف" : "RADMAN | Vision & Purpose"}
        </title>
      </Helmet>

      {/* --- OVERVIEW INTRO --- */}
      <section className="bg-white text-black pt-12 w-full">
        <div className="w-full px-6 md:px-16">
          <div className="w-full" dir="ltr">
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
              Our vision shapes every investment, every partnership, and every
              opportunity to create enduring economic value.
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
            className={`${styles.sliderCard} ${styles.inactiveCard}`}
          >
            <div
              className={styles.sliderImage}
              style={{ backgroundImage: `url(${slide1})` }}
            />
            <span className={styles.inactiveLabel}>
              {isFa ? "بررسی اجمالی" : "Overview"}
            </span>
          </Link>

          <Link
            to={`/${lang}/Company/Vision`}
            className={`${styles.sliderCard} ${styles.activeCard}`}
          >
            <div
              className={styles.sliderImage}
              style={{ backgroundImage: `url(${slide2})` }}
            />
            <span className={styles.activeLabel}>
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
              {isFa ? "مشارکت‌ها" : "Partnerships"}
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

      {/* --- SECTION TWO: EYE BACKDROP --- */}
      <section className={styles.visionEyeSection}>
        <div className={styles.eyeContainer}>
          <img
            src="/src/assets/Company%20Images/vision-eye.png"
            alt="Radman Vision Eye"
            className={styles.eyeImage}
          />
        </div>
        <div className="w-full px-6 md:px-16">
          <div className={styles.textCol}>
            <span className={`${styles.titleThin} text-black`}>
              {isFa
                ? "تبدیل چشم‌انداز به دستاورد"
                : "Turning ambition into assets."}
            </span>
            <h2
              className={`${styles.editorialBadge} mt-2 text-black border-b pb-8 border-black`}
            >
              {isFa
                ? "سرمایه‌گذاری برای ساختن آینده‌ای توانمند"
                : "Vision into value."}
            </h2>

            <p className={`${styles.textHelveticaThin} mt-8 text-slate-900!`}>
              {isFa
                ? "چشم‌انداز ما، مسیر حرکت رادمان را در هر سرمایه‌گذاری، هر مشارکت و هر تصمیم راهبردی ترسیم می‌کند. ما پیشرفت را تنها با شاخص‌های مالی نمی‌سنجیم؛ آن را در توانمندسازی صنایع، توسعه زیرساخت‌ها و ایجاد فرصت‌هایی می‌بینیم که برای جامعه ماندگار باشند."
                : "Our vision shapes every investment, every partnership, and every opportunity to create enduring economic value."}
            </p>

            <p className={`${styles.textHelveticaThin} text-slate-900! mt-6`}>
              {isFa
                ? "رادمان بر آن است تا با ایجاد پلی میان ظرفیت‌های ملی و زنجیره‌های ارزش جهانی، به یکی از اثرگذارترین گروه‌های سرمایه‌گذاری ایران و منطقه تبدیل شود. با تکیه بر راهبری فعال، نوآوری مالی، مشارکت‌های بین‌المللی و نگاه راهبردی، زیرساخت‌هایی را توسعه می‌دهیم که پاسخگوی نیازهای امروز و پشتوانه رشد نسل‌های آینده باشند."
                : "Our vision is to become a leading catalyst for transformative investments in Iran and beyond by connecting national resources to the global value chain through an integrated model of active ownership, industrial specialization, and disciplined capital allocation."}
            </p>

            {!isFa && (
              <p className={`${styles.textHelveticaThin} text-slate-900! mt-6`}>
                Leveraging global partnerships, financial innovation, and deep
                market insight, we develop industrial platforms that create
                opportunities for future generations.
              </p>
            )}

            <h3 className={styles.visionMiddleTitle}>
              {isFa
                ? "ما باور داریم پیشرفت، تنها با شاخص‌های مالی سنجیده نمی‌شود؛ بلکه در توسعه صنایع، ارتقای توان رقابتی اقتصاد و ایجاد فرصت‌های پایدار برای جامعه معنا پیدا می‌کند."
                : "We believe true progress is measured not only by profits, but by the lasting value created for communities, industries, and national prosperity."}
            </h3>

            <p className={`${styles.textHelveticaThin} text-zinc-400! `}>
              {isFa
                ? "از انرژی و معدن و صنایع معدنی تا بازار سرمایه و تجارت کالا، تمامی فعالیت‌های رادمان با هدف توسعه پایدار، توانمندسازی اقتصاد ملی و حضور مؤثر در عرصه‌های بین‌المللی شکل می‌گیرد."
                : "From energy and mining to capital markets and trade, our vision is rooted in sustainable development, national empowerment, and global relevance."}
            </p>

            <div className="my-12 border-t border-white w-1/2"></div>

            <span className={styles.editorialBadge}>
              {isFa ? "ارزش‌های بنیادین" : "Our Core Values"}
            </span>

            <div className={styles.valuesGrid}>
              <div className={styles.valueBox}>
                {isFa ? "نوآوری هدفمند" : "Innovate with Purpose"}
              </div>
              <div className={styles.valueBox}>
                {isFa ? "درستی و مسئولیت‌پذیری" : "Lead with Integrity"}
              </div>
              <div className={styles.valueBox}>
                {isFa ? "تعهد به تعالی" : "Operate with Excellence"}
              </div>
              <div className={styles.valueBox}>
                {isFa ? "رشد مسئولانه" : "Grow Responsibly"}
              </div>
            </div>

            <div className="mt-28">
              <span className={styles.editorialBadge}>
                {isFa ? "بنیان راهبردی" : "Our Strategic Foundation"}
              </span>
              <h2 className={`${styles.titleThin} md:w-max mt-4`}>
                {isFa
                  ? "مدلی یکپارچه برای رشد و توسعه"
                  : "Controlled Ownership × Vertical Integration"}
              </h2>
              <p
                className={`${styles.textHelveticaThin} text-white! md:w-1/2 mt-4`}
              >
                {isFa
                  ? "این مدل از طریق چهار محور راهبردی اجرا می‌شود:"
                  : "A disciplined investment model built on four defining pillars:"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionThreePillars}>
        <div className="w-full px-6 md:px-16">
          <div className={styles.pillarsGrid}>
            <div className={styles.pillarBox}>
              <h3 className={styles.pillarBoxTitle}>
                {isFa
                  ? "یکپارچه‌سازی زنجیره ارزش:"
                  : "Mine-to-Market Integration:"}
              </h3>
              <p className={styles.pillarBoxText}>
                {isFa
                  ? "از منابع اولیه تا بازارهای نهایی."
                  : "Building a unified value chain from resource to end-user."}
              </p>
            </div>

            <div className={styles.pillarBox}>
              <h3 className={styles.pillarBoxTitle}>
                {isFa ? "توسعه تجارت منطقه‌ای:" : "Regional Trade Leadership:"}
              </h3>
              <p className={styles.pillarBoxText}>
                {isFa
                  ? "تقویت جایگاه ایران در بازارهای راهبردی کالا."
                  : "Positioning Iran as a hub for essential commodities."}
              </p>
            </div>

            <div className={styles.pillarBox}>
              <h3 className={styles.pillarBoxTitle}>
                {isFa
                  ? "تحول دیجیتال و داده‌محور:"
                  : "Digital & Data Transformation:"}
              </h3>
              <p className={styles.pillarBoxText}>
                {isFa
                  ? "تبدیل داده به مزیت رقابتی و تصمیم‌گیری هوشمند."
                  : "Turning intelligence into advantage."}
              </p>
            </div>

            <div className={styles.pillarBox}>
              <h3 className={styles.pillarBoxTitle}>
                {isFa ? "حاکمیت شرکتی شفاف:" : "Transparent Governance:"}
              </h3>
              <p className={styles.pillarBoxText}>
                {isFa
                  ? "ایجاد اعتماد، پاسخ‌گویی و آمادگی برای همکاری با سرمایه‌گذاران بین‌المللی."
                  : "Global capital rising with trust and clarity."}
              </p>
            </div>
          </div>

          <div className={styles.pillarsCTAWrapper}>
            <Link
              to={`/${lang}/Approach/Investment`}
              className={`${styles.linkLightWhite} border-white/20! text-white! hover:bg-white! hover:text-black!`}
            >
              {isFa
                ? "راهبرد سرمایه‌گذاری رادمان ↖"
                : "Explore Our Investment Strategy ↗"}
            </Link>
          </div>
        </div>
      </section>

      {/* --- SECTION FOUR: OUR MISSION --- */}
      <section className={styles.sectionFourMission}>
        <div className="w-full px-6 md:px-16">
          <div className="w-full mb-2">
            <span className={styles.editorialBadge}>
              {isFa ? "ماموریت ما" : "Our Mission"}
            </span>
          </div>

          <h2 className={`${styles.titleThin} mb-8`}>
            {isFa
              ? "اثرگذاری در سه بُعد"
              : "Creating Lasting Impact Across Three Dimensions"}
          </h2>

          <div className={styles.threeColumnGrid}>
            <div className={styles.missionGridBordered}>
              <h3 className={styles.serifHeading}>
                {isFa ? "خلق ارزش بلندمدت" : "Enduring Value Creation"}
              </h3>
              <p className={`${styles.textThin} text-white/90! mt-4`}>
                {isFa
                  ? "با راهبری فعال، هم‌افزایی میان شرکت‌های گروه و سرمایه‌گذاری هدفمند، ظرفیت‌های تازه‌ای برای رشد ایجاد می‌کنیم."
                  : "Active portfolio management and synergy across sectors to unlock new potential."}
              </p>
            </div>

            <div className={styles.missionGridBordered}>
              <h3 className={styles.serifHeading}>
                {isFa
                  ? "توسعه مسئولانه منابع"
                  : "Sustainable Resource Development"}
              </h3>
              <p className={`${styles.textThin} text-white/90! mt-4`}>
                {isFa
                  ? "از منابع و سرمایه‌ها به گونه‌ای بهره می‌بریم که رشد اقتصادی با مسئولیت‌های محیط‌زیستی و اجتماعی همراه باشد."
                  : "Responsible growth aligned with global ESG principles."}
              </p>
            </div>

            <div className={styles.missionGridBordered}>
              <h3 className={styles.serifHeading}>
                {isFa
                  ? "ایجاد پل میان ایران و سرمایه جهانی"
                  : "Regional Investment Hub"}
              </h3>
              <p className={`${styles.textThin} text-white/90! mt-4`}>
                {isFa
                  ? "با جذب سرمایه، دانش و فناوری، زمینه توسعه پروژه‌های راهبردی و ارتقای جایگاه ایران در اقتصاد منطقه را فراهم می‌کنیم."
                  : "Bringing international capital, expertise, and technology to Iran."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION FIVE --- */}
      <section className={styles.concludingTunnelSection}>
        <img
          src={tunnelImg}
          alt="Radman Investment Cycle Background"
          className={styles.tunnelImage}
        />

        <div className={styles.tunnelTextOverlay}>
          <div className="w-full px-6 md:px-16">
            <h2 className={styles.tunnelTitle}>
              {isFa
                ? "چرخه سرمایه‌گذاری رادمان: سرمایه در حرکت، توسعه در جریان"
                : "Capital in Motion: Radman's Investment Cycle"}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-8 text-left rtl:text-right">
                <div className="flex flex-col gap-1.5 md:gap-3">
                  <p className={styles.tunnelLine}>
                    {isFa
                      ? "سود، به سرمایه‌ای برای رشد تبدیل می‌شود."
                      : "Profits become capital."}
                  </p>
                  <p className={styles.tunnelLine}>
                    {isFa
                      ? "سرمایه، فرصت‌های تازه می‌آفریند."
                      : "Capital becomes opportunity."}
                  </p>
                  <p className={styles.tunnelLine}>
                    {isFa
                      ? "فرصت‌ها، اشتغال، توسعه صنعتی و پیشرفت اقتصادی را رقم می‌زنند."
                      : "Opportunity becomes employment and national progress."}
                  </p>
                </div>

                <p
                  className={`${styles.textThin} text-white/90! mt-8 md:w-1/2`}
                >
                  {isFa
                    ? "این چرخه، کسب‌وکارهای توانمند، صنایع رقابت‌پذیر و اقتصادی پایدار را شکل می‌دهد و جایگاه ایران را در زنجیره ارزش منطقه‌ای و جهانی تقویت می‌کند."
                    : "This continuous cycle enables Radman to create careers, strengthen industries, expand economic opportunity, and contribute to Iran's sustainable development as an emerging force in regional and global investment."}
                </p>
              </div>

              <div className="lg:col-span-4 flex items-center lg:justify-end justify-start">
                <Link
                  to={`/${lang}/Company/Partnership`}
                  className={`${styles.linkLightWhite} border-white/20! text-white! hover:bg-white! hover:text-black!`}
                >
                  {isFa
                    ? "به شبکه شرکای راهبردی رادمان بپیوندید ↖"
                    : "Explore Our Partnership Model ↗"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
