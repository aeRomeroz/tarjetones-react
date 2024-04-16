import { TARJETON_TYPE } from "../utils/tarjetonType";
import "../styles/views/TarjetonTypes.css";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../slices/tarjetonParamsSlice";
import { useNavigate } from "react-router-dom";

function TarjetonType() {
  const navigate = useNavigate();
  const tarjetonType = useSelector((state) => state.tarjetonParams.tarjetonType);
  const dispatch = useDispatch();

  let handleSelect = (e) => {
    const params = TARJETON_TYPE[e.target.value].params
    dispatch(update({ tarjetonType: e.target.value, params }));
    return navigate("/params");
  };

  return (
    <form className="tarjetonType">
      <label>Elije el tipo de Tarjeton:</label>
      <select
        className="selectTargeton"
        onChange={(e) => handleSelect(e)}
        value={tarjetonType}
      >
        <option value="AREA">Tarjetón Tipo Área</option>
        <option value="PROGRAM">Tarjetón Tipo Programa</option>
      </select>
    </form>
  );
}

export default TarjetonType;
