// // db.posts.find({})
// //   .projection({})
// //   .sort({_id:-1})
// //   .limit(100)

// const blogPosts = [
//     {
//       createdAt: "2022-03-22T10:36:37.176Z",
//       title: "dicta",
//       text: "Iusto et in et. Nulla accusantium fugit. Et qui dolorem inventore soluta et veritatis. Aut ut aut non laudantium eveniet suscipit odit. Sapiente sint nihil nihil sit et molestias. In nisi omnis quas et sed aut minus aperiam ea.\n \rLaudantium quo quisquam quae. Et et quas officia perspiciatis iusto sunt sunt eaque. Quidem sit voluptas deserunt sequi magni.\n \rEst est facere cumque ipsam omnis animi. Voluptatem magnam officiis architecto possimus. Quia similique aut eos qui. Quasi quae sed aliquam.",
//       author: "Darren Abbott",
//       id: "1",
//     },
//     {
//       createdAt: "2022-03-22T15:16:56.285Z",
//       title: "ducimus",
//       text: "Placeat ea et fuga. Qui itaque quibusdam nam. Maxime nobis quam. Et laudantium sunt incidunt reiciendis.\n \rEarum aut sed omnis autem aliquam architecto corporis sint. Nostrum cumque voluptatem aperiam alias similique. Tenetur et esse omnis praesentium ipsum alias. Impedit rerum qui quia quaerat architecto mollitia est autem. Qui blanditiis earum et qui dolorum reprehenderit. Debitis est temporibus.\n \rEt nam sed. Corporis ut rerum. Ut qui dolore est dolorem ex.",
//       author: "Luke Rogahn PhD",
//       id: "2",
//     },
//     {
//       createdAt: "2022-03-21T20:09:32.298Z",
//       title: "quod",
//       text: "Accusamus nisi eos. Tenetur earum tenetur nemo. Qui voluptas temporibus repellendus maxime. Ipsum optio voluptate enim nihil. Ea et dolorem. Omnis unde perspiciatis.\n \rUt odio eaque. Harum non placeat. Eveniet molestiae in cupiditate dolor doloremque rerum eligendi aut ab.\n \rMolestias eligendi et. Nemo velit natus autem numquam atque provident et nulla. In et dolores ad nihil. Delectus quis doloremque asperiores similique. Asperiores id nam vitae nobis labore autem. Dolor aperiam provident quia consectetur aut ut.",
//       author: "Maryann Schneider",
//       id: "3",
//     },
//     {
//       createdAt: "2022-03-21T23:07:53.447Z",
//       title: "ut",
//       text: "Itaque necessitatibus repudiandae. Porro suscipit exercitationem qui atque. Perferendis suscipit debitis sint aut dignissimos nobis ut. Modi ea nihil est vel consequuntur voluptatem. In magnam delectus in eos reiciendis sit est enim eligendi. Sint dicta at.\n \rConsectetur aspernatur alias sed non explicabo blanditiis laborum fugit voluptate. Reiciendis iste aut sit natus qui et in ratione. Placeat qui in voluptatum autem nulla ratione. Commodi sit alias sint sapiente rem. Quia sapiente minus deleniti vitae.\n \rExercitationem numquam omnis maxime dolorum sed deserunt suscipit laudantium. Ad et autem voluptatem esse laudantium et. Id fuga accusamus est sapiente dicta.",
//       author: "Dr. Lorenzo Anderson",
//       id: "4",
//     },
//     {
//       createdAt: "2022-03-22T15:14:39.819Z",
//       title: "id",
//       text: "Porro officia aliquid fugiat sed reprehenderit illo amet doloribus sed. Molestiae vero et. Quae voluptates dolores. Voluptatem facere fuga. Veniam perferendis illo ut sunt earum deleniti.\n \rIusto neque dolorem esse error. Saepe et quia ut corrupti. Autem repellendus similique dolorem sunt in ipsa perferendis. Et excepturi ut voluptatem deserunt accusantium dolores aperiam cum ut.\n \rDoloremque expedita sit et voluptatem unde libero. Numquam beatae sed repellat iusto doloribus fugit tenetur. Possimus et ut adipisci harum voluptatem provident consequatur. Corporis quo aut vel itaque blanditiis illum.",
//       author: "Bobbie Dach",
//       id: "5",
//     },
//   ];


// db.posts.insertMany(blogPosts);
// const newBlog =   {
//       createdAt: new Date().getDay() ,
//       title: "Latin Is Dead",
//       text: "Accusamus nisi eos. Tenetur earum tenetur nemo. Qui voluptas temporibus repellendus maxime. Ipsum optio voluptate enim nihil. Ea et dolorem. Omnis unde perspiciatis.\n \rUt odio eaque. Harum non placeat. Eveniet molestiae in cupiditate dolor doloremque rerum eligendi aut ab.\n \rMolestias eligendi et. Nemo velit natus autem numquam atque provident et nulla. In et dolores ad nihil. Delectus quis doloremque asperiores similique. Asperiores id nam vitae nobis labore autem. Dolor aperiam provident quia consectetur aut ut.",
//       author: "CEASAR",
//       id: ObjectId() ,
//     }
// db.posts.insertOne(newBlog);
// db.posts.findOne({title:"Latin Is Dead"});
// db.posts.updateOne({title:"Latin Is Dead"},{$set:{author:"CeasarRules"}});
// db.posts.deleteOne({author:"CeasarRules"});
// db.posts.find({}).limit(100)
const findPost = (limit, skip, sortField, sortOrder, filterField, filterValue) => {
    const Plimit = limit ? limit : 50;
    const Pskip = skip ? skip : 0 ;
     const Psort = sortField && sortOrder ? {[sortField]: sortOrder} : {};
    const Pfilter = filterField && filterValue ? {[filterField]: filterValue} : {};
    
    let results = [];
    results = db.post_post.find(Pfilter).limit(limit).skip(Pskip).sort(Psort).toArray();
    return results ;
}


const postFind = (blogId) => {
    const blogById = blogId ? {id:blogId}:{};
    return db.post_post.find(blogById).toArray();
    
}


let getPostsCollectionLength = () => {
    return db.blogs50.count()
}


let blogPost = (title,text,arthor,category)  => {
    const postTitle = title ? title : "";
    const postText = text ? text :"";
    const postArthor = arthor ?  arthor :"";
    const postCategory = category ? category : "";
 
 db.post_post.insertOne({
     createdAt:new Date(),
     title:postTitle,
     text:postText,
     arthor:postArthor,
     category:postCategory,
     lastEntry:new Date(),
     id:getPostsCollectionLength() +1
 })
    
}
  
  
  let update = function(blogId, title, text, author, category){
    let getData = db.post_post.find({id:blogId}) ; 
   const postTitle = title ? title : getData.title;
   const postText = text ? text : getData.tetxt;
   const postAuthor = author ? author : getData.author;
   const postCategory = category ? category : getData.category;
   
   
    const updatePost = {
      title:postTitle,
      text:postText,
      author:postAuthor,
      category:postCategory,
    lastModified: new Date()
        
    }
    
    return db.post_post.updateOne({id:blogId,$set: { updatePost }});
      
  }
  
