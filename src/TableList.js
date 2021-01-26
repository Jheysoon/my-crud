const TableList = ({ list, setFormDetails }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          <td>Username</td>
          <td>Password</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {list.map((val, key) => (
          <tr key={key}>
            <td>{val.username}</td>
            <td>{val.password}</td>
            <td>
              <button
                onClick={() => {
                  setFormDetails(val);
                }}
              >
                Update
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableList;
