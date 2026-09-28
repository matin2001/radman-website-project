import { useEffect, useRef } from "react";
import { useParams, Outlet, Link, useLocation } from "react-router-dom";
import styles from "./PageLayout.module.css";
import Header from "./Header";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

import footerLogoImg from "../assets/logo-black.png";

export default function PageLayout() {
  const { lang } = useParams();
  const location = useLocation();
  const isFa = lang === "fa";

  useEffect(() => {
    const isRtl = lang === "fa";
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    document.documentElement.lang = lang || "en";
  }, [lang]);

  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
      smoothWheel: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    const handleResize = () => {
      lenis.resize();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const handleScrollToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen w-full bg-black text-white selection:bg-white selection:text-black flex justify-center">
      <div className="w-full max-w-[2560px] flex flex-col min-h-screen relative">
        <Header />

        <main className="">
          <Outlet />
        </main>

        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <div className={styles.footerLogoContainer}>
              <Link to={`/${lang}/`} className="hover:underline">
                <img
                  src={footerLogoImg}
                  alt="RADMAN Massive Logo"
                  className={styles.footerLogo}
                />
              </Link>
            </div>

            <div className={styles.footerGrid}>
              <div className={styles.footerList}>
                <h4 className={styles.footerColTitle}>
                  {isFa ? "شرکت" : "Company"}
                </h4>
                <Link
                  to={`/${lang}/Company/Overview`}
                  className={styles.footerLink}
                >
                  {isFa ? "معرفی رادمان" : "Overview"}
                </Link>
                <Link
                  to={`/${lang}/Company/Vision`}
                  className={styles.footerLink}
                >
                  {isFa ? "چشم‌انداز و اهداف" : "Vision & Purpose"}
                </Link>
                <Link
                  to={`/${lang}/Company/Governance`}
                  className={styles.footerLink}
                >
                  {isFa ? "حاکمیت شرکتی" : "Corporate Governance"}
                </Link>
                <Link
                  to={`/${lang}/Company/Partnership`}
                  className={styles.footerLink}
                >
                  {isFa ? "مشارکت‌های راهبردی" : "Partnerships"}
                </Link>
                <Link
                  to={`/${lang}/Company/Careers`}
                  className={styles.footerLink}
                >
                  {isFa ? "فرصت‌های شغلی" : "Careers"}
                </Link>
              </div>

              <div className={styles.footerList}>
                <h4 className={styles.footerColTitle}>
                  {isFa ? "رویکرد" : "Approach"}
                </h4>
                <Link
                  to={`/${lang}/Approach/Investment`}
                  className={styles.footerLink}
                >
                  {isFa ? "راهبرد سرمایه‌گذاری" : "Investment Strategy"}
                </Link>
                <Link
                  to={`/${lang}/Approach/Sustainability`}
                  className={styles.footerLink}
                >
                  {isFa ? "پایداری" : "Sustainability"}
                </Link>
              </div>

              <div className={styles.footerList}>
                <h4 className={styles.footerColTitle}>
                  {isFa ? "حوزه‌های فعالیت" : "Businesses"}
                </h4>
                <Link
                  to={`/${lang}/Businesses/Energy`}
                  className={styles.footerLink}
                >
                  {isFa ? "انرژی" : "Energy"}
                </Link>
                <Link
                  to={`/${lang}/Businesses/Mining`}
                  className={styles.footerLink}
                >
                  {isFa ? "صنایع معدنی و فلزات" : "Mining & Metals"}
                </Link>
                <Link
                  to={`/${lang}/Businesses/CapitalMarket`}
                  className={styles.footerLink}
                >
                  {isFa ? "بازار سرمایه" : "Capital Markets"}
                </Link>
                <Link
                  to={`/${lang}/Businesses/CommodityTrading`}
                  className={styles.footerLink}
                >
                  {isFa ? "تجارت کالا" : "Commodity Trading"}
                </Link>
              </div>

              <div className={styles.footerList}>
                <h4 className={styles.footerColTitle}>
                  {isFa ? "دیدگاه" : "Insights"}
                </h4>
                <Link
                  to={`/${lang}/Insights/Reports`}
                  className={styles.footerLink}
                >
                  {isFa ? "گزارش‌ها" : "Reports"}
                </Link>
                <Link
                  to={`/${lang}/Insights/Perspectives`}
                  className={styles.footerLink}
                >
                  {isFa ? "مقالات" : "Perspectives"}
                </Link>
              </div>

              <div
                className={`${styles.footerList} ${styles.footerContactCol}`}
              >
                <h4 className={styles.footerColTitle}>
                  <Link to={`/${lang}/ContactUs`} className="hover:underline">
                    {isFa ? "تماس با ما" : "Get Access"}
                  </Link>
                </h4>
                <p className={styles.footerLink}>
                  {isFa
                    ? "دفتر مرکزی: تهران، الهیه، خیابان ۱۱، پلاک ۱، طبقه ۱۱، واحد ۱"
                    : "Office : No.1 , 11st floor, unit 1 ,Elahie St., Tehran"}
                </p>
                <a href="tel:+80067892198" className={styles.footerLink}>
                  Tel: +8006789 21 98
                </a>
                <a
                  href="mailto:email@radmaninvest.com"
                  className={styles.footerLink}
                >
                  email@radmaninvest.com
                </a>
              </div>
            </div>

            <div className={styles.footerBottomBar} dir="ltr">
              <div className={styles.footerBottomLeft}>
                <div className={styles.footerBottomLinks}>
                  <span>Copyright © RADMAN</span>
                  <Link className={styles.footerBottomLink}>
                    [Privacy policy terms @ conditions]
                  </Link>
                </div>

                <div className={styles.footerBottomLinks}>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.footerBottomLink}
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.footerBottomLink}
                  >
                    Instagram
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.footerBottomLink}
                  >
                    X
                  </a>
                  <a
                    href="https://radmaninvest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.footerBottomLink}
                  >
                    https://radmaninvest.com
                  </a>
                </div>

                <div className={`${styles.footerBottomLinks} lg:hidden!`}>
                  <span>Design by andmore-design.studio</span>
                </div>
              </div>

              <div className={styles.footerBottomRight}>
                <span className="hidden! lg:inline!">
                  Design by andmore-design.studio
                </span>
                <button
                  onClick={handleScrollToTop}
                  className={styles.goUpButton}
                >
                  Go Up! ↑
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
