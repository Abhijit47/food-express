import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="grid h-screen place-items-center py-6">
      <SignUp afterSignUpUrl="/" signInUrl="/sign-in" redirectUrl="/" />
    </div>
  );
}
