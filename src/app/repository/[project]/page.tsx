import RootLayout from "../../layout";

export default async function ProjectPage({ params }: { params: { project: string } }) {
  const { project } = await params;

  return (
      <div>
        <h1>Project: {project}</h1>
      </div>
  );
}
