import cls from "./NotFoundPage.module.scss";

export const NotFoundPage = () => {
  return (
    <div className={cls.NotFoundPage}>
      <div className={cls.message}>
        <h1>Oops!</h1>
        <h2>The page you are looking for does not exist.</h2>
      </div>
    </div>
  );
};
