import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className={"item"} key={song.title}>
          <div className={"right floated content"}>
            <button className={"ui button primary"}>Select</button>
          </div>
          <div className={"content"}>{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className={"ui divided list"}>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  //Recibe como parametro el state (store)
  return { songs: state.songs }; //crea un prop en el componente con el valor del store.
};

export default connect(mapStateToProps)(SongList); //connect retorna una función, e invocamos esa función con el arg SongList
