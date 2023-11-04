import { Suspense } from "react";
import { SearchData } from "./search-data";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const q = searchParams?.["q"] || "";
  return (
    <div className="space-y-6">
      <p>Start typing in the input field below</p>
      <input
        type="text"
        name="q"
        defaultValue={q}
        placeholder="Search something ..."
      />
      {q ? (
        <Suspense fallback={<p>Searching ...</p>}>
          <SearchData q={q} />
        </Suspense>
      ) : null}
      <Notes />
    </div>
  );
}
const Notes = () => {
  return (
    <div>
      <p>
        This is demo of using{" "}
        <a target="_blank" href="https://nextjs.org" rel="noreferrer">
          Next.js 14
        </a>
        . When you type something in the input field, the URL will have
        additional search params <span>q</span>. Then a fake result will be
        fetched from the server and displayed. While waiting for the result, the
        text &quot;Searching ...&quot; will be shown. You can keep on typing and
        the when you stop the result will be shown.
      </p>
      <p>
        If you visit the website directly with search params, for example,{" "}
        <a href="https://remix-v2-livid.vercel.app?q=hello">
          https://remix-v2-livid.vercel.app?q=hello
        </a>
        , the fake result will be streamed from the server. While waiting for
        data, the text &quot;Searching ...&quot; will be shown.
      </p>
      <p>
        <a
          href="https://github.com/nicnocquee/remix-v2"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Repo
        </a>
      </p>
    </div>
  );
};
