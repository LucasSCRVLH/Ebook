export const DB_FAVORITES_KEY = '@books.favorites'
export const DB_READ_KEY = '@books.read'
export const DB_ORDER_KEY = '@books.order'

export const STORAGE_SERVICE = {
    saveFavorite: (book) => {
        let favorites = JSON.parse(localStorage.getItem(DB_FAVORITES_KEY)) || [];
        const isFavorite = favorites.some(fav => fav.title === book.title)
        
        if (isFavorite) {
            favorites = favorites.filter(fav => fav.title !== book.title)
        } else {
            favorites.push(book)
        }
    
        localStorage.setItem(DB_FAVORITES_KEY, JSON.stringify(favorites))
    },

    saveRead: (book) => {
        let favorites = JSON.parse(localStorage.getItem(DB_READ_KEY)) || [];
        const isFavorite = favorites.some(fav => fav.title === book.title)
        
        if (isFavorite) {
            favorites = favorites.filter(fav => fav.title !== book.title)
        } else {
            favorites.push(book)
        }
    
        localStorage.setItem(DB_READ_KEY, JSON.stringify(favorites))
    },

    saveOrder: (book) => {
        let favorites = JSON.parse(localStorage.getItem(DB_ORDER_KEY)) || [];
        const isFavorite = favorites.some(fav => fav.title === book.title)
        
        if (isFavorite) {
            favorites = favorites.filter(fav => fav.title !== book.title)
        } else {
            favorites.push(book)
        }
    
        localStorage.setItem(DB_ORDER_KEY, JSON.stringify(favorites))
    }
}
