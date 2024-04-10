const runtimeUrl = window.elementoRuntimeUrl || 'https://elemento.online/lib/runtime.js'
const Elemento = await import(runtimeUrl)
const {React} = Elemento
const {importModule, importHandlers} = Elemento
const TutorialData = await import('../../files/TutorialData.js').then(...importHandlers())

// TutorialPage.js
function TutorialPage_SectionListItem(props) {
    const pathWith = name => props.path + '.' + name
    const parentPathWith = name => Elemento.parentPath(props.path) + '.' + name
    const {$item} = props
    const {TextElement} = Elemento.components
    const {Editor, Preview} = Elemento

    return React.createElement(React.Fragment, null,
        React.createElement(TextElement, {path: pathWith('SectionName')}, $item.title),
    )
}


function TutorialPage_StepsListItem(props) {
    const pathWith = name => props.path + '.' + name
    const parentPathWith = name => Elemento.parentPath(props.path) + '.' + name
    const {$item} = props
    const {Layout, TextElement, Button} = Elemento.components
    const {Editor, Preview} = Elemento
    const ShowMe_action = React.useCallback(async () => {
        await Editor[$item.action.command](...$item.action.arguments)
    }, [])

    return React.createElement(React.Fragment, null,
        React.createElement(Layout, {path: pathWith('StepLayout'), horizontal: true, wrap: false},
            React.createElement(TextElement, {path: pathWith('StepText')}, $item.text),
            React.createElement(Button, {path: pathWith('ShowMe'), content: 'Show Me', appearance: 'link', show: $item.action, action: ShowMe_action}),
    ),
    )
}


function TutorialPage(props) {
    const pathWith = name => props.path + '.' + name
    const {Page, TextElement, Data, Layout, ListElement} = Elemento.components
    const {Editor, Preview} = Elemento
    const TutData = Elemento.useObjectState(pathWith('TutData'), new Data.State({value: TutorialData()}))
    const SectionList = Elemento.useObjectState(pathWith('SectionList'), new ListElement.State({selectedItem: 0}))
    const CurrentSection = Elemento.useObjectState(pathWith('CurrentSection'), new Data.State({value: SectionList.selectedItem}))
    const StepsList = Elemento.useObjectState(pathWith('StepsList'), new ListElement.State({}))
    const CurrentStep = Elemento.useObjectState(pathWith('CurrentStep'), new Data.State({value: StepsList.selectedItem}))
    Elemento.elementoDebug(eval(Elemento.useDebugExpr()))

    return React.createElement(Page, {id: props.path},
        React.createElement(TextElement, {path: pathWith('Title'), show: false, styles: {fontSize: '20', color: '#777'}}, 'All about Elements'),
        React.createElement(Data, {path: pathWith('TutData'), display: false}),
        React.createElement(Layout, {path: pathWith('PageLayout'), horizontal: true, wrap: false, styles: {height: '100%'}},
            React.createElement(Data, {path: pathWith('CurrentSection'), display: false}),
            React.createElement(ListElement, {path: pathWith('SectionList'), itemContentComponent: TutorialPage_SectionListItem, items: TutData.sections, selectable: true, styles: {border: '1px solid lightgray', height: '100%'}}),
            React.createElement(Layout, {path: pathWith('Section'), horizontal: false, wrap: false},
            React.createElement(TextElement, {path: pathWith('SectionTitle'), styles: {fontSize: 'larger', fontWeight: 'normal'}}, CurrentSection.title),
            React.createElement(TextElement, {path: pathWith('StartText'), styles: {fontWeight: 'normal'}}, CurrentSection.startText),
            React.createElement(Data, {path: pathWith('CurrentStep'), display: false}),
            React.createElement(ListElement, {path: pathWith('StepsList'), itemContentComponent: TutorialPage_StepsListItem, items: CurrentSection.steps, selectable: true, styles: {flex: '1 0'}}),
            React.createElement(TextElement, {path: pathWith('EndText'), styles: {fontWeight: 'normal'}}, CurrentSection.endText),
    ),
    ),
    )
}

// ElementsTutorial.js
export default function ElementsTutorial(props) {
    const pathWith = name => 'ElementsTutorial' + '.' + name
    const {App} = Elemento.components
    const {Editor, Preview} = Elemento
    const pages = {TutorialPage}
    const {appContext} = props
    const app = Elemento.useObjectState('app', new App.State({pages, appContext}))
    const ElementsTutorial_startupAction = React.useCallback(async () => {
        await Editor.SetOptions({showBeforeActions: true, showWithPointer: true, delay: 250})
    }, [])

    return React.createElement(App, {path: 'ElementsTutorial', startupAction: ElementsTutorial_startupAction,},)
}
