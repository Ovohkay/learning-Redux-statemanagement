// import React from "react";
// import { useSelector } from "react-redux";

// const Profile = () => {
//   const user = useSelector((state) => state.reducerState.current);

//   return (
//     <div>
//       <div>
//         <h2>User</h2>
//         <div>UserName:{user?.UserName} </div>
//         <div>Age: {user?.Age} </div>
//         <div>Email: {user?.Email} </div>
//         <div>Stack: {user?.Stack}</div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.myReducer.current);

  return (
    <div>
      <div>
        <h2>User</h2>
        <div>UserName: {user?.UserName}</div>
        <div> Age: {user?.Age} </div>
        <div> Emali : {user?.Email}</div>
        <div> Stack : {user?.Stack}</div>
      </div>
    </div>
  );
};

export default Profile;
