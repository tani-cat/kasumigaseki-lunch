import { Card } from "react-bootstrap";

import { PageFooter, PageHeader } from "./utils/util-content";

import Update from "../data/update.json";

const VersionCard = ({ upKey, latest }) => {
  return (
    <Card className="mb-3">
      <Card.Header className="align-middle">
        <strong className="fs-5">ver. {upKey}</strong> ({Update[upKey].date})
        {latest ? <span className="ms-2 badge bg-primary">現在</span> : ""}
      </Card.Header>
      <Card.Body>
        <Card.Title>{Update[upKey].summary}</Card.Title>
        <Card.Text as="div">
          <ul>
            {Update[upKey].description.map((text, index) => { return <li key={index}>{text}</li> })}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}


export const PageUpdate = () => {
  const targetUpdate = Object.keys(Update).slice(0, 10);

  return (
    <>
      <PageHeader />
      <hr />
      <h4>アップデート履歴</h4>
      <div className="text-start">
        {targetUpdate.map((key, index) => {
          return (
            <VersionCard upKey={key} key={index} latest={index === 0} />
          )
        })}
      </div>
      <PageFooter />
    </>
  )
}
