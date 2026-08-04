import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function UpdatesPage() {
  const t = await getTranslations("pages");

  const updates = [
    {
      title: t("updates.items.0.title"),
      date: t("updates.items.0.date"),
      category: t("updates.items.0.category"),
      text: t("updates.items.0.text"),
      image: "/images/updates.svg",
    },
    {
      title: t("updates.items.1.title"),
      date: t("updates.items.1.date"),
      category: t("updates.items.1.category"),
      text: t("updates.items.1.text"),
    },
    {
      title: t("updates.items.2.title"),
      date: t("updates.items.2.date"),
      category: t("updates.items.2.category"),
      text: t("updates.items.2.text"),
    },
  ];

  return (
    <main className="px-4 py-10 sm:px-6 lg:px-8 lg:py-16" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <section className="rounded-[2rem] border border-neutral-200/80 bg-white/70 p-8 shadow-[0_12px_40px_rgba(23,23,23,0.04)] backdrop-blur sm:p-10 lg:p-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">{t("updates.eyebrow")}</p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight text-neutral-900 sm:text-5xl">
              {t("updates.title")}
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-600">{t("updates.intro")}</p>
          </div>
        </section>

        <section className="space-y-4">
          {updates.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-[1.75rem] border border-neutral-200/80 bg-white/80 shadow-[0_10px_35px_rgba(23,23,23,0.03)]">
              <div className="flex flex-col gap-6 p-6 md:flex-row md:items-start md:justify-between md:p-8">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">{item.date}</p>
                    {item.category ? (
                      <span className="rounded-full border border-neutral-200 bg-[rgba(238,236,232,0.7)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-neutral-600">
                        {item.category}
                      </span>
                    ) : null}
                  </div>
                  <h2 className="mt-3 text-2xl font-semibold text-neutral-900">{item.title}</h2>
                  <p className="mt-3 text-base leading-8 text-neutral-700">{item.text}</p>
                </div>

                {item.image ? (
                  <div className="w-full shrink-0 overflow-hidden rounded-[1.25rem] border border-neutral-200/80 bg-neutral-100 md:w-56">
                    <Image src={item.image} alt={item.title} width={600} height={450} className="h-40 w-full object-cover" />
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
