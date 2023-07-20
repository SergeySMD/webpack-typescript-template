import "./styles.scss";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Loader from "@components/loader/Loader";
import { getUsers } from "@reducers/ActionCreators";
import { usersReducer } from "@reducers/users";
import { paths } from "@root/routes";
import { useAppDispatch, useAppSelector } from "@utils/hooks/redux";

function Users() {
  const dispatch = useAppDispatch();
  const { users, limit, isLoading, error } = useAppSelector((state) => state.users);
  const { setUsersLimit } = usersReducer.actions;

  useEffect(() => {
    dispatch(getUsers(limit));
  }, [dispatch, limit]);

  const handleChangeLimit = () => {
    const count = prompt("Введите количество", limit as unknown as string);
    if (count && parseInt(count)) {
      dispatch(setUsersLimit(parseInt(count)));
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
      </div>
      {isLoading && <Loader />}
      {error && <b>{error}</b>}
      {!isLoading &&
        users.map((el) => (
          <div key={el.id} className="user-item">
            {el.id}. {el.name} - {el.email}
          </div>
        ))}
    </div>
  );
}

export default Users;
