import { Table } from "react-bootstrap";
import { BsCheckCircleFill, BsCircle } from "react-icons/bs";

import { PageFooter, PageHeader } from "./utils/util-content";


import District from "../data/district.json";
import Genre from "../data/genre.json";
import Place from "../data/place.json";


export const PageList = () => {
  // エリアごとにまとめる
  const compareOrder = (a, b) => {
    if (Place[a].district < Place[b].district) {return -1;}
    if (Place[b].district < Place[a].district) { return 1; }
    return 0;
  }
  const placeKeys = Object.keys(Place);
  placeKeys.sort(compareOrder);
  const tbody = placeKeys.reduce((res, key) => {
    if (Place[key].state) {
      res.push(
        <tr key={key}>
          {/* <td>{item.key}</td> */}
          <td>{District[Place[key].district]}</td>
          <td>{Genre[Place[key].genre]}</td>
          <td>{Place[key].display_name}</td>
          <td>{Place[key].is_chain ? <BsCheckCircleFill /> : <BsCircle />}</td>
          {/* <td>{Place[key].state ? <BsCheckCircleFill /> : <BsCircle />}</td> */}
        </tr>
      ); 
    }
    return res;
  }, []);

  return (
    <>
      <PageHeader />
      <hr />
      <h4>登場する店舗一覧</h4>
      <div>
        <small className="text-muted"></small>
      </div>
      <Table hover striped>
        <thead>
          <tr>
            {/* <th>No.</th> */}
            <th>地区</th>
            <th>ジャンル</th>
            <th>店名</th>
            <th>チェーン店</th>
            {/* <th>有効</th> */}
          </tr>
        </thead>
        <tbody>
          {tbody}
        </tbody>
      </Table>
      <PageFooter />
    </>
  )
}
