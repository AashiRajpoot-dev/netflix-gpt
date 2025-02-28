import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.s
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //sign in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        //sign out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-screen z-10 flex justify-between">
        <img
          className="w-50"
          src={LOGO}
        />
        {user && (
          <div className="flex p-2 items-center">
            <img src={user?.photoURL} className="w-12 h-12" />
            <button onClick={handleSignOut} className="text-xl text-white font-bold cursor-pointer">
              (Sign Out)
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
