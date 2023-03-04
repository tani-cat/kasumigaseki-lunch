

import { Button, Card, Row, ToggleButton } from 'react-bootstrap';


const CheckButton = ({ item, checked, onChange }) => {
  return <ToggleButton type="checkbox" id={item.key} variant="outline-success" checked={checked} onChange={onChange} value={item.key}>{item.name}</ToggleButton>
}


export const FilterCard = ({ name, target, states, setStates }) => {
  const handleChange = e => {
    setStates({
      ...states,
      [e.target.id]: e.target.checked
    })
  }

  const selectAll = e => {
    const flg = e.target.name === "all";
    setStates(target.reduce((res, item) => {
      res[item.key] = flg;
      return res;
    }, {}));
  }

  return (
    <Card>
      <Card.Header>{name}を絞り込む</Card.Header>
      <Card.Body>
        <Row className="row-cols-auto justify-content-center">
          <Button className="me-2" variant="outline-secondary" onClick={selectAll} name="all">全選択</Button>
          <Button variant="outline-warning" onClick={selectAll} name="null">選択解除</Button>
        </Row>
        <hr />
        <Row className="row-cols-auto justify-content-center">
          {target.map(item => {
            return (
              <span key={item.key} className="mb-1">
                <CheckButton item={item} checked={states[item.key]} onChange={handleChange} />
              </span>
            )
          })}
        </Row>
      </Card.Body>
    </Card>
  )
}
