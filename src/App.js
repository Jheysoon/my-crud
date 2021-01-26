import { useState } from "react";

import FormComponent from "./FormComponent";
import TableList from "./TableList";
import FormEdit from "./FormEdit";

function App() {
  // collect all the inserted items in the form and store it to list variable
  const [list, setList] = useState([]);

  const [details, setDetails] = useState({});

  const [hasDetail, setHasDetail] = useState(false);

  return (
    <>
      <FormComponent
        addRecord={(record) => {
          const _list = [];

          for (let i = 0; i < list.length; i++) {
            _list.push(list[i]);
          }

          _list.push(record);

          setList(_list);
        }}
      />
      <br /> <br />
      <TableList
        list={list}
        setFormDetails={(record) => {
          setDetails(record);
          setHasDetail(true);
        }}
      />
      <br /> <br />
      {hasDetail && <FormEdit details={details} />}
    </>
  );
}

export default App;
