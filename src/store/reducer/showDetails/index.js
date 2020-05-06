import showDetailsInit from "../../state/showDetails"
export default function (state=showDetailsInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type === "UP_SHOWDETAILS"){
        state.list = payload.list;
    }
    return state;
}