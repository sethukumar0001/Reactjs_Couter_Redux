
// import {REGISTER} from '../actions/types';
import {combineReducers} from 'redux';

const AddItemReducer = (data=[],action)=>{
    switch(action.type){
        case 'ADDITEM':
               
                console.log(action.payload)
            return [...data,action.payload]
            
            case 'DELETE':  
            let newArray = [...data]
      return newArray.filter(
        newArray => newArray.id !== action.payload.id
      )
            case 'INCREASE':
                data=[...data]

                console.log(action.payload.id)
                const index= data.map(item => item.id).indexOf(action.payload.id);
console.log('Index: ', index);
              //  console.log(data[indexOf(action.payload.id)])
              data[index].quantity+=1
              return [...data]
            // data[action.payload.id]
            case 'DECRESE':
                    const index1= data.map(item => item.id).indexOf(action.payload.id);
                    console.log('Index: ', index1);
                   
                console.log(action.payload.id);
                data[index1].quantity-=1
            return [...data]
                
            default:
                return data
    }
}

export default combineReducers({
    AddItemReducer
})