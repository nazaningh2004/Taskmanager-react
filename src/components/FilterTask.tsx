import Button from './Button';
type FilterTaskprops = {
  filter: string;
  setFilter: (filter: string) => void;
};

const FilterTask = ({ filter, setFilter }: FilterTaskprops) => {
  return (
    <div className="filters">
      <Button
        onClick={() => setFilter('all')}
        className={filter === 'all' ? 'active' : ''}
      >
        All
      </Button>
      <Button
        onClick={() => setFilter('completed')}
        className={filter === 'completed' ? 'active' : ''}
      >
        Completed
      </Button>
      <Button
        onClick={() => setFilter('incomplete')}
        className={filter === 'incomplete' ? 'active' : ''}
      >
        Incomplete
      </Button>
    </div>
  );
};

export default FilterTask;
