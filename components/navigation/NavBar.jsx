import Link from "next/link"

 function NavBar ( {children}){
    return (
        <nav className="py-4 px-4  ">
            <ul className="flex justify-between gap-x-8 items-center">
                <li><Link className="text-rose-600 font-medium" href="/">
                          <figure className="flex items-center text-red-500 gap-1">
                            <figcaption className="text-sm">Home</figcaption>
                          </figure>
                    </Link></li>
                <li><Link className="text-blue-600 font-medium" href="/ProductsPage">Products</Link></li>
            </ul>
        </nav>
    )
 }



 export {NavBar}