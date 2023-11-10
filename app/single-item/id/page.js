import { getEmployees } from "@/lib/firebase/getItems";

async function getItem(id){
    const payload = await getEmployees()
    const employees = Object.values(payload)
    console.log(mice)
}

async function ItemPage ({params}) {
    const id= params.id
    const item = await getEmployees(id)

    return (
        <>
        <header className="text-center pt-28">
            <h2>Heading </h2>
            <p>Details</p>
        </header>

        </>
    );
}

export default ItemPage