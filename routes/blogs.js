var express = require('express');
var router = express.Router();
//validatBlogData being imported from  what was exported from the validation/blogs.js
var {
    validateBlogData
} = require("../validation/blogs")

const sampleBlogs = [{
        title: "dicta",
        text: "Iusto et in et. Nulla accusantium fugit. Et qui dolorem inventore soluta et veritatis. Aut ut aut non laudantium eveniet suscipit odit. Sapiente sint nihil nihil sit et molestias. In nisi omnis quas et sed aut minus aperiam ea.\n \rLaudantium quo quisquam quae. Et et quas officia perspiciatis iusto sunt sunt eaque. Quidem sit voluptas deserunt sequi magni.\n \rEst est facere cumque ipsam omnis animi. Voluptatem magnam officiis architecto possimus. Quia similique aut eos qui. Quasi quae sed aliquam.",
        author: "Darren Abbott",
        category: ["Lorem", "sit", "amet"],
        createdAt: "2022-03-22T10:36:37.176Z",
        lastModified: "2022-03-22T10:36:37.176Z",
    },
    {
        title: "ducimus",
        text: "Placeat ea et fuga. Qui itaque quibusdam nam. Maxime nobis quam. Et laudantium sunt incidunt reiciendis.\n \rEarum aut sed omnis autem aliquam architecto corporis sint. Nostrum cumque voluptatem aperiam alias similique. Tenetur et esse omnis praesentium ipsum alias. Impedit rerum qui quia quaerat architecto mollitia est autem. Qui blanditiis earum et qui dolorum reprehenderit. Debitis est temporibus.\n \rEt nam sed. Corporis ut rerum. Ut qui dolore est dolorem ex.",
        author: "Luke Rogahn PhD",
        category: ["Lorem", "ipsum"],
        createdAt: "2022-03-22T15:16:56.285Z",
        lastModified: "2022-03-22T15:16:56.285Z",
    },
    {
        title: "quod",
        text: "Accusamus nisi eos. Tenetur earum tenetur nemo. Qui voluptas temporibus repellendus maxime. Ipsum optio voluptate enim nihil. Ea et dolorem. Omnis unde perspiciatis.\n \rUt odio eaque. Harum non placeat. Eveniet molestiae in cupiditate dolor doloremque rerum eligendi aut ab.\n \rMolestias eligendi et. Nemo velit natus autem numquam atque provident et nulla. In et dolores ad nihil. Delectus quis doloremque asperiores similique. Asperiores id nam vitae nobis labore autem. Dolor aperiam provident quia consectetur aut ut.",
        author: "Maryann Schneider",
        category: ["Lorem", "ipsum", "dolor", "sit", "amet"],
        createdAt: "2022-03-21T20:09:32.298Z",
        lastModified: "2022-03-21T20:09:32.298Z",
    },
    {
        title: "ut",
        text: "Itaque necessitatibus repudiandae. Porro suscipit exercitationem qui atque. Perferendis suscipit debitis sint aut dignissimos nobis ut. Modi ea nihil est vel consequuntur voluptatem. In magnam delectus in eos reiciendis sit est enim eligendi. Sint dicta at.\n \rConsectetur aspernatur alias sed non explicabo blanditiis laborum fugit voluptate. Reiciendis iste aut sit natus qui et in ratione. Placeat qui in voluptatum autem nulla ratione. Commodi sit alias sint sapiente rem. Quia sapiente minus deleniti vitae.\n \rExercitationem numquam omnis maxime dolorum sed deserunt suscipit laudantium. Ad et autem voluptatem esse laudantium et. Id fuga accusamus est sapiente dicta.",
        author: "Dr. Lorenzo Anderson",
        category: ["ipsum", "dolor", "sit", "amet"],
        createdAt: "2022-03-21T23:07:53.447Z",
        lastModified: "2022-03-21T23:07:53.447Z",
    },
    {
        title: "id",
        text: "Porro officia aliquid fugiat sed reprehenderit illo amet doloribus sed. Molestiae vero et. Quae voluptates dolores. Voluptatem facere fuga. Veniam perferendis illo ut sunt earum deleniti.\n \rIusto neque dolorem esse error. Saepe et quia ut corrupti. Autem repellendus similique dolorem sunt in ipsa perferendis. Et excepturi ut voluptatem deserunt accusantium dolores aperiam cum ut.\n \rDoloremque expedita sit et voluptatem unde libero. Numquam beatae sed repellat iusto doloribus fugit tenetur. Possimus et ut adipisci harum voluptatem provident consequatur. Corporis quo aut vel itaque blanditiis illum.",
        author: "Bobbie Dach",
        category: ["amet"],
        createdAt: "2022-03-22T15:14:39.819Z",
        lastModified: "2022-03-22T15:14:39.819Z",
    },
];

/* GET blogs default */
router.get('/', function (req, res, next) {
    res.json({
        success: true,
        route: "blogs",
        message: "hello from the blogs default route"
    });
});

