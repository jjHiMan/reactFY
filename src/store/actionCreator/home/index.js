import homeHotShow from "../../actionType/home"
export function upHomeHotShow(payload) {
    return {
        type:homeHotShow.UP_HOMEHOTSHOW,
        payload
    }
}

export function upWaterFall(payload) {
    return {
        type:homeHotShow.UP_WATERFALL,
        payload
    }
}