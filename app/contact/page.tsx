import { getTranslations } from "next-intl/server";

export default async function ContactPage() {
  const t = await getTranslations("pages");

  const contactLinks = [
    {
      label: t("contact.links.viberLabel"),
      href: "tel:+359885393000",
      description: t("contact.links.viberDescription"),
    },
    {
      label: t("contact.links.emailLabel"),
      href: "mailto:dimitarpazvanski98@gmail.com",
      description: t("contact.links.emailDescription"),
    },
    {
      label: t("contact.links.phoneLabel"),
      href: "tel:+359885393000",
      description: t("contact.links.phoneDescription"),
    },
    {
      label: t("contact.links.facebookLabel"),
      href: "https://www.facebook.com/wellnesselegant/?locale=bg_BG",
      description: t("contact.links.facebookDescription"),
    },
  ];

  return (
    <main className="px-4 py-10 sm:px-6 lg:px-8 lg:py-16" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <section className="rounded-[2rem] border border-neutral-200/80 bg-white/70 p-8 shadow-[0_12px_40px_rgba(23,23,23,0.04)] backdrop-blur sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">{t("contact.eyebrow")}</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight text-neutral-900 sm:text-5xl">
            {t("contact.title")}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">{t("contact.intro")}</p>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-[1.5rem] border border-neutral-200/80 bg-[rgba(238,236,232,0.65)] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold text-neutral-900">{link.label}</p>
                  <p className="mt-2 text-sm leading-7 text-neutral-600">{link.description}</p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white  text-lg transition group-hover:border-neutral-300">
                  <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                                <path
                                    d="M3 10L10 3M10 3H4.5M10 3V8.5"
                                    stroke="#2D5C3E"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                </span>
              </div>
            </a>
          ))}
        </section>
      </div>
    </main>
  );
}
