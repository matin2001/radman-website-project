import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styles from "./Mining.module.css";

import logoImg from "../../assets/logo-black.png";
import ringImg from "../../assets/Businesses Images/mining-hero.png";
import miningBackdropImg from "../../assets/Businesses Images/mining-backdrop.jpg";
import miningOreImg from "../../assets/Businesses Images/mining-ore.jpg";

export default function Mining() {
  const { lang } = useParams();
  const isFa = lang === "fa";

  return (
    <div className="bg-white overflow-hidden">
      <Helmet>
        <title>{isFa ? "رادمان | بازارهای مالی" : "RADMAN | Mining"}</title>
      </Helmet>

      {/* --- SECTION ONE--- */}
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
                className={styles.navInactive}
              >
                {isFa ? "انرژی" : "Energy"}
              </Link>
              <Link
                to={`/${lang}/Businesses/Mining`}
                className={styles.navActive}
              >
                {isFa ? "معادن" : "Mining"}
              </Link>
            </div>

            <h1 className={styles.titleThin}>
              {isFa
                ? "از دل زمین، تا موتور محرک اقتصاد"
                : "Where Earth’s Wealth Becomes Economic Force"}
            </h1>

            <div
              className={`${styles.textHelveticaThin} text-slate-900! mt-8 flex flex-col gap-6`}
            >
              {isFa ? (
                <>
                  <p>
                    رادمان با سرمایه‌گذاری در تمامی مراحل معدن و صنایع معدنی،
                    ظرفیت‌های غنی ایران را به فرصت‌های پایدار برای رشد اقتصادی و
                    پیشرفت صنعتی تبدیل می‌کند.
                  </p>
                  <p>
                    با تخصیص هوشمند سرمایه، راهبری فعال و ایجاد پیوند میان
                    استخراج، فرآوری و بازار، زمینه شکل‌گیری کسب‌وکارهای توانمند،
                    تولید رقابت‌پذیر و حضور مؤثر در بازارهای جهانی را فراهم
                    می‌کنیم.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Radman Investment Holding Group operates across the mining
                    and metals value chain, transforming Iran's rich mineral
                    resources into productive assets and sustainable economic
                    opportunities. Through disciplined capital allocation,
                    active ownership, and integrated development, we build
                    businesses that connect resource development with
                    processing, manufacturing, and global markets.
                  </p>
                  <p>
                    By combining industrial expertise with responsible
                    development, Radman turns mining opportunities into
                    high-value businesses, stronger industries, and enduring
                    economic prosperity.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION TWO --- */}
      <section className={styles.sectionTwoWhite}>
        <div className="w-full px-6 md:px-16">
          <div className="border-t border-black/50 mb-8"></div>

          <div>
            <span className={styles.editorialBadge}>
              {isFa
                ? "از معدن تا بازارهای جهانی"
                : "Rooted in Resources. Rising to Markets."}
            </span>

            <h2 className={`${styles.titleThin} mt-2`}>
              {isFa
                ? "تمرکز بر حوزه‌هایی که آینده صنعت را می‌سازند"
                : "Strategic Focus Areas"}
            </h2>
          </div>

          <div className="mt-6">
            {/* Row 01 */}
            <div className={styles.focusRow}>
              <div className="flex items-start justify-between gap-4">
                <h3 className={styles.serifHeading}>
                  {isFa
                    ? "تأمین مواد اولیه و امنیت زنجیره تأمین"
                    : "Raw Material Supply & Resource Security"}
                </h3>
                <span
                  className={`${styles.sectionCounter} border-t border-black/50 lg:hidden shrink-0 text-end`}
                >
                  01
                </span>
              </div>
              <div>
                <p className={styles.textHelveticaThin}>
                  {isFa
                    ? "سرمایه‌گذاری در توسعه منابع راهبردی از جمله سنگ‌آهن، مس، سرب، روی و سایر فلزات ارزشمند، از طریق مشارکت‌های بلندمدت، مدیریت هوشمند زنجیره تأمین و دسترسی پایدار به مواد اولیه."
                    : "Securing the development of key resources —iron ore, copper, lead, zinc, and other priority metals—through targeted investments, long-term partnerships, and robust supply chain management."}
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

            {/* Row 02 */}
            <div className={styles.focusRow}>
              <div className="flex items-start justify-between gap-4">
                <h3 className={styles.serifHeading}>
                  {isFa
                    ? "فرآوری مواد معدنی و توسعه فناوری"
                    : "Metal Processing & Technology Advancement"}
                </h3>
                <span
                  className={`${styles.sectionCounter} border-t border-black/50 lg:hidden shrink-0 text-end`}
                >
                  02
                </span>
              </div>
              <div>
                <p className={styles.textHelveticaThin}>
                  {isFa
                    ? "سرمایه‌گذاری در فناوری‌های نوین فرآوری و زیرساخت‌های تولیدی که بهره‌وری را افزایش می‌دهند، کیفیت محصولات را ارتقا می‌بخشند و توان صنایع پایین‌دستی را تقویت می‌کنند."
                    : "Investing in advanced processing capabilities and industrial technologies that increase productivity, improve product quality, and enhance downstream performance."}
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

            {/* Row 03 */}
            <div className={styles.focusRow}>
              <div className="flex items-start justify-between gap-4">
                <h3 className={styles.serifHeading}>
                  {isFa
                    ? "یکپارچه‌سازی مسیر تولید"
                    : "Vertical Integration & Value Creation"}
                </h3>
                <span
                  className={`${styles.sectionCounter} border-t border-black/50 lg:hidden shrink-0 text-end`}
                >
                  03
                </span>
              </div>
              <div>
                <p className={styles.textHelveticaThin}>
                  {isFa
                    ? "پیوند فعالیت‌های معدنی با صنایع فولاد و فلزات، بهره‌وری را افزایش می‌دهد، هم‌افزایی میان بخش‌های مختلف را تقویت می‌کند و زمینه تولید محصولات با ارزش افزوده بیشتر را برای بازارهای داخلی و بین‌المللی فراهم می‌سازد."
                    : "Connecting mining with downstream steel and metal industries to improve efficiency, stabilize supply, and create higher-value products. Our focus includes high-grade finished and semi-finished products, including steel ingots, for domestic and international markets."}
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

            {/* Row 04 */}
            <div className={styles.focusRow}>
              <div className="flex items-start justify-between gap-4">
                <h3 className={styles.serifHeading}>
                  {isFa
                    ? "توسعه بازار و حضور بین‌المللی"
                    : "Market Development & International Presence"}
                </h3>
                <span
                  className={`${styles.sectionCounter} border-t border-black/50 lg:hidden shrink-0 text-end`}
                >
                  04
                </span>
              </div>
              <div>
                <p className={styles.textHelveticaThin}>
                  {isFa
                    ? "گسترش بازارهای صادراتی، تثبیت جایگاه محصولات معدنی ایران در عرصه جهانی و توسعه همکاری‌های بین‌المللی برای افزایش سهم بازار و ایجاد درآمدهای ارزی."
                    : "Expanding export channels, developing strong mineral brands, and building international commercial relationships to increase market access and foreign exchange earnings."}
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
          </div>

          <div className="mt-6">
            <Link
              to={`/${lang}/Company/Partnership`}
              className={styles.linkLight}
            >
              {isFa
                ? "فرصت‌های همکاری در معادن و صنایع فلز ↖"
                : "Explore Partnership Opportunities in Mining & Metals ↗"}
            </Link>
          </div>

          <div className="my-8 md:my-16 border-t border-black/50"></div>

          {/* Part 2 */}
          <div>
            <span className={styles.editorialBadge}>
              {isFa
                ? "تبدیل منابع طبیعی به مزیت رقابتی"
                : "Core Material to Core Market"}
            </span>

            <h2 className={`${styles.titleThin} mt-2 md:w-3/4`}>
              {isFa
                ? "تولید محصولات صنعتی با بالاترین استانداردها"
                : "Transforming Raw Resources into High-Grade Industrial Output"}
            </h2>

            <div
              className={`${styles.textHelveticaThin} text-zinc-900! mt-6 md:w-3/4 flex flex-col gap-3`}
            >
              {isFa ? (
                <>
                  <p>
                    رادمان در ساختارهای یکپارچه تولید و فرآوری سرمایه‌گذاری
                    می‌کند تا مواد اولیه را به محصولاتی با کیفیت بالا و منطبق با
                    استانداردهای جهانی تبدیل کند.
                  </p>
                  <p>
                    با هماهنگ‌سازی تأمین، فرآوری، لجستیک و توسعه بازار، زمینه
                    حضور مؤثر فولاد و محصولات معدنی ایران را در بازارهای
                    بین‌المللی فراهم می‌کنیم و توان تولید ملی را برای رقابت در
                    مقیاس جهانی ارتقا می‌دهیم.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Radman invests across integrated value chains that transform
                    raw materials into high-grade industrial products aligned
                    with international standards.
                  </p>
                  <p>
                    By coordinating supply, processing, logistics, and market
                    development, we position Iranian steel and mineral products
                    for stronger participation in domestic and international
                    markets while contributing to industrial development.
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="mt-8 md:mt-16 border-t border-black/50"></div>
        </div>
      </section>

      {/* --- SECTION THREE --- */}
      <section className={styles.earthIndustrySection}>
        <img
          src={miningBackdropImg}
          alt="From Earth to Industry Backdrop"
          className={styles.earthIndustryBgImage}
        />

        <div className={styles.earthIndustryContent}>
          <div className="w-full px-6 md:px-16">
            <div>
              <h2 className={styles.titleThin}>
                {isFa
                  ? "نگاهی مسئولانه به توسعه معدن"
                  : "From Earth to Industry"}
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mt-6 w-full">
                <div className="col-span-12 lg:col-span-8">
                  {isFa ? (
                    <div
                      className={`${styles.textHelveticaThin} text-zinc-900! max-w-4xl flex flex-col gap-3`}
                    >
                      <p>
                        معدن‌کاری مسئولانه تنها به رعایت الزامات زیست‌محیطی
                        محدود نمی‌شود.
                      </p>
                      <p>
                        رادمان با مدیریت بهینه منابع، ارتقای ایمنی، بهره‌گیری از
                        فناوری‌های نوین و بهبود مستمر فرآیندهای عملیاتی،
                        بهره‌وری را افزایش می‌دهد، مصرف منابع را بهینه می‌کند و
                        زمینه رشد پایدار و توان رقابتی بلندمدت این بخش را فراهم
                        می‌سازد.
                      </p>
                    </div>
                  ) : (
                    <p
                      className={`${styles.textHelveticaThin} text-zinc-900! max-w-4xl`}
                    >
                      Responsible mining extends beyond environmental
                      performance. Radman promotes efficient resource
                      management, safer operations, technological improvement,
                      and responsible environmental practices that improve
                      productivity, reduce resource intensity, and support
                      sustainable industrial development.
                    </p>
                  )}
                </div>

                <div className="col-span-12 lg:col-span-4 flex justify-start lg:justify-end">
                  <Link
                    to={`/${lang}/Approach/Sustainability`}
                    className={styles.linkLight}
                  >
                    {isFa
                      ? "رویکرد رادمان به پایداری را ببینید ↖"
                      : "Explore Our Sustainability Commitment ↗"}
                  </Link>
                </div>
              </div>
            </div>

            <div className={styles.bottomIntegrationBlock}>
              <div>
                <span className={styles.editorialBadge}>
                  {isFa
                    ? "صنایع به‌هم‌پیوسته، فرصت‌های بزرگ‌تر"
                    : "Connected Industries. Greater Value."}
                </span>

                <h2 className={`${styles.titleThin} mt-2`}>
                  {isFa
                    ? "هم‌افزایی میان صنایع، مزیتی پایدار"
                    : "Integration That Strengthens Industry"}
                </h2>

                {isFa ? (
                  <div
                    className={`${styles.textHelveticaThin} text-zinc-900! mt-6 md:w-3/4 flex flex-col gap-3`}
                  >
                    <p>
                      معدن و انرژی، دو بخش راهبردی‌اند که توسعه هر یک، زمینه
                      پیشرفت دیگری را فراهم می‌کند.
                    </p>
                    <p>
                      رادمان با سرمایه‌گذاری هم‌زمان در این دو حوزه، بهره‌وری
                      منابع را افزایش می‌دهد، ظرفیت‌های مشترک را فعال می‌کند و
                      بستر توسعه‌ای یکپارچه برای صنایع کشور فراهم می‌آورد.
                    </p>
                  </div>
                ) : (
                  <p
                    className={`${styles.textHelveticaThin} text-zinc-900! mt-6 md:w-3/4`}
                  >
                    Metal production depends on reliable power infrastructure,
                    while mining logistics benefit from energy-efficient
                    solutions. By coordinating development across both sectors,
                    Radman creates operational synergies, optimizes resource
                    use, and enables scalable growth.
                  </p>
                )}

                <div className="mt-8">
                  <Link
                    to={`/${lang}/Businesses/Energy`}
                    className={styles.linkLight}
                  >
                    {isFa
                      ? "با کسب‌وکار حوزه انرژی آشنا شوید ↖"
                      : "Discover the Energy Sector ↗"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION FIVE --- */}
      <section className={styles.advantagesSectionGradient}>
        <div className="w-full px-6 md:px-16">
          <div className="w-full">
            <span className={styles.editorialBadge}>
              {isFa ? "چرا رادمان؟" : "Why Radman?"}
            </span>

            <h2 className={`${styles.titleThin} mt-2`}>
              {isFa
                ? "مزیت‌هایی که تفاوت ایجاد می‌کنند"
                : "Our Distinctive Advantages"}
            </h2>
          </div>

          <div className={styles.advantagesGrid}>
            <div className={styles.advantageCard}>
              <h3 className={styles.advantageCardTitle}>
                {isFa
                  ? "توان مالی و حاکمیت شرکتی"
                  : "Financial Strength & Good Governance"}
              </h3>
              <p className={styles.advantageCardText}>
                {isFa
                  ? "پشتوانه مالی مستحکم و نظام حاکمیت شرکتی شفاف، اجرای پروژه‌های بزرگ و پیچیده معدنی را برای رادمان امکان‌پذیر می‌سازد."
                  : "A robust capital base and transparent governance structure enable Radman to execute complex, large-scale mining projects."}
              </p>
            </div>

            <div className={styles.advantageCard}>
              <h3 className={styles.advantageCardTitle}>
                {isFa
                  ? "دانش صنعتی و تخصص فنی"
                  : "Industrial & Technical Expertise"}
              </h3>
              <p className={styles.advantageCardText}>
                {isFa
                  ? "ترکیب دانش زمین‌شناسی، متالورژی، تحلیل بازار و تجربه صنعتی، پشتوانه تصمیم‌های دقیق و سرمایه‌گذاری‌های هدفمند ماست."
                  : "We combine geological and metallurgical expertise with commercial insight, market analysis, and industrial experience."}
              </p>
            </div>

            <div className={styles.advantageCard}>
              <h3 className={styles.advantageCardTitle}>
                {isFa
                  ? "تعهد به توسعه پایدار"
                  : "Commitment to Sustainable Development"}
              </h3>
              <p className={styles.advantageCardText}>
                {isFa
                  ? "پروژه‌ها بر پایه استانداردهای زیست‌محیطی، ایمنی و مسئولیت‌پذیری اجتماعی اجرا می‌شوند تا ضمن حفاظت از منابع، منافع بلندمدت جوامع محلی نیز حفظ شود."
                  : "Projects are developed in accordance with rigorous environmental and safety standards, with attention to community well-being and responsible resource management."}
              </p>
            </div>

            <div className={styles.advantageCard}>
              <h3 className={styles.advantageCardTitle}>
                {isFa ? "شبکه گسترده بین‌المللی" : "Extensive Global Network"}
              </h3>
              <p className={styles.advantageCardText}>
                {isFa
                  ? "همکاری با شرکت‌های فناور، شرکای صنعتی و خریداران بین‌المللی، دسترسی به بازارهای جهانی و توسعه فرصت‌های تجاری را تسهیل می‌کند."
                  : "Relationships with technology providers, industrial partners, and international buyers expand market access and create new commercial opportunities."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION SIX --- */}
      <section className={styles.innovationBackdropSection}>
        <img
          src={miningOreImg}
          alt="Innovation in Mining Ore Background"
          className={styles.innovationBgImage}
        />

        <div className={styles.innovationContent}>
          <div className="w-full px-6 md:px-16">
            <div className={styles.innovationTextCol}>
              <span className={styles.editorialBadge}>
                {isFa ? "نوآوری در معدن" : "Innovation in Mining"}
              </span>

              <h2 className={`${styles.titleThin} mt-2`}>
                {isFa
                  ? "فناوری، پیشران بهره‌وری"
                  : "Advancing Productivity Through Technology"}
              </h2>

              <div className="mt-6 flex flex-col gap-2">
                <p className={`${styles.textThin} text-zinc-100!`}>
                  {isFa
                    ? "اتوماسیون، پایش هوشمند، مدیریت داده‌محور منابع و فناوری‌های پیشرفته فرآوری، مسیر آینده معدن را ترسیم می‌کنند."
                    : "Automation, digital monitoring, intelligent resource management, and advanced processing technologies are transforming the mining industry."}
                </p>

                <p className={`${styles.textThin} text-zinc-100!`}>
                  {isFa
                    ? "رادمان با سرمایه‌گذاری در نوآوری، بهره‌وری عملیاتی را ارتقا می‌دهد، ایمنی محیط کار را بهبود می‌بخشد، استفاده بهینه از منابع را ممکن می‌سازد و جایگاه معدن ایران را در بازارهای جهانی تقویت می‌کند."
                    : "Radman invests in innovation that improves operational efficiency, enhances workplace safety, optimizes resource utilization, and advances industrial capability."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
