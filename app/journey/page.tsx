import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function JourneyPage() {
  const t = await getTranslations("pages");

  return (
    <main className="px-4 py-10 sm:px-6 lg:px-8 lg:py-16" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <section className="rounded-[2rem] border border-neutral-200/80 bg-white/70 p-8 shadow-[0_12px_40px_rgba(23,23,23,0.04)] backdrop-blur sm:p-10 lg:p-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">{t("journey.eyebrow")}</p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight text-neutral-900 sm:text-5xl">
              {t("journey.title")}
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-600">{t("journey.intro")}</p>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded-[2rem] border border-neutral-200/80 bg-neutral-100">
            <Image
              src="/images/renovation.svg"
              alt={t("journey.renovationAlt")}
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-between gap-6 rounded-[2rem] border border-neutral-200/80 bg-[rgba(238,236,232,0.65)] p-8 sm:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">{t("journey.storyLabel")}</p>
              <p className="mt-4 text-lg leading-8 text-neutral-700">{t("journey.body")}</p>
            </div>

            <div className="space-y-4 rounded-[1.5rem] border border-neutral-200/80 bg-white/80 p-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">{t("journey.focusLabel")}</p>
                <p className="mt-2 text-base leading-8 text-neutral-700">{t("journey.focus")}</p>
              </div>
              <div className="h-px w-full bg-neutral-200" />
              <p className="text-base leading-8 text-neutral-700">{t("journey.closing")}</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
