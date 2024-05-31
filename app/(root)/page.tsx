import UserList from "@/components/users";

export default function Home() {
  return (
    <main className="min-h-screens flex flex-col items-center justify-between p-24">
      <UserList />
    </main>
  );
}
