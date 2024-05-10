export default async function UserDetailPage({ params }: { params: { id: string } }) {
    const userDetail = await fetch(`/api/users/${params.id}`);
    const data = await userDetail.json();
  return <p>User {params.id}</p>;
}
