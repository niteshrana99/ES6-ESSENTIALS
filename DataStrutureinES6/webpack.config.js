module.exports={
    entry:['./app/index.js'],
    output:{
        path:__dirname,
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {
                loader:'babel-loader',
                test:'/\.js$/', //include all the js files
                exclude:'/node_modules/'
            }
        ]
    },
    devServer:{
        port:3000,
        contentBase:'./build',
        inline:true//allows us to run automatic live code updating
    }
}