export const Icon = ({Props}) => {
    return (
        <i className={`glyphicon glyphicon-${Props.icon} glyphicon-${Props.color || "black"} ${Props.withText && "glyphicon--with-text"}`}></i>
    )
}

export const Button = ({Props}) => {
    let iconColor
    if (Props.style === "primary" || Props.style === "cta") {
        iconColor = "white";
    } else {
        iconColor = "black";
    }

    return (
        <button className={`button  button--${Props.style || "primary"}  button--${Props.size || "default"} ${Props.iconOnly && "button--icon-only"}`} onClick={Props.onClick}>
            {Props.iconOnly && Props.icon 
            ?
                <>
                    <span className="hidden-from-view">{Props.text}</span>
                    <Icon Props={{icon: Props.icon, color: iconColor}} />
                </>
            :
            <>
            {Props.text}
            {Props.icon && <Icon Props={{icon: Props.icon, color: iconColor, withText: true}} />}
            </>}
        </button>
    )
}
