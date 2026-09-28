import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styles from "./PerspectiveItem.module.css";

import logoImg from "../../assets/logo-black.png";
import perspectivesImg1 from "../../assets/Insights Images/perspective-1.jpg";
import perspectivesImg2 from "../../assets/Insights Images/perspective-2.jpg";
import perspectivesImg3 from "../../assets/Insights Images/perspective-3.jpg";

export default function Perspective1() {
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

      <section className="w-full px-6 md:px-16 pt-16 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6 flex flex-col justify-between min-h-full">
            <div>
              <h1 className={`${styles.articleTitle} mb-8`}>
                {isFa
                  ? "بازارهای مالی چگونه به رشد صنعتی شکل می‌دهند؟"
                  : "How Financial Markets Shape Industrial Growth"}
              </h1>

              <div className="flex flex-col gap-6 text-zinc-900">
                <p className={styles.textHelveticaThin}>
                  {isFa
                    ? "بازار سرمایه معمولاً از منظر بازده مالی، نقدشوندگی و عملکرد سبد سرمایه‌گذاری بررسی می‌شود؛ اما نقش آن در اقتصاد، فراتر از این شاخص‌هاست. بازارهای مالی در واقع تعیین می‌کنند سرمایه با چه میزان کارایی به سمت فعالیت‌های مولد حرکت کند."
                    : "Capital markets are often viewed through the lens of financial returns, liquidity, and portfolio performance. But their broader economic role is more fundamental: they determine how efficiently capital moves toward productive activity."}
                </p>

                <p className={styles.textHelveticaThin}>
                  {isFa
                    ? "دسترسی بنگاه‌ها به سهام، بدهی، تأمین مالی ساختاریافته و سایر ابزارهای بازارمحور، گزینه‌های متنوع‌تری برای تأمین مالی توسعه در اختیار آنها قرار می‌دهد. این موضوع به‌ویژه در اقتصادهای نوظهور اهمیت دارد؛ جایی که محدودیت اعتباری می‌تواند رشد کسب‌وکار و نوآوری را کند کند. به گفته بانک جهانی، بازارهای سرمایه می‌توانند در کنار نظام بانکی، منابع مالی بزرگ‌تر و انعطاف‌پذیرتری برای کسب‌وکارها فراهم کنند."
                    : "For businesses, access to equity, debt, structured finance, and other market-based instruments can provide alternatives to traditional bank lending and create greater flexibility in funding expansion. This matters particularly in emerging markets, where constrained credit can limit business growth and innovation. The World Bank notes that capital markets can provide larger-scale and more flexible financing while complementing bank credit."}
                </p>

                <p className={styles.textHelveticaThin}>
                  {isFa
                    ? "در اقتصاد امروز، تحلیل مالی بیش از گذشته به شناخت اقتصاد واقعی وابسته است. تخصیص سرمایه نیازمند درک ظرفیت‌های صنعتی، زنجیره‌های تأمین، فناوری، چرخه‌های کالایی و تغییر الگوهای تقاضای جهانی است. بازارهای مالی از این عوامل جدا نیستند؛ بلکه هم از آنها تأثیر می‌پذیرند و هم می‌توانند منابع مالی موردنیاز برای توسعه آنها را فراهم کنند."
                    : "The contemporary investment landscape also demands a closer connection between financial analysis and the real economy. Capital allocation increasingly requires an understanding of industrial capacity, supply chains, technology, commodity cycles, and changing patterns of global demand. Financial markets are not separate from these forces; they reflect and help finance them."}
                </p>

                <p className={styles.textHelveticaThin}>
                  {isFa
                    ? "این شرایط، فرصت مهمی برای پلتفرم‌های سرمایه‌گذاری ایجاد می‌کند که دانش بازار را با شناخت صنعت پیوند می‌دهند. سرمایه‌ای که از فعالیت‌های مالی ایجاد می‌شود، می‌تواند دوباره به سمت دارایی‌های مولد، زیرساخت، فناوری و کسب‌وکارهایی هدایت شود که ظرفیت اقتصادی جدیدی ایجاد می‌کنند."
                    : "This creates an important opportunity for investment platforms that can connect market expertise with industrial knowledge. Capital generated through financial activities can be redeployed into productive assets, infrastructure, technology, and businesses with the potential to expand economic capacity."}
                </p>

                <p className={styles.textHelveticaThin}>
                  {isFa
                    ? "نتیجه، شکل‌گیری چرخه‌ای پویاتر از سرمایه‌گذاری است:"
                    : "The result is a more dynamic investment cycle:"}
                </p>

                <blockquote className={`${styles.quoteCaslon} my-2`}>
                  {isFa
                    ? "عملکرد مالی، سرمایه ایجاد می‌کند؛ سرمایه از فعالیت‌های مولد پشتیبانی می‌کند؛ و سرمایه‌گذاری مولد، ارزش اقتصادی جدید می‌آفریند."
                    : "financial performance creates capital; capital supports productive investment; productive investment generates new economic value."}
                </blockquote>

                <p className={styles.textHelveticaThin}>
                  {isFa
                    ? "برای رادمان، این پیوند، بخش مهمی از نقش بازار سرمایه است؛ نه صرفاً به‌عنوان منبع بازده، بلکه به‌عنوان موتور مالی توسعه صنعتی."
                    : "For Radman, this connection is central to the role of capital markets—not simply as a source of returns, but as a financial engine for industrial development."}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 mt-10">
                <button
                  type="button"
                  onClick={() =>
                    navigator.clipboard.writeText(window.location.href)
                  }
                  className={styles.actionBtnOutline}
                >
                  {isFa ? "کپی پیوند" : "copy Link"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const text = isFa
                      ? "بازارهای مالی چگونه به رشد صنعتی شکل می‌دهند؟..."
                      : "How Financial Markets Shape Industrial Growth...";
                    navigator.clipboard.writeText(text);
                  }}
                  className={styles.actionBtnOutline}
                >
                  {isFa ? "کپی متن" : "copy Text"}
                </button>
                <button type="button" className={styles.actionBtnFilled}>
                  {isFa ? "دانلود" : "Download"}
                </button>
              </div>

              <div className="mt-12 pt-6">
                <h4 className={`${styles.shareTitle} mb-4`}>
                  {isFa ? "اشتراک‌گذاری خبر" : "Share news release"}
                </h4>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex items-center gap-2">
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialIcon}
                    >
                      <svg
                        className="w-3.5 h-3.5 fill-white"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74V9.93H5.06v8.57h2.8z" />
                      </svg>
                    </a>

                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialIcon}
                    >
                      <svg
                        className="w-3.5 h-3.5 fill-white"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>

                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialIcon}
                    >
                      <svg
                        className="w-3.5 h-3.5 fill-white"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                      </svg>
                    </a>

                    <a
                      href="mailto:?subject=How Financial Markets Shape Industrial Growth"
                      className={styles.socialIcon}
                    >
                      <svg
                        className="w-3.5 h-3.5 fill-white"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </a>
                  </div>

                  <div className="flex items-center gap-6 text-xs md:text-sm text-zinc-900 font-light">
                    <span>{isFa ? "۲۷ آگوست ۲۰۲۶" : "August 27, 2026"}</span>
                    <a
                      href="https://www.worldbank.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`underline hover:text-black transition-colors`}
                    >
                      {isFa ? "منبع: www.worldbank.org" : "www.worldbank.org"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 w-full"></div>
          <div className="lg:col-span-4 flex flex-col gap-8 w-full">
            <div className="w-full overflow-hidden">
              <img
                src={perspectivesImg1}
                alt="Architecture"
                className="w-full h-3/4 object-cover"
              />
            </div>

            <div className="w-full overflow-hidden">
              <img
                src={perspectivesImg2}
                alt="Business Meeting"
                className="w-full h-3/4 object-cover"
              />
            </div>

            <div className="w-full overflow-hidden">
              <img
                src={perspectivesImg3}
                alt="Hallway"
                className="w-full h-3/4 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
