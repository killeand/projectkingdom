import Head from "next/head";
import Link from 'next/link';
import { useSession, signOut } from "next-auth/react";

export default function Layout({ children }) {
    const { data: session } = useSession();

    return (
        <>
            <Head>
                <title>Project Kingdom</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" type="image/png" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABHwSURBVHhe7d19kGRVecfx5/Tt2Q0UGCAVU0USwZdICBCCoiRrQolg8ZYCMeFNBQsElcWSRHa3e3eBhSA73buAykssJGiixEhCCgNoyB8aTBTCq0TeNJiUBIWUoKSsALLT3SfP7X5m2dmdl9sz5/S9M+f7qTp9n6dnd2Z6t+/vnnv79m0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMFrOliisfo6I308LP+ToTXPf5IjAvaw3L+n4uf5oXboXdPxApKNDnsv/BEAADC27Vv/ZVlqzWP1Mc0eDwD2i9UNa6+jqkGf7X0UyCIChLYkAmIF/UG9u18eno3Pf4D4sZTVbAsq9ScdFWtyrQfd93d3ZoPVr+l/CkkQAYAbu9XpzsYbAkzpu0kA4cnA/lhICAEWcpIFwhwbB34qM5QdAsUQQABjGiSL+EZ0NbLIeixwBgHlwqzUEHtQZwQq7A4sUAYB5cgfpzbc0BDQMsFgRAFgo3R3IPmM1FhkCAAG4s3UmcIsWY4MeiwUBgFDepTOBO3W566DFYkAAICC3YvBSIRYLAgChHaUhcKPVqDgCADG8V3cHPmk1KowAQCTuPH16vccaVBQBgIhq1+jNXoMaVUQAIKbdRep5CKCiuB7A0GJdD6D3Vf2++dV6tpdfMSi/mlA+utstJ+tMxx7693WFy1c6ny/zPn8r7zIdJXNnikx8zhpUCAEwtFgB4I/XdflWa0LR/9/6H+hychyqYycdI+a/r4/tN6xBhbALsLTp7KHzLzou03GUjp31rqP1/jsGXx4V9wYNolXWoEIIgOR0deXvaAj4w7T58uC+kVinY5dBiaogAJLVvVOD4AQtflfD4IHBfVHlBwTPthoVQQAkr3OPhsEhWnxh0MfkCYCKIQCQ62oQnK7LtYM2FrevSHa8NagAAgDb6LR0K/1xayLJ3zqMqiAAsJ3uhXqTj1iO1ZGfp4AKIAAwjU4+C7h5UMdQYzegIggAzKCjU3X/hDWB1Y6zAiUjADCT/9X99SusDi0PgF8YlCgTAYBZdK7Tm2cGdVCZSD1/6RElIwAwlz+3ZWj5ZcVRMgIAc+h8Wm/ydxyGRgBUAAGAufxER+h3KSpPAFQAAYAi7rFlQO4AvcmvY4ASEQAowEcIgNzy/IIlKBEBgAK691oRWJcAKBkBgCJe1FnAg1YH1CMASkYAoCD3mBUB1QiAkhEAKMj/1IqA/C9bgZIQACjqeVuGxCXCSkYAoCAXYQbg+CThkhEAKKjHDGAJIgBQUIwZgCcASkYAoEx8ME3JCAAU5HezIiD3f1agJAQACqrFuI4fAVAyAgBFRQgATwCUjABAQf1PHA6NACgZAYCiYhwDyK81gBIRACjI7WVFQO4pK1ASAgBFvdWWAfUIgJIRAChg7EC9iXDSTkYAlIwAQBERtv65LQRAyQgAFNCLEQBP6nhhUKIsBACKeJstQ3rIligRAYA5ZO+W/uf6h+YJgAogADAH90ErQiMAKoAAwCzqB+vNkYM6tO63rUCJeDvm0LJr9Z9tpTUB+eN1pZjyCTyt/s8Kryndc62cQ3a9PtazrAnI36+P9S3WbDUuYwfVpHeKH3xgSE23TrW81pFvqGr6ZO3fP/i6y3urp/zZWZ7T/pnijz0NBMDQRhcAbanr8zks/YY/akrn16ydRe1kHV+yJrSLRTqXWL2VBt43nbgYBxz7auIOWC0Tj1gLxS5AegqE/vI36FPjM9ZE4G6zYisNu/NjrvwafZez8u+IAEhPgQDoXqc3rxrUofnviUxM+ZCRzbL8tbq4fNCFp7OeHzeku9pabIMASM9sAaD70/W/1OU7Bm0M7kYrtupK9xorI6m93QpshwBIjK79MwTA2O/o+p9/BuD7B30snc9a0deSsQ/oL3SMtcF58e2mbHncWmyHAEjM9EfJa6frV3Tld2+yO2L5go6nB6XIFSJ7OPHRjjXoY/2fpnSb1mIaBEBips4Alu2rW/3r9WnwV9qMDe6L6gZb9nWkfrUuoj0HHVP/OREAiRnMACZX/N5j2kZ4nX9aX9FV/htW5y/5/bEu3jPowtOZxcaGbPmetZgBAZCYLeJ3HfGKP2mjLeXE/sFGl7/SEMuP1kh3vdWYBQGQmI645VaOku5idO6yWg6W7GqdhuxhbQS1w6zAHAiA6rhSN4w6Zc1065w9rCPKm2WmOQI4ArVxK/Kp/zv1tzjH2uC8+I/r1P8JazEHAqAy3Ot1vFGH7p+7/XXkl+FaCs7THY9t98U/bcvgvMhTTeleaC0KIAASM+IZwC069b/K6nzrP+76QRdHT2pHWImCCIDEjDAAnteV/6NWy2apv0VX/oivyftL1smW/7AGBREAiMSfrjc/HNT51tlHm/rrz/pBQ7oXW4MhEACJGc0MwJ0h0r3dmvydfg29783WBpdJFumiJUsfAYDQVolM5G8o6tsoy96oi9agC8+LXLSKqf+8EQCJiTwD0C195wqr+zLpRbmqUc6L/8+mdC61FvNAACCQ3mm68m+ypk+n/h/WRbQj806yY63EPBEAiYkwA3hat8WHawBMeZ//ZSK/oouYr/lfwLn+C0cAYCFu1a3+wSLdr1u/VV3q0S7yoVP/J3TqrxmDhSIAEhNwBnCRrvzH6/KZQfuKttRO1UX+br8oupIdZyUWiABITIAAuEPHCl35pz349imR5fq0+qK1wenvv3a9bPmutVggAgAFeV3perpl7xyt4267cwc/lyy/yEcUOvX/7hrpRHtJMUUEQGLmMQP4R131TtKJ974aALN+TkBLMg0Hd7a1wdUlO8FKBEIAYBr+UR1tXZkP0K39Mbry/519YVZO3FesDM6LNFYx9Q+OAEjMDP/hP9ORH8lfp6vxb+sKv7+OpgzxQRptyTbrIsKrjDn/aHO7cwwQBgGQptt0pbpK19czbSv/izoO1zGuK/3D9mcKa0l9hX6fVdYG5yU70UoERgBUhr9Mx/FTRyyd43QLf56u7J8bZis/E93sb33jTwRruK5/PARAddyrK+WtU0f1taV+gS52H3Sh+Ycb0sl3LRAJAYB5a8nYfrqI9macjmSnWIlICADMm5NezFnKmvWy5TGrEQkBgHlpSf0jGgGvszYoL/4hpv6jQQBgaFeI/KoTiXbGXybZe61EZAQAhjYhWbSpf37Cz2qm/iNDAGAobamd5qJ9irB/gBN+RosAQGEbRHbRp8znrQ3OS+39VmJECAAUtpPUv2xlDM2mTDxqNUaEAEAhbcmOcyKHWxuUF39fQzptazFCBAAKcv9gRQS1M6zAiBEAmFNL6jdbGQNT/xIRAJjVZqkfqlP/P7I2MP9vTP3LRQBgVj2Rb1gZXE1q0a4ehGIIAMyoJdn1VgbnRdauDvBWZCwMAYBpjcvYgU7cWdYG5r/V5OKelUAAYFo18Q9ZGZyX2jlWomQEAHZg1/eLwunUvzmPy44hDgIAU4yL7K2raZTr+3md+nNd/2ohADCFk/q3rYyAqX/VEADYqi31dTpF383aoLzIOqb+1UMAoO8TgxU/0ifu+rua/UuOo2oIAPS9LNmDVgbnmPpXFgGAfOq/0ol7rbVB9UTWr5GJ71iLiiEAEqf75rrbL9cOutD8XWuls9EaVBABkLhNkj1gZXA9qa20EhVFACSsLbVTdQJwkLWhrV8rE/9uNSqKAEha7YtWBOXF391g6r8oEACJakv9a1YGx7n+iwcBkKCWZEfr4h2DLiwvcgFT/8WDAEiQE/dVK4Orib/PSiwCBACC8uJWW4lFgABAaEdskvrvWY2KIwAQXE9kjZWoOAIAwTmRd7Vk7ABrUWEEACLxHAtYBAgARKGzgNPGZfne1qKiCABE46TDLKDiCABE48St3CjyS9aigggARJVJxisCFUYAIDK3egPPs8riPwaxuZ2lvs5qVAwBgOg8JwZVFgGA6JzIri2p/4m1qBACAKPCS4IVRABgJHQWsGdLxj5gLSqCAMAI9ZgFVAwBgB14cWfp7ZXWBuPE7dOW2snWogIIAEzhxT/QlIkbGtI93+4KjAuGVAkBgCmcdI+zMn/57u+tDMi9uS3ZMdagZAQAtsov6NkQedpaqUvnT60MjFlAVRAAmPTDpnSmfDrwKpGndJfgfmtDevu41A+1GiUiANDXFTnJyu24KLMAx3kBlUAAQPmr10nnbmum0FnBN3XX4MfWBqMB8IdcNqx8BAA6L0r3Y1ZPy0lv1q/Pn19rBUpCACSv975LNASsmVZDen9tZVA6Czj1UpFftxYlIADSdrOu3DdZPSvdDYjylt5lkl1oJUpAACSsJ1nDyjk1pTNuZWDu7GtEdrEGI0YAJEq36I218vJ/WVuQv86KoF6QTPdCUAYCIEFe/H26Rd9kbWF16cY6MSjSQUbMhQBIkMuP683D+SIv6czhDmuDakt2sZUYIX0uYDj1c3Qbur81AbnPi3TusaavLXVd38LSrf/dTemusHZol8my36xL73Frg9EH+pLOSna2FiNCAFRYFQMgp1vr7+hTJ/hJPPpgV2sIXG4tRoBdgMRo4i849PMV1crQOD14xAgADE1nEP+kIRDj9OBXb5L6h6zFCBAAidEVN9Bun7vAiqB0F4VLiI8QAZCYUAd9mjJxvZWBude1pHaKNYiMAEhPqAxQfsr1A0Jx4ppWIjICAPPWkG6U3QCNgAM3SXaUNYiIAEhPwBlA/5jCjVYGpd93vZWIiABITLiDgAMRrxv4+5ulfog1iIQAwIKsEnlOQ+Vr1gbVFeH04MgIgPQEnQHknLgoL93pL3pUW5btYy0iIAASE3ztVw2ZeNCLf8TaoJz0LrUSERAAiQl9DGCSPpEusjIo/X1P3CzyamsRGAGAINZI9xZdPDvowupJ1rISgREAidHNf5QZQE631hutDMydsSG/fCCCIwASE2sXINeUzietDG5nyXRPAKERAAjMRwoB91ErEBABkJiYuwC5RrTrBoq0JOMVgcAIAASnuxl/Y2Vgbl7XMsTMCIDExDwG8IpOlHfz6S8+1pb6+dYiAAIgMSNY+0XX/v/WoPm6tUHp943yCUWpIgDSM4oMyH9IlPP49fvu0ZaxM63FAhEAiRnNLkB+MLDzr/rTHrU2ML/BCiwQAYBoeuJjncH3mpZk77YaC0AAJEY3/yOZAeTWSu9GnXE8Z21Q+iD+zEosAAGA2K60ZWBuv7Zkh1mDeSIAEjOqYwCTmtE+Vrz/WKJ971QQAIkZ6dpvvPhPWRmUE3fIuIwdZC3mgQBIz8gzYHfpRnvt3okf+mPO8QoCIDGj3gXIfUjkRV18adCFpQ/miHFZvre1GBIBkJgydgFyXmrRjto76UY60Lj0EQCJKWMGkGvKlsf1Z/+ztUHpAzrhEyK7WYshEAAYmVrE/fUtkjELmAcCID1l7QXk1w28w4t/zNrA3BlWYAgEQGJKW/uNk9oVVgbXliza916qCIDElHUMYFJDJj6ri58MutDcx6xAQQQARk5DKNqWuiX1C61EAQRAYnTzX/ZeQNTTg9UltkQBBEBiyt4FmOSinR4sTmcBH7EWcyAAUIoJ6V5mZXAaAtG+91JDACSmCrsAufUiz+ps5CZrQ3vVuNTeZzVmQQCgNJpEl1sZnJNa20rMggBITFWOAeQa0rlff587rQ1KH+SeLcmOtRYzIABQKic+5sk7nBg0BwIgMVU5BjCpId3bdV7yuLVBOXH7bJL626zFNAiAxHhxlQqAnI94erAXz5uEZkEAoHRNmbjBi/zU2sDcWzfLst+yBtshABJTtV2ASfpLRZsF9KTHLGAGBAAqoRH39OAj2yJ7Wo1tEACJqdLLgNvRX81fZXVwXurMAqZBACSmqmt/rhbx2n76uE/eILKztTAEQHoqmwGrRZ7UaUCs04NlJy4YsgMCAFUTcRbgPmwlDAGASmlK515dRDk9ONeSjI8T2wYBgMrpRTx5R2cBTSuhCABUzlrp3iaRTg/ObZL6GiuTRwCgomrRZgE+v4Aw+ggAVFJDJv5CF88PuvDaMvZBK5NW5ZeFk9eS7Forg2pK91wrK02n6uf2xO9l7az0iZw/l/MNWk238Jk2W+vJ+3X/P9O+X+voNaVzui4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICSR/wdE8JrQMEOGyQAAAABJRU5ErkJggg==" />
            </Head>
            <header className="flex flex-row items-center bg-black">
                <Link href="/" className="flex flex-row items-center justify-center">
                    <div className="p-3" style={{ backgroundImage: "url(/ProjectKingdomLogo.jpg)" }}>
                        <div className="text-black font-bold text-2xl shadow-md bg-white rounded-xl px-2">Project Kingdom</div>
                    </div>
                </Link>
                <nav>
                    {!session && <Link href="/auth/signin">Sign in to play the game!</Link>}
                    {session && (
                        <Link href="/play">Status</Link>
                    )}
                </nav>
                {session && (
                    <div className="flex flex-row items-center px-2">
                        {session.user.image && <img src={session.user.image} className="w-10 mask mask-hexagon mr-2" referrerPolicy="no-referrer" />}
                        <div className="flex flex-col">
                            <div className="text-white">{session.user.name}</div>
                            <button className="btn btn-xs btn-info">Sign Out</button>
                        </div>
                    </div>
                )}
                
            </header>
            <main className="flex-grow">
                {children}
            </main>
        </>
    )
}