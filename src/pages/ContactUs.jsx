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
              Investment welcomes enquiries from investors, industry leaders,
              and organisations interested in exploring business opportunities,
              developing partnerships, and building mutually beneficial
              relationships that create new avenues for growth.
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
              ? "در صورتی که مایل هستید با فعالیت‌های شرکت سرمایه‌گذاری رادمان بیشتر آشنا شوید یا فرصت‌های همکاری تجاری را بررسی کنید، از ارتباط با شما استقبال می‌کنیم. تیم ما آماده است تا به پرسش‌های شما پاسخ دهد، درباره زمینه‌های مورد علاقه‌تان گفت‌وگو کند و فرصت‌های همکاری را مورد بررسی قرار دهد."
              : "Whether you would like to learn more about Radman Investment or explore potential business opportunities, we welcome your enquiry. Our team is available to discuss your interests, answer your questions, and explore opportunities for collaboration."}
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
