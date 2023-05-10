import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

import { FilterCard } from "./util-filter";
import { Link, useNavigate } from "react-router-dom";

import { PageHeader } from "./util-content";

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
  const [districts, setDistricts] = useState(District.district.reduce((res, item) => {
    res[item.key] = true;
    return res;
  }, {}));
  const [genres, setGenres] = useState(Genre.genre.reduce((res, item) => {
    res[item.key] = true;
    return res;
  }, {}));

  const passResult = () => {
    // 乱数で決定する
    const targetDists = District.district.reduce((res, item) => {
      if (districts[item.key]) { res.push(item.key) }
      return res;
    }, []);
    const targetGenres = Genre.genre.reduce((res, item) => {
      if (genres[item.key]) { res.push(item.key) }
      return res;
    }, []);
    const targetPlace = Place.place.filter(
      place => targetDists.includes(place.district) && targetGenres.includes(place.genre)
    );
    // console.log(targetDists);
    // console.log(districts);
    if (targetPlace.length === 0) {
      alert("対象となるお店がありません。条件を変更して再度お試しください。");
      return;
    }
    const resultId = Math.floor(Math.random() * targetPlace.length);
    eventTrack(targetPlace[resultId].display_name);
    setResult(targetPlace[resultId]);
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
      <FilterCard name="地区" target={District.district} states={districts} setStates={setDistricts} />
      <br />
      <FilterCard name="ジャンル" target={Genre.genre} states={genres} setStates={setGenres} />
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
