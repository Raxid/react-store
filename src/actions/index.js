import { FETCH_ITEMS, 
        FETCH_ITEM_BY_ID_SUCCESS, 
        FETCH_ITEM_BY_ID_INIT 
      } from './types';

const items = [{
        id: "1",
        title: "Jabłko",
        category: "Owoce",
        image: "http://via.placeholder.com/350x250",
        description: "Najlepsza jakość",
        price: "5,99",
        unit: "kg",
        deliverytime: "Szybka Wysyłka",
        avaible: "dużo"
      },
      {
        id: "2",
        title: "Banan",
        category: "Owoce",
        image: "http://via.placeholder.com/350x250",
        description: "Najlepsza jakość",
        price: "17,20",
        unit: "kg",
        deliverytime: "Szybka Wysyłka",
        avaible: "niewiele"
      },
      {
        id: "3",
        title: "Pomidor",
        category: "Warzywa",
        image: "http://via.placeholder.com/350x250",
        description: "Najlepsza jakość",
        price: "10,40",
        unit: "kg",
        deliverytime: "Szybka Wysyłka",
        avaible: "brak"
      },
      {
        id: "4",
        title: "Ogórek zielony",
        category: "Warzywa",
        image: "http://via.placeholder.com/350x250",
        description: "Najlepsza jakość",
        price: "7,20",
        unit: "kg",
        deliverytime: "Szybka Wysyłka",
        avaible: "dużo"
      }];

const fetchItemByIdInit = () => {
  return {
    type: FETCH_ITEM_BY_ID_INIT
  }
}

const fetchItemByIdSuccess = (item) => {
  return {
    type: FETCH_ITEM_BY_ID_SUCCESS,
    item
  }
}



export const fetchItems = () =>  {

	return {
		type: FETCH_ITEMS,
		items
	}
}

export const fetchItemById = (itemId) => {
  return function(dispatch) {
    dispatch(fetchItemByIdInit());
    //SIMULATE SERVER
    setTimeout(() => {
      const item = items.find((item) => item.id === itemId);
      dispatch(fetchItemByIdSuccess(item));
    }, 1000);
  }
}

