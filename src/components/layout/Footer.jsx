import { Link } from "react-router-dom";


export default function Footer(){


return (

<footer

className="
border-t
border-[#2A2A2A]
mt-20
"

>


<div

className="
max-w-7xl
mx-auto
px-6
py-10
flex
flex-col
md:flex-row
justify-between
gap-6
"

>


<div>


<h3
className="
font-bold
text-xl
"
>

ReviewLens

</h3>


<p
className="
text-[#BDBDBD]
mt-3
max-w-sm
"
>

AI-powered app review summaries that help you decide what to download.

</p>


</div>




<div
className="
flex
gap-6
text-sm
text-[#BDBDBD]
"
>

<Link to="/">
Home
</Link>

<Link to="/about">
About
</Link>

<a href="https://github.com">
GitHub
</a>


</div>


</div>


<div
className="
text-center
text-sm
text-[#BDBDBD]
pb-8
"
>

© 2026 ReviewLens. All rights reserved.

</div>


</footer>

)

}