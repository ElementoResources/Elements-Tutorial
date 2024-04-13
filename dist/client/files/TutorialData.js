export default function TutorialData() {
    return data
}

const imageUrl = 'https://free-images.com/md/2b9d/bird_wildlife_sky_clouds.jpg'
const data = {
    title: 'Working with Elements',
    sections: [
        {
            id: 'intro',
            title: 'Introduction',
            startText: `Hi - if you want to learn all about using basic Elements in an Elemento application, this is the place to start.  
            
            You don't need any previous experience of Elemento - we will lead you through in very simple steps.
            
            You will learn:
                        `,
            steps: [
                {text: 'What Elements are'},
                {text: 'How to add, move, copy, delete Elements'},
                {text: 'How to set Elements up to look and act as you want'},
            ],
            endText: `Click on any section in the list on the left to move around the tutorial, or click the Next button at the end of each section.
            
            The "Show Me" links will demonstrate how to do something - but see if you can work it out for yourself first!  
            
            You can undo any changes with Control-Z (Command-Z on Mac) or the Undo option on the Edit menu.
            
            If you are the type who would like to do some background reading, click Help at the top and look for the section called "Elements".`
        },
        {
            id: 'what',
            title: 'So what are Elements then?',
            startText: `Elements are the basic building blocks that you use to create your app.  
            Things like chunks of text, boxes to enter information, buttons or links, lists, images - all things you see in almost every website you visit.
                       
            Some examples of basic Elements:`,
            steps: [
                {text: 'Text - shows a piece of text, from a single word to a whole page'},
                {text: 'Text Input - shows an input box for entering some text'},
                {text: 'Select Input - shows a list of items to choose from'},
                {text: 'Button - carries out an action when you click on it'},
                {text: 'Image - shows a picture '},
            ],
            endText: `Elemento also has other Elements that do things in the background, like calculating and storing data, but we will leave those for other tutorials.`
        },
        {
            id: 'start',
            title: 'Start the tutorial',
            startText: `To get started, create a new Project to work in.`,
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
            id: 'insert',
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
            id: 'change_name',
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
        {
            id: 'selecting',
            title: 'Selecting an Element',
            startText: `As you work on your app, you will want to move from one Element to another to make changes.
            
            This is very simple - just click on the Element in the Navigator.  You will see the Element's properties appear in the Properties panel, and you will see the Element highlighted by an red dotted line in the Preview.
            
            If you don't see the Element, click the + symbols in the Navigator to open up Elements that contain others (such as Pages). 
            (When your Project gets much bigger you can also click the - symbols to close up parts of Navigator tree).`,
            steps: [
                {text: `Click on few things in the Navigator to see what happens`}
            ],
            endText: `Advanced tip: if you want to select more than one Element, hold down the Control key (Command on Mac) while you click.`,
        },
        {
            id: 'set_properties',
            title: 'Setting the Element Properties',
            startText: `Each Element has properties (or settings) that adjust what how it appears and what it does.  
            You will usually need to change at least one or two of these. 
             
            The purpose of many properties will be obvious, but if you need to know more, click Help and head to the Elements Reference section.
            
            Try changing some properties now on the Quantity Element you have just inserted:`,
            steps: [
                {
                    text: 'Click on the Quantity element to select it',
                    action: {command: 'Click', arguments: ['treeItem', 'Quantity']}
                },
                {
                    text: 'Enter a new value in the Label property (such as "How many?"), and see the name of the Quantity box on the Preview change.',
                    action: {command: 'SetValue', arguments: ['propertyField', 'Label', 'How many?']}
                },
                {
                    text: `Enter a number in the Initial Value property (such as 20), and see this displayed on the Quantity box on the Preview.
                    Note that if you have already typed something into this box, that will override the Initial Value`,
                    action: {command: 'SetValue', arguments: ['propertyField', 'Initial Value', '20']}
                },
                {
                    text: `Set the Read Only property to Yes, and see that you can no longer type in the Quantity box.`,
                    action: {command: 'SetValue', arguments: ['propertyField', 'Read Only', 'Yes']}
                },
            ],
            endText: `If you want to undo any of these changes, click in the Properties panel and use the Undo command - Control-Z (Command-Z on Mac)`,
        },
        {
            id: 'insert_before',
            title: 'Insert an Element before another',
            startText: `This is how to insert a new element in your Project before another one`,
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
                    text: 'Click the Before option at the left of the menu',
                    action: {command: 'Click', arguments: ['menuItem', 'Before']}
                },
                {
                    text: 'Click Image',
                    action: {command: 'Click', arguments: ['menuItem', 'Image']}
                },
                {
                    text: `You will now see a new item in the Navigator called "Image 1", but the Preview will show an empty space as you haven't told it what image to show yet.`,
                },
                {
                    text: `Enter the URL (web address) of an image in the Source property.  Here is one you can use: ${imageUrl}`,
                    action: {command: 'SetValue', arguments: ['propertyField', 'Source', imageUrl]}
                },
            ],
            endText:'You will now see a (quite large) image in the Preview.' ,
        },
        {
            id: 'set_styles',
            title: 'Setting the Element Styles',
            startText: `At the end of the properties you will see a long list of Styles properties. These are used to adjust the visual appearance of the Element on the page.
            
            If you have used CSS before, you will recognise the Styles properties, but if not there will soon be another tutorial on them.  
            You can also use any reference to CSS on the web - try this one: https://www.w3schools.com/cssref/index.php
             
            Lets just try changing one or two of the obvious ones so you get a feel for it.  You will need to scroll up and down the Styles properties to find them - they are all in alphabetical order.`,
            steps: [
                {
                    text: 'Click on the Image 1 element to select it',
                    action: {command: 'Click', arguments: ['treeItem', 'Image 1']}
                },
                {
                    text: 'Enter 200 in the Width property and see the size of the image on the Preview change.',
                    action: {command: 'SetValue', arguments: ['propertyField', '^Width', '200']}
                },
                {
                    text: 'Enter 200 in the Height property and see the the image become a much smaller square.',
                    action: {command: 'SetValue', arguments: ['propertyField', '^Height', '200']}
                },
                {
                    text: '(Just for fun) Enter 45deg in the Rotate property and see the the image turn through 45 degrees.',
                    action: {command: 'SetValue', arguments: ['propertyField', 'Rotate', '45deg']}
                },
            ],
            endText: ``,
        },
      {
            id: 'move',
            title: 'Moving an Element',
            startText: `You will sometimes decide an Element is in the wrong place.  You can move it by dragging and dropping it in the Navigator.
                    
                    If that is obvious to you, go ahead and try it, but if you're not sure what drag and drop means, here are the details to move Image 1 to after the Title:
            `,
            steps: [
                {
                    text: 'Click on the Image 1 element and hold down the mouse button (or keep pressing the touchpad).',
                    action: {command: 'Click', arguments: ['treeItem', 'Image 1']}
                },
                {
                    text: 'Move your mouse (or finger) slowly downwards.  ' +
                        'We can\'t show you this automatically yet.'
                },
                {
                    text: 'You will see a green highlight appear on the other Elements as you move over them.  When the highlight is on the Title element, release the mouse button.',
                },
            ],
            endText: `You should now see the Image 1 element below the Title, and the same change on the Preview.`,
        },
      {
            id: 'copy-paste',
            title: 'Copy and Paste an Element',
            startText: `Just like in other apps like spreadsheets or text documents, you can copy, cut and paste Elements.
            
            This can be useful if you want an Element similar to one you have set up in another part of your Project.
            
            You can even copy from one Project and Paste into another.
            
            Here are the steps to try it out in the tutorial Project:
            `,
            steps: [
                {
                    text: 'Click on the Image 1 element to select it.',
                    action: {command: 'Click', arguments: ['treeItem', 'Image 1']}
                },
                {
                    text: 'Click the Edit menu at the top',
                    action: {command: 'Click', arguments: ['menuButton', 'Edit']}
                },
                {
                    text: 'Click the Copy option',
                    action: {command: 'Click', arguments: ['menuItem', 'Copy']}
                },
                {
                    text: 'Click on the Quantity element to select it.',
                    action: {command: 'Click', arguments: ['treeItem', 'Quantity']}
                },
                {
                    text: 'Click the Edit menu at the top',
                    action: {command: 'Click', arguments: ['menuButton', 'Edit']}
                },
                {
                    text: 'Click the Paste After option',
                    action: {command: 'Click', arguments: ['menuItem', 'Paste After']}
                },
            ],
            endText: `You should now see another Image 1 element below the Quantity, and the same change on the Preview.
            
            You should change the name of the new pasted Element to avoid confusion and possible program errors.
            `,
        },
        {
            id: 'wrapup',
            title: 'Where to go next',
            startText: `OK - congratulations on finishing the Elements Tutorial!
            
            The other core thing you need to know to get going with Elemento is Formulas, so you may want to follow that tutorial next.
            
            Any time you want to know more about Elements, check out the Help.  There is a section called "Elements" that explains generally what they are and what they do, and another called "Elements Reference" that describes each one in detail.`,
            steps: [],
            endText: `And don't forget to just do things and experiment.  You can carry on right now in this tutorial Project, or you can just create a new Project at any time to try something out.`,
        },
    ]
}