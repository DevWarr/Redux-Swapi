import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchSwapi } from "../actions";
// import actions

class CharacterListView extends React.Component {

  componentDidMount() {
    // call our action
    this.props.fetchSwapi();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (
        <div className="loading">
          <h1>Loading . . .</h1>
        </div>
      );
    }

    if (this.props.error) {
      // return something here to indicate that you are fetching data
      return (
        <div className="error">
          <h1>Error!</h1>
          <p>{this.props.error}</p>
        </div>
      );
    }

    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mstp = state => {
  return {
    characters:     state.charsReducer.characters,
    fetching:       state.charsReducer.fetching,
    error:          state.charsReducer.error
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

export default connect( mstp, { fetchSwapi } )(CharacterListView);
