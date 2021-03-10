import React from "react";
import './App.css';
import {connect} from 'react-redux'

function App(props) {

  return (
    <div>
      <button onClick={props.addCard}>add card</button>
      {props.cards.map(el=>
          <div key={el._id}>
            {el.name}
          <button onClick={()=> props.deleteCard(el._id)}>delete</button>
          </div>)}
    </div>
  );
}
const mapStateToProps =(state)=> ({
  cards: state.cards
})
const mapDispatchToProps = (dispatch)=> ({
  addCard: () => dispatch({type: 'ADD_CARD'}),
  deleteCard: (cardId)=> dispatch({type: 'DELETE_CARD',payload:cardId})
})

export default connect(mapStateToProps,mapDispatchToProps ) (App);
