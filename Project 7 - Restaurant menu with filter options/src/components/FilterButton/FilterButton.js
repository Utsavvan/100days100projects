const FilterButton = ({ Categories, filterButton }) => {
  return (
    <>
      <button
        type="button"
        onClick={() => filterButton(Categories)}
        className="btn btn-primary m-3"
      >
        {Categories}
      </button>
    </>
  );
};

export default FilterButton;
