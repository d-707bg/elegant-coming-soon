"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const navLinks = [
    { labelKey: "home", href: "/" },
    { labelKey: "journey", href: "/journey" },
    { labelKey: "updates", href: "/updates" },
];

export default function Header() {
    const t = useTranslations("header");
    const locale = useLocale();
    const router = useRouter();

    const switchLocale = (nextLocale: string) => {
        document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000`;
        router.refresh();
    };

    return (
        <header className="w-full flex flex-col items-center">
            <div className="w-full flex justify-center px-4 pt-5 pb-4">
                <nav
                    className="flex items-center px-2 py-2 rounded-full"
                    style={{
                        background: "#EEECE8",
                        boxShadow: "0 0 0 1px rgba(0,0,0,0.06)",
                    }}
                >
                    <ul className="flex items-center">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="px-5 py-2 rounded-full text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-all duration-150"
                                    style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                                >
                                    {t(`nav.${link.labelKey}`)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="ml-4">
                    <Link
                        href="/contact"
                        className="flex items-center gap-2.5 pl-5 pr-2 py-2 rounded-full text-sm font-semibold text-white transition-all duration-150 hover:opacity-90 active:scale-95"
                        style={{
                            background: "#2D5C3E",
                            fontFamily: "var(--font-plus-jakarta-sans)",
                        }}
                    >
                        {t("nav.contact")}
                        <span
                            className="flex items-center justify-center w-7 h-7 rounded-full"
                            style={{ background: "#243F2C" }}
                        >
                            <svg
                                width="13"
                                height="13"
                                viewBox="0 0 13 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3 10L10 3M10 3H4.5M10 3V8.5"
                                    stroke="white"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                    </Link>
                </div>

                <div
                    className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium"
                    style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                >
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-neutral-500"
                    >
                        <circle cx="7.5" cy="7.5" r="6.25" stroke="currentColor" strokeWidth="1.1" />
                        <path
                            d="M7.5 1.25C7.5 1.25 5.25 4 5.25 7.5C5.25 11 7.5 13.75 7.5 13.75"
                            stroke="currentColor"
                            strokeWidth="1.1"
                        />
                        <path
                            d="M7.5 1.25C7.5 1.25 9.75 4 9.75 7.5C9.75 11 7.5 13.75 7.5 13.75"
                            stroke="currentColor"
                            strokeWidth="1.1"
                        />
                        <path d="M1.25 7.5H13.75" stroke="currentColor" strokeWidth="1.1" />
                    </svg>

                    <button
                        type="button"
                        onClick={() => switchLocale("en")}
                        className={`transition-colors cursor-pointer hover:text-neutral-900 ${locale === "en" ? "text-neutral-700" : "text-neutral-500"}`}
                    >
                        {t("languageSwitcher.english")}
                    </button>
                    <span className="text-neutral-400 text-xs">|</span>
                    <button
                        type="button"
                        onClick={() => switchLocale("bg")}
                        className={`transition-colors cursor-pointer hover:text-neutral-900 ${locale === "bg" ? "text-neutral-700" : "text-neutral-500"}`}
                    >
                        {t("languageSwitcher.bulgarian")}
                    </button>
                </div>
            </div>

            <div className="w-full h-px bg-neutral-200" />
        </header>
    );
}
