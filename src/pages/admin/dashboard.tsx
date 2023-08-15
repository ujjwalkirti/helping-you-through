import { CreateAccount } from "@/components/Admin/CreateAccount";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";

function AdminDashboard() {
  const [isAllowed, setIsAllowed] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      axios
        .post("/api/check-auth-status", {
          email: session?.user?.email,
        })
        .then((response) => {
          if (response.status === 200) {
            setIsAllowed(true);
          }
        })
        .catch((err) => {});
    }
  }, [session]);

  return (
    <div className="min-h-screen flex items-center justify-center px-2">
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      {isAllowed ? (
        <div className="">you are authorisssssed to access this page</div>
      ) : (
        <div className="w-full flex flex-col items-center gap-7">
          {session ? (
            <div>
              You are not authorised to access this page, use some other
              account!
            </div>
          ) : (
            <div></div>
          )}
          <div className="w-full md:w-1/3 lg:w-1/4 mx-auto">
            <CreateAccount />
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
