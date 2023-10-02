export const ACTION_TYPE = {
    ADD_IMAGE: "ADD_IMAGE",
    DELETE_IMAGE: "DELETE_IMAGE",
}

export const AddImage = (payload) => {
    return {
        type: ACTION_TYPE.ADD_IMAGE,
        payload,
    }
}

export const DeleteImage = (payload) => {
    return {
        type: ACTION_TYPE.DELETE_IMAGE,
        payload,
    }
}