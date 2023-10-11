import getAllUser from "@/services/getAllUsers";
import Link from "next/link";

export const metadata = {
  title: "user Page",
  description: "Generated by create next app",
};

export default async function UserPage() {
  const userData = getAllUser();
  const user = await userData;
  return (
    <section>
      <ul>
        {user.map((val, ind) => (
          <li key={`${val.id}`}>
            <Link href={`user/${val.id}`}>{val.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}