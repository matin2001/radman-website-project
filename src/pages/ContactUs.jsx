import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styles from "./ContactUs.module.css";

import logoImg from "../assets/Logo-black.svg";

export default function ContactUs() {
  const { lang } = useParams();
  const isFa = lang === "fa";

  return (
    <div className="bg-white overflow-hidden">
      <Helmet>
        <title>{isFa ? "رادمان | بررسی اجمالی" : "RADMAN | Contact Us"}</title>
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

      {/* --- CONTACT FORM SECTION --- */}
      <section className="w-full px-6 md:px-16 pt-16 pb-16">
        <div className="w-full max-w-4xl">
          <h1 className={`${styles.titleBigCaslon} text-3xl md:text-5xl mb-6`}>
            {isFa ? "تماس با ما" : "Contact Us"}
          </h1>

          <p
            className={`${styles.textHelveticaThin} max-w-3xl mb-8 leading-relaxed`}
          >
            {isFa
              ? "چه علاقه‌مند به کسب اطلاعات بیشتر درباره خدمات ما باشید و چه به دنبال بررسی فرصت‌های تجاری و سرمایه‌گذاری، مشتاق ارتباط با شما هستیم. تیم ما آماده پاسخگویی به پرسش‌ها و گفتگو درباره همکاری‌های مشترک است."
              : "Whether you’re interested in learning more about our services or want to explore business opportunities, we encourage you to get in touch with us. Our team is ready to assist you with any inquiries or partnership discussions."}
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex flex-col gap-4 w-full"
          >
            <div>
              <input
                type="text"
                required
                placeholder={isFa ? "نام و نام خانوادگی*" : "Full name*"}
                className={styles.contactInput}
              />
            </div>

            <div>
              <input
                type="tel"
                required
                placeholder={isFa ? "شماره تماس*" : "phone*"}
                className={`${styles.contactInput} ${styles.phoneInput}`}
              />
            </div>

            <div>
              <input
                type="email"
                required
                placeholder={isFa ? "ایمیل شما*" : "your-Email*"}
                className={styles.contactInput}
              />
            </div>

            <div>
              <textarea
                rows={9}
                placeholder={isFa ? "پیام شما..." : "message..."}
                className={`${styles.contactInput} resize-none`}
              />
            </div>

            <div className="pt-2 flex justify-start">
              <button type="submit" className={styles.sendBtn}>
                {isFa ? "ارسال" : "Send"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
