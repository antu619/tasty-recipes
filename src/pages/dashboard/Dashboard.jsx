import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";
import { FaUser } from "react-icons/fa";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const { displayName, email, phoneNumber, photoURL, uid } = user;
  return (
    <div className="w-full px-16 mt-10">
      <h1 className="text-4xl mb-4 text-center">User Info</h1>

      <div className="flex justify-center mt-16">
        <div className="card w-96 bg-base-100 shadow-xl">
          {photoURL ? (
            <div className="avatar flex justify-center">
              <div className="w-48 rounded-full ring ring-rose-600 ring-offset-base-100 ring-offset-2">
                <img src={photoURL} />
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
              <span className="font-semibold">Name:</span> {displayName ? displayName : "Not Found"}
            </h2>
            <p>
              <span className="font-semibold">Email:</span> {email ? email : "Not Found"}
            </p>
            <p>
              <span className="font-semibold">Phone:</span>{" "}
              {phoneNumber ? phoneNumber : "Not Found"}
            </p>
            <p>
              <span className="font-semibold">Uid:</span> {uid}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
