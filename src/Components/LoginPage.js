import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { loginUser } from "./ReduxState/ReduxState";
import { logoutUser } from "./ReduxState/ReduxState";

const LoginPage = () => {
  const dispatch = useDispatch();

  return (
    <Box>
      <button
        onClick={() => {
          dispatch(
            loginUser({
              UserName: "Favour",
              Age: "18",
              Email: "Favour@gmail.com",
              Stack: "Full stack",
            })
          );
        }}
      >
        login
      </button>
      <button
        onClick={() => {
          dispatch(logoutUser());
        }}
      >
        logout
      </button>
    </Box>
  );
};

export default LoginPage;

const Box = styled.div`
  button {
    cursor: pointer;
  }
  //
`;

// import React from "react";
// import { loginUser, logoutUser } from "./ReduxState/ReduxState";
// import styled from "styled-components";
// import { useDispatch } from "react-redux";
// const LoginPage = () => {
//   const dispatch = useDispatch();

//   return (
//     <Box>
//       <button
//         onClick={() => {
//           dispatch(
//             loginUser({
//               UserName: " Love",
//               Age: 23,
//               Email: "love@gmail.com",
//               Stack: "MERN",
//             })
//           );
//         }}
//       >
//         login
//       </button>
//       <button
//         onClick={() => {
//           dispatch(logoutUser());
//         }}
//       >
//         logout
//       </button>
//     </Box>
//   );
// };

// export default LoginPage;

// const Box = styled.div`
//   button {
//     cursor: pointer;
//   }
// `;
