const sortSelectNode = document.getElementById('sort-selection');

export default function loadSort(callbackbanana) {
    sortSelectNode.addEventListener('change', () => {
        const sortChoices = { 
            property: sortSelectNode.value
        };
        callbackbanana(sortChoices);
    });
}
