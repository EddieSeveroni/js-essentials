// When I click the Set button, I want it to run a function

let elements = document.getElementsByName('cssProperty'); // Created a variable that stores the array of all the elements of cssProperty

let div = document.getElementById('modify'); // Targeting the div element

function set() 
{
    // Using a for loop to iterate each element and grab its value
    for(let index = 0; index < elements.length; index++) // Iterating through the array to target each individual select drop down
    {
        let cssProperty = elements[index].getAttribute('id'); // Taking a look at each element and get its id attribute which is the name of the cssProperty modified
        
        let cssValue = elements[index].value; // Target each select drop down and then pull out its value

        div.style[cssProperty] = cssValue; // Target the style object and start to modify the cssProperty and then set it equal to the cssValue^^
    }  
}

// Create an EventListener and link it to the Set button's routine
document.getElementById('set').addEventListener('click', set);