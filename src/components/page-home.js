import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

import { FilterCard } from "./utils//util-filter";
import { PageHeader } from "./utils/util-content";

import District from "../data/district.json";
import Genre from "../data/genre.json";
import Place from "../data/place.json";


const eventTrack = (result) => {
  if (!window.gtag) return
  window.gtag("event", "push_button", {
    result: result
  });
}

export const PageHome = ({ setResult }) => {
  const navigate = useNavigate();
  // districts, genres の初期値はすべて true にセットしておく
  const [districts, setDistricts] = useState(Object.keys(District).reduce((res, key) => {
    res[key] = true;
    return res;
  }, {}));
  const [genres, setGenres] = useState(Object.keys(Genre).reduce((res, key) => {
    res[key] = true;
    return res;
  }, {}));

  const passResult = () => {
    // 乱数で決定する
    const targetDists = Object.keys(District).reduce((res, key) => {
      if (districts[key]) { res.push(key) }
      return res;
    }, []);
    const targetGenres = Object.keys(Genre).reduce((res, key) => {
      if (genres[key]) { res.push(key) }
      return res;
    }, []);
    const targetPlaceIds = Object.keys(Place).filter(
      key => targetDists.includes(Place[key].district) && targetGenres.includes(Place[key].genre)
    );
    // console.log(targetDists);
    // console.log(districts);
    if (targetPlaceIds.length === 0) {
      alert("対象となるお店がありません。条件を変更して再度お試しください。");
      return;
    }
    const resultNum = Math.floor(Math.random() * targetPlaceIds.length);  // int
    eventTrack(Place[targetPlaceIds[resultNum]].display_name);  // targetPlaceIds[x]: str
    setResult(Place[targetPlaceIds[resultNum]]);
    navigate("/result");
  }

  return (
    <>
      <PageHeader />
      <div>
        <small className="text-muted">本郷近辺のお店からあなたの今日のランチを選びます</small>
      </div>
      <br />
      <Button variant="primary" onClick={passResult}>今日のランチを決定！</Button>
      <hr />
      <FilterCard name="地区" target={District} states={districts} setStates={setDistricts} />
      <br />
      <FilterCard name="ジャンル" target={Genre} states={genres} setStates={setGenres} />
      <hr />
      <h3>More Information</h3>
      <Row className="row-cols-auto justify-content-center">
        <Col>
          <Link to="/list">
            <Button variant="outline-success">
              登場する店舗一覧
            </Button>
          </Link>
        </Col>
        <Col>
          <a href="https://www.github.com/tani-cat/hongo-lunch" target="_blank" rel="noreferrer">
            <Button variant="outline-dark"><FaGithub />Contribute</Button>
          </a>
        </Col>
        <Col>
          <Link to="/update">
            <Button variant="outline-danger">アップデート履歴</Button>
          </Link>
        </Col>
      </Row>
    </>
  )
}
