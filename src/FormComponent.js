import { useState } from "react";

const FormComponent = ({ addRecord }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
          const state = {
            username: username,
            password: password,
          };

          addRecord(state);

          setTimeout(() => {
            setUsername("");
            setPassword("");
          }, 100);
        }}
      >
        Add to List
      </button>
    </form>
  );
};

export default FormComponent;
