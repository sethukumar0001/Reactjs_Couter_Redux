import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {deleteAction,increaseAction,decreseAction} from '../store/actions/index';
import './Home.css';

const Home = props =>{

  
    const AddItemReducer = useSelector(state=>state.AddItemReducer)
    console.log(AddItemReducer)
    const AddItemReducerDisplay = AddItemReducer
    var dispatch = useDispatch();

    const onClickDeleteHire = (e,id) => 
    {
      dispatch(deleteAction({ id: id }))
    }
    const increase = (id) =>{
      dispatch(increaseAction({id:id}))
    }
    const decrese=(id)=>{
      dispatch(decreseAction({id:id}))
    }
  
        return(
            <div>
                <table>
                    <tbody>
                       <tr><td>Id</td>
                        <td>Item Name</td>
                        <td>Item Cost</td>
                        <td>(+)</td>
                        <td>quantity</td>
                        <td>(-)</td>
                        <td>Total cost</td>
                        </tr>
                        {AddItemReducerDisplay.map(data => (
                        <tr key={data.id}>
                             <td>{data.id}</td>
                             <td>{data.item}</td>
                             <td>{data.cost}</td>
                             <td><button onClick={()=>{
                               increase(data.id)
                             }}>+</button></td>
                             <td>{data.quantity}</td>
                             <td><button onClick={()=>{
                               decrese(data.id)
                             }}>-</button></td>
                             <td>{data.cost*data.quantity}</td>
                             <td><button onClick={() => {
                             onClickDeleteHire(this,data.id)
                             }}>DELETE</button></td>
                            </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )  
}
export default Home


