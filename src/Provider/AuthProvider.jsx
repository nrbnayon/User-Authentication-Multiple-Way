import { createContext } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const authInfo = { name: "ABCDEF" };
  return (
    <AuthContext value={authInfo}>
      {children}
      <div>Hi</div>
    </AuthContext>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;

// Step 1 for context provider and export
// {
//   /* Step 2 set Provider With value  */
// }
// {
//   /* Step 3 Use the Auth Provider in the main.jsx file  */
// }
// {
//   /* Step 4 Access children in the AuthProvider component as children and use it in to the middle of the provider  */
// }
