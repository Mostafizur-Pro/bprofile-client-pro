import PropTypes from "prop-types";
import { createContext, useState } from "react";
import auth from "../../../firebase.config";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect } from "react";
export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  console.log(user);
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // social login
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        console.log(currentUser);
      } else {
        // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
        setLoading(false);
        localStorage.removeItem("accessToken");
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const data = {
    loading,
    user,
    signInWithGoogle,
    setLoading,
    signOutUser,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserProvider;

UserProvider.propTypes = {
  children: PropTypes.node,
};
