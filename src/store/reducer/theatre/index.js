import theatreInit from "../../state/theatre"
export default function (state=theatreInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type === "UP_THEATRE"){
        state.theatre_list = payload.theatre_list;
    }
    return state;
}