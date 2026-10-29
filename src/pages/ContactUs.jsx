import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styles from "./ContactUs.module.css";

import logoImg from "../assets/Logo-black.svg";

export default function ContactUs() {
  const { lang } = useParams();
  const isFa = lang === "fa";

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  // Track status: "idle" | "loading" | "success" | "error"
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        // Clear inputs on success
        setFormData({ fullName: "", phone: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Submission failed:", err);
      setStatus("error");
    }
  };

  return (
    <div className="bg-white overflow-hidden">
      <Helmet>
        <title>{isFa ? "رادمان | تماس با ما" : "RADMAN | Contact Us"}</title>
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
              <span className="md:hidden">Radman </span>
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

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            {/* Full Name */}
            <div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder={isFa ? "نام و نام خانوادگی ٭" : "Full name *"}
                dir={isFa ? "rtl" : "ltr"}
                className={styles.contactInput}
              />
            </div>

            {/* Phone Number */}
            <div>
              <input
                type="tel"
                inputMode="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder={isFa ? "شماره تماس ٭" : "Phone *"}
                dir={isFa ? "rtl" : "ltr"}
                className={`${styles.contactInput} ${
                  !isFa ? styles.phoneInput : ""
                }`}
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={isFa ? "ایمیل ٭" : "Email *"}
                dir={isFa ? "rtl" : "ltr"}
                className={styles.contactInput}
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={9}
                placeholder={isFa ? "پیام شما..." : "Message..."}
                dir={isFa ? "rtl" : "ltr"}
                className={`${styles.contactInput} resize-none`}
              />
            </div>

            {/* Submit Button & Status Notification */}
            <div className="pt-2 flex items-center gap-4">
              <button
                type="submit"
                disabled={status === "loading"}
                className={`${styles.sendBtn} disabled:opacity-50 cursor-pointer`}
              >
                {status === "loading"
                  ? isFa
                    ? "در حال ارسال..."
                    : "Sending..."
                  : isFa
                    ? "ارسال"
                    : "Send"}
              </button>

              {status === "success" && (
                <span
                  className={`text-emerald-600 text-sm ${styles.fontChanger}`}
                >
                  {isFa
                    ? "پیام شما با موفقیت ارسال شد."
                    : "Your message has been sent successfully."}
                </span>
              )}

              {status === "error" && (
                <span className={`text-rose-600 text-sm ${styles.fontChanger}`}>
                  {isFa
                    ? "خطا در ارسال پیام. لطفاً دوباره تلاش کنید."
                    : "Failed to send message. Please try again."}
                </span>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
