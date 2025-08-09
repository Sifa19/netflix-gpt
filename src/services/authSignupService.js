import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../config/firebase";

const signUpUser = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await updateProfile(user, { displayName: name });
    return {
      isValid: true,
      message: "SucessFull",
      user: { id: user.uid, email: user.email, name: user.displayName },
    };
  } catch (error) {
    if (error.message.includes("email-already-in-use"))
      return {
        isValid: false,
        message:
          "An account with this email already exists. Please try logging in or use a different email.",
      };
  }
};
export default signUpUser;
