import { getTranslations } from "next-intl/server";

export default async function PrivacyPage() {
  const t = await getTranslations("pages.privacy");

  return (
    <main className="mx-auto flex max-w-3xl flex-1 flex-col px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold text-neutral-900">{t("title")}</h1>
      <p className="mt-4 text-lg leading-8 text-neutral-600">{t("body")}</p>
    </main>
  );
}
