import types from './types';

export function updateChatMessages(snapshot) {
    const messages = [];
    snapshot.forEach(document => {
        //console.log('documnet id ', doc.id);
        const doc = document.data();
        doc.id = document.id;
        messages.push(doc);
    });
console.log('messages in action creator ', messages);

    return {
        type: types.UPDATE_CHAT_MESSAGES,
        messages
    }
}