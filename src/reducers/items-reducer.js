import { FETCH_ITEMS, 
          FETCH_ITEM_BY_ID_SUCCESS, 
          FETCH_ITEM_BY_ID_INIT 
} from '../actions/types';

const INITIAL_STATE = {
  items: {
    data: []
  },

  item: {
    data: {}
  }
}

export const itemsReducer = (state = INITIAL_STATE.items, action) => {
	switch(action.type){  
    case FETCH_ITEMS:
      return {...state, data: action.items};
		default:
			return state;
	}
}


export const selectedItemReducer = (state = INITIAL_STATE.item, action) => {
  switch(action.type){
    case FETCH_ITEM_BY_ID_INIT:
      return Object.assign({}, state, {data: {}});

    case FETCH_ITEM_BY_ID_SUCCESS:
      return {...state, data: action.item};

    default:
      return state;
  }
}
