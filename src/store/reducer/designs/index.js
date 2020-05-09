import designsInit from "../../state/designs"
export default function (state=designsInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type === "UP_DESIGNS"){
        state.list = payload.list;
    }
    return state;
}