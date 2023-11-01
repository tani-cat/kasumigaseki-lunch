import { Button, Card, Row, ToggleButton } from 'react-bootstrap';


const CheckButton = ({ itemKey, itemName, checked, onChange }) => {
  return <ToggleButton type="checkbox" id={itemKey} variant="outline-success" checked={checked} onChange={onChange} value={itemKey}>{itemName}</ToggleButton>
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
    setStates(Object.keys(target).reduce((res, key) => {
      res[key] = flg;
      return res;
    }, {}));
  }

  const targetList = Object.keys(target).map(key => {
    return (
      <span key={key} className="mb-1">
        <CheckButton itemKey={key} itemName={target[key]} checked={states[key]} onChange={handleChange} />
      </span>
    )
  });

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
          {targetList}
        </Row>
      </Card.Body>
    </Card>
  )
}
