import Home from './Home';
import {Container} from 'flux/utils';
import MovieStore from './MovieStore';
import DraftActions from './DraftActions';
import MovieActions from './MovieActions';

import IDDraftStore from './IDDraftStore';
import TitleDraftStore from './TitleDraftStore';
import RatingDraftStore from './RatingDraftStore';

function getStores() {
  return [
    MovieStore,
    IDDraftStore,
    TitleDraftStore,
    RatingDraftStore,
  ];
}

function getState() {
  return {
    movies: MovieStore.getState(),
    IDDraft : IDDraftStore.getState(),
    titleDraft : TitleDraftStore.getState(),
    ratingDraft : RatingDraftStore.getState(),

    onShowall: MovieActions.showAll,
    onShowdetail: MovieActions.showDetail,
    onUpdate: MovieActions.Update,
    onRegister: MovieActions.Register,
    onEditID: DraftActions.editID,
     onEditRating: DraftActions.editRating,
    onEditTitle: DraftActions.editTitle,
  };
}

export default Container.createFunctional(Home, getStores, getState);