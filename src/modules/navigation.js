export function toggleDiv(firstElement, secondElement) {
    const isFirstElementVisible = firstElement.style.display !== "none";
    const isSecondElementVisible = secondElement.style.display !== "none";
    
    // if firstelement is visible then switch to invisible 
    if (isFirstElementVisible === true) {
       firstElement.style.display = "none";
       secondElement.style.display = "block";
       return;
    } 
    
    if (isSecondElementVisible === true) {
        secondElement.style.display = "none";
        firstElement.style.display = "block";
        return;
    } 
};