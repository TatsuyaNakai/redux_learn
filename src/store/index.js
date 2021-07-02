import {createStore} from 'redux';

const initialState={
    count: 100,
    posts:[
        {id:1, name:'Tom'},
        {id:2, name:'Mary'},
        {id:3, name:'Bob'},
    ]
};
const reducer=(state=initialState, action )=>{
    switch(action.type){
        case 'INCREMENT':
            return {
                count:state.count+1,
            }
        case 'DECREMENT':
            return {
                count: state.count-1,
            }
        default: return state;
    }
};

const store=createStore(reducer);
// アプリケーションを構成するコンポーネントとは独立した場所を作ってる


export default store;