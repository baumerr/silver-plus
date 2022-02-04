import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { addMessage } from '../../utils/mutations';
import { QUERY_MESSAGES } from '../../utils/queries';


const MessageForm = () => {
    const [content, setText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);

    const [addMessage, { error }] = useMutation(addMessage, {
        update(cache, { data: {addMessage } }) {
            try {
                // update the message's array cache
                // the message could possibly not exist yet, so wrap it in a try/catch
                const { messages } = cache.readQuery({ query: QUERY_MESSAGES });
                cache.writeQuery({
                    query: QUERY_MESSAGES,
                    data: { messages: [addMessage, ...messages]},
                });
            } catch (e) {
                console.error(e);
            }
        },
    });

    // update the state change based on the form input changes
    const handleChange = (event) => {
        if (event.target.value.length <= 99999) {
            setText(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    };

    // submits the form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            await addMessage({
                variables: { content },
            });

            // clear the form's values
            setText('');
            setCharacterCount(0)
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <p
            className={`m-0 ${characterCount === 99999 || error ? 'text-error' : ''}`}
            >
                Character Count: {characterCount}/99999
                {error && <span className='ml-2'>Something went wrong...</span>}
            </p>
            <form
            className='flex-row justify-center justify-space-between-md align-stretch'
            onSubmit={handleFormSubmit}
            >
                <textarea
                placeholder='Write a message to your match...'
                value={content}
                className='form-input col-12 col-md-9'
                onChange={handleChange}
                ></textarea>
                <button className='btn col-12 col-md-3' type='submit'>
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default MessageForm;