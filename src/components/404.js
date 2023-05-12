import { PageFooter } from "./utils/util-content";

export const Page404 = () => {
  return (
    <>
      <h1>404 NOT FOUND</h1>
      <div className="mb-3">
        <img src={`${process.env.PUBLIC_URL}/img/404.png`} alt="お探しのページは見つかりませんでした" width="300" />
      </div>
      <PageFooter />
    </>
  )
}
