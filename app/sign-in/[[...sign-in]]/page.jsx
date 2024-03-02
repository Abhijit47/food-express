import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="grid h-screen place-items-center py-6">
      <SignIn afterSignInUrl="/" signUpUrl="/sign-up" redirectUrl="/" />
    </div>
  );
}
