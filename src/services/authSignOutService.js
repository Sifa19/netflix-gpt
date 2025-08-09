import { signOut } from "firebase/auth";
import auth from "../config/firebase";

const signOutUser = () => {
  signOut(auth)
    .then(() => {})
    .catch(() => {
      // An error happened.
    });
};

export default signOutUser;
