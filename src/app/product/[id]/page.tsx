export default function Product({
  params: { id },
}: {
  params: { id: string };
}) {
  return <div>{id}</div>;
}
