import { useState } from "react";

function LoginForm() {
  const [isSignIn, setIsSignIn] = useState(true);
  const handleSignInToggle = (e) => {
    e.preventDefault();
    setIsSignIn((s) => !s);
  };
  return (
    <form
      className="bg-stone-950/90 text-white
      text-sm sm:text-md
    flex flex-col justify-center gap-6
    sm:w-[50%] px-10 py-8 sm:px-20 sm:py-16"
    >
      <h3 className="text-xl font-bold sm:text-2xl">
        {isSignIn ? "Sign In" : "Sign Up"}
      </h3>
      {!isSignIn && (
        <input
          type="text"
          placeholder="Name "
          className="px-2 py-1 m-1 sm:p-2 sm:m-2 
        bg-stone-800 
        placeholder:text-stone-400"
        />
      )}
      <input
        type="text"
        placeholder="Email Address"
        className="px-2 py-1 m-1 sm:p-2 sm:m-2 
        bg-stone-800 
        placeholder:text-stone-400"
      />
      <input
        type="password"
        placeholder="Password"
        className="px-2 py-1 m-1 sm:p-2 sm:m-2 
        bg-stone-800 
        placeholder:text-stone-400"
      />
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

export default LoginForm;
