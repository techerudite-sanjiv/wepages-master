import './App.css'
import Table1 from "./Scheduler/Table1";
import Table2 from "./Scheduler/Table2";
const App = () => {
  return (
    <>
      <div className="abc my-5">
        <div>
          <Table1 />
        </div>
        <div>
          <Table2 />
        </div>
      </div>
    </>
  );
};

export default App;