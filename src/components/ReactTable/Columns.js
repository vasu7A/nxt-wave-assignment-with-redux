export const COLUMNS = [
  {
    accessor: "id",
    Cell: (e) => (
      <input
        type="checkbox"
        style={{ height: "16px", width: "16px", border: "2px #D7DFE9" }}
      />
    ),
  },
  {
    Header: "title",
    accessor: "title",
  },
  {
    Header: "description",
    accessor: "description",
  },
  {
    Header: "link",
    accessor: "link",
    Cell: (e) => (
      <a
        href={e.value}
        target="_blank"
        style={{ color: "#0B69FF", fontWeight: "bold" }}
        rel="noreferrer"
      >
        {" "}
        {e.value}{" "}
      </a>
    ),
  },
];
