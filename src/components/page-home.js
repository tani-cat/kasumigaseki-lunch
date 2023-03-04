import { useState } from 'react';

import { Button } from 'react-bootstrap';
import { FilterCard } from './util-filter';
import { Link, useNavigate } from "react-router-dom";

import District from "../data/district.json";
import Genre from "../data/genre.json";
import Place from "../data/place.json";

export const PageHome = ({ setResult }) => {
  const navigate = useNavigate();
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
    console.log(targetDists);
    console.log(districts);
    if (targetPlace.length === 0) {
      alert("対象となるお店がありません。条件を変更して再度お試しください。");
      return;
    }
    const resultId = Math.floor(Math.random() * targetPlace.length);
    setResult(targetPlace[resultId]);
    navigate("/result");
  }

  return (
    <>
      <Button variant="primary" onClick={passResult}>今日のランチを決定！</Button>
      <hr />
      <FilterCard name="地区" target={District.district} states={districts} setStates={setDistricts} />
      <br />
      <FilterCard name="ジャンル" target={Genre.genre} states={genres} setStates={setGenres} />
      <hr />
      <div>ver. {process.env.REACT_APP_VERSION} (<Link to="/update">アップデート履歴</Link>)</div>
      <div><a href="https://www.github.com/tani-cat/hongo-lunch">GitHub</a></div>
    </>
  )
}
