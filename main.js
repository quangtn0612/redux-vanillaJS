console.log(window.Redux);

const { createStore } = window.Redux
const initialState=[
    'Listen To Music'
];
const hobbyReducer = ((state = initialState, action) => {
    console.log(action);
    switch(action.type){
        case 'addHobby':
            return [
                ...state,
                action.payload
            ]
        default:
            return state;
    }
})

const store = createStore(hobbyReducer);
console.log(store.getState());
var hobbyList = document.getElementById("hobbyListId");
store.getState().map((item)=>{
    hobbyList.innerHTML += `<li> ${item}</li>`;
})

addHobby = () => {
    var input = document.getElementById('input');
    text = input.value;
    text = text.trim();
    if(!text) { return }
    store.dispatch({type: 'addHobby', payload: text});
    hobbyList.innerHTML += `<li> ${text}</li>`
    input.value = '';
}


