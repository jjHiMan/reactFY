import theatreType from "../../actionType/theatre"
export function upTheatre(payload) {
    return {
        type:theatreType.UP_THEATRE,
        payload
    }
}
