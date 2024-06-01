import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const [dbUser, setDbUserInfo] = useState();
  const { photoURL } = user;


  useEffect( () => {
    fetch(`http://localhost:5000/users/${user?.email}`)
    .then((res) => res.json())
    .then(data => setDbUserInfo(data));
  }, [user?.email])

console.log(dbUser)
  return (
    <div className="w-full px-16 mt-10">
      <h1 className="text-4xl mb-4 text-center">User Info</h1>

      <div className="flex justify-center mt-16">
        <div className="card w-96 bg-base-100 shadow-xl">
          {photoURL || dbUser?.photoUrl ? (
            <div className="avatar flex justify-center">
              <div className="w-48 rounded-full ring ring-rose-600 ring-offset-base-100 ring-offset-2">
                <img src={photoURL || dbUser?.photoUrl} />
              </div>
            </div>
          ) : (
            <div className="avatar flex justify-center">
            <div className="w-48 h-48 rounded-full ring ring-rose-600 ring-offset-base-100 ring-offset-2">
                <FaUser className="text-[192px]" />
            </div>
            </div>
          )}
          <div className="card-body text-center">
            <h2 className="text-xl">
              <span className="font-semibold">Name:</span> {dbUser?.name ? dbUser.name : "Not Found"}
            </h2>
            <p>
              <span className="font-semibold">Email:</span> {dbUser?.email ? dbUser.email : "Not Found"}
            </p>
            <p>
              <span className="font-semibold">Phone:</span>{" "}
              {dbUser?.phone ? dbUser.phone : "Not Found"}
            </p>
            <p>
              <span className="font-semibold">address:</span> {dbUser?.address ? dbUser.address : "Not Found"}
            </p>
        <Link to={`/dashboard/profile/edit/${dbUser?._id}`} className="btn btn-neutral mt-3">Edit Profile</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
