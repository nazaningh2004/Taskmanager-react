type FilterTaskprops = {
  filter: string;
  setFilter: (filter: string) => void;
};

const FilterTask = ({ filter, setFilter }: FilterTaskprops) => {
  return (
    <div className="filters">
      <button
        onClick={() => setFilter('all')}
        className={filter === 'all' ? 'active' : ''}
      >
        All
      </button>
      <button
        onClick={() => setFilter('completed')}
        className={filter === 'completed' ? 'active' : ''}
      >
        Completed
      </button>
      <button
        onClick={() => setFilter('incomplete')}
        className={filter === 'incomplete' ? 'active' : ''}
      >
        Incomplete
      </button>
    </div>
  );
};

export default FilterTask;
