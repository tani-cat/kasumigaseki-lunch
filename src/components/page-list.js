import { Table } from "react-bootstrap";
import { BsCheckCircleFill, BsCircle } from "react-icons/bs";

import { BackToTop, PageHeader } from "./util-content";


import District from "../data/district.json";
import Genre from "../data/genre.json";
import Place from "../data/place.json";


export const PageList = () => {
  const districtDict = District.district.reduce(
    (obj, item) => ({ ...obj, [item.key]: item.name }), {}
  );
  const genreDict = Genre.genre.reduce(
    (obj, item) => ({ ...obj, [item.key]: item.name }), {}
  );
  const tbody = Place.place.map(item => {
    return (
      <tr>
        {/* <td>{item.key}</td> */}
        <td>{districtDict[item.district]}</td>
        <td>{genreDict[item.genre]}</td>
        <td>{item.display_name}</td>
        <td>{item.state ? <BsCheckCircleFill /> : <BsCircle />}</td>
      </tr>
    );
  });

  return (
    <>
      <PageHeader />
      <hr />
      <h4>登場する店舗一覧</h4>
      <div>
        <small class="text-muted"></small>
      </div>
      <Table hover striped>
        <thead>
          <tr>
            {/* <th>No.</th> */}
            <th>地区</th>
            <th>ジャンル</th>
            <th>店名</th>
            <th>有効</th>
          </tr>
        </thead>
        <tbody>
          {tbody}
        </tbody>
      </Table>
      <BackToTop />
    </>
  )
}
