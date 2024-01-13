import React, { useEffect, useReducer, useCallback } from 'react';
import './EmojiVoteApp.css';

const VOTE_TITLE = "Vote for the Best Emoji";
const WINNER_TITLE = "Winner:";
const emojiStyle = { fontSize: '2em' };

const initialState = {
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

const emojiReducer = (state, action) => {
    switch (action.type) {
        case 'VOTE':
            return {
                ...state,
                emojis: state.emojis.map((emoji) =>
                    emoji.id === action.payload ? { ...emoji, count: emoji.count + 1 } : emoji
                ),
            };
        case 'SHOW_RESULTS':
            const winner = state.emojis.reduce((prev, current) =>
                prev.count > current.count ? prev : current
            );
            return { ...state, showResults: true, winner };
        case 'CLEAR_RESULTS':
            localStorage.removeItem('emojiVotes');
            return { ...initialState };
        default:
            return state;
    }
};

const EmojiVoteApp = () => {
    const [state, dispatch] = useReducer(emojiReducer, initialState);

    useEffect(() => {
        const storedVotes = JSON.parse(localStorage.getItem('emojiVotes'));
        if (storedVotes) {
            dispatch({ type: 'VOTE', payload: storedVotes });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('emojiVotes', JSON.stringify(state.emojis));
    }, [state.emojis]);

    const handleVote = useCallback((emojiId) => {
        dispatch({ type: 'VOTE', payload: emojiId });
    }, []);

    const handleShowResults = useCallback(() => {
        dispatch({ type: 'SHOW_RESULTS' });
    }, []);

    const handleClearResults = useCallback(() => {
        dispatch({ type: 'CLEAR_RESULTS' });
    }, []);

    return (
        <div className="emoji-vote-app">
            <h1>{VOTE_TITLE}</h1>
            <ul>
                {state.emojis.map((emoji) => (
                    <li key={emoji.id}>
                        <span role="img" aria-label={`Emoji ${emoji.symbol}`} style={emojiStyle}>
                            {emoji.symbol}
                        </span>
                        - {emoji.count} votes
                        <button onClick={() => handleVote(emoji.id)}>Vote</button>
                    </li>
                ))}
            </ul>
            <button className="action-button" onClick={handleShowResults}>
                Show Results
            </button>
            <button className="action-button" onClick={handleClearResults}>
                Clear Results
            </button>

            {state.showResults && (
                <div className="winner-section">
                    <h2>{WINNER_TITLE}</h2>
                    <div>
                        <span role="img" aria-label={`Emoji ${state.winner.symbol}`} style={emojiStyle}>
                            {state.winner.symbol}
                        </span>
                        - {state.winner.count} votes
                    </div>
                </div>
            )}
        </div>
    );
};

export default EmojiVoteApp;