import showDetailsType from "../../actionType/showDetails"
export function upShowDetails(payload) {
    return {
        type:showDetailsType.UP_SHOWDETAILS,
        payload
    }
}