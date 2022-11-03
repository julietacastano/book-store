import { getDocs, query, where, collection, getDoc, doc} from "firebase/firestore";
import { db } from '../../services/firebase'

export const getproducts = (categoryId) =>{
    return new Promise((resolve, reject)=> {

        const collectionRef = categoryId 
        ?  query(collection(db,'products'), where('category', '==', categoryId))
        : collection(db,'products')

        getDocs(collectionRef).then(resp => {
            const productAdapt = resp.docs.map(doc => {
                const data = doc.data()
                return {id:doc.id, ...data}
            });
            resolve(productAdapt)
            
        }).catch((error)=>{reject(error)})
    })
}

export const getProduct = (productId) =>{
    return new Promise((resolve, reject)=>{
        const docRef = doc(db,'products', productId)

        getDoc(docRef).then((resp) => {
            const data = resp.data()
            const productAdapt = {id:resp.id, ...data}
            resolve(productAdapt);
        }).catch((error)=>{reject(error)})
    })
}