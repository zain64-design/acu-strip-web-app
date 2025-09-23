import { Pagination } from "flowbite-react";

const Paginations = ({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}) => {
  return (
    <div className={`flex overflow-x-auto sm:justify-center ${className}`}>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default Paginations;