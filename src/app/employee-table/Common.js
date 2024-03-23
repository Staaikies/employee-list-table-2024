import React from "react"

export const Icon = ({icon, withText}) => {
    return (
        <i className={`glyphicon glyphicon-${icon} ${withText && "glyphicon--with-text"}`}></i>
    )
}

export const Button = ({text, onClick, type, style, size, icon, iconOnly, customClass }) => {

    return (
        <button type={type || "button"} className={`button  button--${style || "primary"}  button--${size || "default"} ${iconOnly && "button--icon-only"} ${customClass}`} onClick={onClick}>
            {iconOnly && icon 
            ?
                <>
                    <span className="hidden-from-view">{text}</span>
                    <Icon icon={icon} />
                </>
            :
                <>
                    {text}
                    {icon && <Icon icon={icon} withText={true} />}
                </>}
        </button>
    )
}