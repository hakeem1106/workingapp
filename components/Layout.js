const layoutStyle ={
    backgroundColor:  'blue'
}

const Layout = props =>(
    <div style ={layoutStyle}>

    {props.children}
    </div>

)

export default Layout