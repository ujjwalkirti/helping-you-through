import { CreateAccount } from "@/components/Admin/CreateAccount";
import axios from "axios";
import Head from "next/head";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

async function AdminDashboard() {
  const { data: session } = useSession();

  if (session?.user) {
    (await checkAuthStatus(session?.user.email || "")) === 200 ? (
      <div>you are authorised to access this page</div>
    ) : (
      <div>
        <p>You are not authorised to access this page</p>
        <Button onClick={() => signOut()}>Sign out</Button>
      </div>
    );
  } else {
    return (
      <div className="min-h-screen flex items-center justify-center px-2">
        <Head>
          <title>Admin Dashboard</title>
        </Head>
        <div className="w-full md:w-1/3 lg:w-1/4 mx-auto">
          <CreateAccount />
        </div>
      </div>
    );
  }
}

async function checkAuthStatus(email: string): Promise<number> {
  return axios
    .post("/api/check-auth-status", {
      email,
    })
    .then((res) => res.status)
    .catch((err) => err.status);
}

export default AdminDashboard;
