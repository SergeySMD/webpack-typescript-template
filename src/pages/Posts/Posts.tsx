import "./styles.scss";
import React from "react";
import { Link } from "react-router-dom";

import postAPI from "@api/postApi";
import Loader from "@components/loader/Loader";
import { postsReducer } from "@reducers/posts";
import { paths } from "@root/routes";
import { useAppDispatch, useAppSelector } from "@utils/hooks/redux";

function Posts() {
  const dispatch = useAppDispatch();
  const limit = useAppSelector((state) => state.posts.limit);
  const setPostsLimit = postsReducer.actions.setPostsLimit;
  const { data, isLoading, isError, refetch } = postAPI.useGetPostsQuery(limit);

  const handleChangeLimit = () => {
    const count = prompt("Введите число", limit as unknown as string);
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
