import React, { Component} from 'react';
import { connect } from 'react-redux';
import { updateChatMessages } from '../actions'; 
import firebase from '../firebase';


export default (WrappedComponent) => {
    class Db extends Component {

        dbRef = firebase.collection('chat-log');

        componentDidMount() {
            //console.log('HOC DB LOADED');
            //firebase.collection('chat-log').onSnapshot(this.props.updateChatMessages);
            this.dbRef.orderBy('timestamp', 'desc').onSnapshot(this.props.updateChatMessages);
        }
        sendMessage = (msg)=> {
            console.log('from db hoc', msg);
            const newMsg = {
                name: 'Jake', 
                message: msg,
                timestamp: new Date().getTime()
            };

            this.dbRef.add(newMsg);
        }

        render() {
            return < WrappedComponent {...this.props} sendMessage={this.sendMessage}/>
        }
    }//end class Db

    function mapStateToProps(state) {
        return {
            messages: state.chat.messages
        }
    }

    return connect(mapStateToProps, {updateChatMessages})(Db);
}
