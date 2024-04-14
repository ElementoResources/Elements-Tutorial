const runtimeUrl = window.elementoRuntimeUrl || 'https://elemento.online/lib/runtime.js'
const Elemento = await import(runtimeUrl)
const {React} = Elemento

// MainPage.js
function MainPage(props) {
    const pathWith = name => props.path + '.' + name
    const {Page, Image, TextElement, NumberInput} = Elemento.components
    const Size = Elemento.useObjectState(pathWith('Size'), new NumberInput.State({}))
    Elemento.elementoDebug(eval(Elemento.useDebugExpr()))

    return React.createElement(Page, {id: props.path},
        React.createElement(Image, {path: pathWith('Image1'), source: 'https://free-images.com/md/2b9d/bird_wildlife_sky_clouds.jpg', styles: {height: Size, width: Size}}),
        React.createElement(TextElement, {path: pathWith('Title'), styles: {fontSize: 24}}, 'Elements Tutorial App'),
        React.createElement(NumberInput, {path: pathWith('Size'), label: 'How man'}),
    )
}

// appMain.js
export default function MainApp(props) {
    const pathWith = name => 'MainApp' + '.' + name
    const {App} = Elemento.components
    const pages = {MainPage}
    const {appContext} = props
    const app = Elemento.useObjectState('app', new App.State({pages, appContext}))

    return React.createElement(App, {path: 'MainApp', },)
}
