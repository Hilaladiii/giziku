import MenuTable from "@/components/MenuTable";
import Search from "@/components/Search";
import Pagination from "@/components/Pagination";
import { getMenuPages } from "@/lib/DBService/dbMenu";

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
      <Search />
      <MenuTable query={query} page={currPage} />
      <div className="flex mx-auto">
        <Pagination totalPages={Number(totalPagesMenu)} />
      </div>
    </div>
  );
}
