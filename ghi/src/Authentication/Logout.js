import { useToken } from "./AuthenticateUser";
import { redirect } from "react-router-dom";

// export default function Logout() {
//   const [, , logout] = useToken();

//   const handleClick = async (e) => {
//     e.preventDefault();
//     logout();
//   };
// }

function Logout() {
  const [token, , logout] = useToken();
  logout(token);
  return redirect("/");
}

export default Logout;
