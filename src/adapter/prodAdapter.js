export const prodAdaptFromFirestore = (doc) =>{
    const data = doc.data()

    const prodAdapt = {
        id:doc.id,
        name:data.name,
        price:data.price,
        img:data.img,
        category:data.category,
        description:data.description,
        stock:data.stock
    }

    return prodAdapt
}