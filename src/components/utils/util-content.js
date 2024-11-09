
import React from 'react';
import { Link, useNavigate } from "react-router-dom";

import { Button } from 'react-bootstrap';


export const PageHeader = () => {
  return (
    <>
      <Link to="/" className="text-reset text-decoration-none">
        <h2 className="mb-3">霞が関ランチ</h2>
      </Link>
    </>
  );
}


export const PageFooter = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button variant="secondary" onClick={() => navigate("/")}>トップページに戻る</Button>
    </div>
  );
}
