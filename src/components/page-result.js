import { Card, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { PageHeader } from "./utils/util-content";


export const PageResult = ({ result }) => {
  const navigate = useNavigate();

  return (
    <>
      <PageHeader />
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>本日のランチ選出結果</Card.Title>
          <Card.Text>
            {result.display_name}
          </Card.Text>
          <Row className="row-cols-auto justify-content-center">
            <Col>
              <Button as="a" type="button" variant="outline-info" className="me-1" href={`https://twitter.com/intent/tweet?text=今日のランチは「${result.display_name}」にします&hashtags=霞が関ランチ&url=${encodeURIComponent('https://tani-cat.github.io/hongo-lunch/')}`} target="_blank" rel="nofollow">Tweet</Button>
            </Col>
            <Col>
              <Button as="a" type="button" variant="outline-success" href={`https://www.google.com/maps/search/?api=1&query=${result.search_name}`} target="_blank" rel="nofollow">Google Map</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <div>
        <Button variant="secondary" onClick={() => navigate("/")} autoFocus={true}>リトライする</Button>
      </div>
    </>
  )
}
