// This file manages local storage functionality, allowing the game to save and retrieve user data.

const gameStorage = {
    // Save data to local storage
    saveData: function(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    },

    // Retrieve data from local storage
    getData: function(key) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    },

    // Remove data from local storage
    removeData: function(key) {
        localStorage.removeItem(key);
    },

    // Clear all data from local storage
    clearAll: function() {
        localStorage.clear();
    }
};

// Export the gameStorage object for use in other modules
export default gameStorage;