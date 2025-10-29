import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const MyPagination = ({ totalPages = 1, currentPage, setCurrentPage }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <Pagination className="justify-end">
      <PaginationContent >
        <PaginationItem >
          <PaginationPrevious
            href="#"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          />
        </PaginationItem>

        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href="#"
              isActive={page === currentPage}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
export default MyPagination;
