document.addEventListener('DOMContentLoaded', () => {

    const switches = [
		{ id: 'price-switch', storageKey: 'priceswitch', defaultState: false },
        { id: 'image-switch', storageKey: 'imageswitch', defaultState: false },
        { id: 'soldout-switch', storageKey: 'souldoutswitch', defaultState: false },
        { id: 'vegan-switch', storageKey: 'veganswitch', defaultState: false },
    ];

    switches.forEach(sw => {
        const element = document.getElementById(sw.id);
        
        const updateSwitchState = () => {
            const value = element.checked ? "true" : "false";
            localStorage.setItem(sw.storageKey, value);
            console.log(`${sw.storageKey} changed to: ${value}`);
        };

        const storedValue = localStorage.getItem(sw.storageKey);
        
        if (storedValue === null) {
            element.checked = sw.defaultState;
            localStorage.setItem(sw.storageKey, element.checked ? "true" : "false");
            console.log(`No stored value for ${sw.storageKey}. Defaulting to: ${sw.defaultState}`);
        } else {
            element.checked = storedValue === "true";
        }
        
        element.addEventListener('change', updateSwitchState);
    });

});