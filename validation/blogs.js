//validateBlogData equaling a validation function that validates key value pairs from the payload making sure they follow guidelines
const validateBlogData = (blogData) => {
    console.log(blogData)
    console.log(typeof (blogData.title))
// if blogdata.title equals undefined OR the type of input in the title !== a string OR the length of the title is more than 40 characters
    if (blogData.title === undefined || typeof (blogData.title) !== "string" || blogData.title.length > 40) {
        //title is required and must be a string
        return {
            isValid: false,
            message: "title is required and must be a string"
        }
    }

// if blogdata.text equals undefined OR the type of input in the text !== a string OR the length of the text is more than 40 characters
    if (blogData.text === undefined || typeof (blogData.text) !== "string" || blogData.text.length > 40) {
        //text is required and must be a string

        return {
            isValid: false,
            message: "text is required and must be a string"
        }
    }
// if blogdata.author equals undefined OR the type of input in the author !== a string OR the length of the author is more than 40 characters
    if (blogData.author === undefined || typeof (blogData.author) !== "string" || blogData.author.length > 40) {
        //author is required and must be a string

        return {
            isValid: false,
            message: "author is required and must be a string"
        }
    }

    if (blogData.category !== undefined && blogData.category.length > 0) {

    }


    return {
        isValid: true
    }

}

//exporting the validation function from this file
module.exports = {
    validateBlogData
}