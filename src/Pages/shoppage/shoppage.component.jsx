import CollectionsOverview from "../../Components/CollectionsOverview/CollectionsOverview.component";
import { Route } from "react-router";
import CollectionPage from "../collection/collection.component";
import { Component } from "react";
import  {getCollectionByKey} from '../../firebase/firebase.utils';
import { connect } from "react-redux";
import { updateCollections } from "../../Redux/shop/shop.actions";
import WithSpinner from "../../Components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends Component {
state = {
    isLoading : true
}
     componentDidMount(){
        const { updateCollections } = this.props;
          getCollectionByKey('collections').then(
            collections => { updateCollections(collections); this.setState({isLoading :false}) ;}
        ); 
    }
    render() {
        const { match } = this.props;
        const{isLoading} = this.state;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props => <CollectionsOverviewWithSpinner isLoading = {isLoading} {...props}></CollectionsOverviewWithSpinner>)}></Route>
                <Route exact path={`${match.path}/:collectionId`} render={( props => <CollectionPageWithSpinner isLoading = {isLoading}  {...props}></CollectionPageWithSpinner>)}></Route>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateCollections: (collectionsMap) =>
      dispatch(updateCollections(collectionsMap)),
  });
  
  export default connect(null, mapDispatchToProps)(ShopPage);