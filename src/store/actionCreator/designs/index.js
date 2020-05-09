import designsType from "../../actionType/designs"
export function upDesigns(payload) {
    return {
        type:designsType.UP_DESIGNS,
        payload
    }
}