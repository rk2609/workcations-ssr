import { all, call, takeLatest, put } from "redux-saga/effects";
import { PropertiesActionTypes } from "./properties.action-types";
import {
  setPropertyListSuccess,
  setPropertyListFailure,
  getPropertySuccess,
  getPropertyFailure,
} from "./properties.actions";
import { getPropertiesListExcel, getPropertyExcel } from "./properties.utils";

export function* getProperty({ payload: slug }) {
  try {
    const property = yield getPropertyExcel(slug);
    yield put(getPropertySuccess(property));
  } catch (error) {
    yield put(getPropertyFailure(error));
  }
}

export function* onGetPropertyStart() {
  yield takeLatest(PropertiesActionTypes.GET_PROPERTY_START, getProperty);
}

export function* getProperties() {
  try {
    const properties = yield getPropertiesListExcel();
    yield put(setPropertyListSuccess(properties));
  } catch (error) {
    yield put(setPropertyListFailure(error));
  }
}

export function* onGetPropertiesStart() {
  yield takeLatest(
    PropertiesActionTypes.SET_PROPERTY_LIST_START,
    getProperties
  );
}

export function* propertySagas() {
  yield all([call(onGetPropertiesStart), call(onGetPropertyStart)]);
}
