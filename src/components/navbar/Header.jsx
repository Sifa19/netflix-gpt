import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { addUser, removeUser } from "../../store/userSlice";
import signOutUser from "../../services/authSignOutService";
import { useEffect } from "react";
import auth from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { LOGO_URL } from "../../utils/constants";

function Header() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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

    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div
      className="absolute px-10 py-2 w-full
    bg-gradient-to-b from-black
    flex items-center-safe"
    >
      <img className="w-28 sm:w-44" src={LOGO_URL} alt="logo" />
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
