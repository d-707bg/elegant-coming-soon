"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Hero() {
    const t = useTranslations("hero");

    return (
        <main
            className="flex flex-col items-center px-4 pb-16 pt-14 text-center"
            style={{fontFamily: "var(--font-plus-jakarta-sans)"}}
        >
            <h1
                className="text-4xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-5xl md:text-6xl lg:text-7xl"
                style={{letterSpacing: "-0.02em"}}
            >
                {t("headline")}
            </h1>

            <div className="mt-5 flex flex-col items-center justify-center gap-4 sm:mt-3 sm:flex-row sm:flex-wrap">
                <span
                    className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-3xl font-bold leading-tight text-white sm:px-7 sm:text-5xl lg:text-6xl"
                    style={{
                        background: "#2D5C3E",
                        letterSpacing: "-0.02em",
                    }}
                >
                    {t("badge")}
                    <span role="img" aria-label="plant">🌿</span>
                </span>

                <span
                    className="text-3xl font-semibold leading-tight text-neutral-900 sm:text-5xl md:text-6xl lg:text-7xl"
                    style={{letterSpacing: "-0.02em"}}
                >
                    – {t("comingSoon")}
                </span>
            </div>

            <p className="mt-8 max-w-5xl text-base leading-relaxed text-neutral-500 sm:text-lg md:text-2xl">
                {t("subtitle")}
            </p>

            {/*<div className="relative my-16 h-[360px] w-full max-w-3xl overflow-hidden rounded-3xl sm:h-[400px] md:h-[440px]">*/}
            {/*    <Image src="/stock-elegant.jpeg" alt="Elegant Wellness Center - Stock Image" width={800} height={450} className="h-full w-full object-cover" />*/}
            {/*</div>*/}

            <div>
                <div className='relative isolate'>
                    <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                        <div className='my-12 flow-root sm:my-16'>
                            <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                                <div className='relative h-[240px] w-full overflow-hidden rounded-md shadow-2xl ring-1 ring-gray-900/10 sm:h-[360px] md:h-[440px]'>
                                    <Image
                                        src='/stock-elegant.jpeg'
                                        alt='Elegant Wellness Center - Stock Image'
                                        width={1080}
                                        height={1350}
                                        sizes='(max-width: 768px) 100vw, 80vw'
                                        className='h-full w-150 object-cover'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
