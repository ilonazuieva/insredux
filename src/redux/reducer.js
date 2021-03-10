const  initialState = {
    cards:[
        {
            _id: 1,
            name:'ilona',
            status:'todo',
            priority:1
        },
        {
            _id: 2,
            name:'Node',
            status:'done',
            priority: 2
        }
    ]
}
const kanban = (state=initialState,action)=> {
    switch (action.type){
        case 'ADD_CARD':
            return{
                ...state,
                cards: [...state.cards, {
                    _id: Math.random(),
                    name:'Julia',
                    status:'done',
                    priority: 1
                }]
            }
        case 'DELETE_CARD':
            const newCards= state.cards.filter(el=> el._id !== action.payload)
            return {
               ...state,
                cards: newCards
            }
        default:
            return state
    }
}
export default kanban;