import prisma from "@/lib/db";

const Page = async () => {
  const users = await prisma.user.findMany();
  return <div className="">Users count: {users.length}</div>;
}
export default Page;
