import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureKey, State } from './main-store.reducer';

const selectClaimState = createFeatureSelector<State>(featureKey);

export const selectCounter = createSelector(selectClaimState, (state) => {
  console.log('NEW COUNTER VALUE', state.counter);
  return state.counter;
});

export const selectUser = createSelector(selectClaimState, (state) => {
  return state.user;
});

export const selectTeams = createSelector(selectClaimState, (state) => {
  return state.teams;
});

export const selectTeamsLoading = createSelector(selectClaimState, (state) => {
  return state.teamsLoading;
});
