1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   
Answer: getElementById picks one element by its unique ID, getElementsByClassName grabs a collection by class name, and querySelector/querySelectorAll use CSS selectors, querySelector gets the first match, querySelectorAll gets all of them.

2. How do you create and insert a new element into the DOM?
   
Answer: Creating and inserting elements is done with document.createElement('div') to make it, then parent.appendChild(element) to drop it into the page.

3. What is Event Bubbling? And how does it work?
   
Answer: Event Bubbling is like dropping a stone in water. This ripple starts at the clicked element and spreads upwards. So if clicked a button inside a div then inside a section, the click event fires on the button first, then the div, then the section, then all the way up to the document, even though only clicked the button.

4. What is Event Delegation in JavaScript? Why is it useful?
   
Answer: Event Delegation means instead of giving every child its own event listener, then put a single listener on the parent and let bubbling do the work, The parent listens on behalf of all its children, even ones that don't exist yet.

5. What is the difference between preventDefault() and stopPropagation() methods

Answer: preventDefault() stops the browser's default behavior like a form submitting or a link navigating, while stopPropagation() stops the event from bubbling up to parent elements. Actually they solve two completely different problems.
