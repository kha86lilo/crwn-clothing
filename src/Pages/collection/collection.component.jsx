import './collection.style.scss';
import {connect} from 'react-redux';
import CollectionItem from '../../Components/collection-item/collection-item.component';
import {selectCollection}  from '../../Redux/shop/shop.selectors';

const CollectionPage = ({ collection }) => {  
    const { title, items } = collection;
    return (
      <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
          {items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  };


const mapStateToProps = (state, ownProps) =>({//[STUDY] : Add props to map state function
    collection : selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps) (CollectionPage);