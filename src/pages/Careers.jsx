import { useState, useMemo } from "react";
import { useTable, useGlobalFilter } from "react-table";

const data = [
  {
    id: 1,
    title: "Software Engineer",
    location: "Jakarta",
    team: "Engineering",
  },
  { id: 2, title: "Product Manager", location: "Bangalore", team: "Product" },
  { id: 3, title: "Data Analyst", location: "Singapore", team: "Data" },
  { id: 4, title: "UX Designer", location: "Jakarta", team: "Design" },
  {
    id: 5,
    title: "Backend Engineer",
    location: "Bangalore",
    team: "Engineering",
  },
];

const columns = [
  { Header: "Job Title", accessor: "title" },
  { Header: "Location", accessor: "location" },
  { Header: "Team", accessor: "team" },
];

const Careers = () => {
  const [filterLocation, setFilterLocation] = useState("");
  const [globalFilter, setGlobalFilter] = useState("");
  const [showMap, setShowMap] = useState(false);

  const filteredData = useMemo(() => {
    return filterLocation
      ? data.filter((item) => item.location === filterLocation)
      : data;
  }, [filterLocation]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter: setTableGlobalFilter,
  } = useTable({ columns, data: filteredData }, useGlobalFilter);

  return (
    <div className="bg-gray-900">
      <div className="flex flex-col lg:flex-row items-center lg:pl-44 pt-24 px-4 sm:px-12">
        <img
          src="/images/careers.png"
          alt="Careers"
          className="w-[300px] sm:w-[400px] h-auto mb-4"
        />
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-4xl sm:text-6xl text-white font-bold">
            Hard to get into,
          </h1>
          <h1 className="text-4xl sm:text-6xl text-white font-bold">
            harder to leave.💚
          </h1>
        </div>
      </div>
      <div className="container pt-8 pb-6 px-12 md:pl-52">
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-6 gap-4">
          <input
            className="border rounded-md p-2 w-full sm:w-2/3 md:w-1/3 mb-4 md:mb-0"
            type="text"
            placeholder="Search roles..."
            value={globalFilter}
            onChange={(e) => {
              setGlobalFilter(e.target.value);
              setTableGlobalFilter(e.target.value);
            }}
          />

          <select
            className="border rounded-md p-2 w-full sm:w-2/3 md:w-1/4"
            value={filterLocation}
            onChange={(e) => setFilterLocation(e.target.value)}
          >
            <option value="">All Locations</option>
            {[...new Set(data.map((job) => job.location))].map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
        <h1 className="text-3xl font-bold text-left mb-4 text-white">
          Recent Open Positions
        </h1>

        <div className="overflow-x-auto">
          <table
            {...getTableProps()}
            className="table-auto w-full rounded-lg overflow-hidden bg-white shadow-lg"
          >
            <thead className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white">
              {headerGroups.map((headerGroup, headerIndex) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={headerIndex}>
                  {headerGroup.headers.map((column, columnIndex) => (
                    <th
                      {...column.getHeaderProps()}
                      key={columnIndex}
                      className="px-6 py-4 text-left text-sm font-semibold"
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody
              {...getTableBodyProps()}
              className="divide-y divide-gray-200"
            >
              {rows.length > 0 ? (
                rows.map((row, rowIndex) => {
                  prepareRow(row);
                  return (
                    <tr
                      {...row.getRowProps()}
                      key={rowIndex}
                      className="hover:bg-gray-100"
                    >
                      {row.cells.map((cell, cellIndex) => (
                        <td
                          {...cell.getCellProps()}
                          key={cellIndex}
                          className="px-6 py-4 text-sm"
                        >
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="text-center py-4 text-sm"
                  >
                    No roles found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex mt-12 items-center justify-center">
        <button
          className="bg-gray-700 text-white px-4 py-2 rounded-3xl hover:bg-gray-600 fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 shadow-lg"
          onClick={() => setShowMap(!showMap)}
        >
          {showMap ? "Hide Map" : "Show Map"}
        </button>
        {showMap && (
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d253816.01764648498!2d106.47302734834462!3d-6.280123461382273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgojek!5e0!3m2!1sen!2sid!4v1754319916591!5m2!1sen!2sid"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen="true"
            loading="lazy"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default Careers;
