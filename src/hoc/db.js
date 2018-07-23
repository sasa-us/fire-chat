import React, { Component} from 'react';
import { connect } from 'react-redux';
import { updateChatMessages } from '../actions'; 
import firebase from '../firebase';


import { cpus } from 'os';
export default (WrappedComponent) => {
    class Db extends Component {
        componentDidMount() {
            //console.log('HOC DB LOADED');
            firebase.collection('chat-log').onSnapshot(this.props.updateChatMessages);
            
        }

        render() {
            return < WrappedComponent {...this.props}/>
        }
    }//end class Db

    function mapStateToProps(state) {
        return {
            messages: state.chat.messages
        }
    }

    return connect(mapStateToProps, {updateChatMessages})(Db);
}
