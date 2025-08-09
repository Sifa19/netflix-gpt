import { useRef, useState } from "react";
import { validateEmail, validatePassword } from "../../utils/formValidation";
import signUpUser from "../../services/authSignupService";
import signInUser from "../../services/authSignInService";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/userSlice";

function AuthenticationForm() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMsg, setErrMsg] = useState(null);

  const userNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const dispatch = useDispatch();

  const handleSignInToggle = (e) => {
    e.preventDefault();
    setIsSignIn((s) => !s);
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();

    const userName = userNameRef?.current?.value;
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;
    const isValidEmail = validateEmail(email);
    const isValidPassword = validatePassword(password);

    if (!isSignIn && userName.trim() === "") {
      setErrMsg([{ isValid: false, errMessage: "Enter Your Name" }]);
    }
    if (!isValidEmail.isValid) {
      setErrMsg([isValidEmail]);
      return;
    }
    if (!isValidPassword.isValid && !isSignIn) {
      setErrMsg(isValidPassword.errors);
      return;
    }

    setErrMsg(null); // No validation errors

    let res;
    if (isSignIn) {
      res = await signInUser(email, password);
    } else {
      res = await signUpUser(userName, email, password);
    }

    setErrMsg([res]);
    if (res.isValid) {
      dispatch(addUser({ id: res.user.id, email, name: res.user.name }));
    }
  };

  return (
    <form
      onSubmit={handleFormSubmission}
      className="bg-stone-950/90 text-white
      text-sm sm:text-md
    flex flex-col justify-center
    sm:w-[50%] px-10 py-8 sm:px-20 sm:py-16"
    >
      <h3 className="text-xl font-bold sm:text-2xl mb-4">
        {isSignIn ? "Sign In" : "Sign Up"}
      </h3>
      {!isSignIn && (
        <input
          ref={userNameRef}
          type="text"
          placeholder="Name "
          className="px-2 py-1 m-1 sm:p-2 sm:m-2 
        bg-stone-800 
        placeholder:text-stone-400"
        />
      )}
      <input
        ref={emailRef}
        type="text"
        placeholder="Email Address"
        className="px-2 py-1 m-1 sm:p-2 sm:m-2 
        bg-stone-800 
        placeholder:text-stone-400"
      />
      <input
        ref={passwordRef}
        type="password"
        placeholder="Password"
        className="px-2 py-1 m-1 sm:p-2 sm:m-2 
        bg-stone-800 
        placeholder:text-stone-400"
      />
      {errMsg && (
        <div className="px-2 sm:px-2 ">
          {errMsg.map((obj, index) => {
            return (
              <p
                key={index}
                className={`${obj.isValid ? "text-green-300" : "text-red-300"}`}
              >
                {obj.message}
              </p>
            );
          })}
        </div>
      )}

      <div className="p-1 m-1">
        <button
          className="w-full py-2 mb-1
        bg-red-600 cursor-pointer"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        {isSignIn && (
          <span className="flex gap-2 text-xs text-stone-400">
            <input type="checkbox" />
            Rember Me
          </span>
        )}
      </div>
      <span>
        {isSignIn ? " New to Netflix? " : "Already Registered? "}
        <button className="cursor-pointer" onClick={handleSignInToggle}>
          {isSignIn ? "Sign Up Now" : "Sign In Now"}
        </button>
      </span>
    </form>
  );
}

export default AuthenticationForm;
