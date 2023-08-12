import GitHub from "@mui/icons-material/GitHub";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Google from "@mui/icons-material/Google";
import { signIn } from "next-auth/react";
export function CreateAccount() {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Sign in</CardTitle>
        <CardDescription>
          Use either of the methods to sign in to your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-6">
          <Button variant="outline" onClick={() => signIn("github")}>
            <GitHub className="mr-2 h-4 w-4" />
            Github
          </Button>
          <Button variant="outline" onClick={() => signIn("google")}>
            <Google className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
