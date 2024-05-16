// //SYNTAX 1
// import React, { useEffect, useState } from "react";
// function Github() {
//   const [data, setData] = useState({});
//   useEffect(() => {
//     fetch("https://api.github.com/users/VickypediaSingh")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

//   return (
//     <div className="text-center m-4 text-white text-2xl bg-gray-600 p-4">
//       Real Name: {data.name}
//       <br />
//       Github UserName: {data.login}
//       <br />
//       Github Followers: {data.followers}
//       <br />
//       Github Followings: {data.following}
//       <br /> <br />
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <img src={data.avatar_url} alt="Git DP" width={300} />
//       </div>
//     </div>
//   );
// }
// // now loader is not reqd in router
// export default Github;

//SYNTAX 2 using loader, optimisation using cache
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  return (
    <div className="text-center m-4 text-white text-2xl bg-gray-600 p-4">
      Real Name: {data?.name}
      <br />
      Github UserName: {data?.login}
      <br />
      Github Followers: {data?.followers}
      <br />
      Github Followings: {data?.following}
      <br /> <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={data?.avatar_url} alt="Git DP" width={300} />
      </div>
    </div>
  );
}

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/VickypediaSingh");
  return response.json();
};

export default Github;
