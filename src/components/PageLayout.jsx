import { useEffect, useRef, useState } from "react";
import { useParams, Outlet, Link, useLocation } from "react-router-dom";
import styles from "./PageLayout.module.css";
import Header from "./Header";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

import footerLogoImg from "../assets/Logo-black.svg";

// --- LEGAL & MODAL CONTENT DATA ---
const LEGAL_DATA = {
  privacy: {
    en: {
      title: "Privacy Policy",
      content: (
        <div className="space-y-6 text-sm md:text-base leading-relaxed text-zinc-800">
          <div>
            <h3 className={styles.modalSectionHeading}>1. Introduction</h3>
            <p>
              Radman Investment respects the privacy of visitors to its website
              and is committed to handling personal information responsibly.
            </p>
            <p className="mt-1">
              This Privacy Policy explains how information submitted through our
              website is collected, used, stored and protected when you visit
              our website or contact us through the contact form.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>
              2. Information We Collect
            </h3>
            <p>
              We may collect personal information that you voluntarily provide
              through our website’s contact form, including:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-zinc-700">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your telephone number, if provided</li>
              <li>The contents of your message or enquiry</li>
            </ul>
            <p className="mt-2 text-zinc-600 italic">
              Please do not submit confidential, sensitive or commercially
              restricted information through the contact form.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>
              3. How We Use Your Information
            </h3>
            <p>
              We use the information you provide for the following purposes:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-zinc-700">
              <li>To respond to your enquiries and requests</li>
              <li>To communicate with you regarding your message</li>
              <li>To maintain records of relevant business correspondence</li>
              <li>
                To protect the security and proper functioning of our website
              </li>
              <li>To comply with applicable legal obligations</li>
            </ul>
            <p className="mt-2 text-zinc-600">
              We do not use information submitted through the contact form for
              unrelated purposes.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>
              4. Sharing and Disclosure of Information
            </h3>
            <p>
              We do not sell personal information submitted through our website.
            </p>
            <p className="mt-1">
              Your information may be accessed by authorised personnel or
              disclosed to service providers where necessary to operate the
              website, manage communications or meet applicable legal
              obligations.
            </p>
            <p className="mt-1">
              Where disclosure is required by law or a competent authority,
              information may be provided in accordance with applicable legal
              requirements.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>5. Data Security</h3>
            <p>
              We take reasonable technical and organisational measures to
              protect personal information against unauthorised access, loss,
              alteration or disclosure.
            </p>
            <p className="mt-1">
              However, no method of transmitting or storing information
              electronically can be guaranteed to be completely secure.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>6. Data Retention</h3>
            <p>
              We retain personal information only for as long as reasonably
              necessary to respond to enquiries, maintain relevant business
              records, fulfil legitimate operational requirements and comply
              with applicable legal obligations.
            </p>
            <p className="mt-1">
              Retention periods may vary depending on the nature of the enquiry
              and the relevant legal requirements.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>
              7. Cookies and Website Technologies
            </h3>
            <p>
              Our website may use cookies or similar technologies necessary for
              its operation and security.
            </p>
            <p className="mt-1">
              Any additional cookies or tracking technologies, if introduced,
              should be disclosed in accordance with applicable requirements.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>
              8. Your Privacy Rights
            </h3>
            <p>
              Subject to applicable law, you may request information about the
              personal data we hold about you or ask us to correct inaccurate
              information.
            </p>
            <p className="mt-1">
              Requests concerning personal information may be submitted using
              the contact details provided on our website. We will review and
              respond to such requests in accordance with applicable legal
              requirements.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>
              9. Third-Party Websites
            </h3>
            <p>
              Our website may contain links to third-party websites. Radman is
              not responsible for the privacy practices, content or security of
              websites operated by third parties.
            </p>
            <p className="mt-1">
              We encourage visitors to review the privacy policies of those
              websites before providing personal information.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>
              10. Changes to This Policy
            </h3>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, website functionality or applicable
              legal requirements.
            </p>
            <p className="mt-1">
              Any revised version will be published on this page with an updated
              revision date.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>11. Contact Us</h3>
            <p>
              If you have questions about this Privacy Policy or the handling of
              your personal information, please contact Radman through the
              contact form available on our website.
            </p>
          </div>
        </div>
      ),
    },
    fa: {
      title: "سیاست حفظ حریم خصوصی",
      content: (
        <div className="space-y-6 text-sm md:text-base leading-relaxed text-zinc-800">
          <div>
            <h3 className={styles.modalSectionHeading}>۱. مقدمه</h3>
            <p>
              رادمان سرمایه‌گذاری به حریم خصوصی بازدیدکنندگان وب‌سایت خود احترام
              می‌گذارد و متعهد است اطلاعات شخصی آنان را به‌صورت مسئولانه مدیریت
              کند.
            </p>
            <p className="mt-1">
              این سیاست توضیح می‌دهد که هنگام بازدید از وب‌سایت رادمان یا
              برقراری ارتباط از طریق فرم تماس، اطلاعات ارسالی چگونه جمع‌آوری،
              استفاده، نگهداری و محافظت می‌شوند.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>
              ۲. اطلاعاتی که جمع‌آوری می‌کنیم
            </h3>
            <p>
              ممکن است اطلاعات شخصی‌ای را که داوطلبانه از طریق فرم تماس وب‌سایت
              در اختیار ما قرار می‌دهید، جمع‌آوری کنیم. این اطلاعات می‌تواند
              شامل موارد زیر باشد:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-zinc-700">
              <li>نام و نام خانوادگی</li>
              <li>نشانی ایمیل</li>
              <li>شماره تلفن، در صورت ارائه</li>
              <li>محتوای پیام یا درخواست شما</li>
            </ul>
            <p className="mt-2 text-zinc-600 italic">
              لطفاً از ارسال اطلاعات محرمانه، حساس یا اطلاعاتی که افشای آن‌ها از
              نظر تجاری محدود شده است، از طریق فرم تماس خودداری کنید.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>
              ۳. نحوه استفاده از اطلاعات
            </h3>
            <p>
              از اطلاعاتی که در اختیار ما قرار می‌دهید، برای اهداف زیر استفاده
              می‌کنیم:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-zinc-700">
              <li>پاسخ‌گویی به پرسش‌ها و درخواست‌های شما</li>
              <li>برقراری ارتباط با شما در ارتباط با پیام ارسالی</li>
              <li>نگهداری سوابق مکاتبات تجاری مرتبط</li>
              <li>حفاظت از امنیت و عملکرد صحیح وب‌سایت</li>
              <li>رعایت الزامات قانونی قابل اعمال</li>
            </ul>
            <p className="mt-2 text-zinc-600">
              اطلاعاتی که از طریق فرم تماس دریافت می‌کنیم، برای اهداف نامرتبط با
              موارد فوق استفاده نخواهند شد.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>
              ۴. اشتراک‌گذاری و افشای اطلاعات
            </h3>
            <p>
              رادمان اطلاعات شخصی ارسال‌شده از طریق وب‌سایت را به فروش
              نمی‌رساند.
            </p>
            <p className="mt-1">
              در صورت نیاز به راهبری وب‌سایت، مدیریت ارتباطات یا رعایت الزامات
              قانونی، ممکن است اطلاعات شما در دسترس کارکنان مجاز قرار گیرد یا در
              اختیار ارائه‌دهندگان خدمات مرتبط قرار داده شود.
            </p>
            <p className="mt-1">
              چنانچه افشای اطلاعات به موجب قانون یا دستور مرجع ذی‌صلاح الزامی
              باشد، اطلاعات مطابق با الزامات قانونی مربوط ارائه خواهد شد.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>۵. امنیت اطلاعات</h3>
            <p>
              رادمان اقدامات فنی و سازمانی متعارفی را برای محافظت از اطلاعات
              شخصی در برابر دسترسی غیرمجاز، مفقود شدن، تغییر یا افشای غیرمجاز به
              کار می‌گیرد.
            </p>
            <p className="mt-1">
              با این حال، هیچ روش انتقال یا ذخیره‌سازی الکترونیکی اطلاعات را
              نمی‌توان کاملاً ایمن و مصون از خطر دانست.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>
              ۶. مدت نگهداری اطلاعات
            </h3>
            <p>
              اطلاعات شخصی را تنها تا زمانی نگهداری می‌کنیم که به‌طور معقول برای
              پاسخ‌گویی به درخواست‌ها، حفظ سوابق تجاری مرتبط، انجام الزامات
              عملیاتی مشروع و رعایت تعهدات قانونی ضروری باشد.
            </p>
            <p className="mt-1">
              مدت نگهداری اطلاعات ممکن است بر اساس ماهیت درخواست و الزامات
              قانونی مربوط متفاوت باشد.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>
              ۷. کوکی‌ها و فناوری‌های وب‌سایت
            </h3>
            <p>
              وب‌سایت ما ممکن است از کوکی‌ها یا فناوری‌های مشابهی استفاده کند که
              برای عملکرد و امنیت آن ضروری هستند.
            </p>
            <p className="mt-1">
              در صورت استفاده از کوکی‌ها یا فناوری‌های رهگیری دیگری در آینده،
              اطلاعات مربوط به آن‌ها مطابق با الزامات قابل اعمال اعلام خواهد شد.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>
              ۸. حقوق شما در زمینه حریم خصوصی
            </h3>
            <p>
              با رعایت قوانین قابل اعمال، می‌توانید درباره اطلاعات شخصی‌ای که از
              شما نگهداری می‌کنیم درخواست کسب اطلاع کنید یا اصلاح اطلاعات نادرست
              را بخواهید.
            </p>
            <p className="mt-1">
              درخواست‌های مربوط به اطلاعات شخصی را می‌توانید از طریق اطلاعات
              تماس درج‌شده در وب‌سایت برای ما ارسال کنید. این درخواست‌ها مطابق
              با الزامات قانونی مربوط بررسی و پاسخ داده خواهند شد.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>
              ۹. وب‌سایت‌های اشخاص ثالث
            </h3>
            <p>
              وب‌سایت ما ممکن است حاوی پیوندهایی به وب‌سایت‌های اشخاص ثالث باشد.
              رادمان مسئولیتی در قبال رویه‌های حفظ حریم خصوصی، محتوای منتشرشده
              یا امنیت وب‌سایت‌هایی که توسط اشخاص ثالث اداره می‌شوند، ندارد.
            </p>
            <p className="mt-1">
              توصیه می‌کنیم پیش از ارائه اطلاعات شخصی در این وب‌سایت‌ها، سیاست
              حفظ حریم خصوصی آن‌ها را مطالعه کنید.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>
              ۱۰. تغییرات در این سیاست
            </h3>
            <p>
              ممکن است این سیاست حفظ حریم خصوصی را به‌منظور انعکاس تغییرات در
              رویه‌های کاری، قابلیت‌های وب‌سایت یا الزامات قانونی، به‌صورت
              دوره‌ای به‌روزرسانی کنیم.
            </p>
            <p className="mt-1">
              نسخه بازنگری‌شده این سیاست همراه با تاریخ به‌روزرسانی جدید در همین
              صفحه منتشر خواهد شد.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>۱۱. ارتباط با ما</h3>
            <p>
              در صورت داشتن هرگونه پرسش درباره این سیاست یا نحوه مدیریت اطلاعات
              شخصی شما، می‌توانید از طریق فرم تماس موجود در وب‌سایت با رادمان
              ارتباط برقرار کنید.
            </p>
          </div>
        </div>
      ),
    },
  },

  terms: {
    en: {
      title: "Terms & Conditions",
      content: (
        <div className="space-y-6 text-sm md:text-base leading-relaxed text-zinc-800">
          <div>
            <h3 className={styles.modalSectionHeading}>1. Introduction</h3>
            <p>
              These Terms & Conditions govern access to and use of the Radman
              Investment website.
            </p>
            <p className="mt-1">
              By accessing or using this Website, you agree to these Terms &
              Conditions. If you do not agree with them, please discontinue use
              of the Website.
            </p>
            <p className="mt-1 text-zinc-600">
              In these Terms, we refer to Radman Investment.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>
              2. Purpose of the Website
            </h3>
            <p>
              This Website provides general information about Radman, its
              investment approach, business activities and areas of focus.
            </p>
            <p className="mt-1">
              The content is intended for informational purposes and does not
              create a contractual relationship between Radman and any visitor.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>
              3. No Offer or Investment Advice
            </h3>
            <p>
              Nothing on this Website constitutes an offer to sell, a
              solicitation to purchase, or an invitation to participate in any
              investment, security or financial transaction.
            </p>
            <p className="mt-1">
              The information presented does not constitute financial,
              investment, legal, tax or other professional advice.
            </p>
            <p className="mt-1">
              Any investment opportunity or business arrangement involving
              Radman would be subject to separate evaluation, applicable
              requirements and, where relevant, formal agreements between the
              parties.
            </p>
            <p className="mt-1 text-zinc-600">
              Visitors should seek independent professional advice before making
              investment or business decisions.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>
              4. Accuracy of Information
            </h3>
            <p>
              We endeavour to ensure that the information published on this
              Website is accurate and up to date.
            </p>
            <p className="mt-1">
              However, the information is provided on an “as is” and “as
              available” basis. We do not guarantee that all content will be
              complete, accurate, current or free from errors.
            </p>
            <p className="mt-1 text-zinc-600">
              Radman reserves the right to amend, update or remove website
              content at any time without prior notice.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>
              5. Intellectual Property
            </h3>
            <p>
              Unless otherwise indicated, the content of this Website, including
              text, graphics, visual materials, branding and design elements, is
              owned by Radman or used with appropriate authorisation.
            </p>
            <p className="mt-1">
              Such materials may not be reproduced, distributed, modified,
              republished or used for commercial purposes without prior written
              permission, except where permitted by applicable law.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>6. Acceptable Use</h3>
            <p>Visitors agree to use the Website lawfully and responsibly.</p>
            <p className="mt-1">You must not:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-zinc-700">
              <li>Use the Website for unlawful purposes</li>
              <li>
                Attempt to gain unauthorised access to the Website or its
                systems
              </li>
              <li>Interfere with the Website’s operation or security</li>
              <li>Introduce malicious software or harmful code</li>
              <li>
                Use website content in a manner that infringes the rights of
                Radman or third parties
              </li>
            </ul>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>
              7. Limitation of Liability
            </h3>
            <p>
              To the extent permitted by applicable law, Radman shall not be
              liable for any direct or indirect loss arising from the use of, or
              inability to use, this Website or reliance on information
              published on it.
            </p>
            <p className="mt-1 text-zinc-600">
              Nothing in these Terms & Conditions excludes or limits liability
              where such exclusion or limitation is prohibited by applicable
              law.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>8. External Links</h3>
            <p>
              This Website may include links to third-party websites for
              reference or convenience.
            </p>
            <p className="mt-1">
              Radman does not control or endorse all content available through
              such websites and is not responsible for their availability,
              accuracy, security or privacy practices.
            </p>
            <p className="mt-1 text-zinc-600">
              Access to third-party websites is at the visitor’s own discretion
              and risk.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>
              9. Website Availability
            </h3>
            <p>
              We may modify, suspend or discontinue any part of the Website when
              necessary for maintenance, security, operational or other
              legitimate purposes.
            </p>
            <p className="mt-1">
              We do not guarantee uninterrupted or error-free access to the
              Website.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>10. Governing Law</h3>
            <p>
              These Terms & Conditions shall be interpreted in accordance with
              the applicable laws and regulations of the Islamic Republic of
              Iran, subject to confirmation by qualified legal counsel.
            </p>
            <p className="mt-1">
              Any dispute arising in connection with these Terms shall be
              addressed by the competent authorities or courts in accordance
              with applicable law.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>11. Amendments</h3>
            <p>Radman may revise these Terms & Conditions from time to time.</p>
            <p className="mt-1">
              Updated terms will be published on this page and will take effect
              upon publication, unless otherwise stated.
            </p>
            <p className="mt-1 text-zinc-600">
              Visitors are encouraged to review this page periodically.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>12. Contact Us</h3>
            <p>
              For questions regarding these Terms & Conditions, please contact
              Radman through the contact form available on our website.
            </p>
          </div>
        </div>
      ),
    },
    fa: {
      title: "شرایط و ضوابط استفاده از وب‌سایت",
      content: (
        <div className="space-y-6 text-sm md:text-base leading-relaxed text-zinc-800">
          <div>
            <h3 className={styles.modalSectionHeading}>۱. مقدمه</h3>
            <p>
              این شرایط و ضوابط، دسترسی به وب‌سایت رادمان سرمایه‌گذاری و نحوه
              استفاده از آن را تعیین می‌کند.
            </p>
            <p className="mt-1">
              با دسترسی به این وب‌سایت یا استفاده از آن، موافقت خود را با این
              شرایط و ضوابط اعلام می‌کنید. در صورت عدم موافقت با آن‌ها، لطفاً
              استفاده از وب‌سایت را متوقف کنید.
            </p>
            <p className="mt-1 text-zinc-600">
              در این سند، منظور از «رادمان»، شرکت سرمایه‌گذاری رادمان است.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>۲. هدف وب‌سایت</h3>
            <p>
              این وب‌سایت با هدف ارائه اطلاعات عمومی درباره رادمان، رویکرد
              سرمایه‌گذاری، حوزه‌های فعالیت و زمینه‌های تمرکز آن راه‌اندازی شده
              است.
            </p>
            <p className="mt-1">
              محتوای وب‌سایت صرفاً جنبه اطلاع‌رسانی دارد و به‌خودی‌خود هیچ رابطه
              قراردادی میان رادمان و بازدیدکنندگان ایجاد نمی‌کند.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>
              ۳. عدم ارائه پیشنهاد سرمایه‌گذاری یا مشاوره سرمایه‌گذاری
            </h3>
            <p>
              هیچ‌یک از مطالب منتشرشده در این وب‌سایت به‌منزله پیشنهاد فروش،
              دعوت به خرید یا دعوت به مشارکت در هیچ‌گونه سرمایه‌گذاری، اوراق
              بهادار یا معامله مالی نیست.
            </p>
            <p className="mt-1">
              اطلاعات ارائه‌شده در وب‌سایت، مشاوره مالی، سرمایه‌گذاری، حقوقی،
              مالیاتی یا سایر خدمات مشاوره‌ای حرفه‌ای محسوب نمی‌شود.
            </p>
            <p className="mt-1">
              هرگونه فرصت سرمایه‌گذاری یا توافق تجاری با رادمان، مستلزم بررسی
              جداگانه، رعایت الزامات مربوط و، در صورت لزوم، انعقاد
              توافق‌نامه‌های رسمی میان طرفین خواهد بود.
            </p>
            <p className="mt-1 text-zinc-600">
              توصیه می‌شود بازدیدکنندگان پیش از اتخاذ تصمیم‌های سرمایه‌گذاری یا
              تجاری، از مشاوره مستقل متخصصان ذی‌صلاح استفاده کنند.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>۴. صحت اطلاعات</h3>
            <p>
              رادمان تلاش می‌کند اطلاعات منتشرشده در این وب‌سایت دقیق و به‌روز
              باشد.
            </p>
            <p className="mt-1">
              با این حال، اطلاعات وب‌سایت بر مبنای وضعیت موجود و در دسترس ارائه
              می‌شوند و رادمان تضمین نمی‌کند که تمامی مطالب کامل، دقیق، به‌روز
              یا عاری از خطا باشند.
            </p>
            <p className="mt-1 text-zinc-600">
              رادمان حق دارد در هر زمان و بدون اطلاع قبلی، محتوای وب‌سایت را
              اصلاح، به‌روزرسانی یا حذف کند.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>۵. حقوق مالکیت فکری</h3>
            <p>
              مگر آنکه خلاف آن تصریح شده باشد، محتوای این وب‌سایت، از جمله متون،
              تصاویر، محتوای بصری، عناصر هویت برند و اجزای طراحی، متعلق به
              رادمان است یا با مجوز مناسب مورد استفاده قرار می‌گیرد.
            </p>
            <p className="mt-1">
              بازتولید، توزیع، تغییر، انتشار مجدد یا استفاده تجاری از این مطالب،
              بدون کسب مجوز کتبی قبلی ممنوع است؛ مگر در مواردی که قوانین قابل
              اعمال چنین استفاده‌ای را مجاز دانسته باشند.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>
              ۶. استفاده مجاز از وب‌سایت
            </h3>
            <p>
              بازدیدکنندگان موظف‌اند از وب‌سایت به‌صورت قانونی و مسئولانه
              استفاده کنند.
            </p>
            <p className="mt-1">موارد زیر مجاز نیست:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-zinc-700">
              <li>استفاده از وب‌سایت برای مقاصد غیرقانونی</li>
              <li>تلاش برای دسترسی غیرمجاز به وب‌سایت یا سامانه‌های آن</li>
              <li>ایجاد اختلال در عملکرد یا امنیت وب‌سایت</li>
              <li>وارد کردن نرم‌افزارهای مخرب یا کدهای آسیب‌رسان</li>
              <li>
                استفاده از محتوای وب‌سایت به شیوه‌ای که حقوق رادمان یا اشخاص
                ثالث را نقض کند
              </li>
            </ul>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>۷. محدودیت مسئولیت</h3>
            <p>
              تا حدی که قوانین قابل اعمال اجازه می‌دهند، رادمان در قبال خسارات
              مستقیم یا غیرمستقیمی که در نتیجه استفاده از وب‌سایت، عدم امکان
              استفاده از آن یا اتکا به اطلاعات منتشرشده در آن ایجاد می‌شوند،
              مسئولیتی نخواهد داشت.
            </p>
            <p className="mt-1 text-zinc-600">
              هیچ‌یک از مفاد این شرایط و ضوابط، مسئولیتی را که حذف یا محدود کردن
              آن به موجب قوانین قابل اعمال ممنوع است، مستثنا یا محدود نمی‌کند.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>۸. پیوندهای خارجی</h3>
            <p>
              این وب‌سایت ممکن است برای سهولت دسترسی یا ارائه اطلاعات تکمیلی،
              حاوی پیوندهایی به وب‌سایت‌های اشخاص ثالث باشد.
            </p>
            <p className="mt-1">
              رادمان بر تمامی محتوای این وب‌سایت‌ها کنترل ندارد و لزوماً آن‌ها
              را تأیید نمی‌کند. همچنین، مسئولیتی در قبال دسترس‌پذیری، صحت
              اطلاعات، امنیت یا رویه‌های حفظ حریم خصوصی آن‌ها بر عهده نمی‌گیرد.
            </p>
            <p className="mt-1 text-zinc-600">
              دسترسی به وب‌سایت‌های اشخاص ثالث با تشخیص و مسئولیت خود
              بازدیدکننده انجام می‌شود.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>
              ۹. دسترس‌پذیری وب‌سایت
            </h3>
            <p>
              رادمان ممکن است در صورت نیاز به تعمیر و نگهداری، ارتقای امنیت،
              انجام امور عملیاتی یا سایر دلایل موجه، هر بخش از وب‌سایت را تغییر
              دهد، به حالت تعلیق درآورد یا ارائه آن را متوقف کند.
            </p>
            <p className="mt-1">
              رادمان دسترسی بدون وقفه یا عملکرد کاملاً بدون خطای وب‌سایت را
              تضمین نمی‌کند.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>۱۰. قانون حاکم</h3>
            <p>
              این شرایط و ضوابط، با رعایت تأیید نهایی مشاور حقوقی واجد صلاحیت،
              بر اساس قوانین و مقررات قابل اعمال جمهوری اسلامی ایران تفسیر و
              اجرا خواهند شد.
            </p>
            <p className="mt-1">
              هرگونه اختلاف ناشی از این شرایط یا مرتبط با آن، مطابق با قوانین
              قابل اعمال، از طریق مراجع یا دادگاه‌های ذی‌صلاح رسیدگی خواهد شد.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>
              ۱۱. اصلاح و به‌روزرسانی شرایط
            </h3>
            <p>
              رادمان ممکن است هر از گاهی این شرایط و ضوابط را بازنگری و اصلاح
              کند.
            </p>
            <p className="mt-1">
              نسخه به‌روزرسانی‌شده در همین صفحه منتشر می‌شود و، مگر آنکه خلاف آن
              تصریح شده باشد، از زمان انتشار لازم‌الاجرا خواهد بود.
            </p>
            <p className="mt-1 text-zinc-600">
              به بازدیدکنندگان توصیه می‌شود این صفحه را به‌صورت دوره‌ای بررسی
              کنند.
            </p>
          </div>

          <div>
            <h3 className={styles.modalSectionHeading}>۱۲. ارتباط با ما</h3>
            <p>
              برای طرح پرسش درباره این شرایط و ضوابط، می‌توانید از طریق فرم تماس
              موجود در وب‌سایت با رادمان ارتباط برقرار کنید.
            </p>
          </div>
        </div>
      ),
    },
  },

  resources: {
    en: {
      title: "Resources",
      content: (
        <div className="space-y-5 text-sm md:text-base leading-relaxed text-zinc-800">
          <p className="font-semibold text-black text-base md:text-lg">
            Knowledge, Perspectives and Corporate Information
          </p>
          <p>
            Explore Radman’s resources for a deeper understanding of our
            investment approach, business activities and areas of focus. This
            section brings together corporate publications, selected documents
            and relevant materials that offer further insight into our work
            across energy, mining and metals, commodity trading, and capital
            markets.
          </p>
          <p>
            Through these resources, we aim to provide a clearer view of the
            principles that guide our activities, the markets in which we
            operate and the broader economic and industrial developments that
            shape investment opportunities. From corporate information to
            relevant industry materials, each resource is intended to support a
            more informed understanding of Radman’s priorities and perspective.
          </p>
          <p>
            Whether you are exploring our areas of activity, seeking information
            about our approach to investment, or looking for corporate
            materials, this page provides access to selected resources that
            complement the information available across our website.
          </p>
          <p className="text-black">
            Explore our resources to learn more about Radman, our areas of focus
            and the perspectives that inform our approach to investment.
          </p>
        </div>
      ),
    },
    fa: {
      title: "منابع",
      content: (
        <div className="space-y-5 text-sm md:text-base leading-relaxed text-zinc-800">
          <p className="font-semibold text-black text-base md:text-lg">
            دانش، دیدگاه‌ها و اطلاعات سازمانی
          </p>
          <p>
            در این بخش می‌توانید به منابع و مطالبی دسترسی پیدا کنید که شناخت
            عمیق‌تری از رویکرد سرمایه‌گذاری، حوزه‌های فعالیت و زمینه‌های تمرکز
            رادمان فراهم می‌کنند. این بخش مجموعه‌ای از انتشارات سازمانی، اسناد
            منتخب و مطالب مرتبط را در بر می‌گیرد که اطلاعات بیشتری درباره
            فعالیت‌های ما در حوزه‌های انرژی، معدن و فلزات، تجارت کالا و بازار
            سرمایه ارائه می‌دهند.
          </p>
          <p>
            هدف ما از ارائه این منابع، تبیین روشن‌تر اصول راهنمای فعالیت‌های
            رادمان، بازارهایی که در آن‌ها فعالیت می‌کنیم و تحولات گسترده اقتصادی
            و صنعتی مؤثر بر شکل‌گیری فرصت‌های سرمایه‌گذاری است. هر یک از این
            منابع، از اطلاعات سازمانی تا مطالب مرتبط با صنایع، با هدف فراهم کردن
            درکی دقیق‌تر از اولویت‌ها و دیدگاه‌های رادمان ارائه می‌شود.
          </p>
          <p>
            در صورتی که به دنبال شناخت حوزه‌های فعالیت رادمان باشید و همچنین
            بخواهید درباره رویکرد ما به سرمایه‌گذاری اطلاعات بیشتری کسب کنید و
            یا به مطالب و اسناد سازمانی نیاز داشته باشید، این صفحه دسترسی شما را
            به منابع منتخب فراهم می‌کند؛ منابعی که در کنار سایر مطالب وب‌سایت،
            تصویر کامل‌تری از فعالیت‌های رادمان ارائه می‌دهند.
          </p>
          <p className="text-black">
            باور داریم تصمیم‌گیری آگاهانه با شناخت روشن بازار، محیط کسب‌وکار و
            عواملی آغاز می‌شود که بر خلق ارزش در بلندمدت تأثیر می‌گذارند. منابع
            این بخش نیز بازتاب‌دهنده همین دیدگاه‌اند و اطلاعات و زمینه‌های لازم
            را برای شناخت بهتر فعالیت‌های رادمان در اختیار ذی‌نفعان، شرکای تجاری
            و سایر علاقه‌مندان قرار می‌دهند.
          </p>
        </div>
      ),
    },
  },
};

