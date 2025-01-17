document.addEventListener('DOMContentLoaded', function() {
    // Track current open section
    let currentOpenWrapper = null;
    let currentOpenButton = null;

    function closeSection(wrapper, button) {
        if (!wrapper) return;
        
        wrapper.classList.remove('visible');
        wrapper.classList.add('hidden');
        wrapper.querySelectorAll('.color-block').forEach(block => {
            block.classList.remove('show');
        });
        button.classList.remove('bg-gray-200');
        button.classList.add('bg-gray-100');
    }

    function openSection(wrapper, button) {
        wrapper.classList.remove('hidden');
        wrapper.classList.add('visible');
        button.classList.remove('bg-gray-100');
        button.classList.add('bg-gray-200');
        
        setTimeout(() => {
            wrapper.querySelectorAll('.color-block').forEach(block => {
                block.classList.add('show');
            });
        }, 100);
    }

    function setupToggle(buttonId, wrapperId) {
        const button = document.getElementById(buttonId);
        const wrapper = document.getElementById(wrapperId);

        button.addEventListener('click', function() {
            // If this section is already open, close it
            if (currentOpenWrapper === wrapper) {
                closeSection(wrapper, button);
                currentOpenWrapper = null;
                currentOpenButton = null;
                return;
            }

            // Close currently open section if exists
            if (currentOpenWrapper) {
                closeSection(currentOpenWrapper, currentOpenButton);
            }

            // Open new section
            openSection(wrapper, button);
            currentOpenWrapper = wrapper;
            currentOpenButton = button;
        });
    }

    // Setup both toggle sections
    setupToggle('toggleButton', 'contentWrapper');
    setupToggle('toggleButton2', 'contentWrapper2');
    setupToggle('toggleButton3', 'contentWrapper3');
    setupToggle('toggleButton4', 'contentWrapper4');
    setupToggle('toggleButton5', 'contentWrapper5');
    setupToggle('toggleButton6', 'contentWrapper6');
    setupToggle('toggleButton7', 'contentWrapper7');
    setupToggle('toggleButton8', 'contentWrapper8');
    setupToggle('toggleButton9', 'contentWrapper9');
    setupToggle('toggleButton10', 'contentWrapper10');
    setupToggle('toggleButton11', 'contentWrapper11');
    setupToggle('toggleButton12', 'contentWrapper12');
});