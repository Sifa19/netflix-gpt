import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../config/firebase";

const signUpUser = async (name, email, password) => {
  const res = createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      updateProfile(user, {
        displayName: name,
      });
      return { isValid: true, message: "SucessFull" };
    })
    .catch((error) => {
      if (error.message.includes("email-already-in-use"))
        return {
          isValid: false,
          message:
            "An account with this email already exists. Please try logging in or use a different email.",
        };
    });

  return res;
};
export default signUpUser;
