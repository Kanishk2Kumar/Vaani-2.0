"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

export const ClientComponent = () => {
  const trpc = useTRPC();
  const { data: users } = useSuspenseQuery(
    trpc.getUsers.queryOptions()
  );
    return <div className="">Users Details: {JSON.stringify(users)}</div>;
};
