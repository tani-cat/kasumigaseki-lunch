import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import Place from "../data/place.json";


export const PageResult = () => {
  const resultId = Math.floor(Math.random() * Place.place.length);
  const result = Place.place[resultId].name;

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>本日のランチ結果</Card.Title>
          <Card.Text>
            {result}
          </Card.Text>
          <Row className="row-cols-auto justify-content-center">
            <Col>
              <Button as="a" type="button" variant="outline-info" className="me-1" href={`https://twitter.com/intent/tweet?text=今日のランチは「${result}」にします&hashtags=本郷ランチ`} target="_blank" rel="nofollow">Tweet</Button>
            </Col>
            <Col>
              <Button as="a" type="button" variant="outline-success" href={`https://www.google.com/maps/search/?api=1&query=${result}`} target="_blank" rel="nofollow">Google Map</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <br />
      <Link to="/">もう一度やり直す</Link>
    </>
  )
}
