import { Link } from "react-router";
import PropTypes from "prop-types";
import { ChevronRightIcon } from "./Icons";
import Text from "./Text";

const Paginations = ({ totalPages, currentPage, onPageChange, className }) => {

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <Text
      as="ul"
      className={`${className} pagination`}
    >

      <Text as="li">
        <Text as="span">page</Text>
      </Text>


      {pages.map((page) => (
        <Text as="li" key={page}>
          <Link
            to="#"
            onClick={(e) => {
              e.preventDefault();
              onPageChange(page);
            }}
            className={`${currentPage === page
                ? "bg-(--bg-primary) !text-(--text-white) !border-(--border-primary)"
                : ""
              }`}
          >
            {page}
          </Link>
        </Text>
      ))}

      <Text as="li">
        <Link
          to="#"
          onClick={(e) => {
            e.preventDefault();
            if (currentPage < totalPages) onPageChange(currentPage + 1);
          }}
        >
          <ChevronRightIcon />
        </Link>
      </Text>
    </Text>
  );
};


Paginations.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Paginations;
