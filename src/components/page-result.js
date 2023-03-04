import { Card, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Place from "../data/place.json";


export const PageResult = () => {
  const navigate = useNavigate();
  // 乱数で決定する
  const resultId = Math.floor(Math.random() * Place.place.length);
  const result = Place.place[resultId];

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>本日のランチ結果</Card.Title>
          <Card.Text>
            {result.display_name}
          </Card.Text>
          <Row className="row-cols-auto justify-content-center">
            <Col>
              <Button as="a" type="button" variant="outline-info" className="me-1" href={`https://twitter.com/intent/tweet?text=今日のランチは「${result.display_name}」にします&hashtags=本郷ランチ`} target="_blank" rel="nofollow">Tweet</Button>
            </Col>
            <Col>
              <Button as="a" type="button" variant="outline-success" href={`https://www.google.com/maps/search/?api=1&query=${result.search_name}`} target="_blank" rel="nofollow">Google Map</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <br />
      <Button variant="secondary" onClick={() => navigate("/")}>もう一度選ぶ</Button>
    </>
  )
}
