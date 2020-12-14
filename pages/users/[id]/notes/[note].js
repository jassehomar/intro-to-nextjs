import React from "react";
import { useRouter } from "next/router";

const UserNote = () => {
  const router = useRouter();
  const { id, note } = router.query;
  return (
    <div>
      User {id} Note {note}
    </div>
  );
};

export default UserNote;
