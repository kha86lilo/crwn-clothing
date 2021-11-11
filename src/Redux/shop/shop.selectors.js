import { createSelector } from "reselect";

const selectShop = state => state.shop; 
export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
); 

//[STUDY] map object to array 
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    shop =>shop ? Object.keys(shop).map(key => shop[key]) : null
);

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections ? collections[collectionUrlParam] :null
);