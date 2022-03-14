import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateTables, getTableId} from "../../Redux/tablesRedux";
import TableForm from "./TableForm";


const UpdateTableForm = () => {
  const {id} = useParams();
  const tableData =  useSelector(state => getTableId(state,id));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = tableUpdate => {
    dispatch(updateTables({...tableUpdate, id}));
    navigate("/");
  }

  return (
    <TableForm action={handleSubmit} actionText={"Update table"}
    title={tableData.title}
    author={tableData.status} 
    people={tableData.people} 
    bill={postData.bill}
    />
  );
}

export default UpdateTableForm;