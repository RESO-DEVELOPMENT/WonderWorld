import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import "./index.scss";
import { useTranslation } from "../../hooks/useTranslation";
import { useRouter } from "next/router";
import Image from "next/image";

const Navigation: FC = ({}) => {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const t = useTranslation();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(
    `${t!["headerLanguage"]}`
  );
  const languageList = [
    {
      id: "1",
      language: "Vie",
      locale: "vi",
    },
    {
      id: "2",
      language: "Eng",
      locale: "en",
    },
    {
      id: "3",
      language: "中国",
      locale: "zh",
    },
  ];
  useEffect(() => {
    document.addEventListener("scroll", () => {
      let header = document.getElementById("the-header");
      if (window.scrollY > 50 && !(header == null)) {
        header.classList.add("header-scrolled");
      } else if (header != null) {
        header.classList.remove("header-scrolled");
      }
    });

    const navbarToggle = document.querySelector("#navbar-toggle");
    const navbarMenu = document.querySelector("#navbar-menu");
    if (navbarMenu != null && navbarToggle != null) {
      const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
      let isNavbarExpanded =
        navbarToggle.getAttribute("aria-expanded") === "true";
      const toggleNavbarVisibility = () => {
        isNavbarExpanded = !isNavbarExpanded;
        navbarToggle.setAttribute("aria-expanded", isNavbarExpanded.toString());
      };
      if (isNavbarExpanded != null && navbarLinksContainer != null) {
        navbarToggle.addEventListener("click", toggleNavbarVisibility);

        // navbarLinksContainer.addEventListener("click", (e) => {

        //   e.stopPropagation();
        // });
        navbarMenu.addEventListener("click", toggleNavbarVisibility);
      }
    }

    let currentLanguage = document.getElementById(
      "language-options-container-current"
    );
    let listOptions = document.getElementById("language-options-area-id");
    if (currentLanguage != null) {
      let isLanguageOptionsOpen =
        currentLanguage.getAttribute("aria-expanded") === "true";
      const toggleLanguageOptions = () => {
        isLanguageOptionsOpen = !isLanguageOptionsOpen;
        currentLanguage?.setAttribute(
          "aria-expanded",
          isLanguageOptionsOpen.toString()
        );
        listOptions?.setAttribute(
          "aria-expanded",
          (!isLanguageOptionsOpen).toString()
        );
      };
      currentLanguage.addEventListener("click", toggleLanguageOptions);
      listOptions?.addEventListener("click", toggleLanguageOptions);
    }

    let currentLanguage2 = document.getElementById(
      "language-options-container-current-2"
    );
    let listOptions2 = document.getElementById("language-options-area-id-2");
    if (currentLanguage2 != null) {
      let isLanguageOptionsOpen2 =
        currentLanguage2.getAttribute("aria-expanded") === "true";
      const toggleLanguageOptions2 = () => {
        isLanguageOptionsOpen2 = !isLanguageOptionsOpen2;
        currentLanguage2?.setAttribute(
          "aria-expanded",
          isLanguageOptionsOpen2.toString()
        );
        listOptions2?.setAttribute(
          "aria-expanded",
          (!isLanguageOptionsOpen2).toString()
        );
      };
      currentLanguage2.addEventListener("click", toggleLanguageOptions2);
      listOptions2?.addEventListener("click", toggleLanguageOptions2);
    }

    const handleChangedLanguage = (newLocale: string) => {
      router.push({ pathname, query }, asPath, {
        locale: newLocale,
        scroll: false,
      });
    };
    let listChangedOptions = document.getElementsByClassName(
      "language-options-change"
    );
    for (let i = 0; i <= listChangedOptions.length; i++) {
      if (listChangedOptions[i] != null) {
        listChangedOptions[i].addEventListener("click", (e) => {
          e.preventDefault();
          let locale = listChangedOptions[i]
            .getAttribute("aria-label")
            ?.toString();
          if (locale != undefined) {
            handleChangedLanguage(locale);
          }
        });
      }
    }
  }, []);

  useEffect(() => {
    setCurrentLanguage(`${t!["headerLanguage"]}`);
  }, [t!["headerLanguage"]]);

  const handleChangedLanguage = (locale: string) => {
    router.push({ pathname, query }, asPath, {
      locale: locale,
      scroll: false,
    });
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    }
  };

  return (
    <nav className="navigation navbar-container container">
      <button
        type="button"
        id="navbar-toggle"
        aria-controls="navbar-menu"
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
        onClick={() => {
          if (!isLanguageMenuOpen) {
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }
        }}
      >
        <span className="icon-bar" />
        <span className="icon-bar" />
        <span className="icon-bar" />
      </button>
      <div
        id="navbar-menu"
        aria-labelledby="navbar-toggle"
        aria-expanded={isMobileMenuOpen}
      >
        <ul className="navbar-links">
          <li className="navbar-item">
            <Link href="/staff">{t!["headerAbout"]}</Link>
          </li>
          <li className="navbar-item language-options-container">
            <div
              id="language-options-container-current"
              aria-expanded={isLanguageMenuOpen}
              onClick={() => {
                setIsLanguageMenuOpen(!isLanguageMenuOpen);
              }}
            >
              {currentLanguage}
              <Image
                data-aos="flip-left"
                className="v-icon"
                src="/v-icon.svg"
                alt=""
                width="0"
                height="0"
                priority
              />
            </div>
            <div
              className="language-options-area"
              id="language-options-area-id"
              aria-expanded={!isLanguageMenuOpen}
              onClick={() => {
                setIsLanguageMenuOpen(!isLanguageMenuOpen);
              }}
            >
              <div>
                {currentLanguage}
                <img className="v-icon" src="/v-icon.svg" alt="" />
              </div>
              <div className="language-options">
                <div>
                  {languageList
                    .filter((item) => !(item.language == `${currentLanguage}`))
                    .map(({ id, language, locale }, index) => {
                      return (
                        <div
                          key={index}
                          className="language-options-change"
                          aria-label={locale}
                          onClick={() => {
                            handleChangedLanguage(locale);
                          }}
                        >
                          {language}
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </li>
          <li className="navbar-item">
            <Link href="/media">{t!["headerVideo"]}</Link>
          </li>
          <li className="navbar-item">
            <Link href="/service">{t!["headerContact"]}</Link>
          </li>
          <li className="navbar-item language-options-container language-options-responsive">
            <div
              id="language-options-container-current-2"
              aria-expanded={isLanguageMenuOpen}
              onClick={() => {
                setIsLanguageMenuOpen(!isLanguageMenuOpen);
              }}
            >
              {currentLanguage}
              <Image
                data-aos="flip-left"
                className="v-icon"
                src="/v-icon.svg"
                alt=""
                width="0"
                height="0"
                priority
              />
            </div>
            <div
              className="language-options-area"
              id="language-options-area-id-2"
              aria-expanded={!isLanguageMenuOpen}
              onClick={() => {
                setIsLanguageMenuOpen(!isLanguageMenuOpen);
              }}
            >
              <div>
                {currentLanguage}
                <Image
                  data-aos="flip-left"
                  className="v-icon"
                  src="/v-icon.svg"
                  alt=""
                  width="0"
                  height="0"
                  priority
                />
              </div>
              <div className="language-options">
                <div>
                  {languageList
                    .filter((item) => !(item.language == `${currentLanguage}`))
                    .map(({ id, language, locale }, index) => {
                      return (
                        <div
                          key={index}
                          className="language-options-change"
                          aria-label={locale}
                          onClick={() => {
                            handleChangedLanguage(locale);
                          }}
                        >
                          {language}
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
