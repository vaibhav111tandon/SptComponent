import MainComponent from './components/MainComponent';
import './App.css';

function App() {

  let data = [
    {
      name: "Vanishree Deshpande",
      designation: "Hiring Manager",
      email: "vani@spottabl.com",
      access: "0",
      id: "ucPq1"
    },
    {
      name: "Chilman Mehrotra",
      designation: "Recruiter",
      email: "chilman@spottabl.com",
      access: "2",
      id: "ltX01"
    },
    {
      name: "Anupam Chaudhari",
      designation: "Recruiter",
      email: "anupam@spottabl.com",
      access: "2",
      id: "HsMDu"
    }
  ]

  let testData = [
    {
      "id": "618eb725b7865d16cf20c301",
      "access": 2,
      "designation": "Recruiter",
      "name": "Brandie Ferrell",
      "email": "Tamera@spottabl.com"
    },
    {
      "id": "618eb725688e8567fb80e0bb",
      "access": 2,
      "designation": "Recruiter",
      "name": "Lee Woods",
      "email": "Jamie@spottabl.com"
    },
    {
      "id": "618eb725ec3326fd7560c3a9",
      "access": 2,
      "designation": "Recruiter",
      "name": "Cole Witt",
      "email": "Patrice@spottabl.com"
    },
    {
      "id": "618eb72535f56c24fcbf774f",
      "access": 2,
      "designation": "Recruiter",
      "name": "Parks Gates",
      "email": "Bridges@spottabl.com"
    },
    {
      "id": "618eb7258579749926835621",
      "access": 2,
      "designation": "Recruiter",
      "name": "Jeannette Cameron",
      "email": "Trudy@spottabl.com"
    },
    {
      "id": "618eb7255b1c298fd854781a",
      "access": 2,
      "designation": "Recruiter",
      "name": "Iva Taylor",
      "email": "Burks@spottabl.com"
    },
    {
      "id": "618eb7258a7727d132d6833b",
      "access": 2,
      "designation": "Recruiter",
      "name": "Adeline Long",
      "email": "Michael@spottabl.com"
    },
    {
      "id": "618eb725e386bcecadef38bd",
      "access": 2,
      "designation": "Recruiter",
      "name": "Wilkinson Hess",
      "email": "Tara@spottabl.com"
    },
    {
      "id": "618eb72502d13ad0d79ec6f7",
      "access": 2,
      "designation": "Recruiter",
      "name": "Della Hernandez",
      "email": "Buck@spottabl.com"
    },
    {
      "id": "618eb72587ddaca3423eb930",
      "access": 2,
      "designation": "Recruiter",
      "name": "Gay Whitaker",
      "email": "Mathis@spottabl.com"
    }
  ]

  return (
    <div className="App">
      <MainComponent list={data} testList={testData}/>
    </div>
  );
}

export default App;
