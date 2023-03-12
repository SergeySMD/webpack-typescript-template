import './styles.scss';
import { Link } from 'react-router-dom';
import { postsReducer } from '../../store/reducers/posts';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useTranslation } from 'react-i18next';
import Loader from '../../components/loader/Loader';
import Paths from '../../constants/path';
import React from 'react';
import postAPI from '../../api/postApi';

function Posts() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const limit = useAppSelector((state) => state.posts.limit);
  const setPostsLimit = postsReducer.actions.setPostsLimit;
  const { data, isLoading, isError, refetch } = postAPI.useGetPostsQuery(limit);

  const handleChangeLimit = () => {
    const count = prompt(t('enter-count'), limit as unknown as string);
    if (count && parseInt(count)) {
      dispatch(setPostsLimit(parseInt(count)));
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
        <button className="button" onClick={() => refetch()}>
          {t('buttons.refresh')}
        </button>
      </div>
      {isLoading && <Loader />}
      {isError && <b>{t('loading-error')}</b>}
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
