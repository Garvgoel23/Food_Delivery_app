// import { useEffect, useState } from "react";

// const useOnlineStatus = () => {
//   const [onlineStatus, setonlineStatus] = useState(true);

//   useEffect(() => {
//     window.addEventListener("offline", () => {
//       setonlineStatus(false);
//     });
//     window.addEventListener("online", () => {
//       setonlineStatus(true);
//     });
//   }, []);

//   return onlineStatus;
// };
// export default useOnlineStatus;
import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
