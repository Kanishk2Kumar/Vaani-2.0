import {caller} from "@/trpc/server";

const Page = async () => {
  const users = await caller.getUsers();
  return <div className="">Users Details: {JSON.stringify(users)}</div>;
}
export default Page;
