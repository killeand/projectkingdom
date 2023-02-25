import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { SessionProvider } from 'next-auth/react';
import { KingdomContextProvider } from '@/components/KingdomContext';
import Layout from '@/components/Layout';
import '@/styles/globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

const __global__queryClient = new QueryClient();

export default function App({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <SessionProvider session={session}>
            <QueryClientProvider client={__global__queryClient}>
                <KingdomContextProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                    <ReactQueryDevtools />
                </KingdomContextProvider>
            </QueryClientProvider>
        </SessionProvider>
    )
}
