// import axios from 'axios'
import {ADDITEM,DELETE, INCREASE, DECRESE} from './types';

const action =(type,payload) =>{
    return{type,payload}
}
export const AddItemAction =(item,cost,quantity,id)=>
    action(ADDITEM,
    {
    item,
    cost,
    quantity,
    id
}) 
export const deleteAction = id => action(DELETE,id)

export const increaseAction = id => action(INCREASE,id)

export const decreseAction = id => action(DECRESE,id)
