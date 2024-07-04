interface IconList {
    ImageLink : string,
    Name : string
}


const TechStackLinks :IconList[] = [
    {
        Name:"ReactJs",
        ImageLink:"https://img.icons8.com/plasticine/100/react.png",
        
    },
    {
        Name:"TailwinndCSS",
        ImageLink:"https://img.icons8.com/color/48/tailwindcss.png",
    },
    {
        Name:"NodejS",
        ImageLink:"https://img.icons8.com/fluency/48/node-js.png"
    },
    {
        Name:"ExpressJs",
        ImageLink:"https://img.icons8.com/fluency/48/express-js.png"
    },
    {
        Name:"MongoDB",
        ImageLink:"https://img.icons8.com/color/48/mongodb.png"
    },
    {
        Name:"NextJs",
        ImageLink:"https://img.icons8.com/fluency/48/nextjs.png"
    },
    {
        Name:"TypeScript",
        ImageLink:"https://img.icons8.com/color/48/typescript.png"
    },
    {
        Name:"Azure",
        ImageLink:"https://img.icons8.com/fluency/48/azure-1.png"
    }
]  as const


export default TechStackLinks