import React, {createContext, useReducer, useState} from 'react'

export const ImageContext = createContext()

export default function ImageProvider({children}) {

    const initialState = [
        {
            title: "Reprehenderit nisi nulla duis incididunt laboris esse ea aliquip occaecat.",
            description: "Fugiat eu deserunt irure esse cillum enim culpa ut consectetur consequat reprehenderit cillum voluptate incididunt. Mollit nulla adipisicing esse in Lorem amet duis dolore commodo. Quis sint nostrud voluptate elit."
        },
        {
            title: "Ad proident incididunt ut duis ipsum commodo nulla tempor adipisicing.",
            description: "Proident elit esse anim duis veniam velit reprehenderit Lorem minim qui. Eu aute consequat quis voluptate veniam. Nisi occaecat voluptate nisi anim culpa. Magna mollit anim eiusmod non tempor ullamco sunt. Minim aliquip voluptate irure aute ad consectetur dolore ullamco ullamco laboris ea laboris. Nulla exercitation mollit occaecat amet Lorem tempor ad ea aliqua eu nisi. Aute officia culpa dolore proident nostrud minim sunt nostrud duis."
        },
        {
            title: "Pariatur eu anim nulla elit in non labore dolore.",
            description: "Aute non do cillum est proident laboris id aliquip magna aute. Voluptate id nostrud mollit sunt. Eiusmod nisi pariatur ea enim et tempor consectetur laboris cillum exercitation eiusmod. Lorem sunt eu sint ut veniam."
        },
    ]

    const reducer = (state, action) => {
        switch(action.type){
            case 'addImage':
                return [
                    ...state,
                    ...[{
                      title: action.payload.title,
                      description: action.payload.description
                    }]
                  ]
            case 'deleteImage':
                const tempState = [...state]
                tempState.splice(action.payload.index, 1)
                return tempState
            default:
                return state

        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ImageContext.Provider value={{state, dispatch}}>
        {children}
    </ImageContext.Provider>
  )
}
