"use client";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();
  const pathname = usePathname();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    const newPathname = pathname.replace(`/${localeActive}`, `/${nextLocale}`);

    startTransition(() => {
      router.replace(newPathname);
    });
  };

  return (
    <label className="border rounded border-green-300 ">
      <select
        defaultValue={localeActive}
        className="bg-transparent py-2"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </label>
  );
}

export default LocalSwitcher;
