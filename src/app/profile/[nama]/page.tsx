import RootLayout from "../../layout";

export default function NamaPage({ params }: { params: { nama: string } }) {
  const { nama } = params;

  return (
    <RootLayout>
      <div>
        <h1>Profile: {nama}</h1>
      </div>
    </RootLayout>
  );
}
