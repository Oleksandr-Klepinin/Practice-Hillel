import React from 'react';
import { createRoot } from 'react-dom/client';
import EmojiVoteApp from './EmojiVoteApp';
import './index.css';
import './EmojiVoteApp.css';

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <EmojiVoteApp />
    </React.StrictMode>
);