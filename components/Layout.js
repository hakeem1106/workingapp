const layoutStyle ={
    background: "blue"
}

const BackLayout = props =>(
    <body style ={layoutStyle}>

    {props.children}
    </body>

)

export default BackLayout