export function toggleComplete(itemId) {
    return {
        type: 'TOGGLE_COMPLETE',
        itemId
    }
}

export function editItem(itemId) {
    return {
        type: 'EDIT_ITEM',
        itemId
    }
}

export function cancelEditing(itemId) {
    return {
        type: 'CANCEL_EDITING',
        itemId
    }
}

export function doneEditing(itemId, newText) {
    return {
        type: 'DONE_EDITING',
        itemId,
        newText
    }
}

export function addItem(text) {
    return {
        type: 'ADD_ITEM',
        text
    }
}

export function deleteItem(itemId) {
    return {
        type: 'DELETE_ITEM',
        itemId
    }
}