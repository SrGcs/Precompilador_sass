/*==  DRAG AND DROP ==*/

const dropItems = document.getElementById('drop-items');

new Sortable(dropItems, {
	multiDrag: true, // Enable multi-drag
	selectedClass: 'selected', // The class applied to the selected items
	fallbackTolerance: 3, // So that we can select items on mobile
	animation: 150
});