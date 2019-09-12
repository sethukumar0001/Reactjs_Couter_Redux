import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {AddItemAction} from '../store/actions/index';


let id=0;
const AddItem = props => {

const dispatch = useDispatch();

  const [item, setItem] = useState("");
  const [cost,setCost] = useState('');
  // const [quantity,setQuantity]=useState(0)

// const AddItemReducer = useSelector(state=>state.AddItemReducer)

  const handleAddItem = (evt) => {

      evt.preventDefault();
      console.log(item);
      console.log(cost);
      // console.log(quantity);
let quantity = 0
    dispatch(AddItemAction(item,cost,quantity,id));
    
      setItem('');
      setCost('');
      // setQuantity('');
   id++   
  }
  return(
    <div>
    <center>
    <div className="loginMain">
      <div className="loginLogo">
        <div className="loginContent">
    
        </div>
      </div>
      <div className="registerContent">
     
      </div>
      <br></br>
      <div className="col-6 inputFields">
          <center>
        <form onSubmit={handleAddItem}>
           <div className="">
              <label>
              <input className="form-control" type="text"
              value={item}
              onChange={e => setItem(e.target.value)}
              placeholder="Item" required/>
              </label>
            </div>
            <br></br>
            <div className="">
              <label>
              <input className="form-control" type="number"
              value={cost}
              onChange={e => setCost(e.target.value)}
              placeholder="Cost" required/>
              </label>
            </div>
            {/* <br></br>
            <div className="">
              <label>
              <input className="form-control" type="text"
              value={quantity}
              onChange={e => setQuantity(e.target.value)}
              placeholder="Quantity" required/>
              </label>
            </div> */}
<br></br>
            <div className="inputFields">
            <center>  <input className="btn-sm login" type="submit" value="AddItem" /></center>
            </div>
        </form>
        </center>
      </div>
    </div>
    </center>
    
    </div>
  );
}
export default AddItem;