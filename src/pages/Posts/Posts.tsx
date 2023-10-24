import "./styles.scss";
import React from "react";
import { Link } from "react-router-dom";

import { useGetPostsQuery } from "@api/postApi";
import Loader from "@components/loader/Loader";
import { setPostsLimit } from "@reducers/posts";
import { paths } from "@root/routes";
import { useAppDispatch, useAppSelector } from "@utils/hooks/redux";

function Posts() {
  const dispatch = useAppDispatch();
  const limit = useAppSelector((state) => state.posts.limit);
  const { data, isLoading, isError, refetch } = useGetPostsQuery(limit);

  const handleChangeLimit = () => {
    const count = prompt("Введите число", limit.toString());
    if (count && parseInt(count)) {
      dispatch(setPostsLimit(parseInt(count)));
    }
  };

  return (
    <div className="users-container">
      <div className="buttons-list">
        <Link className="button" to={paths.HOME}>
          Домой
        </Link>
        <button className="button" onClick={handleChangeLimit}>
          Изменить количество
        </button>
        <button className="button" onClick={() => refetch()}>
          Обновить
        </button>
      </div>
      {isLoading && <Loader />}
      {isError && <b>Ошибка</b>}
      {!isLoading &&
        data?.map((el) => (
          <div key={el.id} className="user-item">
            {el.id}. {el.title} - {el.body}
          </div>
        ))}
    </div>
  );
}

export default Posts;
