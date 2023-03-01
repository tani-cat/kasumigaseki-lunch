import { Button } from 'react-bootstrap';
// import { FilterGenre } from './filter-genre';
// import { FilterDistrict } from './filter-district';
import { useNavigate } from "react-router-dom";


export const PageHome = () => {
  const navigate = useNavigate();

  return (
    <>
      <Button variant="primary" onClick={() => navigate("/result")}>今日のランチを決定！</Button>
      <hr />
      {/* <FilterGenre />
      <br />
      <FilterDistrict />
      <hr /> */}
      <div>ver. {process.env.REACT_APP_VERSION}</div>
      <div><a href="https://www.github.com/tani-cat/hongo-lunch">GitHub</a></div>
    </>
  )
}
