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

    if (
        blogData.category === undefined ||
        Array.isArray(blogData.category) === false ||
        blogData.category.length < 1
    ) {
        return {
            isValid: false,
            message: "Category must exist, must be an array, and must have items within it"
        }
    }

    if (blogData.category.length > 10) {
        return {
            isValid: false,
            message: "Category cannot have more than 10 items"
        }
    }
    //nonStringCategory equaling blog categories that are being .filtered by .filter() function
    const nonStringCategory = blogData.category.filter((category) => {

        // If the callback function in .filter() returns true, then the item will be kept in the resultant array. If the callback returns false, the item will be filtered out
        if (typeof (category) !== 'string') {
            //checking if typeof category array items dont equal a sring then they get put into the variable nonStringCategory
            return true
        } else {
            //if false they are a string and aceeptible
            return false
        }
    })


    //if the nonStringCategory.length is more than 0 than the blogData.categories are invalid becuase they are not all strings
    if (nonStringCategory.length > 0) {
        return {
            isValid: false,
            message: "categories must be strings ONLY"
        }
    }

    const validCategories = [
        "Lorem",
        "ipsum",
        "dolor",
        "sit",
        "amet"
    ]

    let isArrayValid = true

    blogData.category.forEach((blogCategory) => {
        if (validCategories.includes(blogCategory) === false) {
            isArrayValid = false;
        }
    })

    if (isArrayValid === false) {
        return {
            isValid: false,
            message: "items in category must be one of the following: Lorem,ipsum,dolor,sit,amet"

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