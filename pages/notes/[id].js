/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
// import { useRouter } from "next/router";
import Link from "next/link";

const Note = ({ note }) => {
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>Show Note</h1>
      <h2>{note.title}</h2>
    </div>
  );
};

export default Note;

export async function getServerSideProps({ params, req, res }) {
  const response = await fetch(`http://localhost:3000/api/notes/${params.id}`);

  // so much power!
  if (!response.ok) {
    res.writeHead(302, { Location: "/notes" });
    res.end();
    return { props: {} };
  }

  const { data } = await response.json();

  if (data) {
    return {
      props: { note: data },
    };
  }
}
