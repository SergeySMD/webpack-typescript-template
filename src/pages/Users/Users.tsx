import './styles.scss';
import { Link } from 'react-router-dom';
import { getUsers } from '../../store/reducers/ActionCreators';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useTranslation } from 'react-i18next';
import { usersReducer } from '../../store/reducers/users';
import Loader from '../../components/loader/Loader';
import Paths from '../../constants/path';
import React, { useEffect } from 'react';

function Users() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { users, limit, isLoading, error } = useAppSelector((state) => state.users);
  const { setUsersLimit } = usersReducer.actions;

  useEffect(() => {
    dispatch(getUsers(limit));
  }, [limit]);

  const handleChangeLimit = () => {
    const count = prompt(t('enter-count'), limit as unknown as string);
    if (count && parseInt(count)) {
      dispatch(setUsersLimit(parseInt(count)));
    }
  };

  return (
    <div className="users-container">
      <div className="buttons-list">
        <Link className="button" to={Paths.HOME}>
          {t('buttons.go-home')}
        </Link>
        <button className="button" onClick={handleChangeLimit}>
          {t('buttons.change-limit')}
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