router.get('/all', function (req, res, next) {
    //response in json format of the entire sampleblogs array of objects

    res.json({
        success: true,
        blogs: sampleBlogs
    });
});

// getting a single blog title
router.get('/single/:blogTitleToGet', function (req, res, next) {
    //technically dont need this could just use req.params.blogTitleToGet
    const blogTitleToGet = req.params.blogTitleToGet
    // variable equalling to finding the index of the blogs array looking for a specific blog from the req param

    // const foundBlogIndex = sampleBlogs.findIndex((blogs) => {
    //     console.log("blogs", blogs)
    //if any of the blog objects . title equals the req.param url input
    //     if (blogs.title === blogTitleToGet) {
    //         console.log("blog found")
    //         return true
    //     } else { //else it doesnt...
    //         console.log("blog not found")
    //         return false
    //     }
    // }) //foundBlog equals a specific index in the sample blogs array that matched the req.param input url
    // const foundBlog = sampleBlogs[foundBlogIndex]

    // .find() will return the entry matching the true condition in the callback function
    const foundBlog = sampleBlogs.find((blogs) => {
        if (blogs.title === blogTitleToGet) {
            console.log("blog found")
            return true
        } else { //else it doesnt...
            console.log("blog not found")
            return false
        }
    })
    res.json({
        success: true,
        blogs: foundBlog
    });

    // const foundBlogIndex = sampleBlogs.findIndex((blogs) => {
    //     console.log("blogs", blogs)
    //if any of the blog objects . title equals the req.param url input
    //     if (blogs.title === blogTitleToGet) {
    //         console.log("blog found")
    //         return true
    //     } else {//else it doesnt...
    //         console.log("blog not found")
    //         return false
    //     }
    // })//foundBlog equals a specific index in the sample blogs array that matched the req.param input url
    // const foundBlog = sampleBlogs[foundBlogIndex]
    // res.json(foundBlog);

});

router.delete('/single/:blogTitleToDelete', function (req, res, next) {
    //not required to make this a variable could just use the req.params portion
    const blogTitleToDelete = req.params.blogTitleToDelete
    const indexOfBlog = sampleBlogs.findIndex((blogs) => {
        // return blogs.title === req.params.blogTitleToUpdate
        if (blogs.title === blogTitleToDelete) {
            console.log("blog titles match")
            return true
        } else {
            console.log("blog titles do not match")
            return false
        }
    })
    console.log(indexOfBlog)

    //if index from sampleBlog array is less than 0 than it doesnt exist in the array -1 means missing
    if (indexOfBlog < 0) {
        //if the blog was not found in the array, respond with hasBeenDeleted: false and return so that no code underneath executes
        res.json({
            hasBeenDeleted: false
        })
        return;
    }
    //remove the blog.title from the array at the index
    sampleBlogs.splice(indexOfBlog, 1)
    res.json({
        hasBeenDeleted: true
    });
});

const blogList = [];

router.post('/create-one', (req, res) => {
    //variables equalling the request body payload input
    const title = req.body.title
    const text = req.body.text
    const author = req.body.author
    const category = req.body.category
    //new object blogData equalling/bringing in the previous variables
    const blogData = {
        title,
        text,
        author,
        category,
        createdAt: new Date(),
        lastModified: new Date()
    }
    //checking the validation function with the data from the blogData object that took in body payload info from postman
    const blogDataCheck = validateBlogData(blogData)
    if (blogDataCheck.isValid === false) {
        res.json({
            success: false,
            message: blogDataCheck.message
        })
        return;
    }
    //pushing the blogData object into blogList empty array
    blogList.push(blogData)

    console.log("blogList ", blogList)

    res.json({
        success: true
    })
})

router.put('/update-one/:blogTitle', (req, res) => {
    const blogTitle = req.params.blogTitle
    const title = req.body.title
    const text = req.body.text
    const author = req.body.author
    const category = req.body.category

    const ogBlogIndex = sampleBlogs.findIndex((blogs) => {
        if (blogs.title === blogTitle) {
            console.log("blog titles match")
            return true
        } else {
            console.log("blog titles dont match")
            return false
        }
    })
    console.log("ogBlogIndex", ogBlogIndex)

    const ogBlog = sampleBlogs[ogBlogIndex]

    console.log("ogBlog", ogBlog)


    const blogData = {
        title,
        text,
        author,
        category,
        createdAt: ogBlog.createdAt,
        lastModified: new Date()
    }

    if (req.body.title == "") {
        blogData.title = ogBlog.title
    }


    if (req.body.text === "") {
        blogData.text = ogBlog.text
    }

    if (req.body.author === "") {
        blogData.author = ogBlog.author
    }

    const blogDataCheck = validateBlogData(blogData)
    if (blogDataCheck.isValid === false) {
        res.json({
            success: false,
            message: blogDataCheck.message
        })
        return;
    }
    sampleBlogs[ogBlogIndex] = blogData;
    console.log("sampleBlogs", sampleBlogs)

    res.json({
        success: true
    })

})

// Module.exports is listing the variables in this file to send to other files
module.exports = router;