import React, { Component } from 'react';
import './EmojiVoteApp.css';

class EmojiVoteApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            emojis: [
                { id: 1, symbol: '😊', count: 0 },
                { id: 2, symbol: '😍', count: 0 },
                { id: 3, symbol: '🥳', count: 0 },
                { id: 4, symbol: '😎', count: 0 },
                { id: 5, symbol: '😢', count: 0 },
            ],
            showResults: false,
            winner: null,
        };
    }

    handleVote = (emojiId) => {
        const updatedEmojis = this.state.emojis.map((emoji) =>
            emoji.id === emojiId ? { ...emoji, count: emoji.count + 1 } : emoji
        );

        this.setState({ emojis: updatedEmojis });
    };

    handleShowResults = () => {
        const winner = this.state.emojis.reduce((prev, current) =>
            prev.count > current.count ? prev : current
        );

        this.setState({ showResults: true, winner });
    };

    handleClearResults = () => {
        this.setState({
            emojis: this.state.emojis.map((emoji) => ({ ...emoji, count: 0 })),
            showResults: false,
            winner: null,
        });
    };

    render() {
        const { emojis, showResults, winner } = this.state;

        return (
            <div className="emoji-vote-app">
                <h1>Vote for the Best Emoji</h1>
                <ul>
                    {emojis.map((emoji) => (
                        <li key={emoji.id}>
                            {emoji.symbol} - {emoji.count} votes
                            <button onClick={() => this.handleVote(emoji.id)}>Vote</button>
                        </li>
                    ))}
                </ul>
                <button className="action-button" onClick={this.handleShowResults}>
                    Show Results
                </button>
                <button className="action-button" onClick={this.handleClearResults}>
                    Clear Results
                </button>

                {showResults && (
                    <div className="winner-section">
                        <h2>Winner:</h2>
                        <div>
                            {winner.symbol} - {winner.count} votes
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default EmojiVoteApp;