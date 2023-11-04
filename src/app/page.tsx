import { Suspense } from "react";
import { SearchData } from "./search-data";
import SearchInput from "./search-input";
import Notes from "./notes";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const q = searchParams?.["q"] || "";
  return (
    <div className="space-y-6">
      <p>Start typing in the input field below</p>
      <SearchInput q={q} />
      {q ? ( // add key here so fallback will be shown everytime data is being fetched
        <Suspense key={q} fallback={<p>Searching ...</p>}>
          <SearchData q={q} />
        </Suspense>
      ) : null}
      <Notes />
    </div>
  );
}
