import axios from "axios";

export function GetMyKingdoms() {
    return axios.get("/api/kingdom/").then(response => response.data);
}