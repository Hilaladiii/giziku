import MenuTable from "@/components/MenuTable";
import Search from "@/components/Search";
import Pagination from "@/components/Pagination";
import { getMenuPages } from "@/lib/DBService/dbMenu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu List",
  description: "A list of available menu options to create your menu.",
  keywords: ["menu", "list", "options"],
};
export default async function MenuPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currPage = Number(searchParams?.page) || 1;
  const totalPagesMenu = await getMenuPages(query);

  return (
    <div className="w-full flex flex-col p-10">
      <div className="flex flex-row items-center gap-5">
        <h1 className="font-semibold text-md">Find Spesific Composition</h1>
        <Search />
      </div>
      <MenuTable query={query} page={currPage} />
      <div className="flex mx-auto">
        <Pagination totalPages={Number(totalPagesMenu)} />
      </div>
    </div>
  );
}
