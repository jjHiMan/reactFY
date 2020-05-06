import homeHotShowInit from "../../state/homeHotShow"
export default function (state=homeHotShowInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type === "UP_HOMEHOTSHOW"){
        state.hots_show_list = payload.hots_show_list;
    }
    return state;
}