import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: async ({ req, token }) => {
      const pathname = req.url;
      console.log("Tolkien", token);
      const regex = /http:\/\/localhost:3000\/signup\/verify\?.*/;
      const regexHome = /http:\/\/localhost:3000\/home\?.*/;

      if (token) return true;
      if (regex.test(pathname)) return true;
      if (regexHome.test(pathname)) return true;
      if (pathname === "http://localhost:3000/") return true;
      if (pathname === "http://localhost:3000/signin") return true;
      if (pathname === "http://localhost:3000/signup") return true;
      if (pathname === "http://localhost:3000/signup/email") return true;
      if (pathname === "http://localhost:3000/signup/verify") return true;
      if (pathname === "http://localhost:3000/api/signin") return true;
      if (pathname === "http://localhost:3000/api/signup") return true;
      if (pathname === "http://localhost:3000/api/confirm_signup") return true;
      if (pathname === "http://localhost:3000/api/confirm_signup/resend_code")
        return true;
      if (pathname === "http://localhost:3000/api/verify_token") return true;
      if (pathname === "http://localhost:3000/api/forgot_password") return true;
      if (pathname === "http://localhost:3000/api/forgot_password/code")
        return true;

      return false;
    },
  },
  pages: {
    signIn: "/signup",
    error: "/error",
  },
});
