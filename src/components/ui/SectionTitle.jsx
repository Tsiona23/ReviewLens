export default function SectionTitle({
 title,
 description
}){


return (

<div className="
text-center
max-w-3xl
mx-auto
mb-16
">


<h2 className="
text-4xl
md:text-5xl
font-bold
tracking-tight
">

{title}

</h2>


<p className="
mt-5
text-[#BDBDBD]
text-lg
">

{description}

</p>


</div>

)

}