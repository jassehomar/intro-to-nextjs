import React from "react";
import { useRouter } from "next/router";

const NotesAll = () => {
  const router = useRouter();
  console.log(router);
  const { param } = router.query;
  console.log("param", param);
  return <div>Catch all routes page 2</div>;
};
export default NotesAll;
