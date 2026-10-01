import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styles from "./Energy.module.css";

import logoImg from "../../assets/logo-black.png";
import ringImg from "../../assets/Businesses Images/energy-hero.png";
import concludeBgImg from "../../assets/Businesses Images/energy-conclude.jpg";

export default function Energy() {
  const { lang } = useParams();
  const isFa = lang === "fa";

  return (
    <div className="bg-white overflow-hidden">
      <Helmet>
        <title>{isFa ? "رادمان | بازارهای مالی" : "RADMAN | Energy"}</title>
      </Helmet>

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
                className={styles.navInactive}
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
                className={styles.navActive}
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
                ? "انرژی؛ زیربنای توسعه، پیشران آینده"
                : "Investing in What Drives the World Forward"}
            </h1>

            <h2 className={`${styles.serifHeading} mt-2 text-black!`}>
              {isFa
                ? "سرمایه‌گذاری در زیرساختی که حرکت اقتصاد را ممکن می‌سازد"
                : "Strategic investment across the energy ecosystem"}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mt-8 w-full min-w-0 relative z-10">
            <div className="col-span-1 lg:col-span-7 min-w-0">
              {isFa ? (
                <div
                  className={`${styles.textHelveticaThin} text-slate-900! wrap-break-word flex flex-col gap-3`}
                >
                  <p>
                    در رادمان، انرژی تنها یک حوزه سرمایه‌گذاری نیست؛ زیرساختی
                    است که رشد صنایع، توسعه اقتصادی و رقابت‌پذیری کشور بر آن
                    استوار است.
                  </p>
                  <p>
                    از تولید و انتقال انرژی تا فناوری‌های نوین و راهکارهای
                    کم‌کربن، سرمایه را به حوزه‌هایی هدایت می‌کنیم که امنیت انرژی
                    را تقویت کرده، ظرفیت‌های صنعتی را توسعه دهند و بستر رشد
                    بلندمدت اقتصاد را فراهم آورند.
                  </p>
                </div>
              ) : (
                <p
                  className={`${styles.textHelveticaThin} text-slate-900! wrap-break-word`}
                >
                  Energy lies at the heart of Radman Investment Holding Group's
                  investment strategy. More than a sector, we view energy as a
                  platform for advancing industrial capability, supporting
                  economic development, and generating enduring economic returns
                  through disciplined capital allocation.
                </p>
              )}
            </div>

            <div className="col-span-1 lg:col-span-5 flex justify-start lg:justify-end min-w-0">
              <Link
                to={`/${lang}/Approach/Investment`}
                className={styles.linkLight}
              >
                {isFa
                  ? "فرصت‌های سرمایه‌گذاری مشترک را بررسی کنید ↖"
                  : "Explore Co-Investment Opportunities ↗"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION TWO --- */}
      <section className={styles.sectionTwoWhite}>
        <div className="w-full px-6 md:px-16">
          <p className={styles.serifHeading}>
            {isFa
              ? "سرمایه‌گذاری‌های ما بخش‌های انرژی‌های تجدیدپذیر، فناوری‌های پاک پیشرفته و دارایی‌های بالادستی و پایین‌دستی را در بر می‌گیرد—که یک پلتفرم یکپارچه انرژی را تشکیل می‌دهد که به رشد صنعتی نیرو بخشیده و از توسعه اقتصادی پایدار حمایت می‌کند."
              : "Our investments span renewable energy, advanced clean technologies, and upstream and downstream assets—forming an integrated energy platform that powers industrial growth and supports sustained economic development."}
          </p>

          <div className="my-8 md:my-16 border-t border-black/50"></div>

          <div>
            <span className={styles.editorialBadge}>
              {isFa
                ? "آینده انرژی از اینجا آغاز می‌شود"
                : "From Raw Potential to Real Power"}
            </span>

            <h2 className={`${styles.titleThin} mt-2`}>
              {isFa
                ? "تمرکز بر سرمایه‌گذاری‌هایی که آینده انرژی را شکل می‌دهند"
                : "Strategic Focus Areas"}
            </h2>
          </div>
        </div>
      </section>

      {/* --- SECTION THREE --- */}
      <section className={styles.sectionThreeGradient}>
        <div className="w-full px-6 md:px-16">
          <div className={`${styles.pillarsGridDark} mt-0!`}>
            <div className={styles.pillarBoxDark}>
              <h3 className={styles.serifHeading}>
                {isFa
                  ? "زیرساخت‌های راهبردی انرژی"
                  : "Core Energy Infrastructure"}
              </h3>
              <p className={styles.pillarBoxTextDark}>
                {isFa
                  ? "توسعه نیروگاه‌ها، شبکه‌های انتقال و زیرساخت‌های حیاتی، ستون اصلی امنیت انرژی و پایداری فعالیت‌های اقتصادی است. رادمان با سرمایه‌گذاری در این حوزه، ظرفیت‌های لازم برای رشد صنایع و توسعه زیرساخت‌های کشور را تقویت می‌کند."
                  : "Our investments span renewable energy, advanced clean technologies, and upstream and downstream assets—forming an integrated energy platform that powers industrial growth and supports sustained economic development."}
              </p>
            </div>

            <div className={styles.pillarBoxDark}>
              <h3 className={styles.serifHeading}>
                {isFa
                  ? "توسعه و بهره‌برداری بهینه از منابع"
                  : "Resource Development & Optimization"}
              </h3>
              <p className={styles.pillarBoxTextDark}>
                {isFa
                  ? "بهره‌گیری هدفمند از منابع هیدروکربوری، همراه با همکاری‌های بالادستی و پایین‌دستی، بهره‌وری را افزایش می‌دهد، کارایی عملیاتی را ارتقا می‌بخشد و ارزش اقتصادی بیشتری خلق می‌کند."
                  : "Unlocking hydrocarbon resources through selective upstream investments and integrated downstream partnerships that improve efficiency and commercial performance."}
              </p>
            </div>

            <div className={styles.pillarBoxDark}>
              <h3 className={styles.serifHeading}>
                {isFa
                  ? "گذار به انرژی‌های نو"
                  : "Energy Transition & New Technologies"}
              </h3>
              <p className={styles.pillarBoxTextDark}>
                {isFa
                  ? "سرمایه‌گذاری در انرژی‌های تجدیدپذیر، سامانه‌های ذخیره‌سازی و سوخت‌های پاک، پرتفوی رادمان را برای پاسخگویی به نیازهای آینده انرژی متنوع‌تر و آماده‌تر می‌سازد."
                  : "Diversifying the portfolio through investments in utility-scale renewables, energy storage systems, and next-generation clean fuels."}
              </p>
            </div>

            <div className={styles.pillarBoxDark}>
              <h3 className={styles.serifHeading}>
                {isFa
                  ? "هوشمندسازی و بهره‌وری انرژی"
                  : "Digital & Energy Efficiency Solutions"}
              </h3>
              <div className="flex flex-col justify-between h-full md:min-h-55">
                <p className={styles.pillarBoxTextDark}>
                  {isFa
                    ? "به‌کارگیری فناوری‌های دیجیتال، اتوماسیون و تحلیل داده، بهره‌وری عملیاتی را افزایش می‌دهد، مصرف انرژی و انتشار آلاینده‌ها را کاهش می‌دهد و فرصت‌های تازه‌ای برای توسعه کسب‌وکار ایجاد می‌کند."
                    : "Applying smart technologies, automation, and data-driven services to improve asset performance, reduce emissions, and generate new revenue streams."}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Link
              to={`/${lang}/Approach/Investment`}
              className={`${styles.linkLight}`}
            >
              {isFa
                ? "با راهبرد سرمایه‌گذاری رادمان آشنا شوید ↖"
                : "Discover Our Investment Approach ↗"}
            </Link>
          </div>

          <div className="my-16 border-t border-white/20"></div>
          <div>
            <span className={styles.editorialBadge}>
              {isFa
                ? "زیرساختی برای آینده‌ای مسئولانه"
                : "Building Infrastructure, Sustaining Impact"}
            </span>
            <h2 className={`${styles.titleThin} mt-2`}>
              {isFa
                ? "سرمایه‌گذاری مسئولانه، پایه توسعه پایدار انرژی"
                : "Responsible Investment That Stronger Energy Systems"}
            </h2>
          </div>

          <div className={styles.concludingRowDark}>
            <div
              className={`${styles.textThin} text-zinc-100! md:w-3/4 flex flex-col gap-3`}
            >
              {isFa ? (
                <>
                  <p>
                    در رادمان، مسئولیت‌پذیری بخشی جدایی‌ناپذیر از فرآیند
                    سرمایه‌گذاری است.
                  </p>
                  <p>
                    ملاحظات زیست‌محیطی، اصول حاکمیت شرکتی و مسئولیت اجتماعی، از
                    ارزیابی فرصت‌ها تا مدیریت سرمایه‌گذاری‌ها، در تمامی
                    تصمیم‌های ما حضور دارند تا زیرساخت‌های انرژی کارآمدتر،
                    مطمئن‌تر و آماده‌تر برای آینده شکل بگیرند.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Responsible investment goes beyond financial performance.
                  </p>
                  <p>
                    Radman integrates environmental stewardship, responsible
                    governance, and social responsibility throughout the
                    investment lifecycle to improve energy systems, enhance
                    operational performance, and support sustained industrial
                    development.
                  </p>
                </>
              )}
            </div>

            <div className="flex justify-end">
              <Link
                to={`/${lang}/Approach/Sustainability`}
                className={styles.linkLightWhite}
              >
                {isFa
                  ? "رویکرد رادمان به پایداری را ببینید ↖"
                  : "Discover Our Sustainability Approach ↗"}
              </Link>
            </div>
          </div>

          <div className="mt-16 border-t border-white/20"></div>
        </div>
      </section>

      {/* --- SECTION FOUR --- */}
      <section className={styles.energyBackdropSection}>
        <img
          src={concludeBgImg}
          alt="Clean Energy Swirl Background"
          className={styles.energyBgImage}
        />

        <div className={styles.energyContent}>
          <div className="w-full px-6 md:px-16">
            <div className={styles.leftContentCol}>
              <span className={styles.editorialBadge}>
                {isFa
                  ? "انرژی پاک، سرمایه‌گذاری برای فردا"
                  : "Clean Energy. Clear Commitment."}
              </span>

              <h2 className={`${styles.titleThin} mt-2`}>
                {isFa
                  ? "همگام با تحول بازارهای جهانی انرژی"
                  : "Investing in the power behind progress"}
              </h2>

              {isFa ? (
                <div
                  className={`${styles.textThin} text-zinc-100! mt-6 md:w-3/4 flex flex-col gap-3`}
                >
                  <p>
                    گذار جهانی به انرژی‌های پاک، چشم‌انداز تازه‌ای پیش روی صنعت
                    انرژی گشوده است.
                  </p>
                  <p>
                    رادمان با تمرکز بر انرژی خورشیدی، بادی، نوسازی شبکه برق،
                    سامانه‌های ذخیره‌سازی و سایر فناوری‌های کم‌کربن،
                    سرمایه‌گذاری‌های خود را در مسیر تحول صنعت انرژی گسترش می‌دهد
                    و زیرساخت‌هایی متناسب با نیازهای آینده ایجاد می‌کند.
                  </p>
                </div>
              ) : (
                <div
                  className={`${styles.textThin} text-zinc-100! mt-6 md:w-3/4 flex flex-col gap-3`}
                >
                  <p>
                    As energy markets evolve, Radman continues to expand its
                    investment focus across solar and wind energy, grid
                    modernization, energy storage, and other low-carbon
                    technologies that improve energy security and support
                    industrial transformation.
                  </p>
                  <p>
                    These investments help build future-ready energy
                    infrastructure while positioning the portfolio to benefit
                    from the global transition toward cleaner and more
                    diversified energy systems.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-32 md:mt-64">
              <div className="flex flex-col justify-between">
                <span className={styles.editorialBadge}>
                  {isFa
                    ? "انرژی؛ پیونددهنده صنایع"
                    : "Connecting Energy to Industry"}
                </span>
                <h3 className={`${styles.titleThin} mt-2`}>
                  {isFa
                    ? "زیربنایی که توسعه صنایع بر آن استوار است"
                    : "The Foundation of Industrial Growth"}
                </h3>
              </div>

              <div className={styles.modelTextStack}>
                {isFa ? (
                  <div
                    className={`${styles.textThin} text-zinc-100! md:w-3/4 flex flex-col gap-3`}
                  >
                    <p>
                      هیچ صنعتی بدون دسترسی به انرژی پایدار، قابل اتکا و کارآمد،
                      امکان رشد و رقابت ندارد.
                    </p>
                    <p>
                      سرمایه‌گذاری‌های رادمان در حوزه انرژی، پشتوانه توسعه
                      کسب‌وکارهایی مانند معدن و فلزات، صنایع تولیدی و
                      زیرساخت‌های پیشرفته است و ارتباطی مؤثر میان منابع، تولید و
                      توسعه صنعتی ایجاد می‌کند.
                    </p>
                  </div>
                ) : (
                  <div
                    className={`${styles.textThin} text-zinc-100! md:w-3/4 flex flex-col gap-3`}
                  >
                    <p>
                      Energy is more than an investment sector—it is the
                      infrastructure that enables industrial growth.
                    </p>
                    <p>
                      By investing across power generation, transmission, and
                      next-generation energy systems, Radman enables the
                      industries that depend on reliable, efficient, and
                      sustainable energy, including mining, metals, and advanced
                      manufacturing.
                    </p>
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-end items-start lg:items-end mt-6">
                <Link
                  to={`/${lang}/Businesses/Mining`}
                  className={styles.linkLightWhite}
                >
                  {isFa
                    ? "با کسب‌وکار معدن و فلزات آشنا شوید ↖"
                    : "Explore Mining & Metals ↗"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
