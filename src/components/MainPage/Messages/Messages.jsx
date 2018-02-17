import './Messages.scss';
import React, { Component } from 'react';
import CreateMessage from 'components/MainPage/CreateMessage';
import Message from 'components/MainPage/Message';
import PropTypes from 'prop-types';

const propTypes = {
    conversationId: PropTypes.string.isRequired,
    messages: PropTypes.array.isRequired,
    createMessage: PropTypes.func.isRequired,
    getMessages: PropTypes.func.isRequired
};

class Messages extends Component {
    constructor (props) {
        super(props);
    }
    componentWillMount () {
        this.props.getMessages();
    }
    componentDidUpdate (prevProps) {
        if (this.props.conversationId !== prevProps.conversationId && this.props.messages && this.props.messages.length === 0) {
            this.props.getMessages();
        }
    }
    render () {
        const { messages, createMessage, conversationId } = this.props;
        return (
            <div className="ch-messages-wrap">
                {messages.map(message =>
                    <div key={message.id}>
                        <Message message={message}/>
                    </div>
                )}
                <CreateMessage createMessage={createMessage}
                    conversationId={conversationId}/>
            </div>
        );
    }
}

Messages.propTypes = propTypes;

export default Messages;
