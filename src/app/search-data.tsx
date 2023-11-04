import { faker } from "@faker-js/faker";
import { sleepRandom } from "./util";

export const SearchData = async ({ q }: { q: string }) => {
  const data = await getData();
  return (
    <div>
      <p>
        <strong>{q}</strong>: {data}
      </p>
    </div>
  );
};

const getData = async () => {
  await sleepRandom(); // wait for up to 5 seconds to fake long process
  return faker.lorem.paragraph();
};
