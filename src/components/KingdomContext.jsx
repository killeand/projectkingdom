import { createContext, useState } from "react";

const KindgomContext = createContext(null);

export function KingdomContextProvider(props) {
    const [id, setId] = useState(null);

    return (
        <KindgomContext.Provider value={{ id, setId }} {...props} />
    )
}

export default KindgomContext;