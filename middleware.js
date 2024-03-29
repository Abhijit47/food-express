import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: ["/", "/sign-up", "/sign-in"],
  // Routes that can always be accessed, and have
  // no authentication information
  ignoredRoutes: ["/sign-up", "/sign-in"],

  afterAuth(auth, req, evt) {
    // console.log(auth);
    // console.log(evt);
    // console.log(req);

    // Handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      console.log(auth.userId, auth.isPublicRoute);
      return redirectToSignIn({ returnBackUrl: req.url });
    }
    // If the user is logged in and trying to access a protected route, allow them to access route
    if (auth.userId && !auth.isPublicRoute) {
      // console.log(auth.userId);
      return NextResponse.next(JSON.stringify({ message: "No Authenticate" }));
    }

    // console.log("executed");

    // Allow users visiting public routes to access them
    return NextResponse.next(JSON.stringify({ message: "No Authenticate" }));
  },
});

export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
