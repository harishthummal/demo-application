import React, { useState } from "react";
import Hoc from "../Hoc";

function Users() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Open modal</button>
      {/* <modal isOpen={modalIsOpen}>
        <h2>Modal title</h2>
        <p>modal Body</p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </modal> */}
    </div>
  );
}

export default Hoc(Users);
