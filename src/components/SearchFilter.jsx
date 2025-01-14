import PropTypes from "prop-types";
const SearchFilter = ({ search, setSearch, filter, setFilter }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row gap-4">
      <input
        type="text"
        placeholder="Search jobs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 px-4 py-2 border rounded"
      />
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="px-4 py-2 border rounded"
      >
        <option value="">All Departments</option>
        <option value="Engineering">Engineering</option>
        <option value="Product">Product</option>
        <option value="Design">Design</option>
      </select>
    </div>
  );
};

SearchFilter.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default SearchFilter;
