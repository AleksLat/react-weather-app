import React from "react";

import "./FormInfoSubmit.css";

export default function FormInfoSubmit() {
  return (
    <div className="col-3">
      <input
        type="submit"
        id="submit-info"
        value="🔍"
        className="form-control"
      />
    </div>
  );
}
