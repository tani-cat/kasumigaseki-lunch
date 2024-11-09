import { Button, Col, Row, ToggleButton } from "react-bootstrap";
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

export const PageHome = (
  { setResult, districts, setDistricts, genres, setGenres, includeChain, setIncludeChain }
) => {
  const navigate = useNavigate();

  const changeChain = e => {
    setIncludeChain(e.currentTarget.checked);
    localStorage.setItem('includeChain', e.currentTarget.checked);
  }

  const passResult = () => {
    // 乱数で決定する
    const targetChain = includeChain ? [true, false] : [false];
    // const targetDists = Object.keys(District).reduce((res, key) => {
    //   if (districts[key]) { res.push(key) }
    //   return res;
    // }, []);
    // const targetGenres = Object.keys(Genre).reduce((res, key) => {
    //   if (genres[key]) { res.push(key) }
    //   return res;
    // }, []);
    // const targetPlaceIds = Object.keys(Place).filter(
    //   key => targetDists.includes(Place[key].district) && targetGenres.includes(Place[key].genre)
    // );
    const targetPlaceIds = Object.keys(Place).filter(
      key => Place[key].state && districts[Place[key].district] && genres[Place[key].genre] && targetChain.includes(Place[key].is_chain)
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
        <small className="text-muted">霞が関周辺のお店からあなたの今日のランチを選びます</small>
      </div>
      <br />
      <Button variant="primary" onClick={passResult} autoFocus={true} >今日のランチを決定！</Button>
      <hr />
      <div>
        <ToggleButton type="checkbox" id="includeChain" variant="outline-success" checked={includeChain} onChange={changeChain} value="includeChain">{includeChain ? 'チェーン店を含む' : 'チェーン店を含まない'}</ToggleButton>
        <br />
        <p className="text-muted mt-1">チェーン店を除外したい場合は「チェーン店を含まない」にしてください。</p>
      </div>
      <FilterCard name="地区" id="districts" target={District} states={districts} setStates={setDistricts} />
      <br />
      <FilterCard name="ジャンル" id="genres" target={Genre} states={genres} setStates={setGenres} />
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
          <a href="https://www.github.com/tani-cat/kasumigaseki-lunch" target="_blank" rel="noreferrer">
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
