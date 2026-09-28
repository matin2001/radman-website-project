import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styles from "./PerspectiveItem.module.css";

import logoImg from "../../assets/logo-black.png";
import perspectivesImg1 from "../../assets/Insights Images/perspective-1.jpg";
import perspectivesImg2 from "../../assets/Insights Images/perspective-2.jpg";
import perspectivesImg3 from "../../assets/Insights Images/perspective-3.jpg";

export default function Perspective2() {
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
                  ? "ساخت زنجیره‌های صنعتی با ارزش افزوده بیشتر"
                  : "Building Higher-Value Industrial Chains"}
              </h1>

              <div className="flex flex-col gap-6 text-zinc-900">
                <p className={styles.textHelveticaThin}>
                  {isFa
                    ? "در اختیار داشتن منابع طبیعی، تنها نقطه آغاز یک مسیر صنعتی است. فرصت اصلی در این است که چه میزان ارزش اقتصادی می‌توان از فاصله میان استخراج ماده اولیه تا رسیدن محصول نهایی به بازار ایجاد کرد."
                    : "Having natural resources is only the beginning of an industrial story. The greater opportunity lies in determining how much economic value can be created between extraction and the final market."}
                </p>

                <p className={styles.textHelveticaThin}>
                  {isFa
                    ? "ساختار تولید جهانی در حال تجربه تغییری بنیادین است. تحولات ژئوپلیتیک، سیاست‌های تجاری، پیشرفت فناوری و ریسک‌های زنجیره تأمین، شرکت‌ها را وادار کرده‌اند درباره محل و شیوه تولید محصولات خود بازنگری کنند. بر اساس تحلیل آنکتاد، زنجیره‌های ارزش جهانی بیش از گذشته به سمت تنوع‌بخشی، یکپارچگی منطقه‌ای و کنترل بیشتر بر نهاده‌های حیاتی در حال بازآرایی هستند."
                    : "Global production is undergoing a structural shift. Geopolitical tensions, trade policies, technological change, and supply-chain risks are encouraging companies to reconsider where and how products are made. UN Trade and Development describes global value chains as increasingly reconfigured around diversification, regional integration, and greater control over critical inputs."}
                </p>

                <p className={styles.textHelveticaThin}>
                  {isFa
                    ? "برای اقتصادهای برخوردار از منابع طبیعی، این شرایط هم چالش ایجاد می‌کند و هم فرصت. صادرات مواد خام می‌تواند درآمد فوری ایجاد کند؛ اما فرآوری، تولید، لجستیک، فناوری و توسعه بازار امکان خلق ارزش بیشتر و هم‌زمان ایجاد ظرفیت‌های تولیدی و تخصصی را فراهم می‌کنند. بانک جهانی نیز بر حرکت به سمت فعالیت‌های با ارزش افزوده بیشتر و بهره‌گیری گسترده‌تر از فناوری و دانش فنی به‌عنوان عاملی برای افزایش بهره‌وری، اشتغال و توسعه تأکید دارد."
                    : "For resource-rich economies, this environment creates both pressure and opportunity. Exporting raw materials can provide immediate revenue, but processing, manufacturing, logistics, technology, and market development can capture additional value while building productive capabilities. The World Bank similarly emphasizes that moving toward higher-value-added activities and embedding more technology and know-how can support productivity, employment, and development."}
                </p>

                <p className={styles.textHelveticaThin}>
                  {isFa
                    ? "بنابراین، رویکرد امروز صرفاً تولید بیشتر نیست؛ بلکه ایجاد پیوندهای مؤثرتر میان منابع و ظرفیت فرآوری، تولیدکنندگان و مواد اولیه قابل‌اتکا، زیرساخت و بازار، و توانمندی‌های داخلی و تقاضای بین‌المللی است."
                    : "The modern approach is therefore not simply about producing more. It is about connecting more effectively: resources with processing capacity, manufacturers with reliable inputs, infrastructure with markets, and local capabilities with international demand."}
                </p>

                <p className={styles.textHelveticaThin}>
                  {isFa
                    ? "این رویکرد به نگاهی اکوسیستمی نیاز دارد. معدن را نمی‌توان از انرژی و لجستیک جدا کرد؛ تولید به فناوری و سرمایه وابسته است؛ و توسعه صادرات نیز به دسترسی به بازار و شبکه‌های مطمئن تأمین نیاز دارد. سازمان همکاری و توسعه اقتصادی نیز توسعه صنعتی را بیش از گذشته در قالب چنین اکوسیستم‌های به‌هم‌پیوسته‌ای، نه بخش‌های منفرد، بررسی می‌کند."
                    : "This requires an ecosystem perspective. Mining cannot be separated from energy and logistics; manufacturing depends on technology and finance; and export growth depends on market access and reliable supply networks. The OECD increasingly frames industrial development through these interconnected ecosystems rather than isolated sectors."}
                </p>

                <p className={styles.textHelveticaThin}>
                  {isFa
                    ? "برای اقتصادهایی که از منابع طبیعی قابل‌توجه برخوردارند، پرسش اصلی دیگر فقط این نیست: چه چیزی می‌توانیم استخراج کنیم؟"
                    : "For economies with substantial natural resources, the central question is no longer only what can we extract?"}
                </p>

                <blockquote className={`${styles.quoteCaslon} my-2`}>
                  {isFa
                    ? "پیش از رسیدن محصول به بازار، چه میزان ارزش می‌توانیم خلق کنیم؟"
                    : "How much value can we create before the product reaches the market?"}
                </blockquote>
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
                      ? "ساخت زنجیره‌های صنعتی با ارزش افزوده بیشتر..."
                      : "Building Higher-Value Industrial Chains...";
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
                      href="mailto:?subject=Building Higher-Value Industrial Chains"
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
                    <span>{isFa ? "۲۳ آگوست ۲۰۲۶" : "August 23, 2026"}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-500">
                        {isFa ? "منابع:" : "Ref.:"}
                      </span>
                      <a
                        href="https://www.unctad.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-black transition-colors"
                      >
                        www.unctad.org
                      </a>
                      <span>|</span>
                      <a
                        href="https://www.oecd.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-black transition-colors"
                      >
                        www.oecd.org
                      </a>
                    </div>
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
