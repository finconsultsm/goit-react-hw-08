import sc from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeQueryFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const query = useSelector((state) => state.filter.query);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(changeQueryFilter(e.target.value));
  };

  return (
    <label className={sc.label}>
      Find contacts by name
      <input
        className={sc.input}
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="John"
      />
    </label>
  );
};

export default SearchBox;
