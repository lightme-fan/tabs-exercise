const tabs = document.querySelector('.tabs');
const tabButton = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

const handleTabClick = (event) => {
    tabPanels.forEach(panel => {
        panel.hidden = true;    
    }); 

    tabButton.forEach(tab => {
        tab.setAttribute('aria-selected', false);
    });

    event.currentTarget.setAttribute('aria-selected', true);

    const { id } = event.currentTarget;

    /* METHOD 1
    const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
    console.log(tabPanel);

    tabPanel.hidden = false;
    */

    // METHOD 2
    const tabPanel = tabPanels.find(pannel => pannel.getAttribute('aria-labelledby') === id);
    tabPanel.hidden = false; 
}

tabButton.forEach(button => button.addEventListener('click', handleTabClick));