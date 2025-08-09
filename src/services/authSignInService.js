import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../config/firebase";
const signInUser = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      return { isValid: true, message: "Sucessfull" };
    })
    .catch((error) => {
      if (error.message.includes("invalid-credential"))
        return {
          isValid: false,
          message: "Invalid credentials",
        };
    });
};

export default signInUser;
