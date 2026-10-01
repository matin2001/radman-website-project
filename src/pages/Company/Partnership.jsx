import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styles from "./Partnership.module.css";
import logoImg from "../../assets/logo-black.png";
import slide1 from "../../assets/Company Images/company-slide1.jpg";
import slide2 from "../../assets/Company Images/company-slide2.jpg";
import slide3 from "../../assets/Company Images/company-slide3.jpg";
import slide4 from "../../assets/Company Images/company-slide4.jpg";
import slide5 from "../../assets/Company Images/company-slide5.jpg";
import partnershipSculptureImg from "../../assets/Company Images/partnership-hands.png";
import frameworkImg from "../../assets/Company Images/partnership-framework.jpg";
import walkingImg from "../../assets/Company Images/partnership-walking.jpg";

export default function Partnership() {
  const { lang } = useParams();
  const isFa = lang === "fa";

  return (
    <div className="bg-white overflow-hidden">
      <Helmet>
        <title>
          {isFa ? "رادمان | چشم‌انداز و هدف" : "RADMAN | Partnership"}
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

      <section className="bg-white text-black w-full md:px-16">
        <div className={styles.sliderGrid}>
          <Link
            to={`/${lang}/Company/Careers`}
            className={`${styles.sliderCard} ${styles.inactiveCard}`}
          >
            <div
              className={styles.sliderImage}
              style={{ backgroundImage: `url(${slide5})` }}
            />
            <span className={styles.inactiveLabel}>
              {isFa ? "فرصت‌های شغلی" : "Careers"}
            </span>
          </Link>

          <Link
            to={`/${lang}/Company/Partnership`}
            className={`${styles.sliderCard} ${styles.activeCard}`}
          >
            <div
              className={styles.sliderImage}
              style={{ backgroundImage: `url(${slide4})` }}
            />
            <span className={styles.activeLabel}>
              {isFa ? "مشارکت‌ها" : "Partnerships"}
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
        </div>
      </section>

      {/* --- SECTION ONE --- */}
      <section className={styles.sectionOneContainer}>
        <div className={styles.sculptureContainer}>
          <img
            src={partnershipSculptureImg}
            alt="Meaningful Partnerships Sculpture"
            className={styles.sculptureImage}
          />
        </div>

        <div className="w-full px-6 md:px-16">
          <div className={styles.textCol}>
            <h1 className={styles.titleThin}>
              {isFa
                ? "هم‌افزایی برای ساختن افق‌های تازه"
                : "Where Vision Meets Collaboration"}
            </h1>
            <h2 className={`${styles.editorialBadge} mt-2 mb-8 text-black!`}>
              {isFa
                ? "رشد پایدار، حاصل همکاری‌های موفق است."
                : "Expanding Opportunity Through Meaningful Partnerships"}
            </h2>

            <p
              className={`${styles.textHelveticaThin} text-slate-900! md:w-4/5`}
            >
              {isFa
                ? "در رادمان، سرمایه، دانش، فناوری و دسترسی به بازار را در کنار یکدیگر قرار می‌دهیم تا با شکل‌گیری مشارکت‌های راهبردی، - چه در قالب سرمایه‌گذاری مشترک، انتقال فناوری یا همکاری‌های تجاری - فرصت‌های تازه خلق شود، صنایع توسعه یابند و جایگاه رقابتی ایران در بازارهای منطقه‌ای و بین‌المللی تقویت شود."
                : "The most enduring businesses are built through the right relationships. At Radman, we bring together capital, industrial expertise, technology, and market access to develop partnerships that unlock new opportunities, accelerate industrial development, and expand regional economic influence."}
            </p>

            <p
              className={`${styles.textHelveticaThin} text-slate-900! mt-6 md:w-2/5`}
            >
              {isFa
                ? "هر مشارکت بر پایه اعتماد، هم‌سویی اهداف و نگاه بلندمدت شکل می‌گیرد."
                : "Whether through co-investment, technology cooperation, or commercial collaboration, every alliance is founded on shared ambition, mutual trust, and a long-term commitment to measurable outcomes."}
            </p>

            <div className={styles.topContentSpacer}>
              <span className={styles.editorialBadge}>
                {isFa ? "چرا همکاری‌های راهبردی؟" : "Why Partnerships Matter"}
              </span>
              <h2 className={`${styles.titleThin} mt-2 md:w-1/2`}>
                {isFa
                  ? "همکاری، نقطه آغاز دستاوردهای بزرگ‌تر است."
                  : "Greater Results Through Complementary Strengths"}
              </h2>
              <p
                className={`${styles.textHelveticaThin} text-slate-900! md:w-3/5 mt-6`}
              >
                {isFa
                  ? "تحول‌های بزرگ، زمانی شکل می‌گیرند که توانمندی‌های مکمل در کنار یکدیگر قرار گیرند."
                  : "The greatest opportunities emerge when complementary capabilities come together."}
              </p>
              <p
                className={`${styles.textHelveticaThin} text-slate-900! md:w-3/5 mt-6`}
              >
                {isFa
                  ? "شرکای ما دانش بین‌المللی، فناوری‌های نوین، تجربه عملیاتی و دسترسی به بازارهای جهانی را به همراه می‌آورند و رادمان با شناخت عمیق از صنایع راهبردی، راهبری فعال سرمایه‌گذاری‌ها، بینش راهبردی و شناخت دقیق فضای کسب‌وکار ایران، این ظرفیت‌ها را به فرصت‌های ماندگار تبدیل می‌کند."
                  : "Our collaborators contribute international experience, advanced technologies, operational excellence, and access to global markets. Radman contributes market insight, active ownership, sector expertise, and a deep understanding of Iran's investment landscape."}
              </p>
              <p
                className={`${styles.textHelveticaThin} text-slate-900! md:w-3/5 mt-6`}
              >
                {isFa
                  ? "حاصل این هم‌افزایی، شکل‌گیری کسب‌وکارهای توانمند، صنایع رقابت‌پذیر و توسعه‌ای است که اثر آن فراتر از یک پروژه یا سرمایه‌گذاری خواهد بود."
                  : "Together, we transform opportunity into high-performing businesses, stronger industries, and enduring economic impact."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION TWO --- */}
      <section className={styles.sectionTwoPillars}>
        <div className="w-full px-6 md:px-16">
          <div className="w-full">
            <span className={styles.editorialBadge}>
              {isFa
                ? "اصول همکاری در رادمان"
                : "Principles of Our Partnership Model"}
            </span>
            <h2 className={`${styles.titleThin} mt-2`}>
              {isFa
                ? "آنچه زیربنای هر مشارکت است"
                : "The Foundation of Every Alliance"}
            </h2>
          </div>
          {/* Row 1 */}
          <div className={styles.partnershipRow}>
            <div className="flex items-start justify-between gap-4">
              <h3 className={styles.partnershipLeftTitle}>
                {isFa ? "هم‌افزایی راهبردی" : "Strategic Complementarity"}
              </h3>
              <span
                className={`${styles.sectionCounterDark} lg:hidden shrink-0 text-end`}
              >
                01
              </span>
            </div>
            <div>
              <p className={`${styles.textHelveticaThin} text-zinc-900!`}>
                {isFa
                  ? "با سازمان‌هایی همکاری می‌کنیم که توانمندی‌های آن‌ها در حوزه فناوری، سرمایه، عملیات یا توسعه بازار، مکمل ظرفیت‌های رادمان باشد و افق‌های تازه‌ای برای رشد و توسعه ایجاد کند."
                  : "We work with organisations whose capabilities—whether in technology, operations, capital, or market access—complement our strengths and expand the potential of every venture."}
              </p>
            </div>
            <div className="hidden lg:flex justify-end">
              <span className={`${styles.sectionCounterDark} text-end`}>
                01
              </span>
            </div>
          </div>

          {/* Row 2 */}
          <div className={`${styles.partnershipRow} mt-0!`}>
            <div className="flex items-start justify-between gap-4">
              <h3 className={styles.partnershipLeftTitle}>
                {isFa
                  ? "هم‌راستایی سرمایه و منافع"
                  : "Co-Investment & Capital Alignment"}
              </h3>
              <span
                className={`${styles.sectionCounterDark} lg:hidden shrink-0 text-end`}
              >
                02
              </span>
            </div>
            <div>
              <p className={`${styles.textHelveticaThin} text-zinc-900!`}>
                {isFa
                  ? "بیشترین اثرگذاری سرمایه زمانی حاصل می‌شود که همه طرف‌ها در مسیر یک هدف مشترک حرکت کنند."
                  : "Capital achieves its greatest impact when it supports a shared purpose."}
              </p>
              <p className={`${styles.textHelveticaThin} text-zinc-900! mt-2`}>
                {isFa
                  ? "از طریق سرمایه‌گذاری‌های مشترک، مشارکت‌های راهبردی و ساختارهای کنسرسیومی، مسئولیت‌ها، ریسک‌ها و دستاوردها را با شرکای خود به اشتراک می‌گذاریم."
                  : "Through joint ventures, strategic alliances, and consortium structures, Radman and its collaborators deploy capital together, align responsibilities, and participate in long-term success."}
              </p>
              <ul className={styles.partnershipBullets}>
                <li>
                  {isFa ? "تعهد مشترک به سرمایه" : "Joint capital commitment"}
                </li>
                <li>
                  {isFa ? "مسئولیت‌پذیری همسو" : "Aligned accountability"}
                </li>
                <li>{isFa ? "موفقیت مشترک" : "Shared outcomes"}</li>
              </ul>
            </div>

            <div className="hidden lg:flex justify-end">
              <span className={`${styles.sectionCounterDark} text-end`}>
                02
              </span>
            </div>
          </div>

          {/* Row 3 */}
          <div className={`${styles.partnershipRow} mt-0!`}>
            <div className="flex items-start justify-between gap-4">
              <h3 className={styles.partnershipLeftTitle}>
                {isFa
                  ? "انتقال دانش و فناوری"
                  : "Knowledge & Technology Transfer"}
              </h3>
              <span
                className={`${styles.sectionCounterDark} lg:hidden shrink-0 text-end`}
              >
                03
              </span>
            </div>
            <div>
              <p className={`${styles.textHelveticaThin} text-zinc-900!`}>
                {isFa
                  ? "به دنبال همکاری‌هایی هستیم که فناوری‌های پیشرفته، الگوهای نوین مدیریتی و تجربه‌های بین‌المللی را وارد کشور کرده و زمینه ارتقای توانمندی‌های صنعتی و افزایش بهره‌وری را فراهم کنند."
                  : "We seek relationships that introduce world-class technologies, modern operating models, and international expertise to build local capabilities, accelerate industrial modernisation, and improve long-term competitiveness."}
              </p>
            </div>
            <div className="hidden lg:flex justify-end">
              <span className={`${styles.sectionCounterDark} text-end`}>
                03
              </span>
            </div>
          </div>

          {/* Row 4 */}
          <div className={`${styles.partnershipRow} mt-0! border-b-0! pb-12`}>
            <div className="flex items-start justify-between gap-4">
              <h3 className={styles.partnershipLeftTitle}>
                {isFa ? "برتری در اجرا" : "Operational Partnership"}
              </h3>
              <span
                className={`${styles.sectionCounterDark} lg:hidden shrink-0 text-end`}
              >
                04
              </span>
            </div>
            <div>
              <p className={`${styles.textHelveticaThin} text-zinc-900!`}>
                {isFa
                  ? "برای ما، سرمایه تنها بخشی از یک همکاری است."
                  : "Beyond financing, we value organisations that contribute specialised knowledge, technical capability, and operational experience—improving project delivery and performance throughout the project lifecycle."}
              </p>
              {isFa && (
                <p
                  className={`${styles.textHelveticaThin} text-zinc-900! mt-2`}
                >
                  ارزش واقعی زمانی شکل می‌گیرد که تخصص، تجربه و توان اجرایی
                  شرکا، کیفیت اجرای پروژه‌ها و عملکرد بلندمدت آن‌ها را ارتقا
                  دهد.
                </p>
              )}
            </div>
            <div className="hidden lg:flex justify-end">
              <span className={`${styles.sectionCounterDark} text-end`}>
                04
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION THREE --- */}
      <section className={styles.sectionThreeFramework}>
        <div className="w-full px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <div className={styles.frameworkLeftCol}>
                <div>
                  <div className="w-1/4 border-t border-black mb-6"></div>

                  <span className={styles.editorialBadge}>
                    {isFa ? "چارچوب همکاری" : "Our Collaboration Framework"}
                  </span>

                  <h2 className={`${styles.titleThin} mt-2`}>
                    {isFa
                      ? "از هم‌سویی اهداف تا توسعه پایدار"
                      : "From Shared Vision to Sustainable Expansion"}
                  </h2>
                </div>

                <p
                  className={`${styles.textHelveticaThin} text-slate-900! mt-12`}
                >
                  {isFa
                    ? "هر همکاری موفق، بر پایه فرآیندی شفاف و منسجم شکل می‌گیرد."
                    : "Every successful alliance follows a disciplined framework that aligns objectives, execution, and future development."}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <img
                src={frameworkImg}
                alt="Radman Collaboration Framework"
                className="w-full h-auto block object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION FOUR --- */}
      <section className={styles.sectionFourWhite}>
        <div className="w-full px-6 md:px-16">
          <div className={`${styles.threeColumnGrid} mt-0!`}>
            <div className={styles.threeColumnGridBordered}>
              <h3 className={styles.serifHeading}>
                {isFa ? "چشم‌انداز مشترک" : "Shared Vision"}
              </h3>
              <p className={`${styles.textThin} text-slate-900! mt-4`}>
                {isFa
                  ? "همکاری را با هم‌راستاسازی اهداف، اولویت‌ها و چشم‌انداز بلندمدت آغاز می‌کنیم."
                  : "We begin by aligning shared priorities, commercial objectives, and long-term expectations."}
              </p>
            </div>

            <div className={styles.threeColumnGridBordered}>
              <h3 className={styles.serifHeading}>
                {isFa ? "اجرای یکپارچه" : "Integrated Execution"}
              </h3>
              <p className={`${styles.textThin} text-slate-900! mt-4`}>
                {isFa
                  ? "با بهره‌گیری از سازوکارهای مشترک راهبری، هماهنگی عملیاتی و استفاده از ظرفیت‌های مکمل، برنامه‌ها را به نتایج ملموس تبدیل می‌کنیم."
                  : "Shared governance, coordinated delivery, and complementary expertise transform plans into measurable results."}
              </p>
            </div>

            <div className={styles.threeColumnGridBordered}>
              <h3 className={styles.serifHeading}>
                {isFa ? "توسعه و گسترش" : "Scalable Growth"}
              </h3>
              <p className={`${styles.textThin} text-slate-900! mt-4`}>
                {isFa
                  ? "با بلوغ پروژه‌ها، همکاری‌ها نیز توسعه می‌یابند و به بستری برای حضور در بازارهای جدید، توسعه صنعتی و خلق فرصت‌های تازه تبدیل می‌شوند."
                  : "As initiatives mature, collaborations evolve into long-term platforms for regional growth, industrial innovation, and broader market opportunities."}
              </p>
            </div>
          </div>

          <div className="my-16 border-t border-black"></div>

          <div>
            <span className={styles.editorialBadge}>
              {isFa
                ? "اکوسیستم همکاری‌های رادمان"
                : "Partnership Opportunities"}
            </span>
            <h2 className={`${styles.titleThin} mt-2 mb-8`}>
              {isFa
                ? "طراحی‌شده برای رشد فرامرزی"
                : "Designed for Cross-Border Growth"}
            </h2>

            <div className={styles.threeColumnGrid}>
              <div className={styles.threeColumnGridBordered}>
                <h3 className={styles.serifHeading}>
                  {isFa
                    ? "سرمایه‌گذاران نهادی و صندوق‌های ثروت ملی"
                    : "Institutional & Sovereign Investors"}
                </h3>
                <p
                  className={`${styles.textThin} text-slate-900! mt-4 leading-relaxed`}
                >
                  {isFa
                    ? "برای سرمایه‌گذاران بلندمدتی که به دنبال حضور در حوزه‌های انرژی، معدن، زیرساخت، بازار سرمایه و توسعه صنعتی هستند، رادمان بستری مطمئن برای سرمایه‌گذاری هدفمند فراهم می‌کند."
                    : "Access high-impact opportunities across energy, mining, infrastructure, capital markets, and industrial development through disciplined capital structures and active ownership."}
                </p>
                <div className="mt-8">
                  <h4 className={`${styles.serifHeading} text-slate-900!`}>
                    {isFa ? "چرا رادمان؟" : "Why Radman"}
                  </h4>
                  <ul className={styles.bulletListDark}>
                    <li>
                      {isFa
                        ? "دسترسی به صنایع راهبردی"
                        : "Deep sector expertise"}
                    </li>
                    <li>
                      {isFa
                        ? "تجربه سرمایه‌گذاری در مقیاس بزرگ"
                        : "Established access to priority industries"}
                    </li>
                    <li>
                      {isFa
                        ? "راهبری فعال سرمایه‌گذاری‌ها"
                        : "Disciplined investment governance"}
                    </li>
                    <li>
                      {isFa
                        ? "ساختار حرفه‌ای مدیریت سرمایه"
                        : "Active ownership with enduring commitment"}
                    </li>
                  </ul>
                </div>
              </div>

              <div className={styles.threeColumnGridBordered}>
                <h3 className={styles.serifHeading}>
                  {isFa
                    ? "شرکای صنعتی و فناوری"
                    : "Technology & Industrial Partners"}
                </h3>
                <p
                  className={`${styles.textThin} text-slate-900! mt-4 leading-relaxed`}
                >
                  {isFa
                    ? "با همکاری شرکت‌های صنعتی و فناور، فناوری‌های نوین را وارد صنایع کشور می‌کنیم، بهره‌وری را افزایش می‌دهیم و مسیر نوسازی صنعتی را هموار می‌سازیم."
                    : "Collaborate to introduce advanced technologies, modernise industrial operations, and improve productivity across strategic sectors."}
                </p>
                <div className="mt-8">
                  <h4 className={`${styles.serifHeading} text-slate-900!`}>
                    {isFa ? "چرا رادمان؟" : "Why Radman"}
                  </h4>
                  <ul className={styles.bulletListDark}>
                    <li>
                      {isFa
                        ? "شناخت عمیق از بازار ایران"
                        : "Industrial execution capability"}
                    </li>
                    <li>
                      {isFa
                        ? "توانمندی در اجرای پروژه‌های صنعتی"
                        : "Local market knowledge"}
                    </li>
                    <li>
                      {isFa
                        ? "شبکه گسترده همکاری‌های تخصصی"
                        : "Strong investment platform"}
                    </li>
                    <li>
                      {isFa
                        ? "نگاه توسعه‌محور و بلندمدت"
                        : "Long-term development approach"}
                    </li>
                  </ul>
                </div>
              </div>

              <div className={styles.threeColumnGridBordered}>
                <h3 className={styles.serifHeading}>
                  {isFa
                    ? "شرکای تجاری و لجستیکی"
                    : "Trading & Logistics Partners"}
                </h3>
                <p
                  className={`${styles.textThin} text-slate-900! mt-4 leading-relaxed`}
                >
                  {isFa
                    ? "با توسعه زنجیره‌های تأمین، تقویت شبکه‌های حمل‌ونقل و گسترش دسترسی به بازارهای بین‌المللی، تجارت کالا را به مزیتی راهبردی تبدیل می‌کنیم."
                    : "Develop integrated supply chains, strengthen regional connectivity, and expand international market access through Radman's commodity trading platform."}
                </p>
                <div className="mt-8">
                  <div>
                    <h4 className={`${styles.serifHeading} text-slate-900!`}>
                      {isFa ? "چرا رادمان؟" : "Why Radman"}
                    </h4>
                    <ul className={styles.bulletListDark}>
                      <li>
                        {isFa
                          ? "موقعیت راهبردی ایران"
                          : "Gateway to Regional Markets"}
                      </li>
                      <li>
                        {isFa
                          ? "ارتباط مؤثر با تولیدکنندگان و صنایع"
                          : "Established industrial relationships"}
                      </li>
                      <li>
                        {isFa
                          ? "شبکه تجارت و لجستیک یکپارچه"
                          : "Reliable supply capability"}
                      </li>
                      <li>
                        {isFa
                          ? "توانمندی در مدیریت زنجیره تأمین"
                          : "Integrated trading ecosystem"}
                      </li>
                    </ul>
                  </div>
                  <Link
                    to={`/${lang}/Businesses/CommodityTrading`}
                    className={`${styles.linkLight} mt-8!`}
                  >
                    {isFa
                      ? "کسب‌وکار معاملات کالای ما را بررسی کنید ↖"
                      : "Explore Our Commodity Trading Business ↗"}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-black"></div>
        </div>
      </section>
      {/* --- SECTION FIVE --- */}
      <section className={styles.concludingSection}>
        <img
          src={walkingImg}
          alt="Radman Concluding Collaboration"
          className={styles.concludingImage}
        />

        <div className={styles.concludingTextOverlay}>
          <div className="w-full px-6 md:px-16">
            <div className={styles.choosingPartnersSection}>
              <h3 className={styles.serifHeading}>
                {isFa
                  ? "معیارهای انتخاب شرکای تجاری"
                  : "Choosing the Right Partners"}
              </h3>
              <p className={`${styles.textThin} text-zinc-900! mt-4`}>
                {isFa
                  ? "اعتماد، پایه هر همکاری ماندگار است. ما با سازمان‌هایی همکاری می‌کنیم که از ویژگی‌های زیر برخوردار باشند:"
                  : "We establish relationships with organisations that demonstrate:"}
              </p>
            </div>
            <ul className={styles.choosingPartnersList}>
              <li>
                {isFa
                  ? "اعتبار حرفه‌ای و جایگاه شناخته‌شده در سطح بین‌المللی"
                  : "International credibility and recognised industry leadership"}
              </li>
              <li>
                {isFa
                  ? "پایبندی به حاکمیت شرکتی، شفافیت و اصول اخلاق حرفه‌ای"
                  : "Strong governance, transparency, and ethical business conduct"}
              </li>
              <li>
                {isFa
                  ? "تجربه موفق در اجرای پروژه‌های بزرگ و پیچیده"
                  : "Proven experience delivering complex, large-scale projects"}
              </li>
              <li>
                {isFa
                  ? "تعهد به همکاری بلندمدت و اهداف مشترک"
                  : "An enduring commitment to shared objectives"}
              </li>
              <li>
                {isFa
                  ? "رویکردی مشارکتی و آینده‌نگر"
                  : "A collaborative mindset and long-term perspective"}
              </li>
            </ul>

            <div className="my-4 md:my-16 border-t border-black"></div>

            <div>
              <span className={styles.editorialBadge}>
                {isFa ? "دستاوردهای مشترک" : "Creating Value Together"}
              </span>

              <h2 className={`${styles.titleThin} mt-2`}>
                {isFa
                  ? "همکاری، شیوه اجرای راهبرد ماست."
                  : "Collaboration Is How We Deliver Our Strategy"}
              </h2>

              {isFa ? (
                <div className="mt-6 flex flex-col gap-3">
                  <p className={`${styles.textHelveticaThin} text-zinc-900!`}>
                    برای رادمان، همکاری یک انتخاب نیست؛ بخشی از شیوه عمل ماست.
                  </p>
                  <p className={`${styles.textHelveticaThin} text-zinc-900!`}>
                    ثمره این همکاری‌ها، تنها به موفقیت یک پروژه محدود نمی‌شود؛
                    بلکه به توسعه زنجیره‌های تأمین، پیشرفت صنعتی و گسترش حضور در
                    بازارهای منطقه‌ای و جهانی می‌انجامد.
                  </p>
                </div>
              ) : (
                <div className="mt-6 flex flex-col gap-3">
                  <p className={`${styles.textHelveticaThin} text-zinc-900!`}>
                    Collaboration is not an addition to our strategy—it is how
                    we execute it.
                  </p>
                  <p className={`${styles.textHelveticaThin} text-zinc-900!`}>
                    By combining capital, expertise, technology, and market
                    access, we transform opportunities into scalable businesses,
                    stronger industries, and sustainable growth across
                    industries and markets.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionSixCTA}>
        <div className="w-full px-6 md:px-16 text-center flex flex-col items-center">
          <h2 className={styles.sectionSixTitle}>
            {isFa ? "گفت‌وگو را آغاز کنیم" : "Let’s Build the Future Together"}
          </h2>

          <p className={`${styles.textThin} text-zinc-100! max-w-5xl mx-auto`}>
            {isFa
              ? "اگر سرمایه‌گذار، شرکت صنعتی، مجموعه فناور، فعال حوزه زیرساخت یا شریک تجاری هستید و چشم‌اندازی مشترک برای توسعه صنایع و گسترش فرصت‌های اقتصادی دارید، رادمان آماده آغاز یک همکاری بلندمدت با شماست."
              : "Whether you are an institutional investor, technology partner, industrial enterprise, or infrastructure developer, Radman offers a platform where ambitious partnerships become transformative investments."}
          </p>

          <Link
            to={`/${lang}/ContactUs`}
            className={`${styles.linkLightWhite} mt-10! border-white/20! text-white! hover:bg-white! hover:text-black!`}
          >
            {isFa
              ? "با تیم سرمایه‌گذاری رادمان در ارتباط باشید ↖"
              : "Contact Our Investment Team ↗"}
          </Link>
        </div>
      </section>
    </div>
  );
}
