import { PropertiesActionTypes } from "./properties.action-types";

import {
  GetDestinationOptions,
  FilterProperties,
  GetStateOptions,
  GetTypeOptions,
  GetMinPrice,
  GetMaxPrice,
} from "./properties.utils";

const INITIAL_STATE = {
  stateList: [],
  selectedStateList: [],
  typeList: [],
  selectedTypeList: [],
  minPrice: 0,
  selectedMinPrice: 0,
  maxPrice: 10000,
  selectedMaxPrice: 10000,
  destinationList: [],
  selectedDestinationList: [],
  duration: "long",
  propertyList: [],
  filteredList: [],
  property: null,
  bookingPopup: false,
};

const propertyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PropertiesActionTypes.INITIALIZE_STATE_LIST:
      return {
        ...state,
        stateList: GetStateOptions(state.propertyList),
      };
    case PropertiesActionTypes.SET_SELECTED_STATE_LIST:
      return {
        ...state,
        selectedStateList: action.payload,
      };
    case PropertiesActionTypes.INITIALIZE_TYPE_LIST:
      return {
        ...state,
        typeList: GetTypeOptions(state.propertyList),
      };
    case PropertiesActionTypes.SET_SELECTED_TYPE_LIST:
      return {
        ...state,
        selectedTypeList: action.payload,
      };
    case PropertiesActionTypes.INITIALIZE_MIN_PRICE:
      return {
        ...state,
        minPrice: GetMinPrice(state.propertyList),
        selectedMinPrice: GetMinPrice(state.propertyList),
      };
    case PropertiesActionTypes.SET_SELECTED_MIN_PRICE:
      return {
        ...state,
        selectedMinPrice: action.payload,
      };
    case PropertiesActionTypes.INITIALIZE_MAX_PRICE:
      return {
        ...state,
        maxPrice: GetMaxPrice(state.propertyList),
        selectedMaxPrice: GetMaxPrice(state.propertyList),
      };
    case PropertiesActionTypes.SET_SELECTED_MAX_PRICE:
      return {
        ...state,
        selectedMaxPrice: action.payload,
      };
    case PropertiesActionTypes.INITIALIZE_DESTINATION_LIST:
      return {
        ...state,
        destinationList: GetDestinationOptions(state.propertyList),
      };
    case PropertiesActionTypes.SET_SELECTED_DESTINATION_LIST:
      return {
        ...state,
        selectedDestinationList: action.payload,
      };
    case PropertiesActionTypes.SET_DURATION:
      return {
        ...state,
        duration: action.payload,
      };
    case PropertiesActionTypes.SET_PROPERTY_LIST_SUCCESS:
      return {
        ...state,
        propertyList: action.payload,
      };
    case PropertiesActionTypes.FILTER_PROPERTIES:
      return {
        ...state,
        filteredList: FilterProperties(
          state.propertyList,
          state.selectedStateList,
          state.stateList,
          state.selectedTypeList,
          state.typeList,
          state.selectedMinPrice,
          state.selectedMaxPrice
        ),
      };
    case PropertiesActionTypes.GET_PROPERTY_SUCCESS:
      return {
        ...state,
        property: action.payload,
      };
    case PropertiesActionTypes.GET_PROPERTY_FAILURE:
      return {
        ...state,
        property: "error",
      };
    case PropertiesActionTypes.UNSET_PROPERTY:
      return {
        ...state,
        property: null,
      };
    case PropertiesActionTypes.SHOW_BOOKING_POPUP:
      return {
        ...state,
        bookingPopup: true,
      };
    case PropertiesActionTypes.HIDE_BOOKING_POPUP:
      return {
        ...state,
        bookingPopup: false,
      };
    default:
      return state;
  }
};

export default propertyReducer;
