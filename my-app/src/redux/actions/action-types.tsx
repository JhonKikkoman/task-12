/** @format */

import {
  SEARCH_SKILLS_REQUEST,
  SEARCH_SKILLS_FAILURE,
  SEARCH_SKILLS_SUCCESS,
  CHANGE_SEARCH_FIELD,
} from './actions';

export const searchSkillsRequest = (search: string) => ({
  type: SEARCH_SKILLS_REQUEST,
  payload: { search },
});
export const searchSkillsFailure = (error: any) => ({
  type: SEARCH_SKILLS_FAILURE,
  payload: { error },
});
export const searchSkillsSuccess = (items: any) => ({
  type: SEARCH_SKILLS_SUCCESS,
  payload: { items },
});
export const changeSearchField = (search: any) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: { search },
});
