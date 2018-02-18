import './Conversations.scss';
import React, { Component } from 'react';
import Conversation from 'components/MainPage/Conversation';
import ItemsSearch from 'components/Core/ItemsSearch';
import PropTypes from 'prop-types';

const propTypes = {
    currentUserSmallAvatar: PropTypes.string.isRequired,
    currentUserName: PropTypes.string.isRequired,
    conversationIdShow: PropTypes.string.isRequired,
    conversations: PropTypes.array.isRequired,
    closeConversation: PropTypes.func.isRequired,
    getConversations: PropTypes.func.isRequired,
    showConversation: PropTypes.func.isRequired
};

class Conversations extends Component {
    constructor (props) {
        super(props);
    }
    componentWillMount () {
        this.props.getConversations();
    }
    onChangeItemsSearch = (user) => {
        console.log(user);
    };
    render () {
        return (
            <div className="ch-conversations-wrap">
                <header className="ch-conversations-header">
                    <div className="ch-conversations-header-wrap">
                        <div className="ch-conversations-header-user-info-wrap">
                            <img className="ch-avatar-small" src={this.props.currentUserSmallAvatar}/>
                            <div className="ch-conversations-header-user-block">
                                <div className="ch-conversations-header-username">{this.props.currentUserName}</div>
                                <div className="ch-conversations-header-status">Available</div>
                            </div>
                        </div>
                        <i className="ch-conversations-header-icon fas fa-ellipsis-h"/>
                    </div>
                    <ItemsSearch
                        onChange={this.onChangeItemsSearch}
                        multi={false}
                        backspaceRemoves={true}
                        searchable={true}
                        labelKey="name"
                        valueKey="id"
                        placeholderMessage="Search for people"
                        searchParams="search_users"
                        getOptions={() => Promise.resolve({})}/>
                </header>
                <div className="ch-conversations-container">
                    {this.props.conversations.map(conversation =>
                        <div key={conversation.id}>
                            <Conversation
                                conversation={conversation}
                                conversationIdShow={this.props.conversationIdShow}
                                showConversation={this.props.showConversation}
                                closeConversation={this.props.closeConversation}/>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

Conversations.propTypes = propTypes;

export default Conversations;