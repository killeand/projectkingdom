import { getProviders, signIn } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import _ from 'lodash';

export default function SignIn({ providers }) {
    return (
        <div className="flex flex-col h-full items-center justify-center">
            <div className="w-1/3 p-3 bg-white text-black border border-black shadow-md rounded-md">
                {Object.values(providers).map((provider, index) => (
                    <div key={provider.name}>
                        <button className="btn w-full" onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const session = await getServerSession(context.req, context.res, authOptions);

    if (session) {
        return {
            redirect: {
                destination: "/"
            }
        }
    };

    const providers = await getProviders();

    return {
        props: {
            providers: providers
        }
    };
}