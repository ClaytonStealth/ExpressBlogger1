const validateBlogData = (blogData) => {
    console.log(blogData)
    console.log(typeof (blogData.title))

    if (blogData.title === undefined || typeof (blogData.title) !== "string" || blogData.title.length > 40) {
        //title is required and must be a string
        return {
            isValid: false,
            message: "title is required and must be a string"
        }
    }


    if (blogData.text === undefined || typeof (blogData.text) !== "string" || blogData.text.length > 40) {
        //text is required and must be a string

        return {
            isValid: false,
            message: "text is required and must be a string"
        }
    }

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


module.exports = {
    validateBlogData
}