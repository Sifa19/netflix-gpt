import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { addUser, removeUser } from "../../store/userSlice";
import signOutUser from "../../services/authSignOutService";
import { useEffect } from "react";
import auth from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Header() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            id: uid,
            email,
            name: displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, [dispatch, navigate]);

  return (
    <div
      className="absolute px-10 py-2 w-full
    bg-gradient-to-b from-black
    flex items-center-safe"
    >
      <img
        className="w-28 sm:w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <div
        className="ml-auto flex items-center gap-4 cursor-pointer
      text-gray-900 text-3xl"
      >
        {user?.id && (
          <>
            <div className="flex flex-col justify-center items-center mt-4">
              <FontAwesomeIcon icon={faUser} className="text-md" />
              <span className="text-xs">{user.name}</span>
            </div>
            <FontAwesomeIcon
              icon={faRightFromBracket}
              onClick={() => {
                signOutUser();
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
