import { useEffect, useState } from "react";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

import logoBlackImg from "../assets/Logo-black.svg";

export default function Header() {
  const { lang } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const isFa = lang === "fa";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Company");
  const [prevPathname, setPrevPathname] = useState(location.pathname);

  if (prevPathname !== location.pathname) {
    setPrevPathname(location.pathname);
    setIsMenuOpen(false);
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const getLanguageLink = (targetLang) => {
    const currentPathWithoutLang = location.pathname.replace(/^\/(fa|en)/, "");
    return `/${targetLang}${currentPathWithoutLang}`;
  };

  // Paths that should have a white background & black text
  const lightThemeRoutes = [
    "Company/Overview",
    "Company/Vision",
    "Company/Governance",
    "Company/Partnership",
    "Company/Careers",
    "Approach/Sustainability",
    "Businesses/Energy",
    "Businesses/CapitalMarket",
    "Businesses/CommodityTrading",
    "Businesses/Mining",
    // "Insights/Reports",
    "Insights/Perspectives",
    "Insights/Perspective1",
    "Insights/Perspective2",
    "Insights/Perspective3",
    "ContactUs",
  ];

  const isLightHeader = lightThemeRoutes.some((route) =>
    location.pathname.toLowerCase().includes(route.toLowerCase()),
  );

  const isActive = (path) =>
    location.pathname.toLowerCase().includes(path.toLowerCase());

  const menuData = [
    {
      id: "Company",
      title: isFa ? "شرکت" : "Company",
      to: `/${lang}/Company/Overview`,
      subItems: [
        {
          title: isFa ? "معرفی رادمان" : "Overview",
          to: `/${lang}/Company/Overview`,
        },
        {
          title: isFa ? "چشم‌انداز و اهداف" : "Vision & Purpose",
          to: `/${lang}/Company/Vision`,
        },
        {
          title: isFa ? "حاکمیت شرکتی" : "Corporate Governance",
          to: `/${lang}/Company/Governance`,
        },
        {
          title: isFa ? "مشارکت‌های راهبردی" : "Partnerships",
          to: `/${lang}/Company/Partnership`,
        },
        {
          title: isFa ? "فرصت‌های شغلی" : "Careers",
          to: `/${lang}/Company/Careers`,
        },
      ],
    },
    {
      id: "Approach",
      title: isFa ? "رویکرد" : "Approach",
      to: `/${lang}/Approach/Investment`,
      subItems: [
        {
          title: isFa ? "راهبرد سرمایه‌گذاری" : "Investment Strategy",
          to: `/${lang}/Approach/Investment`,
        },
        {
          title: isFa ? "پایداری" : "Sustainability",
          to: `/${lang}/Approach/Sustainability`,
        },
      ],
    },
    {
      id: "Businesses",
      title: isFa ? "حوزه‌های فعالیت" : "Businesses",
      to: `/${lang}/Businesses/Energy`,
      subItems: [
        { title: isFa ? "انرژی" : "Energy", to: `/${lang}/Businesses/Energy` },
        {
          title: isFa ? "صنایع معدنی و فلزات" : "Mining & Metals",
          to: `/${lang}/Businesses/Mining`,
        },
        {
          title: isFa ? "بازار سرمایه" : "Capital Markets",
          to: `/${lang}/Businesses/CapitalMarket`,
        },
        {
          title: isFa ? "تجارت کالا" : "Commodity Trading",
          to: `/${lang}/Businesses/CommodityTrading`,
        },
      ],
    },
    {
      id: "Insights",
      title: isFa ? "دیدگاه" : "Insights",
      to: `/${lang}/Insights/Perspectives`,
      subItems: [
        {
          title: isFa ? "گزارش‌ها" : "Reports",
          to: `/${lang}/Insights/Reports`,
        },
        {
          title: isFa ? "مقالات" : "Perspectives",
          to: `/${lang}/Insights/Perspectives`,
        },
      ],
    },
    {
      id: "ContactUs",
      title: isFa ? "تماس با ما" : "Contact Us",
      to: `/${lang}/ContactUs`,
      subItems: [
        { title: isFa ? "تماس با ما" : "Contact Us", to: `/${lang}/ContactUs` },
      ],
    },
  ];

  const currentCategoryData = menuData.find((cat) => cat.id === activeCategory);

  const handleCategoryClick = (category) => {
    setActiveCategory(category.id);
    if (
      category.id === "ContactUs" ||
      !category.subItems ||
      category.subItems.length === 0
    ) {
      setIsMenuOpen(false);
      navigate(category.to);
    }
  };

  return (
    <>
      <header
        dir="ltr"
        className={`w-full p-5 md:px-12 flex md:flex-row justify-between md:justify-end items-center transition-colors duration-300 relative z-30 ${
          isLightHeader
            ? "bg-white text-black backdrop-blur-xs"
            : "bg-black text-white backdrop-blur-xs"
        }`}
      >
        {/* Mobile Logo on Left */}
        <div className="flex md:hidden items-center">
          <Link to={`/${lang}`} className="block">
            <img
              src={logoBlackImg}
              alt="RADMAN Logo"
              className={`w-auto object-contain max-w-1/2! ${
                !isLightHeader ? "invert brightness-200" : ""
              }`}
            />
          </Link>
        </div>

        <div className="flex items-center gap-5 md:gap-7">
          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to={`/${lang}/Company/Overview`}
              className={`${styles.navLink} ${
                isActive("Company")
                  ? isLightHeader
                    ? "font-semibold! text-black!"
                    : "font-semibold! text-white!"
                  : isLightHeader
                    ? "text-zinc-600 hover:text-black"
                    : "text-zinc-400 hover:text-white"
              }`}
            >
              {isFa ? "شرکت" : "Company"}
            </Link>

            <Link
              to={`/${lang}/Approach/Investment`}
              className={`${styles.navLink} ${
                isActive("Approach")
                  ? isLightHeader
                    ? "font-semibold! text-black!"
                    : "font-semibold! text-white!"
                  : isLightHeader
                    ? "text-zinc-600 hover:text-black"
                    : "text-zinc-400 hover:text-white"
              }`}
            >
              {isFa ? "رویکرد" : "Approach"}
            </Link>

            <Link
              to={`/${lang}/Businesses/Energy`}
              className={`${styles.navLink} ${
                isActive("Businesses")
                  ? isLightHeader
                    ? "font-semibold! text-black!"
                    : "font-semibold! text-white!"
                  : isLightHeader
                    ? "text-zinc-600 hover:text-black"
                    : "text-zinc-400 hover:text-white"
              }`}
            >
              {isFa ? "حوزه‌های فعالیت" : "Businesses"}
            </Link>

            <Link
              to={`/${lang}/Insights/Perspectives`}
              className={`${styles.navLink} ${
                isActive("Insights")
                  ? isLightHeader
                    ? "font-semibold! text-black!"
                    : "font-semibold! text-white!"
                  : isLightHeader
                    ? "text-zinc-600 hover:text-black"
                    : "text-zinc-400 hover:text-white"
              }`}
            >
              {isFa ? "دیدگاه" : "Insights"}
            </Link>

            <Link
              to={`/${lang}/ContactUs`}
              className={`${styles.navLink} ${
                isActive("ContactUs")
                  ? isLightHeader
                    ? "font-semibold! text-black!"
                    : "font-semibold! text-white!"
                  : isLightHeader
                    ? "text-zinc-600 hover:text-black"
                    : "text-zinc-400 hover:text-white"
              }`}
            >
              {isFa ? "تماس با ما" : "Contact Us"}
            </Link>
          </nav>

          <Link
            to={isFa ? getLanguageLink("en") : getLanguageLink("fa")}
            className={`${styles.langSwitch} ${
              isLightHeader
                ? "text-zinc-500 hover:text-black"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            {isFa ? "EN" : "FA"}
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Menu"
            className="flex flex-col justify-center items-end gap-1 cursor-pointer group px-1 py-1"
          >
            <span
              className={`h-[1.5px] w-5 transition-colors duration-200 ${
                isLightHeader
                  ? "bg-zinc-400 group-hover:bg-black"
                  : "bg-zinc-500 group-hover:bg-white"
              }`}
            />
            <span
              className={`h-[1.5px] w-3.5 transition-colors duration-200 ${
                isLightHeader
                  ? "bg-zinc-400 group-hover:bg-black"
                  : "bg-zinc-500 group-hover:bg-white"
              }`}
            />
          </button>
        </div>
      </header>

      {/* --- FULLSCREEN OVERLAY MENU --- */}
      {isMenuOpen && (
        <div
          className={`fixed inset-0 z-9999 bg-white text-black flex flex-col justify-start md:justify-between p-6 sm:p-8 md:p-12 overflow-y-auto ${styles.menuOverlay}`}
        >
          <div
            className="flex items-center justify-between w-full shrink-0"
            dir="ltr"
          >
            <Link to={`/${lang}`} onClick={() => setIsMenuOpen(false)}>
              <img
                src={logoBlackImg}
                alt="RADMAN Logo"
                className="h-5 md:h-8 w-auto object-contain"
              />
            </Link>

            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 md:gap-3 text-zinc-500 hover:text-black transition-colors cursor-pointer group"
            >
              <span className={styles.overlayCloseText}>
                {isFa ? "بستن" : "CLOSE"}
              </span>
              <svg
                className="w-4 h-4 md:w-5 md:h-5 stroke-current stroke-[1.2] group-hover:rotate-90 transition-transform duration-300"
                viewBox="0 0 24 24"
                fill="none"
              >
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </svg>
            </button>
          </div>

          {/* Middle Menu */}
          <div className="my-24 md:my-auto py-6 md:py-12 w-full max-w-2xl mx-auto flex items-start justify-center gap-4 sm:gap-8 md:gap-14">
            <div className="w-32.5 sm:w-42.5 md:w-55 shrink-0 flex flex-col gap-3 sm:gap-4">
              {menuData.map((category) => {
                const isSelected = activeCategory === category.id;
                return (
                  <div
                    key={category.id}
                    className="flex items-center gap-1.5 sm:gap-2.5 cursor-pointer group"
                    onClick={() => handleCategoryClick(category)}
                    onMouseEnter={() => setActiveCategory(category.id)}
                  >
                    <span
                      className={`text-xs sm:text-base md:text-lg transition-opacity duration-150 w-3 sm:w-4 shrink-0 ${
                        isSelected ? "opacity-100 text-black" : "opacity-0"
                      }`}
                    >
                      {isFa ? "←" : "→"}
                    </span>

                    <span
                      className={`${styles.overlayCategory} ${
                        isSelected
                          ? styles.overlayCategoryActive
                          : "text-zinc-400 group-hover:text-zinc-700"
                      }`}
                    >
                      {category.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Column 2: Sub-categories */}
            <div className="w-35 sm:w-45 md:w-57.5 shrink-0 flex flex-col gap-2 sm:gap-3 pt-0.5 sm:pt-2">
              {currentCategoryData?.subItems &&
              currentCategoryData.subItems.length > 0 ? (
                currentCategoryData.subItems.map((subItem) => (
                  <Link
                    key={subItem.to}
                    to={subItem.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={styles.overlaySubLink}
                  >
                    {subItem.title}
                  </Link>
                ))
              ) : (
                <Link
                  to={currentCategoryData?.to || `/${lang}/ContactUs`}
                  onClick={() => setIsMenuOpen(false)}
                  className={styles.overlaySubLink}
                >
                  {currentCategoryData?.title}
                </Link>
              )}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="w-full max-w-2xl mx-auto flex justify-center gap-4 sm:gap-8 md:max-w-full md:mx-0 md:block md:gap-0 shrink-0 pt-4 pb-4 md:pb-6">
            <div className="w-32.5 sm:w-42.5 shrink-0 ps-4.5 sm:ps-6.5 md:w-auto md:ps-0 md:shrink">
              <Link
                to="#"
                onClick={() => setIsMenuOpen(false)}
                className={styles.overlayLogin}
              >
                {isFa ? "ورود آنلاین" : "Online Login"}
              </Link>
            </div>
            <div className="w-35 sm:w-45 shrink-0 block md:hidden"></div>
          </div>
        </div>
      )}
    </>
  );
}
