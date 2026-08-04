"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

const footerLinks = [
    { labelKey: "privacy", href: "/privacy" },
    { labelKey: "terms", href: "/terms" },
    { labelKey: "contact", href: "/contact" },
];

export default function Footer() {
    const t = useTranslations("footer");

    return (
        <footer
            className="mt-auto w-full border-t border-neutral-200/80 bg-[rgba(238,236,232,0.75)] px-4 py-6 sm:px-6 lg:px-8"
            style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
        >
            <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-800">
                        {t("brand")}
                    </p>
                    <p className="text-sm text-neutral-500">{t("description")}</p>
                </div>

                <nav className="flex flex-wrap items-center gap-2 sm:gap-4">
                    {footerLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="rounded-full px-3 py-1.5 text-sm font-medium text-neutral-600 transition-all duration-150 hover:bg-white/70 hover:text-neutral-900"
                        >
                            {t(`links.${link.labelKey}`)}
                        </Link>
                    ))}
                </nav>
            </div>
        </footer>
    );
}
