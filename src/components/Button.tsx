import React from 'react'

interface Props {
    children: React.ReactNode
}

const Button = ({ children }: Props) => {
    return (
        <button type="button" className="mt-4 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500">
            {children}
        </button>
    )
}

export default Button