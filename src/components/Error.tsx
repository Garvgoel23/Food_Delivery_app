import type React = require("react");
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const Error = (): React.JSX.Element => {
  const err = useRouteError();

  let status = "Error";
  let statusText = "Something went wrong";

  if (isRouteErrorResponse(err)) {
    status = err.status.toString();
    statusText = err.statusText;
  }

  return (
    <div>
      <h1>Something went wrong</h1>
      <h2>
        {status}: {statusText}
      </h2>
    </div>
  );
};

export default Error;
