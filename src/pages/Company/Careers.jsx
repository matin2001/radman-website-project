import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styles from "./Careers.module.css";
import logoImg from "../../assets/logo-black.png";
import slide1 from "../../assets/Company Images/company-slide1.jpg";
import slide2 from "../../assets/Company Images/company-slide2.jpg";
import slide3 from "../../assets/Company Images/company-slide3.jpg";
import slide4 from "../../assets/Company Images/company-slide4.jpg";
import slide5 from "../../assets/Company Images/company-slide5.jpg";
import careersConcludeImg from "../../assets/Company Images/careers-laptop.jpg";

export default function Careers() {
  const { lang } = useParams();
  const isFa = lang === "fa";

  return (
    <div className="bg-white overflow-hidden">
      <Helmet>
        <title>{isFa ? "رادمان | چشم‌انداز و هدف" : "RADMAN | Careers"}</title>
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
            to={`/${lang}/Company/Careers`}
            className={`${styles.sliderCard} ${styles.activeCard}`}
          >
            <div
              className={styles.sliderImage}
              style={{ backgroundImage: `url(${slide5})` }}
            />
            <span className={styles.activeLabel}>
              {isFa ? "فرصت‌های شغلی" : "Careers"}
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
        <div className="w-full px-6 md:px-16 text-left rtl:text-right">
          <h1 className={styles.titleThin}>
            {isFa
              ? "فرصت‌هایی برای ساختن آینده"
              : "Invest Your Talent in the Future"}
          </h1>
          <h2 className={`${styles.serifHeading} mt-4 text-black!`}>
            {isFa
              ? "در رادمان، به تیمی می‌پیوندید که با اندیشه راهبردی، سرمایه‌گذاری هوشمند و اجرای مؤثر، مسیر رشد صنایع و اقتصاد ایران را شکل می‌دهد."
              : "Join a team shaping industries, enabling sustainable economic growth, and building the foundations of tomorrow's economy."}
          </h2>

          <Link
            to={`/${lang}/ContactUs`}
            className={`${styles.linkLight} mt-8`}
          >
            {isFa ? "به تیم رادمان بپیوندید ↖" : "Join the Team ↗"}
          </Link>
        </div>
      </section>

      {/* --- SECTION TWO --- */}
      <section className={styles.careersTopSection}>
        <div
          className={`${styles.careersTopSectionWrapper} w-full px-6 md:px-16 flex flex-col justify-between h-full`}
        >
          <h2 className={styles.concludingTitle}>
            {isFa
              ? "مسیر رشد شما، بخشی از مسیر تحول ماست."
              : "Invest in Yourself, Impact your Future"}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mt-12">
            <div className="lg:col-span-8 text-left rtl:text-right">
              <p className={`${styles.textThin} text-zinc-100! md:w-1/2`}>
                {isFa
                  ? "در رادمان، شغل تنها یک جایگاه سازمانی نیست؛ فرصتی است برای یادگیری، رشد و اثرگذاری. چه در آغاز مسیر حرفه‌ای باشید و چه با سال‌ها تجربه به ما بپیوندید، در کنار تیمی فعالیت خواهید کرد که آینده انرژی، معدن، بازار سرمایه، زیرساخت و تجارت بین‌الملل را رقم می‌زند."
                  : "At Radman, we don't just create careers—we create meaningful growth pathways. Whether you're an experienced leader or an ambitious graduate, joining Radman means becoming part of a high-performance ecosystem that contributes to national development across energy, mining, capital markets, industrial development, and global trade."}
              </p>
            </div>

            <div className="lg:col-span-4 flex items-center lg:justify-end justify-start">
              <Link
                to={`/${lang}/Company/Vision`}
                className={`${styles.linkLightWhite} border-white/20! text-white! hover:bg-white! hover:text-black!`}
              >
                {isFa
                  ? "با چشم‌انداز و اهداف رادمان آشنا شوید ↖"
                  : "Discover Our Vision & Purpose ↗"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION TWO --- */}
      <section className={styles.careersBottomSection}>
        <div className="w-full px-6 md:px-16">
          <div className={styles.bottomColumnsGrid}>
            <div className="md:w-3/4">
              <div className="mb-8 md:mb-16 border-t border-white/50"></div>
              <h3 className={styles.serifHeading}>
                {isFa ? "اثری فراتر از یک شغل" : "Your Work. National Impact."}
              </h3>
              <p
                className={`${styles.textThin} text-zinc-100! mt-4 leading-relaxed`}
              >
                {isFa
                  ? "هر مسئولیتی در رادمان، بخشی از پروژه‌هایی است که به گسترش فرصت‌های سرمایه‌گذاری و تقویت زیرساخت‌های اقتصادی کشور کمک می‌کند. نتیجه کار شما فراتر از موفقیت یک پروژه است که در آینده صنایع و بازارهای ایران دیده می‌شود."
                  : "Every role at Radman contributes to projects that advance industries, expand investment opportunities, and support Iran's long-term economic development."}
              </p>
            </div>

            <div className="md:w-3/4">
              <div className="mb-8 md:mb-16 border-t border-white/50"></div>
              <h3 className={styles.serifHeading}>
                {isFa
                  ? "جایی که ایده‌ها به کسب‌وکار تبدیل می‌شوند"
                  : "Where Ideas Become Industries"}
              </h3>
              <p
                className={`${styles.textThin} text-zinc-100! mt-4 leading-relaxed`}
              >
                {isFa
                  ? "ما باور داریم بهترین ایده‌ها در محیطی شکل می‌گیرند که کنجکاوی، همکاری و جسارت در اندیشیدن ارزشمند باشد. در رادمان، هر ایده فرصتی دارد تا به یک راهکار عملی، یک کسب‌وکار نو یا یک مزیت رقابتی تبدیل شود."
                  : "We believe innovation begins with people. That's why we foster a culture of curiosity, collaboration, and bold thinking—where every idea has the opportunity to become a real-world business solution."}
              </p>
            </div>
          </div>

          <div className="mt-8 md:mt-16 border-t border-white/50"></div>
        </div>
      </section>

      {/* --- SECTION THREE --- */}
      {!isFa && (
        <section className={styles.sectionThreeGrow}>
          <div className="w-full px-6 md:px-16 text-left rtl:text-right">
            <div className="w-full mb-2">
              <span className={styles.editorialBadge}>
                {isFa ? "با ما رشد کنید" : "Grow With Us"}
              </span>
            </div>

            <h2 className={styles.titleThin}>
              {isFa ? "پرورش استعدادها" : "Developing People"}
            </h2>
            <p className={`${styles.textThin} text-zinc-100! mt-8 max-w-4xl`}>
              {isFa
                ? "در رادمان، رشد حرفه‌ای از طریق کارهای معنادار، همکاری‌های بین‌بخشی و یادگیری مستمر شکل می‌گیرد. ما همکاران خود را تشویق می‌کنیم که مالکیت وظایف خود را بر عهده بگیرند، تخصص خود را گسترش دهند و توانمندی‌های رهبری را توسعه بخشند، همزمان با مشارکت در پروژه‌هایی که آینده صنایع استراتژیک را رقم می‌زنند."
                : "At Radman, professional growth is built through meaningful work, cross-sector collaboration, and continuous learning. We encourage our people to take ownership, expand their expertise, and develop leadership capabilities while contributing to projects that shape the future of strategic industries."}
            </p>
            <div className="mt-8 md:mt-16 border-t border-white/50"></div>
          </div>
        </section>
      )}

      <section className={styles.concludingSection}>
        <div className={styles.concludingImageContainer}>
          <img
            src={careersConcludeImg}
            alt="Radman Concluding Careers Background"
            className={styles.concludingImage}
          />
        </div>

        <div className={styles.concludingTextOverlay}>
          <div className="w-full px-6 md:px-16">
            <div className="w-full">
              <div>
                <span className={styles.editorialBadge}>
                  {isFa ? "همراه با رادمان رشد کنید" : "Life at Radman"}
                </span>
                <p className={`${styles.textThin} text-zinc-100! mt-4`}>
                  {isFa
                    ? "رشد حرفه‌ای، حاصل تجربه‌های واقعی، همکاری میان‌رشته‌ای و یادگیری مستمر است. ما همکاران خود را تشویق می‌کنیم مسئولیت‌پذیر باشند، دانش خود را گسترش دهند و توانمندی‌های رهبری خود را در مسیر اجرای پروژه‌هایی توسعه دهند که آینده صنایع راهبردی را شکل می‌دهد."
                    : "We believe exceptional businesses are built by exceptional people. At Radman, collaboration, continuous learning, mutual respect, and shared ambition define how we work. We encourage initiative, value diverse perspectives, and create an environment where individuals can grow professionally while contributing to projects with lasting national impact."}
                </p>
              </div>

              <h2 className={`${styles.titleThin} my-12`}>
                {isFa
                  ? "بزرگ فکر کنید؛ جسورانه بسازید؛ بخشی از رادمان باشید."
                  : "Think Big. Build Bold. Belong at Radman"}
              </h2>

              <div>
                <span className={styles.editorialBadge}>
                  {isFa
                    ? "ما به دنبال چه کسانی هستیم؟"
                    : "Who We're Looking For"}
                </span>
                <p className={`${styles.textThin} text-zinc-100! mt-4`}>
                  {isFa ? (
                    <>
                      رادمان را متخصصانی ساخته‌اند که آینده‌نگرند، از پیچیدگی‌ها
                      استقبال می‌کنند، نگاه راهبردی دارند و می‌توانند ایده‌ها را
                      به نتیجه تبدیل کنند.
                      <br />
                      اگر به دنبال محیطی هستید که بتوانید رشد کنید، در
                      سرمایه‌گذاری‌های تحول‌آفرین نقش داشته باشید و آینده صنایع
                      کلیدی را بسازید، رادمان مقصد بعدی شماست.
                    </>
                  ) : (
                    <>
                      Radman is built by forward-thinking professionals,
                      industry specialists, and changemakers who embrace
                      complexity, think strategically, and thrive in
                      environments where innovation meets execution.
                      <br />
                      If you're ready to grow with purpose, contribute to
                      transformative projects, and help shape the future of
                      priority industries, Radman is the place to build your
                      next chapter.
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mt-8 lg:mt-16 items-start w-full min-w-0">
              <div className="hidden lg:block lg:col-span-5"></div>

              <div className="col-span-12 lg:col-span-7 flex flex-col gap-6 lg:gap-8 pb-4 w-full min-w-0">
                <div>
                  <h3
                    className={`${styles.serifHeadingBig} text-white! wrap-break leading-snug`}
                  >
                    {isFa
                      ? "حرکت بعدی شما از اینجا شروع می‌شود"
                      : "Your Next Move Starts Here"}
                  </h3>

                  <p
                    className={`${styles.textThin} text-zinc-100! mt-2 lg:mt-4 wrap-break`}
                  >
                    {isFa
                      ? "اولین قدم را به سوی شغلی بردارید که به شکل‌دهی صنایع، تقویت بازارها و خلق ارزش پایدار کمک می‌کند."
                      : "Take the first step toward a career that helps shape industries, strengthen markets, and create lasting value."}
                  </p>
                </div>

                <div className="pt-4 lg:pt-6">
                  <h4
                    className={`${styles.serifHeading} text-white! wrap-break`}
                  >
                    {isFa ? "همین امروز اقدام کنید" : "Apply Now"}
                  </h4>
                  <p
                    className={`${styles.textThin} text-zinc-100! mt-2 break-all sm:wrap-break`}
                  >
                    {isFa ? (
                      <>
                        رزومه خود را به{" "}
                        <a
                          href="mailto:careers@radmanholding.com"
                          className="underline underline-offset-4 hover:text-white!"
                        >
                          careers@radmanholding.com
                        </a>{" "}
                        ارسال کنید
                      </>
                    ) : (
                      <>
                        Send your CV to{" "}
                        <a
                          href="mailto:careers@radmanholding.com"
                          className=" hover:text-white!"
                        >
                          careers@radmanholding.com
                        </a>
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
