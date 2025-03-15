import RootLayout from "../../layout";

export default function ProjectPage({ params }: { params: { project: string } }) {
  const { project } = params;

  return (
      <div>
        <h1>Project: {project}</h1>
      </div>
  );
}
