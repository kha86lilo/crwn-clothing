import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../Redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview.component";  
const CollectionsOverview = ({ collections }) => {
    return (
        <div>
            {collections.map(
                ({ id, ...otherProps }) => <CollectionPreview key={id} {...otherProps}></CollectionPreview>
            )}
        </div>

    );
} 
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});
export default connect(mapStateToProps)(CollectionsOverview);