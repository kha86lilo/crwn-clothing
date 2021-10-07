import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {selectDirectorySections} from "../../Redux/directory/directory.selectors.js";

const Directory = ({sections}) => { 
  console.log("test",selectDirectorySections);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSecProps }) => {
        return <MenuItem key={id} {...otherSecProps}></MenuItem>;
      })}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
