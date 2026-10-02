import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styles from "./Perspectives.module.css";

import logoImg from "../../assets/Logo-black.svg";
import reportImg1 from "../../assets/Insights Images/report-1.jpg";
import reportImg2 from "../../assets/Insights Images/report-2.jpg";
import reportImg3 from "../../assets/Insights Images/report-3.jpg";

export default function Perspectives() {
  const { lang } = useParams();
  const isFa = lang === "fa";

  return (
    <div className="bg-white overflow-hidden">
      <Helmet>
        <title>
          {isFa ? "رادمان | بررسی اجمالی" : "RADMAN | Perspectives"}
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

      {/* --- SECTION 1 --- */}
      <section className="w-full px-6 md:px-16 pt-16">
        <h2 className={`${styles.titleBigCaslon} mb-4`}>
          {isFa ? "جدیدترین" : "newest"}
        </h2>

        <div className="border border-black/20 p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="w-full min-h-65 md:min-h-90">
              <img
                src={reportImg1}
                alt="How Financial Markets Shape Industrial Growth"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <Link
                  className={`${styles.titleBigCaslon} mb-6`}
                  to={`/${lang}/Insights/Perspective1`}
                >
                  {isFa
                    ? "سرمایه در خدمت صنعت: بازارهای مالی چگونه به رشد صنعتی شکل می‌دهند؟"
                    : "How Financial Markets Shape Industrial Growth"}
                </Link>
                <div className="flex flex-col gap-4">
                  <p className={styles.textHelveticaThin}>
                    {isFa
                      ? "بازار سرمایه معمولاً از منظر بازده مالی، نقدشوندگی و عملکرد سبد سرمایه‌گذاری بررسی می‌شود؛ اما نقش آن در اقتصاد، فراتر از این شاخص‌هاست. بازارهای مالی در واقع تعیین می‌کنند سرمایه با چه میزان کارایی به سمت فعالیت‌های مولد حرکت کند."
                      : "Capital markets are often viewed through the lens of financial returns, liquidity, and portfolio performance. But their broader economic role is more fundamental: they determine how efficiently capital moves toward productive activity."}
                  </p>
                  <p className={styles.textHelveticaThin}>
                    {isFa
                      ? "دسترسی بنگاه‌ها به سهام، بدهی، تأمین مالی ساختاریافته و سایر ابزارهای بازارمحور، گزینه‌های متنوع‌تری برای تأمین مالی توسعه در اختیار آنها قرار می‌دهد."
                      : "For businesses, access to equity, debt, structured finance, and other market-based instruments can provide alternatives to traditional bank lending and create greater flexibility in funding expansion."}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 text-sm text-zinc-600 font-light mt-6 lg:mt-0">
                <a
                  href="https://www.worldbank.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-black transition-colors"
                >
                  www.worldbank.org
                </a>
                <span>{isFa ? "۲۷ آگوست ۲۰۲۶" : "August 27, 2026"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2 --- */}
      <section className="w-full px-6 md:px-16 pt-16 pb-16">
        <h2 className={`${styles.titleBigCaslon} mb-4`}>
          {isFa ? "آخرین اخبار" : "Latest news"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-black/20 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="w-full aspect-video mb-6 overflow-hidden">
                <img
                  src={reportImg2}
                  alt="From Resources to Value"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mb-4">
                <h3 className={styles.titleBigCaslon}>
                  {isFa ? "از منابع تا ارزش" : "From Resources to Value"}
                </h3>
                <Link
                  to={`/${lang}/Insights/Perspective2`}
                  className={`${styles.titleHelveticaThinReports} text-zinc-900`}
                >
                  {isFa
                    ? "ساخت زنجیره‌های صنعتی با ارزش افزوده بیشتر"
                    : "Building Higher-Value Industrial Chains"}
                </Link>
              </div>

              <p className={styles.textHelveticaThin}>
                {isFa
                  ? "در اختیار داشتن منابع طبیعی، تنها نقطه آغاز یک مسیر صنعتی است. فرصت اصلی در این است که چه میزان ارزش اقتصادی می‌توان از فاصله میان استخراج ماده اولیه تا رسیدن محصول نهایی به بازار ایجاد کرد."
                  : "Having natural resources is only the beginning of an industrial story. The greater opportunity lies in determining how much economic value can be created between extraction and the final market."}
              </p>
            </div>

            <div className="flex items-center justify-between pt-6 text-sm text-zinc-600 font-light mt-6">
              <span>{isFa ? "۲۳ آگوست ۲۰۲۶" : "August 23, 2026"}</span>
              <a
                href="https://www.worldbank.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-black transition-colors"
              >
                www.worldbank.org
              </a>
            </div>
          </div>

          <div className="border border-black/20 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="w-full aspect-video mb-6 overflow-hidden">
                <img
                  src={reportImg3}
                  alt="Energy Behind Industry"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mb-4">
                <h3 className={styles.titleBigCaslon}>
                  {isFa ? "انرژی، پشتوانه صنعت" : "Energy Behind Industry"}
                </h3>
                <Link
                  to={`/${lang}/Insights/Perspective3`}
                  className={`${styles.titleHelveticaThinReports} text-zinc-900`}
                >
                  {isFa
                    ? "چرا برق مطمئن به یک مزیت رقابتی تبدیل می‌شود؟"
                    : "Why Reliable Power Is Becoming a Competitive Advantage"}
                </Link>
              </div>

              <p className={styles.textHelveticaThin}>
                {isFa
                  ? "انرژی همواره برای صنعت ضروری بوده است؛ اما آنچه در حال تغییر است، مقیاس، پیچیدگی و اهمیت این رابطه است."
                  : "Energy has always been essential to industry. What is changing is the scale, complexity, and strategic importance of that relationship."}
              </p>
            </div>

            <div className="flex items-center justify-between pt-6 text-sm text-zinc-600 font-light mt-6">
              <span>{isFa ? "۲۱ آگوست ۲۰۲۶" : "August 21, 2026"}</span>
              <a
                href="https://www.worldbank.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-black transition-colors"
              >
                www.worldbank.org
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
