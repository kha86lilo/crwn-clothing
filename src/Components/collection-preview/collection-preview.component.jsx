import { withRouter } from "react-router";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.style.scss";
const CollectionPreview = ({ title, items, history, match, routeName }) => {
  return (
    <div className="collection-preview">
      <h1 className="title" onClick={() => history.push(`${match.path}/${routeName}`)}> {title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => {
            return idx < 4;
          })
          .map((item) => ( 
            <CollectionItem key={item.id} item= {item} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(CollectionPreview);;
