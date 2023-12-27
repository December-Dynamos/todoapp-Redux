import { ADD_TODO,DELETE_TODO,UPDATE_TODO } from "../actions/actionTypes";


const initialState = []

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
         case ADD_TODO:  return [...state, action.payload]

         case DELETE_TODO: 
            return  state.filter(todo => todo.id !== action.payload)

        case UPDATE_TODO:
                        let newArr= []
                        for(let t of state){
                        
                            if(t.id !==action.updateId){
                                newArr.push(t)
                            }
                            else if(t.id == action.updateId){
                                t.title = action.updateTitle
                                newArr.push(t)
                            }
                        
                        }
                        return newArr
            

         default: return state;
    }
}

export default todoReducer;




// let todoArr = [
//     {
//         id: 1,
//         title: 'Learn React',
//     },
//     {
//         id: 2,
//         title: 'Learn React Native',
//     },
    //   {
    //     id: 3,
    //     title: 'Learn Redux',
    //   }
// ]


// todoReducer(valueInisdeStore, {type: DELETE_TODO, payload: 2})


// todoReducer(valueIndieStore, {type: ADD_TODO, payload: {id: 4, title: 'Learn Redux'}})


// []

// [{id: 1, title: 'Learn React'}]

// [{id: 1, title: 'Learn React'}, {id: 3, title: 'Learn React Native'}]

// [{id: 1, title: 'Learn React'}, {id: 3, title: 'Learn React Native'}, {id: 4, title: 'Learn Redux'}]



// let arr= [
//     {
//         id: 1,
//         title: 'Learn React',
//     },
//     {
//         id: 2,
//         title: 'Learn React Native',
//     },
//       {
//         id: 3,
//         title: 'Learn Redux',
//     }
// ]

// let newArr= []
// for(let t of arr){

//     if(t.id !==updateId){
//         newArr.push(t)
//     }
//     else if(t.id === updateId){
//         t.title = updateTitle
//         newArr.push(t)
//     }

// }