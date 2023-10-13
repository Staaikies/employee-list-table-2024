import React from "react"

export const Icon = ({icon, color, withText}) => {
    return (
        <i className={`glyphicon glyphicon-${icon} glyphicon-${color || "black"} ${withText && "glyphicon--with-text"}`}></i>
    )
}

export const Button = ({text, onClick, type, style, size, icon, iconOnly, customClass }) => {
    let iconColor
    if (style === "primary" || style === "cta") {
        iconColor = "white";
    } else {
        iconColor = "black";
    }

    return (
        <button type={type || "button"} className={`button  button--${style || "primary"}  button--${size || "default"} ${iconOnly && "button--icon-only"} ${customClass}`} onClick={onClick}>
            {iconOnly && icon 
            ?
                <>
                    <span className="hidden-from-view">{text}</span>
                    <Icon icon={icon} color={iconColor} />
                </>
            :
            <>
            {text}
            {icon && <Icon icon={icon} color={iconColor} withText={true} />}
            </>}
        </button>
    )
}