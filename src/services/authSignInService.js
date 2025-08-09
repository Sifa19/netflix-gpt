import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../config/firebase";
const signInUser = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return {
        isValid: true,
        message: "Sucessfull",
        user: { id: user.uid, email: user.email, name: user.displayName },
      };
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
