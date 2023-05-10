import { Card } from "react-bootstrap";

import { BackToTop, PageHeader } from "./util-content";

import Update from "../data/update.json";

const VersionCard = ({ update, latest }) => {
  return (
    <Card className="mb-3">
      <Card.Header className="align-middle">
        <strong className="fs-5">ver. {update.ver}</strong> ({update.date})
        {latest ? <span className="ms-2 badge bg-primary">現在</span> : ""}
      </Card.Header>
      <Card.Body>
        <Card.Title>{update.summary}</Card.Title>
        <Card.Text as="div">
          <ul>
            {update.description.map((text, index) => { return <li key={index}>{text}</li> })}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}


export const PageUpdate = () => {
  const targetUpdate = Update.update.slice(0, 10);

  return (
    <>
      <PageHeader />
      <hr />
      <h4>アップデート履歴</h4>
      <div className="text-start">
        {targetUpdate.map((update, index) => {
          return (
            <VersionCard update={update} key={index} latest={index === 0} />
          )
        })}
      </div>
      <BackToTop />
    </>
  )
}
