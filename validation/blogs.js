//validateBlogData equaling a validation function that validates key value pairs from the payload making sure they follow guidelines
const validateBlogData = (blogData) => {
    console.log(blogData)
    console.log(typeof (blogData.title))
    // if blogdata.title equals undefined OR the type of input in the title !== a string OR the length of the title is more than 40 characters

    if (blogData.title === undefined || typeof (blogData.title) !== "string" || blogData.title.length > 40) {
        //title is required and must be a string
        return {
            isValid: false,
            message: "title is required and must be a string and be less than 40 characters"
        }
    }

    // if blogdata.text equals undefined OR the type of input in the text !== a string OR the length of the text is more than 40 characters
    if (blogData.text === undefined || typeof (blogData.text) !== "string") {
        //text is required and must be a string

        return {
            isValid: false,
            message: "text is required and must be a string and be less than 40 characters"
        }
    }
    // if blogdata.author equals undefined OR the type of input in the author !== a string OR the length of the author is more than 40 characters
    if (blogData.author === undefined || typeof (blogData.author) !== "string" || blogData.author.length > 40) {
        //author is required and must be a string

        return {
            isValid: false,
            message: "author is required and must be a string and be less than 40 characters"
        }
    }

    if (blogData.category !== undefined && blogData.category.length > 0) {
        if (blogData.category.length > 10) {
            return {
                isValid: false,
                message: "There are too many items in the category"
            }
        }

        const nonStringCategory = blogData.category.filter((category) => {

            // If the callback function in .filter() returns true, then the item will be kept in the resultant array. If the callback returns false, the item will be filtered out
            if (typeof (category) !== 'string') {
                return true
            } else {
                return false
            }
        })

        console.log("nonStringCategory ", nonStringCategory)

        if (nonStringCategory.length > 0) {
            return {
                isValid: false,
                message: "categories must be strings ONLY"
            }
        }

    }
    return {
        isValid: true
    }

}

//exporting the validation function from this file
module.exports = {
    validateBlogData
}