import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styles from "./CommodityTrading.module.css";

import logoImg from "../../assets/logo-black.png";
import ringImg from "../../assets/Businesses Images/commodity-hero.jpg";
import sparksImg from "../../assets/Businesses Images/commodity-mining.jpg";
import industrialImg from "../../assets/Businesses Images/commodity-industrial.jpg";

export default function CommodityTrading() {
  const { lang } = useParams();
  const isFa = lang === "fa";

  return (
    <div className="bg-white overflow-hidden">
      <Helmet>
        <title>
          {isFa ? "رادمان | بازارهای مالی" : "RADMAN | Commodity Trading"}
        </title>
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
                className={styles.navActive}
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
                ? "آنجا که منابع ایران به تقاضای جهانی می‌رسند"
                : "Where Iranian Resources Meet Global Demand"}
            </h1>

            <h2 className={`${styles.serifHeading} mt-2 text-black!`}>
              {isFa
                ? "تبدیل توانمندی‌های داخلی به مزیت در بازارهای جهانی"
                : "Turning Domestic Strength into Global Advantage"}
            </h2>

            <p className={`${styles.textHelveticaThin} text-slate-900! mt-8`}>
              {isFa
                ? "گروه سرمایه‌گذاری رادمان با توسعه و راهبری پلتفرم‌های یکپارچه تجارت کالا، ظرفیت‌های صنعتی ایران را به بازارهای منطقه‌ای و بین‌المللی متصل می‌کند. با تکیه بر اجرای منضبط و مشارکت‌های قابل‌اعتماد، تجارت محصولات پتروشیمی، فلزات، مواد معدنی و تجهیزات صنعتی را تسهیل کرده و هم‌زمان دسترسی به بازار و شبکه‌های تجاری بین‌المللی را گسترش می‌دهیم."
                : "Radman Investment Holding Group develops and operates integrated commodity trading platforms that connect Iran's industrial capabilities with regional and international markets. Through disciplined execution and strategic partnerships, we facilitate the efficient trade of petrochemical products, metals, mineral resources, and industrial equipment while expanding market access and reinforcing international commercial networks."}
            </p>

            <p className={`${styles.textHelveticaThin} text-slate-900! mt-6`}>
              {isFa
                ? "فراتر از اجرای معاملات، با مدیریت منضبط ریسک، شناخت بازار و ایجاد روابط تجاری پایدار، به توسعه تجارت فرامرزی کمک می‌کنیم."
                : "Beyond transaction execution, we strengthen cross-border trade through disciplined risk management, market intelligence, and enduring commercial partnerships."}
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION TWO --- */}
      <section className={styles.portfolioSection}>
        <div className="w-full px-6 md:px-16">
          <div className="w-full">
            <span className={styles.editorialBadge}>
              {isFa ? "سبد کالا" : "Commodity Portfolio"}
            </span>
            <h2 className={`${styles.titleThin} mt-2`}>
              {isFa
                ? "پیوند کالاهای اساسی با بازارهای جهانی"
                : "Connecting Strategic Commodities with Global Markets"}
            </h2>
          </div>

          <p
            className={`${styles.textHelveticaThin} text-zinc-900! mt-6 md:w-3/4`}
          >
            {isFa
              ? "فعالیت‌های رادمان در حوزه تجارت کالا بر محصولاتی متمرکز است که از توسعه صنعتی، رشد بازارهای منطقه‌ای و شکل‌گیری شبکه‌های مطمئن تأمین بین‌المللی پشتیبانی می‌کنند. با ترکیب شناخت بازار، اجرای منضبط و مشارکت‌های قابل‌اعتماد، جابه‌جایی مؤثر کالاهای اساسی و محصولات صنعتی را در بازارهای بین‌المللی تسهیل می‌کنیم."
              : "Radman's commodity trading activities focus on products that support industrial development, regional competitiveness, and reliable international supply networks. By combining market intelligence, disciplined execution, and trusted partnerships, we facilitate the efficient movement of essential commodities and industrial products across international markets."}
          </p>
        </div>
      </section>

      {/* --- SECTION TWO --- */}
      <section className={styles.sectionTwoGradient}>
        <div className="w-full px-6 md:px-16">
          <div className={`${styles.pillarsGridDark} mt-0!`}>
            <div className={styles.pillarBoxDark}>
              <h3 className={`${styles.serifHeading} text-black`}>
                {isFa ? "پتروشیمی" : "Petrochemicals"}
              </h3>
              <p className={styles.pillarBoxText}>
                {isFa
                  ? "تأمین نیاز صنایع جهانی از طریق تجارت مطمئن محصولات و مشتقات پتروشیمی مورد استفاده در صنایع تولیدی، ساخت‌وساز و سایر کاربردهای صنعتی."
                  : "Supporting global industries through the reliable trading of petrochemical products and derivatives that serve manufacturing, construction, and industrial applications."}
              </p>
            </div>

            <div className={styles.pillarBoxDark}>
              <h3 className={`${styles.serifHeading} text-black`}>
                {isFa ? "فلزات" : "Metals"}
              </h3>
              <p className={styles.pillarBoxText}>
                {isFa
                  ? "تسهیل تجارت بین‌المللی فولاد و محصولات فلزی باکیفیت برای پشتیبانی از زیرساخت‌ها، تولید صنعتی و بازارهای منطقه‌ای."
                  : "Facilitating the international trade of high-quality steel and metal products that support infrastructure, industrial production, and regional markets."}
              </p>
            </div>

            <div className={styles.pillarBoxDark}>
              <h3 className={`${styles.serifHeading} text-black`}>
                {isFa ? "مواد معدنی" : "Minerals"}
              </h3>
              <p className={styles.pillarBoxText}>
                {isFa
                  ? "پیوند دادن منابع معدنی با تقاضای جهانی از طریق راهکارهای تجاری کارآمد و بازارمحور که دسترسی به بازار و حضور بین‌المللی را گسترش می‌دهند."
                  : "Connecting mineral resources with global demand through efficient, market-focused trading solutions that expand market access and strengthen international market position."}
              </p>
            </div>

            <div className={styles.pillarBoxDark}>
              <h3 className={`${styles.serifHeading} text-black`}>
                {isFa
                  ? "کالاها و تجهیزات صنعتی"
                  : "Industrial Commodities & Equipment"}
              </h3>
              <p className={styles.pillarBoxText}>
                {isFa
                  ? "توسعه تجارت فرامرزی کالاهای صنعتی، ماشین‌آلات و تجهیزات متنوع، با تکیه بر هماهنگی لجستیکی، شناخت بازار و مدیریت منضبط ریسک، متناسب با نیازهای متغیر تجاری."
                  : "Expanding cross-border trade through diversified industrial commodities, machinery, and equipment, supported by coordinated logistics, market expertise, and disciplined risk management tailored to changing commercial needs."}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <span className={styles.editorialBadge}>
              {isFa
                ? "تأمین موادی که اقتصادها را می‌سازند"
                : "Supplying the Materials That Build Economies"}
            </span>
            <h2 className={`${styles.titleThin} mt-2`}>
              {isFa
                ? "کالاهای اساسی. ارزش تجاری. دسترسی جهانی."
                : "Essential Commodities. Commercial Value. Global Reach."}
            </h2>
          </div>

          <p className={`${styles.textThin} text-zinc-100! mt-8 max-w-4xl`}>
            {isFa
              ? "رادمان با تأمین مواد اولیه و محصولات صنعتی موردنیاز انرژی، صنایع سنگین، کشاورزی، زیرساخت و تولید، از بخش‌های بنیادین توسعه اقتصادی پشتیبانی می‌کند."
              : "We support the fundamental pillars of economic development by supplying raw materials and industrial products essential to energy, heavy industry, agriculture, infrastructure, and manufacturing."}
          </p>

          <p className={`${styles.textThin} text-zinc-100! mt-4 max-w-4xl`}>
            {isFa
              ? "با تکیه بر مشارکت‌های قابل‌اعتماد و اجرای مؤثر، بر این موارد تمرکز داریم:"
              : "Through strategic partnerships and reliable execution, we ensure:"}
          </p>

          <div className={styles.concludingRowDark}>
            <div>
              <ul className={styles.bulletListLight}>
                <li>
                  {isFa ? "کیفیت پایدار محصولات" : "Consistent product quality"}
                </li>
                <li>
                  {isFa
                    ? "زنجیره‌های تأمین امن و متنوع"
                    : "Secure and diversified supply chains"}
                </li>
                <li>
                  {isFa
                    ? "قیمت‌گذاری رقابتی، متکی بر مقیاس و تخصص"
                    : "Competitive pricing supported by scale and expertise"}
                </li>
              </ul>
            </div>

            <div className="flex items-end justify-start lg:justify-end">
              <Link to={`/${lang}/ContactUs`} className={styles.linkLightWhite}>
                {isFa
                  ? "با تیم تجارت کالای رادمان در ارتباط باشید ↖"
                  : "Connect with Our Trading Team ↗"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION TWO --- */}
      <section className={styles.miningBackdropSection}>
        <img
          src={sparksImg}
          alt="Mining Partnerships Sparks"
          className={styles.miningBgImage}
        />

        <div className={styles.miningContent}>
          <div className="w-full px-6 md:px-16">
            <div>
              <span className={styles.editorialBadge}>
                {isFa
                  ? "پیوند بازارها، گسترش فرصت‌ها"
                  : "Connecting Markets, Expanding Opportunity"}
              </span>

              <h2 className={`${styles.titleThin} mt-2`}>
                {isFa
                  ? "مدل‌های مشارکت برای توسعه و موفقیت مشترک"
                  : "Partnership Models for Expansion and Shared Success"}
              </h2>
              <p className={`${styles.textThin} mt-6`}>
                {isFa
                  ? "رادمان به‌عنوان یک گروه سرمایه‌گذاری با پشتوانه دانش و تجربه صنعتی، با تولیدکنندگان، معامله‌گران، سرمایه‌گذاران و ارائه‌دهندگان خدمات لجستیکی همکاری می‌کند تا شبکه‌های تجارت فرامرزی را توسعه داده و دسترسی به بازارها را گسترش دهد."
                  : "As an investment holding with deep industrial expertise, Radman partners with producers, traders, investors, and logistics providers to expand cross-border trade networks and strengthen market access."}
              </p>
              <p className={`${styles.textThin} mt-2`}>
                {isFa
                  ? "با طراحی مدل‌های مشارکت منعطف و متناسب با اهداف تجاری شرکا، چارچوب‌هایی ایجاد می‌کنیم که:"
                  : "Through tailored, flexible partnership models aligned with our partners' commercial objectives, we create frameworks that:"}
              </p>
              <div className={styles.topGrid}>
                <div>
                  <ul className={styles.bulletListLight}>
                    <li>
                      {isFa
                        ? "دسترسی به بازارهای جدید منطقه‌ای و جهانی را فراهم می‌کنند"
                        : "Unlock new regional and global markets"}
                    </li>
                    <li>
                      {isFa
                        ? "مدیریت ریسک در چرخه عمر محصولات را بهبود می‌بخشند"
                        : "Enhance risk optimization across product cycles"}
                    </li>
                    <li>
                      {isFa
                        ? "به شکل‌گیری روابط تجاری پایدار و عملکرد مستمر کمک می‌کنند"
                        : "Support durable commercial relationships and long-term performance."}
                    </li>
                  </ul>
                </div>

                <div className="flex items-end justify-start lg:justify-end">
                  <Link
                    to={`/${lang}/Company/Partnership`}
                    className={styles.linkLightWhite}
                  >
                    {isFa
                      ? "مدل مشارکت جهانی رادمان را بشناسید ↖"
                      : "Learn About Our Global Partnership Model ↗"}
                  </Link>
                </div>
              </div>
            </div>

            {/* ROW 2 */}
            <div className={styles.industryRowDark}>
              <div className="flex flex-col justify-between gap-4">
                <h3
                  className={styles.editorialBadge}
                  style={{ color: "#ffffff", marginTop: "16px" }}
                >
                  {isFa
                    ? "پیوند تولید با تقاضا"
                    : "Connecting Production with Demand"}
                </h3>
                <p className={styles.textThin}>
                  {isFa
                    ? "معدن و تجارت کالا در اکوسیستم صنعتی رادمان نقش‌هایی مکمل دارند. در حالی که توسعه منابع و فرآوری، مواد موردنیاز صنایع را فراهم می‌کنند، پلتفرم تجاری رادمان این محصولات را به خریداران، واحدهای فرآوری و بازارهای منطقه و فراتر از آن متصل می‌کند."
                    : "Mining and commodity trading play complementary roles within Radman's industrial ecosystem. While resource development and processing create the materials that industries need, our trading platform connects those products with buyers, processors, and markets across the region and beyond."}
                </p>
                <p className={styles.textThin}>
                  {isFa
                    ? "با پیوند دادن ظرفیت‌های تولیدی با دسترسی به بازار، لجستیک و تجارت بین‌المللی، رادمان به حضور مؤثرتر مواد معدنی، فلزات و سایر محصولات صنعتی ایران در بازارهای جهانی کمک می‌کند."
                    : "By linking resource capabilities with market access, logistics, and international trade, Radman helps position Iranian minerals, metals, and other industrial products for stronger participation global markets."}
                </p>
              </div>

              <div className="flex flex-col justify-end items-start lg:items-end">
                <Link
                  to={`/${lang}/Businesses/Mining`}
                  className={styles.linkLightWhite}
                >
                  {isFa
                    ? "کسب‌وکار معدن و صنایع فلزات را ببینید ↖"
                    : "Explore Mining & Metals ↗"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.concludingSection}>
        <img
          src={industrialImg}
          alt="Commodity Industrial Ecosystem"
          className={styles.concludingImage}
        />

        <div className={styles.concludingContent}>
          <div className="w-full px-6 md:px-16">
            <div className={styles.leftContentCol}>
              <div>
                <span className={styles.editorialBadge}>
                  {isFa
                    ? "شناختی که بازارها را به حرکت درمی‌آورد"
                    : "Intelligence That Moves Markets"}
                </span>

                <h2 className={`${styles.titleThin} mt-2`}>
                  {isFa
                    ? "تجارت مبتنی بر شناخت بازار. اجرای چابک."
                    : "Insight-Driven Trading. Adaptive Execution."}
                </h2>

                <p
                  className={`${styles.textThin} text-zinc-100! mt-6 md:w-3/4`}
                >
                  {isFa
                    ? "رادمان با پایش مستمر تحولات بازارهای جهانی، روند قیمت‌ها، تغییرات مقرراتی و چرخه‌های تقاضا را به‌صورت لحظه‌ای دنبال می‌کند. این شناخت امکان موارد زیر را فراهم می‌سازد:"
                    : "We operate with deep visibility into global market dynamics—tracking price trends, regulatory shifts, and demand cycles in real time. This intelligence enables:"}
                </p>

                <ul className={styles.bulletListLight}>
                  <li>
                    {isFa
                      ? "تصمیم‌گیری چابک در فعالیت‌های تجاری"
                      : "Agile commercial decision-making"}
                  </li>
                  <li>
                    {isFa ? "اجرای دقیق معاملات" : "Precise trade execution"}
                  </li>
                  <li>
                    {isFa
                      ? "عملکرد منضبط همراه با مدیریت ریسک"
                      : "Disciplined, risk-mitigated performance"}
                  </li>
                </ul>
              </div>

              <div className="my-8 md:my-16 border-t border-white/50"></div>

              <div>
                <span className={styles.editorialBadge}>
                  {isFa
                    ? "بازدهی بر پایه مسئولیت‌پذیری"
                    : "Returns Rooted in Responsibility"}
                </span>

                <h2 className={`${styles.titleThin} mt-2`}>
                  {isFa
                    ? "عملکرد مالی در کنار مسئولیت‌پذیری زیست‌محیطی و اجتماعی"
                    : "Financial Performance with Environmental and Social Integrity"}
                </h2>

                <p className={`${styles.textThin} text-zinc-100! mt-6`}>
                  {isFa
                    ? "تجارت مسئولانه بخش جدایی‌ناپذیر از نحوه مدیریت روابط تجاری و ارزیابی فرصت‌ها در رادمان است."
                    : "Responsible trading is integral to how Radman manages commercial relationships and evaluates opportunities."}
                </p>

                <p className={`${styles.textThin} text-zinc-100! mt-6`}>
                  {isFa
                    ? "ما همکاری با تولیدکنندگانی را در اولویت قرار می‌دهیم که به اصول زیست‌محیطی، اجتماعی و حاکمیتی (ESG) پایبند هستند و از طریق آن، به شفافیت در تأمین، دسترسی مطمئن به بازار و شکل‌گیری روابط تجاری معتبر در عرصه بین‌المللی کمک می‌کنیم."
                    : "We prioritize partnerships with producers that demonstrate strong environmental, social, and governance (ESG) practices, supporting transparent sourcing, reliable market access, and internationally credible trade relationships."}
                </p>

                <p className={`${styles.textThin} text-zinc-100! mt-6`}>
                  {isFa
                    ? "رویکرد ما در تأمین مسئولانه بر موارد زیر تأکید دارد:"
                    : "Our responsible sourcing approach emphasizes:"}
                </p>

                <ul className={styles.bulletListLight}>
                  <li>
                    {isFa ? "کنترل انتشار آلاینده‌ها" : "Emissions control"}
                  </li>
                  <li>
                    {isFa
                      ? "مدیریت پسماند و منابع آب"
                      : "Waste and water management"}
                  </li>
                  <li>
                    {isFa
                      ? "رعایت استانداردهای کار منصفانه و حقوق بشر"
                      : "Fair labor and human rights standards"}
                  </li>
                </ul>

                <p className={`${styles.textThin} text-zinc-100! mt-8`}>
                  {isFa
                    ? "ما بر این باوریم که عملکرد تجاری و شیوه‌های مسئولانه کسب‌وکار می‌توانند در کنار یکدیگر ارزش ایجاد کنند و به شکل‌گیری روابط قوی‌تر و عملکرد پایدار کسب‌وکارها منجر شوند."
                    : "We believe commercial performance and responsible business practices can reinforce one another, creating stronger relationships and sustained business performance."}
                </p>
                <Link
                  to={`/${lang}/Approach/Sustainability`}
                  className={`${styles.linkLightWhite} mt-10!`}
                >
                  {isFa
                    ? "رویکرد رادمان به پایداری را ببینید ↖"
                    : "Discover Our Sustainability Approach ↗"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
