import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AuthSignIn from "@/components/auth/auth.signin"
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation"; // dùng ở phía server

const SignInPage = async () => {
    const session = await getServerSession(authOptions);
    if (session) {
        // redirect to user home page
        redirect('/');
    }
    return (
        <AuthSignIn />
    )
}

export default SignInPage;