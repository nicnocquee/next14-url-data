"use client";

import { usePathname, useRouter } from "next/navigation";

const SearchInput = ({ q }: { q?: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <input
      type="text"
      name="q"
      defaultValue={q}
      placeholder="Search something ..."
      onChange={(e) => {
        router.push(`${pathname}?q=${e.currentTarget.value}`);
      }}
    />
  );
};

export default SearchInput;
