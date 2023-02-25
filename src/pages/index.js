import { getServerSession } from "next-auth";
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export default function HomePage() {
    return (
        <>
            <p>Welcome to the game!</p>
            <p>Please sign in, and create some kingdoms... AND CONQUOR EVERYONE ELSE!</p>
        </>
    );
}

export async function getServerSideProps(context) {
    const session = await getServerSession(context.req, context.res, authOptions);

    if (session) {
        return {
            redirect: {
                destination: "/play"
            }
        }
    }

    return { props: {} }
}