export default function PageLayout() {
  const { lang } = useParams();
  const location = useLocation();
  const isFa = lang === "fa";

  const [activeModal, setActiveModal] = useState(null);

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

  // Pause Lenis and prevent background scroll when Modal is open
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
      lenisRef.current?.stop();
    } else {
      document.body.style.overflow = "unset";
      lenisRef.current?.start();
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveModal(null);
    };

    if (activeModal) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      lenisRef.current?.start();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModal]);

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

  // Observer for the Fade-In Text
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-text");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

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
                    ? "آدرس: تهران، الهیه، خیابان الهیه، پلاک ۱۱، طبقه اول"
                    : "Office : 1st Floor, No. 11, Elahieh Street, Elahieh, Tehran, Iran"}
                </p>
                <a href="tel:+80067892198" className={styles.footerLink}>
                  {isFa ? "شماره تماس: 982192001277+" : "Tel: +982192001277"}
                </a>
                <a className={styles.footerLink}>
                  {isFa ? "کدپستی: 1914837471" : "Postal Code: 1914837471"}
                </a>
                <a
                  href="mailto:info@radmaninvest.com "
                  className={styles.footerLink}
                >
                  info@radmaninvest.com
                </a>
              </div>
            </div>

            <div className={styles.footerBottomBar} dir="ltr">
              <div className={styles.footerBottomLeft}>
                <div className={styles.footerBottomLinksLeft}>
                  <span>Copyright © RADMAN</span>

                  <span className="text-zinc-900">[</span>
                  <button
                    type="button"
                    onClick={() => setActiveModal("privacy")}
                    className={styles.footerModalBtn}
                  >
                    Privacy Policy
                  </button>
                  <span className="text-zinc-900">.</span>
                  <button
                    type="button"
                    onClick={() => setActiveModal("terms")}
                    className={styles.footerModalBtn}
                  >
                    Terms & Conditions
                  </button>
                  <span className="text-zinc-900">.</span>
                  <button
                    type="button"
                    onClick={() => setActiveModal("resources")}
                    className={styles.footerModalBtn}
                  >
                    Resources
                  </button>
                  <span className="text-zinc-900">]</span>
                </div>

                <div className={styles.footerBottomLinks}>
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

      {/* --- LEGAL OVERLAY MODAL --- */}
      {activeModal && (
        <div
          className="fixed inset-0 z-9999 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 md:p-10"
          onClick={() => setActiveModal(null)}
        >
          <div
            dir={isFa ? "rtl" : "ltr"}
            className="relative w-full max-w-4xl bg-white text-black shadow-2xl flex flex-col max-h-[85vh] overflow-hidden border border-zinc-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-zinc-200 px-6 py-4 md:px-8 shrink-0 bg-white gap-4">
              <div className="flex items-center gap-4 sm:gap-6">
                <button
                  type="button"
                  onClick={() => setActiveModal("privacy")}
                  className={`${styles.modalTab} ${
                    activeModal === "privacy" ? styles.modalTabActive : ""
                  }`}
                >
                  {isFa ? "سیاست حفظ حریم خصوصی" : "Privacy Policy"}
                </button>

                <button
                  type="button"
                  onClick={() => setActiveModal("terms")}
                  className={`${styles.modalTab} ${
                    activeModal === "terms" ? styles.modalTabActive : ""
                  }`}
                >
                  {isFa ? "شرایط و ضوابط" : "Terms & Conditions"}
                </button>

                <button
                  type="button"
                  onClick={() => setActiveModal("resources")}
                  className={`${styles.modalTab} ${
                    activeModal === "resources" ? styles.modalTabActive : ""
                  }`}
                >
                  {isFa ? "منابع" : "Resources"}
                </button>
              </div>

              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className={styles.modalCloseBtn}
              >
                <span>{isFa ? "بستن" : "CLOSE"}</span>
                <svg
                  className="w-4 h-4 stroke-current stroke-[1.5]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <line x1="4" y1="4" x2="20" y2="20" />
                  <line x1="20" y1="4" x2="4" y2="20" />
                </svg>
              </button>
            </div>

            <div
              data-lenis-prevent
              className={`overflow-y-auto px-6 py-6 md:px-10 md:py-8 ${styles.modalBodyContainer}`}
            >
              <h2
                className={`${styles.modalDocTitle} mb-6 border-b border-zinc-100 pb-3`}
              >
                {LEGAL_DATA[activeModal][isFa ? "fa" : "en"].title}
              </h2>

              {LEGAL_DATA[activeModal][isFa ? "fa" : "en"].content}
            </div>

            <div className="border-t border-zinc-100 px-6 py-3 md:px-8 bg-zinc-50 flex justify-end shrink-0">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className={styles.modalDismissBtn}
              >
                {isFa ? "بستن" : "Dismiss"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
