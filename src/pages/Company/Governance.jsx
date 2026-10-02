import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styles from "./Governance.module.css";

import logoImg from "../../assets/Logo-black.svg";
import linkEnSvg from "../../assets/Link-EN.svg";
import linkFaSvg from "../../assets/Link-FA.svg";
import slide1 from "../../assets/Company Images/company-slide1.jpg";
import slide2 from "../../assets/Company Images/company-slide2.jpg";
import slide3 from "../../assets/Company Images/company-slide3.jpg";
import slide4 from "../../assets/Company Images/company-slide4.jpg";
import slide5 from "../../assets/Company Images/company-slide5.jpg";
import shadowPeopleImg from "../../assets/Company Images/governance-shadows.png";
import concludingImg from "../../assets/Company Images/governance-meeting.jpg";

export default function Governance() {
  const { lang } = useParams();
  const isFa = lang === "fa";
  const linkIconSrc = isFa ? linkFaSvg : linkEnSvg;

  return (
    <div className="bg-white overflow-hidden">
      <Helmet>
        <title>
          {isFa ? "رادمان | حاکمیت شرکتی" : "RADMAN | Corporate Governance"}
        </title>
      </Helmet>

      {/* --- OVERVIEW INTRO --- */}
      <section className="bg-white text-black pt-12 w-full">
        <div className="w-full px-6 md:px-16" dir="ltr">
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

            <p className={styles.overviewIntroText}>
              Investment holding group is an integrated investment platform with
              a diversified portfolio across energy, mining & metals, capital
              markets, and commodity trading.
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
            className={`${styles.sliderCard} ${styles.activeCard}`}
          >
            <div
              className={styles.sliderImage}
              style={{ backgroundImage: `url(${slide3})` }}
            />
            <span className={styles.activeLabel}>
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

      {/* --- SECTION ONE: RESPONSIBLE GOVERNANCE --- */}
      <section className={styles.sectionOneContainer}>
        <div className={styles.crowdContainer}>
          <img
            src={shadowPeopleImg}
            alt="Corporate Governance Crowd"
            className={styles.crowdImage}
          />
        </div>

        <div className="w-full px-6 md:px-16">
          <div className={styles.textCol}>
            <h1 className={styles.titleThin}>
              {isFa
                ? "تصمیم‌هایی که آینده را می‌سازند"
                : "Decisions That Create Enduring Value"}
            </h1>
            <h2 className={`${styles.editorialBadge} mt-2 text-black! mb-8`}>
              {isFa
                ? "اعتماد، حاصل حکمرانی مؤثر است. آینده، نتیجه رهبری مسئولانه."
                : "Governance That Builds Confidence. Leadership That Creates Enduring Value."}
            </h2>

            <p
              className={`${styles.textHelveticaThin} text-slate-900! md:w-3/4`}
            >
              {isFa
                ? "حاکمیت شرکتی، زیربنای هدایت، نظارت و پاسخ‌گویی در گروه سرمایه‌گذاری رادمان است. این نظام، چارچوبی منسجم برای راهبری راهبردی، نظارت مستقل و تصمیم‌گیری مسئولانه فراهم می‌کند تا تمامی سرمایه‌گذاری‌ها، شرکت‌های گروه و مشارکت‌های راهبردی در مسیر یک چشم‌انداز مشترک حرکت کنند."
                : "Corporate governance is the foundation of how Radman Investment Holding Group is directed, supervised, and held accountable. It establishes the framework for responsible leadership, independent oversight, and disciplined decision-making—ensuring every investment, subsidiary, and strategic partnership contributes to the Group's long-term vision."}
            </p>

            <p
              className={`${styles.textHelveticaThin} text-slate-900! mt-6 md:w-3/4`}
            >
              {isFa
                ? "با تکیه بر شفافیت، نظارت مؤثر و مسئولیت‌پذیری سازمانی، از منافع ذی‌نفعان صیانت می‌کنیم و بستر لازم برای رشد پایدار و توسعه بلندمدت را فراهم می‌سازیم."
                : "Through transparent governance, effective oversight, and clearly defined responsibilities, we safeguard stakeholder interests while creating the confidence that enables sustainable growth and enduring stakeholder trust."}
            </p>

            <div className={styles.topContentSpacer}>
              <span className={styles.editorialBadge}>
                {isFa ? "ساختار حاکمیت شرکتی" : "Governance Structure"}
              </span>
              <h2 className={`${styles.titleThin} mt-2`}>
                {isFa
                  ? "مسئولیت‌های روشن، راهبری یکپارچه"
                  : "Clear Responsibilities. Unified Direction."}
              </h2>
              <p
                className={`${styles.textHelveticaThin} text-slate-900! mt-4 md:w-1/2`}
              >
                {isFa
                  ? "نظام حاکمیت شرکتی رادمان، نقش‌ها، مسئولیت‌ها و سازوکارهای نظارتی را در سراسر گروه به‌روشنی تعریف می‌کند؛ ساختاری که رهبری راهبردی را با اجرای تخصصی در شرکت‌های گروه پیوند می‌دهد."
                  : "Our governance framework establishes clear roles, responsibilities, and oversight across the Group—balancing strategic leadership with specialized operational execution."}
              </p>
            </div>

            <div className={`${styles.pillarsGridDark} text-white`}>
              <div className={styles.pillarBoxDark}>
                <h3 className={styles.serifHeading}>
                  {isFa ? "راهبری هیئت‌مدیره" : "Board Oversight"}
                </h3>
                <p className={styles.textThin}>
                  {isFa
                    ? "هیئت‌مدیره با تعیین جهت‌گیری‌های کلان، تصویب تصمیم‌های مهم سرمایه‌گذاری، نظارت بر ریسک‌های راهبردی و پایش عملکرد گروه، نقش محوری در هدایت رادمان ایفا می‌کند."
                    : "The Board defines corporate direction, approves major investment decisions, oversees enterprise risk, and monitors the Group's long-term performance."}
                </p>
              </div>

              <div className={styles.pillarBoxDark}>
                <h3 className={styles.serifHeading}>
                  {isFa ? "رهبری اجرایی" : "Executive Leadership"}
                </h3>
                <p className={styles.textThin}>
                  {isFa
                    ? "مدیریت اجرایی مسئول تبدیل راهبردها به برنامه‌های عملیاتی، هدایت عملکرد، تخصیص بهینه منابع و تحقق اهداف گروه است."
                    : "Executive management translates strategy into execution by overseeing capital allocation, business performance, and operational excellence across the Group."}
                </p>
              </div>

              <div className={styles.pillarBoxDark}>
                <h3 className={styles.serifHeading}>
                  {isFa ? "مدیریت شرکت‌های گروه" : "Subsidiary Management"}
                </h3>
                <p className={styles.textThin}>
                  {isFa
                    ? "هر یک از شرکت‌های گروه با تکیه بر دانش تخصصی و مسئولیت‌پذیری مدیریتی فعالیت می‌کنند و در عین استقلال عملیاتی، در چارچوب استانداردهای حاکمیتی و اهداف راهبردی رادمان حرکت می‌کنند."
                    : "Each subsidiary operates with sector-specific expertise and executive accountability while remaining aligned with the Group's governance standards, strategic priorities, and performance expectations."}
                </p>
              </div>

              <div className={styles.pillarBoxDark}>
                <h3 className={styles.serifHeading}>
                  {isFa ? "نظارت مستقل" : "Independent Oversight"}
                </h3>
                <p className={styles.textThin}>
                  {isFa
                    ? "واحدهای مدیریت ریسک، حسابرسی داخلی، امور حقوقی، انطباق و حاکمیت شرکتی، با تقویت کنترل‌های داخلی، پایش الزامات قانونی و ارائه ارزیابی‌های مستقل، از استحکام نظام راهبری گروه پشتیبانی می‌کنند."
                    : "Independent functions—including Risk Management, Internal Audit, Legal Affairs, Compliance, and Corporate Governance—strengthen internal controls, support regulatory compliance, and provide objective oversight across the organization."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION TWO: GOVERNANCE IN PRACTICE --- */}
      <section className={styles.sectionTwoGradient}>
        <div className="w-full px-6 md:px-16">
          <div className="w-full">
            <span className={styles.editorialBadge}>
              {isFa ? "حاکمیت در عمل" : "Governance in Practice"}
            </span>
          </div>

          <h2 className={styles.titleThin}>
            {isFa ? "هماهنگی در مقیاس گروه" : "Consistency Across the Group"}
          </h2>

          <h3 className={`${styles.serifHeading} mt-6 text-white! md:w-1/2`}>
            {isFa
              ? "حاکمیت شرکتی، انسجام را در کنار چابکی سازمانی ممکن می‌سازد."
              : "Strong governance creates consistency while preserving entrepreneurial agility."}
          </h3>

          <p className={`${styles.textThin} text-zinc-100! mt-8 md:w-3/4`}>
            {isFa
              ? "رادمان استانداردهای مشترکی برای برنامه‌ریزی راهبردی، مدیریت ریسک، انطباق، پایش عملکرد و گزارش‌دهی در سراسر گروه تعریف می‌کند. در همین چارچوب، شرکت‌های گروه ضمن حفظ استقلال اجرایی، متناسب با ویژگی‌های هر صنعت فعالیت می‌کنند و هم‌زمان در راستای اهداف و استانداردهای مشترک گروه پیش می‌روند."
              : "The Holding establishes common standards for strategic planning, risk management, compliance, performance monitoring, and corporate reporting across the Group. Within this framework, subsidiaries retain the flexibility to respond to sector-specific opportunities while operating under shared governance standards and common business objectives."}
          </p>

          <p className={`${styles.textThin} text-zinc-100! mt-6 md:w-3/4`}>
            {isFa
              ? "این رویکرد، هماهنگی، مسئولیت‌پذیری و اثربخشی را در تمامی سطوح گروه تقویت می‌کند."
              : "This integrated model promotes responsible leadership, coordinated execution, and disciplined oversight throughout Radman's investment platform."}
          </p>

          <Link to={`/${lang}/Approach/Investment`} className="ctaWhite mt-8">
            <span>
              {isFa
                ? "راهبرد سرمایه‌گذاری رادمان"
                : "Explore Our Investment Strategy"}
            </span>
            <img src={linkIconSrc} alt="" className="linkIcon" />
          </Link>
        </div>
      </section>

      {/* --- SECTION THREE: GOVERNANCE STANDARDS --- */}
      <section className={styles.sectionThreeBlack}>
        <div className="w-full px-6 md:px-16">
          <div>
            <div className="w-full">
              <span className={styles.editorialBadge}>
                {isFa ? "کمیته‌های تخصصی هیئت‌مدیره" : "Board Committees"}
              </span>
            </div>

            <h2 className={styles.titleThin}>
              {isFa
                ? "تصمیم‌های بهتر، با نظارت تخصصی"
                : "Specialized Oversight. Better Decisions."}
            </h2>

            <p className={`${styles.textThin} text-zinc-100! mt-8 md:w-3/4`}>
              {isFa
                ? "هیئت‌مدیره با بهره‌گیری از کمیته‌های تخصصی، بر حوزه‌های کلیدی از جمله سرمایه‌گذاری، حسابرسی، مدیریت ریسک، راهبرد، حاکمیت شرکتی و عملکرد مدیران ارشد نظارت می‌کند."
                : "The Board is supported by specialized committees that strengthen oversight in key areas of governance, including investment, audit, enterprise risk, strategy, executive performance, and corporate governance."}
            </p>

            <p className={`${styles.textThin} text-zinc-100! mt-6 md:w-3/4`}>
              {isFa
                ? "این کمیته‌ها با ارائه بررسی‌های تخصصی و ارزیابی‌های مستقل، کیفیت تصمیم‌گیری، شفافیت، پاسخ‌گویی و اثربخشی نظام راهبری را ارتقا می‌دهند."
                : "By providing focused expertise and independent review, these committees enhance accountability, improve the quality of strategic decisions, and reinforce the Group's commitment to responsible governance and long-term value creation."}
            </p>
          </div>

          <div className="my-16 border-t border-white/20"></div>

          <div>
            <div className="w-full">
              <span className={styles.editorialBadge}>
                {isFa
                  ? "اصولی که تصمیم‌های ما را هدایت می‌کنند"
                  : "Principles That Guide Every Decision"}
              </span>
            </div>

            <h2 className={`${styles.titleThin} mb-8`}>
              {isFa
                ? "مبنای رهبری مسئولانه"
                : "The Standards Behind Responsible Leadership"}
            </h2>

            <div className={styles.threeColumnGrid}>
              <div className={styles.governanceGridBordered}>
                <h3 className={styles.serifHeading}>
                  {isFa ? "هم‌سویی راهبردی" : "Corporate Alignment"}
                </h3>
                <p className={`${styles.textThin} text-zinc-100! mt-4`}>
                  {isFa
                    ? "تصمیم‌های کلان همواره در راستای چشم‌انداز، اولویت‌های سرمایه‌گذاری و اهداف بلندمدت گروه اتخاذ می‌شوند."
                    : "Every significant decision supports the Group's long-term vision, business priorities, and sustainable growth objectives."}
                </p>
              </div>

              <div className={styles.governanceGridBordered}>
                <h3 className={styles.serifHeading}>
                  {isFa
                    ? "درستی، شفافیت و پاسخ‌گویی"
                    : "Integrity & Transparency"}
                </h3>
                <p className={`${styles.textThin} text-zinc-100! mt-4`}>
                  {isFa
                    ? "پایبندی به اخلاق حرفه‌ای، شفافیت در گزارش‌دهی و مسئولیت‌پذیری در تصمیم‌ها، پایه اعتماد میان سهامداران، شرکای تجاری، کارکنان و سایر ذی‌نفعان است."
                    : "Ethical conduct, transparent reporting, and open communication foster trust with shareholders, partners, employees, regulators, and other stakeholders."}
                </p>
              </div>

              <div className={styles.governanceGridBordered}>
                <h3 className={styles.serifHeading}>
                  {isFa
                    ? "انضباط در مدیریت ریسک"
                    : "Disciplined Risk Management"}
                </h3>
                <p className={`${styles.textThin} text-zinc-100! mt-4`}>
                  {isFa
                    ? "پایش مستمر، ارزیابی دقیق ریسک‌ها و نظارت مستقل، از سرمایه‌ها محافظت می‌کند، تاب‌آوری سازمان را افزایش می‌دهد و زمینه تصمیم‌گیری آگاهانه را فراهم می‌سازد."
                    : "Independent oversight, prudent risk assessment, and continuous monitoring strengthen resilience, protect capital, and support informed decision-making."}
                </p>
              </div>
            </div>
          </div>

          <div className="my-16 border-t border-white/20"></div>

          <div>
            <div className="w-full">
              <span className={styles.editorialBadge}>
                {isFa
                  ? "تخصصی که پشتوانه راهبری است"
                  : "Expertise Behind Good Governance"}
              </span>
            </div>

            <h2 className={styles.titleThin}>
              {isFa
                ? "تخصص مستقل، نظارت قابل‌اعتماد"
                : "Independent Expertise. Trusted Oversight."}
            </h2>

            <p className={`${styles.textThin} text-zinc-100! mt-8 md:w-3/4`}>
              {isFa
                ? "حاکمیت شرکتی کارآمد، بر دانش تخصصی و همکاری میان حوزه‌های کلیدی سازمان استوار است."
                : "Strong governance is supported by multidisciplinary expertise across strategy, investment, finance, legal affairs, risk management, corporate governance, compliance, and internal audit."}
            </p>

            <p className={`${styles.textThin} text-zinc-100! mt-6 md:w-3/4`}>
              {isFa
                ? "تیم‌های راهبرد، سرمایه‌گذاری، مالی، امور حقوقی، مدیریت ریسک، حاکمیت شرکتی، انطباق و حسابرسی داخلی، با همکاری یکدیگر از کیفیت تصمیم‌گیری، انسجام نظام راهبری و بهبود مستمر عملکرد گروه پشتیبانی می‌کنند."
                : "Working together, these functions provide independent oversight, informed analysis, effective coordination, and continuous improvement—ensuring governance remains consistent across the Group while supporting responsible growth and sustained organizational performance."}
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION FOUR --- */}
      <section className={styles.concludingSection}>
        <img
          src={concludingImg}
          alt="Radman Transparency in Governance"
          className={styles.concludingImage}
        />

        <div className={styles.concludingTextOverlay}>
          <h2 className={styles.concludingText}>
            {isFa
              ? "شفافیت در حاکمیت، اطمینان در هر تصمیم"
              : "Transparency in Governance. Confidence in Every Decision."}
          </h2>
        </div>
      </section>
    </div>
  );
}
