"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const photos = [
    {
        src: "/images/pilates.svg",
        altKey: "alt.pilates",
        labelKey: "photos.pilates",
        icon: (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 2C7 2 4 4 4 7C4 7 5.5 6 7 6C8.5 6 10 7 10 7C10 4 7 2 7 2Z" fill="#2D5C3E"/>
                <path d="M7 6C5.5 6 4 7 4 7C4 10 7 12 7 12C7 12 10 10 10 7C10 7 8.5 6 7 6Z" fill="#4A8C5C"/>
            </svg>
        ),
        rotate: "-rotate-6",
        translate: "-translate-x-20 translate-y-4",
        zIndex: "z-10",
    },
    {
        src: "/images/outdoor-yoga.svg",
        altKey: "alt.yoga",
        labelKey: "photos.dailyCheckins",
        icon: (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1.5C7 1.5 3.5 4 3.5 7.5C3.5 9.5 5 11 7 12C9 11 10.5 9.5 10.5 7.5C10.5 4 7 1.5 7 1.5Z" fill="#2D5C3E"/>
                <circle cx="7" cy="7.5" r="1.5" fill="white"/>
            </svg>
        ),
        rotate: "rotate-0",
        translate: "translate-y-0",
        zIndex: "z-20",
    },
    {
        src: "/images/folk-dance.svg",
        altKey: "alt.dance",
        labelKey: null,
        icon: null,
        rotate: "rotate-6",
        translate: "translate-x-20 translate-y-4",
        zIndex: "z-10",
    },
];

export default function Hero() {
    const t = useTranslations("hero");

    return (
        <main
            className="flex flex-col items-center px-4 pt-14 text-center"
            style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
        >
            <h1
                className="text-5xl font-bold leading-tight tracking-tight text-neutral-900 md:text-6xl lg:text-7xl"
                style={{ letterSpacing: "-0.02em" }}
            >
                {t("headline")}
            </h1>

            <div className="mt-3 flex flex-wrap items-center justify-center gap-4">
                <span
                    className="inline-flex items-center gap-2 rounded-2xl px-7 py-3 text-5xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
                    style={{
                        background: "#2D5C3E",
                        letterSpacing: "-0.02em",
                    }}
                >
                    {t("badge")}
                    <span role="img" aria-label="plant">🌿</span>
                </span>

                <span
                    className="text-5xl font-semibold leading-tight text-neutral-900 md:text-6xl lg:text-7xl"
                    style={{ letterSpacing: "-0.02em" }}
                >
                    – {t("comingSoon")}
                </span>
            </div>

            <p className="mt-8 max-w-5xl text-lg leading-relaxed text-neutral-500 md:text-2xl">
                {t("subtitle")}
            </p>

            <div className="relative mt-16 flex h-[360px] w-full max-w-6xl items-center justify-center sm:h-[400px] md:h-[440px]">
                {photos.map((photo, i) => (
                    <div
                        key={i}
                        className={`
              absolute
              ${photo.rotate}
              ${photo.translate}
              ${photo.zIndex}
              w-[40%] sm:w-[38%] md:w-[31%]
              rounded-[2rem] border border-white/70 bg-white p-2 shadow-[0_24px_70px_rgba(23,23,23,0.12)]
              backdrop-blur-sm
            `}
                        style={{ height: "min(72vw, 320px)" }}
                    >
                        <div className="relative h-full overflow-hidden rounded-[1.5rem]">
                            {photo.labelKey && (
                                <div className="absolute left-3 top-3 z-10 flex items-center gap-1.5 rounded-full bg-white/85 px-3 py-1.5 text-xs font-semibold text-neutral-800 shadow-sm backdrop-blur">
                                    {photo.icon}
                                    {t(photo.labelKey)}
                                </div>
                            )}

                            <Image
                                src={photo.src}
                                alt={t(photo.altKey)}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 45vw, 33vw"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
