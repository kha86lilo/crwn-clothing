import CollectionsOverview from "../../Components/CollectionsOverview/CollectionsOverview.component";
import { Route } from "react-router";
import CollectionPage  from "../collection/collection.component";
const ShopPage = ({match}) => {
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverview}></Route>
            <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}></Route> 
        </div>
    );
}
export default  ShopPage ;