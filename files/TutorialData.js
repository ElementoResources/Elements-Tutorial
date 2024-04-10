export default function TutorialData() {
    return data
}

const data = {
    title: 'Working with Elements',
    sections: [
        {
            title: 'Introduction',
            startText: `In this tutorial you will learn how to use basic Elements in an Elemento application.
                        `,
            steps: []
        },
        {
            title: 'Start the tutorial',
            startText: `To get started, create a new Project to work in.
                        `,
            steps: [
                {
                    text: 'Click the File menu at the top',
                    action: {command: 'Click', arguments: ['menuButton', 'File']}
                },
                {
                    text: 'Click New',
                    action: {command: 'Click', arguments: ['menuItem', 'New']}
                },
                {
                    text: 'Enter a name for the Project, like \'My Elements Tutorial\'',
                    action: {command: 'SetValue', arguments: ['id', 'projectName', 'My Elements Tutorial']}
                },
                {
                    text: 'Click Create',
                    action: {command: 'Click', arguments: ['button', 'Create']}
                }
            ]
        },
        {
            title: 'Insert a new Element',
            startText: `This is how to insert a new element in your Project`,
            steps: [
                {
                    text: 'Open the Main Page element to see the Title inside it',
                    action: {command: 'EnsureTreeItemsExpanded', arguments: ['Main App', 'Main Page']}
                },
                {
                    text: 'Click on the Title element to select it',
                    action: {command: 'Click', arguments: ['treeItem', 'Title']}
                },
                {
                    text: 'Click the Insert menu at the top',
                    action: {command: 'Click', arguments: ['menuButton', 'Insert']}
                },
                {
                    text: 'Click Number Input',
                    action: {command: 'Click', arguments: ['menuItem', 'Number Input']}
                },
            ],
            endText: `You will now see a new item in the Navigator called "Number Input 1". 
            The Properties Panel shows its properties, and the Preview will show a new box where you can enter a number.`,
        },
        {
            title: 'Change the Element Name',
            startText: `After you have inserted a new element, you will usually change its name to something meaningful.  
                       You can also change it later if you think of a better name.`,
            steps: [
                {
                    text: 'Click on the Number Input 1 element to select it',
                    action: {command: 'Click', arguments: ['treeItem', 'Number Input 1']}
                },
                {
                    text: 'Click the Name box at the top of the Properties panel',
                    action: {command: 'Click', arguments: ['propertyField', '^Name$']}
                },
                {
                    text: 'Enter a name that shows the purpose of this Element, like "Quantity"',
                    action: {command: 'SetValue', arguments: ['propertyField', '^Name$', 'Quantity']}
                },
                {
                    text: 'Press Enter or click elsewhere on the page to confirm the name change',
                    action: {command: 'Click', arguments: ['propertyField', '^Notes$']}
                },
            ],
            endText: `You will now see the item in the Navigator is called "Quantity", and the name of the box in the Preview will also change.`,
        },
    ]
}