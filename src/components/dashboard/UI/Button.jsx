export default function Button({children, disabled, className}) {

    const classes = `${className} text-green-500 border-2 border-green-200 hover:text-white hover:bg-green-200 active:transition active:scale-90 p-1 rounded-lg  `
    return(
        <button className={classes} disabled={disabled}>{children}</button>
    )
}