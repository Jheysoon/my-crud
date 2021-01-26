import { useEffect, useState } from "react";

const FormEdit = ({ details }) => {
  const [username, setUsername] = useState(details.username);
  const [password, setPassword] = useState(details.password);

  useEffect(() => {
    setUsername(details.username);
    setPassword(details.password);
  }, [details.username, details.password]);

  return (
    <form>
      <label>Username</label>
      <input
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />

      <label>Password</label>
      <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <button
        type="button"
        onClick={() => {
          // Update record here
        }}
      >
        Update Record
      </button>
    </form>
  );
};

export default FormEdit;
